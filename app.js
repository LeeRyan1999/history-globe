const I18N={
en:{evList:'Events',countries:'Countries',peoples:'Peoples / cultures',peoplesOn:'Peoples on',peoplesOff:'Peoples off',ctyNote:'Polities in this border snapshot. Tap to fly & highlight.',ethNote:'Approximate cultural / ethnic regions from historical-basemaps (not precise borders).',ethSnap:' · peoples layer on (approx.)',peopleTag:'people',ground:'Ground view',groundOn:'Ground view — drag to look around',groundOff:'Back to globe',tilesNote:'Imagery © Esri',lodFull:'detail',lodSimple:'overview',earlier:'Earlier',later:'Later',loading:'Loading borders…',replay:'↻ Replay',cont:'Continue ▸',doAct:'(do the action ↑)',snap:'Borders snapshot',fail:'Border data failed to load',built:'built',destroyed:'destroyed',enter:'▶ Enter POV',close:'Close',thenNow:'Then & Now',then:'Then',now:'Now',facts:'3 Facts',next:'What happened next',quiz:'Quiz',sources:'Sources',script:'Script by',status:'status',art:'Scene art: AI-generated illustration',back:'🌍 Back to globe',kofi:'Support on Ko-fi',look:'👁 Look at',tap:'☝ Tap',follow:'👣 Follow',bc:'BC',ad:'AD',eras:['Ancient Egypt','Classical','Early Middle Ages','11th c.','13th c.','15th c.','17th c.','19th c.','1914','Today']},
ja:{evList:'出来事',countries:'国・勢力',peoples:'民族・文化',peoplesOn:'民族表示オン',peoplesOff:'民族表示オフ',ctyNote:'この年の国境データに含まれる勢力。タップで移動・強調。',ethNote:'historical-basemaps の文化・民族領域（概略。精密な境界ではありません）。',ethSnap:' · 民族レイヤー（概略）',peopleTag:'民族',ground:'地上ビュー',groundOn:'地上ビュー — ドラッグで見回す',groundOff:'地球に戻る',tilesNote:'Imagery © Esri',lodFull:'詳細',lodSimple:'俯瞰',earlier:'前へ',later:'次へ',loading:'国境データを読み込み中…',replay:'↻ もう一度',cont:'続ける ▸',doAct:'（上の操作をしてください ↑）',snap:'国境データの年',fail:'国境データを読み込めませんでした',built:'建造',destroyed:'破壊',enter:'▶ 体験する',close:'閉じる',thenNow:'当時と今',then:'当時',now:'今',facts:'3つの知識',next:'その後どうなった',quiz:'クイズ',sources:'出典',script:'脚本',status:'状態',art:'場面画像：AI生成イラスト',back:'🌍 地球に戻る',kofi:'Ko-fiで支援する',look:'👁 見る',tap:'☝ タップ',follow:'👣 ついて行く',bc:'紀元前',ad:'西暦',eras:['古代エジプト','古典期','中世初期','11世紀','13世紀','15世紀','17世紀','19世紀','1914','今日']},
fr:{evList:'Événements',countries:'Pays',peoples:'Peuples / cultures',peoplesOn:'Peuples activés',peoplesOff:'Peuples désactivés',ctyNote:'Entités de cette carte. Touchez pour y aller et les souligner.',ethNote:'Régions culturelles / ethniques approximatives (historical-basemaps), pas des frontières précises.',ethSnap:' · couche peuples (approx.)',peopleTag:'peuple',ground:'Vue au sol',groundOn:'Vue au sol — glissez pour regarder',groundOff:'Retour au globe',tilesNote:'Imagery © Esri',lodFull:'détail',lodSimple:'aperçu',earlier:'Plus tôt',later:'Plus tard',loading:'Chargement des frontières…',replay:'↻ Rejouer',cont:'Continuer ▸',doAct:'(faites l’action ↑)',snap:'Frontières de',fail:'Échec du chargement des frontières',built:'construit',destroyed:'détruit',enter:'▶ Vivre la scène',close:'Fermer',thenNow:'Hier et aujourd’hui',then:'Hier',now:'Aujourd’hui',facts:'3 faits',next:'Et ensuite',quiz:'Quiz',sources:'Sources',script:'Scénario',status:'statut',art:'Illustration générée par IA',back:'🌍 Retour au globe',kofi:'Soutenir sur Ko-fi',look:'👁 Regarder',tap:'☝ Toucher',follow:'👣 Suivre',bc:'av. J.-C.',ad:'',eras:['Égypte antique','Antiquité classique','Haut Moyen Âge','XIe s.','XIIIe s.','XVe s.','XVIIe s.','XIXe s.','1914','Aujourd’hui']},
de:{evList:'Ereignisse',countries:'Länder',peoples:'Völker / Kulturen',peoplesOn:'Völker an',peoplesOff:'Völker aus',ctyNote:'Politische Einheiten in diesem Grenzstand. Tippen zum Anfliegen.',ethNote:'Ungefähre Kultur-/Ethnoregionen aus historical-basemaps (keine präzisen Grenzen).',ethSnap:' · Völker-Ebene (approx.)',peopleTag:'Volk',ground:'Bodenansicht',groundOn:'Bodenansicht — ziehen zum Umschauen',groundOff:'Zurück zum Globus',tilesNote:'Imagery © Esri',lodFull:'Detail',lodSimple:'Übersicht',earlier:'Früher',later:'Später',loading:'Grenzen werden geladen…',replay:'↻ Wiederholen',cont:'Weiter ▸',doAct:'(Aktion ausführen ↑)',snap:'Grenzen-Stand',fail:'Grenzdaten konnten nicht geladen werden',built:'erbaut',destroyed:'zerstört',enter:'▶ Szene erleben',close:'Schließen',thenNow:'Damals & heute',then:'Damals',now:'Heute',facts:'3 Fakten',next:'Wie ging es weiter',quiz:'Quiz',sources:'Quellen',script:'Skript von',status:'Status',art:'Szenenbild: KI-generierte Illustration',back:'🌍 Zurück zum Globus',kofi:'Auf Ko-fi unterstützen',look:'👁 Ansehen',tap:'☝ Antippen',follow:'👣 Folgen',bc:'v. Chr.',ad:'n. Chr.',eras:['Altes Ägypten','Antike','Frühmittelalter','11. Jh.','13. Jh.','15. Jh.','17. Jh.','19. Jh.','1914','Heute']},
zh:{evList:'歷史事件',countries:'國家／政權',peoples:'民族／文化',peoplesOn:'民族分佈開啟',peoplesOff:'民族分佈關閉',ctyNote:'此年份國界資料中的政權。點選後飛過去並金色標示。',ethNote:'民族／文化分佈為 historical-basemaps 的概略區域，非精確邊界。',ethSnap:' · 已開民族層（概略）',peopleTag:'民族',ground:'地面視角',groundOn:'地面視角 — 拖曳環視',groundOff:'回到地球',tilesNote:'影像 © Esri',lodFull:'精細',lodSimple:'概覽',earlier:'較早',later:'較晚',loading:'載入國界中…',replay:'↻ 重播',cont:'繼續 ▸',doAct:'（請做上方的動作 ↑）',snap:'國界資料年份',fail:'國界資料載入失敗',built:'建於',destroyed:'毀於',enter:'▶ 親身體驗',close:'關閉',thenNow:'當時與今天',then:'當時',now:'今天',facts:'3 個知識點',next:'後來呢',quiz:'小測驗',sources:'來源',script:'劇本',status:'狀態',art:'場景圖：AI 生成插畫',back:'🌍 回到地球',kofi:'在 Ko-fi 支持',look:'👁 看',tap:'☝ 點',follow:'👣 跟著',bc:'西元前',ad:'西元',eras:['古埃及','古典','中世紀早期','11世紀','13世紀','15世紀','17世紀','19世紀','1914','今天']}};
let LANG=localStorage.getItem('hg_lang');if(!I18N[LANG])LANG='en';
const t=k=>I18N[LANG][k]??I18N.en[k];const ZH=()=>LANG==='zh';const z=s=>ZH()&&s?s:'';
const SNAPS=[-123000,-10000,-8000,-5000,-4000,-3000,-2000,-1500,-1000,-700,-500,-400,-323,-300,-200,-100,-1,100,200,300,400,500,600,700,800,900,1000,1100,1200,1279,1300,1400,1492,1500,1530,1600,1650,1700,1715,1783,1800,1815,1878,1880,1900,1914,1920,1930,1938,1945,1960,1994,2000,2010];
const BASE='https://cdn.jsdelivr.net/gh/aourednik/historical-basemaps@master/geojson/';
const snapFile=y=>'world_'+(y<0?'bc'+(-y):y)+'.geojson';
const nearest=y=>SNAPS.reduce((a,b)=>Math.abs(b-y)<Math.abs(a-y)?b:a);
const fmt=y=>LANG==='zh'?(y<0?`西元前${-y}年`:`西元${y}年`):LANG==='ja'?(y<0?`紀元前${-y}年`:`西暦${y}年`):y<0?`${-y} ${t('bc')}`:(t('ad')?`${LANG==='de'?y+' '+t('ad'):t('ad')+' '+y}`:''+y);
const $=id=>document.getElementById(id);
const ERAS=[-2500,-300,500,1000,1250,1450,1600,1800,1914,2000];
let year=1450,landmarks=[],events=[],cache={},cacheFull={},curSnap=null,borderIndex=[],ethnicOn=false,borderMode='simple';
const PEOPLE_RE=/hunter|gatherer|peoples?|culture|tribes?|complex|focus|farmers|aboriginal|paleo-?|shellfish|hunters|foraging|cereal|taiga|savanna|bison|marine mammal|patagonian|amazon |andean |arctic |desert |caribbean |north american|subarctic|australian|tasmanian|plateau |plain |pampas|west african|finno-ugric|khoisan|ainu|saami|chuds|bantu|arawaks|athabaskan|boethuk|dorset|guanches|hopewell|marksville|mill creek|swift creek|point peninsula|laurel |glades |goodall|fourche|couture|copena|porter|miller\b/i;
const tip=(msg)=>{const e=$('tip');e.textContent=msg;e.hidden=!msg;clearTimeout(tip._t);if(msg)tip._t=setTimeout(()=>e.hidden=true,3500)};
const color=s=>{let h=0;for(const c of s||'')h=(h*31+c.charCodeAt(0))%360;return h};

function hslA(h,s,l,a){
  s/=100;l/=100;
  const c=(1-Math.abs(2*l-1))*s, x=c*(1-Math.abs((h/60)%2-1)), m=l-c/2;
  let r=0,g=0,b=0;
  if(h<60)[r,g,b]=[c,x,0]; else if(h<120)[r,g,b]=[x,c,0]; else if(h<180)[r,g,b]=[0,c,x];
  else if(h<240)[r,g,b]=[0,x,c]; else if(h<300)[r,g,b]=[x,0,c]; else [r,g,b]=[c,0,x];
  return `rgba(${Math.round((r+m)*255)},${Math.round((g+m)*255)},${Math.round((b+m)*255)},${a})`;
}

const featLabel=d=>{const p=d&&d.properties;if(!p)return'';return p.NAME||p.SUBJECTO||p.PARTOF||''};
const isPeople=n=>PEOPLE_RE.test(n||'');

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
    paths.push({coords:ring.map(([lng,lat])=>[lat,lng])});
  }
  return paths;
}
let borderPaths=[]; /* mobile outline strokes (polygon stroke off on iOS) */
function glowPaths(){
  const base=featToPaths(glowFeat), paths=[];
  for(const p of base){paths.push({coords:p.coords,glow:1});paths.push({coords:p.coords,glow:0})}
  return paths;
}
function applyPaths(){G.pathsData(borderPaths.concat(glowPaths()))}
function setGlow(feat){glowFeat=feat||null;applyPaths()}
function clearGlow(){glowFeat=null;applyPaths()}
function buildBorderPaths(feats){
  if(!MOB){borderPaths=[];return}
  const paths=[];
  const cap=Math.min(feats.length, MOB?120:300);
  /* largest first for visibility budget */
  const scored=feats.map(f=>{const lr=largestRing(f);return lr?{f,area:lr.area}:null}).filter(Boolean).sort((a,b)=>b.area-a.area).slice(0,cap);
  for(const {f} of scored){
    for(const p of featToPaths(f)) paths.push({coords:p.coords,border:1});
  }
  borderPaths=paths;
}

const MOB=/iPad|iPhone|iPod/.test(navigator.userAgent)||(navigator.maxTouchPoints>1&&/Mac/.test(navigator.userAgent));
let zoomBand='far'; /* far | mid | near — fill alpha, tiles, border LOD */
const G=Globe()($('globe'))
 .globeImageUrl('img/earth-night.jpg?v=20261028d')
 .backgroundImageUrl('https://unpkg.com/three-globe/example/img/night-sky.png')
 .polygonsTransitionDuration(0).atmosphereColor('#c9a96e').atmosphereAltitude(.2)
 .polygonAltitude(d=>{const n=featLabel(d);if(!n)return 0.003; const base=MOB?0.016:0.009; return zoomBand==='near'?base*0.55:(zoomBand==='mid'?base*0.75:base)})
 .polygonCapCurvatureResolution(MOB?8:5)
 .polygonCapColor(d=>{
   const n=featLabel(d);if(!n)return'rgba(40,55,70,.18)';
   const h=color(n);const people=isPeople(n);
   let a;
   if(ethnicOn) a=people?0.68:0.30; else a=people?0.34:0.58;
   if(zoomBand==='mid') a*=0.48; else if(zoomBand==='near') a*=0.22;
   if(ethnicOn){ if(people)return hslA(h,58,52,a); return hslA(h,28,38,a); }
   if(people)return hslA(h,35,42,a);
   return hslA(h,52,50,a);
 })
 .polygonSideColor(()=>'rgba(201,169,110,.28)')
 /* iOS WebKit: polygon strokes often fail the whole layer — use path outlines instead */
 .polygonStrokeColor(MOB?(()=>null):(d=>{
   const n=featLabel(d);if(!n)return'rgba(180,200,210,.18)';
   if(ethnicOn&&isPeople(n))return'#b8e0ff';
   return'#f0e0b0';
 }))
 .polygonLabel(d=>{const n=featLabel(d);return n?`<b>${n}</b>`:''})
 .onPolygonHover(()=>{})
 .onPolygonClick(d=>{
   const n=featLabel(d);if(!n){clearGlow();return}
   setGlow(d);tip(n);
 })
 .onGlobeClick(()=>clearGlow())
 .pathsData([])
 .pathPoints('coords')
 .pathPointLat(p=>p[0]).pathPointLng(p=>p[1])
 .pathPointAlt(.012)
 .pathColor(d=>d.border?'rgba(240,224,176,.85)':(d.glow?'rgba(255,196,60,.35)':'rgba(255,220,100,.95)'))
 .pathStroke(d=>d.border?(MOB?1.1:0.9):(d.glow?4.5:2.0))
 .pathDashLength(d=>d.border?1:(d.glow?1:0.55))
 .pathDashGap(d=>d.border?0:(d.glow?0:0.2))
 .pathDashAnimateTime(d=>d.border?0:(d.glow?0:2200))
 .pathResolution(2)
 .htmlElementsData([]).htmlElement(d=>{const el=d.el;if(el&&!el._hg){el._hg=1;el.style.pointerEvents=el.classList.contains('cn')?'none':'auto'}return el})
 .ringsData([]).ringColor(()=>u=>`rgba(255,179,71,${1-u})`).ringMaxRadius(4).ringPropagationSpeed(2).ringRepeatPeriod(1200)
 .tilesData([])
 .tileLat('lat').tileLng('lng')
  .tileAltitude(0.0035)
 .tileWidth('w').tileHeight('h')
 .tileMaterial('material')
 .tileCurvatureResolution(MOB?8:5)
 .tilesTransitionDuration(0);
G.controls().autoRotate=true;G.controls().autoRotateSpeed=.25;G.pointOfView({lat:30,lng:40,altitude:2.3});
if(!MOB)G.bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png');
/* Sharper on phones within a sane cap (was 1.5 → soft). */
G.renderer().setPixelRatio(Math.min(devicePixelRatio||1,MOB?2:2));
document.addEventListener('visibilitychange',()=>{if(document.hidden)G.pauseAnimation();else if($('pov').hidden)G.resumeAnimation()});
addEventListener('resize',()=>G.width(innerWidth).height(innerHeight));

/* ---- geometry helpers for picker / labels ---- */
function ringArea(ring){
  if(!ring||ring.length<3)return 0;
  let a=0;for(let i=0;i<ring.length-1;i++)a+=ring[i][0]*ring[i+1][1]-ring[i+1][0]*ring[i][1];
  return Math.abs(a)/2;
}
function largestRing(feat){
  const g=feat&&feat.geometry;if(!g)return null;
  const polys=g.type==='Polygon'?[g.coordinates]:g.type==='MultiPolygon'?g.coordinates:[];
  let best=null,bestA=-1;
  for(const poly of polys){
    const ring=poly&&poly[0];if(!ring||ring.length<4)continue;
    const a=ringArea(ring);if(a>bestA){bestA=a;best=ring}
  }
  return best?{ring:best,area:bestA}:null;
}
function centroidOf(ring){
  let lng=0,lat=0,n=ring.length-(ring[0][0]===ring[ring.length-1][0]&&ring[0][1]===ring[ring.length-1][1]?1:0);
  if(n<1)n=ring.length;
  for(let i=0;i<n;i++){lng+=ring[i][0];lat+=ring[i][1]}
  return{lat:lat/n,lng:lng/n};
}
function buildBorderIndex(features){
  const map=new Map();
  for(const f of features){
    const name=featLabel(f);if(!name)continue;
    const lr=largestRing(f);if(!lr||lr.area<0.05)continue;
    const c=centroidOf(lr.ring);
    const prev=map.get(name);
    if(!prev||lr.area>prev.area){
      map.set(name,{name,lat:c.lat,lng:c.lng,area:lr.area,people:isPeople(name),feat:f});
    }
  }
  return[...map.values()].sort((a,b)=>a.name.localeCompare(b.name));
}
function updateSnapNote(){
  if(curSnap==null)return;
  const lod=borderMode==='full'?t('lodFull'):t('lodSimple');
  $('snap').textContent=`${t('snap')}: ${fmt(curSnap)} · ${borderIndex.length} · ${lod} · historical-basemaps`+(ethnicOn?t('ethSnap'):'');
}

/* ---- 3D landmarks (LOD): year-gated, lazy, shared mats ---- */
function resolveTHREE(){
  if(window.THREE&&window.THREE.Mesh)return window.THREE;
  try{const sc=G.scene();if(sc&&sc.constructor&&sc.constructor.Mesh)return sc.constructor}catch(e){}
  return null;
}
function ensure3D(){
  if(!window.HG3D)return false;
  if(HG3D._ready)return true;
  const T=resolveTHREE();
  if(!T)return false;
  HG3D.init(T);HG3D._ready=true;return true;
}
ensure3D();
const LM_NEAR_ALT=1.35, LM_NEAR_DEG2=100;
let last3dKey='';
function aliveLM(l){return l.built<=year&&(l.destroyed==null||l.destroyed>=year)}
function nearby3d(pov){
  const cur=G.pointOfView();
  const alt=pov&&pov.altitude!=null?+pov.altitude:+cur.altitude;
  const lat=pov&&pov.lat!=null?+pov.lat:+cur.lat;
  const lng=pov&&pov.lng!=null?+pov.lng:+cur.lng;
  if(!(alt<=LM_NEAR_ALT))return[];
  const out=[];
  for(const l of landmarks){
    if(!aliveLM(l))continue;
    const dlat=l.lat-lat,dlng=((l.lng-lng+540)%360)-180;
    if(dlat*dlat+dlng*dlng>LM_NEAR_DEG2)continue;
    out.push(l);
  }
  const lim=MOB?6:10;
  if(out.length>lim){
    out.sort((a,b)=>{
      const da=(a.lat-lat)**2+((((a.lng-lng+540)%360)-180)**2);
      const db=(b.lat-lat)**2+((((b.lng-lng+540)%360)-180)**2);
      return da-db;
    });
    return out.slice(0,lim);
  }
  return out;
}
function landmarkZoomScale(alt){
  if(alt<=0.4)return 2.6; if(alt<=0.55)return 2.1; if(alt<=0.8)return 1.7; if(alt<=1.15)return 1.35; return 1;
}
function refresh3D(pov){
  if(!ensure3D())return;
  const cur=pov||G.pointOfView();
  const alt=+cur.altitude;
  if(HG3D.setZoomScale) HG3D.setZoomScale(landmarkZoomScale(alt));
  const near=nearby3d(cur);
  const cap=MOB?5:(alt<=0.7?8:6);
  const list=near.length>cap?near.slice(0,cap):near;
  const key=year+'|'+list.map(l=>l.id).sort().join(',')+'|'+landmarkZoomScale(alt).toFixed(2);
  if(key===last3dKey)return;
  last3dKey=key;
  const data=list.map(l=>({id:l.id,lat:l.lat,lng:l.lng,alt:0.002,landmark:l,name:(ZH()?l.zh:l.name)}));
  try{G.objectsData(data);HG3D.prune(list.map(l=>l.id))}catch(e){console.warn('3d',e)}
}
G.objectsData([])
 .objectLat('lat').objectLng('lng').objectAltitude(d=>d.alt||0.0015)
 .objectFacesSurface(true)
 .objectThreeObject(d=>HG3D.getObject(d.landmark||d))
 .objectLabel(d=>d.name||'')
 .onObjectClick(obj=>{
   const l=obj&&(obj.landmark||obj);
   if(!l)return;
   tip(`${l.icon||''} ${ZH()?l.zh:l.name} (${t('built')} ${fmt(l.built)}${l.destroyed!=null?', '+t('destroyed')+' '+fmt(l.destroyed):''})`);
 });
/* ---- Zoom LOD / tiles / ground view ---- */
const LOD_FULL_ALT=1.18; /* at or below → prefer full CDN geojson */
const TILE_ON_ALT=1.12;
const TILE_URL=(z,x,y)=>`https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${z}/${y}/${x}`;
const tileTexCache=new Map();
let tilesKey='';
let groundOn=false, groundSave=null, savedMinAlt=null;

function bandFor(alt){
  if(alt<=0.55)return 'near';
  if(alt<=1.15)return 'mid';
  return 'far';
}
function lng2tile(lng,z){return Math.floor((lng+180)/360*Math.pow(2,z))}
function lat2tile(lat,z){
  const rad=lat*Math.PI/180;
  return Math.floor((1-Math.log(Math.tan(rad)+1/Math.cos(rad))/Math.PI)/2*Math.pow(2,z));
}
function tile2lng(x,z){return x/Math.pow(2,z)*360-180}
function tile2lat(y,z){const n=Math.PI-2*Math.PI*y/Math.pow(2,z);return 180/Math.PI*Math.atan(0.5*(Math.exp(n)-Math.exp(-n)))}
function tileMat(z,x,y){
  const T=resolveTHREE(); if(!T)return null;
  const key=z+'/'+x+'/'+y;
  let m=tileTexCache.get(key);
  if(m)return m;
  const tex=new T.TextureLoader().load(TILE_URL(z,x,y));
  if(T.SRGBColorSpace)tex.colorSpace=T.SRGBColorSpace;
  else if(T.sRGBEncoding)tex.encoding=T.sRGBEncoding;
  m=new T.MeshBasicMaterial({map:tex, transparent:true, opacity:0.95, depthWrite:false});
  tileTexCache.set(key,m);
  /* Cap cache size (mobile especially) */
  const cap=MOB?36:90;
  if(tileTexCache.size>cap){
    const first=tileTexCache.keys().next().value;
    const old=tileTexCache.get(first);
    if(old&&old.map)old.map.dispose();
    if(old)old.dispose();
    tileTexCache.delete(first);
  }
  return m;
}
function buildTiles(lat,lng,alt){
  if(alt>TILE_ON_ALT)return[];
  const z=alt<=0.4?(MOB?6:8):alt<=0.7?(MOB?5:7):(MOB?4:6);
  const cx=lng2tile(lng,z), cy=lat2tile(lat,z);
  const rad=MOB?1:(alt<=0.5?2:1);
  const out=[], n=1<<z;
  for(let dx=-rad;dx<=rad;dx++){
    for(let dy=-rad;dy<=rad;dy++){
      let x=cx+dx, y=cy+dy;
      if(y<0||y>=n)continue;
      x=((x%n)+n)%n;
      const west=tile2lng(x,z), east=tile2lng(x+1,z);
      const north=tile2lat(y,z), south=tile2lat(y+1,z);
      const mat=tileMat(z,x,y); if(!mat)continue;
      out.push({lat:(north+south)/2, lng:(west+east)/2, w:Math.abs(east-west)*0.998, h:Math.abs(north-south)*0.998, material:mat});
    }
  }
  return out;
}
function updateTiles(pov){
  const p=pov||G.pointOfView();
  const alt=+p.altitude;
  if(alt>TILE_ON_ALT){
    if(tilesKey!=='off'){tilesKey='off';try{G.tilesData([])}catch(e){} updateAttrib(false);}
    return;
  }
  const z=alt<=0.4?(MOB?6:8):alt<=0.7?(MOB?5:7):(MOB?4:6);
  const cx=lng2tile(p.lng,z), cy=lat2tile(p.lat,z);
  const key=z+'|'+cx+'|'+cy+'|'+bandFor(alt);
  if(key===tilesKey)return;
  tilesKey=key;
  try{G.tilesData(buildTiles(p.lat,p.lng,alt))}catch(e){console.warn('tiles',e)}
  updateAttrib(true);
}
function updateAttrib(show){
  const el=$('attrib'); if(!el)return;
  if(show){el.hidden=false; el.textContent=t('tilesNote')}
  else if(!groundOn) el.hidden=true;
}

async function ensureFullBorders(s){
  if(cacheFull[s])return cacheFull[s];
  const file=snapFile(s);
  const urls=[BASE+file, 'https://fastly.jsdelivr.net/gh/aourednik/historical-basemaps@master/geojson/'+file];
  for(const url of urls){
    try{
      const res=await fetch(url,{cache:'force-cache'});
      if(!res.ok)throw new Error('HTTP '+res.status);
      const data=await res.json();
      const feats=Array.isArray(data)?data:(data.features||[]);
      if(!feats.length)throw new Error('empty');
      cacheFull[s]=feats;
      return feats;
    }catch(e){console.warn('full borders',url,e&&e.message)}
  }
  return null;
}
function featsNearView(feats,lat,lng,span){
  const out=[];
  for(const f of feats){
    const lr=largestRing(f); if(!lr)continue;
    if(Math.abs(lr.lat-lat)>span)continue;
    let dl=(((lr.lng-lng+540)%360)-180);
    if(Math.abs(dl)>span)continue;
    out.push(f);
  }
  return out.length?out:feats.slice(0,Math.min(80,feats.length));
}
function activeFeatsRaw(){
  if(curSnap==null)return[];
  if(borderMode==='full'&&cacheFull[curSnap])return cacheFull[curSnap];
  return cache[curSnap]||[];
}
function repaintBorders(pov){
  if(curSnap==null)return;
  let feats=usableFeatures(activeFeatsRaw());
  const p=pov||G.pointOfView();
  if(borderMode==='full'&&(MOB||feats.length>400)){
    feats=usableFeatures(featsNearView(activeFeatsRaw(), p.lat, p.lng, MOB?28:45));
  }
  borderIndex=buildBorderIndex(usableFeatures(activeFeatsRaw()));
  buildBorderPaths(feats);
  applyPaths();
  try{G.polygonsData(feats.slice())}catch(err){console.warn('polygonsData',err)}
  updateSnapNote();
  if(!$('ctylist').hidden)drawCountries();
}
let lodFetchId=0;
async function applyZoomLOD(pov){
  const p=pov||G.pointOfView();
  const alt=+p.altitude;
  const band=bandFor(alt);
  const bandChanged=band!==zoomBand;
  zoomBand=band;
  updateTiles(p);
  if(bandChanged){
    /* restyle fills (alpha) by re-setting polygons */
    if(curSnap!=null)repaintBorders(p);
  }
  const wantFull=alt<=LOD_FULL_ALT;
  if(wantFull&&borderMode!=='full'&&curSnap!=null){
    const s=curSnap;
    const id=++lodFetchId;
    const full=await ensureFullBorders(s);
    if(id!==lodFetchId||curSnap!==s)return;
    if(full){
      borderMode='full';
      repaintBorders(G.pointOfView());
      refreshLabelsOnly();
    }
  }else if(!wantFull&&borderMode==='full'){
    borderMode='simple';
    repaintBorders(p);
    refreshLabelsOnly();
  }else if(bandChanged&&borderMode==='full'&&MOB){
    repaintBorders(p);
  }
}

function groundFocus(){
  if(glowFeat){
    const name=featLabel(glowFeat);
    const m=borderIndex.find(x=>x.name===name);
    if(m)return{lat:m.lat,lng:m.lng,name};
    const lr=largestRing(glowFeat);
    if(lr&&lr.ring){
      const c=centroidOf(lr.ring);
      if(c)return{lat:c.lat,lng:c.lng,name};
    }
  }
  const p=G.pointOfView();
  const near=nearby3d(p);
  if(near.length)return{lat:near[0].lat,lng:near[0].lng,name:ZH()?near[0].zh:near[0].name};
  if(borderIndex.length){
    let best=null,bd=1e9;
    for(const m of borderIndex){
      if(m.people)continue;
      const d=(m.lat-p.lat)**2+((((m.lng-p.lng+540)%360)-180)**2);
      if(d<bd){bd=d;best=m}
    }
    if(best)return{lat:best.lat,lng:best.lng,name:best.name};
  }
  return{lat:p.lat,lng:p.lng,name:''};
}
function enterGround(){
  if(!$('pov').hidden)return;
  const p=G.pointOfView();
  groundSave={lat:p.lat,lng:p.lng,altitude:p.altitude};
  const focus=groundFocus();
  groundOn=true;
  const btn=$('gvbtn'); if(btn){btn.classList.add('on');btn.setAttribute('aria-pressed','true')}
  const hint=$('gvhint'); if(hint){hint.classList.add('on');hint.textContent=t('groundOn')}
  G.controls().autoRotate=false;
  tip((focus.name?focus.name+' · ':'')+t('groundOn'));
  const dest={lat:+focus.lat||52.5,lng:+focus.lng||-1.5,altitude:0.48};
  G.pointOfView(dest,1000);
  /* Avoid heavy LOD/3D rebuild mid-fly — view-change handler will refresh shortly. */
}
function exitGround(){
  groundOn=false;
  const btn=$('gvbtn'); if(btn){btn.classList.remove('on');btn.setAttribute('aria-pressed','false')}
  const hint=$('gvhint'); if(hint)hint.classList.remove('on');
  const back=groundSave||{lat:30,lng:0,altitude:2.3};
  tip(t('groundOff'));
  G.pointOfView({lat:back.lat,lng:back.lng,altitude:Math.max(1.85, +back.altitude||2.2)},1000);
  groundSave=null;
  setTimeout(()=>{
    const p=G.pointOfView();
    applyZoomLOD(p); last3dKey=''; refresh3D(p); refreshLabelsOnly();
  },1050);
}
function toggleGround(){if(groundOn)exitGround();else enterGround()}

let viewT=null;
function onViewChange(){
  clearTimeout(viewT);
  viewT=setTimeout(()=>{
    const p=G.pointOfView();
    applyZoomLOD(p);
    refresh3D(p);
    refreshLabelsOnly();
    /* groundOn: OrbitControls already owns the camera; skip POV retarget fights */
  },140);
}
G.controls().addEventListener('change',()=>{
  const p=G.pointOfView();
  if(!onViewChange._p||Math.abs(p.altitude-onViewChange._p.altitude)>0.045||Math.abs(p.lat-onViewChange._p.lat)>0.28||Math.abs(p.lng-onViewChange._p.lng)>0.28){
    onViewChange._p={lat:p.lat,lng:p.lng,altitude:p.altitude};onViewChange();
  }
});

function usableFeatures(features){
  /* Drop empty unnamed scraps; keep named/SUBJECTO polities. Cap tiny bits on mobile. */
  const minA=MOB?0.08:0.03;
  const out=[];
  for(const f of features){
    const n=featLabel(f);if(!n)continue;
    const lr=largestRing(f);if(!lr||lr.area<minA)continue;
    out.push(f);
  }
  return out;
}
let borderLoadId=0;
async function fetchBorderFeatures(s){
  const file=snapFile(s);
  const urls=[
    'borders/'+file, /* same-origin simplified — reliable on iOS Safari */
    BASE+file,
    'https://fastly.jsdelivr.net/gh/aourednik/historical-basemaps@master/geojson/'+file
  ];
  let last;
  for(const url of urls){
    try{
      const res=await fetch(url,{cache:'force-cache'});
      if(!res.ok)throw new Error('HTTP '+res.status+' '+url);
      const data=await res.json();
      const feats=Array.isArray(data)?data:(data.features||[]);
      if(!feats.length)throw new Error('empty '+url);
      return feats;
    }catch(e){last=e;console.warn('borders', url, e&&e.message)}
  }
  throw last||new Error('borders');
}
async function loadBorders(){
  const s=nearest(year);if(s===curSnap&&borderIndex.length)return;
  const loadId=++borderLoadId;
  $('loading').hidden=false;
  borderMode='simple'; tilesKey='';
  try{G.tilesData([])}catch(e){}
  try{
    if(!cache[s]) cache[s]=await fetchBorderFeatures(s);
    if(loadId!==borderLoadId||nearest(year)!==s)return;
    curSnap=s;
    const alt=+G.pointOfView().altitude;
    zoomBand=bandFor(alt);
    if(alt<=LOD_FULL_ALT){
      const full=await ensureFullBorders(s);
      if(loadId!==borderLoadId||nearest(year)!==s)return;
      if(full) borderMode='full';
    }
    glowFeat=null;
    repaintBorders(G.pointOfView());
    paintHtml(G.pointOfView());
    applyZoomLOD(G.pointOfView());
    if(!$('ctylist').hidden)drawCountries();
  }catch(e){
    if(loadId===borderLoadId){
      tip(t('fail')+' ('+s+')');
      $('snap').textContent=t('fail')+': '+fmt(s);
    }
  }
  if(loadId===borderLoadId)$('loading').hidden=true;
}
function active(e){const end=e.year_end||e.year;return year>=e.year-50&&year<=end+50}
function mk(cls,html,fn){const el=document.createElement('div');el.className=cls;el.innerHTML=html;if(fn){el.addEventListener('click',ev=>{ev.stopPropagation();fn()});el.addEventListener('touchend',ev=>{ev.preventDefault();ev.stopPropagation();fn()})}return el}
function flyToLM(l){
 tip(`${l.icon||''} ${ZH()?l.zh:l.name} (${t('built')} ${fmt(l.built)}${l.destroyed!=null?', '+t('destroyed')+' '+fmt(l.destroyed):''})`);
 G.controls().autoRotate=false;
 G.pointOfView({lat:l.lat,lng:l.lng,altitude:0.55},900);
 setTimeout(()=>{last3dKey='';const pv={lat:l.lat,lng:l.lng,altitude:0.55};refresh3D(pv);applyZoomLOD(pv)},960);
}
function selectCountry(m){
  if(!m)return;
  setGlow(m.feat);tip(m.name);
  G.controls().autoRotate=false;
  G.pointOfView({lat:m.lat,lng:m.lng,altitude:1.05},1000);
  $('ctylist').hidden=true;
  setTimeout(()=>applyZoomLOD({lat:m.lat,lng:m.lng,altitude:1.05}),1050);
}
function labelCandidates(pov){
  const alt=pov&&pov.altitude!=null?+pov.altitude:G.pointOfView().altitude;
  if(alt>2.8)return[];
  let list=borderIndex.slice();
  if(ethnicOn){
    const pe=list.filter(m=>m.people);
    list=pe.length?pe:list;
  }else{
    const pol=list.filter(m=>!m.people);
    list=pol.length?pol:list;
  }
  list.sort((a,b)=>b.area-a.area);
  const cap=MOB?(alt<1.4?22:14):(alt<1.4?36:22);
  return list.slice(0,cap);
}
function paintHtml(pov){
  const zoomed=pov.altitude<=LM_NEAR_ALT;
  const nearIds=zoomed?new Set(nearby3d(pov).map(l=>l.id)):null;
  const lms=landmarks.filter(aliveLM).filter(l=>!(nearIds&&nearIds.has(l.id))).map(l=>({lat:l.lat,lng:l.lng,el:mk('lm',l.icon,()=>flyToLM(l))}));
  const evs=events.filter(active);
  const cns=labelCandidates(pov).map(m=>({lat:m.lat,lng:m.lng,el:mk('cn'+(m.people?' people':''),m.name)}));
  G.htmlElementsData([...cns,...lms,...evs.map(e=>({lat:e.lat,lng:e.lng,el:mk('ev',`<b>${ZH()?e.title_zh:e.title}</b>`,()=>openPanel(e))}))]);
  G.ringsData(evs);
}
function refreshLabelsOnly(){
  if(refreshLabelsOnly._busy)return;
  refreshLabelsOnly._busy=true;
  try{paintHtml(G.pointOfView())}finally{refreshLabelsOnly._busy=false}
}
function render(){
  $('yearLabel').textContent=fmt(year);$('year').value=year;
  document.querySelectorAll('#eras button').forEach(b=>b.classList.toggle('on',+b.dataset.y===year));
  const pov=G.pointOfView();
  paintHtml(pov);last3dKey='';refresh3D(pov);clearTimeout(render.t);render.t=setTimeout(loadBorders,250);
}
let rafY=0;function setYear(y){const n=Math.max(-3000,Math.min(2010,Math.round(y)));if(n===year&&!setYear.force)return;year=n;$('yearLabel').textContent=fmt(year);if(!rafY)rafY=requestAnimationFrame(()=>{rafY=0;render()})}
$('year').oninput=e=>setYear(+e.target.value);
$('yminus').onclick=()=>setYear(year-10);$('yplus').onclick=()=>setYear(year+10);
function drawEras(){$('eras').innerHTML='';ERAS.forEach((y,i)=>{const b=document.createElement('button');b.textContent=t('eras')[i];b.dataset.y=y;b.onclick=()=>setYear(y);$('eras').append(b)})}
function applyLang(){document.documentElement.lang=LANG==='zh'?'zh-Hant':LANG;$('lang').value=LANG;
 document.querySelectorAll('[data-i18n]').forEach(e=>e.textContent=t(e.dataset.i18n));document.querySelectorAll('[data-i18n-aria]').forEach(e=>e.setAttribute('aria-label',t(e.dataset.i18nAria)));
 $('evbtn').title=t('evList');$('evbtn').setAttribute('aria-label',t('evList'));
 $('ctybtn').title=t('countries');$('ctybtn').setAttribute('aria-label',t('countries'));
 $('ethbtn').title=ethnicOn?t('peoplesOn'):t('peoplesOff');$('ethbtn').setAttribute('aria-label',t('peoples'));
 if($('gvbtn')){$('gvbtn').title=t('ground');$('gvbtn').setAttribute('aria-label',t('ground'))}
 if($('gvhint')&&groundOn)$('gvhint').textContent=t('groundOn');
 if($('attrib')&&!$('attrib').hidden)$('attrib').textContent=t('tilesNote');
 if(!$('evlist').hidden)drawList();if(!$('ctylist').hidden)drawCountries();
 const k=$('kofi');k.title=t('kofi');k.setAttribute('aria-label',t('kofi'));$('next').textContent=$('hot').hidden?t('cont'):t('doAct');drawEras();updateSnapNote();render()}
$('lang').onchange=e=>{LANG=e.target.value;localStorage.setItem('hg_lang',LANG);applyLang()};
function drawList(){const L=$('evlist');L.innerHTML=`<h3>${t('evList')}</h3>`+[...events].sort((a,b)=>a.year-b.year).map(e=>`<button data-id="${e.id}"><span>${fmt(e.year)}</span>${ZH()?e.title_zh:e.title}</button>`).join('');
 L.querySelectorAll('button').forEach(b=>b.onclick=()=>{const e=events.find(x=>x.id===b.dataset.id);L.hidden=true;setYear(e.year);openPanel(e)})}
$('evbtn').onclick=()=>{const L=$('evlist');$('ctylist').hidden=true;if(L.hidden)drawList();L.hidden=!L.hidden};
function drawCountries(){
  const L=$('ctylist');
  let list=borderIndex.slice();
  if(ethnicOn){
    const pe=list.filter(m=>m.people);
    /* show peoples first, then polities */
    list=pe.concat(list.filter(m=>!m.people));
  }else{
    list=list.filter(m=>!m.people).concat(list.filter(m=>m.people));
  }
  L.innerHTML=`<h3>${ethnicOn?t('peoples'):t('countries')}</h3><p class="note">${ethnicOn?t('ethNote'):t('ctyNote')}</p>`+
    (list.length?list.map(m=>`<button data-n="${encodeURIComponent(m.name)}">${m.name}${m.people?` <span class="tag">${t('peopleTag')}</span>`:''}</button>`).join(''):`<p class="note">${t('loading')}</p>`);
  L.querySelectorAll('button[data-n]').forEach(b=>b.onclick=()=>{
    const name=decodeURIComponent(b.dataset.n);
    const m=borderIndex.find(x=>x.name===name);
    selectCountry(m);
  });
}
$('ctybtn').onclick=()=>{const L=$('ctylist');$('evlist').hidden=true;if(L.hidden)drawCountries();L.hidden=!L.hidden};
function setEthnic(on){
  ethnicOn=!!on;
  $('ethbtn').classList.toggle('on',ethnicOn);
  $('ethbtn').setAttribute('aria-pressed',ethnicOn?'true':'false');
  $('ethbtn').title=ethnicOn?t('peoplesOn'):t('peoplesOff');
  updateSnapNote();
  /* Force polygon restyle by resetting data */
  if(curSnap!=null&&(cache[curSnap]||cacheFull[curSnap])){
    repaintBorders(G.pointOfView());
  }
  if(!$('ctylist').hidden)drawCountries();
  render();
}
$('ethbtn').onclick=()=>setEthnic(!ethnicOn);
if($('gvbtn'))$('gvbtn').onclick=()=>toggleGround();
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
function say(txt){if(!('speechSynthesis'in window))return;speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(txt);u.lang='en-GB';if(voice)u.voice=voice;u.rate=.92;u.pitch=.9;speechSynthesis.speak(u)}
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
if('serviceWorker'in navigator){navigator.serviceWorker.getRegistrations().then(rs=>rs.forEach(r=>r.unregister())).catch(()=>{})}
(async()=>{landmarks=await (await fetch('landmarks.json?v=20261028d')).json();const idx=await (await fetch('events/index.json?v=20261028d')).json();
 events=await Promise.all(idx.map(f=>fetch('events/'+f+'?v=20261028d').then(r=>r.json())));applyLang()})();
window.__HG={setYear,startPOV:id=>startPOV(events.find(e=>e.id===id)),openPanel:id=>openPanel(events.find(e=>e.id===id)),glow:n=>{const f=(borderIndex.find(x=>x.name===n)||{}).feat||(cache[curSnap]||cacheFull[curSnap]||[]).find(x=>featLabel(x)===n);if(f){setGlow(f);tip(n)}},clear:clearGlow,pov:(o,ms)=>G.pointOfView(o,ms),refresh3D,landmarks:()=>landmarks,year:()=>year,flyToLM:id=>{const l=landmarks.find(x=>x.id===id);if(l)flyToLM(l)},countries:()=>borderIndex,ethnic:setEthnic,selectCountry:n=>{const m=borderIndex.find(x=>x.name===n);selectCountry(m)},ground:toggleGround,exitGround,enterGround,borderMode:()=>borderMode,zoomBand:()=>zoomBand};
