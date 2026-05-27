import type { Lang } from "../data/content";

export const labels = {
  zh: {
    brand: "超越者運動科學",
    tagline: "用證據回答健身問題",
    topics: "主題",
    exercises: "動作庫",
    muscles: "肌群",
    foods: "食物庫",
    faq: "常見問題",
    articles: "文章",
    evidence: "證據庫",
    trends: "熱門方向",
    newsletter: "電子報",
    readMore: "閱讀",
    viewQuestion: "看回答",
    evidenceLabel: "證據",
    audience: "適合對象",
    takeaways: "重點整理",
    relatedEvidence: "相關證據",
    medical: "此內容為一般科普，不取代醫師、營養師或物理治療師的個別建議。",
  },
  "zh-cn": {
    brand: "超越者运动科学",
    tagline: "用证据回答健身问题",
    topics: "主题",
    exercises: "动作库",
    muscles: "肌群",
    foods: "食物库",
    faq: "常见问题",
    articles: "文章",
    evidence: "证据库",
    trends: "热门方向",
    newsletter: "电子报",
    readMore: "阅读",
    viewQuestion: "看回答",
    evidenceLabel: "证据",
    audience: "适合对象",
    takeaways: "重点整理",
    relatedEvidence: "相关证据",
    medical: "此内容为一般科普，不取代医生、营养师或物理治疗师的个别建议。",
  },
  en: {
    brand: "CYZ Sports Science",
    tagline: "Evidence-based answers for fitness decisions",
    topics: "Topics",
    exercises: "Exercises",
    muscles: "Muscles",
    foods: "Foods",
    faq: "FAQ",
    articles: "Articles",
    evidence: "Evidence",
    trends: "Trends",
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
  if (lang === "zh") return "zh-cn";
  if (lang === "zh-cn") return "en";
  return "zh";
}
