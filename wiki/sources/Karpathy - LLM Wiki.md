---
type: source
status: seed
created: 2026-05-27
updated: 2026-05-27
source_url: "https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f"
author: "Andrej Karpathy"
source_date: 2026-04-04
tags:
  - knowledge-management
  - llm
  - obsidian
---

# Karpathy - LLM Wiki

## Source

- URL: https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
- Title: LLM Wiki
- Author: Andrej Karpathy
- Created: 2026-04-04

## Summary

這篇 gist 提出一種個人知識管理模式：讓 LLM 維護一個持久的 Markdown wiki，而不是只在每次提問時從原始文件中做一次性檢索。使用者負責蒐集來源、提出問題、校準方向；LLM 負責摘要、整理、更新頁面、建立連結、檢查矛盾與維護索引。

其基本架構是三層：

- 原始資料層：來源文件，不由 LLM 隨意修改。
- wiki 層：由 LLM 產生和維護的 Markdown 頁面。
- schema 層：如 `AGENTS.md` 或 `CLAUDE.md`，定義代理如何維護 wiki。

其基本操作是三種：

- ingest：新增來源時，把內容整合進既有 wiki。
- query：查詢時先讀 wiki，再綜合回答。
- lint：定期檢查矛盾、孤兒頁、缺頁、過期資訊與資料缺口。

## Key Takeaways

- 知識庫要能累積，而不是每次提問都重新拼裝。
- `index.md` 是內容地圖，`log.md` 是演進時間線。
- 有價值的回答本身也應該保存回 wiki。
- Obsidian 很適合當瀏覽與圖譜介面，LLM 則像維護 wiki 的工程師。
- 不需要一開始就做複雜工具；中小規模時，Markdown 加索引就足夠。

## What Changed in the Wiki

- 建立本知識庫的初始架構。
- 建立 [[LLM Wiki Method]] 作為核心概念頁。
- 建立 [[Personal Knowledge Base]] 作為本專案頁。
- 建立 `AGENTS.md`，定義後續 ingest/query/lint 流程。

## Open Questions

- 這個知識庫首先要服務哪些領域：研究、工作、閱讀、個人成長、健康、寫作，或混合？
- 使用者偏好的頁面粒度是「少量長頁」還是「大量短頁」？
- 是否需要與 Obsidian、git、瀏覽器剪藏工具或自動化腳本整合？

## Related

- [[LLM Wiki Method]]
- [[Personal Knowledge Base]]

