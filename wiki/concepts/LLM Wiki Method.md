---
type: concept
status: seed
created: 2026-05-27
updated: 2026-05-27
sources:
  - "[[Karpathy - LLM Wiki]]"
tags:
  - knowledge-management
  - llm
  - wiki
---

# LLM Wiki Method

LLM Wiki 是一種用 LLM 維護個人或團隊知識庫的方法。它的重點不是在查詢時從原始文件臨時檢索與拼湊答案，而是讓 LLM 在每次新增資料時，主動把知識編譯進一個持久、互相連結、可演進的 Markdown wiki。

## Core Shift

傳統 RAG 的流程是：

`query -> retrieve raw chunks -> synthesize answer`

LLM Wiki 的流程是：

`ingest source -> update persistent wiki -> query wiki -> file valuable answers back`

差異在於知識是否會累積。LLM Wiki 把整理、交叉引用、矛盾檢查與綜合分析提前到 ingest 階段完成，讓後續查詢站在已經整理過的知識結構上。

## Three Layers

- `raw/`：原始來源。不可變、可追溯，是事實來源。
- `wiki/`：LLM 維護的 Markdown 頁面。可更新、可連結、可重組。
- `AGENTS.md`：操作規則。定義目錄、頁面格式、工作流程與維護習慣。

## Three Operations

- Ingest：處理新來源，建立來源摘要，更新相關概念與實體頁，更新索引與 log。
- Query：根據 wiki 回答問題，必要時把有價值的回答保存成新頁。
- Lint：檢查矛盾、孤兒頁、缺少連結、過期資訊與研究缺口。

## Why It Works

人類通常會放棄知識庫，不是因為不會思考，而是因為維護成本太高。LLM 適合承擔摘要、分類、交叉連結與一致性維護，使用者則專注於選題、來源、判斷與追問。

## Related

- [[Personal Knowledge Base]]
- [[Karpathy - LLM Wiki]]

