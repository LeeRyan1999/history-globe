# 歷史地球 History Globe — Progress log

Live: https://leeryan1999.github.io/history-globe/ · Repo: https://github.com/LeeRyan1999/history-globe

## Done
- 2026-10-28 (run 4) — Zoom detail + ground POV (Lee England AD 1450 zoom). Performance-first: (1) border LOD — simplified `borders/*.geojson` far away; full CDN historical-basemaps cached per year when altitude≤1.18 (mobile bbox-filters polygons); snap note shows overview/detail. (2) Esri World Imagery slippy tiles via globe.gl `tilesData` when close (mobile caps); polity fills more transparent mid/near; `Imagery © Esri` attribution. (3) Landmark base SCALE ~2.4× + altitude zoomScale; more nearby 3D when close. (4) Ground view 🎥 — separate from narrative `#pov` scenes: fly to selected country/landmark at low altitude, drag/orbit (touch OK), toggle off resets; hint pill. Asset `?v=20261028d`. Screenshots: screenshots/zoom-england-1450.png, screenshots/pov.png (+ iphone variants). Limits: historical-basemaps coastlines still coarse; night 2048 base until tiles cover; tiles are modern imagery; WebKit via Chromium iPhone UA.

- 2026-10-28 (run 3) — iPhone borders fix: Lee saw only night texture at 300 BC. Causes: (1) globe.gl loaded before three.min.js → dual Three instances (globe internal vs window.THREE) so layers break on iOS WebKit; (2) polygonStroke + hsla() fills unreliable on WebKit; (3) jsdelivr GeoJSON flaky (403 reproduced) with no same-origin copy. Fix: load three@0.159 first then globe.gl; same-origin simplified `borders/*.geojson` (CDN fallback); iOS path outlines instead of polygon stroke; rgba caps; earth-night 2048; `?v=20261028c` cache-bust; unregister SW. Screenshot: screenshots/iphone-300bc.png.

- 2026-10-28 (run 2) — Mobile clarity + countries: sharper local `img/earth-night.jpg` texture; iOS DPR cap raised 1.5→2; brighter polity fills/strokes; year-gated country name labels on globe; header topbar flex so 🏛/👥/📜/lang/Ko-fi no longer overlap the title on ~390px phones; 🏛 country picker lists polities in the current historical-basemaps snapshot (fly + gold glow); 👥 peoples/cultures toggle uses the same basemap features classified as cultural/ethnic (approximate — labeled in UI, not precise borders). Landmarks unchanged. Screenshot: screenshots/mobile-countries.png.

- 2026-10-26 — v1 prototype: 3D globe (globe.gl), year slider + era buttons, historical-basemaps borders (nearest snapshot), 20 landmarks with built/destroyed years, 3 seed events (Constantinople 1453, Columbus 1492, Zheng He 1405) with 4-phase POV (arrival/guide/climax/reflection), English TTS + bilingual subtitles, reflection cards + quiz, CONTRIBUTING.md.
- 2026-10-27 — Performance fix for iPad: pause globe rendering while in POV scene, resume on exit; disable polygon transition animation when switching years.
- 2026-10-27 (run 2) — Perf: pixel ratio capped at 1.5 on iPad/iPhone (2 on desktop); globe pauses when tab/app is hidden. Top-right language selector (English default, 日本語, Français, Deutsch, 中文; saved in localStorage) — UI labels, buttons, eras, year format, cards' headings translated. Event body text stays English (zh lines shown only in 中文 mode); event titles in zh only. Ko-fi link as inline-SVG Roman aureus coin (translated tooltip).
- 2026-10-27 (run 4) — Country tap: gold glowing outline only (paths layer + dashed pulse; fill unchanged; tap empty globe to clear). No polygon re-tessellation on hover/select. Demo GIF (not in app): demo/bigben-rise.gif (+ mp4) — low-poly Elizabeth Tower rising with dust/glow.
- 2026-10-27 (run 5) — Standalone three.js Big Ben demo: demo/bigben.html (procedural Elizabeth Tower, rise 2.4s + dust/glow, OrbitControls, replay, DPR≤1.5, render-on-demand). Preview GIF: demo/bigben-3d.gif. Not wired into globe yet. Live: …/demo/bigben.html.
- 2026-10-27 (run 6) — Refined demo/bigben.html: tiered shaft + buttresses, detailed clock faces (Roman numerals/tracery), belfry arches, Ayrton lantern, ornate iron spire, canvas stone texture, hemisphere lighting; geometries merged by material. Updated demo/bigben-3d.gif + close-up preview.

- 2026-10-27 (run 7) — Integrate year-gated procedural 3D landmarks into the globe (not just demo). 23 landmarks with built/destroyed years; low-poly shared-material models (Big Ben clocktower reused from demo palette); LOD: emoji pins far away, 3D rises only when zoomed near (alt≤1.05, ≤5 closest, prune when away). DPR caps unchanged. No grayscale / no magic circle. Screenshot: screenshots/landmarks.png.
- 2026-10-28 — Perf: year slider coalesced to one render per animation frame (skips unchanged years; label updates instantly) — less DOM churn while dragging on iPad; bump map skipped on iPad/iPhone (less download + GPU memory). Feature: 📜 event list (top-right) sorted by year; tapping sets the year, flies there and opens the event panel. Translated en/ja/fr/de/zh. Screenshot: screenshots/event-list.png.

## Next (one small step per day)
2. Add 1–2 more landmarks per day (e.g. Chichen Itza, Petra, Alhambra, Kremlin) + refine meshes.
3. Add event: Black Death 1347, Magna Carta 1215, Moon landing 1969 (one per run).
4. Simple JSON schema validation script for contributed events (tools/validate.js).
5. Offline/PWA manifest + icon (dark Nordic minimalist style).
6. Translate event titles/summaries into ja/fr/de (content files currently en+zh only).
