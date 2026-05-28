import type { Lang } from "./content";

export type TrustPageSlug = "about" | "contact" | "privacy" | "disclaimer" | "sources";

type LocalizedText = Record<Lang, string>;

export type TrustPage = {
  slug: TrustPageSlug;
  title: LocalizedText;
  description: LocalizedText;
  eyebrow: LocalizedText;
  intro: LocalizedText;
  sections: {
    heading: LocalizedText;
    body: LocalizedText[];
  }[];
};

const lt = (zh: string, zhCn: string, en: string): LocalizedText => ({ zh, "zh-cn": zhCn, en });

export const trustPages: TrustPage[] = [
  {
    slug: "about",
    title: lt("關於我們", "关于我们", "About"),
    eyebrow: lt("關於超越者運動科學", "关于超越者运动科学", "About CYZ Sports Science"),
    description: lt(
      "了解超越者運動科學如何用證據整理健身、營養、補劑與訓練問題。",
      "了解超越者运动科学如何用证据整理健身、营养、补剂与训练问题。",
      "How CYZ Sports Science turns evidence into practical fitness, nutrition, supplement, and training answers.",
    ),
    intro: lt(
      "超越者運動科學是一個健身科普網站，目標是把常見問題整理成一般人看得懂、也能回頭查證的答案。",
      "超越者运动科学是一个健身科普网站，目标是把常见问题整理成普通人看得懂、也能回头查证的答案。",
      "CYZ Sports Science is a fitness education site built to make common training questions understandable and traceable.",
    ),
    sections: [
      {
        heading: lt("我們做什麼", "我们做什么", "What We Do"),
        body: [
          lt(
            "我們整理增肌、減脂、補劑、恢復、食物營養、動作選擇與中老年訓練等主題，並把研究與實務語言翻成可使用的決策線索。",
            "我们整理增肌、减脂、补剂、恢复、食物营养、动作选择与中老年训练等主题，并把研究与实务语言翻成可使用的决策线索。",
            "We organize topics such as muscle gain, fat loss, supplements, recovery, food nutrition, exercise selection, and older-adult training into practical decision support.",
          ),
          lt(
            "網站內容以一般科普為主，不提供個人化診斷、治療、處方或復健計畫。",
            "网站内容以一般科普为主，不提供个性化诊断、治疗、处方或康复计划。",
            "The content is general education. It does not provide individualized diagnosis, treatment, prescriptions, or rehab plans.",
          ),
        ],
      },
      {
        heading: lt("內容原則", "内容原则", "Editorial Principles"),
        body: [
          lt(
            "我們優先使用研究、指南、系統性回顧、教材型來源與一致的運動科學原則；遇到證據不穩定的話題，會避免把社群說法寫成確定事實。",
            "我们优先使用研究、指南、系统性综述、教材型来源与一致的运动科学原则；遇到证据不稳定的话题，会避免把社群说法写成确定事实。",
            "We prioritize research, guidelines, systematic reviews, textbook-style sources, and consistent exercise science principles. When evidence is uncertain, we avoid presenting social-media claims as settled facts.",
          ),
        ],
      },
    ],
  },
  {
    slug: "contact",
    title: lt("聯絡我們", "联系我们", "Contact"),
    eyebrow: lt("聯絡與提問", "联系与提问", "Contact and Questions"),
    description: lt(
      "聯絡超越者運動科學，或使用讀者提問表單寄出健身問題。",
      "联系超越者运动科学，或使用读者提问表单寄出健身问题。",
      "Contact CYZ Sports Science or send a reader fitness question by email.",
    ),
    intro: lt(
      "有內容建議、錯誤回報、合作想法或健身問題，都可以透過 email 聯絡。",
      "有内容建议、错误反馈、合作想法或健身问题，都可以通过 email 联系。",
      "For content suggestions, corrections, collaboration ideas, or fitness questions, email is the current contact method.",
    ),
    sections: [
      {
        heading: lt("聯絡信箱", "联系邮箱", "Email"),
        body: [
          lt(
            "目前主要聯絡信箱是 cyzsport0502@gmail.com。讀者提問表單會打開你的郵件 app，並把問題整理成 email 寄到這個信箱。",
            "目前主要联系邮箱是 cyzsport0502@gmail.com。读者提问表单会打开你的邮件 app，并把问题整理成 email 寄到这个邮箱。",
            "The current contact email is cyzsport0502@gmail.com. The reader question form opens your email app and prepares the message to this address.",
          ),
        ],
      },
      {
        heading: lt("回覆限制", "回复限制", "Response Limits"),
        body: [
          lt(
            "我們可以把問題整理成科普方向，但不會透過網站提供個別醫療、營養治療或傷病診斷。",
            "我们可以把问题整理成科普方向，但不会通过网站提供个别医疗、营养治疗或伤病诊断。",
            "We may turn questions into educational topics, but we do not provide individual medical care, nutrition therapy, injury diagnosis, or treatment through the site.",
          ),
        ],
      },
    ],
  },
  {
    slug: "privacy",
    title: lt("隱私權政策", "隐私权政策", "Privacy Policy"),
    eyebrow: lt("資料與隱私", "资料与隐私", "Data and Privacy"),
    description: lt(
      "了解超越者運動科學目前如何處理讀者提問、email 與網站資料。",
      "了解超越者运动科学目前如何处理读者提问、email 与网站资料。",
      "How CYZ Sports Science currently handles reader questions, email, and site data.",
    ),
    intro: lt(
      "目前網站是靜態內容站，提問功能使用 mailto，不在網站伺服器儲存表單資料。",
      "目前网站是静态内容站，提问功能使用 mailto，不在网站服务器储存表单资料。",
      "The site is currently static. The question form uses mailto and does not store form submissions on a site server.",
    ),
    sections: [
      {
        heading: lt("提問資料", "提问资料", "Question Data"),
        body: [
          lt(
            "當你送出提問表單時，網站會開啟你的郵件 app。問題內容與 Gmail 地址會由你的郵件服務寄出，網站本身不會建立資料庫保存這些內容。",
            "当你送出提问表单时，网站会开启你的邮件 app。问题内容与 Gmail 地址会由你的邮件服务寄出，网站本身不会建立数据库保存这些内容。",
            "When you submit the question form, the site opens your email app. Your question and Gmail address are sent through your email provider; the site itself does not create a database of these submissions.",
          ),
        ],
      },
      {
        heading: lt("第三方服務", "第三方服务", "Third-Party Services"),
        body: [
          lt(
            "未來若接入 Google AdSense、分析工具、電子報或表單服務，隱私權政策會更新，並說明相關服務可能使用的 cookie、廣告或統計資料。",
            "未来若接入 Google AdSense、分析工具、电子报或表单服务，隐私权政策会更新，并说明相关服务可能使用的 cookie、广告或统计资料。",
            "If Google AdSense, analytics, newsletter, or form services are added later, this policy will be updated to explain cookies, advertising, and analytics data where relevant.",
          ),
        ],
      },
    ],
  },
  {
    slug: "disclaimer",
    title: lt("免責聲明", "免责声明", "Disclaimer"),
    eyebrow: lt("健康內容聲明", "健康内容声明", "Health Content Notice"),
    description: lt(
      "超越者運動科學的內容為一般科普，不取代醫療、營養或復健專業建議。",
      "超越者运动科学的内容为一般科普，不取代医疗、营养或康复专业建议。",
      "CYZ Sports Science provides general education and does not replace medical, nutrition, or rehabilitation advice.",
    ),
    intro: lt(
      "健身、營養、補劑與傷病相關內容需要放在個人狀況中判斷。本站內容不能取代專業人員對你的個別評估。",
      "健身、营养、补剂与伤病相关内容需要放在个人状况中判断。本站内容不能取代专业人员对你的个别评估。",
      "Fitness, nutrition, supplements, and injury-related topics must be interpreted in personal context. This site cannot replace individualized assessment by qualified professionals.",
    ),
    sections: [
      {
        heading: lt("不是醫療建議", "不是医疗建议", "Not Medical Advice"),
        body: [
          lt(
            "本站內容不用於診斷、治療、預防任何疾病，也不應被視為醫師、營養師、物理治療師或其他專業人員的個別建議。",
            "本站内容不用于诊断、治疗、预防任何疾病，也不应被视为医生、营养师、物理治疗师或其他专业人员的个别建议。",
            "The content is not intended to diagnose, treat, or prevent disease, and should not be treated as individual advice from a physician, dietitian, physical therapist, or other professional.",
          ),
          lt(
            "若你有疼痛、疾病、用藥、懷孕、中老年慢性病風險，或正在復健，開始訓練或補充品前應先詢問合格專業人員。",
            "若你有疼痛、疾病、用药、怀孕、中老年慢性病风险，或正在康复，开始训练或补剂前应先询问合格专业人员。",
            "If you have pain, disease, medication use, pregnancy, older-adult chronic disease risk, or are in rehab, consult a qualified professional before changing training or supplements.",
          ),
        ],
      },
      {
        heading: lt("風險與個體差異", "风险与个体差异", "Risk and Individual Differences"),
        body: [
          lt(
            "相同訓練、飲食或補劑策略，不一定適合每個人。請依照自身能力、恢復、病史與專業建議調整。",
            "相同训练、饮食或补剂策略，不一定适合每个人。请依照自身能力、恢复、病史与专业建议调整。",
            "The same training, diet, or supplement strategy may not fit everyone. Adjust based on ability, recovery, medical history, and professional guidance.",
          ),
        ],
      },
    ],
  },
  {
    slug: "sources",
    title: lt("作者與資料來源說明", "作者与资料来源说明", "Authors and Sources"),
    eyebrow: lt("內容如何產生", "内容如何产生", "How Content Is Made"),
    description: lt(
      "了解超越者運動科學如何選擇資料來源、整理證據與轉譯成健身科普內容。",
      "了解超越者运动科学如何选择资料来源、整理证据与转译成健身科普内容。",
      "How CYZ Sports Science selects sources, organizes evidence, and translates research into fitness education.",
    ),
    intro: lt(
      "本站會把公開研究、指南、教材型資料與實務問題整合成文章、FAQ、動作庫、食物庫與證據頁。",
      "本站会把公开研究、指南、教材型资料与实务问题整合成文章、FAQ、动作库、食物库与证据页。",
      "The site integrates public research, guidelines, textbook-style material, and practical questions into articles, FAQ, exercise pages, food pages, and evidence summaries.",
    ),
    sections: [
      {
        heading: lt("資料來源類型", "资料来源类型", "Source Types"),
        body: [
          lt(
            "優先參考系統性回顧、統合分析、運動醫學或公共衛生指南、運動營養立場聲明、教材型資料與可查證的原始研究。",
            "优先参考系统性综述、荟萃分析、运动医学或公共卫生指南、运动营养立场声明、教材型资料与可查证的原始研究。",
            "We prioritize systematic reviews, meta-analyses, sports medicine or public health guidelines, sports nutrition position stands, textbook-style material, and traceable primary studies.",
          ),
          lt(
            "社群熱門說法可以作為選題來源，但不會單獨當成事實依據。",
            "社群热门说法可以作为选题来源，但不会单独当成事实依据。",
            "Popular social claims may inspire topics, but they are not treated as evidence by themselves.",
          ),
        ],
      },
      {
        heading: lt("證據轉譯方式", "证据转译方式", "Evidence Translation"),
        body: [
          lt(
            "文章會盡量區分研究發現、實務建議與推論。當證據只適用於特定族群、劑量、訓練狀態或情境時，會避免過度推論。",
            "文章会尽量区分研究发现、实务建议与推论。当证据只适用于特定族群、剂量、训练状态或情境时，会避免过度推论。",
            "Articles aim to separate study findings, practical recommendations, and inference. When evidence only applies to specific populations, doses, training status, or contexts, we avoid overgeneralizing.",
          ),
        ],
      },
    ],
  },
];

export function getTrustPage(slug: string) {
  return trustPages.find((page) => page.slug === slug);
}
