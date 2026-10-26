const SNAPS=[-123000,-10000,-8000,-5000,-4000,-3000,-2000,-1500,-1000,-700,-500,-400,-323,-300,-200,-100,-1,100,200,300,400,500,600,700,800,900,1000,1100,1200,1279,1300,1400,1492,1500,1530,1600,1650,1700,1715,1783,1800,1815,1878,1880,1900,1914,1920,1930,1938,1945,1960,1994,2000,2010];
const BASE='https://cdn.jsdelivr.net/gh/aourednik/historical-basemaps@master/geojson/';
const snapFile=y=>'world_'+(y<0?'bc'+(-y):y)+'.geojson';
const nearest=y=>SNAPS.reduce((a,b)=>Math.abs(b-y)<Math.abs(a-y)?b:a);
const fmt=y=>y<0?`${-y} BC · 西元前${-y}年`:`AD ${y} · 西元${y}年`;
const $=id=>document.getElementById(id);
const ERAS=[[-2500,'古埃及'],[-300,'古典'],[500,'中世紀早期'],[1000,'11世紀'],[1250,'13世紀'],[1450,'15世紀'],[1600,'17世紀'],[1800,'19世紀'],[1914,'1914'],[2000,'今天']];
let year=1450,landmarks=[],events=[],cache={},curSnap=null,hover=null;
const tip=(t)=>{const e=$('tip');e.textContent=t;e.hidden=!t;clearTimeout(tip.t);if(t)tip.t=setTimeout(()=>e.hidden=true,3500)};
const color=s=>{let h=0;for(const c of s||'')h=(h*31+c.charCodeAt(0))%360;return h};
const G=Globe()($('globe'))
 .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-dark.jpg')
 .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
 .backgroundImageUrl('https://unpkg.com/three-globe/example/img/night-sky.png')
 .atmosphereColor('#c9a96e').atmosphereAltitude(.18)
 .polygonAltitude(d=>d===hover?.02:.006)
 .polygonCapColor(d=>{const n=d.properties.NAME;if(!n)return'rgba(0,0,0,0)';const h=color(n);return d===hover?`hsla(${h},70%,60%,.75)`:`hsla(${h},45%,45%,.45)`})
 .polygonSideColor(()=>'rgba(201,169,110,.15)').polygonStrokeColor(()=>'#e9d7a8')
 .polygonLabel(d=>d.properties.NAME?`<b>${d.properties.NAME}</b>${d.properties.SUBJECTO&&d.properties.SUBJECTO!==d.properties.NAME?'<br><small>'+d.properties.SUBJECTO+'</small>':''}`:'')
 .onPolygonHover(d=>{hover=d;G.polygonAltitude(G.polygonAltitude())})
 .onPolygonClick(d=>{hover=d;G.polygonAltitude(G.polygonAltitude());tip(d.properties.NAME||'(unmapped)')})
 .htmlElementsData([]).htmlElement(d=>d.el)
 .ringsData([]).ringColor(()=>t=>`rgba(255,179,71,${1-t})`).ringMaxRadius(4).ringPropagationSpeed(2).ringRepeatPeriod(1200);
G.controls().autoRotate=true;G.controls().autoRotateSpeed=.25;G.pointOfView({lat:30,lng:40,altitude:2.3});
addEventListener('resize',()=>G.width(innerWidth).height(innerHeight));

async function loadBorders(){const s=nearest(year);if(s===curSnap)return;curSnap=s;$('snap').textContent=`Borders snapshot: ${s<0?-s+' BC':s} · 國界資料年份（historical-basemaps）`;$('loading').hidden=false;
 try{if(!cache[s])cache[s]=(await (await fetch(BASE+snapFile(s))).json()).features;if(curSnap===s)G.polygonsData(cache[s])}catch(e){tip('Border data failed to load')}$('loading').hidden=true}
function active(e){const end=e.year_end||e.year;return year>=e.year-50&&year<=end+50}
function mk(cls,html,fn){const el=document.createElement('div');el.className=cls;el.innerHTML=html;el.addEventListener('click',ev=>{ev.stopPropagation();fn()});el.addEventListener('touchend',ev=>{ev.preventDefault();ev.stopPropagation();fn()});return el}
function render(){ $('yearLabel').textContent=fmt(year);$('year').value=year;
 document.querySelectorAll('#eras button').forEach(b=>b.classList.toggle('on',+b.dataset.y===year));
 const lms=landmarks.filter(l=>l.built<=year&&(l.destroyed==null||l.destroyed>=year)).map(l=>({lat:l.lat,lng:l.lng,el:mk('lm',l.icon,()=>tip(`${l.icon} ${l.name} · ${l.zh} (built ${l.built<0?-l.built+' BC':l.built}${l.destroyed?', destroyed '+l.destroyed:''})`))}));
 const evs=events.filter(active);
 G.htmlElementsData([...lms,...evs.map(e=>({lat:e.lat,lng:e.lng,el:mk('ev',`<b>${e.title}</b>`,()=>openPanel(e))}))]);
 G.ringsData(evs);clearTimeout(render.t);render.t=setTimeout(loadBorders,250)}
function setYear(y){year=Math.max(-3000,Math.min(2010,Math.round(y)));render()}
$('year').oninput=e=>setYear(+e.target.value);
$('yminus').onclick=()=>setYear(year-10);$('yplus').onclick=()=>setYear(year+10);
ERAS.forEach(([y,n])=>{const b=document.createElement('button');b.textContent=n;b.dataset.y=y;b.onclick=()=>setYear(y);$('eras').append(b)});
function openPanel(e){G.controls().autoRotate=false;G.pointOfView({lat:e.lat,lng:e.lng,altitude:1.4},1000);const p=$('panel');p.hidden=false;
 p.innerHTML=`<h2>${e.title}</h2><div class="zh">${e.title_zh} · ${e.date}</div><p>${e.summary}</p><p class="zh">${e.summary_zh}</p><p><i>${e.perspective_role}</i><br><span class="zh">${e.perspective_role_zh}</span></p>
 <button class="btn" id="go">▶ Enter POV · 親身體驗</button> <button class="btn ghost" id="cl">Close</button>`;
 $('go').onclick=()=>{p.hidden=true;startPOV(e)};$('cl').onclick=()=>{p.hidden=true;G.controls().autoRotate=true}}
// ---- audio ----
let actx,amb;function ambience(kind){try{actx=actx||new (window.AudioContext||window.webkitAudioContext)();actx.resume();stopAmb();if(!kind)return;
 const buf=actx.createBuffer(1,actx.sampleRate*2,actx.sampleRate),d=buf.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;
 const src=actx.createBufferSource();src.buffer=buf;src.loop=true;const f=actx.createBiquadFilter();f.type='lowpass';f.frequency.value=kind==='waves'?500:900;
 const g=actx.createGain();g.gain.value=.05;const lfo=actx.createOscillator(),lg=actx.createGain();lfo.frequency.value=kind==='waves'?.12:.3;lg.gain.value=.035;lfo.connect(lg).connect(g.gain);
 src.connect(f).connect(g).connect(actx.destination);src.start();lfo.start();amb=[src,lfo]}catch(e){}}
function stopAmb(){if(amb){amb.forEach(n=>{try{n.stop()}catch(e){}});amb=null}}
let voice;function pickVoice(){const v=speechSynthesis.getVoices().filter(v=>/^en/i.test(v.lang));voice=v.find(v=>/Daniel|Arthur|Male|en-GB/i.test(v.name+v.lang))||v[0]}
if('speechSynthesis'in window){pickVoice();speechSynthesis.onvoiceschanged=pickVoice}
function say(t){if(!('speechSynthesis'in window))return;speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);u.lang='en-GB';if(voice)u.voice=voice;u.rate=.92;u.pitch=.9;speechSynthesis.speak(u)}
// ---- POV: arrival → guide → climax → reflection ----
let E,si,li,waiting;
function startPOV(e){E=e;si=0;li=-1;$('pov').hidden=false;$('reflect').hidden=true;$('role').textContent=`${e.perspective_role} · ${e.perspective_role_zh}`;scene()}
function scene(){const s=E.scenes[si];if(!s||s.phase==='reflection')return reflect();
 const bg=$('bg');if(s.bg)bg.style.backgroundImage=`url(${s.bg})`;bg.classList.toggle('zoom',!!s.zoom);ambience(s.ambience||null);li=-1;waiting=false;$('hot').hidden=true;
 if(s.phase==='arrival'){bg.style.opacity=0;$('sub').classList.add('off');$('caption').textContent=s.caption||E.date;$('caption').style.opacity=1;
  setTimeout(()=>{bg.style.opacity=1},800);setTimeout(()=>{$('caption').style.opacity=0},3500);$('next').textContent='Continue ▸';return}
 bg.style.opacity=1;$('caption').style.opacity=0;line()}
function line(){const s=E.scenes[si];li++;
 if(li>=s.lines.length){if(s.interaction&&!waiting){waiting=true;return hotspot(s.interaction)}si++;return scene()}
 const l=s.lines[li];$('sub').classList.remove('off');$('speaker').textContent=l.speaker;$('en').textContent=l.en;$('zh').textContent=l.zh;say(l.en)}
function hotspot(it){const h=$('hot');h.hidden=false;h.style.left=it.x+'%';h.style.top=it.y+'%';
 const verb={look:'👁 Look at',tap:'☝ Tap',follow:'👣 Follow'}[it.type];h.querySelector('span').textContent=`${verb} ${it.target} · ${it.target_zh}`;
 $('sub').classList.add('off');$('next').textContent='(do the action ↑)';
 h.onclick=()=>{h.hidden=true;$('next').textContent='Continue ▸';const bg=$('bg');
  if(it.type==='look'||it.type==='follow')bg.style.transformOrigin=`${it.x}% ${it.y}%`;if(it.type==='follow')bg.classList.add('zoom');
  si++;scene()}}
$('next').onclick=()=>{if(!$('hot').hidden)return;const s=E.scenes[si];if(s&&s.phase==='arrival'){si++;return scene()}line()};
$('replay').onclick=()=>{const l=E.scenes[si]?.lines[li];if(l)say(l.en)};
$('exit').onclick=closePOV;
function closePOV(){speechSynthesis?.cancel();stopAmb();$('pov').hidden=true;$('bg').classList.remove('zoom');$('bg').style.transformOrigin='center';G.controls().autoRotate=true}
function reflect(){speechSynthesis?.cancel();stopAmb();const r=$('reflect');r.hidden=false;const q=E.quiz;
 r.innerHTML=`<div class="card"><h2>${E.title} · ${E.title_zh}</h2><p><i>${E.date} — ${E.place}</i></p>
 <h3>Then & Now · 當時與今天</h3><div class="tn"><div><b>Then</b><br>${E.then_now.then}</div><div><b>Now</b><br>${E.then_now.now}</div></div>
 <h3>3 Facts · 知識點</h3><ol>${E.facts.map((f,i)=>`<li>${f}<br><small>${E.facts_zh[i]||''}</small></li>`).join('')}</ol>
 <h3>What happened next · 後來呢</h3><p>${E.next}</p><p><small>${E.next_zh}</small></p>
 <h3>Quiz</h3><div class="q"><p>${q.q}</p>${q.options.map((o,i)=>`<button data-i="${i}">${o}</button>`).join('')}</div>
 <h3>Sources · 來源</h3><ul>${E.sources.map(s=>`<li><a href="${s.url}" target="_blank" rel="noopener">${s.title}</a></li>`).join('')}</ul>
 <p><small>Script by ${E.author} · status: ${E.review_status} · Scene art: AI-generated illustration</small></p>
 <button class="btn" id="back">🌍 Back to globe · 回到地球</button></div>`;
 r.querySelectorAll('.q button').forEach(b=>b.onclick=()=>b.classList.add(+b.dataset.i===q.answer?'right':'wrong'));$('back').onclick=closePOV}
// ---- boot ----
(async()=>{landmarks=await (await fetch('landmarks.json')).json();const idx=await (await fetch('events/index.json')).json();
 events=await Promise.all(idx.map(f=>fetch('events/'+f).then(r=>r.json())));render()})();
window.__HG={setYear,startPOV:id=>startPOV(events.find(e=>e.id===id)),openPanel:id=>openPanel(events.find(e=>e.id===id))};
