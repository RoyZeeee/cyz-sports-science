import * as OpenCC from "opencc-js";

export type Lang = "zh" | "zh-cn" | "en";

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

export type TopicDeepDive = {
  slug: string;
  zhTitle: string;
  enTitle: string;
  zhIntro: string;
  enIntro: string;
  sections: {
    zhTitle: string;
    enTitle: string;
    zhDescription: string;
    enDescription: string;
    cards: {
      zhTitle: string;
      enTitle: string;
      zhBody: string;
      enBody: string;
      items?: {
        zhLabel: string;
        enLabel: string;
        zhValue: string;
        enValue: string;
      }[];
    }[];
  }[];
};

export type PopularDirection = {
  slug: string;
  zhTitle: string;
  enTitle: string;
  zhSummary: string;
  enSummary: string;
  topic: string;
  questions: {
    zh: string;
    en: string;
  }[];
  authority: string[];
  contentAngles: {
    zh: string;
    en: string;
  }[];
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
  {
    slug: "creatine-safety",
    title: "Creatine Safety and Performance",
    description: "Creatine monohydrate is one of the strongest evidence supplements for high-intensity training and lean mass.",
    strength: "A",
    sourceType: "ISSN position stand",
    summary:
      "ISSN identifies creatine monohydrate as an effective ergogenic supplement for high-intensity exercise capacity and lean mass during training, with a favorable safety profile in appropriate users.",
    practicalUse: [
      "Use plain creatine monohydrate before expensive blends.",
      "Explain water-weight changes separately from fat gain.",
      "Separate healthy-user guidance from kidney disease or medication contexts.",
    ],
  },
  {
    slug: "caffeine-performance",
    title: "Caffeine and Exercise Performance",
    description: "Caffeine can support endurance, high-intensity effort, alertness, and perceived effort, but timing and sleep matter.",
    strength: "A",
    sourceType: "ISSN position stand",
    summary:
      "Caffeine is one of the better-supported acute performance aids. Benefits depend on dose, timing, individual tolerance, and whether it disrupts sleep or anxiety.",
    practicalUse: [
      "Discuss caffeine as a tool, not a daily obligation.",
      "Flag sleep tradeoffs for evening lifters and students.",
      "Compare coffee, caffeine pills, and pre-workout blends.",
    ],
  },
  {
    slug: "older-adult-activity-guidelines",
    title: "Older Adult Physical Activity Guidelines",
    description: "Older adults benefit from aerobic, strengthening, and balance-oriented activity matched to ability.",
    strength: "A",
    sourceType: "WHO guidelines and ACSM position stands",
    summary:
      "Public health guidelines emphasize regular physical activity for older adults, including muscle-strengthening and multicomponent balance/functional activity to support health, function, and fall prevention.",
    practicalUse: [
      "Frame older-adult lifting around function and independence.",
      "Add medical boundaries for pain, osteoporosis, cardiovascular disease, surgery, and medications.",
      "Create beginner progressions instead of maximal-lifting content.",
    ],
  },
];

export const popularDirections: PopularDirection[] = [
  {
    slug: "beginner-overthinking-basics",
    zhTitle: "新手最在意：到底先做什麼才不會白練？",
    enTitle: "Beginners: what should I do first so I do not waste time?",
    zhSummary: "公開 FAQ、社群討論和搜尋問題反覆出現同一件事：新手容易被補劑、課表、體脂率和打卡焦慮帶走。內容應先給一套最小可行系統。",
    enSummary:
      "Public FAQs and beginner discussions repeatedly show the same pattern: beginners overthink supplements, programs, body-fat tracking, and perfect routines. Content should start with a minimum viable system.",
    topic: "training",
    questions: [
      { zh: "新手要不要先買蛋白粉、肌酸或 pre-workout？", en: "Do beginners need protein powder, creatine, or pre-workout?" },
      { zh: "一週練幾天才有效？", en: "How many days per week should I train?" },
      { zh: "徒手、器械、自由重量哪個先開始？", en: "Should I start with bodyweight, machines, or free weights?" },
    ],
    authority: ["protein-supplementation", "creatine-safety", "concurrent-training"],
    contentAngles: [
      { zh: "新手健身 30 天最低配方案", en: "A 30-day minimum viable beginner fitness plan" },
      { zh: "補劑先別急：先把這 4 件事做好", en: "Do these four things before buying supplements" },
    ],
  },
  {
    slug: "fat-loss-calorie-deficit",
    zhTitle: "減脂核心：熱量赤字、肚子脂肪和肌肉保留",
    enTitle: "Fat loss: calorie deficit, belly fat, and muscle retention",
    zhSummary: "大眾常把減脂問題問成「做什麼運動瘦肚子」或「能不能不吃碳水」。網站應把熱量赤字、蛋白質、重訓和步數拆開講。",
    enSummary:
      "Popular fat-loss questions often become 'how do I lose belly fat' or 'do I need to cut carbs'. The site should separate deficit, protein, lifting, steps, and cardio.",
    topic: "fat-loss",
    questions: [
      { zh: "怎麼瘦肚子？可以局部減脂嗎？", en: "How do I lose belly fat? Is spot reduction real?" },
      { zh: "減脂要不要戒碳水？", en: "Do I need to cut carbs to lose fat?" },
      { zh: "減脂期怎麼不掉肌肉？", en: "How do I avoid losing muscle while cutting?" },
    ],
    authority: ["protein-supplementation", "concurrent-training"],
    contentAngles: [
      { zh: "熱量赤字不是挨餓：三種可持續做法", en: "A calorie deficit is not starvation: three sustainable ways" },
      { zh: "瘦肚子為什麼不能只練腹肌？", en: "Why ab exercises alone do not remove belly fat" },
    ],
  },
  {
    slug: "supplement-roi",
    zhTitle: "補劑投資報酬率：肌酸、蛋白粉、咖啡因、魚油",
    enTitle: "Supplement ROI: creatine, protein powder, caffeine, fish oil",
    zhSummary: "補劑是最容易變現也最容易失去信任的方向。內容要把證據、價格、適用族群和不該買的情境放在同一張表。",
    enSummary:
      "Supplements are monetizable but trust-sensitive. Content should rank evidence, cost, target users, and situations where people should not buy.",
    topic: "supplements",
    questions: [
      { zh: "肌酸安全嗎？會傷腎或掉髮嗎？", en: "Is creatine safe? Does it hurt kidneys or cause hair loss?" },
      { zh: "pre-workout 和咖啡差在哪？", en: "What is the difference between pre-workout and coffee?" },
      { zh: "魚油、BCAA、GABA 值不值得買？", en: "Are fish oil, BCAA, or GABA worth buying?" },
    ],
    authority: ["creatine-safety", "protein-supplementation", "caffeine-performance", "omega-3-athletes"],
    contentAngles: [
      { zh: "學生黨補劑購買順序", en: "Supplement buying order for students on a budget" },
      { zh: "補劑紅綠燈：先買、可買、先別買", en: "Supplement traffic light: buy first, maybe, skip for now" },
    ],
  },
  {
    slug: "older-adult-strength",
    zhTitle: "中老年健康：肌力、關節安全、跌倒風險",
    enTitle: "Older adults: strength, joint safety, and fall risk",
    zhSummary: "中老年內容搜尋意圖很強，但責任也更高。應把醫療邊界、安全進階、肌力和蛋白質講清楚。",
    enSummary:
      "Older-adult content has strong search intent and higher responsibility. It needs medical boundaries, safe progressions, strength, and protein clarity.",
    topic: "older-adults",
    questions: [
      { zh: "60 歲以上還能重訓嗎？", en: "Can people over 60 lift weights?" },
      { zh: "膝蓋痛能不能深蹲？", en: "Can I squat if my knees hurt?" },
      { zh: "中老年一天要吃多少蛋白質？", en: "How much protein do older adults need?" },
    ],
    authority: ["older-adult-activity-guidelines", "protein-supplementation"],
    contentAngles: [
      { zh: "給爸媽看的安全重訓入門", en: "A safe strength-training starter for parents" },
      { zh: "中老年增肌不是健美，是保功能", en: "Older-adult muscle is about function, not bodybuilding" },
    ],
  },
];

export const topicDeepDives: TopicDeepDive[] = [
  {
    slug: "muscle-gain",
    zhTitle: "增肌不是只問蛋白粉",
    enTitle: "Muscle gain is not just a protein-powder question",
    zhIntro: "增肌最需要同時看訓練量、漸進超負荷、蛋白質、碳水、總熱量和恢復。單獨抓一個點，很容易變成補劑焦慮。",
    enIntro:
      "Muscle gain depends on training volume, progressive overload, protein, carbohydrates, total calories, and recovery. Looking at only one variable usually creates supplement anxiety.",
    sections: [
      {
        zhTitle: "訓練量、碳水、蛋白質三件事",
        enTitle: "Training volume, carbohydrates, and protein",
        zhDescription: "先用這三個槓桿檢查計畫，而不是一開始就追求最複雜的課表。",
        enDescription: "Use these three levers to audit a plan before chasing a complicated program.",
        cards: [
          {
            zhTitle: "訓練量",
            enTitle: "Training volume",
            zhBody: "多數肌群可以先從每週 8-12 組有效組開始，能恢復再逐步加到 12-18 組。有效組指接近力竭、動作穩定、目標肌群真的有輸出的組數。",
            enBody:
              "A practical starting range is 8-12 hard sets per muscle per week, then move toward 12-18 if recovery and performance hold. Hard sets should be close enough to failure and actually load the target muscle.",
            items: [
              { zhLabel: "新手", enLabel: "Beginner", zhValue: "每肌群每週 6-10 組", enValue: "6-10 sets/muscle/week" },
              { zhLabel: "穩定訓練者", enLabel: "Trained lifter", zhValue: "每肌群每週 10-18 組", enValue: "10-18 sets/muscle/week" },
              { zhLabel: "警訊", enLabel: "Warning sign", zhValue: "重量下降、關節痛、睡眠差", enValue: "Load drops, joint pain, poor sleep" },
            ],
          },
          {
            zhTitle: "碳水",
            enTitle: "Carbohydrates",
            zhBody: "碳水不是增肌魔法，但它會影響訓練輸出、肌糖原和總熱量是否吃得上去。訓練量越高，碳水通常越重要。",
            enBody:
              "Carbs are not magic, but they support training output, glycogen, and total calorie intake. The higher the training volume, the more useful carbs usually become.",
            items: [
              { zhLabel: "一般重訓", enLabel: "General lifting", zhValue: "每公斤體重約 2-4 g/日", enValue: "About 2-4 g/kg/day" },
              { zhLabel: "高量訓練", enLabel: "High-volume training", zhValue: "每公斤體重約 4-6 g/日", enValue: "About 4-6 g/kg/day" },
              { zhLabel: "時機", enLabel: "Timing", zhValue: "訓練前後優先放一些碳水", enValue: "Prioritize some carbs around training" },
            ],
          },
          {
            zhTitle: "蛋白質",
            enTitle: "Protein",
            zhBody: "蛋白質先看每日總量，再看餐次分配。蛋白粉只是補缺口，不能替代訓練刺激、熱量和睡眠。",
            enBody:
              "Start with total daily protein, then meal distribution. Protein powder fills gaps; it does not replace training stimulus, calories, or sleep.",
            items: [
              { zhLabel: "實務起點", enLabel: "Practical start", zhValue: "每公斤體重約 1.6 g/日", enValue: "About 1.6 g/kg/day" },
              { zhLabel: "減脂或高量", enLabel: "Cutting/high volume", zhValue: "可往 1.8-2.2 g/kg 調整", enValue: "Often 1.8-2.2 g/kg" },
              { zhLabel: "餐次", enLabel: "Meals", zhValue: "每天 3-5 餐平均分配更容易", enValue: "3-5 protein feedings helps adherence" },
            ],
          },
        ],
      },
      {
        zhTitle: "想練哪一塊肌群？動作優先順序",
        enTitle: "Which muscle do you want to train? Exercise priorities",
        zhDescription: "排名不是絕對真理，而是給新手和內容讀者快速建立方向。真正選動作仍要看器材、疼痛史和動作品質。",
        enDescription:
          "These rankings are starting points, not universal laws. Equipment, pain history, and technique still matter.",
        cards: [
          {
            zhTitle: "胸",
            enTitle: "Chest",
            zhBody: "先用能穩定漸進加重的推類動作，再用飛鳥或夾胸補足伸展和收縮感。",
            enBody: "Start with presses you can progressively load, then add fly or cable work for stretch and contraction.",
            items: [
              { zhLabel: "1", enLabel: "1", zhValue: "槓鈴/啞鈴臥推", enValue: "Barbell or dumbbell bench press" },
              { zhLabel: "2", enLabel: "2", zhValue: "上斜啞鈴推", enValue: "Incline dumbbell press" },
              { zhLabel: "3", enLabel: "3", zhValue: "繩索夾胸/飛鳥", enValue: "Cable fly or machine fly" },
            ],
          },
          {
            zhTitle: "背",
            enTitle: "Back",
            zhBody: "背部需要垂直拉和水平拉都安排。不要只追重量，肩胛控制和完整活動範圍很重要。",
            enBody: "Use both vertical and horizontal pulls. Load matters, but scapular control and range of motion matter too.",
            items: [
              { zhLabel: "1", enLabel: "1", zhValue: "引體向上/高位下拉", enValue: "Pull-up or lat pulldown" },
              { zhLabel: "2", enLabel: "2", zhValue: "坐姿划船/胸托划船", enValue: "Seated row or chest-supported row" },
              { zhLabel: "3", enLabel: "3", zhValue: "單臂啞鈴划船", enValue: "One-arm dumbbell row" },
            ],
          },
          {
            zhTitle: "腿臀",
            enTitle: "Legs and glutes",
            zhBody: "腿臀通常需要蹲、髖鉸鏈、單腿和腿後側動作組合。不要只靠一個深蹲解決所有問題。",
            enBody: "Legs and glutes usually need squat, hinge, single-leg, and hamstring work. One squat pattern rarely covers everything.",
            items: [
              { zhLabel: "1", enLabel: "1", zhValue: "深蹲/腿推", enValue: "Squat or leg press" },
              { zhLabel: "2", enLabel: "2", zhValue: "羅馬尼亞硬舉", enValue: "Romanian deadlift" },
              { zhLabel: "3", enLabel: "3", zhValue: "臀推/保加利亞分腿蹲", enValue: "Hip thrust or Bulgarian split squat" },
            ],
          },
          {
            zhTitle: "肩手臂",
            enTitle: "Shoulders and arms",
            zhBody: "肩膀別只練推舉，側平舉和後三角很常是外觀差異來源。手臂則需要穩定累積量。",
            enBody: "Shoulders are not only overhead press; lateral and rear-delt work often changes the look. Arms need consistent volume.",
            items: [
              { zhLabel: "1", enLabel: "1", zhValue: "啞鈴肩推", enValue: "Dumbbell shoulder press" },
              { zhLabel: "2", enLabel: "2", zhValue: "側平舉", enValue: "Lateral raise" },
              { zhLabel: "3", enLabel: "3", zhValue: "二頭彎舉 + 三頭下壓", enValue: "Curl plus triceps pressdown" },
            ],
          },
        ],
      },
      {
        zhTitle: "常見食物營養速查",
        enTitle: "Common food nutrition quick view",
        zhDescription: "數字是粗略估算；雞蛋用每顆，其餘食物用每 100 g。實際仍會因品牌、烹調和含水量改變。",
        enDescription:
          "Approximate values only. Eggs are listed per egg; other foods are per 100 g. Brands, cooking, and water content change the numbers.",
        cards: [
          {
            zhTitle: "蛋白質來源",
            enTitle: "Protein sources",
            zhBody: "增肌飲食先找到穩定蛋白來源，再處理總熱量和碳水。",
            enBody: "Build stable protein sources first, then adjust total calories and carbs.",
            items: [
              { zhLabel: "雞蛋 1 顆", enLabel: "1 egg", zhValue: "約 70 kcal / 蛋白 6 g / 脂肪 5 g", enValue: "~70 kcal / 6 g protein / 5 g fat" },
              { zhLabel: "雞胸 100 g", enLabel: "Chicken breast 100 g", zhValue: "約 165 kcal / 蛋白 31 g", enValue: "~165 kcal / 31 g protein" },
              { zhLabel: "希臘優格 100 g", enLabel: "Greek yogurt 100 g", zhValue: "約 60-100 kcal / 蛋白 8-10 g", enValue: "~60-100 kcal / 8-10 g protein" },
            ],
          },
          {
            zhTitle: "碳水來源",
            enTitle: "Carb sources",
            zhBody: "碳水主要幫助訓練輸出和熱量達標。增肌期不需要怕白飯，但要看總量。",
            enBody: "Carbs support training output and calorie targets. Rice is not the enemy; the total amount matters.",
            items: [
              { zhLabel: "熟白飯 100 g", enLabel: "Cooked rice 100 g", zhValue: "約 130 kcal / 碳水 28 g", enValue: "~130 kcal / 28 g carbs" },
              { zhLabel: "燕麥 100 g", enLabel: "Oats 100 g", zhValue: "約 380 kcal / 碳水 66 g / 蛋白 13 g", enValue: "~380 kcal / 66 g carbs / 13 g protein" },
              { zhLabel: "馬鈴薯 100 g", enLabel: "Potato 100 g", zhValue: "約 80 kcal / 碳水 17 g", enValue: "~80 kcal / 17 g carbs" },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "fat-loss",
    zhTitle: "先把熱量赤字拎出來",
    enTitle: "Pull calorie deficit out as its own idea",
    zhIntro: "減脂不是先選有氧或重訓，而是先建立能持續的熱量赤字；重訓、蛋白質和有氧都是讓赤字更好執行、更少掉肌肉的工具。",
    enIntro:
      "Fat loss is not first a cardio-versus-lifting decision. It starts with a sustainable calorie deficit; lifting, protein, and cardio make the deficit easier and protect lean mass.",
    sections: [
      {
        zhTitle: "熱量赤字是什麼？",
        enTitle: "What is a calorie deficit?",
        zhDescription: "把它單獨理解，減脂內容就不會被單一食物、單一運動或單一補劑帶偏。",
        enDescription: "Understanding this separately prevents fat-loss content from being hijacked by one food, exercise, or supplement.",
        cards: [
          {
            zhTitle: "定義",
            enTitle: "Definition",
            zhBody: "熱量赤字是長期攝入熱量低於身體消耗。它不是餓到崩潰，而是用飲食、活動量和訓練建立可維持的差距。",
            enBody:
              "A calorie deficit means energy intake is lower than expenditure over time. It is not starvation; it is a sustainable gap created through diet, activity, and training.",
            items: [
              { zhLabel: "小赤字", enLabel: "Small deficit", zhValue: "約低於維持熱量 10-15%", enValue: "~10-15% below maintenance" },
              { zhLabel: "中等赤字", enLabel: "Moderate deficit", zhValue: "約低於維持熱量 15-25%", enValue: "~15-25% below maintenance" },
              { zhLabel: "太激進", enLabel: "Too aggressive", zhValue: "訓練掉、暴食、睡眠差", enValue: "Performance drops, bingeing, poor sleep" },
            ],
          },
          {
            zhTitle: "怎麼創造赤字",
            enTitle: "How to create the deficit",
            zhBody: "最穩的方式通常是飲食先砍一點、日常步數提高一點、重訓保留，再用有氧補足，不要把所有壓力都丟給一種方法。",
            enBody:
              "The stable approach is usually a small diet adjustment, more daily steps, preserved lifting, and cardio as a tool. Do not put all the stress on one method.",
            items: [
              { zhLabel: "飲食", enLabel: "Diet", zhValue: "先減少高熱量低飽足食物", enValue: "Reduce calorie-dense low-satiety foods first" },
              { zhLabel: "活動", enLabel: "Activity", zhValue: "步數比硬塞 HIIT 更容易持續", enValue: "Steps are often easier to sustain than forced HIIT" },
              { zhLabel: "重訓", enLabel: "Lifting", zhValue: "保留肌肉和力量訊號", enValue: "Keeps the muscle and strength signal" },
            ],
          },
          {
            zhTitle: "不要只看體重一天變化",
            enTitle: "Do not judge by one day of scale weight",
            zhBody: "水分、碳水、鹽分、月經週期和腸胃內容物都會讓體重波動。看 7-14 天平均更合理。",
            enBody:
              "Water, carbohydrates, sodium, menstrual cycle, and gut content all move scale weight. A 7-14 day average is more useful.",
            items: [
              { zhLabel: "判斷週期", enLabel: "Review window", zhValue: "至少看 2 週趨勢", enValue: "Use at least a 2-week trend" },
              { zhLabel: "蛋白質", enLabel: "Protein", zhValue: "減脂期通常要更重視", enValue: "Usually more important during cutting" },
              { zhLabel: "調整", enLabel: "Adjustment", zhValue: "先微調 100-200 kcal 或步數", enValue: "Adjust 100-200 kcal or steps first" },
            ],
          },
        ],
      },
      {
        zhTitle: "減脂常見食物營養速查",
        enTitle: "Fat-loss food nutrition quick view",
        zhDescription: "雞蛋用每顆，其餘食物用每 100 g。這些數字只用來建立直覺，不取代實際秤重或營養標示。",
        enDescription:
          "Eggs are per egg; other foods are per 100 g. These are for intuition and do not replace weighing or nutrition labels.",
        cards: [
          {
            zhTitle: "高蛋白、較有飽足感",
            enTitle: "Higher protein, more filling",
            zhBody: "減脂期優先保留蛋白質，通常比先砍掉所有碳水更穩。",
            enBody: "Prioritizing protein is usually more stable than cutting all carbs first.",
            items: [
              { zhLabel: "雞蛋 1 顆", enLabel: "1 egg", zhValue: "約 70 kcal / 蛋白 6 g", enValue: "~70 kcal / 6 g protein" },
              { zhLabel: "雞胸 100 g", enLabel: "Chicken breast 100 g", zhValue: "約 165 kcal / 蛋白 31 g", enValue: "~165 kcal / 31 g protein" },
              { zhLabel: "豆腐 100 g", enLabel: "Tofu 100 g", zhValue: "約 80 kcal / 蛋白 8 g", enValue: "~80 kcal / 8 g protein" },
            ],
          },
          {
            zhTitle: "碳水和主食",
            enTitle: "Carbs and staples",
            zhBody: "主食不是不能吃，而是份量要和赤字、訓練輸出和飽足感一起看。",
            enBody: "Staples are not banned; portions should match the deficit, training output, and satiety.",
            items: [
              { zhLabel: "熟白飯 100 g", enLabel: "Cooked rice 100 g", zhValue: "約 130 kcal / 碳水 28 g", enValue: "~130 kcal / 28 g carbs" },
              { zhLabel: "地瓜 100 g", enLabel: "Sweet potato 100 g", zhValue: "約 85 kcal / 碳水 20 g", enValue: "~85 kcal / 20 g carbs" },
              { zhLabel: "香蕉 100 g", enLabel: "Banana 100 g", zhValue: "約 90 kcal / 碳水 23 g", enValue: "~90 kcal / 23 g carbs" },
            ],
          },
        ],
      },
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
    slug: "can-i-build-muscle-and-lose-fat",
    lang: "zh",
    title: "可以同時增肌減脂嗎？",
    description: "新手、體脂較高、回訓者更有機會；進階者通常要分階段。",
    topic: "fat-loss",
    audience: "新手、減脂、體態重組",
    evidence: "moderate",
    answer: [
      "可以，但不是所有人都一樣容易。新手、體脂較高者、停練後回訓者，通常更有機會同時增加肌肉並減少脂肪。",
      "核心條件是阻力訓練要穩定進步、蛋白質足夠、熱量赤字不要太激進、睡眠能支撐恢復。",
      "越進階、越瘦、越接近上限的人，同時增肌減脂越難，通常更適合分成增肌期和減脂期。",
    ],
    takeaways: ["新手更容易體態重組。", "赤字太大會拖累訓練和肌肉保留。", "看腰圍、力量和照片，不只看體重。"],
    relatedEvidence: ["protein-supplementation", "concurrent-training"],
    relatedArticle: "calorie-deficit-basics",
  },
  {
    slug: "how-to-lose-belly-fat",
    lang: "zh",
    title: "怎麼瘦肚子？可以局部減脂嗎？",
    description: "腹肌訓練能練肌肉，但脂肪下降主要看整體熱量赤字。",
    topic: "fat-loss",
    audience: "減脂新手、上班族",
    evidence: "strong",
    answer: [
      "大多數情況下，不能指定只讓肚子脂肪先下降。腹肌訓練可以讓腹肌更有力量，但不會單獨把腹部脂肪融掉。",
      "要讓腰圍下降，仍然要靠長期熱量赤字、蛋白質、阻力訓練、活動量和睡眠。",
      "肚子脂肪常常是最後才明顯變少的部位之一，所以應該看 4-8 週趨勢，而不是每天照鏡子焦慮。",
    ],
    takeaways: ["局部減脂不是主要策略。", "腰圍趨勢比單日體重更有用。", "腹肌訓練是肌肉訓練，不是脂肪定位器。"],
    relatedEvidence: ["concurrent-training"],
    relatedArticle: "calorie-deficit-basics",
  },
  {
    slug: "is-creatine-safe",
    lang: "zh",
    title: "肌酸安全嗎？會傷腎嗎？",
    description: "健康族群和腎臟疾病或用藥族群要分開討論。",
    topic: "supplements",
    audience: "學生黨、增肌、力量訓練",
    evidence: "strong",
    answer: [
      "對健康成人來說，肌酸一水合物是研究很多、證據很強的補劑。它的主要用途是高強度輸出、力量訓練表現和瘦體重增加。",
      "體重上升常和肌肉內水分儲存有關，不等於脂肪增加。",
      "如果已有腎臟疾病、用藥、未成年競技或醫療限制，應先問醫師或合格專業人員，不要直接套用網路建議。",
    ],
    takeaways: ["優先選 creatine monohydrate。", "不要把水重誤認成脂肪。", "疾病和用藥情境要醫療評估。"],
    relatedEvidence: ["creatine-safety"],
    relatedArticle: "supplement-priority-map",
  },
  {
    slug: "preworkout-or-coffee",
    lang: "zh",
    title: "Pre-workout 和咖啡差在哪？",
    description: "很多 pre-workout 的主要體感來自咖啡因，但複方產品要看成分和劑量。",
    topic: "supplements",
    audience: "學生黨、上班族、訓練前容易累的人",
    evidence: "strong",
    answer: [
      "很多 pre-workout 的核心體感來自咖啡因。咖啡、咖啡因錠和 pre-workout 的差別在於劑量穩定性、其他成分、價格和腸胃耐受。",
      "咖啡因可能幫助警覺、耐力和主觀疲勞，但太晚使用會破壞睡眠，反過來影響恢復和增肌減脂。",
      "如果只是想提神，先確認自己對咖啡因的反應，再決定是否需要複方產品。",
    ],
    takeaways: ["先看咖啡因毫克數。", "晚上訓練要小心睡眠代價。", "複方不一定比咖啡更划算。"],
    relatedEvidence: ["caffeine-performance"],
    relatedArticle: "supplement-priority-map",
  },
  {
    slug: "older-adults-how-often-strength",
    lang: "zh",
    title: "中老年人一週要做幾次肌力訓練？",
    description: "重點是安全、規律、全身肌群和功能，而不是一開始追最大重量。",
    topic: "older-adults",
    audience: "中老年、家人照護、健康促進",
    evidence: "strong",
    answer: [
      "多數中老年人可以先從每週 2-3 次肌力訓練開始，涵蓋推、拉、蹲、髖鉸鏈、核心和簡單平衡。",
      "如果有疼痛、骨質疏鬆、心血管疾病、近期手術或用藥，應先做專業評估。",
      "訓練目標應先放在站起來更穩、走路更有力、日常活動更安全，而不是一開始追求健美式訓練量。",
    ],
    takeaways: ["每週 2-3 次是實務起點。", "功能和平衡很重要。", "高風險族群先評估。"],
    relatedEvidence: ["older-adult-activity-guidelines", "protein-supplementation"],
    relatedArticle: "older-adults-strength",
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
  {
    slug: "can-i-build-muscle-and-lose-fat",
    lang: "en",
    title: "Can I build muscle and lose fat at the same time?",
    description: "Beginners, higher-body-fat lifters, and returners have the best shot; advanced lifters often need phases.",
    topic: "fat-loss",
    audience: "Beginners, recomposition, fat loss",
    evidence: "moderate",
    answer: [
      "Yes, but not everyone has the same odds. Beginners, people with more body fat, and people returning after detraining usually have the best chance.",
      "The conditions are progressive resistance training, enough protein, a non-aggressive deficit, and sleep that supports recovery.",
      "The leaner and more advanced you are, the more likely it is that dedicated muscle-gain and fat-loss phases will work better.",
    ],
    takeaways: ["Beginners have the best recomposition odds.", "A harsh deficit can hurt training.", "Track waist, strength, and photos, not only scale weight."],
    relatedEvidence: ["protein-supplementation", "concurrent-training"],
    relatedArticle: "calorie-deficit-basics",
  },
  {
    slug: "how-to-lose-belly-fat",
    lang: "en",
    title: "How do I lose belly fat?",
    description: "Ab training trains abs, but fat loss mainly follows overall calorie deficit.",
    topic: "fat-loss",
    audience: "Fat-loss beginners, office workers",
    evidence: "strong",
    answer: [
      "In most cases, you cannot choose the exact body area that loses fat first. Ab training can strengthen abs, but it does not locally melt abdominal fat.",
      "Waist reduction still comes from sustained calorie deficit, protein, resistance training, activity, and sleep.",
      "Belly fat is often one of the slower areas to visibly change, so use 4-8 week trends instead of daily mirror panic.",
    ],
    takeaways: ["Spot reduction is not the main strategy.", "Waist trend matters.", "Ab training is muscle training, not fat targeting."],
    relatedEvidence: ["concurrent-training"],
    relatedArticle: "calorie-deficit-basics",
  },
  {
    slug: "is-creatine-safe",
    lang: "en",
    title: "Is creatine safe?",
    description: "Healthy users and people with kidney disease, medication, or clinical restrictions need different advice.",
    topic: "supplements",
    audience: "Students, muscle gain, strength training",
    evidence: "strong",
    answer: [
      "For healthy adults, creatine monohydrate is one of the more researched and better-supported supplements for high-intensity output, resistance training, and lean mass.",
      "Early scale weight increases are often related to water storage, not automatic fat gain.",
      "Kidney disease, medication, youth sport, or medical restrictions change the context and should involve qualified guidance.",
    ],
    takeaways: ["Use creatine monohydrate first.", "Do not confuse water weight with fat gain.", "Clinical contexts need clinical advice."],
    relatedEvidence: ["creatine-safety"],
    relatedArticle: "supplement-priority-map",
  },
  {
    slug: "preworkout-or-coffee",
    lang: "en",
    title: "Pre-workout or coffee?",
    description: "Many pre-workouts feel effective because of caffeine; blends need ingredient and dose checks.",
    topic: "supplements",
    audience: "Students, professionals, tired lifters",
    evidence: "strong",
    answer: [
      "Many pre-workout products get their main effect from caffeine. Coffee, caffeine pills, and pre-workout differ in dose control, extra ingredients, price, and tolerance.",
      "Caffeine may help alertness, endurance, and perceived effort, but late-day use can hurt sleep and then recovery.",
      "If you mainly want alertness, check your caffeine response before paying for a complex blend.",
    ],
    takeaways: ["Check caffeine milligrams.", "Evening training has sleep tradeoffs.", "Blends are not always better value than coffee."],
    relatedEvidence: ["caffeine-performance"],
    relatedArticle: "supplement-priority-map",
  },
  {
    slug: "older-adults-how-often-strength",
    lang: "en",
    title: "How often should older adults strength train?",
    description: "The starting point is safe, regular, whole-body training, not maximal lifting.",
    topic: "older-adults",
    audience: "Older adults, families, health-focused beginners",
    evidence: "strong",
    answer: [
      "A practical start is 2-3 strength sessions per week, covering push, pull, squat, hinge, core, and simple balance patterns.",
      "Pain, osteoporosis, cardiovascular disease, recent surgery, or medication considerations should be assessed professionally.",
      "The first goal is often standing up more confidently, walking stronger, and keeping daily function, not bodybuilding volume.",
    ],
    takeaways: ["2-3 sessions per week is a practical start.", "Function and balance matter.", "Higher-risk cases need assessment."],
    relatedEvidence: ["older-adult-activity-guidelines", "protein-supplementation"],
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
    slug: "muscle-gain-program-start",
    lang: "zh",
    title: "增肌課表起點：先排訓練量，再補蛋白質和碳水",
    description: "用每週有效組、目標肌群、蛋白質和碳水建立一個可進步的增肌計畫。",
    topic: "muscle-gain",
    readingTime: "6 分鐘",
    relatedEvidence: ["protein-supplementation", "carbohydrate-refueling"],
    body: [
      {
        heading: "先看每週有效組",
        paragraphs: [
          "增肌課表不是動作越多越好，而是每個目標肌群每週有多少真正有效、能恢復、能逐步進步的組數。",
          "新手可以先從每肌群每週 6-10 組開始，穩定訓練者再往 10-18 組調整。只要重量、次數或動作品質長期上不去，先檢查恢復和總量。",
        ],
      },
      {
        heading: "蛋白質和碳水是課表的燃料",
        paragraphs: [
          "蛋白質提供修復和合成材料，碳水幫助訓練輸出和肌糖原補充。訓練量越高，越不能只靠意志硬撐。",
          "蛋白質可先抓每公斤體重約 1.6 g/日；碳水則依訓練量、總熱量和體重變化調整。",
        ],
      },
    ],
  },
  {
    slug: "calorie-deficit-basics",
    lang: "zh",
    title: "熱量赤字是什麼？減脂先懂這個，再談有氧和重訓",
    description: "把熱量赤字單獨拎出來，避免被單一食物、運動或補劑帶偏。",
    topic: "fat-loss",
    readingTime: "5 分鐘",
    relatedEvidence: ["concurrent-training", "protein-supplementation"],
    body: [
      {
        heading: "赤字是長期平均，不是一天餓爆",
        paragraphs: [
          "熱量赤字指一段時間內攝入低於消耗。它可以來自少吃一點、多走一點、保留重訓和加入適量有氧，而不是把自己逼到無法生活。",
          "太激進的赤字常帶來訓練表現下降、暴食、睡眠變差和肌肉流失風險。能維持的赤字才有商業和科普價值。",
        ],
      },
      {
        heading: "重訓和蛋白質讓減脂更像減脂",
        paragraphs: [
          "體重下降不等於只掉脂肪。重訓和足夠蛋白質提供保留瘦體重的訊號，讓減脂結果更接近你想要的體態。",
          "有氧很好，但它是增加消耗與心肺健康的工具，不應該被包裝成唯一答案。",
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
    slug: "muscle-gain-program-start",
    lang: "en",
    title: "A muscle-gain program starts with volume, then protein and carbs",
    description: "Use weekly hard sets, target muscles, protein, and carbohydrates to build a plan that can progress.",
    topic: "muscle-gain",
    readingTime: "6 min",
    relatedEvidence: ["protein-supplementation", "carbohydrate-refueling"],
    body: [
      {
        heading: "Start with weekly hard sets",
        paragraphs: [
          "A hypertrophy program is not better because it has more exercises. The useful question is how many recoverable, progressive hard sets each target muscle gets per week.",
          "Beginners can start around 6-10 sets per muscle per week. Trained lifters may move toward 10-18 if performance and recovery hold.",
        ],
      },
      {
        heading: "Protein and carbs support the program",
        paragraphs: [
          "Protein supplies repair and building material; carbohydrates help training output and glycogen. Higher training volume usually requires better fueling.",
          "A practical protein start is around 1.6 g/kg/day. Carbohydrates should move with training volume, total calories, and body-weight trend.",
        ],
      },
    ],
  },
  {
    slug: "calorie-deficit-basics",
    lang: "en",
    title: "What is a calorie deficit?",
    description: "Understand the deficit before arguing about cardio, lifting, foods, or supplements.",
    topic: "fat-loss",
    readingTime: "5 min",
    relatedEvidence: ["concurrent-training", "protein-supplementation"],
    body: [
      {
        heading: "A deficit is a long-term average",
        paragraphs: [
          "A calorie deficit means intake is lower than expenditure over time. It can come from a small diet change, more steps, preserved lifting, and reasonable cardio.",
          "An aggressive deficit often creates performance drops, binge risk, poor sleep, and more lean-mass loss. Sustainable beats dramatic.",
        ],
      },
      {
        heading: "Lifting and protein make fat loss look like fat loss",
        paragraphs: [
          "Scale weight loss is not automatically fat loss. Lifting and enough protein provide the signal to keep lean mass.",
          "Cardio is useful, but it is a tool for energy expenditure and health, not the only answer.",
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
  if (lang === "zh-cn") {
    return items.filter((item) => item.lang === "zh").map((item) => toSimplifiedItem(item));
  }
  return items.filter((item) => item.lang === lang);
}

export function evidenceBySlug(slug: string) {
  return evidence.find((item) => item.slug === slug);
}

const toCn = OpenCC.Converter({ from: "tw", to: "cn" });

export function localizeText(text: string, lang: Lang): string {
  return lang === "zh-cn" ? toCn(text) : text;
}

export function topicTitle(topic: Topic | undefined, lang: Lang): string {
  if (!topic) return "";
  if (lang === "en") return topic.enTitle;
  return localizeText(topic.zhTitle, lang);
}

export function topicDescription(topic: Topic | undefined, lang: Lang): string {
  if (!topic) return "";
  if (lang === "en") return topic.enDescription;
  return localizeText(topic.zhDescription, lang);
}

export function localizedEvidence(lang: Lang): Evidence[] {
  if (lang !== "zh-cn") return evidence;
  return evidence.map((item) => ({
    ...item,
    title: localizeText(item.title, lang),
    description: localizeText(item.description, lang),
    sourceType: localizeText(item.sourceType, lang),
    summary: localizeText(item.summary, lang),
    practicalUse: item.practicalUse.map((use) => localizeText(use, lang)),
  }));
}

export function localizedEvidenceBySlug(slug: string, lang: Lang): Evidence | undefined {
  const item = evidenceBySlug(slug);
  if (!item || lang !== "zh-cn") return item;
  return localizedEvidence(lang).find((entry) => entry.slug === slug);
}

export function topicDeepDiveBySlug(slug: string, lang: Lang): TopicDeepDive | undefined {
  const item = topicDeepDives.find((entry) => entry.slug === slug);
  if (!item || lang !== "zh-cn") return item;
  return toSimplifiedItem(item);
}

function toSimplifiedItem<T>(item: T): T {
  if (typeof item === "string") return toCn(item) as T;
  if (Array.isArray(item)) return item.map((entry) => toSimplifiedItem(entry)) as T;
  if (item && typeof item === "object") {
    return Object.fromEntries(
      Object.entries(item).map(([key, value]) => [key, key === "lang" ? "zh-cn" : toSimplifiedItem(value)])
    ) as T;
  }
  return item;
}
