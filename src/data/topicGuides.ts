import type { Lang } from "./content";
import { localizeText } from "./content";

export type TopicGuide = {
  slug: string;
  zhSeoTitle: string;
  enSeoTitle: string;
  zhDescription: string;
  enDescription: string;
  zhH1: string;
  enH1: string;
  zhIntro: string;
  enIntro: string;
  coreQuestions: { zh: string; en: string }[];
  firstSteps: { zhTitle: string; enTitle: string; zhBody: string; enBody: string }[];
  mistakes: { zh: string; en: string }[];
  decisionCards: {
    zhTitle: string;
    enTitle: string;
    zhBody: string;
    enBody: string;
    items: { zhLabel: string; enLabel: string; zhValue: string; enValue: string }[];
  }[];
  toolLinks: { href: string; enHref?: string; zhLabel: string; enLabel: string; zhBody: string; enBody: string }[];
  evidence: string[];
};

const guide = (item: TopicGuide) => item;

export const topicGuides: TopicGuide[] = [
  guide({
    slug: "muscle-gain",
    zhSeoTitle: "增肌完整指南",
    enSeoTitle: "Complete Muscle Gain Guide",
    zhDescription: "從訓練量、蛋白質、碳水、熱量和恢復建立增肌計畫，並連到相關 FAQ、文章、動作和證據。",
    enDescription: "Build a muscle-gain plan from training volume, protein, carbohydrates, calories, and recovery, with links to FAQ, articles, exercises, and evidence.",
    zhH1: "增肌完整指南",
    enH1: "Complete Muscle Gain Guide",
    zhIntro: "增肌不是只喝蛋白粉，而是讓訓練刺激、總熱量、蛋白質、碳水和恢復一起對齊。",
    enIntro: "Muscle gain is not a protein-powder problem. Training stimulus, calories, protein, carbohydrates, and recovery need to line up.",
    coreQuestions: [
      { zh: "一天要吃多少蛋白質？", en: "How much protein do I need?" },
      { zh: "每個肌群一週要練幾組？", en: "How many weekly sets does each muscle need?" },
      { zh: "碳水會不會影響訓練輸出？", en: "Do carbohydrates affect training output?" },
      { zh: "可以同時增肌減脂嗎？", en: "Can I gain muscle and lose fat at the same time?" },
    ],
    firstSteps: [
      { zhTitle: "先固定課表", enTitle: "Stabilize the program", zhBody: "每週覆蓋主要肌群，先讓動作、組數和進步紀錄固定下來。", enBody: "Cover the main muscle groups weekly and make exercises, sets, and progression trackable." },
      { zhTitle: "抓蛋白質底線", enTitle: "Set a protein floor", zhBody: "多數訓練者可先用每公斤體重約 1.6 g/日作為起點。", enBody: "Many lifters can start around 1.6 g/kg/day as a practical protein target." },
      { zhTitle: "讓訓練有燃料", enTitle: "Fuel the sessions", zhBody: "訓練量越高，碳水、睡眠和總熱量越不能被忽略。", enBody: "The higher the volume, the more carbohydrates, sleep, and calories matter." },
    ],
    mistakes: [
      { zh: "只追補劑，不記錄訓練是否進步。", en: "Chasing supplements while not tracking training progress." },
      { zh: "動作太多，但每個肌群有效組數和恢復都不清楚。", en: "Adding too many exercises without knowing hard sets or recovery." },
      { zh: "怕碳水，結果訓練輸出和總熱量都吃不上去。", en: "Avoiding carbs so aggressively that training output and calories suffer." },
    ],
    decisionCards: [
      {
        zhTitle: "增肌優先順序",
        enTitle: "Muscle-gain priority order",
        zhBody: "先處理能長期影響結果的底層，再談補劑細節。",
        enBody: "Fix the foundations before debating supplement details.",
        items: [
          { zhLabel: "1", enLabel: "1", zhValue: "漸進訓練和有效組", enValue: "Progressive hard sets" },
          { zhLabel: "2", enLabel: "2", zhValue: "蛋白質和總熱量", enValue: "Protein and total calories" },
          { zhLabel: "3", enLabel: "3", zhValue: "碳水、睡眠、恢復", enValue: "Carbs, sleep, recovery" },
        ],
      },
      {
        zhTitle: "常用動作入口",
        enTitle: "Exercise entry points",
        zhBody: "先從胸、背、腿臀、肩手臂的大動作建立可進步的訓練。",
        enBody: "Start with progressable lifts for chest, back, legs/glutes, shoulders, and arms.",
        items: [
          { zhLabel: "胸", enLabel: "Chest", zhValue: "臥推、上斜推、夾胸", enValue: "Bench press, incline press, fly" },
          { zhLabel: "背", enLabel: "Back", zhValue: "高位下拉、引體、划船", enValue: "Pulldown, pull-up, row" },
          { zhLabel: "腿臀", enLabel: "Legs/glutes", zhValue: "深蹲、腿推、硬舉、臀推", enValue: "Squat, leg press, hinge, hip thrust" },
        ],
      },
    ],
    toolLinks: [
      { href: "/exercises/", zhLabel: "查動作庫", enLabel: "Exercise library", zhBody: "按肌群、難度和器材找動作。", enBody: "Find exercises by muscle, difficulty, and equipment." },
      { href: "/muscles/chest/", zhLabel: "胸肌動作排名", enLabel: "Chest exercise ranking", zhBody: "從胸肌開始選動作。", enBody: "Start exercise selection from the chest guide." },
      { href: "/foods/", zhLabel: "查食物營養", enLabel: "Food nutrition", zhBody: "用常見份量建立蛋白和碳水直覺。", enBody: "Build protein and carbohydrate intuition from common servings." },
    ],
    evidence: ["protein-supplementation", "carbohydrate-refueling", "supplement-evidence-map"],
  }),
  guide({
    slug: "fat-loss",
    zhSeoTitle: "減脂完整指南",
    enSeoTitle: "Complete Fat Loss Guide",
    zhDescription: "把熱量赤字、蛋白質、重訓、有氧、步數和食物選擇整理成可持續的減脂策略。",
    enDescription: "Turn calorie deficit, protein, lifting, cardio, steps, and food choices into a sustainable fat-loss strategy.",
    zhH1: "減脂完整指南",
    enH1: "Complete Fat Loss Guide",
    zhIntro: "減脂的底層是可持續的熱量赤字；重訓、蛋白質、有氧和食物選擇都是讓赤字更好執行的工具。",
    enIntro: "Fat loss starts with a sustainable calorie deficit. Lifting, protein, cardio, and food choices make that deficit more effective.",
    coreQuestions: [
      { zh: "熱量赤字到底是什麼？", en: "What is a calorie deficit?" },
      { zh: "怎麼瘦肚子？可以局部減脂嗎？", en: "How do I lose belly fat? Is spot reduction real?" },
      { zh: "減脂要先有氧還是重訓？", en: "Cardio or weights first for fat loss?" },
      { zh: "減脂期怎麼不掉肌肉？", en: "How do I avoid losing muscle while cutting?" },
    ],
    firstSteps: [
      { zhTitle: "先建立赤字", enTitle: "Create the deficit", zhBody: "先從飲食份量、步數和日常活動微調，不要一開始就極端節食。", enBody: "Start with portions, steps, and daily activity instead of extreme dieting." },
      { zhTitle: "保留重訓", enTitle: "Keep lifting", zhBody: "重訓提供保留肌肉和力量的訊號，讓減脂更像減脂。", enBody: "Resistance training gives the signal to keep muscle and strength." },
      { zhTitle: "提高蛋白質品質", enTitle: "Improve protein quality", zhBody: "減脂期蛋白質更重要，因為目標不是只讓體重下降。", enBody: "Protein matters more during cutting because the goal is not just lower scale weight." },
    ],
    mistakes: [
      { zh: "把有氧當懲罰，忽略總熱量和飲食可持續性。", en: "Using cardio as punishment while ignoring calories and adherence." },
      { zh: "完全戒碳水，結果訓練輸出和情緒都崩。", en: "Cutting all carbs and losing training output and mood." },
      { zh: "每天看體重崩潰，不看 7-14 天平均趨勢。", en: "Panicking over daily scale weight instead of 7-14 day trends." },
    ],
    decisionCards: [
      {
        zhTitle: "減脂調整順序",
        enTitle: "Fat-loss adjustment order",
        zhBody: "先用小調整確認趨勢，再逐步加強。",
        enBody: "Use small adjustments first, then increase only if the trend stalls.",
        items: [
          { zhLabel: "1", enLabel: "1", zhValue: "減少高熱量低飽足食物", enValue: "Reduce calorie-dense, low-satiety foods" },
          { zhLabel: "2", enLabel: "2", zhValue: "保留重訓和蛋白質", enValue: "Keep lifting and protein" },
          { zhLabel: "3", enLabel: "3", zhValue: "增加步數或低衝擊有氧", enValue: "Add steps or low-impact cardio" },
        ],
      },
    ],
    toolLinks: [
      { href: "/foods/", zhLabel: "查減脂食物", enLabel: "Food nutrition", zhBody: "比較常見食物熱量、蛋白質和碳水。", enBody: "Compare calories, protein, and carbs in common foods." },
      { href: "/exercises/", zhLabel: "查重訓動作", enLabel: "Exercise library", zhBody: "保留主要肌群訓練。", enBody: "Keep major muscle groups trained." },
      { href: "/faq/how-to-lose-belly-fat/", zhLabel: "瘦肚子 FAQ", enLabel: "Belly fat FAQ", zhBody: "理解局部減脂迷思。", enBody: "Understand the spot-reduction myth." },
    ],
    evidence: ["protein-supplementation", "concurrent-training", "carbohydrate-refueling"],
  }),
  guide({
    slug: "supplements",
    zhSeoTitle: "補劑優先順序指南",
    enSeoTitle: "Supplement Priority Guide",
    zhDescription: "用證據、成本、使用場景和風險排序肌酸、蛋白粉、咖啡因、魚油與常見補劑。",
    enDescription: "Rank creatine, protein powder, caffeine, omega-3, and common supplements by evidence, cost, use case, and risk.",
    zhH1: "補劑優先順序指南",
    enH1: "Supplement Priority Guide",
    zhIntro: "補劑最容易吸引點擊，也最容易失去信任。先問用途、證據、成本和不適用族群，再決定要不要買。",
    enIntro: "Supplements attract attention, but trust is fragile. Ask about use case, evidence, cost, and who should avoid it before buying.",
    coreQuestions: [
      { zh: "肌酸安全嗎？", en: "Is creatine safe?" },
      { zh: "蛋白粉是不是必需品？", en: "Is protein powder required?" },
      { zh: "Pre-workout 和咖啡差在哪？", en: "Pre-workout or coffee?" },
      { zh: "BCAA、魚油、甜菜根汁值得買嗎？", en: "Are BCAA, fish oil, or beetroot worth buying?" },
    ],
    firstSteps: [
      { zhTitle: "先確認缺口", enTitle: "Find the gap", zhBody: "是蛋白質不足、訓練前精神差，還是只是被行銷推動？", enBody: "Is the gap protein, pre-training alertness, or just marketing pressure?" },
      { zhTitle: "先買單一成分", enTitle: "Prefer single ingredients", zhBody: "肌酸一水合物、蛋白粉、咖啡因通常比花俏複方更容易判斷。", enBody: "Creatine monohydrate, protein powder, and caffeine are easier to evaluate than flashy blends." },
      { zhTitle: "看不適用族群", enTitle: "Check who should avoid it", zhBody: "疾病、用藥、懷孕、未成年和睡眠問題都會改變決策。", enBody: "Disease, medication, pregnancy, youth, and sleep issues change the decision." },
    ],
    mistakes: [
      { zh: "把補劑排在訓練、飲食、睡眠前面。", en: "Putting supplements ahead of training, diet, and sleep." },
      { zh: "只看網紅推薦，不看劑量、成分和證據。", en: "Following influencer recommendations without checking dose, ingredients, and evidence." },
      { zh: "預算有限卻先買一堆低證據產品。", en: "Buying many low-evidence products on a limited budget." },
    ],
    decisionCards: [
      {
        zhTitle: "補劑紅綠燈",
        enTitle: "Supplement traffic light",
        zhBody: "用優先順序降低買錯成本。",
        enBody: "Use priority tiers to reduce wasted purchases.",
        items: [
          { zhLabel: "先研究", enLabel: "Study first", zhValue: "肌酸、蛋白粉、咖啡因", enValue: "Creatine, protein powder, caffeine" },
          { zhLabel: "看情境", enLabel: "Contextual", zhValue: "魚油、甜菜根汁、beta-alanine", enValue: "Omega-3, beetroot/nitrate, beta-alanine" },
          { zhLabel: "先別急", enLabel: "Do not rush", zhValue: "低劑量複方、神奇燃脂產品", enValue: "Low-dose blends, miracle fat burners" },
        ],
      },
    ],
    toolLinks: [
      { href: "/evidence/supplement-evidence-map/", zhLabel: "補劑證據地圖", enLabel: "Supplement evidence map", zhBody: "用證據強度和用途看補劑。", enBody: "Compare supplements by evidence and use case." },
      { href: "/faq/is-creatine-safe/", zhLabel: "肌酸安全 FAQ", enLabel: "Creatine safety FAQ", zhBody: "健康族群和醫療族群要分開。", enBody: "Separate healthy users from clinical contexts." },
      { href: "/articles/supplement-priority-map/", zhLabel: "補劑優先順序文章", enLabel: "Supplement priority article", zhBody: "看更完整的避坑邏輯。", enBody: "Read the longer buying-priority logic." },
    ],
    evidence: ["supplement-evidence-map", "creatine-safety", "caffeine-performance", "omega-3-athletes"],
  }),
  guide({
    slug: "recovery",
    zhSeoTitle: "恢復與痠痛完整指南",
    enSeoTitle: "Recovery and Soreness Guide",
    zhDescription: "整理 DOMS、睡眠、碳水、蛋白質、omega-3 和訓練壓力，判斷恢復是否足夠。",
    enDescription: "Use DOMS, sleep, carbohydrates, protein, omega-3, and training stress to judge whether recovery is sufficient.",
    zhH1: "恢復與痠痛完整指南",
    enH1: "Recovery and Soreness Guide",
    zhIntro: "恢復不是完全不痠，而是下一次訓練能不能維持輸出、動作品質和長期進步。",
    enIntro: "Recovery is not about never being sore. It is whether the next session can maintain output, technique, and long-term progress.",
    coreQuestions: [
      { zh: "一直痠痛代表有效嗎？", en: "Does soreness mean the workout worked?" },
      { zh: "運動後一定要馬上吃嗎？", en: "Do I need to eat immediately after training?" },
      { zh: "睡眠和碳水怎麼影響恢復？", en: "How do sleep and carbs affect recovery?" },
      { zh: "魚油或補劑能幫助恢復嗎？", en: "Can fish oil or supplements help recovery?" },
    ],
    firstSteps: [
      { zhTitle: "先看下一次輸出", enTitle: "Check next-session output", zhBody: "如果每次痠到表現下降，可能是訓練量或恢復沒對齊。", enBody: "If soreness keeps reducing performance, volume and recovery may be misaligned." },
      { zhTitle: "補足總攝取", enTitle: "Meet total intake", zhBody: "一般健身者先看全天蛋白、碳水和熱量，不必害怕錯過神奇窗口。", enBody: "Most lifters should prioritize daily protein, carbs, and calories over a tiny window." },
      { zhTitle: "管理壓力", enTitle: "Manage stress", zhBody: "工作壓力、睡眠和訓練壓力會一起決定恢復。", enBody: "Work stress, sleep, and training stress all shape recovery." },
    ],
    mistakes: [
      { zh: "把痠痛當唯一進步指標。", en: "Using soreness as the only progress marker." },
      { zh: "每週突然加太多組數或新動作。", en: "Adding too many sets or new exercises at once." },
      { zh: "只找恢復補劑，不處理睡眠和總熱量。", en: "Searching for recovery supplements while ignoring sleep and calories." },
    ],
    decisionCards: [
      {
        zhTitle: "恢復檢查表",
        enTitle: "Recovery checklist",
        zhBody: "先看會直接影響下一次訓練的訊號。",
        enBody: "Start with signals that affect the next session.",
        items: [
          { zhLabel: "表現", enLabel: "Performance", zhValue: "重量、次數、動作品質有沒有掉", enValue: "Load, reps, and technique quality" },
          { zhLabel: "身體", enLabel: "Body", zhValue: "痠痛、關節不適、疲勞", enValue: "Soreness, joint irritation, fatigue" },
          { zhLabel: "生活", enLabel: "Lifestyle", zhValue: "睡眠、壓力、食慾", enValue: "Sleep, stress, appetite" },
        ],
      },
    ],
    toolLinks: [
      { href: "/faq/why-am-i-still-sore/", enHref: "/faq/what-should-i-eat-after-training/", zhLabel: "痠痛 FAQ", enLabel: "Post-training food FAQ", zhBody: "理解 DOMS 不是唯一 KPI。", enBody: "Decide how urgent post-training nutrition really is." },
      { href: "/articles/recovery-basics/", enHref: "/evidence/carbohydrate-refueling/", zhLabel: "恢復文章", enLabel: "Recovery evidence", zhBody: "把痠痛、補給和訓練壓力放在一起看。", enBody: "Connect fueling urgency with training density." },
      { href: "/foods/", zhLabel: "食物營養庫", enLabel: "Food nutrition", zhBody: "查蛋白、碳水和熱量來源。", enBody: "Check protein, carbs, and calorie sources." },
    ],
    evidence: ["carbohydrate-refueling", "omega-3-athletes", "protein-supplementation"],
  }),
  guide({
    slug: "training",
    zhSeoTitle: "有氧與重訓安排指南",
    enSeoTitle: "Cardio and Lifting Guide",
    zhDescription: "用目標、總量、強度、順序和恢復安排有氧與重訓，避免把干擾效應過度簡化。",
    enDescription: "Use goals, volume, intensity, order, and recovery to combine cardio and lifting without oversimplifying interference.",
    zhH1: "有氧與重訓安排指南",
    enH1: "Cardio and Lifting Guide",
    zhIntro: "有氧不是增肌的敵人，真正要管理的是總疲勞、訓練優先順序和恢復資源。",
    enIntro: "Cardio is not the enemy of muscle gain. The real issue is total fatigue, training priority, and recovery resources.",
    coreQuestions: [
      { zh: "有氧會不會影響增肌？", en: "Does cardio interfere with muscle gain?" },
      { zh: "重訓和有氧要先做哪個？", en: "Should lifting or cardio come first?" },
      { zh: "上班族時間少怎麼練？", en: "How should busy professionals train?" },
      { zh: "新手一週練幾天？", en: "How many days should beginners train?" },
    ],
    firstSteps: [
      { zhTitle: "先定主目標", enTitle: "Set the priority", zhBody: "想增肌就保護重訓品質；想耐力表現就保護有氧品質。", enBody: "Protect lifting quality for hypertrophy; protect endurance quality for endurance goals." },
      { zhTitle: "控制總量", enTitle: "Control total volume", zhBody: "同時做很多東西可以，但恢復資源有限。", enBody: "You can train multiple qualities, but recovery resources are limited." },
      { zhTitle: "分開硬課", enTitle: "Separate hard sessions", zhBody: "高強度跑步和重腿日不要硬擠在一起。", enBody: "Avoid stacking hard running and heavy leg sessions too tightly." },
    ],
    mistakes: [
      { zh: "聽到干擾效應就完全不做有氧。", en: "Avoiding all cardio after hearing about interference." },
      { zh: "每次都把有氧做到爆，結果重訓品質下降。", en: "Taking every cardio session so hard that lifting quality drops." },
      { zh: "照搬網紅課表，不看自己的睡眠、壓力和時間。", en: "Copying influencer programs without considering sleep, stress, and time." },
    ],
    decisionCards: [
      {
        zhTitle: "安排原則",
        enTitle: "Programming principles",
        zhBody: "根據主目標決定順序和疲勞分配。",
        enBody: "Let the main goal decide order and fatigue distribution.",
        items: [
          { zhLabel: "增肌優先", enLabel: "Muscle priority", zhValue: "先重訓，低衝擊有氧輔助", enValue: "Lift first; use lower-impact cardio" },
          { zhLabel: "減脂優先", enLabel: "Fat-loss priority", zhValue: "重訓保肌肉，有氧補消耗", enValue: "Lift to keep muscle; cardio adds expenditure" },
          { zhLabel: "耐力優先", enLabel: "Endurance priority", zhValue: "保護關鍵有氧課品質", enValue: "Protect key endurance sessions" },
        ],
      },
    ],
    toolLinks: [
      { href: "/articles/cardio-and-lifting/", zhLabel: "有氧重訓文章", enLabel: "Cardio and lifting article", zhBody: "把干擾效應翻成課表決策。", enBody: "Translate interference into programming choices." },
      { href: "/exercises/", zhLabel: "查重訓動作", enLabel: "Exercise library", zhBody: "按肌群補齊基礎動作。", enBody: "Fill the base program by muscle group." },
      { href: "/faq/office-worker-training-time/", enHref: "/faq/does-cardio-kill-gains/", zhLabel: "上班族訓練 FAQ", enLabel: "Cardio interference FAQ", zhBody: "時間少時先保留高回報訓練。", enBody: "Keep cardio in context instead of avoiding it completely." },
    ],
    evidence: ["concurrent-training", "older-adult-activity-guidelines"],
  }),
  guide({
    slug: "older-adults",
    zhSeoTitle: "中老年訓練完整指南",
    enSeoTitle: "Older Adult Training Guide",
    zhDescription: "以安全、肌力、蛋白質、平衡、功能和醫療邊界整理中老年訓練重點。",
    enDescription: "Organize older-adult training around safety, strength, protein, balance, function, and medical boundaries.",
    zhH1: "中老年訓練完整指南",
    enH1: "Older Adult Training Guide",
    zhIntro: "中老年訓練的重點不是硬撐大重量，而是把肌力、平衡和生活功能慢慢拿回來。",
    enIntro: "Older-adult training is not about forcing maximal loads. It is about rebuilding strength, balance, and daily function.",
    coreQuestions: [
      { zh: "60 歲以上還能重訓嗎？", en: "Can people over 60 lift weights?" },
      { zh: "一週要練幾次肌力？", en: "How often should older adults strength train?" },
      { zh: "中老年蛋白質要注意什麼？", en: "What should older adults know about protein?" },
      { zh: "哪些情況要先問醫師？", en: "When should someone ask a clinician first?" },
    ],
    firstSteps: [
      { zhTitle: "先確認安全邊界", enTitle: "Clarify safety boundaries", zhBody: "疼痛、骨質疏鬆、心血管疾病、近期手術或用藥都需要更謹慎。", enBody: "Pain, osteoporosis, cardiovascular disease, recent surgery, or medication require more caution." },
      { zhTitle: "從全身動作開始", enTitle: "Start with whole-body patterns", zhBody: "推、拉、蹲、髖鉸鏈、核心和平衡，先用安全可控的變式。", enBody: "Use safe, controllable versions of push, pull, squat, hinge, core, and balance patterns." },
      { zhTitle: "把蛋白質放進生活", enTitle: "Fit protein into daily life", zhBody: "蛋白質不是健美專屬，它關係到肌肉、功能和恢復。", enBody: "Protein is not only for bodybuilding; it supports muscle, function, and recovery." },
    ],
    mistakes: [
      { zh: "把中老年訓練講成不能用力，導致過度保守。", en: "Making older-adult training so cautious that it becomes underloading." },
      { zh: "忽略病史、疼痛和用藥，直接套年輕人課表。", en: "Ignoring medical history, pain, and medication while copying younger programs." },
      { zh: "只看肌肉外觀，不看站起、走路、上下樓和跌倒風險。", en: "Focusing only on appearance, not standing, walking, stairs, and fall risk." },
    ],
    decisionCards: [
      {
        zhTitle: "安全入門框架",
        enTitle: "Safe starting framework",
        zhBody: "先建立規律和信心，再慢慢增加負荷。",
        enBody: "Build consistency and confidence before increasing load.",
        items: [
          { zhLabel: "頻率", enLabel: "Frequency", zhValue: "每週 2-3 次肌力訓練", enValue: "2-3 strength sessions per week" },
          { zhLabel: "內容", enLabel: "Content", zhValue: "全身肌群 + 平衡 + 日常功能", enValue: "Whole body + balance + daily function" },
          { zhLabel: "邊界", enLabel: "Boundary", zhValue: "疼痛疾病先專業評估", enValue: "Professional assessment for pain or disease" },
        ],
      },
    ],
    toolLinks: [
      { href: "/faq/older-adults-strength-training/", enHref: "/faq/can-older-adults-lift-weights/", zhLabel: "中老年重訓 FAQ", enLabel: "Older-adult lifting FAQ", zhBody: "先理解重訓不是最大重量。", enBody: "Understand that lifting is not just max loads." },
      { href: "/articles/older-adults-strength/", enHref: "/faq/older-adults-how-often-strength/", zhLabel: "中老年重訓文章", enLabel: "Older-adult frequency FAQ", zhBody: "從功能和安全看訓練。", enBody: "Start with safe, regular weekly strength work." },
      { href: "/muscles/legs/", zhLabel: "下肢動作", enLabel: "Leg exercise guide", zhBody: "下肢力量與日常功能高度相關。", enBody: "Lower-body strength is closely tied to daily function." },
    ],
    evidence: ["older-adult-activity-guidelines", "protein-supplementation"],
  }),
];

export function topicGuideBySlug(slug: string) {
  return topicGuides.find((guide) => guide.slug === slug);
}

export function guideText(value: { zh: string; en: string }, lang: Lang) {
  return lang === "en" ? value.en : localizeText(value.zh, lang);
}
