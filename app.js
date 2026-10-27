const I18N={
en:{earlier:'Earlier',later:'Later',loading:'Loading borders…',replay:'↻ Replay',cont:'Continue ▸',doAct:'(do the action ↑)',snap:'Borders snapshot',fail:'Border data failed to load',built:'built',destroyed:'destroyed',enter:'▶ Enter POV',close:'Close',thenNow:'Then & Now',then:'Then',now:'Now',facts:'3 Facts',next:'What happened next',quiz:'Quiz',sources:'Sources',script:'Script by',status:'status',art:'Scene art: AI-generated illustration',back:'🌍 Back to globe',kofi:'Support on Ko-fi',look:'👁 Look at',tap:'☝ Tap',follow:'👣 Follow',bc:'BC',ad:'AD',eras:['Ancient Egypt','Classical','Early Middle Ages','11th c.','13th c.','15th c.','17th c.','19th c.','1914','Today']},
ja:{earlier:'前へ',later:'次へ',loading:'国境データを読み込み中…',replay:'↻ もう一度',cont:'続ける ▸',doAct:'（上の操作をしてください ↑）',snap:'国境データの年',fail:'国境データを読み込めませんでした',built:'建造',destroyed:'破壊',enter:'▶ 体験する',close:'閉じる',thenNow:'当時と今',then:'当時',now:'今',facts:'3つの知識',next:'その後どうなった',quiz:'クイズ',sources:'出典',script:'脚本',status:'状態',art:'場面画像：AI生成イラスト',back:'🌍 地球に戻る',kofi:'Ko-fiで支援する',look:'👁 見る',tap:'☝ タップ',follow:'👣 ついて行く',bc:'紀元前',ad:'西暦',eras:['古代エジプト','古典期','中世初期','11世紀','13世紀','15世紀','17世紀','19世紀','1914','今日']},
fr:{earlier:'Plus tôt',later:'Plus tard',loading:'Chargement des frontières…',replay:'↻ Rejouer',cont:'Continuer ▸',doAct:'(faites l’action ↑)',snap:'Frontières de',fail:'Échec du chargement des frontières',built:'construit',destroyed:'détruit',enter:'▶ Vivre la scène',close:'Fermer',thenNow:'Hier et aujourd’hui',then:'Hier',now:'Aujourd’hui',facts:'3 faits',next:'Et ensuite',quiz:'Quiz',sources:'Sources',script:'Scénario',status:'statut',art:'Illustration générée par IA',back:'🌍 Retour au globe',kofi:'Soutenir sur Ko-fi',look:'👁 Regarder',tap:'☝ Toucher',follow:'👣 Suivre',bc:'av. J.-C.',ad:'',eras:['Égypte antique','Antiquité classique','Haut Moyen Âge','XIe s.','XIIIe s.','XVe s.','XVIIe s.','XIXe s.','1914','Aujourd’hui']},
de:{earlier:'Früher',later:'Später',loading:'Grenzen werden geladen…',replay:'↻ Wiederholen',cont:'Weiter ▸',doAct:'(Aktion ausführen ↑)',snap:'Grenzen-Stand',fail:'Grenzdaten konnten nicht geladen werden',built:'erbaut',destroyed:'zerstört',enter:'▶ Szene erleben',close:'Schließen',thenNow:'Damals & heute',then:'Damals',now:'Heute',facts:'3 Fakten',next:'Wie ging es weiter',quiz:'Quiz',sources:'Quellen',script:'Skript von',status:'Status',art:'Szenenbild: KI-generierte Illustration',back:'🌍 Zurück zum Globus',kofi:'Auf Ko-fi unterstützen',look:'👁 Ansehen',tap:'☝ Antippen',follow:'👣 Folgen',bc:'v. Chr.',ad:'n. Chr.',eras:['Altes Ägypten','Antike','Frühmittelalter','11. Jh.','13. Jh.','15. Jh.','17. Jh.','19. Jh.','1914','Heute']},
zh:{earlier:'較早',later:'較晚',loading:'載入國界中…',replay:'↻ 重播',cont:'繼續 ▸',doAct:'（請做上方的動作 ↑）',snap:'國界資料年份',fail:'國界資料載入失敗',built:'建於',destroyed:'毀於',enter:'▶ 親身體驗',close:'關閉',thenNow:'當時與今天',then:'當時',now:'今天',facts:'3 個知識點',next:'後來呢',quiz:'小測驗',sources:'來源',script:'劇本',status:'狀態',art:'場景圖：AI 生成插畫',back:'🌍 回到地球',kofi:'在 Ko-fi 支持',look:'👁 看',tap:'☝ 點',follow:'👣 跟著',bc:'西元前',ad:'西元',eras:['古埃及','古典','中世紀早期','11世紀','13世紀','15世紀','17世紀','19世紀','1914','今天']}};
let LANG=localStorage.getItem('hg_lang');if(!I18N[LANG])LANG='en';
const t=k=>I18N[LANG][k]??I18N.en[k];const ZH=()=>LANG==='zh';const z=s=>ZH()&&s?s:'';
const SNAPS=[-123000,-10000,-8000,-5000,-4000,-3000,-2000,-1500,-1000,-700,-500,-400,-323,-300,-200,-100,-1,100,200,300,400,500,600,700,800,900,1000,1100,1200,1279,1300,1400,1492,1500,1530,1600,1650,1700,1715,1783,1800,1815,1878,1880,1900,1914,1920,1930,1938,1945,1960,1994,2000,2010];
const BASE='https://cdn.jsdelivr.net/gh/aourednik/historical-basemaps@master/geojson/';
const snapFile=y=>'world_'+(y<0?'bc'+(-y):y)+'.geojson';
const nearest=y=>SNAPS.reduce((a,b)=>Math.abs(b-y)<Math.abs(a-y)?b:a);
const fmt=y=>LANG==='zh'?(y<0?`西元前${-y}年`:`西元${y}年`):LANG==='ja'?(y<0?`紀元前${-y}年`:`西暦${y}年`):y<0?`${-y} ${t('bc')}`:(t('ad')?`${LANG==='de'?y+' '+t('ad'):t('ad')+' '+y}`:''+y);
const $=id=>document.getElementById(id);
const ERAS=[-2500,-300,500,1000,1250,1450,1600,1800,1914,2000];
let year=1450,landmarks=[],events=[],cache={},curSnap=null;
const tip=(t)=>{const e=$('tip');e.textContent=t;e.hidden=!t;clearTimeout(tip.t);if(t)tip.t=setTimeout(()=>e.hidden=true,3500)};
const color=s=>{let h=0;for(const c of s||'')h=(h*31+c.charCodeAt(0))%360;return h};
/* Gold border glow: one country's outline as paths (no polygon re-tessellation). */
let glowFeat=null;
function simplifyRing(ring,maxPts=320){
  if(!ring||ring.length<=maxPts)return ring||[];
  const step=Math.ceil(ring.length/maxPts),out=[];
  for(let i=0;i<ring.length;i+=step)out.push(ring[i]);
  const a=ring[0],b=out[out.length-1];
  if(!b||a[0]!==b[0]||a[1]!==b[1])out.push(a);
  return out;
}
function featToPaths(feat){
  if(!feat||!feat.geometry)return[];
  const g=feat.geometry;
  const polys=g.type==='Polygon'?[g.coordinates]:g.type==='MultiPolygon'?g.coordinates:[];
  const paths=[];
  for(const poly of polys){
    const ring=simplifyRing(poly&&poly[0]);
    if(!ring||ring.length<4)continue;
    // GeoJSON [lng,lat] → path [lat,lng]
    paths.push({coords:ring.map(([lng,lat])=>[lat,lng])});
  }
  return paths;
}
function setGlow(feat){
  glowFeat=feat||null;
  const base=featToPaths(glowFeat);
  // soft outer glow + bright dashed pulse (still one country only)
  const paths=[];
  for(const p of base){
    paths.push({coords:p.coords,glow:1});
    paths.push({coords:p.coords,glow:0});
  }
  G.pathsData(paths);
}
function clearGlow(){glowFeat=null;G.pathsData([])}

const G=Globe()($('globe'))
 .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-dark.jpg')
 .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
 .backgroundImageUrl('https://unpkg.com/three-globe/example/img/night-sky.png')
 .polygonsTransitionDuration(0).atmosphereColor('#c9a96e').atmosphereAltitude(.18)
 .polygonAltitude(.006)
 .polygonCapColor(d=>{const n=d.properties&&d.properties.NAME;if(!n)return'rgba(0,0,0,0)';const h=color(n);return`hsla(${h},45%,45%,.45)`})
 .polygonSideColor(()=>'rgba(201,169,110,.15)').polygonStrokeColor(()=>'#e9d7a8')
 .polygonLabel(d=>d.properties&&d.properties.NAME?`<b>${d.properties.NAME}</b>${d.properties.SUBJECTO&&d.properties.SUBJECTO!==d.properties.NAME?'<br><small>'+d.properties.SUBJECTO+'</small>':''}`:'')
 .onPolygonHover(()=>{}) /* hover no longer rebuilds meshes */
 .onPolygonClick(d=>{
   if(!d||!d.properties||!d.properties.NAME){clearGlow();return}
   setGlow(d);tip(d.properties.NAME);
 })
 .onGlobeClick(()=>clearGlow())
 .pathsData([])
 .pathPoints('coords')
 .pathPointLat(p=>p[0]).pathPointLng(p=>p[1])
 .pathPointAlt(.01)
 .pathColor(d=>d.glow?'rgba(255,196,60,.35)':'rgba(255,220,100,.95)')
 .pathStroke(d=>d.glow?4.5:2.0)
 .pathDashLength(d=>d.glow?1:0.55)
 .pathDashGap(d=>d.glow?0:0.2)
 .pathDashAnimateTime(d=>d.glow?0:2200)
 .pathResolution(2)
 .htmlElementsData([]).htmlElement(d=>d.el)
 .ringsData([]).ringColor(()=>u=>`rgba(255,179,71,${1-u})`).ringMaxRadius(4).ringPropagationSpeed(2).ringRepeatPeriod(1200);
G.controls().autoRotate=true;G.controls().autoRotateSpeed=.25;G.pointOfView({lat:30,lng:40,altitude:2.3});
const MOB=/iPad|iPhone|iPod/.test(navigator.userAgent)||(navigator.maxTouchPoints>1&&/Mac/.test(navigator.userAgent));
G.renderer().setPixelRatio(Math.min(devicePixelRatio||1,MOB?1.5:2));
document.addEventListener('visibilitychange',()=>{if(document.hidden)G.pauseAnimation();else if($('pov').hidden)G.resumeAnimation()});
addEventListener('resize',()=>G.width(innerWidth).height(innerHeight));

async function loadBorders(){const s=nearest(year);if(s===curSnap)return;curSnap=s;$('snap').textContent=`${t('snap')}: ${fmt(s)} (historical-basemaps)`;$('loading').hidden=false;
 try{if(!cache[s])cache[s]=(await (await fetch(BASE+snapFile(s))).json()).features;if(curSnap===s){clearGlow();G.polygonsData(cache[s])}}catch(e){tip(t('fail'))}$('loading').hidden=true}
function active(e){const end=e.year_end||e.year;return year>=e.year-50&&year<=end+50}
function mk(cls,html,fn){const el=document.createElement('div');el.className=cls;el.innerHTML=html;el.addEventListener('click',ev=>{ev.stopPropagation();fn()});el.addEventListener('touchend',ev=>{ev.preventDefault();ev.stopPropagation();fn()});return el}
function render(){ $('yearLabel').textContent=fmt(year);$('year').value=year;
 document.querySelectorAll('#eras button').forEach(b=>b.classList.toggle('on',+b.dataset.y===year));
 const lms=landmarks.filter(l=>l.built<=year&&(l.destroyed==null||l.destroyed>=year)).map(l=>({lat:l.lat,lng:l.lng,el:mk('lm',l.icon,()=>tip(`${l.icon} ${ZH()?l.zh:l.name} (${t('built')} ${fmt(l.built)}${l.destroyed?', '+t('destroyed')+' '+fmt(l.destroyed):''})`))}));
 const evs=events.filter(active);
 G.htmlElementsData([...lms,...evs.map(e=>({lat:e.lat,lng:e.lng,el:mk('ev',`<b>${ZH()?e.title_zh:e.title}</b>`,()=>openPanel(e))}))]);
 G.ringsData(evs);clearTimeout(render.t);render.t=setTimeout(loadBorders,250)}
function setYear(y){year=Math.max(-3000,Math.min(2010,Math.round(y)));render()}
$('year').oninput=e=>setYear(+e.target.value);
$('yminus').onclick=()=>setYear(year-10);$('yplus').onclick=()=>setYear(year+10);
function drawEras(){$('eras').innerHTML='';ERAS.forEach((y,i)=>{const b=document.createElement('button');b.textContent=t('eras')[i];b.dataset.y=y;b.onclick=()=>setYear(y);$('eras').append(b)})}
function applyLang(){document.documentElement.lang=LANG==='zh'?'zh-Hant':LANG;$('lang').value=LANG;
 document.querySelectorAll('[data-i18n]').forEach(e=>e.textContent=t(e.dataset.i18n));document.querySelectorAll('[data-i18n-aria]').forEach(e=>e.setAttribute('aria-label',t(e.dataset.i18nAria)));
 const k=$('kofi');k.title=t('kofi');k.setAttribute('aria-label',t('kofi'));$('next').textContent=$('hot').hidden?t('cont'):t('doAct');drawEras();const c=curSnap;curSnap=null;if(c!=null){curSnap=c;$('snap').textContent=`${t('snap')}: ${fmt(c)} (historical-basemaps)`}render()}
$('lang').onchange=e=>{LANG=e.target.value;localStorage.setItem('hg_lang',LANG);applyLang()};
function openPanel(e){G.controls().autoRotate=false;G.pointOfView({lat:e.lat,lng:e.lng,altitude:1.4},1000);const p=$('panel');p.hidden=false;
 p.innerHTML=`<h2>${e.title}</h2><div class="zh">${z(e.title_zh)} ${e.date}</div><p>${e.summary}</p><p class="zh">${z(e.summary_zh)}</p><p><i>${e.perspective_role}</i><br><span class="zh">${z(e.perspective_role_zh)}</span></p>
 <button class="btn" id="go">${t('enter')}</button> <button class="btn ghost" id="cl">${t('close')}</button>`;
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
function startPOV(e){E=e;si=0;li=-1;$('pov').hidden=false;G.pauseAnimation();$('reflect').hidden=true;$('role').textContent=e.perspective_role+(ZH()?' · '+e.perspective_role_zh:'');scene()}
function scene(){const s=E.scenes[si];if(!s||s.phase==='reflection')return reflect();
 const bg=$('bg');if(s.bg)bg.style.backgroundImage=`url(${s.bg})`;bg.classList.toggle('zoom',!!s.zoom);ambience(s.ambience||null);li=-1;waiting=false;$('hot').hidden=true;
 if(s.phase==='arrival'){bg.style.opacity=0;$('sub').classList.add('off');$('caption').textContent=s.caption||E.date;$('caption').style.opacity=1;
  setTimeout(()=>{bg.style.opacity=1},800);setTimeout(()=>{$('caption').style.opacity=0},3500);$('next').textContent=t('cont');return}
 bg.style.opacity=1;$('caption').style.opacity=0;line()}
function line(){const s=E.scenes[si];li++;
 if(li>=s.lines.length){if(s.interaction&&!waiting){waiting=true;return hotspot(s.interaction)}si++;return scene()}
 const l=s.lines[li];$('sub').classList.remove('off');$('speaker').textContent=l.speaker;$('en').textContent=l.en;$('zh').textContent=z(l.zh);say(l.en)}
function hotspot(it){const h=$('hot');h.hidden=false;h.style.left=it.x+'%';h.style.top=it.y+'%';
 h.querySelector('span').textContent=`${t(it.type)} ${it.target}${ZH()?' · '+it.target_zh:''}`;
 $('sub').classList.add('off');$('next').textContent=t('doAct');
 h.onclick=()=>{h.hidden=true;$('next').textContent=t('cont');const bg=$('bg');
  if(it.type==='look'||it.type==='follow')bg.style.transformOrigin=`${it.x}% ${it.y}%`;if(it.type==='follow')bg.classList.add('zoom');
  si++;scene()}}
$('next').onclick=()=>{if(!$('hot').hidden)return;const s=E.scenes[si];if(s&&s.phase==='arrival'){si++;return scene()}line()};
$('replay').onclick=()=>{const l=E.scenes[si]?.lines[li];if(l)say(l.en)};
$('exit').onclick=closePOV;
function closePOV(){speechSynthesis?.cancel();stopAmb();$('pov').hidden=true;G.resumeAnimation();$('bg').classList.remove('zoom');$('bg').style.transformOrigin='center';G.controls().autoRotate=true}
function reflect(){speechSynthesis?.cancel();stopAmb();const r=$('reflect');r.hidden=false;const q=E.quiz;
 r.innerHTML=`<div class="card"><h2>${E.title}${ZH()?' · '+E.title_zh:''}</h2><p><i>${E.date} — ${E.place}</i></p>
 <h3>${t('thenNow')}</h3><div class="tn"><div><b>${t('then')}</b><br>${E.then_now.then}</div><div><b>${t('now')}</b><br>${E.then_now.now}</div></div>
 <h3>${t('facts')}</h3><ol>${E.facts.map((f,i)=>`<li>${f}<br><small>${z(E.facts_zh[i])}</small></li>`).join('')}</ol>
 <h3>${t('next')}</h3><p>${E.next}</p><p><small>${z(E.next_zh)}</small></p>
 <h3>${t('quiz')}</h3><div class="q"><p>${q.q}</p>${q.options.map((o,i)=>`<button data-i="${i}">${o}</button>`).join('')}</div>
 <h3>${t('sources')}</h3><ul>${E.sources.map(s=>`<li><a href="${s.url}" target="_blank" rel="noopener">${s.title}</a></li>`).join('')}</ul>
 <p><small>${t('script')} ${E.author} · ${t('status')}: ${E.review_status} · ${t('art')}</small></p>
 <button class="btn" id="back">${t('back')}</button></div>`;
 r.querySelectorAll('.q button').forEach(b=>b.onclick=()=>b.classList.add(+b.dataset.i===q.answer?'right':'wrong'));$('back').onclick=closePOV}
// ---- boot ----
(async()=>{landmarks=await (await fetch('landmarks.json')).json();const idx=await (await fetch('events/index.json')).json();
 events=await Promise.all(idx.map(f=>fetch('events/'+f).then(r=>r.json())));applyLang()})();
window.__HG={setYear,startPOV:id=>startPOV(events.find(e=>e.id===id)),openPanel:id=>openPanel(events.find(e=>e.id===id)),glow:n=>{const f=(cache[curSnap]||[]).find(x=>x.properties&&x.properties.NAME===n);if(f){setGlow(f);tip(n)}},clear:clearGlow,pov:(o,ms)=>G.pointOfView(o,ms)};
