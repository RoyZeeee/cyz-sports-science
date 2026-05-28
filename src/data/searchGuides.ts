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
    title: lt("胸肌訓練指南", "Chest Training Guide"),
    description: lt("整理上胸、中胸、下胸的動作選擇、訓練量、常見錯誤與臥推變式比較。", "Organize upper, mid, and lower chest exercise selection, volume, mistakes, and bench press variations."),
    intro: lt("胸肌要練大，不是只靠臥推重量。角度、穩定度、活動範圍、訓練量和恢復都會影響刺激。", "Building the chest is not just about bench load. Angle, stability, range of motion, volume, and recovery all affect the stimulus."),
    questions: [
      lt("胸肌怎麼練大？", "How do I grow my chest?"),
      lt("上胸、中胸、下胸要分開練嗎？", "Should upper, mid, and lower chest be trained separately?"),
      lt("槓鈴臥推和啞鈴臥推差在哪？", "Barbell bench or dumbbell bench?"),
      lt("胸沒感覺是不是動作錯？", "No chest feeling: is the technique wrong?"),
    ],
    answerBlocks: [
      { title: lt("平板推類主攻中胸", "Flat presses bias mid chest"), body: lt("槓鈴臥推、啞鈴臥推和胸推器械都適合當胸肌主動作。新手先把肩胛、下放深度和推起路徑穩住。", "Barbell bench, dumbbell bench, and machine chest press all work as main chest lifts. Beginners should stabilize scapular position, depth, and pressing path.") },
      { title: lt("上斜角度補上胸", "Incline angles cover upper chest"), body: lt("上斜啞鈴推、上斜槓鈴推和上斜器械推更偏胸大肌鎖骨部，但角度太高會更像肩推。", "Incline dumbbell, barbell, and machine presses bias the clavicular fibers, but very high angles shift more work to the shoulders.") },
      { title: lt("夾胸補伸展和收縮", "Fly variations add stretch and contraction"), body: lt("繩索夾胸、蝴蝶機和高到低夾胸可以補足推類動作不容易做出的內收感。", "Cable flys, pec deck, and high-to-low flys add adduction work that presses may not emphasize as clearly.") },
    ],
    decisionRows: [
      { label: lt("主動作", "Main lift"), value: lt("平板臥推或胸推器械", "Flat bench press or machine chest press") },
      { label: lt("上胸", "Upper chest"), value: lt("上斜啞鈴推或上斜器械推", "Incline dumbbell or machine press") },
      { label: lt("收縮感", "Contraction"), value: lt("繩索夾胸或蝴蝶機", "Cable fly or pec deck") },
    ],
    mistakes: [
      lt("肩膀前移太多，胸還沒伸展就開始代償。", "Letting the shoulders roll forward before the chest gets a good stretch."),
      lt("只做平板，不補上胸和夾胸角度。", "Only doing flat work and never covering incline or fly angles."),
      lt("每組都追極限重量，總訓練量反而做不上去。", "Chasing max load every set until useful volume drops."),
    ],
    relatedFaqs: ["how-much-protein-per-day", "can-i-build-muscle-and-lose-fat"],
    relatedArticles: ["muscle-gain-program-start", "protein-powder-is-a-tool"],
    relatedExercises: ["barbell-bench-press", "incline-dumbbell-press", "cable-fly", "weighted-dip"],
    relatedFoods: ["chicken-breast", "egg", "milk", "cooked-rice"],
    relatedEvidence: ["protein-supplementation", "carbohydrate-refueling"],
  },
  {
    slug: "back-training-guide",
    topic: "training",
    title: lt("背部訓練指南", "Back Training Guide"),
    description: lt("把背闊肌、上背、中背、下背分開看，整理下拉、划船、引體和硬拉類動作怎麼安排。", "Separate lats, upper back, mid back, and lower back, then organize pulldowns, rows, pull-ups, and hinges."),
    intro: lt("背部不是一整片肌肉。想要寬度、厚度和肩胛控制，垂直拉、水平拉和髖鉸鏈要分工。", "The back is not one single target. Width, thickness, and scapular control need vertical pulls, rows, and hinge patterns."),
    questions: [
      lt("背闊肌怎麼練寬？", "How do I train lats for width?"),
      lt("划船和下拉差在哪？", "Rows vs pulldowns: what is the difference?"),
      lt("面拉算背還是肩？", "Is face pull back or rear delt work?"),
      lt("引體向上做不起來怎麼辦？", "What if I cannot do pull-ups yet?"),
    ],
    answerBlocks: [
      { title: lt("垂直拉偏背闊", "Vertical pulls bias lats"), body: lt("高位下拉、引體向上和直臂下壓更適合建立背闊肌感覺與背部寬度。", "Pulldowns, pull-ups, and straight-arm pulldowns are useful for lat feel and back width.") },
      { title: lt("水平拉偏中上背厚度", "Rows bias mid and upper back thickness"), body: lt("坐姿划船、胸托划船和槓鈴划船主要補背部厚度與肩胛後收控制。", "Cable rows, chest-supported rows, and barbell rows build thickness and scapular retraction control.") },
      { title: lt("後三角不要塞錯分類", "Do not misclassify rear delts"), body: lt("面拉、後束飛鳥和反向蝴蝶機主目標常是後三角，上背和旋轉肌群是輔助。", "Face pulls, rear-delt flys, and reverse pec deck often target rear delts first, with upper back and rotator cuff assisting.") },
    ],
    decisionRows: [
      { label: lt("背闊肌", "Lats"), value: lt("高位下拉、引體、直臂下壓", "Pulldown, pull-up, straight-arm pulldown") },
      { label: lt("中背", "Mid back"), value: lt("坐姿划船、胸托划船", "Seated row, chest-supported row") },
      { label: lt("後三角", "Rear delts"), value: lt("面拉、反向蝴蝶機", "Face pull, reverse pec deck") },
    ],
    mistakes: [
      lt("下拉只用手臂拉，背闊沒有完成肩伸和內收。", "Turning pulldowns into arm curls instead of shoulder extension/adduction."),
      lt("划船每下都聳肩，變成上斜方代償。", "Shrugging every row until the upper traps dominate."),
      lt("把所有背部動作都當成同一種刺激。", "Treating every back exercise as the same stimulus."),
    ],
    relatedFaqs: ["cardio-kills-gains", "office-worker-training-time"],
    relatedArticles: ["cardio-and-lifting", "muscle-gain-program-start"],
    relatedExercises: ["lat-pulldown", "pull-up", "seated-cable-row", "barbell-row"],
    relatedFoods: ["chicken-breast", "tofu", "cooked-rice", "banana"],
    relatedEvidence: ["concurrent-training", "protein-supplementation"],
  },
  {
    slug: "shoulder-training-guide",
    topic: "training",
    title: lt("肩膀訓練指南", "Shoulder Training Guide"),
    description: lt("把肩推、側平舉、後三角和肩膀不舒服的常見問題整理成可執行的肩部訓練入口。", "Organize presses, lateral raises, rear delts, and shoulder-comfort questions into a practical shoulder-training entry page."),
    intro: lt("肩膀想看起來更寬，通常不是只做肩推。前三角、中三角、後三角的刺激來源不同，課表裡要分工。", "Wider-looking shoulders usually need more than pressing. Front, side, and rear delts get emphasized by different exercises, so the program needs role clarity."),
    questions: [
      lt("肩膀怎麼練寬？", "How do I build wider shoulders?"),
      lt("肩推主要練哪裡？", "What does shoulder press train most?"),
      lt("側平舉要多重才有效？", "How heavy should lateral raises be?"),
      lt("後三角要不要另外練？", "Do rear delts need direct work?"),
    ],
    answerBlocks: [
      { title: lt("肩推不是全部", "Pressing is not the whole plan"), body: lt("啞鈴肩推、槓鈴推舉和器械肩推很適合建立肩部推力，主練多偏前三角與中三角，三頭也會大量參與。", "Dumbbell, barbell, and machine shoulder presses are useful for pressing strength, mostly biasing front and side delts with a lot of triceps assistance.") },
      { title: lt("肩寬感常靠中三角", "Width often comes from side delts"), body: lt("側平舉和繩索側平舉更能把訓練量集中到中三角。重量不用大，但活動路徑、控制和累積組數很重要。", "Lateral raises and cable lateral raises concentrate volume on side delts. The load does not need to be huge; path, control, and accumulated sets matter.") },
      { title: lt("後三角要獨立看", "Treat rear delts separately"), body: lt("面拉、反向蝴蝶機和後束飛鳥常被放在背日，但主要目標可以是後三角，上背和旋轉肌群是輔助。", "Face pulls, reverse pec deck, and rear-delt flys often sit on back day, but the main target can be rear delts, with upper back and rotator cuff assisting.") },
    ],
    decisionRows: [
      { label: lt("主推力", "Main press"), value: lt("啞鈴肩推、器械肩推、槓鈴推舉", "Dumbbell press, machine press, barbell overhead press") },
      { label: lt("肩寬", "Shoulder width"), value: lt("側平舉、繩索側平舉", "Lateral raise, cable lateral raise") },
      { label: lt("後束", "Rear delts"), value: lt("面拉、反向蝴蝶機、後束飛鳥", "Face pull, reverse pec deck, rear-delt fly") },
    ],
    mistakes: [
      lt("只做很重的肩推，卻沒有中三角和後三角訓練量。", "Only pressing heavy without enough side- and rear-delt volume."),
      lt("側平舉用甩的，變成斜方和慣性在工作。", "Swinging lateral raises until traps and momentum take over."),
      lt("肩痛還硬追重量，沒有調整角度、器械或活動範圍。", "Chasing load through shoulder pain instead of adjusting angle, equipment, or range."),
    ],
    relatedFaqs: ["office-worker-training-time", "why-am-i-still-sore"],
    relatedArticles: ["muscle-gain-program-start", "cardio-and-lifting"],
    relatedExercises: ["dumbbell-shoulder-press", "lateral-raise", "cable-lateral-raise", "face-pull", "reverse-pec-deck"],
    relatedFoods: ["chicken-breast", "egg", "cooked-rice", "banana"],
    relatedEvidence: ["protein-supplementation", "concurrent-training"],
  },
  {
    slug: "leg-training-guide",
    topic: "training",
    title: lt("腿部訓練指南", "Leg Training Guide"),
    description: lt("整理股四頭、腿後側、臀部、小腿的動作分工，以及深蹲、腿推、硬舉類怎麼安排。", "Organize quads, hamstrings, glutes, calves, and how to place squats, leg press, and hinge patterns."),
    intro: lt("腿部訓練不是深蹲一個動作解決所有問題。股四頭、腿後側、臀部和小腿需要不同角度與疲勞成本的安排。", "Leg training is not solved by one squat variation. Quads, hamstrings, glutes, and calves need different angles and fatigue costs."),
    questions: [
      lt("腿怎麼練才完整？", "How do I train legs completely?"),
      lt("深蹲和腿推差在哪？", "Squat vs leg press: what is the difference?"),
      lt("股四頭和腿後側要分開練嗎？", "Should quads and hamstrings be trained separately?"),
      lt("臀腿要怎麼安排？", "How should glutes and legs be organized?"),
    ],
    answerBlocks: [
      { title: lt("股四頭用蹲推和伸腿補量", "Quads use squat/press patterns and extensions"), body: lt("深蹲、腿推、弓箭步和伸腿機都能訓練股四頭。若深蹲技術或疲勞限制太大，腿推和伸腿機可以補足有效組。", "Squats, leg press, lunges, and leg extensions all train quads. If squat technique or fatigue limits volume, leg press and extensions can add useful hard sets.") },
      { title: lt("腿後側需要髖鉸鏈和膝屈", "Hamstrings need hinges and knee flexion"), body: lt("羅馬尼亞硬舉偏髖伸和腿後側拉長張力；腿後彎舉偏膝屈。兩者刺激不同，常常互補。", "Romanian deadlifts bias hip extension and lengthened hamstring tension; leg curls bias knee flexion. They are different and often complementary.") },
      { title: lt("臀部不要只靠深蹲", "Do not rely only on squats for glutes"), body: lt("深蹲會用到臀，但臀推、臀橋、分腿蹲和髖外展能提供更直接或不同角度的臀部刺激。", "Squats involve glutes, but hip thrusts, glute bridges, split squats, and hip abduction provide more direct or different glute stimuli.") },
    ],
    decisionRows: [
      { label: lt("股四頭", "Quads"), value: lt("深蹲、腿推、伸腿機", "Squat, leg press, leg extension") },
      { label: lt("腿後側", "Hamstrings"), value: lt("羅馬尼亞硬舉、腿後彎舉", "Romanian deadlift, leg curl") },
      { label: lt("臀部", "Glutes"), value: lt("臀推、臀橋、保加利亞分腿蹲", "Hip thrust, glute bridge, Bulgarian split squat") },
    ],
    mistakes: [
      lt("每次腿日都把深蹲做到崩潰，後面股四頭和腿後側補量做不上去。", "Taking squats to collapse every leg day until later quad and hamstring volume disappears."),
      lt("只練腿推和伸腿，完全沒有髖鉸鏈或腿後側彎舉。", "Only doing leg press and extensions with no hinge or leg-curl work."),
      lt("把臀腿、股四頭、腿後側全部混成同一件事。", "Treating glutes, quads, and hamstrings as the same training problem."),
    ],
    relatedFaqs: ["can-i-build-muscle-and-lose-fat", "why-am-i-still-sore", "older-adults-strength-training"],
    relatedArticles: ["muscle-gain-program-start", "cardio-and-lifting"],
    relatedExercises: ["back-squat", "leg-press", "leg-extension", "romanian-deadlift", "lying-leg-curl", "hip-thrust"],
    relatedFoods: ["cooked-rice", "sweet-potato", "chicken-breast", "banana"],
    relatedEvidence: ["concurrent-training", "protein-supplementation", "older-adult-activity-guidelines"],
  },
  {
    slug: "core-training-guide",
    topic: "training",
    title: lt("腹肌核心訓練指南", "Abs and Core Training Guide"),
    description: lt("說清楚腹肌訓練、核心穩定、捲腹、抬腿和局部減脂迷思，避免把瘦肚子和練腹肌混在一起。", "Clarify abs training, core stability, crunches, leg raises, and spot-reduction myths so fat loss and ab training do not get mixed up."),
    intro: lt("腹肌訓練可以讓腹直肌和核心控制變強，但肚子脂肪下降主要還是熱量赤字。這兩件事要分開處理。", "Ab training can strengthen the rectus abdominis and trunk control, but belly fat loss mainly comes from an energy deficit. These are separate problems."),
    questions: [
      lt("每天練腹肌會瘦肚子嗎？", "Will training abs every day reduce belly fat?"),
      lt("捲腹和懸垂抬腿差在哪？", "Crunches vs hanging leg raises: what is the difference?"),
      lt("核心一定要每天練嗎？", "Do I need to train core every day?"),
      lt("腹肌要怎麼放進課表？", "Where should abs go in a program?"),
    ],
    answerBlocks: [
      { title: lt("腹肌訓練不等於局部減脂", "Ab training is not spot reduction"), body: lt("捲腹、抬腿和棒式可以訓練腹肌與核心控制，但看見腹肌通常取決於體脂、肌肉厚度和光線，不是某個動作直接燒肚子脂肪。", "Crunches, leg raises, and planks train abs and trunk control, but visible abs usually depend on body fat, muscle thickness, and lighting, not a movement directly burning belly fat.") },
      { title: lt("捲腹偏脊柱屈曲", "Crunches bias spinal flexion"), body: lt("繩索捲腹、躺姿捲腹和斜板捲腹更直接訓練腹直肌縮短收縮，重點是骨盆和肋骨控制。", "Cable, lying, and incline crunches directly train rectus-abdominis shortening; pelvic and rib control matter.") },
      { title: lt("抬腿和棒式偏控制", "Leg raises and planks bias control"), body: lt("懸垂抬腿會牽涉髖屈和骨盆後傾控制；棒式更偏抗伸展和全身張力。", "Hanging leg raises involve hip flexion and posterior pelvic tilt control; planks bias anti-extension and whole-body tension.") },
    ],
    decisionRows: [
      { label: lt("腹直肌收縮", "Rectus abs contraction"), value: lt("繩索捲腹、躺姿捲腹", "Cable crunch, lying crunch") },
      { label: lt("下腹感/骨盆控制", "Lower-ab feel and pelvic control"), value: lt("懸垂抬腿、躺姿抬腿", "Hanging leg raise, lying leg raise") },
      { label: lt("核心穩定", "Core stability"), value: lt("棒式、抗伸展和抗旋轉變式", "Planks, anti-extension and anti-rotation variations") },
    ],
    mistakes: [
      lt("以為每天捲腹就會局部瘦肚子。", "Thinking daily crunches directly spot-reduce belly fat."),
      lt("抬腿只甩髖屈肌，骨盆完全沒有控制。", "Swinging leg raises with hip flexors and no pelvic control."),
      lt("核心訓練做到腰不舒服，卻沒有降低難度。", "Pushing core exercises into back discomfort instead of scaling down."),
    ],
    relatedFaqs: ["how-to-lose-belly-fat", "cardio-or-weights-for-fat-loss", "why-am-i-still-sore"],
    relatedArticles: ["calorie-deficit-basics", "cardio-and-lifting"],
    relatedExercises: ["plank", "cable-crunch", "hanging-leg-raise", "incline-bench-crunch", "cable-oblique-crunch"],
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
];

export function searchGuideBySlug(slug: string) {
  return searchGuides.find((guide) => guide.slug === slug);
}

export function guideText(value: LText, lang: Lang) {
  return lang === "en" ? value.en : localizeText(value.zh, lang);
}
