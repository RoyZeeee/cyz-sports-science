import type { Lang } from "./content";
import { localizeText } from "./content";

type LText = { zh: string; en: string };

const lt = (zh: string, en: string): LText => ({ zh, en });

export type SearchGuide = {
  slug: string;
  topic: string;
  title: LText;
  description: LText;
  intro: LText;
  questions: LText[];
  answerBlocks: {
    title: LText;
    body: LText;
  }[];
  decisionRows: {
    label: LText;
    value: LText;
  }[];
  mistakes: LText[];
  relatedFaqs: string[];
  relatedArticles: string[];
  relatedExercises: string[];
  relatedFoods: string[];
  relatedEvidence: string[];
};

export const searchGuides: SearchGuide[] = [
  {
    slug: "beginner-fitness-guide",
    topic: "training",
    title: lt("新手健身完整指南", "Beginner Fitness Guide"),
    description: lt("從目標、課表、動作、蛋白質、熱量和恢復開始，建立第一套不容易走歪的新手健身計畫。", "Start with goals, programming, exercises, protein, calories, and recovery to build a beginner plan that does not drift into noise."),
    intro: lt("新手最需要的不是最複雜的課表，而是一套能持續、能記錄、能慢慢進步的基本系統。", "Beginners do not need the most complex program. They need a repeatable system they can track and progress."),
    questions: [
      lt("新手一週要練幾天？", "How many days per week should beginners train?"),
      lt("先練器械還是自由重量？", "Machines or free weights first?"),
      lt("一定要吃蛋白粉嗎？", "Do beginners need protein powder?"),
      lt("多久會看到身材變化？", "How long until visible changes?"),
    ],
    answerBlocks: [
      { title: lt("先把課表固定下來", "Stabilize the weekly routine"), body: lt("一週 2-4 次阻力訓練通常比每天亂練更容易進步。先覆蓋胸、背、腿臀、肩和核心，再逐步增加訓練量。", "Two to four resistance sessions per week are usually easier to progress than random daily work. Cover chest, back, legs/glutes, shoulders, and core first.") },
      { title: lt("動作用穩定優先", "Choose stable exercises first"), body: lt("新手可以從器械、啞鈴和簡單槓鈴動作開始。能控制活動範圍、能漸進加重，比動作看起來酷更重要。", "Start with machines, dumbbells, and simple barbell lifts. Control, range of motion, and progression matter more than looking advanced.") },
      { title: lt("飲食先抓大方向", "Set broad nutrition targets"), body: lt("先估蛋白質、總熱量和日常食物份量。蛋白粉只是補缺口的工具，不是入門門票。", "Estimate protein, total calories, and common food portions first. Protein powder fills gaps; it is not the entry ticket.") },
    ],
    decisionRows: [
      { label: lt("第一優先", "First priority"), value: lt("固定訓練頻率和動作紀錄", "Consistent training frequency and logging") },
      { label: lt("第二優先", "Second priority"), value: lt("每個主要肌群都有基本動作", "A basic exercise for each major muscle group") },
      { label: lt("第三優先", "Third priority"), value: lt("蛋白質、睡眠和可持續熱量", "Protein, sleep, and sustainable calories") },
    ],
    mistakes: [
      lt("一開始就模仿高階健美課表，結果恢復跟不上。", "Copying advanced bodybuilding splits before recovery can support them."),
      lt("一直換動作，沒有任何動作真的進步。", "Changing exercises so often that nothing actually progresses."),
      lt("只看體重，不記錄力量、腰圍和照片趨勢。", "Only watching scale weight instead of strength, waist, and photos."),
    ],
    relatedFaqs: ["how-much-protein-per-day", "should-i-take-creatine", "office-worker-training-time"],
    relatedArticles: ["muscle-gain-program-start", "protein-powder-is-a-tool"],
    relatedExercises: ["barbell-bench-press", "lat-pulldown", "leg-press", "dumbbell-shoulder-press"],
    relatedFoods: ["egg", "chicken-breast", "cooked-rice", "greek-yogurt"],
    relatedEvidence: ["protein-supplementation", "creatine-safety", "concurrent-training"],
  },
  {
    slug: "chest-training-guide",
    topic: "muscle-gain",
    title: lt("胸肌訓練完整指南", "Complete Chest Training Guide"),
    description: lt("從上胸、中胸、下胸、臥推、啞鈴推、夾胸到訓練量安排，整理胸肌怎麼練大的完整入口。", "A complete entry point for growing the chest: upper, mid, lower chest, bench press, dumbbell press, flys, and training volume."),
    intro: lt("胸肌要練大，不是只靠臥推重量。先把中胸推類穩住，再用上斜角度、下胸角度和夾胸補齊刺激，最後靠足夠訓練量和恢復累積。", "Building the chest is not just about bench load. Stabilize flat pressing first, then add incline, lower-chest angles, fly work, volume, and recovery."),
    questions: [
      lt("胸肌怎麼練大？", "How do I grow my chest?"),
      lt("上胸、中胸、下胸要分開練嗎？", "Should upper, mid, and lower chest be trained separately?"),
      lt("槓鈴臥推和啞鈴臥推差在哪？", "Barbell bench or dumbbell bench?"),
      lt("胸沒感覺是不是動作錯？", "No chest feeling: is the technique wrong?"),
      lt("胸肌一週要練幾組？", "How many weekly sets does chest need?"),
    ],
    answerBlocks: [
      { title: lt("平板推類先建立中胸主力", "Build the mid-chest base with flat presses"), body: lt("槓鈴臥推、啞鈴臥推、史密斯臥推和胸推器械都可當主動作。多數人先把下放深度、肩胛穩定、手肘角度和推起路徑練穩，比只追重量更有效。", "Barbell bench, dumbbell bench, Smith bench, and machine chest press can all be main lifts. For most lifters, depth, scapular stability, elbow angle, and pressing path matter before chasing load.") },
      { title: lt("上斜角度補上胸，但不要變肩推", "Use incline angles without turning them into shoulder presses"), body: lt("上斜啞鈴推、上斜槓鈴推和上斜器械推更偏胸大肌鎖骨部。椅背太直、聳肩或手肘過高時，前三角會搶走很多刺激。", "Incline dumbbell, barbell, and machine presses bias the clavicular fibers. If the bench is too upright, shoulders shrug, or elbows flare too high, front delts can dominate.") },
      { title: lt("夾胸補胸肌內收和收縮感", "Add flys for adduction and contraction"), body: lt("繩索夾胸、蝴蝶機和高到低夾胸能補推類動作不容易做出的胸肌內收感。它們適合放在主推之後，用中等重量和可控活動範圍累積。", "Cable flys, pec deck, and high-to-low flys add adduction work that presses may not emphasize. They fit well after presses with moderate loads and controlled range.") },
    ],
    decisionRows: [
      { label: lt("中胸主力", "Mid-chest base"), value: lt("槓鈴臥推、啞鈴臥推、胸推器械", "Barbell bench, dumbbell bench, machine chest press") },
      { label: lt("上胸補強", "Upper chest"), value: lt("上斜啞鈴推、上斜槓鈴推、上斜器械推", "Incline dumbbell, incline barbell, incline machine press") },
      { label: lt("下胸/下斜角度", "Lower-chest angle"), value: lt("雙槓臂屈伸、高到低繩索夾胸", "Dips, high-to-low cable fly") },
      { label: lt("收縮與孤立", "Isolation"), value: lt("蝴蝶機、繩索夾胸", "Pec deck, cable fly") },
    ],
    mistakes: [
      lt("肩膀前移太多，胸還沒伸展就開始代償。", "Letting the shoulders roll forward before the chest gets a good stretch."),
      lt("只做平板，不補上胸和夾胸角度。", "Only doing flat work and never covering incline or fly angles."),
      lt("每組都追極限重量，總訓練量反而做不上去。", "Chasing max load every set until useful volume drops."),
      lt("把胸沒感覺全怪成基因，卻沒有檢查肩胛、活動範圍和動作節奏。", "Blaming genetics for poor chest feel without checking scapular position, range, and tempo."),
    ],
    relatedFaqs: ["how-much-protein-per-day", "can-i-build-muscle-and-lose-fat"],
    relatedArticles: ["muscle-gain-program-start", "protein-powder-is-a-tool"],
    relatedExercises: ["barbell-bench-press", "dumbbell-bench-press", "incline-dumbbell-press", "machine-chest-press", "pec-deck-fly", "weighted-dip", "high-to-low-cable-fly"],
    relatedFoods: ["chicken-breast", "egg", "milk", "cooked-rice"],
    relatedEvidence: ["protein-supplementation", "carbohydrate-refueling"],
  },
  {
    slug: "back-training-guide",
    topic: "training",
    title: lt("背部訓練完整指南", "Complete Back Training Guide"),
    description: lt("把背闊肌、上背、中背、下背分開看，整理下拉、划船、引體、直臂下壓和硬拉類動作怎麼安排。", "Separate lats, upper back, mid back, and lower back, then organize pulldowns, rows, pull-ups, straight-arm pulldowns, and hinges."),
    intro: lt("背部不是一整片肌肉。想要背變寬、變厚、肩胛控制更好，需要把垂直拉、水平拉、後三角和髖鉸鏈分清楚。", "The back is not one single target. Width, thickness, and scapular control require separating vertical pulls, rows, rear delts, and hinge patterns."),
    questions: [
      lt("背闊肌怎麼練寬？", "How do I train lats for width?"),
      lt("划船和下拉差在哪？", "Rows vs pulldowns: what is the difference?"),
      lt("面拉算背還是肩？", "Is face pull back or rear delt work?"),
      lt("引體向上做不起來怎麼辦？", "What if I cannot do pull-ups yet?"),
      lt("背練不寬、練不厚要怎麼調？", "What should I change if my back is not wide or thick?"),
    ],
    answerBlocks: [
      { title: lt("垂直拉負責背闊和寬度", "Vertical pulls build lats and width"), body: lt("高位下拉、引體向上、對握下拉和直臂下壓更適合練背闊肌。重點是肩膀往下沉、上臂往身體旁邊或後方拉，而不是只用手肘彎曲。", "Pulldowns, pull-ups, neutral pulldowns, and straight-arm pulldowns are useful for lats. Think shoulders down and upper arms moving toward the body, not just bending the elbows.") },
      { title: lt("水平拉負責中上背厚度", "Rows build mid and upper-back thickness"), body: lt("坐姿划船、胸托划船、槓鈴划船和寬握划船主要補中背、上背和肩胛後收控制。想練厚度時，胸托和器械划船通常比亂甩更穩。", "Seated rows, chest-supported rows, barbell rows, and wide-grip rows build mid back, upper back, and retraction control. For thickness, supported rows are often more stable than heaving reps.") },
      { title: lt("後三角獨立處理，別全塞背闊", "Treat rear delts separately"), body: lt("面拉、後束飛鳥和反向蝴蝶機主目標常是後三角，上背與旋轉肌群是輔助。這能避免把所有後側動作都誤寫成背闊肌。", "Face pulls, rear-delt flys, and reverse pec deck often target rear delts first, with upper back and rotator cuff assisting. This avoids labeling every posterior exercise as lats.") },
    ],
    decisionRows: [
      { label: lt("背闊肌/寬度", "Lats/width"), value: lt("高位下拉、引體、直臂下壓、單臂下拉", "Pulldown, pull-up, straight-arm pulldown, single-arm pulldown") },
      { label: lt("中背/厚度", "Mid back/thickness"), value: lt("坐姿划船、胸托划船、槓鈴划船", "Seated row, chest-supported row, barbell row") },
      { label: lt("上背/肩胛", "Upper back/scapula"), value: lt("寬握划船、面拉、反向蝴蝶機", "Wide-grip row, face pull, reverse pec deck") },
      { label: lt("下背/髖鉸鏈", "Lower back/hinge"), value: lt("羅馬尼亞硬舉、硬拉", "Romanian deadlift, deadlift") },
    ],
    mistakes: [
      lt("下拉只用手臂拉，背闊沒有完成肩伸和內收。", "Turning pulldowns into arm curls instead of shoulder extension/adduction."),
      lt("划船每下都聳肩，變成上斜方代償。", "Shrugging every row until the upper traps dominate."),
      lt("把所有背部動作都當成同一種刺激。", "Treating every back exercise as the same stimulus."),
      lt("想練背闊卻只做寬握划船，想練厚度卻只做下拉。", "Trying to build lats with only wide rows, or thickness with only pulldowns."),
    ],
    relatedFaqs: ["cardio-kills-gains", "office-worker-training-time"],
    relatedArticles: ["cardio-and-lifting", "muscle-gain-program-start"],
    relatedExercises: ["lat-pulldown", "wide-grip-lat-pulldown", "pull-up", "straight-arm-pulldown", "seated-cable-row", "barbell-row", "bilateral-machine-row", "face-pull"],
    relatedFoods: ["chicken-breast", "tofu", "cooked-rice", "banana"],
    relatedEvidence: ["concurrent-training", "protein-supplementation"],
  },
  {
    slug: "shoulder-training-guide",
    topic: "training",
    title: lt("肩膀訓練完整指南", "Complete Shoulder Training Guide"),
    description: lt("整理前三角、中三角、後三角、肩推、側平舉、面拉和肩膀不舒服時的訓練調整。", "Organize front, side, and rear delts, shoulder presses, lateral raises, face pulls, and shoulder-comfort adjustments."),
    intro: lt("肩膀想看起來更寬，通常不是只做肩推。肩推負責推力和前三角，中三角靠側平舉累積，後三角則需要面拉、反向蝴蝶機或後束飛鳥補足。", "Wider-looking shoulders usually need more than pressing. Presses build pushing strength and front delts, side delts need raise volume, and rear delts need face pulls, reverse pec deck, or rear-delt flys."),
    questions: [
      lt("肩膀怎麼練寬？", "How do I build wider shoulders?"),
      lt("肩推主要練哪裡？", "What does shoulder press train most?"),
      lt("側平舉要多重才有效？", "How heavy should lateral raises be?"),
      lt("後三角要不要另外練？", "Do rear delts need direct work?"),
      lt("肩膀訓練痛怎麼調整？", "How should shoulder training change if it hurts?"),
    ],
    answerBlocks: [
      { title: lt("肩推負責推力，不代表肩寬就夠", "Pressing builds strength, not the whole shoulder"), body: lt("啞鈴肩推、槓鈴推舉、器械肩推和史密斯肩推會讓前三角、中三角和三頭參與。它們很重要，但通常不足以單獨做出肩寬感。", "Dumbbell, barbell, machine, and Smith shoulder presses involve front delts, side delts, and triceps. They matter, but usually do not create shoulder width alone.") },
      { title: lt("肩寬感靠中三角訓練量", "Shoulder width needs side-delt volume"), body: lt("側平舉和繩索側平舉更能集中到中三角。重量不用大，重點是手肘路徑、不要聳肩甩動、並累積足夠有效組。", "Lateral raises and cable lateral raises concentrate work on side delts. The load need not be huge; elbow path, avoiding shrug-swing reps, and accumulating hard sets matter.") },
      { title: lt("後三角要獨立看，面拉不是背闊", "Rear delts need their own slot"), body: lt("面拉、反向蝴蝶機和後束飛鳥常被放在背日，但主練可以是後三角，上背和旋轉肌群只是輔助。這對肩膀外觀和肩胛控制都重要。", "Face pulls, reverse pec deck, and rear-delt flys may sit on back day, but the main target can be rear delts, with upper back and rotator cuff assisting. This matters for shoulder shape and control.") },
    ],
    decisionRows: [
      { label: lt("主推力", "Main press"), value: lt("啞鈴肩推、器械肩推、槓鈴推舉、史密斯肩推", "Dumbbell press, machine press, barbell overhead press, Smith press") },
      { label: lt("肩寬", "Shoulder width"), value: lt("啞鈴側平舉、繩索側平舉", "Dumbbell lateral raise, cable lateral raise") },
      { label: lt("後束", "Rear delts"), value: lt("面拉、反向蝴蝶機、後束飛鳥", "Face pull, reverse pec deck, rear-delt fly") },
      { label: lt("肩不舒服時", "If shoulders feel irritated"), value: lt("降重量、換器械、縮小疼痛角度、優先動作品質", "Reduce load, switch machines, avoid painful ranges, prioritize technique") },
    ],
    mistakes: [
      lt("只做很重的肩推，卻沒有中三角和後三角訓練量。", "Only pressing heavy without enough side- and rear-delt volume."),
      lt("側平舉用甩的，變成斜方和慣性在工作。", "Swinging lateral raises until traps and momentum take over."),
      lt("肩痛還硬追重量，沒有調整角度、器械或活動範圍。", "Chasing load through shoulder pain instead of adjusting angle, equipment, or range."),
      lt("把面拉寫成背闊訓練，導致後三角長期被低估。", "Treating face pulls as lat work and underestimating rear delts."),
    ],
    relatedFaqs: ["office-worker-training-time", "why-am-i-still-sore"],
    relatedArticles: ["muscle-gain-program-start", "cardio-and-lifting"],
    relatedExercises: ["dumbbell-shoulder-press", "barbell-overhead-press", "machine-shoulder-press", "lateral-raise", "cable-lateral-raise", "face-pull", "reverse-pec-deck", "dumbbell-rear-delt-fly"],
    relatedFoods: ["chicken-breast", "egg", "cooked-rice", "banana"],
    relatedEvidence: ["protein-supplementation", "concurrent-training"],
  },
  {
    slug: "leg-training-guide",
    topic: "training",
    title: lt("腿臀訓練完整指南", "Complete Leg and Glute Training Guide"),
    description: lt("整理股四頭、腿後側、臀大肌、臀中肌、小腿的動作分工，以及深蹲、腿推、硬舉、臀推怎麼安排。", "Organize quads, hamstrings, glute max, glute medius, calves, and how to place squats, leg press, deadlifts, and hip thrusts."),
    intro: lt("腿臀訓練不是深蹲一個動作解決所有問題。股四頭、腿後側、臀大肌、臀中肌和小腿需要不同動作角度，也要考慮疲勞成本。", "Leg and glute training is not solved by one squat. Quads, hamstrings, glute max, glute medius, and calves need different angles and different fatigue costs."),
    questions: [
      lt("腿怎麼練才完整？", "How do I train legs completely?"),
      lt("深蹲和腿推差在哪？", "Squat vs leg press: what is the difference?"),
      lt("股四頭和腿後側要分開練嗎？", "Should quads and hamstrings be trained separately?"),
      lt("臀腿要怎麼安排？", "How should glutes and legs be organized?"),
      lt("深蹲、腿推、臀推、硬拉要怎麼排順序？", "How should squats, leg press, hip thrusts, and deadlifts be ordered?"),
    ],
    answerBlocks: [
      { title: lt("股四頭用蹲推和伸腿補量", "Quads use squat/press patterns and extensions"), body: lt("深蹲、腿推、弓箭步、保加利亞分腿蹲和伸腿機都能訓練股四頭。若深蹲技術或疲勞成本太高，腿推和伸腿機可以補足有效組。", "Squats, leg press, lunges, Bulgarian split squats, and leg extensions all train quads. If squat technique or fatigue cost is limiting, leg press and extensions can add useful hard sets.") },
      { title: lt("腿後側需要髖鉸鏈和膝屈", "Hamstrings need hinges and knee flexion"), body: lt("羅馬尼亞硬舉和硬拉偏髖伸、臀腿後側張力；腿後彎舉偏膝屈。兩者不是互相取代，而是常常互補。", "Romanian deadlifts and deadlifts bias hip extension and posterior-chain tension; leg curls bias knee flexion. They often complement rather than replace each other.") },
      { title: lt("臀部要分臀大肌和臀中肌", "Separate glute max and glute medius"), body: lt("臀推、臀橋和分腿蹲更偏臀大肌；髖外展器械更偏臀中肌。想要臀部形狀和髖穩定，兩種刺激都值得保留。", "Hip thrusts, glute bridges, and split squats bias glute max; hip abduction biases glute medius. For glute shape and hip stability, both are worth keeping.") },
    ],
    decisionRows: [
      { label: lt("股四頭", "Quads"), value: lt("深蹲、腿推、伸腿機、弓箭步", "Squat, leg press, leg extension, lunge") },
      { label: lt("腿後側", "Hamstrings"), value: lt("羅馬尼亞硬舉、躺姿腿後彎舉", "Romanian deadlift, lying leg curl") },
      { label: lt("臀大肌", "Glute max"), value: lt("臀推、臀橋、保加利亞分腿蹲", "Hip thrust, glute bridge, Bulgarian split squat") },
      { label: lt("臀中肌/小腿", "Glute medius/calves"), value: lt("髖外展、站姿提踵或史密斯提踵", "Hip abduction, standing or Smith calf raise") },
    ],
    mistakes: [
      lt("每次腿日都把深蹲做到崩潰，後面股四頭和腿後側補量做不上去。", "Taking squats to collapse every leg day until later quad and hamstring volume disappears."),
      lt("只練腿推和伸腿，完全沒有髖鉸鏈或腿後側彎舉。", "Only doing leg press and extensions with no hinge or leg-curl work."),
      lt("把臀腿、股四頭、腿後側全部混成同一件事。", "Treating glutes, quads, and hamstrings as the same training problem."),
      lt("只追大重量硬拉，卻沒有足夠可恢復的股四頭和臀部訓練量。", "Chasing heavy deadlifts without enough recoverable quad and glute volume."),
    ],
    relatedFaqs: ["can-i-build-muscle-and-lose-fat", "why-am-i-still-sore", "older-adults-strength-training"],
    relatedArticles: ["muscle-gain-program-start", "cardio-and-lifting"],
    relatedExercises: ["back-squat", "leg-press", "leg-extension", "romanian-deadlift", "lying-leg-curl", "hip-thrust", "walking-lunge", "hip-abduction-machine", "smith-calf-raise"],
    relatedFoods: ["cooked-rice", "sweet-potato", "chicken-breast", "banana"],
    relatedEvidence: ["concurrent-training", "protein-supplementation", "older-adult-activity-guidelines"],
  },
  {
    slug: "core-training-guide",
    topic: "training",
    title: lt("腹肌與核心訓練完整指南", "Complete Abs and Core Training Guide"),
    description: lt("說清楚腹肌訓練、核心穩定、繩索捲腹、抬腿、棒式和局部減脂迷思，避免把瘦肚子和練腹肌混在一起。", "Clarify abs training, core stability, cable crunches, leg raises, planks, and spot-reduction myths so fat loss and ab training do not get mixed up."),
    intro: lt("腹肌訓練可以讓腹直肌和核心控制變強，但肚子脂肪下降主要還是熱量赤字。想看到腹肌，要同時處理訓練、飲食和體脂，而不是只每天捲腹。", "Ab training can strengthen the rectus abdominis and trunk control, but belly fat loss mainly comes from an energy deficit. Visible abs require training, diet, and body-fat management, not just daily crunches."),
    questions: [
      lt("每天練腹肌會瘦肚子嗎？", "Will training abs every day reduce belly fat?"),
      lt("捲腹和懸垂抬腿差在哪？", "Crunches vs hanging leg raises: what is the difference?"),
      lt("核心一定要每天練嗎？", "Do I need to train core every day?"),
      lt("腹肌要怎麼放進課表？", "Where should abs go in a program?"),
      lt("腹肌看不到是沒練夠還是體脂太高？", "Are abs invisible because training is low or body fat is high?"),
    ],
    answerBlocks: [
      { title: lt("腹肌訓練不等於局部減脂", "Ab training is not spot reduction"), body: lt("捲腹、抬腿和棒式可以訓練腹肌與核心控制，但看見腹肌通常取決於體脂、腹肌厚度和光線，不是某個動作直接燒肚子脂肪。", "Crunches, leg raises, and planks train abs and trunk control, but visible abs usually depend on body fat, ab thickness, and lighting, not a movement directly burning belly fat.") },
      { title: lt("捲腹類負責腹直肌收縮", "Crunch variations train rectus-abdominis contraction"), body: lt("繩索捲腹、躺姿捲腹和斜板捲腹更直接訓練腹直肌縮短收縮。重點是肋骨往骨盆靠近，而不是用脖子和髖屈肌硬拉。", "Cable, lying, and incline crunches train rectus-abdominis shortening. Think ribs toward pelvis, not yanking with the neck or hip flexors.") },
      { title: lt("抬腿、棒式和抗旋轉負責控制", "Leg raises, planks, and anti-rotation train control"), body: lt("懸垂抬腿牽涉髖屈和骨盆後傾控制；棒式偏抗伸展；側向或抗旋轉變式能補腹斜肌和軀幹穩定。", "Hanging leg raises involve hip flexion and posterior pelvic tilt; planks bias anti-extension; lateral and anti-rotation work adds oblique and trunk stability.") },
    ],
    decisionRows: [
      { label: lt("腹直肌收縮", "Rectus abs contraction"), value: lt("繩索捲腹、躺姿捲腹", "Cable crunch, lying crunch") },
      { label: lt("下腹感/骨盆控制", "Lower-ab feel and pelvic control"), value: lt("懸垂抬腿、躺姿抬腿", "Hanging leg raise, lying leg raise") },
      { label: lt("核心穩定", "Core stability"), value: lt("棒式、抗伸展和抗旋轉變式", "Planks, anti-extension and anti-rotation variations") },
      { label: lt("想看見腹肌", "Visible abs"), value: lt("腹肌訓練 + 減脂飲食 + 足夠蛋白質", "Ab training + fat-loss diet + enough protein") },
    ],
    mistakes: [
      lt("以為每天捲腹就會局部瘦肚子。", "Thinking daily crunches directly spot-reduce belly fat."),
      lt("抬腿只甩髖屈肌，骨盆完全沒有控制。", "Swinging leg raises with hip flexors and no pelvic control."),
      lt("核心訓練做到腰不舒服，卻沒有降低難度。", "Pushing core exercises into back discomfort instead of scaling down."),
      lt("只做棒式撐很久，卻沒有逐步增加難度或負重腹肌動作。", "Only holding long planks without progressing difficulty or adding loaded ab work."),
    ],
    relatedFaqs: ["how-to-lose-belly-fat", "cardio-or-weights-for-fat-loss", "why-am-i-still-sore"],
    relatedArticles: ["calorie-deficit-basics", "cardio-and-lifting"],
    relatedExercises: ["plank", "cable-crunch", "hanging-leg-raise", "incline-bench-crunch", "lying-crunch", "cable-oblique-crunch"],
    relatedFoods: ["egg", "greek-yogurt", "chicken-breast", "sweet-potato"],
    relatedEvidence: ["concurrent-training", "protein-supplementation"],
  },
  {
    slug: "arm-training-guide",
    topic: "training",
    title: lt("手臂訓練指南", "Arm Training Guide"),
    description: lt("整理肱二頭、肱肌、肱三頭和前臂的動作分工，讓手臂訓練不只是亂做彎舉。", "Organize biceps, brachialis, triceps, and forearm exercise roles so arm training is more than random curls."),
    intro: lt("手臂變粗通常需要二頭、肱肌、三頭和前臂一起累積。拉和推會幫忙，但多數人仍需要一些直接手臂訓練。", "Bigger arms usually need accumulated work for biceps, brachialis, triceps, and forearms. Pulls and presses help, but many lifters still need direct arm work."),
    questions: [
      lt("手臂怎麼練粗？", "How do I build bigger arms?"),
      lt("肱肌是什麼？", "What is the brachialis?"),
      lt("三頭要怎麼安排？", "How should triceps be trained?"),
      lt("手臂要放胸背日還是單獨一天？", "Should arms go on push/pull days or their own day?"),
    ],
    answerBlocks: [
      { title: lt("二頭用彎舉建立直接量", "Use curls for direct biceps volume"), body: lt("啞鈴彎舉、曲槓彎舉、牧師椅和繩索彎舉都能累積二頭訓練量。重點是手肘穩定和離心控制。", "Dumbbell curls, EZ-bar curls, preacher curls, and cable curls can all add direct biceps volume. Elbow stability and eccentric control matter.") },
      { title: lt("肱肌用對握和槌式補強", "Use neutral-grip and hammer patterns for brachialis"), body: lt("肱肌在肱二頭深層，槌式彎舉、雙頭繩彎舉和部分反握/對握變式能讓它更明確參與。", "The brachialis sits under the biceps. Hammer curls, rope curls, and some neutral/reverse-grip variations can emphasize it more clearly.") },
      { title: lt("三頭需要伸肘和頭上角度", "Triceps need pressdowns and overhead angles"), body: lt("下壓類適合穩定累積，過頭伸展和碎顱者能補長頭拉長位置刺激，但肘關節感受要優先。", "Pressdowns are stable for volume; overhead extensions and skull crushers can train the long head in a lengthened position, but elbow comfort comes first.") },
    ],
    decisionRows: [
      { label: lt("肱二頭", "Biceps"), value: lt("啞鈴彎舉、曲槓彎舉、牧師椅", "Dumbbell curl, EZ-bar curl, preacher curl") },
      { label: lt("肱肌", "Brachialis"), value: lt("槌式、雙頭繩、對握彎舉", "Hammer, rope, neutral-grip curls") },
      { label: lt("肱三頭", "Triceps"), value: lt("三頭下壓、過頭伸展、碎顱者", "Pressdown, overhead extension, skull crusher") },
    ],
    mistakes: [
      lt("彎舉全程甩身體，目標肌群張力反而少。", "Swinging curls until target-muscle tension drops."),
      lt("只練二頭，忘記三頭其實佔手臂圍度很大一部分。", "Only training biceps while forgetting triceps contribute heavily to arm size."),
      lt("肘或手腕不舒服還硬追重量，沒有換把手或角度。", "Chasing load through elbow or wrist discomfort instead of changing handles or angles."),
    ],
    relatedFaqs: ["how-much-protein-per-day", "office-worker-training-time", "why-am-i-still-sore"],
    relatedArticles: ["muscle-gain-program-start", "protein-powder-is-a-tool"],
    relatedExercises: ["biceps-curl", "rope-hammer-curl", "triceps-pressdown", "skull-crusher", "overhead-triceps-extension", "forearm-reverse-curl"],
    relatedFoods: ["egg", "milk", "chicken-breast", "tofu"],
    relatedEvidence: ["protein-supplementation", "creatine-safety"],
  },
  {
    slug: "fat-loss-diet-guide",
    topic: "fat-loss",
    title: lt("減脂飲食指南", "Fat-Loss Diet Guide"),
    description: lt("用熱量赤字、蛋白質、飽足感、外食和便利商店選擇建立可持續的減脂飲食。", "Use calorie deficit, protein, satiety, eating out, and convenience-store choices to build a sustainable cutting diet."),
    intro: lt("減脂不是把食物分成絕對好壞，而是讓平均熱量低於消耗，同時保留蛋白質、訓練表現和飽足感。", "Fat loss is not about labeling foods as good or bad. It is about sustaining an energy deficit while protecting protein, performance, and satiety."),
    questions: [
      lt("減脂一天要吃多少？", "How much should I eat for fat loss?"),
      lt("外食怎麼選比較不容易爆熱量？", "How do I choose takeout without blowing calories?"),
      lt("碳水是不是要戒掉？", "Do I need to cut carbs?"),
      lt("便利商店可以減脂嗎？", "Can convenience-store food fit a cut?"),
    ],
    answerBlocks: [
      { title: lt("先理解熱量赤字", "Start with the calorie deficit"), body: lt("體脂下降需要一段時間內平均熱量低於消耗。極端節食容易破壞訓練、飢餓感和維持率。", "Fat loss needs average intake below expenditure over time. Extreme dieting often hurts training, hunger, and adherence.") },
      { title: lt("蛋白質和蔬菜先放進盤子", "Place protein and vegetables first"), body: lt("每餐先有明確蛋白來源，再用蔬菜、水果和主食控制飽足感與訓練燃料。", "Put a clear protein source in each meal, then use vegetables, fruit, and staples to manage satiety and training fuel.") },
      { title: lt("外食先避開隱形熱量", "Watch hidden calories when eating out"), body: lt("油炸、濃醬、奶茶、甜點和大份堅果很容易讓赤字消失；不是不能吃，而是要知道成本。", "Fried foods, creamy sauces, milk tea, desserts, and large nut portions can erase a deficit. They are not banned; they have a cost.") },
    ],
    decisionRows: [
      { label: lt("蛋白質", "Protein"), value: lt("雞胸、雞蛋、魚、豆腐、希臘優格", "Chicken, eggs, fish, tofu, Greek yogurt") },
      { label: lt("碳水", "Carbs"), value: lt("白飯、地瓜、燕麥、香蕉，依訓練量調整", "Rice, sweet potato, oats, banana, adjusted to training") },
      { label: lt("容易超標", "Easy to overshoot"), value: lt("油炸、含糖飲、濃醬、零食", "Fried foods, sugary drinks, creamy sauces, snacks") },
    ],
    mistakes: [
      lt("只砍碳水，蛋白質和總熱量卻沒有概念。", "Only cutting carbs while having no protein or calorie structure."),
      lt("平日餓過頭，週末一次補回來。", "Over-restricting weekdays and overeating the weekend back."),
      lt("把有氧當作抵消所有飲食的保險。", "Using cardio as insurance for any food choice."),
    ],
    relatedFaqs: ["cardio-or-weights-for-fat-loss", "how-to-lose-belly-fat", "can-i-build-muscle-and-lose-fat"],
    relatedArticles: ["calorie-deficit-basics", "cardio-and-lifting"],
    relatedExercises: ["leg-press", "lat-pulldown", "barbell-bench-press", "walking-lunge"],
    relatedFoods: ["chicken-breast", "egg", "greek-yogurt", "sweet-potato"],
    relatedEvidence: ["protein-supplementation", "concurrent-training"],
  },
  {
    slug: "protein-guide",
    topic: "supplements",
    title: lt("蛋白質完整指南", "Protein Guide"),
    description: lt("整理一天要吃多少蛋白質、蛋白粉是否必要、食物怎麼選，以及腎臟疑慮何時需要醫療判斷。", "Cover daily protein targets, whether protein powder is needed, food choices, and when kidney concerns need clinical judgment."),
    intro: lt("蛋白質是增肌、減脂和恢復的底層工具，但重點是全天總量與可持續食物選擇，不是神奇粉末。", "Protein is a foundation for muscle gain, fat loss, and recovery, but the key is daily intake and sustainable food choices, not magic powder."),
    questions: [
      lt("健身一天要吃多少蛋白質？", "How much protein do lifters need per day?"),
      lt("蛋白粉會傷腎嗎？", "Does protein powder damage kidneys?"),
      lt("雞胸、雞蛋、牛奶、豆腐怎麼選？", "How do chicken, eggs, milk, and tofu compare?"),
      lt("減脂期蛋白質要不要更高？", "Should protein be higher during fat loss?"),
    ],
    answerBlocks: [
      { title: lt("先估每日總量", "Start with daily intake"), body: lt("多數訓練者可先把約 1.6 g/kg/日當作實用起點，再依減脂、訓練量、飽足感和腸胃狀況調整。", "Many lifters can use about 1.6 g/kg/day as a practical starting point, then adjust for dieting, volume, satiety, and digestion.") },
      { title: lt("蛋白粉只是便利工具", "Protein powder is a convenience tool"), body: lt("如果日常食物吃得到，蛋白粉不是必需；如果課業、工作、食慾或減脂讓蛋白質難達標，它就很方便。", "If food covers the target, powder is not required. If school, work, appetite, or dieting makes protein hard to reach, it is convenient.") },
      { title: lt("腎臟問題分情境", "Kidney concerns depend on context"), body: lt("健康成人和已有腎臟疾病、醫囑限蛋白或用藥考量的人不是同一個情境。疾病相關問題要找醫師或營養師。", "Healthy adults are not the same context as people with kidney disease, medical protein restriction, or medication concerns. Clinical cases need clinicians.") },
    ],
    decisionRows: [
      { label: lt("高蛋白低脂", "High protein, low fat"), value: lt("雞胸、低脂希臘優格、魚類", "Chicken breast, low-fat Greek yogurt, fish") },
      { label: lt("方便補充", "Convenient"), value: lt("蛋白粉、牛奶、茶葉蛋", "Protein powder, milk, eggs") },
      { label: lt("植物性", "Plant-based"), value: lt("豆腐、豆漿、毛豆、豆類", "Tofu, soy milk, edamame, legumes") },
    ],
    mistakes: [
      lt("只看蛋白粉品牌，不知道自己一天吃多少。", "Comparing protein brands without knowing daily intake."),
      lt("把所有高蛋白都當成低熱量。", "Assuming every high-protein food is low calorie."),
      lt("把疾病族群的限制直接套用到健康健身者，或反過來。", "Applying disease restrictions to healthy lifters, or vice versa."),
    ],
    relatedFaqs: ["how-much-protein-per-day", "does-protein-powder-hurt-kidneys", "do-i-need-bcaa"],
    relatedArticles: ["protein-powder-is-a-tool", "muscle-gain-program-start"],
    relatedExercises: ["barbell-bench-press", "lat-pulldown", "leg-press"],
    relatedFoods: ["egg", "chicken-breast", "tofu", "milk", "greek-yogurt"],
    relatedEvidence: ["protein-supplementation", "creatine-safety"],
  },
  {
    slug: "student-fitness-guide",
    topic: "training",
    title: lt("學生黨健身完整指南", "Student Fitness Guide"),
    description: lt("用有限預算、課業時間、便利商店和宿舍飲食，建立學生也能持續的健身計畫。", "Build a sustainable student fitness plan around limited budget, school time, convenience stores, and dorm food."),
    intro: lt("學生黨最需要的是省錢、可重複、能配合課表的系統，而不是一開始就模仿高階健美選手。", "Students need an affordable, repeatable system that fits school life, not an advanced bodybuilding plan from day one."),
    questions: [
      lt("學生一週要練幾天？", "How many days per week should students train?"),
      lt("預算有限要先買什麼補劑？", "What supplements matter on a student budget?"),
      lt("便利商店可以增肌或減脂嗎？", "Can convenience-store food support gaining or cutting?"),
      lt("課業忙的時候怎麼維持？", "How do I keep training when school gets busy?"),
    ],
    answerBlocks: [
      { title: lt("先固定最低訓練頻率", "Lock in the minimum training frequency"), body: lt("一週 2-4 次阻力訓練就能起步。先覆蓋胸、背、腿、肩和核心，再依時間加手臂或弱點。", "Two to four resistance sessions per week is enough to start. Cover chest, back, legs, shoulders, and core before adding arms or weak points.") },
      { title: lt("飲食先用便宜高回報食物", "Use affordable high-return foods first"), body: lt("雞蛋、雞胸、豆腐、牛奶、豆漿、白飯、燕麥和地瓜通常比亂買補劑更能解決問題。", "Eggs, chicken, tofu, milk, soy milk, rice, oats, and sweet potato often solve more problems than random supplements.") },
      { title: lt("補劑不要買全套", "Do not buy the whole supplement stack"), body: lt("先看蛋白質缺口，再考慮肌酸和咖啡因。預算有限時，BCAA 和花俏複方通常不是第一順位。", "Check protein gaps first, then consider creatine and caffeine. On a budget, BCAA and flashy blends are usually not first priority.") },
    ],
    decisionRows: [
      { label: lt("訓練", "Training"), value: lt("每週 2-4 次，優先全身或上下肢", "2-4 sessions weekly, full-body or upper/lower first") },
      { label: lt("飲食", "Food"), value: lt("便宜蛋白 + 主食 + 可持續份量", "Affordable protein + staples + sustainable portions") },
      { label: lt("補劑", "Supplements"), value: lt("蛋白缺口、肌酸、咖啡因優先", "Protein gaps, creatine, caffeine first") },
    ],
    mistakes: [
      lt("把預算花在補劑，正餐蛋白質卻不夠。", "Spending on supplements while meals lack protein."),
      lt("考試週完全放棄，沒有最低維持版本。", "Quitting during exam weeks without a minimum-maintenance plan."),
      lt("每天換動作，沒有任何動作真的進步。", "Changing exercises constantly so nothing progresses."),
    ],
    relatedFaqs: ["student-budget-supplements", "office-worker-training-time", "no-time-to-workout", "preworkout-or-coffee"],
    relatedArticles: ["muscle-gain-program-start", "supplement-priority-map"],
    relatedExercises: ["barbell-bench-press", "lat-pulldown", "leg-press", "dumbbell-shoulder-press"],
    relatedFoods: ["egg", "tea-egg", "cooked-rice", "soy-milk", "protein-shake"],
    relatedEvidence: ["protein-supplementation", "creatine-safety", "concurrent-training"],
  },
  {
    slug: "office-worker-45-minute-workout",
    topic: "training",
    title: lt("上班族 45 分鐘健身課表", "45-Minute Workout for Office Workers"),
    description: lt("整理上班族時間少、壓力高、久坐情境下，45 分鐘內如何安排高回報訓練。", "Organize high-return 45-minute training for office workers with limited time, stress, and long sitting hours."),
    intro: lt("上班族課表不該追求花，而是要在有限時間內保留最重要的推、拉、腿臀、核心和進步紀錄。", "Office-worker training should not be flashy. It should protect push, pull, legs/glutes, core, and progression within limited time."),
    questions: [
      lt("45 分鐘夠練嗎？", "Is 45 minutes enough?"),
      lt("上班族一週練幾天？", "How many days should office workers train?"),
      lt("久坐的人要先練什麼？", "What should long-sitting workers prioritize?"),
      lt("沒時間有氧怎麼辦？", "What if there is no time for cardio?"),
    ],
    answerBlocks: [
      { title: lt("每次只抓 4-6 個動作", "Use only 4-6 exercises per session"), body: lt("45 分鐘內不要塞太多。用 1-2 個主動作、2-3 個輔助動作，再加核心或弱點即可。", "Do not overpack 45 minutes. Use 1-2 main lifts, 2-3 accessories, then core or a weak point.") },
      { title: lt("用超級組節省時間", "Use smart supersets"), body: lt("推拉搭配、上肢和核心搭配通常比兩個重腿動作硬湊更好恢復。", "Pairing push with pull, or upper body with core, often saves time better than forcing two hard leg moves together.") },
      { title: lt("久坐先保留拉和髖鉸鏈", "Keep pulling and hinging"), body: lt("划船、下拉、臀推、羅馬尼亞硬舉和核心控制，對久坐族群常比只練胸手臂更值得保留。", "Rows, pulldowns, hip thrusts, Romanian deadlifts, and trunk control are often worth keeping for desk workers.") },
    ],
    decisionRows: [
      { label: lt("一週 2 天", "2 days/week"), value: lt("全身 A/B", "Full-body A/B") },
      { label: lt("一週 3 天", "3 days/week"), value: lt("全身或上/下/全身", "Full-body or upper/lower/full") },
      { label: lt("一週 4 天", "4 days/week"), value: lt("上下肢分化或推拉腿簡化版", "Upper/lower or simplified push-pull-legs") },
    ],
    mistakes: [
      lt("每次都練到太久，最後因為生活壓力放棄。", "Training too long every time until life stress wins."),
      lt("只做有氧或只練胸手臂，忽略背和腿臀。", "Only doing cardio or chest/arms while ignoring back and legs."),
      lt("沒有記錄重量和次數，無法知道是否進步。", "Not logging load and reps, so progress is invisible."),
    ],
    relatedFaqs: ["office-worker-training-time", "no-time-to-workout", "does-cardio-kill-gains"],
    relatedArticles: ["cardio-and-lifting", "muscle-gain-program-start"],
    relatedExercises: ["lat-pulldown", "seated-cable-row", "leg-press", "dumbbell-shoulder-press", "plank"],
    relatedFoods: ["chicken-salad", "tea-egg", "soy-milk", "rice-ball"],
    relatedEvidence: ["concurrent-training", "protein-supplementation"],
  },
  {
    slug: "three-day-beginner-program",
    topic: "training",
    title: lt("新手一週三練課表", "Three-Day Beginner Program"),
    description: lt("用一週三次全身訓練，幫新手覆蓋胸、背、腿臀、肩、核心，並建立進步紀錄。", "Use three full-body sessions per week to cover chest, back, legs/glutes, shoulders, core, and progression."),
    intro: lt("新手一週三練最適合建立習慣和動作品質。重點不是動作多，而是每週重複、慢慢加重、恢復得過來。", "Three days per week is excellent for beginners because it builds habits and skill. The goal is repeatability, gradual progression, and recovery."),
    questions: [
      lt("新手一週三練夠嗎？", "Is three days enough for beginners?"),
      lt("每次要練全身嗎？", "Should each session be full-body?"),
      lt("先練器械還是自由重量？", "Machines or free weights first?"),
      lt("多久要換課表？", "How often should I change the plan?"),
    ],
    answerBlocks: [
      { title: lt("全身訓練最容易起步", "Full-body is the easiest start"), body: lt("每次安排推、拉、腿、核心，能讓主要肌群一週被刺激多次，也比較不怕漏課。", "Each session can include push, pull, legs, and core, giving major muscles repeated weekly practice and making missed sessions less costly.") },
      { title: lt("器械和自由重量可以混用", "Mix machines and free weights"), body: lt("腿推、下拉、胸推器械適合新手穩定累積；啞鈴和槓鈴則逐步加入控制能力。", "Leg press, pulldown, and machine press help beginners accumulate stable work; dumbbells and barbells can build control over time.") },
      { title: lt("先進步，不要一直換", "Progress before changing"), body: lt("至少連續 4-8 週追蹤重量、次數和動作品質，再判斷是否需要換動作。", "Track load, reps, and technique for at least 4-8 weeks before deciding to swap exercises.") },
    ],
    decisionRows: [
      { label: lt("A 日", "Day A"), value: lt("臥推/胸推、下拉、腿推、側平舉、核心", "Bench/chest press, pulldown, leg press, lateral raise, core") },
      { label: lt("B 日", "Day B"), value: lt("肩推、划船、深蹲或分腿蹲、腿後彎舉、手臂", "Shoulder press, row, squat or split squat, leg curl, arms") },
      { label: lt("C 日", "Day C"), value: lt("上斜推、引體或下拉、羅馬尼亞硬舉、臀推、腹肌", "Incline press, pull-up or pulldown, Romanian deadlift, hip thrust, abs") },
    ],
    mistakes: [
      lt("每組都做到崩潰，下一次訓練恢復不了。", "Taking every set to collapse and failing to recover for the next session."),
      lt("看太多課表，沒有執行同一套足夠久。", "Reading too many programs without running one long enough."),
      lt("只練喜歡的部位，腿、背和核心被跳過。", "Only training favorite muscles while skipping legs, back, and core."),
    ],
    relatedFaqs: ["how-much-protein-per-day", "no-time-to-workout", "how-much-protein-do-i-need"],
    relatedArticles: ["muscle-gain-program-start", "protein-powder-is-a-tool"],
    relatedExercises: ["barbell-bench-press", "lat-pulldown", "leg-press", "romanian-deadlift", "plank"],
    relatedFoods: ["egg", "chicken-breast", "cooked-rice", "milk", "banana"],
    relatedEvidence: ["protein-supplementation", "concurrent-training"],
  },
  {
    slug: "fat-loss-with-milk-tea-guide",
    topic: "fat-loss",
    title: lt("減脂可以喝奶茶嗎？", "Can You Drink Milk Tea While Cutting?"),
    description: lt("用熱量赤字、糖量、珍珠奶蓋和替代選擇，判斷減脂期奶茶怎麼安排。", "Use calorie deficit, sugar level, boba toppings, and alternatives to decide how milk tea fits a cut."),
    intro: lt("奶茶不是禁忌，但它常是減脂期最容易被低估的熱量。能不能喝，取決於頻率、份量、糖量和當天總攝取。", "Milk tea is not forbidden, but it is one of the easiest calories to underestimate during fat loss. Fit depends on frequency, portion, sugar, and daily intake."),
    questions: [
      lt("減脂喝奶茶會胖嗎？", "Will milk tea make me fat while cutting?"),
      lt("半糖奶茶熱量低嗎？", "Is half-sugar milk tea low calorie?"),
      lt("珍珠和奶蓋差很多嗎？", "Do boba and cream toppings matter?"),
      lt("想喝飲料怎麼選？", "What should I drink instead?"),
    ],
    answerBlocks: [
      { title: lt("奶茶是有成本的點心", "Milk tea is a snack with a cost"), body: lt("一杯含糖奶茶可能接近一餐部分熱量。喝可以，但要把它放進總熱量，而不是當作水。", "A sweet milk tea can carry a meal-sized calorie cost. You can drink it, but count it as intake, not water.") },
      { title: lt("先減頻率，再減糖量", "Reduce frequency before obsessing over details"), body: lt("從每天喝改成每週幾次，通常比糾結微小配料差異更有用。", "Moving from daily to a few times weekly is usually more useful than obsessing over small topping differences.") },
      { title: lt("保留蛋白質和正餐", "Protect protein and meals"), body: lt("如果奶茶讓你正餐蛋白質不足或總熱量爆掉，它就會拖累減脂。", "If milk tea crowds out protein or pushes calories over target, it hurts the cut.") },
    ],
    decisionRows: [
      { label: lt("比較穩", "Safer choices"), value: lt("無糖茶、美式咖啡、無糖豆漿", "Unsweetened tea, black coffee, unsweetened soy milk") },
      { label: lt("想喝奶茶", "If choosing milk tea"), value: lt("小杯、少糖、少配料、降低頻率", "Small size, lower sugar, fewer toppings, lower frequency") },
      { label: lt("最容易爆", "Easiest to overshoot"), value: lt("全糖、珍珠、奶蓋、大杯、加點心", "Full sugar, boba, cream top, large size, plus snacks") },
    ],
    mistakes: [
      lt("把半糖當成沒有熱量。", "Treating half sugar as zero calories."),
      lt("喝奶茶後又照吃原本點心，總熱量沒有調整。", "Drinking milk tea and keeping all snacks unchanged."),
      lt("只怪碳水，卻忽略飲料和油脂。", "Blaming carbs while ignoring drinks and fats."),
    ],
    relatedFaqs: ["can-i-drink-milk-tea-while-cutting", "cardio-or-weights-for-fat-loss", "how-to-lose-belly-fat"],
    relatedArticles: ["calorie-deficit-basics"],
    relatedExercises: ["leg-press", "lat-pulldown", "plank"],
    relatedFoods: ["sweetened-milk-tea", "soy-milk", "low-fat-milk", "apple"],
    relatedEvidence: ["concurrent-training"],
  },
  {
    slug: "convenience-store-muscle-gain-guide",
    topic: "muscle-gain",
    title: lt("便利商店增肌怎麼吃", "Convenience-Store Muscle Gain Guide"),
    description: lt("用飯糰、牛奶、茶葉蛋、蛋白飲和沙拉，組出學生與上班族可執行的便利商店增肌餐。", "Use rice balls, milk, eggs, protein shakes, and salads to build practical convenience-store gaining meals."),
    intro: lt("便利商店可以幫增肌，但不能只買飯糰和甜飲。你需要蛋白質、碳水和足夠熱量同時到位。", "Convenience stores can support gaining, but not if you only buy rice balls and sweet drinks. You need protein, carbs, and enough calories together."),
    questions: [
      lt("便利商店可以增肌嗎？", "Can convenience-store food support muscle gain?"),
      lt("飯糰算高蛋白嗎？", "Is a rice ball high protein?"),
      lt("訓練前後怎麼買？", "What should I buy around training?"),
      lt("學生黨怎麼省錢？", "How can students keep it affordable?"),
    ],
    answerBlocks: [
      { title: lt("飯糰補碳水，不是補蛋白", "Rice balls are carbs, not protein"), body: lt("飯糰很適合補訓練燃料，但蛋白質通常不夠，要搭配茶葉蛋、牛奶、豆漿或蛋白飲。", "Rice balls are useful training carbs, but usually not enough protein. Pair with eggs, milk, soy milk, or a protein shake.") },
      { title: lt("增肌要吃得夠，不是只吃乾淨", "Gaining needs enough food, not just clean food"), body: lt("如果體重完全不上升，可能不是食物不夠健康，而是總熱量和碳水不足。", "If body weight never rises, the issue may not be food quality; calories and carbs may be too low.") },
      { title: lt("用標籤建立直覺", "Use labels to build intuition"), body: lt("先看熱量和蛋白質，再看脂肪與糖。學會看標籤比背菜單更有用。", "Read calories and protein first, then fat and sugar. Label literacy beats memorizing one menu.") },
    ],
    decisionRows: [
      { label: lt("訓練前", "Before training"), value: lt("飯糰 + 香蕉或低脂牛奶", "Rice ball + banana or low-fat milk") },
      { label: lt("訓練後", "After training"), value: lt("蛋白飲 + 飯糰，或雞胸沙拉 + 主食", "Protein shake + rice ball, or chicken salad + staple") },
      { label: lt("省錢組合", "Budget combo"), value: lt("茶葉蛋 + 無糖豆漿 + 飯糰", "Tea egg + unsweetened soy milk + rice ball") },
    ],
    mistakes: [
      lt("只看熱量，蛋白質長期不夠。", "Only chasing calories while protein stays low."),
      lt("把蛋白棒當正餐，纖維和飽足感不足。", "Using protein bars as meals without enough fullness or fiber."),
      lt("增肌期完全不記體重趨勢，不知道吃夠沒。", "Not tracking body-weight trends during gaining."),
    ],
    relatedFaqs: ["how-much-protein-per-day", "student-budget-supplements", "are-protein-bars-good-for-lifting", "how-much-protein-do-i-need"],
    relatedArticles: ["muscle-gain-program-start", "protein-powder-is-a-tool"],
    relatedExercises: ["barbell-bench-press", "lat-pulldown", "leg-press"],
    relatedFoods: ["rice-ball", "tea-egg", "milk", "soy-milk", "protein-shake", "chicken-salad"],
    relatedEvidence: ["protein-supplementation", "carbohydrate-refueling"],
  },
  {
    slug: "fat-loss-calorie-protein-guide",
    topic: "fat-loss",
    title: lt("減脂一天吃多少熱量和蛋白質", "Calories and Protein for Fat Loss"),
    description: lt("用熱量赤字、蛋白質、碳水、訓練量和外食情境，整理減脂期一天到底該怎麼吃。", "Use energy deficit, protein, carbs, training volume, and eating-out context to decide what to eat during fat loss."),
    intro: lt("減脂不是只少吃，也不是只不吃碳水。最穩的做法是先建立可持續熱量赤字，再保留足夠蛋白質和阻力訓練，讓體重下降時肌肉盡量保住。", "Fat loss is not just eating less or banning carbs. The reliable path is a sustainable calorie deficit, enough protein, and resistance training so muscle is protected while weight drops."),
    questions: [
      lt("減脂一天要吃多少熱量？", "How many calories should I eat for fat loss?"),
      lt("減脂蛋白質要吃多少？", "How much protein do I need while cutting?"),
      lt("減脂可以吃碳水嗎？", "Can I eat carbs while cutting?"),
      lt("體重不掉要先改飲食還是加有氧？", "If weight stalls, should I change food or add cardio first?"),
    ],
    answerBlocks: [
      { title: lt("先抓小到中等熱量赤字", "Start with a small-to-moderate deficit"), body: lt("多數人先從比維持熱量低一點開始，比一口氣砍到很低更容易持續。觀察 2-4 週體重平均、腰圍和訓練表現，再調整份量。", "Most people do better starting slightly below maintenance rather than cutting extremely low. Watch 2-4 weeks of average weight, waist, and training performance before adjusting portions.") },
      { title: lt("蛋白質是保肌肉和飽足感的底線", "Protein protects muscle and fullness"), body: lt("阻力訓練者可先用約 1.6 g/kg/日當作實用起點；減脂很餓、訓練量高或體脂較低時，可能需要更重視蛋白質分配。", "Lifters can use about 1.6 g/kg/day as a practical starting point. Hunger, high training volume, or lower body fat may make protein distribution more important.") },
      { title: lt("碳水看訓練量，不是直接歸零", "Carbs should follow training demand"), body: lt("碳水能支持訓練表現和總組數。減脂期可以調整份量，但不需要把白飯、地瓜、水果全部妖魔化。", "Carbs support performance and total work. During fat loss, adjust portions, but rice, sweet potato, and fruit do not need to be demonized.") },
    ],
    decisionRows: [
      { label: lt("先調整", "Adjust first"), value: lt("飲料、油炸、醬料、零食和主食份量", "Drinks, fried foods, sauces, snacks, and staple portions") },
      { label: lt("保留", "Keep"), value: lt("蛋白質、阻力訓練、睡眠和日常步數", "Protein, resistance training, sleep, and daily steps") },
      { label: lt("停滯時", "When stalled"), value: lt("先看 7 日平均體重和紀錄，再小幅減少熱量或增加活動", "Check 7-day average weight and logs, then slightly reduce calories or add activity") },
    ],
    mistakes: [
      lt("每天熱量忽高忽低，卻只看單日體重。", "Eating wildly different calories while judging progress by one daily weigh-in."),
      lt("蛋白質太低，體重下降但力量和飽足感都崩。", "Letting protein drop so weight falls but strength and fullness collapse."),
      lt("一停滯就加大量有氧，沒有先檢查飲料、醬料和週末攝取。", "Adding lots of cardio at the first stall without checking drinks, sauces, and weekends."),
    ],
    relatedFaqs: ["cardio-or-weights-for-fat-loss", "do-carbs-at-night-make-you-fat", "can-i-drink-milk-tea-while-cutting", "how-to-lose-belly-fat"],
    relatedArticles: ["calorie-deficit-basics", "cardio-and-lifting"],
    relatedExercises: ["leg-press", "lat-pulldown", "barbell-bench-press", "walking-lunge", "plank"],
    relatedFoods: ["chicken-breast", "egg", "greek-yogurt", "sweet-potato", "broccoli", "apple"],
    relatedEvidence: ["protein-supplementation", "concurrent-training"],
  },
  {
    slug: "back-width-thickness-guide",
    topic: "training",
    title: lt("背部練寬練厚完整指南", "Back Width and Thickness Guide"),
    description: lt("把背闊肌寬度、中背厚度、上背和後三角分開整理，說明下拉、引體、划船和面拉怎麼安排。", "Separate lat width, mid-back thickness, upper back, and rear delts, then organize pulldowns, pull-ups, rows, and face pulls."),
    intro: lt("背部沒有練寬或練厚，通常不是缺某個神奇動作，而是垂直拉、水平拉、肩胛控制和後三角分工不清楚。", "If the back is not getting wider or thicker, the issue is often not a missing magic exercise. It is unclear roles between vertical pulls, rows, scapular control, and rear delts."),
    questions: [
      lt("背闊肌怎麼練寬？", "How do I train lats for width?"),
      lt("中背怎麼練厚？", "How do I train mid-back thickness?"),
      lt("下拉和划船要怎麼分配？", "How should pulldowns and rows be balanced?"),
      lt("面拉到底算肩還是背？", "Is face pull shoulder or back work?"),
    ],
    answerBlocks: [
      { title: lt("寬度靠背闊肌和垂直拉", "Width comes from lats and vertical pulls"), body: lt("高位下拉、引體向上、對握下拉和單臂下拉更適合練背闊。想像上臂往身體旁邊拉下來，而不是只用二頭把重量勾下來。", "Pulldowns, pull-ups, neutral-grip pulldowns, and single-arm pulldowns bias lats. Think upper arm pulling toward the side of the body, not just curling the weight down with biceps.") },
      { title: lt("厚度靠划船和肩胛後收", "Thickness comes from rows and retraction"), body: lt("坐姿划船、胸托划船、槓鈴划船和寬握划船能補中背與上背厚度。胸托或器械版本通常更容易把刺激放在背上。", "Seated rows, chest-supported rows, barbell rows, and wide-grip rows build mid- and upper-back thickness. Supported and machine versions often make it easier to keep tension on the back.") },
      { title: lt("後三角不要被背闊吃掉", "Do not let rear delts disappear into lat work"), body: lt("面拉、反向蝴蝶機和後束飛鳥更常是後三角主練，上背和旋轉肌群輔助。放在背日可以，但資料標註要分清楚。", "Face pulls, reverse pec deck, and rear-delt flys often target rear delts first, with upper back and rotator cuff assisting. They can sit on back day, but the target should be labeled clearly.") },
    ],
    decisionRows: [
      { label: lt("想練寬", "For width"), value: lt("高位下拉、引體向上、直臂下壓、單臂下拉", "Lat pulldown, pull-up, straight-arm pulldown, single-arm pulldown") },
      { label: lt("想練厚", "For thickness"), value: lt("坐姿划船、胸托划船、槓鈴划船、寬握划船", "Seated row, chest-supported row, barbell row, wide-grip row") },
      { label: lt("想補後側肩", "For rear delts"), value: lt("面拉、反向蝴蝶機、後束飛鳥", "Face pull, reverse pec deck, rear-delt fly") },
    ],
    mistakes: [
      lt("所有背部動作都用手臂拉，背闊和中背都沒有穩定受力。", "Pulling every back movement with the arms so neither lats nor mid back get stable tension."),
      lt("只做下拉不做划船，背寬有了但厚度和肩胛控制不足。", "Only doing pulldowns without rows, so width improves but thickness and scapular control lag."),
      lt("把面拉當大重量背闊訓練，後三角刺激反而跑掉。", "Treating face pulls as heavy lat work and losing the rear-delt stimulus."),
    ],
    relatedFaqs: ["does-cardio-kill-gains", "why-am-i-still-sore", "no-time-to-workout"],
    relatedArticles: ["muscle-gain-program-start", "cardio-and-lifting"],
    relatedExercises: ["lat-pulldown", "pull-up", "seated-cable-row", "barbell-row", "face-pull", "reverse-pec-deck"],
    relatedFoods: ["chicken-breast", "cooked-rice", "banana", "protein-shake"],
    relatedEvidence: ["protein-supplementation", "concurrent-training"],
  },
  {
    slug: "push-pull-legs-beginner-guide",
    topic: "training",
    title: lt("新手推拉腿怎麼安排", "Beginner Push Pull Legs Guide"),
    description: lt("整理新手推拉腿課表的適用情境、每週三練或六練差異、動作選擇和常見錯誤。", "Organize beginner push-pull-legs programming, when it fits, three vs six days, exercise choices, and common mistakes."),
    intro: lt("推拉腿很紅，但新手不一定要一週六練。真正重要的是每個肌群一週有足夠刺激、能恢復、且動作有紀錄能進步。", "Push-pull-legs is popular, but beginners do not need six days per week. The real issue is enough stimulus, recovery, and trackable progress."),
    questions: [
      lt("新手適合推拉腿嗎？", "Is push-pull-legs good for beginners?"),
      lt("一週三練和一週六練差在哪？", "What is the difference between 3 and 6 days per week?"),
      lt("推日、拉日、腿日要放哪些動作？", "What exercises go on push, pull, and leg days?"),
      lt("課表太累要怎麼降量？", "How do I reduce volume if the plan is too tiring?"),
    ],
    answerBlocks: [
      { title: lt("一週三練可以用 PPL，但頻率較低", "Three-day PPL works, but frequency is lower"), body: lt("一週三練推拉腿代表每個肌群大約一週一次。可以做，但如果新手想多練動作品質，全身或上下肢也很適合。", "A three-day PPL hits each area roughly once weekly. It can work, but full-body or upper/lower can give beginners more practice frequency.") },
      { title: lt("一週六練不是入門必須", "Six days is not required"), body: lt("六練 PPL 需要更好的睡眠、飲食和時間管理。恢復跟不上時，效果不會因為天數多就自動更好。", "Six-day PPL needs better sleep, nutrition, and time management. More days do not automatically work better if recovery cannot keep up.") },
      { title: lt("用動作類型而不是亂塞器械", "Build by movement pattern"), body: lt("推日放胸推、肩推、側平舉、三頭；拉日放下拉、划船、後三角、二頭；腿日放蹲推、髖鉸鏈、腿後、臀和小腿。", "Push day includes chest press, shoulder press, lateral raise, triceps; pull day includes pulldown, row, rear delts, biceps; leg day includes squat/press, hinge, hamstrings, glutes, calves.") },
    ],
    decisionRows: [
      { label: lt("時間少", "Limited time"), value: lt("先用一週三練全身或簡化 PPL", "Use full-body or simplified PPL three days weekly") },
      { label: lt("想練多一點", "More training"), value: lt("一週四天上下肢通常比硬六練更穩", "Four-day upper/lower is often more stable than forcing six days") },
      { label: lt("恢復很好", "Recovery is strong"), value: lt("再考慮六練 PPL，並保留休息週期", "Consider six-day PPL later, with recovery blocks") },
    ],
    mistakes: [
      lt("看到網紅六練就照抄，但睡眠和飲食完全跟不上。", "Copying influencer six-day plans without the sleep or nutrition to recover."),
      lt("推日塞太多胸肩三頭，隔天拉日又被疲勞拖垮。", "Overstuffing push day until pull day is limited by fatigue."),
      lt("腿日只做腿推，不補腿後側、臀和核心控制。", "Only doing leg press on leg day without hamstrings, glutes, or trunk control."),
    ],
    relatedFaqs: ["no-time-to-workout", "office-worker-training-time", "why-am-i-still-sore"],
    relatedArticles: ["muscle-gain-program-start", "recovery-basics"],
    relatedExercises: ["barbell-bench-press", "dumbbell-shoulder-press", "lat-pulldown", "seated-cable-row", "leg-press", "romanian-deadlift"],
    relatedFoods: ["chicken-breast", "cooked-rice", "egg", "milk", "banana"],
    relatedEvidence: ["protein-supplementation", "concurrent-training"],
  },
  {
    slug: "convenience-store-fat-loss-guide",
    topic: "fat-loss",
    title: lt("便利商店減脂怎麼吃", "Convenience-Store Fat Loss Guide"),
    description: lt("用雞胸沙拉、茶葉蛋、無糖豆漿、飯糰和無糖飲料，組出便利商店減脂餐。", "Use chicken salad, tea eggs, unsweetened soy milk, rice balls, and unsweetened drinks to build convenience-store cutting meals."),
    intro: lt("便利商店減脂的重點不是只買沙拉，而是每餐有蛋白質、主食份量可控，並避開含糖飲、濃醬和看起來健康但熱量很高的點心。", "Convenience-store fat loss is not just buying salad. Each meal needs protein, controllable carbs, and fewer sugary drinks, heavy sauces, and high-calorie snacks that look healthy."),
    questions: [
      lt("便利商店減脂可以吃什麼？", "What can I eat at a convenience store while cutting?"),
      lt("飯糰減脂可以吃嗎？", "Can I eat rice balls while cutting?"),
      lt("茶葉蛋和雞胸沙拉怎麼搭？", "How do I pair tea eggs and chicken salad?"),
      lt("飲料怎麼選才不爆熱量？", "What drinks keep calories under control?"),
    ],
    answerBlocks: [
      { title: lt("先選蛋白質，再選主食", "Choose protein first, then carbs"), body: lt("雞胸沙拉、茶葉蛋、蛋白飲、無糖豆漿或希臘優格先放進餐盤，再依訓練量加飯糰、地瓜或香蕉。", "Put chicken salad, tea eggs, protein shake, unsweetened soy milk, or Greek yogurt into the meal first, then add rice ball, sweet potato, or banana based on training.") },
      { title: lt("飯糰可以吃，但要知道它是主食", "Rice balls are fine, but they are staples"), body: lt("飯糰主要提供碳水，不是高蛋白食物。減脂期可以保留一顆，但要搭配蛋白質並注意內餡和美乃滋。", "Rice balls mainly provide carbs, not high protein. One can fit a cut, but pair it with protein and watch fillings and mayo.") },
      { title: lt("飲料最容易讓赤字消失", "Drinks can erase the deficit"), body: lt("無糖茶、美式咖啡和無糖豆漿比較穩。奶茶、果汁和含糖咖啡要當成點心熱量計算。", "Unsweetened tea, black coffee, and unsweetened soy milk are safer. Milk tea, juice, and sweet coffee should be counted as snack calories.") },
    ],
    decisionRows: [
      { label: lt("低熱量高蛋白", "Lower-calorie protein"), value: lt("雞胸沙拉、蛋白飲、無糖豆漿、茶葉蛋", "Chicken salad, protein shake, unsweetened soy milk, tea egg") },
      { label: lt("訓練日主食", "Training-day carbs"), value: lt("飯糰、香蕉、地瓜", "Rice ball, banana, sweet potato") },
      { label: lt("少碰", "Limit"), value: lt("奶茶、炸物、濃醬沙拉、甜點麵包", "Milk tea, fried foods, heavy dressing, sweet breads") },
    ],
    mistakes: [
      lt("只買沙拉但蛋白質太少，晚上餓到亂吃。", "Buying only salad with too little protein, then overeating at night."),
      lt("覺得飯糰小小一顆就不算熱量。", "Assuming a small rice ball does not count."),
      lt("無糖飲料搭配高熱量甜點，總熱量還是超標。", "Choosing zero-sugar drinks but pairing them with high-calorie desserts."),
    ],
    relatedFaqs: ["can-i-drink-milk-tea-while-cutting", "do-carbs-at-night-make-you-fat", "how-to-lose-belly-fat", "are-protein-bars-good-for-lifting"],
    relatedArticles: ["calorie-deficit-basics", "protein-powder-is-a-tool"],
    relatedExercises: ["leg-press", "lat-pulldown", "plank", "walking-lunge"],
    relatedFoods: ["chicken-salad", "tea-egg", "soy-milk", "rice-ball", "protein-shake", "banana"],
    relatedEvidence: ["protein-supplementation", "concurrent-training"],
  },
];

export function searchGuideBySlug(slug: string) {
  return searchGuides.find((guide) => guide.slug === slug);
}

export function guideText(value: LText, lang: Lang) {
  return lang === "en" ? value.en : localizeText(value.zh, lang);
}
