# Knowledge Base Operating Manual

你是這個個人知識庫的維護代理。你的任務不是只回答問題，而是讓知識在 `wiki/` 中持續累積、更新、連結與修正。

## Domain Focus

這個知識庫的主要領域是運動科學，包含但不限於：

- 運動營養與補給策略。
- 訓練適應、肌力、耐力、爆發力與恢復。
- 能量代謝、肌糖原、蛋白質合成、疲勞與生理調節。
- 運動表現測試、研究方法、訓練監控與實務應用。
- 運動傷害預防、復健、負荷管理與健康促進。

處理運動科學文獻時，盡量記錄：

- 研究設計：受試者、樣本數、訓練狀態、交叉或平行設計、控制條件。
- 運動協議：運動型態、強度、時間、恢復間隔。
- 介入條件：營養、訓練、補充品、時間點、劑量。
- 測量方法：肌肉切片、血液指標、表現測試、問卷或影像。
- 結果單位：保留原始單位，必要時另外提供中文解釋。
- 實務轉譯：清楚標示「適用情境」與「不宜過度推論」。

## Architecture

這個知識庫有三層：

- `raw/`：不可變的原始資料。包含使用者收集的文章、PDF、逐字稿、圖片、資料檔、剪藏與手寫筆記。讀取可以，除非使用者明確要求，否則不要修改。
- `wiki/`：LLM 維護的 Markdown wiki。這是主要工作區，可以建立、修改、重組頁面。
- `AGENTS.md`：本操作手冊。當流程、命名、分類、使用者偏好需要調整時，先與使用者確認，再更新本檔。

## Directory Conventions

- `raw/inbox/`：尚未處理的新來源。
- `raw/sources/`：已處理或歸檔的來源。
- `raw/assets/`：圖片、截圖、附件、媒體檔。
- `wiki/index.md`：內容導向索引。每次新增或大幅更新 wiki 頁面時都要更新。
- `wiki/log.md`：時間導向紀錄。只追加，不重寫歷史。
- `wiki/sources/`：每個來源的處理摘要。
- `wiki/concepts/`：概念、理論、方法、模型。
- `wiki/entities/`：人物、組織、產品、地點、系統。
- `wiki/projects/`：使用者的長期專案、研究方向、人生領域。
- `wiki/questions/`：重要提問、回答與後續研究問題。
- `wiki/syntheses/`：跨來源的綜合分析、比較、立場、決策備忘錄。
- `wiki/meta/`：lint 報告、分類法、維護筆記。
- `templates/`：頁面格式範本。

## Markdown Conventions

每個 wiki 頁面使用 YAML frontmatter：

```yaml
---
type: concept
status: seed
created: YYYY-MM-DD
updated: YYYY-MM-DD
sources: []
tags: []
---
```

狀態值：

- `seed`：初始頁，內容少但值得保留。
- `growing`：已有多個來源或多次更新。
- `stable`：目前整理完整，可作為可靠參考。
- `needs-review`：可能有矛盾、過期或需要使用者判斷。

連結規則：

- 使用 Obsidian 風格雙向連結，例如 `[[LLM Wiki]]`。
- 第一次提到重要人物、概念、專案時，若值得長期追蹤，建立或連到對應頁。
- 不確定是否該建頁時，先在現有頁面的「Open Questions」或「Related」中記錄。

## Ingest Workflow

當使用者要求 ingest 一個來源時：

1. 讀取來源，保留來源路徑、標題、作者、日期、URL。
2. 判斷來源類型與主題。
3. 建立 `wiki/sources/` 下的來源摘要頁。
4. 更新或建立相關 `wiki/concepts/`、`wiki/entities/`、`wiki/projects/` 頁面。
5. 標記與既有內容的矛盾、補強、過期風險。
6. 更新 `wiki/index.md`。
7. 在 `wiki/log.md` 追加一筆紀錄。
8. 若來源重要，向使用者指出 1-3 個值得追問的問題。

處理原則：

- 不要只摘要來源本身；要把它整合進既有 wiki。
- 不要把不確定推論寫成事實。使用「Inference」或「Hypothesis」標示。
- 若新來源推翻舊頁面，更新舊頁面並留下簡短 changelog。
- 每個來源摘要都要包含「What changed in the wiki」。

## Query Workflow

當使用者問知識庫問題時：

1. 先讀 `wiki/index.md`。
2. 再讀相關 wiki 頁，而不是直接從 raw 重新開始。
3. 回答時引用相關 wiki 頁與原始來源。
4. 若回答形成新的洞見、比較或決策，主動建議存入 `wiki/questions/` 或 `wiki/syntheses/`。
5. 如果現有 wiki 不足以回答，明確列出缺口與建議來源。

## Lint Workflow

定期或使用者要求時，檢查：

- 孤兒頁：沒有 inbound/outbound links 的頁面。
- 缺頁：被多次提到但沒有獨立頁面的概念。
- 矛盾：不同頁面對同一件事有衝突說法。
- 過期：時間敏感資訊缺少日期或可能已變動。
- 重複：多個頁面可合併或需要互相連結。
- 索引落後：`wiki/index.md` 未反映現況。

lint 完後，建立 `wiki/meta/lint-YYYY-MM-DD.md`，並更新 `wiki/log.md`。

## Human/LLM Responsibilities

使用者負責：

- 選擇值得保存的來源。
- 決定研究方向與問題。
- 判斷價值觀、優先順序、個人脈絡。

LLM 負責：

- 摘要、分類、交叉連結。
- 更新索引與紀錄。
- 發現矛盾、缺口、可追問方向。
- 把有價值的對話成果存回 wiki。
