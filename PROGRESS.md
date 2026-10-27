# 歷史地球 History Globe — Progress log

Live: https://leeryan1999.github.io/history-globe/ · Repo: https://github.com/LeeRyan1999/history-globe

## Done
- 2026-10-26 — v1 prototype: 3D globe (globe.gl), year slider + era buttons, historical-basemaps borders (nearest snapshot), 20 landmarks with built/destroyed years, 3 seed events (Constantinople 1453, Columbus 1492, Zheng He 1405) with 4-phase POV (arrival/guide/climax/reflection), English TTS + bilingual subtitles, reflection cards + quiz, CONTRIBUTING.md.
- 2026-10-27 — Performance fix for iPad: pause globe rendering while in POV scene, resume on exit; disable polygon transition animation when switching years.
- 2026-10-27 (run 2) — Perf: pixel ratio capped at 1.5 on iPad/iPhone (2 on desktop); globe pauses when tab/app is hidden. Top-right language selector (English default, 日本語, Français, Deutsch, 中文; saved in localStorage) — UI labels, buttons, eras, year format, cards' headings translated. Event body text stays English (zh lines shown only in 中文 mode); event titles in zh only. Ko-fi link as inline-SVG Roman aureus coin (translated tooltip).
- 2026-10-27 (run 4) — Country tap: gold glowing outline only (paths layer + dashed pulse; fill unchanged; tap empty globe to clear). No polygon re-tessellation on hover/select. Demo GIF (not in app): demo/bigben-rise.gif (+ mp4) — low-poly Elizabeth Tower rising with dust/glow.
- 2026-10-27 (run 5) — Standalone three.js Big Ben demo: demo/bigben.html (procedural Elizabeth Tower, rise 2.4s + dust/glow, OrbitControls, replay, DPR≤1.5, render-on-demand). Preview GIF: demo/bigben-3d.gif. Not wired into globe yet. Live: …/demo/bigben.html.

## Next (one small step per day)
1. Year jump to event: tapping an event in a list sets the year and flies to it (event list drawer).
2. Add 1–2 landmarks per day (e.g. Chichen Itza, Petra, Alhambra, Kremlin).
3. Add event: Black Death 1347, Magna Carta 1215, Moon landing 1969 (one per run).
4. Simple JSON schema validation script for contributed events (tools/validate.js).
5. Offline/PWA manifest + icon (dark Nordic minimalist style).
6. Translate event titles/summaries into ja/fr/de (content files currently en+zh only).
