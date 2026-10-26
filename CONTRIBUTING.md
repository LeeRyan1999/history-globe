# Contributing to History Globe

Every historical event is **one JSON file** in `/events`, listed in `events/index.json`. Landmarks live in `landmarks.json`. Content (JSON) is separate from presentation, so the same files can later drive a 3D/Unity version.

## Add an event (Pull Request)
1. Copy `events/columbus-1492.json` to `events/<id>.json` (`id` = kebab-case + year).
2. Add the filename to `events/index.json`.
3. Put scene art in `/img` (your own work, public domain or CC-licensed — credit it in `sources`).
4. Open a PR. Reviewers check historical accuracy and sources before merging; new events start as `"review_status": "draft"` and become `"reviewed"` / `"community"`.

## Event schema
| field | type | notes |
|---|---|---|
| `id` | string | unique, kebab-case |
| `year`, `year_end?` | int | negative = BC. Event shows on the globe within ±50 years of its span |
| `date`, `place` | string | display text |
| `lat`, `lng` | number | marker position |
| `title`, `title_zh` | string | |
| `perspective_role`, `perspective_role_zh` | string | "who you are" in the POV |
| `summary`, `summary_zh` | string | short factual summary card |
| `scenes[]` | array | ordered phases: `arrival` → `guide` (1+) → `climax` → `reflection` |
| `facts[]`, `facts_zh[]` | string[] | 3 key facts |
| `next`, `next_zh` | string | "what happened next" |
| `then_now` | `{then, now}` | |
| `quiz` | `{q, options[], answer}` | `answer` = index |
| `sources[]` | `{title, url}` | **required**, at least one reputable source |
| `author`, `review_status` | string | `draft` \| `reviewed` \| `community` |

### Scene
`{ phase, bg, caption?, ambience?: "waves"|"wind", zoom?, duration?, lines[{speaker, en, zh, audio?}], interaction?{type: "look"|"tap"|"follow", target, target_zh, x, y} }`

- The user never replies: characters speak **to** the user (English TTS + EN/中文 subtitles). Keep lines short (~12 words).
- After the lines, `interaction` shows a hotspot at `x`,`y` (% of screen) the user must look at / tap / follow to continue — every 2–3 lines.

## Landmark schema
`{ id, name, zh, lat, lng, built, destroyed|null, icon }` — `built`/`destroyed` are years (negative = BC); a landmark shows only while it exists.

## Rules
Historically accurate, sourced, respectful to all peoples involved; offer other perspectives where relevant. No copyrighted images without permission.
