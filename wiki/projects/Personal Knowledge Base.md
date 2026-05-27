---
type: project
status: seed
created: 2026-05-27
updated: 2026-05-27
sources:
  - "[[Karpathy - LLM Wiki]]"
tags:
  - personal-knowledge
  - system-design
  - sports-science
---

# Personal Knowledge Base

這是使用者的個人 LLM Wiki，主軸是運動科學。它的目標是把文獻、提問、閱讀、研究與對話累積成一個可長期演進的知識系統。

## Design Principles

- 原始資料保持可追溯，不混入未標記的推論。
- wiki 頁面由 LLM 主動維護，使用者主要負責方向與判斷。
- 每次新增來源都應該更新既有頁面，而不只是新增一篇孤立摘要。
- 重要對話成果要存回 wiki，避免消失在聊天紀錄裡。
- 定期 lint，讓知識庫保持健康。

## Current Scope

目前優先範圍：

- 運動科學研究文獻
- 運動營養與恢復
- 訓練適應與表現
- 研究方法與實務應用

初始結構支援：

- 來源管理
- 概念頁
- 實體頁
- 專案頁
- 重要問題
- 綜合分析
- 維護報告

## Next Decisions

- 新來源通常會是網頁、PDF、書籍筆記、逐字稿、圖片、還是工作文件？
- 是否要用 Obsidian 作為主要瀏覽器？
- 是否要初始化 git 來追蹤演進？
- 文獻頁面要偏「研究者筆記」還是「教練/運動員實務指南」？

## Related

- [[LLM Wiki Method]]
- [[Karpathy - LLM Wiki]]
- [[Sports Science]]
