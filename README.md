# Personal LLM Wiki

這是一個依照 Karpathy「LLM Wiki」模式建立的個人知識庫起始骨架，主要用於運動科學、運動營養、訓練適應、恢復與表現相關研究。

核心原則：

- `raw/` 是原始資料層：文章、PDF、訪談、筆記、圖片、CSV 等。這裡是事實來源，原則上不由 LLM 修改。
- `wiki/` 是整理後的知識層：摘要、人物、概念、專案、問題、綜合分析。這裡由 LLM 維護，並持續更新交叉連結。
- `AGENTS.md` 是操作規則層：告訴 Codex/LLM 之後要如何 ingest、query、lint 這個知識庫。

## 使用方式

1. 把新資料放進 `raw/inbox/`。
2. 對 Codex 說：「請 ingest `raw/inbox/檔名` 到我的知識庫。」
3. Codex 會讀來源、建立或更新 `wiki/` 裡的頁面、更新 `wiki/index.md`，並在 `wiki/log.md` 記錄。
4. 查詢時先問 wiki，例如：「根據我的知識庫，整理我對某主題的立場與未解問題。」
5. 重要回答可以請 Codex 存回 `wiki/questions/` 或 `wiki/syntheses/`，讓對話也能累積。

## 建議工作節奏

- 每次 ingest 一個來源，品質通常比大量批次更好。
- 運動科學來源優先記錄：研究對象、訓練狀態、運動協議、營養介入、測量方法、主要結果、實務限制。
- 每週或每累積 10 個來源，請 Codex 做一次 lint。
- 用 Obsidian 開啟這個資料夾時，可以用 graph view 查看連結狀態。
- 如果這個知識庫開始變重要，建議初始化 git，讓每次整理都有版本紀錄。
