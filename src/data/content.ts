export type Lang = "zh" | "en";

export type Topic = {
  slug: string;
  zhTitle: string;
  enTitle: string;
  zhDescription: string;
  enDescription: string;
  accent: string;
};

export type Faq = {
  slug: string;
  lang: Lang;
  title: string;
  description: string;
  topic: string;
  audience: string;
  evidence: "strong" | "moderate" | "emerging" | "caution";
  answer: string[];
  takeaways: string[];
  relatedEvidence: string[];
  relatedArticle?: string;
};

export type Article = {
  slug: string;
  lang: Lang;
  title: string;
  description: string;
  topic: string;
  readingTime: string;
  body: {
    heading: string;
    paragraphs: string[];
  }[];
  relatedEvidence: string[];
};

export type Evidence = {
  slug: string;
  title: string;
  description: string;
  strength: "A" | "B" | "C" | "D";
  sourceType: string;
  summary: string;
  practicalUse: string[];
};

export const topics: Topic[] = [
  {
    slug: "muscle-gain",
    zhTitle: "增肌",
    enTitle: "Muscle Gain",
    zhDescription: "蛋白質、肌酸、訓練量與恢復如何一起決定肌肉成長。",
    enDescription: "Protein, creatine, training volume, and recovery for building muscle.",
    accent: "coral",
  },
  {
    slug: "fat-loss",
    zhTitle: "減脂",
    enTitle: "Fat Loss",
    zhDescription: "熱量赤字、蛋白質、重訓與有氧的實用排序。",
    enDescription: "Calorie deficit, protein, lifting, and cardio without losing the plot.",
    accent: "teal",
  },
  {
    slug: "supplements",
    zhTitle: "補劑",
    enTitle: "Supplements",
    zhDescription: "把肌酸、蛋白粉、咖啡因、omega-3 與甜菜根汁放回證據地圖。",
    enDescription: "Creatine, protein powder, caffeine, omega-3, and nitrate in context.",
    accent: "gold",
  },
  {
    slug: "recovery",
    zhTitle: "恢復",
    enTitle: "Recovery",
    zhDescription: "睡眠、DOMS、碳水、蛋白質與訓練壓力管理。",
    enDescription: "Sleep, soreness, carbohydrates, protein, and training stress.",
    accent: "violet",
  },
  {
    slug: "training",
    zhTitle: "訓練",
    enTitle: "Training",
    zhDescription: "有氧、阻力訓練、干擾效應與長期適應。",
    enDescription: "Cardio, resistance training, interference, and long-term adaptation.",
    accent: "green",
  },
  {
    slug: "older-adults",
    zhTitle: "中老年健康",
    enTitle: "Older Adult Health",
    zhDescription: "肌力、蛋白質、跌倒風險與安全訓練邊界。",
    enDescription: "Strength, protein, fall risk, and safe training boundaries.",
    accent: "rose",
  },
];

export const evidence: Evidence[] = [
  {
    slug: "supplement-evidence-map",
    title: "Sports Nutrition Supplement Evidence Map",
    description: "A practical ranking of common supplements by evidence strength and use case.",
    strength: "A",
    sourceType: "Internal synthesis from position stands, reviews, and wiki notes",
    summary:
      "Creatine, protein, caffeine, nitrate, beta-alanine, bicarbonate, and omega-3 sit in different evidence tiers. The most useful content explains context, endpoints, and who should not overpay.",
    practicalUse: [
      "Build supplement guides around use cases rather than hype.",
      "Separate muscle gain, endurance, recovery, sleep, and health endpoints.",
      "Flag low-evidence products as education opportunities, not miracle solutions.",
    ],
  },
  {
    slug: "protein-supplementation",
    title: "Protein Supplementation",
    description: "Protein powder is a convenience tool for meeting daily protein targets.",
    strength: "A",
    sourceType: "ISSN review and internal concept note",
    summary:
      "Protein supplements are not mandatory, but they can help athletes, busy lifters, people in an energy deficit, and people with higher protein targets meet their daily intake.",
    practicalUse: [
      "Start with daily protein intake before debating timing.",
      "Use whole foods as the base and supplements to close gaps.",
      "Discuss safety separately for healthy lifters versus people with kidney disease.",
    ],
  },
  {
    slug: "omega-3-athletes",
    title: "Omega-3 for Athletes",
    description: "EPA/DHA status may matter for health, recovery, and some performance endpoints.",
    strength: "B",
    sourceType: "ISSN position stand, athlete omega-3 index review, recovery review",
    summary:
      "Athletes often have low omega-3 status. EPA/DHA may support cardiovascular health, recovery markers, soreness, sleep, and some function outcomes, but results vary by endpoint and population.",
    practicalUse: [
      "Assess fish intake or omega-3 index before supplementing aggressively.",
      "Keep recovery, performance, and health claims separate.",
      "Avoid promising hypertrophy benefits for every young lifter.",
    ],
  },
  {
    slug: "dietary-nitrate",
    title: "Dietary Nitrate and Beetroot Juice",
    description: "Nitrate may reduce oxygen cost and support some endurance or high-intensity efforts.",
    strength: "A",
    sourceType: "Exercise performance review and oxidative stress meta-analysis",
    summary:
      "Dietary nitrate from beetroot juice or leafy greens can increase nitrite availability, influence nitric oxide pathways, lower oxygen cost in submaximal exercise, and may support redox markers.",
    practicalUse: [
      "Use nitrate content, not bottle size, when discussing dosage.",
      "Explain why mouthwash can interfere with nitrate conversion.",
      "Be cautious with low blood pressure, cardiovascular conditions, or medication use.",
    ],
  },
  {
    slug: "concurrent-training",
    title: "Concurrent Training and Interference",
    description: "Combining cardio and lifting can work when volume, fatigue, and modality are managed.",
    strength: "B",
    sourceType: "Training adaptation concept notes and concurrent training sources",
    summary:
      "Cardio does not automatically kill gains. Interference risk depends on endurance volume, intensity, modality, recovery resources, and how close the lifter is to their adaptive limit.",
    practicalUse: [
      "Use low-impact cardio when hypertrophy is the priority.",
      "Separate hard endurance and hard lower-body lifting when possible.",
      "Track fatigue, not just whether cardio exists.",
    ],
  },
  {
    slug: "carbohydrate-refueling",
    title: "Post-Exercise Carbohydrate Refueling",
    description: "Carbohydrate timing matters most when the next hard session is soon.",
    strength: "A",
    sourceType: "Classic glycogen study and modern review synthesis",
    summary:
      "Early post-exercise carbohydrate intake can matter when rapid glycogen restoration is needed. It is less urgent when the next hard session is more than a day away and total intake is adequate.",
    practicalUse: [
      "Prioritize rapid refueling for two-a-day training, tournaments, and endurance blocks.",
      "Do not overstate the urgency for casual lifters with 24-48 hours between sessions.",
      "Add protein when total carbohydrate or energy intake is constrained.",
    ],
  },
];

export const faqs: Faq[] = [
  {
    slug: "does-protein-powder-hurt-kidneys",
    lang: "zh",
    title: "蛋白粉會傷腎嗎？",
    description: "健康健身者和腎臟疾病族群要分開討論。",
    topic: "supplements",
    audience: "增肌、減脂、忙碌工作者",
    evidence: "strong",
    answer: [
      "對健康成人來說，蛋白粉本身不是傷腎魔法。它只是把蛋白質做成比較方便攝取的形式。",
      "真正需要小心的是已經有腎臟疾病、醫師限制蛋白攝取、或同時用藥的人。這類情況不該直接套用健身建議。",
      "比較實用的問題不是蛋白粉能不能喝，而是你每天總蛋白、總熱量、飲食纖維、水分和訓練是否配得上目標。",
    ],
    takeaways: ["先看每日總蛋白，不要只看粉。", "健康人和腎病患者不能混在一起講。", "蛋白粉是工具，不是必需品。"],
    relatedEvidence: ["protein-supplementation"],
    relatedArticle: "protein-powder-is-a-tool",
  },
  {
    slug: "how-much-protein-per-day",
    lang: "zh",
    title: "健身一天要吃多少蛋白質？",
    description: "多數訓練者先抓每日目標，再談餐次和蛋白粉。",
    topic: "muscle-gain",
    audience: "新手、增肌、減脂",
    evidence: "strong",
    answer: [
      "多數阻力訓練者可以先用每公斤體重約 1.6 g 作為實務起點，再依熱量赤字、訓練量、飽足感和腸胃耐受調整。",
      "如果你正在減脂、訓練量高、或想保留瘦體重，蛋白質目標通常會比久坐族群高。",
      "蛋白粉不是第一步。第一步是知道你現在每天大概吃多少蛋白質。",
    ],
    takeaways: ["先估算總量。", "減脂期通常更需要注意蛋白。", "每餐分配比單一補劑更重要。"],
    relatedEvidence: ["protein-supplementation"],
    relatedArticle: "protein-powder-is-a-tool",
  },
  {
    slug: "should-i-take-creatine",
    lang: "zh",
    title: "肌酸值得吃嗎？",
    description: "肌酸是少數證據很強、價格相對合理的補劑。",
    topic: "supplements",
    audience: "力量訓練、增肌、爆發力運動",
    evidence: "strong",
    answer: [
      "如果你的目標包含力量、高強度輸出、抗阻訓練表現或瘦體重，肌酸是一個很值得優先了解的補劑。",
      "它不能取代訓練、熱量、蛋白質和睡眠，但在補劑排序裡通常比大多數行銷感很強的產品更靠前。",
      "一般人最需要避免的是把肌酸當成短期神藥，或因為體重增加就誤以為長脂肪。",
    ],
    takeaways: ["肌酸適合多數力量訓練者。", "體重上升可能和水分儲存有關。", "先買單一成分 creatine monohydrate。"],
    relatedEvidence: ["supplement-evidence-map"],
    relatedArticle: "supplement-priority-map",
  },
  {
    slug: "cardio-kills-gains",
    lang: "zh",
    title: "有氧會影響增肌嗎？",
    description: "有氧不是敵人，疲勞管理才是重點。",
    topic: "training",
    audience: "增肌、減脂、上班族",
    evidence: "moderate",
    answer: [
      "有氧不會自動讓你增不了肌。問題通常出在總疲勞太高、腿部恢復不足、熱量吃不夠，或把高強度有氧塞在重腿日前後。",
      "如果增肌是主目標，可以優先選低衝擊有氧，控制總量，並把很硬的耐力訓練和下肢重訓錯開。",
      "對健康和減脂來說，有氧仍然很有價值。不要把『干擾效應』理解成完全不能做有氧。",
    ],
    takeaways: ["管理疲勞比禁止有氧更重要。", "低衝擊有氧通常比較好安排。", "熱量和睡眠會改變干擾風險。"],
    relatedEvidence: ["concurrent-training"],
    relatedArticle: "cardio-and-lifting",
  },
  {
    slug: "cardio-or-weights-for-fat-loss",
    lang: "zh",
    title: "減脂要先做有氧還是重訓？",
    description: "減脂靠熱量赤字，重訓保肌肉，有氧增加消耗。",
    topic: "fat-loss",
    audience: "減脂新手、工作者",
    evidence: "strong",
    answer: [
      "減脂的核心是長期熱量赤字。重訓和有氧的角色不同：重訓幫你保留肌肉和力量，有氧幫你增加消耗與心肺健康。",
      "如果只能選一個，想維持體態和肌肉線條的人應該保留重訓。能兩者都做時，重訓加適量有氧更完整。",
      "真正讓人失敗的通常不是順序，而是計畫太激進、太餓、睡不好，最後無法持續。",
    ],
    takeaways: ["熱量赤字是底層。", "重訓保留肌肉。", "有氧是工具，不是懲罰。"],
    relatedEvidence: ["concurrent-training"],
    relatedArticle: "cardio-and-lifting",
  },
  {
    slug: "what-to-eat-after-workout",
    lang: "zh",
    title: "運動後一定要馬上吃東西嗎？",
    description: "是否急著吃，取決於下一次訓練有多近。",
    topic: "recovery",
    audience: "學生、上班族、耐力訓練者",
    evidence: "strong",
    answer: [
      "如果你下一次高強度訓練在同一天或隔天很早，運動後碳水和蛋白質安排會更重要。",
      "如果你只是一般健身，一週練幾次，兩餐之間不太久，總攝取通常比『30 分鐘窗口』更重要。",
      "恢復不是只看一餐。睡眠、總熱量、總碳水、總蛋白和訓練壓力都會一起影響你下一次能不能輸出。",
    ],
    takeaways: ["短時間內再訓練才更急。", "一般健身者不用害怕錯過神奇窗口。", "總量和睡眠很關鍵。"],
    relatedEvidence: ["carbohydrate-refueling", "protein-supplementation"],
    relatedArticle: "recovery-basics",
  },
  {
    slug: "omega-3-for-gym",
    lang: "zh",
    title: "健身需要吃魚油嗎？",
    description: "魚油更像狀態和健康工具，不是增肌神藥。",
    topic: "supplements",
    audience: "訓練者、中老年、恢復需求",
    evidence: "moderate",
    answer: [
      "魚油的重點是 EPA/DHA 狀態、心血管健康、發炎與恢復相關指標，而不是保證讓你長更多肌肉。",
      "如果你幾乎不吃魚，或有高訓練量、恢復壓力、心血管健康考量，omega-3 值得進一步評估。",
      "但如果預算有限，增肌優先順序仍然是訓練、熱量、蛋白質、睡眠和肌酸。",
    ],
    takeaways: ["先看魚類攝取。", "恢復和健康端比增肌承諾更合理。", "不要把魚油排在訓練和蛋白前面。"],
    relatedEvidence: ["omega-3-athletes"],
    relatedArticle: "omega-3-context",
  },
  {
    slug: "beetroot-juice-performance",
    lang: "zh",
    title: "甜菜根汁真的能提升運動表現嗎？",
    description: "硝酸鹽可能幫助運動經濟性，但不是所有人都明顯有感。",
    topic: "supplements",
    audience: "耐力、HIIT、球類運動",
    evidence: "moderate",
    answer: [
      "甜菜根汁的關鍵不是神秘泵感，而是硝酸鹽經 nitrate-nitrite-NO pathway 影響血管與代謝控制。",
      "比較可能受益的是某些耐力、反覆高強度或運動經濟性相關情境。高度訓練者的效果可能較小或更難察覺。",
      "產品差異很大，討論時要看實際 nitrate 劑量，而不是只看喝了多少毫升。",
    ],
    takeaways: ["看 nitrate 劑量。", "運動前 2-3 小時是常見急性使用方式。", "抗菌漱口水可能干擾作用路徑。"],
    relatedEvidence: ["dietary-nitrate"],
    relatedArticle: "supplement-priority-map",
  },
  {
    slug: "older-adults-strength-training",
    lang: "zh",
    title: "中老年人可以重訓嗎？",
    description: "阻力訓練常常很值得做，但要管理風險和起點。",
    topic: "older-adults",
    audience: "中老年、家人照護、健康促進",
    evidence: "strong",
    answer: [
      "多數中老年人不是不能重訓，而是需要從合適的動作、負荷、頻率和安全邊界開始。",
      "阻力訓練可以服務肌力、功能表現、日常活動能力和跌倒風險管理。這和年輕人追求最大肌肥大的語境不同。",
      "有心血管疾病、骨質疏鬆、疼痛、近期手術或用藥者，應先取得專業評估。",
    ],
    takeaways: ["重訓不等於硬舉最大重量。", "功能表現比外觀更重要。", "疾病和疼痛問題要先評估。"],
    relatedEvidence: ["supplement-evidence-map"],
    relatedArticle: "older-adults-strength",
  },
  {
    slug: "why-am-i-still-sore",
    lang: "zh",
    title: "一直痠痛代表訓練有效嗎？",
    description: "DOMS 不是進步的唯一指標。",
    topic: "recovery",
    audience: "新手、進階訓練者",
    evidence: "moderate",
    answer: [
      "痠痛常見於新刺激、高離心負荷或訓練量突然增加，但它不等於訓練品質，也不等於肌肉一定長更多。",
      "如果每次都痠到影響下一次訓練輸出，這可能代表負荷安排、恢復或動作選擇需要調整。",
      "評估進步時，應該看力量、訓練量、動作品質、圍度、體重趨勢和長期一致性。",
    ],
    takeaways: ["痠痛不是唯一 KPI。", "過度痠痛可能拖累訓練品質。", "恢復要看下一次能不能輸出。"],
    relatedEvidence: ["omega-3-athletes"],
    relatedArticle: "recovery-basics",
  },
  {
    slug: "student-budget-supplements",
    lang: "zh",
    title: "學生黨健身補劑怎麼買最不浪費？",
    description: "預算有限時，先買證據和用途最清楚的東西。",
    topic: "supplements",
    audience: "學生、新手、預算有限",
    evidence: "strong",
    answer: [
      "如果預算有限，先不要被一堆複方產品拉走。增肌減脂的底層仍然是訓練、飲食、睡眠和持續性。",
      "補劑優先順序通常可以從蛋白質缺口、肌酸、咖啡因這類證據較清楚的工具開始，而不是追求每個產品都買。",
      "最省錢的策略是先記錄一週飲食和訓練，再決定缺的是蛋白、熱量、睡眠，還是根本缺訓練計畫。",
    ],
    takeaways: ["不要先買全套。", "蛋白粉只在有缺口時最有價值。", "肌酸通常比花俏複方更值得研究。"],
    relatedEvidence: ["supplement-evidence-map", "protein-supplementation"],
    relatedArticle: "supplement-priority-map",
  },
  {
    slug: "office-worker-training-time",
    lang: "zh",
    title: "上班族時間少怎麼練才有效？",
    description: "先保留最有回報的訓練，再談細節最佳化。",
    topic: "training",
    audience: "工作者、時間有限者",
    evidence: "moderate",
    answer: [
      "時間少時，不要先追求完美課表。先確保每週能穩定做阻力訓練，覆蓋主要肌群，並安排可恢復的總量。",
      "每次 30-45 分鐘也可以有效，只要動作選擇、組數、接近力竭程度和進步紀錄有基本結構。",
      "通勤、睡眠和壓力都會影響恢復。上班族課表應該比網紅課表更重視可持續性。",
    ],
    takeaways: ["穩定比完美重要。", "用複合動作提高時間效率。", "恢復資源少時不要硬堆量。"],
    relatedEvidence: ["concurrent-training"],
    relatedArticle: "cardio-and-lifting",
  },
  {
    slug: "do-i-need-bcaa",
    lang: "zh",
    title: "已經喝蛋白粉還需要 BCAA 嗎？",
    description: "多數蛋白質足夠的人，不需要把 BCAA 當第一順位。",
    topic: "supplements",
    audience: "增肌、減脂、學生黨",
    evidence: "moderate",
    answer: [
      "如果你每日蛋白質已經足夠，而且蛋白來源品質不差，BCAA 通常不是最優先要買的補劑。",
      "肌肉蛋白合成需要完整必需胺基酸背景，不是只有幾個支鏈胺基酸就能完成全部工作。",
      "預算有限時，先確認總蛋白、訓練和睡眠，通常比額外買 BCAA 更實際。",
    ],
    takeaways: ["先滿足總蛋白。", "完整蛋白通常比單買 BCAA 更有用。", "BCAA 適合做避坑內容。"],
    relatedEvidence: ["protein-supplementation", "supplement-evidence-map"],
    relatedArticle: "supplement-priority-map",
  },
  {
    slug: "does-protein-powder-damage-kidneys",
    lang: "en",
    title: "Does protein powder damage your kidneys?",
    description: "Healthy lifters and people with kidney disease need different advice.",
    topic: "supplements",
    audience: "Lifters, dieters, busy professionals",
    evidence: "strong",
    answer: [
      "For healthy adults, protein powder is best understood as a convenient form of dietary protein, not a uniquely kidney-damaging substance.",
      "The caution changes if someone already has kidney disease, a medical protein restriction, or medication considerations. That is a clinical context, not generic fitness advice.",
      "The better question is whether your total protein intake, calories, fiber, hydration, and training plan fit your goal.",
    ],
    takeaways: ["Protein powder is a tool, not a requirement.", "Do not mix healthy lifters with kidney-disease cases.", "Start with total daily protein."],
    relatedEvidence: ["protein-supplementation"],
    relatedArticle: "protein-powder-is-a-tool",
  },
  {
    slug: "how-much-protein-do-i-need",
    lang: "en",
    title: "How much protein do I need for lifting?",
    description: "Daily intake matters before supplement timing debates.",
    topic: "muscle-gain",
    audience: "Beginners, hypertrophy training, fat loss",
    evidence: "strong",
    answer: [
      "A practical starting point for many resistance-trained people is around 1.6 g/kg/day, then adjust based on dieting, training volume, appetite, and tolerance.",
      "Protein needs often matter more during fat loss because the goal is not just to lose weight, but to keep lean mass and performance.",
      "Protein powder is optional. Knowing your actual daily intake comes first.",
    ],
    takeaways: ["Estimate daily intake first.", "Fat loss usually increases the importance of protein.", "Distribution across meals can help consistency."],
    relatedEvidence: ["protein-supplementation"],
    relatedArticle: "protein-powder-is-a-tool",
  },
  {
    slug: "should-i-use-creatine",
    lang: "en",
    title: "Should I take creatine?",
    description: "Creatine is one of the clearer bets in sports nutrition.",
    topic: "supplements",
    audience: "Strength training, hypertrophy, high-intensity sport",
    evidence: "strong",
    answer: [
      "If your goals include strength, repeated high-intensity output, resistance training performance, or lean mass, creatine monohydrate is worth understanding.",
      "It does not replace training, calories, protein, or sleep. It simply sits higher on the supplement priority list than most flashy products.",
      "Early scale-weight increases can reflect water storage, not automatic fat gain.",
    ],
    takeaways: ["Creatine monohydrate is the default form.", "It is useful, not magical.", "Do not confuse water weight with fat gain."],
    relatedEvidence: ["supplement-evidence-map"],
    relatedArticle: "supplement-priority-map",
  },
  {
    slug: "does-cardio-kill-gains",
    lang: "en",
    title: "Does cardio kill gains?",
    description: "Cardio is not the enemy; unmanaged fatigue is.",
    topic: "training",
    audience: "Hypertrophy, fat loss, busy lifters",
    evidence: "moderate",
    answer: [
      "Cardio does not automatically erase muscle growth. Interference risk depends on endurance volume, intensity, modality, calories, sleep, and lower-body recovery.",
      "If hypertrophy is the priority, use lower-impact cardio, manage total volume, and avoid stacking very hard endurance work next to heavy leg sessions.",
      "Cardio still supports health and can help fat loss adherence. The goal is placement, not panic.",
    ],
    takeaways: ["Manage fatigue.", "Choose low-impact cardio when lifting is the priority.", "Calories and sleep change the equation."],
    relatedEvidence: ["concurrent-training"],
    relatedArticle: "cardio-and-lifting",
  },
  {
    slug: "cardio-or-weights-for-fat-loss",
    lang: "en",
    title: "Cardio or weights for fat loss?",
    description: "A calorie deficit drives fat loss; lifting protects muscle.",
    topic: "fat-loss",
    audience: "Beginners, office workers, dieters",
    evidence: "strong",
    answer: [
      "Fat loss comes from a sustained calorie deficit. Lifting helps preserve muscle and strength; cardio can raise energy expenditure and support cardiovascular health.",
      "If physique is the goal and time is limited, keep resistance training in the plan. If possible, combine lifting with a realistic amount of cardio.",
      "The biggest failure point is usually not exercise order. It is an aggressive plan that cannot be repeated.",
    ],
    takeaways: ["Deficit first.", "Lift to protect lean mass.", "Use cardio as a tool, not punishment."],
    relatedEvidence: ["concurrent-training"],
    relatedArticle: "cardio-and-lifting",
  },
  {
    slug: "what-should-i-eat-after-training",
    lang: "en",
    title: "What should I eat after training?",
    description: "The urgency depends on when your next hard session happens.",
    topic: "recovery",
    audience: "Students, professionals, endurance athletes",
    evidence: "strong",
    answer: [
      "Post-workout carbohydrate and protein matter most when you need to train hard again soon, such as two-a-days, tournaments, or dense endurance blocks.",
      "For typical recreational lifters with plenty of time between sessions, total daily intake usually matters more than a narrow anabolic window.",
      "Recovery is not one meal. Sleep, total calories, carbohydrates, protein, and training stress all interact.",
    ],
    takeaways: ["Urgency rises when the next session is soon.", "Most lifters do not need to fear missing a 30-minute window.", "Sleep is part of nutrition strategy."],
    relatedEvidence: ["carbohydrate-refueling", "protein-supplementation"],
    relatedArticle: "recovery-basics",
  },
  {
    slug: "do-lifters-need-fish-oil",
    lang: "en",
    title: "Do lifters need fish oil?",
    description: "Omega-3 is more of a status and health tool than a guaranteed muscle builder.",
    topic: "supplements",
    audience: "Lifters, older adults, recovery-focused athletes",
    evidence: "moderate",
    answer: [
      "Fish oil is about EPA/DHA status, cardiovascular health, inflammation-related markers, and potentially recovery or sleep outcomes. It is not a guaranteed hypertrophy supplement.",
      "If you rarely eat fish, have high training stress, or care about long-term cardiovascular health, omega-3 deserves a closer look.",
      "If the budget is limited, training, calories, protein, sleep, and creatine usually come first for muscle gain.",
    ],
    takeaways: ["Assess fish intake first.", "Keep recovery and hypertrophy claims separate.", "Do not buy it as a magic muscle shortcut."],
    relatedEvidence: ["omega-3-athletes"],
    relatedArticle: "omega-3-context",
  },
  {
    slug: "can-older-adults-lift-weights",
    lang: "en",
    title: "Can older adults lift weights?",
    description: "Resistance training can be valuable when the starting point and risks are respected.",
    topic: "older-adults",
    audience: "Older adults, family members, health-focused beginners",
    evidence: "strong",
    answer: [
      "Many older adults can benefit from resistance training, but the program should match their current capacity, medical history, balance, pain status, and confidence.",
      "The goal is often strength, function, independence, and fall-risk management, not only physique.",
      "People with cardiovascular disease, osteoporosis, pain, recent surgery, or medication concerns should get professional guidance before pushing intensity.",
    ],
    takeaways: ["Strength training is not only maximal lifting.", "Function matters.", "Medical context changes the plan."],
    relatedEvidence: ["supplement-evidence-map"],
    relatedArticle: "older-adults-strength",
  },
];

export const articles: Article[] = [
  {
    slug: "protein-powder-is-a-tool",
    lang: "zh",
    title: "蛋白粉不是魔法，是補足蛋白質缺口的工具",
    description: "把蛋白粉放回每日蛋白、完整食物、便利性和安全邊界來看。",
    topic: "supplements",
    readingTime: "5 分鐘",
    relatedEvidence: ["protein-supplementation"],
    body: [
      {
        heading: "先問缺口，不是先問品牌",
        paragraphs: [
          "蛋白粉最常被講得太神，也最常被講得太可怕。比較科學的看法是：它只是方便取得蛋白質的形式。",
          "如果你每天蛋白質已經足夠，蛋白粉不會自動讓你增肌更快。如果你因為忙、食量小、減脂期飽足感安排困難而吃不夠，它就很實用。",
        ],
      },
      {
        heading: "安全問題要分族群",
        paragraphs: [
          "健康訓練者的高蛋白飲食，和已經有腎臟疾病的人，是兩個不同問題。科普內容最怕把它們混在一起。",
          "對一般健身者，優先順序是每日蛋白、總熱量、訓練刺激、睡眠和長期持續性。對有疾病或醫療限制的人，則應回到醫療專業建議。",
        ],
      },
    ],
  },
  {
    slug: "supplement-priority-map",
    lang: "zh",
    title: "補劑優先順序：什麼值得先研究，什麼適合先省下來",
    description: "用證據、成本、使用場景和風險來排補劑，而不是看行銷聲量。",
    topic: "supplements",
    readingTime: "7 分鐘",
    relatedEvidence: ["supplement-evidence-map", "dietary-nitrate", "omega-3-athletes"],
    body: [
      {
        heading: "補劑不是一張購物清單",
        paragraphs: [
          "比較好的補劑地圖會問四件事：你要改善什麼 endpoint、證據強不強、成本高不高、風險和不適用族群是什麼。",
          "肌酸、蛋白質和咖啡因通常比較容易放在前面；GABA、glutamine 或花俏複方，則更適合謹慎討論。",
        ],
      },
      {
        heading: "用場景決定價值",
        paragraphs: [
          "甜菜根汁對某些耐力或高強度情境有意義，但它不是每個重訓者的第一順位。omega-3 可以討論狀態、恢復與心血管健康，但不該包裝成保證增肌。",
          "學生黨和預算有限的人，最需要的是少買錯，而不是買齊所有東西。",
        ],
      },
    ],
  },
  {
    slug: "cardio-and-lifting",
    lang: "zh",
    title: "有氧和重訓怎麼排，才不會互相拖累？",
    description: "把干擾效應翻成實際課表決策：總量、強度、型態、恢復。",
    topic: "training",
    readingTime: "6 分鐘",
    relatedEvidence: ["concurrent-training"],
    body: [
      {
        heading: "不要把有氧妖魔化",
        paragraphs: [
          "增肌期不是不能有氧，而是不能無視疲勞。高量跑步、睡眠不足、熱量不足、下肢恢復不足，才是更常見的問題組合。",
          "如果想兼顧健康和肌肥大，可以先選低衝擊有氧，控制每週總量，並避免把最硬的有氧放在重腿日前後。",
        ],
      },
      {
        heading: "排序比信仰更有用",
        paragraphs: [
          "當你最在乎力量或肌肥大，重訓品質應該先被保護。當你最在乎耐力表現，有氧品質則需要更高優先權。",
          "真正成熟的課表不是選邊站，而是承認恢復資源有限，然後把最重要的刺激排在最清醒、最能輸出的時段。",
        ],
      },
    ],
  },
  {
    slug: "recovery-basics",
    lang: "zh",
    title: "恢復不是不痠，而是下一次能不能輸出",
    description: "DOMS、碳水、蛋白質、睡眠和訓練壓力的恢復框架。",
    topic: "recovery",
    readingTime: "6 分鐘",
    relatedEvidence: ["carbohydrate-refueling", "omega-3-athletes"],
    body: [
      {
        heading: "痠痛不是唯一指標",
        paragraphs: [
          "DOMS 會受到新動作、離心負荷和訓練量變化影響，但它不是進步的唯一證據。",
          "如果你每次都痠到下一次表現下降，問題可能不是你練得夠認真，而是恢復和負荷安排沒有跟上。",
        ],
      },
      {
        heading: "快速補給有適用場景",
        paragraphs: [
          "運動後碳水的急迫性，取決於下一次高強度訓練有多近。兩練、比賽日、耐力訓練營，和一般一週三練不是同一個問題。",
          "一般健身者不用害怕錯過神奇窗口，但仍然要把總熱量、蛋白質、睡眠和壓力管理做好。",
        ],
      },
    ],
  },
  {
    slug: "omega-3-context",
    lang: "zh",
    title: "魚油在健身裡的位置：別神化，也別忽略",
    description: "omega-3 比較適合從狀態、健康和恢復看，不是萬能增肌補劑。",
    topic: "supplements",
    readingTime: "5 分鐘",
    relatedEvidence: ["omega-3-athletes"],
    body: [
      {
        heading: "先看 EPA/DHA 狀態",
        paragraphs: [
          "omega-3 的討論應該從飲食和狀態開始。很少吃魚的人，和每週穩定攝取魚類的人，不應該被同一套話術推銷。",
          "運動員資料顯示 omega-3 狀態可能偏低，這讓它成為值得評估的健康與恢復工具。",
        ],
      },
      {
        heading: "把 endpoint 分開",
        paragraphs: [
          "恢復 marker、DOMS、睡眠、心血管健康、肌力、肌肥大，是不同 endpoint。把所有好處包成一句『健身必吃』，反而降低可信度。",
          "如果目標是增肌，omega-3 不該排在訓練、熱量、蛋白質、睡眠和肌酸前面。",
        ],
      },
    ],
  },
  {
    slug: "older-adults-strength",
    lang: "zh",
    title: "中老年重訓：重點不是硬撐，是把力量還給生活",
    description: "以功能、肌力、跌倒風險和安全邊界看中老年阻力訓練。",
    topic: "older-adults",
    readingTime: "6 分鐘",
    relatedEvidence: ["supplement-evidence-map", "protein-supplementation"],
    body: [
      {
        heading: "訓練目標不只外觀",
        paragraphs: [
          "對中老年人來說，阻力訓練的價值常常是站起來更穩、上下樓更有力、日常活動更有信心。",
          "這不代表不能追求肌肉，但語境應該先放在功能、獨立性和安全。",
        ],
      },
      {
        heading: "安全邊界要先講清楚",
        paragraphs: [
          "有疼痛、骨質疏鬆、心血管疾病、近期手術或用藥情況時，訓練計畫需要專業評估。",
          "中老年科普最重要的是降低恐懼，同時不製造過度自信。",
        ],
      },
    ],
  },
  {
    slug: "protein-powder-is-a-tool",
    lang: "en",
    title: "Protein powder is a tool, not a magic muscle switch",
    description: "Put protein powder back into the context of daily intake, whole foods, and convenience.",
    topic: "supplements",
    readingTime: "5 min",
    relatedEvidence: ["protein-supplementation"],
    body: [
      {
        heading: "Ask about the gap first",
        paragraphs: [
          "Protein powder is often exaggerated in both directions. It is not a magic hypertrophy switch, and it is not uniquely dangerous for healthy adults.",
          "Its value rises when someone struggles to hit daily protein through food because of appetite, schedule, dieting, or convenience.",
        ],
      },
      {
        heading: "Separate healthy lifters from clinical cases",
        paragraphs: [
          "A healthy lifter eating a high-protein diet is not the same case as someone with kidney disease or a medical protein restriction.",
          "Good public education keeps those categories separate and avoids turning clinical cautions into broad fitness myths.",
        ],
      },
    ],
  },
  {
    slug: "supplement-priority-map",
    lang: "en",
    title: "A practical supplement priority map",
    description: "Rank supplements by evidence, endpoint, cost, and risk instead of hype.",
    topic: "supplements",
    readingTime: "7 min",
    relatedEvidence: ["supplement-evidence-map", "omega-3-athletes", "dietary-nitrate"],
    body: [
      {
        heading: "Supplements need endpoints",
        paragraphs: [
          "The useful question is not whether a supplement is good or bad. It is what endpoint it helps, in whom, at what cost, and with what uncertainty.",
          "Creatine, protein, and caffeine usually sit higher on the practical list than many heavily marketed blends.",
        ],
      },
      {
        heading: "Context changes the ranking",
        paragraphs: [
          "Nitrate can be interesting for endurance or repeated high-intensity contexts. Omega-3 may be more about status, recovery, and health than guaranteed muscle gain.",
          "For budget-limited lifters, buying fewer things with clearer uses is usually the better first move.",
        ],
      },
    ],
  },
  {
    slug: "cardio-and-lifting",
    lang: "en",
    title: "How to combine cardio and lifting without overthinking it",
    description: "Translate the interference effect into volume, intensity, modality, and recovery decisions.",
    topic: "training",
    readingTime: "6 min",
    relatedEvidence: ["concurrent-training"],
    body: [
      {
        heading: "Cardio is not the villain",
        paragraphs: [
          "The interference effect is real enough to respect, but not so simple that cardio must disappear from a hypertrophy plan.",
          "The common problems are excessive fatigue, poor placement, low calories, poor sleep, and too much high-impact endurance work near demanding lower-body sessions.",
        ],
      },
      {
        heading: "Protect the priority",
        paragraphs: [
          "If muscle gain is the priority, protect lifting quality first. Use lower-impact cardio, reasonable volume, and better session spacing.",
          "If endurance performance is the priority, the hierarchy changes. The mature plan is not tribal; it simply protects the main adaptation.",
        ],
      },
    ],
  },
];

export function getTopic(slug: string) {
  return topics.find((topic) => topic.slug === slug);
}

export function byLang<T extends { lang: Lang }>(items: T[], lang: Lang): T[] {
  return items.filter((item) => item.lang === lang);
}

export function evidenceBySlug(slug: string) {
  return evidence.find((item) => item.slug === slug);
}
