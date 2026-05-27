import type { Lang } from "../data/content";

export const labels = {
  zh: {
    brand: "運動科學筆記",
    tagline: "用證據回答健身問題",
    topics: "主題",
    faq: "常見問題",
    articles: "文章",
    evidence: "證據庫",
    newsletter: "電子報",
    readMore: "閱讀",
    viewQuestion: "看回答",
    evidenceLabel: "證據",
    audience: "適合對象",
    takeaways: "重點整理",
    relatedEvidence: "相關證據",
    medical: "此內容為一般科普，不取代醫師、營養師或物理治療師的個別建議。",
  },
  en: {
    brand: "Sports Science Notes",
    tagline: "Evidence-based answers for fitness decisions",
    topics: "Topics",
    faq: "FAQ",
    articles: "Articles",
    evidence: "Evidence",
    newsletter: "Newsletter",
    readMore: "Read",
    viewQuestion: "Answer",
    evidenceLabel: "Evidence",
    audience: "Audience",
    takeaways: "Key takeaways",
    relatedEvidence: "Related evidence",
    medical: "This is general education and does not replace individual medical, nutrition, or rehab advice.",
  },
} as const;

export function t(lang: Lang) {
  return labels[lang];
}

export function otherLang(lang: Lang): Lang {
  return lang === "zh" ? "en" : "zh";
}
