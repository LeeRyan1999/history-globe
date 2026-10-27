const I18N={
en:{earlier:'Earlier',later:'Later',loading:'Loading borders…',replay:'↻ Replay',cont:'Continue ▸',doAct:'(do the action ↑)',snap:'Borders snapshot',fail:'Border data failed to load',built:'built',destroyed:'destroyed',enter:'▶ Enter POV',close:'Close',thenNow:'Then & Now',then:'Then',now:'Now',facts:'3 Facts',next:'What happened next',quiz:'Quiz',sources:'Sources',script:'Script by',status:'status',art:'Scene art: AI-generated illustration',back:'🌍 Back to globe',kofi:'Support on Ko-fi',look:'👁 Look at',tap:'☝ Tap',follow:'👣 Follow',bc:'BC',ad:'AD',selected:'Selected',zoomHint:'Pinch to zoom — landmarks rise nearby',eras:['Ancient Egypt','Classical','Early Middle Ages','11th c.','13th c.','15th c.','17th c.','19th c.','1914','Today']},
ja:{earlier:'前へ',later:'次へ',loading:'国境データを読み込み中…',replay:'↻ もう一度',cont:'続ける ▸',doAct:'（上の操作をしてください ↑）',snap:'国境データの年',fail:'国境データを読み込めませんでした',built:'建造',destroyed:'破壊',enter:'▶ 体験する',close:'閉じる',thenNow:'当時と今',then:'当時',now:'今',facts:'3つの知識',next:'その後どうなった',quiz:'クイズ',sources:'出典',script:'脚本',status:'状態',art:'場面画像：AI生成イラスト',back:'🌍 地球に戻る',kofi:'Ko-fiで支援する',look:'👁 見る',tap:'☝ タップ',follow:'👣 ついて行く',bc:'紀元前',ad:'西暦',selected:'選択中',zoomHint:'ピンチで拡大 — 近くの建造物が立ち上がります',eras:['古代エジプト','古典期','中世初期','11世紀','13世紀','15世紀','17世紀','19世紀','1914','今日']},
fr:{earlier:'Plus tôt',later:'Plus tard',loading:'Chargement des frontières…',replay:'↻ Rejouer',cont:'Continuer ▸',doAct:'(faites l’action ↑)',snap:'Frontières de',fail:'Échec du chargement des frontières',built:'construit',destroyed:'détruit',enter:'▶ Vivre la scène',close:'Fermer',thenNow:'Hier et aujourd’hui',then:'Hier',now:'Aujourd’hui',facts:'3 faits',next:'Et ensuite',quiz:'Quiz',sources:'Sources',script:'Scénario',status:'statut',art:'Illustration générée par IA',back:'🌍 Retour au globe',kofi:'Soutenir sur Ko-fi',look:'👁 Regarder',tap:'☝ Toucher',follow:'👣 Suivre',bc:'av. J.-C.',ad:'',selected:'Sélection',zoomHint:'Pincez pour zoomer — les monuments s’élèvent',eras:['Égypte antique','Antiquité classique','Haut Moyen Âge','XIe s.','XIIIe s.','XVe s.','XVIIe s.','XIXe s.','1914','Aujourd’hui']},
de:{earlier:'Früher',later:'Später',loading:'Grenzen werden geladen…',replay:'↻ Wiederholen',cont:'Weiter ▸',doAct:'(Aktion ausführen ↑)',snap:'Grenzen-Stand',fail:'Grenzdaten konnten nicht geladen werden',built:'erbaut',destroyed:'zerstört',enter:'▶ Szene erleben',close:'Schließen',thenNow:'Damals & heute',then:'Damals',now:'Heute',facts:'3 Fakten',next:'Wie ging es weiter',quiz:'Quiz',sources:'Quellen',script:'Skript von',status:'Status',art:'Szenenbild: KI-generierte Illustration',back:'🌍 Zurück zum Globus',kofi:'Auf Ko-fi unterstützen',look:'👁 Ansehen',tap:'☝ Antippen',follow:'👣 Folgen',bc:'v. Chr.',ad:'n. Chr.',selected:'Ausgewählt',zoomHint:'Zum Zoomen kneifen — Bauwerke steigen auf',eras:['Altes Ägypten','Antike','Frühmittelalter','11. Jh.','13. Jh.','15. Jh.','17. Jh.','19. Jh.','1914','Heute']},
zh:{earlier:'較早',later:'較晚',loading:'載入國界中…',replay:'↻ 重播',cont:'繼續 ▸',doAct:'（請做上方的動作 ↑）',snap:'國界資料年份',fail:'國界資料載入失敗',built:'建於',destroyed:'毀於',enter:'▶ 親身體驗',close:'關閉',thenNow:'當時與今天',then:'當時',now:'今天',facts:'3 個知識點',next:'後來呢',quiz:'小測驗',sources:'來源',script:'劇本',status:'狀態',art:'場景圖：AI 生成插畫',back:'🌍 回到地球',kofi:'在 Ko-fi 支持',look:'👁 看',tap:'☝ 點',follow:'👣 跟著',bc:'西元前',ad:'西元',selected:'已選取',zoomHint:'雙指放大 — 附近地標會從地面升起',eras:['古埃及','古典','中世紀早期','11世紀','13世紀','15世紀','17世紀','19世紀','1914','今天']}};
let LANG=localStorage.getItem('hg_lang');if(!I18N[LANG])LANG='en';
const t=k=>I18N[LANG][k]??I18N.en[k];const ZH=()=>LANG==='zh';const z=s=>ZH()&&s?s:'';

/* Local pre-simplified snapshots only (keeps iPad fill-rate sane). */
const SNAPS=[-3000,-2000,-1000,-500,-300,-100,-1,100,300,500,700,1000,1200,1300,1400,1492,1500,1600,1700,1800,1900,1914,1945,1960,2000,2010];
const snapFile=y=>'world_'+(y<0?'bc'+(-y):y)+'.geojson';
const nearest=y=>SNAPS.reduce((a,b)=>Math.abs(b-y)<Math.abs(a-y)?b:a);
const fmt=y=>LANG==='zh'?(y<0?`西元前${-y}年`:`西元${y}年`):LANG==='ja'?(y<0?`紀元前${-y}年`:`西暦${y}年`):y<0?`${-y} ${t('bc')}`:(t('ad')?`${LANG==='de'?y+' '+t('ad'):t('ad')+' '+y}`:''+y);
const $=id=>document.getElementById(id);
const ERAS=[-2500,-300,500,1000,1250,1450,1600,1800,1914,2000];
const MOB=/iPad|iPhone|iPod/.test(navigator.userAgent)||(navigator.maxTouchPoints>1&&/Mac/.test(navigator.userAgent));

let year=1450,landmarks=[],events=[],cache={},curSnap=null;
let selName=null,selFeat=null,hoverName=null;

const tip=(msg)=>{const e=$('tip');e.textContent=msg;e.hidden=!msg;clearTimeout(tip._t);if(msg)tip._t=setTimeout(()=>e.hidden=true,3500)};
const grayOf=s=>{let h=0;for(const c of s||'')h=(h*33+c.charCodeAt(0))|0;const v=28+(Math.abs(h)%48);return `rgb(${v},${v},${v+4})`};
const centroid=f=>{if(!f||!f.geometry)return{lat:0,lng:0};let x=0,y=0,n=0;const w=c=>{if(typeof c[0]==='number'){x+=c[0];y+=c[1];n++}else for(const q of c)w(q)};w(f.geometry.coordinates);return n?{lng:x/n,lat:y/n}:{lat:0,lng:0}};

/* ---------- Globe (perf-first) ---------- */
const G=Globe()($('globe'))
 .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-dark.jpg')
 .backgroundColor('#05070d')
 .polygonsTransitionDuration(0)
 .polygonCapCurvatureResolution(1)
 .atmosphereColor('#8a7a55').atmosphereAltitude(.12)
 .polygonAltitude(.004)
 .polygonCapColor(d=>{
   const n=d.properties&&d.properties.NAME;if(!n)return'rgba(0,0,0,0)';
   if(n===selName||n===hoverName)return'rgba(255,196,60,.88)';
   return grayOf(n);
 })
 .polygonSideColor(()=>'rgba(0,0,0,0)')
 .polygonStrokeColor(d=>{
   const n=d.properties&&d.properties.NAME;
   if(n===selName||n===hoverName)return'#ffe566';
   return'rgba(160,160,160,.55)';
 })
 .onPolygonHover(d=>{
   if(MOB)return; // touch devices: tap-select only (hover is expensive + sticky)
   const n=d&&d.properties&&d.properties.NAME||null;
   if(n===hoverName)return;
   hoverName=n;
   G.polygonCapColor(G.polygonCapColor());
   G.polygonStrokeColor(G.polygonStrokeColor());
   kick();
 })
 .onPolygonClick(d=>{
   if(!d||!d.properties||!d.properties.NAME)return;
   selName=d.properties.NAME;selFeat=d;hoverName=null;
   G.polygonCapColor(G.polygonCapColor());
   G.polygonStrokeColor(G.polygonStrokeColor());
   placeMagic(d);
   tip(`${t('selected')}: ${selName}`);
   const c=centroid(d);
   G.controls().autoRotate=false;
   G.pointOfView({lat:c.lat,lng:c.lng,altitude:0.5},700);
   setTimeout(()=>{refreshPins({lat:c.lat,lng:c.lng,altitude:0.5});kick()},760);
 })
 .htmlElementsData([]).htmlElement(d=>d.el)
 .ringsData([]).ringColor(()=>u=>`rgba(255,179,71,${1-u})`).ringMaxRadius(3).ringPropagationSpeed(1.5).ringRepeatPeriod(1800);

G.controls().autoRotate=!MOB;
G.controls().autoRotateSpeed=.15;
G.controls().enableDamping=!MOB;
G.controls().dampingFactor=.08;
G.pointOfView({lat:30,lng:40,altitude:2.3});
G.renderer().setPixelRatio(Math.min(devicePixelRatio||1,MOB?1:1.5));
G.renderer().setClearColor(0x05070d,1);

/* Keep renderer alive while interacting; pause only when tab hidden or in POV. */
let rotating=!MOB;
function kick(){ /* kept as no-op-ish warm touch for callers */ 
  if($('pov').hidden) try{G.resumeAnimation()}catch(e){}
}
G.controls().addEventListener('start',()=>{rotating=false;G.controls().autoRotate=false});
G.controls().addEventListener('change',()=>{
  const p=G.pointOfView();
  if(!onViewChange._p||Math.abs(p.altitude-onViewChange._p.altitude)>0.08||Math.abs(p.lat-onViewChange._p.lat)>0.4||Math.abs(p.lng-onViewChange._p.lng)>0.4){
    onViewChange._p={lat:p.lat,lng:p.lng,altitude:p.altitude};onViewChange();
  }
});
document.addEventListener('visibilitychange',()=>{
  if(document.hidden)G.pauseAnimation();
  else if($('pov').hidden)G.resumeAnimation();
});
addEventListener('resize',()=>G.width(innerWidth).height(innerHeight));

/* ---------- Magic circle + rising landmarks (HTML, cheap) ---------- */
function magicEl(){
  const el=document.createElement('div');el.className='magic';
  el.innerHTML='<div class="r1"></div><div class="r2"></div><div class="core"></div>';
  return el;
}
function bldgEl(l){
  const type=l.model||'keep';
  const el=document.createElement('div');el.className='b3d '+type;el.title=(ZH()?l.zh:l.name);
  const tag=`<span class="tag">${ZH()?l.zh:l.name}</span>`;
  const body={
    colosseum:`${tag}<div class="oval"></div>`,
    keep:`${tag}<div class="tower block"></div>`,
    castle:`${tag}<i></i><i class="mid"></i><i></i>`,
    clocktower:`${tag}<div class="shaft"></div>`,
    pyramid:`${tag}<div class="tri"></div>`,
    dome:`${tag}<div class="cup"></div><div class="base"></div>`,
    tower:`${tag}<div class="spire"></div>`,
    temple:`${tag}<div class="podium block"></div>`,
    cathedral:`${tag}<div class="nave"></div>`,
    statue:`${tag}<div class="fig"></div><div class="plinth"></div>`,
    stones:`${tag}`,
    terrace:`${tag}<div class="step"></div><div class="step"></div><div class="step"></div>`,
    palace:`${tag}<div class="hall"></div>`
  };
  el.innerHTML=body[type]||`${tag}<div class="tower block"></div>`;
  el.addEventListener('click',ev=>{ev.stopPropagation();tip(`${l.icon||''} ${ZH()?l.zh:l.name} (${t('built')} ${fmt(l.built)})`)});
  return el;
}
function placeMagic(feat){
  selFeat=feat;refreshPins();
}
function nearbyLandmarks(pov){
  const cur=G.pointOfView();
  const alt=pov&&pov.altitude!=null?+pov.altitude:+cur.altitude;
  const lat=pov&&pov.lat!=null?+pov.lat:+cur.lat;
  const lng=pov&&pov.lng!=null?+pov.lng:+cur.lng;
  // When a country is selected, allow slightly farther camera so buildings still rise after zoom
  const maxAlt=selFeat?1.4:1.15;
  if(!(alt<=maxAlt))return[];
  const out=[];
  for(const l of landmarks){
    if(l.built>year||(l.destroyed!=null&&l.destroyed<year))continue;
    const dlat=l.lat-lat,dlng=((l.lng-lng+540)%360)-180;
    if(dlat*dlat+dlng*dlng>100)continue; // ~10°
    out.push(l);
  }
  return out;
}
function refreshPins(pov){
  const cur=G.pointOfView();
  pov={lat:pov&&pov.lat!=null?+pov.lat:+cur.lat,lng:pov&&pov.lng!=null?+pov.lng:+cur.lng,altitude:pov&&pov.altitude!=null?+pov.altitude:+cur.altitude};
  const evs=events.filter(active);
  const pins=[];
  if(selFeat){
    const c=centroid(selFeat);
    pins.push({lat:c.lat,lng:c.lng,el:magicEl()});
  }
  for(const l of nearbyLandmarks(pov)){
    pins.push({lat:l.lat,lng:l.lng,el:bldgEl(l)});
  }
  if(pov.altitude>0.7){
    for(const e of evs) pins.push({lat:e.lat,lng:e.lng,el:mk('ev',`<b>${ZH()?e.title_zh:e.title}</b>`,()=>openPanel(e))});
  }else{
    for(const e of evs) pins.push({lat:e.lat,lng:e.lng,el:mk('ev','◆',()=>openPanel(e))});
  }
  pins.forEach((p,i)=>{p.id='p'+i+'_'+((pov.altitude*100)|0)});
  try{G.htmlElementsData(pins);G.ringsData(pov.altitude>1.2?evs:[])}catch(e){console.warn('pins',e)}
}
function updateLOD(){refreshPins()}
let viewT=null;
function onViewChange(){
  clearTimeout(viewT);
  viewT=setTimeout(()=>{refreshPins();kick()},80);
}

/* ---------- Borders load (local simplified) ---------- */
async function loadBorders(){
  const s=nearest(year);if(s===curSnap)return;curSnap=s;
  $('snap').textContent=`${t('snap')}: ${fmt(s)}`;
  $('loading').hidden=false;
  try{
    if(!cache[s]){
      const r=await fetch('geojson/'+snapFile(s));
      if(!r.ok)throw new Error('missing');
      cache[s]=(await r.json()).features;
    }
    if(curSnap===s){
      // drop selection if that country no longer exists in new snapshot
      if(selName&&!(cache[s]||[]).some(f=>f.properties&&f.properties.NAME===selName)){selName=null;selFeat=null}
      else if(selName){selFeat=(cache[s]||[]).find(f=>f.properties&&f.properties.NAME===selName)||selFeat}
      hoverName=null;
      G.polygonsData(cache[s]);
      G.polygonCapColor(G.polygonCapColor());
      G.polygonStrokeColor(G.polygonStrokeColor());
      refreshPins();
    }
  }catch(e){tip(t('fail'));console.warn(e)}
  $('loading').hidden=true;kick();
}

function active(e){const end=e.year_end||e.year;return year>=e.year-50&&year<=end+50}
function mk(cls,html,fn){const el=document.createElement('div');el.className=cls;el.innerHTML=html;el.addEventListener('click',ev=>{ev.stopPropagation();fn()});el.addEventListener('touchend',ev=>{ev.preventDefault();ev.stopPropagation();fn()});return el}

function render(){
  $('yearLabel').textContent=fmt(year);$('year').value=year;
  document.querySelectorAll('#eras button').forEach(b=>b.classList.toggle('on',+b.dataset.y===year));
  clearTimeout(render._t);render._t=setTimeout(loadBorders,200);
  refreshPins();kick();
}
function setYear(y){year=Math.max(-3000,Math.min(2010,Math.round(y)));render()}
$('year').oninput=e=>setYear(+e.target.value);
$('yminus').onclick=()=>setYear(year-10);$('yplus').onclick=()=>setYear(year+10);

function drawEras(){$('eras').innerHTML='';ERAS.forEach((y,i)=>{const b=document.createElement('button');b.textContent=t('eras')[i];b.dataset.y=y;b.onclick=()=>setYear(y);$('eras').append(b)})}
function applyLang(){
  document.documentElement.lang=LANG==='zh'?'zh-Hant':LANG;$('lang').value=LANG;
  document.querySelectorAll('[data-i18n]').forEach(e=>e.textContent=t(e.dataset.i18n));
  document.querySelectorAll('[data-i18n-aria]').forEach(e=>e.setAttribute('aria-label',t(e.dataset.i18nAria)));
  const k=$('kofi');k.title=t('kofi');k.setAttribute('aria-label',t('kofi'));
  $('next').textContent=$('hot').hidden?t('cont'):t('doAct');
  drawEras();const c=curSnap;curSnap=null;if(c!=null){curSnap=c;$('snap').textContent=`${t('snap')}: ${fmt(c)}`}render();
}
$('lang').onchange=e=>{LANG=e.target.value;localStorage.setItem('hg_lang',LANG);applyLang()};

function openPanel(e){
  G.controls().autoRotate=false;rotating=false;
  G.pointOfView({lat:e.lat,lng:e.lng,altitude:1.4},1000);kick();
  const p=$('panel');p.hidden=false;
  p.innerHTML=`<h2>${e.title}</h2><div class="zh">${z(e.title_zh)} ${e.date}</div><p>${e.summary}</p><p class="zh">${z(e.summary_zh)}</p><p><i>${e.perspective_role}</i><br><span class="zh">${z(e.perspective_role_zh)}</span></p>
 <button class="btn" id="go">${t('enter')}</button> <button class="btn ghost" id="cl">${t('close')}</button>`;
  $('go').onclick=()=>{p.hidden=true;startPOV(e)};$('cl').onclick=()=>{p.hidden=true;kick()};
}

/* ---- audio / POV (unchanged behaviour) ---- */
let actx,amb;function ambience(kind){try{actx=actx||new (window.AudioContext||window.webkitAudioContext)();actx.resume();stopAmb();if(!kind)return;
 const buf=actx.createBuffer(1,actx.sampleRate*2,actx.sampleRate),d=buf.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;
 const src=actx.createBufferSource();src.buffer=buf;src.loop=true;const f=actx.createBiquadFilter();f.type='lowpass';f.frequency.value=kind==='waves'?500:900;
 const g=actx.createGain();g.gain.value=.05;const lfo=actx.createOscillator(),lg=actx.createGain();lfo.frequency.value=kind==='waves'?.12:.3;lg.gain.value=.035;lfo.connect(lg).connect(g.gain);
 src.connect(f).connect(g).connect(actx.destination);src.start();lfo.start();amb=[src,lfo]}catch(e){}}
function stopAmb(){if(amb){amb.forEach(n=>{try{n.stop()}catch(e){}});amb=null}}
let voice;function pickVoice(){const v=speechSynthesis.getVoices().filter(v=>/^en/i.test(v.lang));voice=v.find(v=>/Daniel|Arthur|Male|en-GB/i.test(v.name+v.lang))||v[0]}
if('speechSynthesis'in window){pickVoice();speechSynthesis.onvoiceschanged=pickVoice}
function say(txt){if(!('speechSynthesis'in window))return;speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(txt);u.lang='en-GB';if(voice)u.voice=voice;u.rate=.92;u.pitch=.9;speechSynthesis.speak(u)}

let E,si,li,waiting;
function startPOV(e){E=e;si=0;li=-1;$('pov').hidden=false;G.pauseAnimation();alive=false;$('reflect').hidden=true;$('role').textContent=e.perspective_role+(ZH()?' · '+e.perspective_role_zh:'');scene()}
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
function closePOV(){speechSynthesis?.cancel();stopAmb();$('pov').hidden=true;$('bg').classList.remove('zoom');$('bg').style.transformOrigin='center';kick()}
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

(async()=>{
  landmarks=await (await fetch('landmarks.json')).json();
  const idx=await (await fetch('events/index.json')).json();
  events=await Promise.all(idx.map(f=>fetch('events/'+f).then(r=>r.json())));
  applyLang();
})();
window.__HG={
  setYear,
  startPOV:id=>startPOV(events.find(e=>e.id===id)),
  openPanel:id=>openPanel(events.find(e=>e.id===id)),
  pov:(o,ms)=>{G.pointOfView(o,ms||0);const go=()=>{refreshPins(o);kick()};if(ms)setTimeout(go,ms+40);else go()},
  select:n=>{
    const f=(cache[curSnap]||[]).find(x=>x.properties&&x.properties.NAME===n);if(!f)return;
    selName=n;selFeat=f;hoverName=null;
    G.polygonCapColor(G.polygonCapColor());G.polygonStrokeColor(G.polygonStrokeColor());
    const c=centroid(f);tip(t('selected')+': '+selName);
    G.controls().autoRotate=false;rotating=false;
    refreshPins(); // magic circle immediately
    G.pointOfView({lat:c.lat,lng:c.lng,altitude:.5},700);
    setTimeout(()=>{refreshPins({lat:c.lat,lng:c.lng,altitude:.5});kick()},760);
  }
};
