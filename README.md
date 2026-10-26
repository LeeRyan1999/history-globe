# History Globe 歷史地球

選一個年份，地球就變回那個時代的樣子：當時的國家與國界、當時已存在的世界地標，以及發光的重要歷史事件。點事件就能以第一人稱「親身參與」——角色用英文對你說話（你不能回答），配英文語音與中英字幕，最後有知識卡、「後來呢」、小測驗與來源。

**線上體驗：** https://leeryan1999.github.io/history-globe/

## 使用方式
- 上方滑桿 / ‹ › / 時代按鈕選年份（西元前 3000 年～2010 年）。
- 點國家看名稱；點地標圖示看建造年代；點發光點進入事件。
- 體驗分四段：抵達 → 引導（看／點／跟隨）→ 高潮 → 回望。建議戴耳機。

## 一起新增歷史事件
每個事件是 `events/` 裡的一個 JSON 檔，地標在 `landmarks.json`。格式與投稿流程見 [CONTRIBUTING.md](CONTRIBUTING.md)，用 GitHub Pull Request 投稿，審核史實與來源後上線。

## 資料來源與授權
- 歷史國界：[aourednik/historical-basemaps](https://github.com/aourednik/historical-basemaps)（GPL-3.0），執行時由 jsDelivr 載入，顯示最接近的年份快照；古代國界為近似值。
- 地球：[globe.gl](https://github.com/vasturiano/globe.gl)。
- 場景插畫：AI 生成，僅供示意，非歷史實景。
