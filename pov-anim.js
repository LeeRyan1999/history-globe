/* Lightweight canvas POV ambience — 60fps-friendly, prefers-reduced-motion aware. */
(function (global) {
  const reduced = () => !!(global.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
  let canvas, ctx, raf = 0, t0 = 0, theme = 'wind', intensity = 1, running = false;
  const particles = [];
  const MOB = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.maxTouchPoints > 1 && /Mac/.test(navigator.userAgent));
  const CAP = MOB ? 48 : 90;

  function size() {
    if (!canvas) return;
    const dpr = Math.min(global.devicePixelRatio || 1, MOB ? 2 : 2);
    const w = canvas.clientWidth || global.innerWidth;
    const h = canvas.clientHeight || global.innerHeight;
    canvas.width = Math.max(1, Math.floor(w * dpr));
    canvas.height = Math.max(1, Math.floor(h * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function seed(n) {
    particles.length = 0;
    const count = Math.min(CAP, Math.floor(n * (reduced() ? 0.25 : 1)));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random(), y: Math.random(),
        vx: (Math.random() - 0.5) * 0.002,
        vy: (Math.random() - 0.3) * 0.002,
        r: 0.4 + Math.random() * 2.2,
        a: 0.15 + Math.random() * 0.45,
        phase: Math.random() * Math.PI * 2
      });
    }
  }

  const THEMES = {
    wind: { sky: ['#1a2233', '#3a4a5c'], ground: '#2a3340', accent: 'rgba(230,220,200,', kind: 'dust' },
    smoke: { sky: ['#1c1814', '#4a3a2a'], ground: '#2a2218', accent: 'rgba(180,170,160,', kind: 'smoke' },
    siege: { sky: ['#2a1a14', '#6a3a28'], ground: '#3a2a1c', accent: 'rgba(255,180,100,', kind: 'embers' },
    sea: { sky: ['#0a1a2a', '#1a3a55'], ground: '#0c2840', accent: 'rgba(180,220,255,', kind: 'waves' },
    ships: { sky: ['#0e2438', '#2a5080'], ground: '#0a2035', accent: 'rgba(200,230,255,', kind: 'waves' },
    desert: { sky: ['#3a2818', '#c9a06a'], ground: '#8a6a3a', accent: 'rgba(255,230,180,', kind: 'dust' },
    temple: { sky: ['#1a2840', '#6a8ab0'], ground: '#3a4a58', accent: 'rgba(255,220,150,', kind: 'dust' },
    war: { sky: ['#1a1010', '#5a2020'], ground: '#2a1810', accent: 'rgba(255,120,60,', kind: 'embers' },
    city: { sky: ['#121820', '#2a3848'], ground: '#1a222c', accent: 'rgba(255,210,140,', kind: 'dust' },
    crowd: { sky: ['#1a1a22', '#3a3a48'], ground: '#22222c', accent: 'rgba(255,240,200,', kind: 'crowd' },
    night: { sky: ['#05070d', '#152038'], ground: '#0a1018', accent: 'rgba(200,220,255,', kind: 'stars' },
    industrial: { sky: ['#1a1e22', '#4a5560'], ground: '#2a3038', accent: 'rgba(160,170,180,', kind: 'smoke' }
  };

  function drawBackdrop(w, h, th, time) {
    const g = ctx.createLinearGradient(0, 0, 0, h);
    const pan = Math.sin(time * 0.00015) * 12 * intensity;
    g.addColorStop(0, th.sky[0]);
    g.addColorStop(1, th.sky[1]);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    /* horizon band */
    ctx.fillStyle = th.ground;
    ctx.globalAlpha = 0.85;
    ctx.beginPath();
    ctx.moveTo(0, h * 0.62 + pan * 0.3);
    for (let x = 0; x <= w; x += 40) {
      const y = h * 0.62 + Math.sin(x * 0.01 + time * 0.0004) * 6 + pan * 0.3;
      ctx.lineTo(x, y);
    }
    ctx.lineTo(w, h); ctx.lineTo(0, h); ctx.fill();
    ctx.globalAlpha = 1;
    /* soft sun/moon */
    const sx = w * 0.7 + pan, sy = h * 0.28;
    const rg = ctx.createRadialGradient(sx, sy, 2, sx, sy, 80);
    rg.addColorStop(0, 'rgba(255,220,160,0.55)');
    rg.addColorStop(1, 'rgba(255,200,120,0)');
    ctx.fillStyle = rg;
    ctx.fillRect(sx - 80, sy - 80, 160, 160);
  }

  function drawParticles(w, h, th, time, dt) {
    const kind = th.kind;
    for (const p of particles) {
      if (kind === 'waves') {
        p.x += 0.00035 * intensity + p.vx;
        p.y = 0.55 + Math.sin(p.x * 18 + time * 0.002 + p.phase) * 0.04 + p.y * 0.01;
      } else if (kind === 'smoke' || kind === 'embers') {
        p.y -= (0.00025 + p.r * 0.00008) * intensity;
        p.x += Math.sin(time * 0.001 + p.phase) * 0.00025;
      } else if (kind === 'stars') {
        p.a = 0.2 + Math.abs(Math.sin(time * 0.002 + p.phase)) * 0.6;
      } else if (kind === 'crowd') {
        p.x += p.vx * intensity; p.y += Math.sin(time * 0.003 + p.phase) * 0.0001;
      } else {
        p.x += (0.0004 + p.vx) * intensity;
        p.y += p.vy * 0.5;
      }
      if (p.x > 1.05) p.x = -0.05; if (p.x < -0.05) p.x = 1.05;
      if (p.y < -0.05) p.y = 1.05; if (p.y > 1.1) p.y = -0.02;
      const px = p.x * w, py = p.y * h;
      ctx.beginPath();
      if (kind === 'waves') {
        ctx.strokeStyle = th.accent + (p.a * 0.7) + ')';
        ctx.lineWidth = 1 + p.r * 0.5;
        ctx.moveTo(px, py); ctx.quadraticCurveTo(px + 12, py - 3, px + 24, py);
        ctx.stroke();
      } else if (kind === 'crowd') {
        ctx.fillStyle = th.accent + p.a + ')';
        ctx.fillRect(px, py, 2, 4 + p.r);
      } else {
        ctx.fillStyle = th.accent + p.a + ')';
        ctx.arc(px, py, p.r * (kind === 'embers' ? 1.4 : 1), 0, Math.PI * 2);
        ctx.fill();
      }
    }
    /* ships silhouette for sea/ships */
    if (kind === 'waves') {
      const sx = ((time * 0.02) % (w + 120)) - 60;
      ctx.globalAlpha = 0.55;
      ctx.fillStyle = '#0a1520';
      ctx.beginPath();
      ctx.moveTo(sx, h * 0.58); ctx.lineTo(sx + 50, h * 0.58); ctx.lineTo(sx + 40, h * 0.54);
      ctx.lineTo(sx + 28, h * 0.48); ctx.lineTo(sx + 26, h * 0.58); ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  function frame(now) {
    if (!running || !ctx) return;
    const w = canvas.clientWidth || innerWidth;
    const h = canvas.clientHeight || innerHeight;
    const th = THEMES[theme] || THEMES.wind;
    const time = now - t0;
    const dt = 16;
    ctx.clearRect(0, 0, w, h);
    drawBackdrop(w, h, th, reduced() ? 0 : time);
    if (!reduced()) drawParticles(w, h, th, time, dt);
    /* vignette */
    const vg = ctx.createRadialGradient(w / 2, h / 2, h * 0.2, w / 2, h / 2, h * 0.75);
    vg.addColorStop(0, 'rgba(0,0,0,0)');
    vg.addColorStop(1, 'rgba(0,0,0,0.55)');
    ctx.fillStyle = vg;
    ctx.fillRect(0, 0, w, h);
    raf = requestAnimationFrame(frame);
  }

  const API = {
    mount(el) {
      if (!el) return;
      canvas = document.createElement('canvas');
      canvas.id = 'povfx';
      canvas.setAttribute('aria-hidden', 'true');
      el.appendChild(canvas);
      ctx = canvas.getContext('2d', { alpha: true });
      size();
      global.addEventListener('resize', size, { passive: true });
    },
    start(name, opts) {
      theme = name || 'wind';
      intensity = (opts && opts.intensity) || 1;
      if (reduced()) intensity *= 0.2;
      seed(theme === 'stars' ? 70 : theme === 'crowd' ? 80 : 55);
      size();
      if (!running) {
        running = true; t0 = performance.now();
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(frame);
      }
    },
    setTheme(name) { theme = name || theme; seed(55); },
    stop() {
      running = false;
      cancelAnimationFrame(raf);
      if (ctx && canvas) {
        const w = canvas.clientWidth, h = canvas.clientHeight;
        ctx.clearRect(0, 0, w, h);
      }
    },
    isRunning: () => running
  };
  global.HGPovAnim = API;
})(typeof window !== 'undefined' ? window : globalThis);
