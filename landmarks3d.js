/* Low-poly procedural landmark meshes for History Globe.
   Perf: shared materials, one template per model type, clone on demand,
   MeshLambert (no PBR/shadows), lazy build only when zoomed near. */
(function (global) {
  'use strict';
  const HG3D = {};
  let THREE = null;

  /* Shared materials — created once after THREE is ready */
  let MAT = null;
  function mats() {
    if (MAT) return MAT;
    MAT = {
      sand: new THREE.MeshLambertMaterial({ color: 0xc4b089 }),
      sandDark: new THREE.MeshLambertMaterial({ color: 0x8f7656 }),
      gold: new THREE.MeshLambertMaterial({ color: 0xe2b33c }),
      iron: new THREE.MeshLambertMaterial({ color: 0x2a2c32 }),
      void: new THREE.MeshLambertMaterial({ color: 0x0a0c12 }),
      brick: new THREE.MeshLambertMaterial({ color: 0xa86b4a }),
      marble: new THREE.MeshLambertMaterial({ color: 0xd8d2c4 }),
      copper: new THREE.MeshLambertMaterial({ color: 0x6b8f6b }),
      white: new THREE.MeshLambertMaterial({ color: 0xf0ebe0 }),
      metal: new THREE.MeshLambertMaterial({ color: 0x9aa3ad }),
      glow: new THREE.MeshLambertMaterial({ color: 0xffe08a, emissive: 0xffb020, emissiveIntensity: 0.6 }),
    };
    return MAT;
  }

  function box(mat, w, h, d, x, y, z, parent) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    m.position.set(x, y, z);
    parent.add(m);
    return m;
  }
  function cyl(mat, rt, rb, h, seg, x, y, z, parent) {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat);
    m.position.set(x, y, z);
    parent.add(m);
    return m;
  }
  function cone(mat, r, h, seg, x, y, z, parent) {
    const m = new THREE.Mesh(new THREE.ConeGeometry(r, h, seg), mat);
    m.position.set(x, y, z);
    parent.add(m);
    return m;
  }
  function sphere(mat, r, ws, hs, x, y, z, parent) {
    const m = new THREE.Mesh(new THREE.SphereGeometry(r, ws, hs), mat);
    m.position.set(x, y, z);
    parent.add(m);
    return m;
  }

  /* ---- builders (local units; scaled later) ---- */
  const builders = {
    pyramid(g) {
      const M = mats();
      cone(M.sand, 1.1, 1.6, 4, 0, 0.8, 0, g);
      box(M.sandDark, 1.3, 0.12, 1.3, 0, 0.06, 0, g);
    },
    stones(g) {
      const M = mats();
      box(M.sandDark, 1.6, 0.08, 1.6, 0, 0.04, 0, g);
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2;
        box(M.sand, 0.18, 0.55 + (i % 3) * 0.08, 0.1,
          Math.cos(a) * 0.55, 0.35, Math.sin(a) * 0.55, g);
      }
      box(M.sand, 0.7, 0.1, 0.14, 0, 0.62, 0, g);
    },
    temple(g) {
      const M = mats();
      box(M.marble, 1.8, 0.18, 1.1, 0, 0.09, 0, g);
      box(M.marble, 1.6, 0.14, 0.95, 0, 0.25, 0, g);
      for (let i = -2; i <= 2; i++) {
        for (const z of [-0.35, 0.35]) {
          cyl(M.marble, 0.07, 0.08, 0.7, 6, i * 0.28, 0.67, z, g);
        }
      }
      box(M.sandDark, 1.7, 0.12, 1.0, 0, 1.08, 0, g);
      box(M.sand, 1.5, 0.28, 0.7, 0, 1.28, 0, g);
    },
    colosseum(g) {
      const M = mats();
      // outer oval approximated with short cylinders + arches as dark boxes
      const outer = new THREE.Mesh(
        new THREE.CylinderGeometry(1.15, 1.2, 0.85, 16, 1, true),
        M.brick
      );
      outer.position.y = 0.45;
      g.add(outer);
      const inner = new THREE.Mesh(
        new THREE.CylinderGeometry(0.7, 0.75, 0.7, 12, 1, true),
        M.sandDark
      );
      inner.position.y = 0.4;
      g.add(inner);
      box(M.sandDark, 1.5, 0.08, 1.5, 0, 0.04, 0, g);
      // arcade hints
      for (let i = 0; i < 12; i++) {
        const a = (i / 12) * Math.PI * 2;
        box(M.void, 0.14, 0.22, 0.08,
          Math.cos(a) * 1.12, 0.35, Math.sin(a) * 1.12, g);
      }
      // top lip
      const lip = new THREE.Mesh(
        new THREE.CylinderGeometry(1.18, 1.18, 0.1, 16, 1, true),
        M.sandDark
      );
      lip.position.y = 0.9;
      g.add(lip);
    },
    dome(g) {
      const M = mats();
      box(M.sand, 1.4, 0.35, 1.4, 0, 0.18, 0, g);
      box(M.sandDark, 1.0, 0.45, 1.0, 0, 0.55, 0, g);
      sphere(M.gold, 0.55, 12, 8, 0, 1.05, 0, g);
      // half-sphere look: hide bottom with overlapping box? keep full low sphere
      cone(M.gold, 0.08, 0.35, 6, 0, 1.7, 0, g);
      // minarets / corner towers
      for (const [x, z] of [[-0.7, -0.7], [0.7, -0.7], [-0.7, 0.7], [0.7, 0.7]]) {
        cyl(M.sand, 0.08, 0.1, 1.1, 6, x, 0.55, z, g);
        cone(M.gold, 0.1, 0.25, 4, x, 1.2, z, g);
      }
    },
    keep(g) {
      const M = mats();
      box(M.sandDark, 1.1, 1.2, 1.1, 0, 0.6, 0, g);
      box(M.sand, 1.25, 0.12, 1.25, 0, 1.26, 0, g);
      for (const [x, z] of [[-0.45, -0.45], [0.45, -0.45], [-0.45, 0.45], [0.45, 0.45]]) {
        box(M.sand, 0.22, 0.35, 0.22, x, 1.45, z, g);
      }
      box(M.void, 0.22, 0.28, 0.06, 0, 0.7, 0.56, g);
    },
    castle(g) {
      const M = mats();
      box(M.sandDark, 1.6, 0.55, 1.1, 0, 0.28, 0, g);
      box(M.sand, 0.7, 1.0, 0.7, 0, 0.85, 0, g);
      for (const x of [-0.7, 0.7]) {
        box(M.sand, 0.35, 0.85, 0.35, x, 0.7, 0.4, g);
        box(M.sandDark, 0.4, 0.1, 0.4, x, 1.15, 0.4, g);
      }
      cone(M.brick, 0.25, 0.4, 4, 0, 1.5, 0, g);
    },
    clocktower(g) {
      /* Simplified Elizabeth Tower — reuse demo palette, far fewer polys */
      const M = mats();
      box(M.sandDark, 0.95, 0.22, 0.95, 0, 0.11, 0, g);
      box(M.gold, 0.98, 0.04, 0.98, 0, 0.24, 0, g);
      // shaft
      box(M.sand, 0.72, 1.55, 0.72, 0, 1.05, 0, g);
      // buttresses
      for (const [x, z] of [[-0.4, -0.4], [0.4, -0.4], [-0.4, 0.4], [0.4, 0.4]]) {
        box(M.sandDark, 0.14, 1.55, 0.14, x, 1.05, z, g);
      }
      // clock stage
      box(M.sand, 0.88, 0.55, 0.88, 0, 2.05, 0, g);
      box(M.gold, 0.92, 0.04, 0.92, 0, 2.34, 0, g);
      // clock faces (emissive discs)
      for (let i = 0; i < 4; i++) {
        const a = i * Math.PI / 2;
        const face = new THREE.Mesh(
          new THREE.CircleGeometry(0.22, 12),
          M.glow
        );
        face.position.set(Math.sin(a) * 0.45, 2.05, Math.cos(a) * 0.45);
        face.rotation.y = a;
        g.add(face);
        // dark rim
        const rim = new THREE.Mesh(
          new THREE.RingGeometry(0.22, 0.26, 12),
          M.iron
        );
        rim.position.copy(face.position);
        rim.position.x += Math.sin(a) * 0.005;
        rim.position.z += Math.cos(a) * 0.005;
        rim.rotation.y = a;
        g.add(rim);
      }
      // belfry
      box(M.sandDark, 0.7, 0.4, 0.7, 0, 2.55, 0, g);
      for (let i = 0; i < 4; i++) {
        const a = i * Math.PI / 2;
        box(M.void, 0.2, 0.22, 0.06,
          Math.sin(a) * 0.36, 2.55, Math.cos(a) * 0.36, g);
      }
      // lantern + spire
      box(M.sand, 0.32, 0.22, 0.32, 0, 2.85, 0, g);
      cone(M.iron, 0.18, 0.85, 4, 0, 3.4, 0, g);
      sphere(M.gold, 0.05, 6, 4, 0, 3.85, 0, g);
    },
    cathedral(g) {
      const M = mats();
      box(M.sand, 0.7, 0.7, 1.5, 0, 0.35, 0, g);
      // twin towers
      for (const x of [-0.45, 0.45]) {
        box(M.sandDark, 0.35, 1.3, 0.35, x, 0.9, -0.55, g);
        cone(M.sand, 0.2, 0.45, 4, x, 1.75, -0.55, g);
      }
      // rose window hint
      cyl(M.glow, 0.12, 0.12, 0.05, 10, 0, 0.55, -0.76, g);
      box(M.sandDark, 0.8, 0.15, 0.8, 0, 0.78, 0.3, g);
    },
    palace(g) {
      const M = mats();
      box(M.sandDark, 2.0, 0.2, 1.2, 0, 0.1, 0, g);
      box(M.sand, 1.6, 0.55, 0.9, 0, 0.48, 0, g);
      box(M.gold, 1.7, 0.08, 1.0, 0, 0.78, 0, g);
      // roof ridge
      box(M.brick, 1.5, 0.25, 0.15, 0, 0.95, 0, g);
      for (const x of [-0.7, 0, 0.7]) {
        box(M.void, 0.18, 0.22, 0.05, x, 0.5, 0.46, g);
      }
    },
    terrace(g) {
      const M = mats();
      box(M.sandDark, 1.8, 0.15, 1.2, 0, 0.08, 0, g);
      box(M.sand, 1.4, 0.15, 0.95, 0, 0.22, 0, g);
      box(M.sandDark, 1.0, 0.15, 0.7, 0, 0.36, 0, g);
      box(M.sand, 0.6, 0.2, 0.45, 0, 0.52, 0, g);
    },
    tower(g) {
      /* Eiffel-like lattice approximation */
      const M = mats();
      box(M.metal, 1.0, 0.08, 1.0, 0, 0.04, 0, g);
      // legs
      for (const [x, z] of [[-0.35, -0.35], [0.35, -0.35], [-0.35, 0.35], [0.35, 0.35]]) {
        const leg = new THREE.Mesh(new THREE.BoxGeometry(0.08, 1.2, 0.08), M.metal);
        leg.position.set(x * 0.7, 0.65, z * 0.7);
        leg.rotation.z = -x * 0.25;
        leg.rotation.x = z * 0.25;
        g.add(leg);
      }
      box(M.metal, 0.45, 0.08, 0.45, 0, 1.2, 0, g);
      box(M.metal, 0.22, 0.9, 0.22, 0, 1.7, 0, g);
      box(M.metal, 0.12, 0.55, 0.12, 0, 2.4, 0, g);
      sphere(M.gold, 0.05, 6, 4, 0, 2.72, 0, g);
    },
    statue(g) {
      const M = mats();
      box(M.sandDark, 0.7, 0.25, 0.7, 0, 0.12, 0, g);
      box(M.copper, 0.35, 0.55, 0.25, 0, 0.55, 0, g);
      sphere(M.copper, 0.14, 8, 6, 0, 0.95, 0, g);
      // torch arm
      box(M.copper, 0.08, 0.45, 0.08, 0.28, 0.95, 0, g);
      sphere(M.glow, 0.08, 6, 4, 0.28, 1.22, 0, g);
    },
    lighthouse(g) {
      const M = mats();
      box(M.sandDark, 1.0, 0.2, 1.0, 0, 0.1, 0, g);
      box(M.sand, 0.7, 0.7, 0.7, 0, 0.55, 0, g);
      box(M.sandDark, 0.5, 0.7, 0.5, 0, 1.25, 0, g);
      cyl(M.sand, 0.22, 0.28, 0.55, 8, 0, 1.85, 0, g);
      box(M.gold, 0.4, 0.08, 0.4, 0, 2.15, 0, g);
      sphere(M.glow, 0.12, 8, 6, 0, 2.35, 0, g);
    },
    wall(g) {
      const M = mats();
      box(M.brick, 2.2, 0.45, 0.28, 0, 0.25, 0, g);
      for (let i = -2; i <= 2; i++) {
        box(M.brick, 0.28, 0.22, 0.28, i * 0.45, 0.55, 0, g);
      }
      // watchtower
      box(M.sandDark, 0.4, 0.8, 0.4, 0.9, 0.55, 0, g);
      box(M.brick, 0.45, 0.1, 0.45, 0.9, 1.0, 0, g);
    },
    gate(g) {
      const M = mats();
      box(M.brick, 1.6, 0.9, 0.35, 0, 0.45, 0, g);
      box(M.void, 0.45, 0.55, 0.4, 0, 0.35, 0, g);
      for (const x of [-0.7, 0.7]) {
        box(M.sandDark, 0.25, 1.15, 0.25, x, 0.6, 0, g);
        box(M.gold, 0.28, 0.08, 0.28, x, 1.2, 0, g);
      }
      box(M.gold, 1.5, 0.1, 0.2, 0, 0.95, 0, g);
    },
    shells(g) {
      /* Sydney Opera — overlapping shells */
      const M = mats();
      box(M.sandDark, 1.6, 0.1, 1.0, 0, 0.05, 0, g);
      for (let i = 0; i < 3; i++) {
        const shell = new THREE.Mesh(
          new THREE.SphereGeometry(0.55 - i * 0.08, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.5),
          M.white
        );
        shell.position.set(-0.35 + i * 0.35, 0.08, 0);
        shell.rotation.z = -0.35 + i * 0.1;
        g.add(shell);
      }
    },
  };

  const templates = Object.create(null);
  function template(type) {
    const key = builders[type] ? type : 'keep';
    if (!templates[key]) {
      const g = new THREE.Group();
      builders[key](g);
      templates[key] = g;
    }
    return templates[key];
  }

  /* Per-landmark live instances */
  const live = new Map(); // id -> { root, rising, t0 }

  /* Globe radius ≈ 100; keep landmarks visible but not continent-sized. */
  const SCALE = {
    pyramid: 0.42, stones: 0.32, temple: 0.36, colosseum: 0.48, dome: 0.40,
    keep: 0.36, castle: 0.38, clocktower: 0.52, cathedral: 0.44, palace: 0.40,
    terrace: 0.36, tower: 0.58, statue: 0.40, lighthouse: 0.48, wall: 0.34,
    gate: 0.36, shells: 0.42,
  };

  function makeInstance(landmark) {
    const type = landmark.model || 'keep';
    const root = new THREE.Group();
    const model = template(type).clone(true);
    const s = SCALE[type] || 1.8;
    model.scale.set(s, s, s);
    root.add(model);
    root.userData = { id: landmark.id, landmark };
    // start flat for rise
    root.scale.set(1, 0.02, 1);
    return root;
  }

  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

  let riseRaf = 0;
  function tickRise(now) {
    let any = false;
    for (const [, st] of live) {
      if (!st.rising) continue;
      const u = Math.min(1, (now - st.t0) / 1100);
      const y = easeOutCubic(u);
      st.root.scale.set(1, Math.max(0.02, y), 1);
      if (u >= 1) st.rising = false;
      else any = true;
    }
    riseRaf = any ? requestAnimationFrame(tickRise) : 0;
  }
  function ensureRiseLoop() {
    if (!riseRaf) riseRaf = requestAnimationFrame(tickRise);
  }

  /** Return Object3D for a landmark; starts rise anim if first show. */
  function getObject(landmark) {
    let st = live.get(landmark.id);
    if (!st) {
      const root = makeInstance(landmark);
      st = { root, rising: true, t0: performance.now() };
      live.set(landmark.id, st);
      ensureRiseLoop();
    }
    return st.root;
  }

  /** Drop instances not in the keep-set (free GPU when far away). */
  function prune(keepIds) {
    const keep = new Set(keepIds);
    for (const [id, st] of live) {
      if (!keep.has(id)) {
        // dispose cloned geometries? materials are shared — only dispose geos on clone
        st.root.traverse(obj => {
          if (obj.geometry) obj.geometry.dispose();
        });
        live.delete(id);
      }
    }
  }

  function init(three) {
    THREE = three;
    return HG3D;
  }

  HG3D.init = init;
  HG3D.getObject = getObject;
  HG3D.prune = prune;
  HG3D.has = id => live.has(id);
  HG3D.replayRise = function (id) {
    const st = live.get(id);
    if (!st) return;
    st.root.scale.set(1, 0.02, 1);
    st.rising = true;
    st.t0 = performance.now();
    ensureRiseLoop();
  };

  global.HG3D = HG3D;
})(typeof window !== 'undefined' ? window : globalThis);
