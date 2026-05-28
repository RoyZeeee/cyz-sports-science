import type { Lang } from "./content";
import { localizeText } from "./content";

type LText = { zh: string; en: string };

const lt = (zh: string, en: string): LText => ({ zh, en });

export type Comparison = {
  slug: string;
  title: LText;
  description: LText;
  topic: string;
  left: LText;
  right: LText;
  summary: LText;
  rows: {
    label: LText;
    left: LText;
    right: LText;
  }[];
  decision: LText[];
  relatedExercises: string[];
};

export const comparisons: Comparison[] = [
  {
    slug: "barbell-vs-dumbbell-bench-press",
    title: lt("槓鈴臥推 vs 啞鈴臥推", "Barbell Bench Press vs Dumbbell Bench Press"),
    description: lt("比較兩種胸肌主動作的穩定度、活動範圍、負重進步和適合情境。", "Compare stability, range of motion, loading progression, and use cases for two chest staples."),
    topic: "muscle-gain",
    left: lt("槓鈴臥推", "Barbell bench press"),
    right: lt("啞鈴臥推", "Dumbbell bench press"),
    summary: lt("槓鈴臥推更適合穩定加重與力量追蹤；啞鈴臥推活動範圍和左右控制更自由。胸肌增長不必二選一。", "Barbell bench is easier to load and track; dumbbell bench allows more range and side-to-side control. Hypertrophy does not require choosing only one."),
    rows: [
      { label: lt("負重進步", "Loading progression"), left: lt("較容易微幅加重", "Easier to progress load"), right: lt("受穩定和上手限制較多", "More limited by setup and stability") },
      { label: lt("活動範圍", "Range of motion"), left: lt("受槓鈴路徑限制", "Limited by the bar path"), right: lt("可下放更深、路徑更自由", "Potentially deeper and freer path") },
      { label: lt("適合誰", "Best for"), left: lt("想追蹤力量和主動作的人", "Lifters tracking strength on a main lift"), right: lt("想補左右控制和胸部伸展的人", "Lifters wanting side control and chest stretch") },
    ],
    decision: [
      lt("如果只能選一個主動作，新手可先用槓鈴或器械建立穩定進步。", "If choosing one main lift, beginners can start with barbell or machine pressing for stable progression."),
      lt("如果胸部感覺差、肩不舒服或左右差異明顯，啞鈴變式常值得加入。", "If chest feel, shoulder comfort, or side differences are issues, dumbbell variations are often worth adding."),
    ],
    relatedExercises: ["barbell-bench-press", "dumbbell-bench-press", "machine-chest-press", "incline-dumbbell-press"],
  },
  {
    slug: "lat-pulldown-vs-pull-up",
    title: lt("高位下拉 vs 引體向上", "Lat Pulldown vs Pull-Up"),
    description: lt("比較背闊肌訓練中最常見的垂直拉動作：可調重量、技術門檻和進步方式。", "Compare two vertical pulls for lats: adjustable loading, skill demand, and progression."),
    topic: "training",
    left: lt("高位下拉", "Lat pulldown"),
    right: lt("引體向上", "Pull-up"),
    summary: lt("高位下拉更容易調重量和累積有效組；引體向上更吃相對力量和全身控制。兩者都能練背闊。", "Pulldowns are easier to load and accumulate volume; pull-ups demand relative strength and body control. Both can train lats."),
    rows: [
      { label: lt("重量調整", "Load adjustment"), left: lt("最容易，適合新手", "Easiest, beginner-friendly"), right: lt("受體重影響大", "Strongly affected by body weight") },
      { label: lt("技術門檻", "Skill demand"), left: lt("較低，可先找背闊感覺", "Lower, useful for lat feel"), right: lt("較高，需要核心和肩胛控制", "Higher, needs core and scapular control") },
      { label: lt("進步方式", "Progression"), left: lt("加片、加次數、慢離心", "Add plates, reps, tempo"), right: lt("輔助、體重、負重", "Assisted, bodyweight, weighted") },
    ],
    decision: [
      lt("做不起引體時，先用高位下拉建立背闊肌量和動作路徑。", "If pull-ups are not available yet, use pulldowns to build lat volume and movement pattern."),
      lt("能穩定做 6-10 下後，引體可以作為高價值垂直拉主動作。", "Once 6-10 clean reps are possible, pull-ups can become a high-value vertical pull."),
    ],
    relatedExercises: ["lat-pulldown", "pull-up", "wide-grip-lat-pulldown", "weighted-pull-up"],
  },
  {
    slug: "squat-vs-leg-press",
    title: lt("深蹲 vs 腿推", "Squat vs Leg Press"),
    description: lt("比較下肢主動作的全身需求、股四頭刺激、疲勞成本和適合族群。", "Compare two lower-body staples by whole-body demand, quad stimulus, fatigue cost, and use case."),
    topic: "training",
    left: lt("深蹲", "Squat"),
    right: lt("腿推", "Leg press"),
    summary: lt("深蹲是全身協調和力量動作；腿推更穩定、較容易把訓練量集中到腿部。增肌期常可互補。", "Squats are a whole-body strength and coordination lift; leg press is more stable and easier to focus on the legs. They often complement each other."),
    rows: [
      { label: lt("全身需求", "Whole-body demand"), left: lt("高，需要軀幹和技術", "High, needs trunk and skill"), right: lt("較低，器械提供穩定", "Lower, machine-supported") },
      { label: lt("腿部容量", "Leg volume"), left: lt("受疲勞和技術限制", "Limited by fatigue and technique"), right: lt("較容易累積高訓練量", "Easier to accumulate volume") },
      { label: lt("適合情境", "Use case"), left: lt("力量、全身控制、動作能力", "Strength, control, movement skill"), right: lt("股四頭增肌、穩定補量", "Quad hypertrophy and stable volume") },
    ],
    decision: [
      lt("如果深蹲技術還不穩，不必硬用深蹲塞滿所有腿部訓練量。", "If squat technique is not stable, do not force all leg volume through squats."),
      lt("腿推不是偷懶；它可以用較低技術成本補足股四頭有效組。", "Leg press is not cheating; it can add quad hard sets with lower skill cost."),
    ],
    relatedExercises: ["back-squat", "leg-press", "leg-extension", "walking-lunge"],
  },
  {
    slug: "incline-vs-flat-bench-press",
    title: lt("上斜臥推 vs 平板臥推", "Incline Bench Press vs Flat Bench Press"),
    description: lt("比較上胸與中胸刺激、肩膀參與、課表放置和常見角度錯誤。", "Compare upper- and mid-chest bias, shoulder involvement, programming placement, and common angle mistakes."),
    topic: "muscle-gain",
    left: lt("上斜臥推", "Incline bench press"),
    right: lt("平板臥推", "Flat bench press"),
    summary: lt("平板臥推通常更適合當胸肌主力量動作，偏中胸與整體推力；上斜臥推更偏上胸，但角度太高會讓前三角吃太多。", "Flat bench is often better as the main chest strength lift and biases mid chest and pressing strength; incline bench biases upper chest, but very high angles shift more work to front delts."),
    rows: [
      { label: lt("主要刺激", "Main stimulus"), left: lt("上胸／胸大肌鎖骨部更多", "More upper chest / clavicular pec"), right: lt("中胸／胸大肌整體更多", "More mid chest / overall pec") },
      { label: lt("肩膀參與", "Shoulder involvement"), left: lt("角度越高，前三角越多", "Higher angles involve front delts more"), right: lt("仍會用前三角，但較容易維持胸主導", "Still uses front delts, often easier to keep chest-led") },
      { label: lt("課表位置", "Program placement"), left: lt("常放第二個推類或上胸優先日", "Often second press or upper-chest priority day"), right: lt("常放第一個胸部主動作", "Often first main chest lift") },
    ],
    decision: [
      lt("胸部整體還薄，新手通常先把平板推類練穩，再補上斜。", "If overall chest development is still basic, beginners usually stabilize flat pressing first, then add incline work."),
      lt("上胸明顯落後時，可以把上斜放到胸日第一個，但椅背角度不用過高。", "If upper chest is clearly behind, place incline first on chest day, but avoid setting the bench too upright."),
    ],
    relatedExercises: ["barbell-bench-press", "dumbbell-bench-press", "incline-dumbbell-press", "incline-barbell-bench-press", "smith-incline-press"],
  },
  {
    slug: "press-vs-fly-for-chest",
    title: lt("推類動作 vs 夾胸動作", "Chest Presses vs Flys"),
    description: lt("比較臥推、胸推器械與夾胸類動作在負重、伸展、收縮感和課表順序上的差異。", "Compare presses and flys for loading, stretch, contraction feel, and exercise order."),
    topic: "muscle-gain",
    left: lt("推類動作", "Presses"),
    right: lt("夾胸動作", "Flys"),
    summary: lt("推類動作適合承擔較大負重與主要訓練量；夾胸更適合補胸肌伸展、內收和收縮感。多數胸部課表會兩者都放。", "Presses handle heavier loading and most primary volume; flys add pec stretch, adduction, and contraction feel. Most chest programs can use both."),
    rows: [
      { label: lt("負重能力", "Loading"), left: lt("高，適合追蹤進步", "High, good for tracking progression"), right: lt("較低，以控制和張力為主", "Lower, focused on control and tension") },
      { label: lt("主要限制", "Main limiter"), left: lt("肩、三頭、穩定度也會限制", "Shoulders, triceps, and stability may limit"), right: lt("胸部伸展、肩前側舒適度", "Pec stretch and front-shoulder comfort") },
      { label: lt("常見順序", "Typical order"), left: lt("通常放前面", "Usually earlier"), right: lt("通常放推類後面", "Usually after presses") },
    ],
    decision: [
      lt("想建立胸肌和力量，先讓一個推類動作穩定進步。", "To build chest and strength, make one press progress consistently first."),
      lt("胸部感覺不足或想補收縮感，再用繩索夾胸或蝴蝶機補量。", "If chest feel is low or contraction work is needed, add cable flys or pec deck after pressing."),
    ],
    relatedExercises: ["barbell-bench-press", "machine-chest-press", "cable-fly", "pec-deck-fly", "high-to-low-cable-fly"],
  },
  {
    slug: "row-vs-pulldown",
    title: lt("划船 vs 下拉", "Rows vs Pulldowns"),
    description: lt("比較水平拉和垂直拉對背闊、中背、上背厚度與背部寬度的差異。", "Compare horizontal and vertical pulls for lats, mid back, upper-back thickness, and width."),
    topic: "training",
    left: lt("划船", "Rows"),
    right: lt("下拉", "Pulldowns"),
    summary: lt("划船更常用來補中上背厚度與肩胛後收；下拉更容易偏背闊肌和背部寬度。完整背部課表通常需要兩種拉法。", "Rows more often build mid/upper-back thickness and scapular retraction; pulldowns more easily bias lats and back width. A complete back plan usually needs both."),
    rows: [
      { label: lt("方向", "Pull direction"), left: lt("水平拉，手肘往身後走", "Horizontal pull, elbows travel back"), right: lt("垂直拉，手肘往下走", "Vertical pull, elbows travel down") },
      { label: lt("偏重肌群", "Bias"), left: lt("中背、上背、後三角依握法而定", "Mid back, upper back, rear delts depending on grip"), right: lt("背闊肌、大圓肌，二頭輔助", "Lats, teres major, biceps assisting") },
      { label: lt("常見錯誤", "Common mistake"), left: lt("聳肩或用腰甩", "Shrugging or swinging with the low back"), right: lt("變成手臂彎舉，背闊沒有發力", "Turning it into an arm curl without lat drive") },
    ],
    decision: [
      lt("想讓背看起來更寬，至少保留一個下拉或引體變式。", "For more back width, keep at least one pulldown or pull-up variation."),
      lt("想補背部厚度和肩胛控制，划船類不能完全省略。", "For thickness and scapular control, rows should not be fully skipped."),
    ],
    relatedExercises: ["seated-cable-row", "barbell-row", "lat-pulldown", "wide-grip-lat-pulldown", "pull-up"],
  },
  {
    slug: "barbell-row-vs-seated-cable-row",
    title: lt("槓鈴划船 vs 坐姿划船", "Barbell Row vs Seated Cable Row"),
    description: lt("比較自由重量划船與坐姿滑輪划船的穩定度、下背疲勞、負重進步和適合族群。", "Compare free-weight rows and seated cable rows by stability, low-back fatigue, progression, and use case."),
    topic: "training",
    left: lt("槓鈴划船", "Barbell row"),
    right: lt("坐姿划船", "Seated cable row"),
    summary: lt("槓鈴划船更吃髖鉸鏈、核心和下背穩定；坐姿划船更容易把注意力集中在中背和背闊。兩者不是高低級差別，而是疲勞成本不同。", "Barbell rows demand hip hinge, trunk, and low-back stability; seated cable rows make it easier to focus on mid back and lats. They differ more by fatigue cost than by status."),
    rows: [
      { label: lt("穩定需求", "Stability demand"), left: lt("高，需要軀幹維持姿勢", "High, trunk must hold position"), right: lt("較低，器械提供路徑", "Lower, machine/cable supports the path") },
      { label: lt("下背疲勞", "Low-back fatigue"), left: lt("較高，尤其腿日附近要注意", "Higher, especially near leg days"), right: lt("較低，適合補量", "Lower, useful for extra volume") },
      { label: lt("適合情境", "Use case"), left: lt("進階者、力量與厚度主動作", "Advanced lifters, strength and thickness main lift"), right: lt("新手、控感、穩定累積組數", "Beginners, feel, stable volume") },
    ],
    decision: [
      lt("如果硬拉、深蹲已經讓下背很累，坐姿划船通常更好恢復。", "If deadlifts or squats already tax the low back, seated rows are usually easier to recover from."),
      lt("如果想練整體後鏈張力和自由重量能力，槓鈴划船有價值。", "If you want posterior-chain tension and free-weight skill, barbell rows are valuable."),
    ],
    relatedExercises: ["barbell-row", "seated-cable-row", "bilateral-machine-row", "neutral-grip-cable-row"],
  },
  {
    slug: "shoulder-press-vs-lateral-raise",
    title: lt("肩推 vs 側平舉", "Shoulder Press vs Lateral Raise"),
    description: lt("比較肩推與側平舉對前三角、中三角、肱三頭和肩膀寬度的角色。", "Compare shoulder presses and lateral raises for front delts, side delts, triceps, and shoulder width."),
    topic: "training",
    left: lt("肩推", "Shoulder press"),
    right: lt("側平舉", "Lateral raise"),
    summary: lt("肩推是高價值推力動作，但不等於完整肩膀訓練；側平舉更直接補中三角，通常對肩膀寬度很關鍵。", "Shoulder presses are high-value pressing lifts, but they are not the whole shoulder plan; lateral raises more directly add side-delt work and are often key for width."),
    rows: [
      { label: lt("主要刺激", "Main stimulus"), left: lt("前三角、中三角、三頭", "Front delts, side delts, triceps"), right: lt("中三角為主", "Mostly side delts") },
      { label: lt("負重方式", "Loading"), left: lt("可用較大重量，適合追蹤力量", "Can use heavier loads and track strength"), right: lt("小重量也有效，重點是控制", "Light loads can work; control matters") },
      { label: lt("課表角色", "Program role"), left: lt("主推力或肩日主動作", "Main press or shoulder-day staple"), right: lt("中三角補量，常放肩推後", "Side-delt volume, often after pressing") },
    ],
    decision: [
      lt("只做肩推的人，肩膀寬度常會少了中三角直接量。", "People who only press often lack direct side-delt volume for width."),
      lt("肩膀容易不舒服時，側平舉角度和繩索版本常比硬推重量更好調整。", "If shoulders feel irritated, raise angles and cable versions are often easier to adjust than forcing heavy presses."),
    ],
    relatedExercises: ["dumbbell-shoulder-press", "barbell-overhead-press", "machine-shoulder-press", "lateral-raise", "cable-lateral-raise"],
  },
  {
    slug: "face-pull-vs-reverse-pec-deck",
    title: lt("面拉 vs 反向蝴蝶機", "Face Pull vs Reverse Pec Deck"),
    description: lt("比較兩個常見後三角動作的穩定度、上背參與和適合放在課表哪裡。", "Compare two common rear-delt exercises by stability, upper-back involvement, and programming placement."),
    topic: "training",
    left: lt("面拉", "Face pull"),
    right: lt("反向蝴蝶機", "Reverse pec deck"),
    summary: lt("面拉更像後三角、上背與外旋控制的綜合動作；反向蝴蝶機更穩定，較容易把張力集中在後三角。", "Face pulls are a combined rear-delt, upper-back, and external-rotation control exercise; reverse pec deck is more stable and often easier to focus on rear delts."),
    rows: [
      { label: lt("穩定度", "Stability"), left: lt("較自由，技術影響大", "Freer, technique matters more"), right: lt("較穩定，路徑固定", "More stable, fixed path") },
      { label: lt("偏重", "Bias"), left: lt("後三角、上背、旋轉肌群", "Rear delts, upper back, rotator cuff"), right: lt("後三角更直接", "More direct rear-delt bias") },
      { label: lt("常見錯誤", "Common mistake"), left: lt("變成聳肩拉繩，手肘路徑亂", "Shrugging the rope with messy elbow path"), right: lt("重量太重，用斜方硬拉", "Too heavy, upper traps dominate") },
    ],
    decision: [
      lt("想要更穩定補後三角，反向蝴蝶機通常更好上手。", "For stable rear-delt volume, reverse pec deck is usually easier to learn."),
      lt("想順便練肩胛控制和外旋感，面拉可以保留，但重量不要失控。", "For scapular control and external-rotation feel, keep face pulls but avoid uncontrolled loading."),
    ],
    relatedExercises: ["face-pull", "reverse-pec-deck", "dumbbell-rear-delt-fly", "cable-rear-delt-fly", "rear-delt-row"],
  },
  {
    slug: "romanian-deadlift-vs-leg-curl",
    title: lt("羅馬尼亞硬舉 vs 腿後彎舉", "Romanian Deadlift vs Leg Curl"),
    description: lt("比較腿後側訓練中髖鉸鏈與膝屈動作的刺激位置、疲勞成本和搭配方式。", "Compare hinge and knee-flexion hamstring work by stimulus, fatigue cost, and pairing strategy."),
    topic: "training",
    left: lt("羅馬尼亞硬舉", "Romanian deadlift"),
    right: lt("腿後彎舉", "Leg curl"),
    summary: lt("羅馬尼亞硬舉讓腿後側在拉長位置承受張力，也會訓練臀和下背穩定；腿後彎舉更孤立膝屈功能，疲勞成本通常較低。", "Romanian deadlifts load hamstrings in a lengthened position and also train glutes and low-back stability; leg curls isolate knee flexion with usually lower systemic fatigue."),
    rows: [
      { label: lt("動作功能", "Function"), left: lt("髖伸／髖鉸鏈", "Hip extension / hinge"), right: lt("膝屈", "Knee flexion") },
      { label: lt("疲勞成本", "Fatigue cost"), left: lt("較高，後鏈和握力都參與", "Higher, posterior chain and grip involved"), right: lt("較低，適合補腿後側容量", "Lower, useful for hamstring volume") },
      { label: lt("搭配方式", "Pairing"), left: lt("常放腿日或臀腿日前段", "Often early on leg/glute day"), right: lt("可放後段補量", "Can be later for added volume") },
    ],
    decision: [
      lt("腿後側想完整，通常不要只做其中一種。", "For complete hamstring work, usually do not rely on only one of them."),
      lt("如果下背累或髖鉸鏈技術還不穩，先用腿後彎舉補量更保守。", "If the low back is tired or hinge technique is not stable, leg curls are a more conservative way to add volume."),
    ],
    relatedExercises: ["romanian-deadlift", "lying-leg-curl", "deadlift", "back-squat", "hip-thrust"],
  },
  {
    slug: "crunch-vs-leg-raise",
    title: lt("捲腹 vs 抬腿", "Crunch vs Leg Raise"),
    description: lt("比較腹直肌訓練中捲腹與抬腿的差異，以及為什麼它們都不等於局部瘦肚子。", "Compare crunches and leg raises for abs training, and why neither equals spot belly-fat reduction."),
    topic: "training",
    left: lt("捲腹", "Crunch"),
    right: lt("抬腿", "Leg raise"),
    summary: lt("捲腹更直接訓練脊柱屈曲和腹直肌縮短；抬腿更吃骨盆控制和髖屈參與。兩者都能練腹肌，但瘦肚子仍靠整體熱量赤字。", "Crunches more directly train spinal flexion and rectus-abdominis shortening; leg raises demand pelvic control and hip flexor involvement. Both train abs, but belly-fat loss still depends on overall energy deficit."),
    rows: [
      { label: lt("主要感覺", "Main feel"), left: lt("上腹到整體腹直肌收縮", "Upper-to-general rectus abdominis contraction"), right: lt("下腹感、骨盆後傾控制", "Lower-ab feel and posterior pelvic tilt control") },
      { label: lt("難度調整", "Scaling"), left: lt("可用繩索、斜板、地面版本", "Cable, incline, or floor versions"), right: lt("可用屈膝、躺姿、懸垂版本", "Bent-knee, lying, or hanging versions") },
      { label: lt("常見錯誤", "Common mistake"), left: lt("脖子硬拉、腰椎亂壓", "Pulling the neck and losing spine control"), right: lt("只甩髖屈肌，骨盆沒有控制", "Swinging hip flexors with no pelvic control") },
    ],
    decision: [
      lt("想直接感受腹直肌收縮，先用捲腹或繩索捲腹。", "For direct rectus-abdominis contraction, start with crunches or cable crunches."),
      lt("想練骨盆控制和抬腿能力，再加入躺姿或懸垂抬腿。", "For pelvic control and leg-raise capacity, add lying or hanging leg raises."),
    ],
    relatedExercises: ["cable-crunch", "lying-crunch", "incline-bench-crunch", "hanging-leg-raise", "plank"],
  },
  {
    slug: "biceps-curl-vs-hammer-curl",
    title: lt("二頭彎舉 vs 槌式彎舉", "Biceps Curl vs Hammer Curl"),
    description: lt("比較傳統二頭彎舉與槌式／對握彎舉對肱二頭、肱肌和前臂的差異。", "Compare traditional curls and hammer/neutral-grip curls for biceps, brachialis, and forearms."),
    topic: "training",
    left: lt("二頭彎舉", "Biceps curl"),
    right: lt("槌式彎舉", "Hammer curl"),
    summary: lt("二頭彎舉更直接偏肱二頭肌；槌式或對握彎舉更容易帶到肱肌與肱橈肌。想讓手臂更完整，兩類都值得保留。", "Traditional curls bias the biceps more directly; hammer or neutral-grip curls more often emphasize brachialis and brachioradialis. Both are useful for complete arm development."),
    rows: [
      { label: lt("握法", "Grip"), left: lt("掌心向上或旋後", "Supinated or rotating to palm-up"), right: lt("對握，拇指朝上", "Neutral grip, thumb-up") },
      { label: lt("偏重肌群", "Bias"), left: lt("肱二頭肌", "Biceps"), right: lt("肱肌、肱橈肌、前臂更多", "More brachialis, brachioradialis, forearms") },
      { label: lt("課表角色", "Program role"), left: lt("二頭主訓練", "Main biceps work"), right: lt("補手臂厚度和前臂感", "Adds arm thickness and forearm feel") },
    ],
    decision: [
      lt("如果目標是二頭峰和彎舉力量，傳統彎舉要穩定進步。", "If the goal is biceps emphasis and curl strength, progress traditional curls consistently."),
      lt("如果想補肱肌、前臂和手臂側面厚度，加入槌式或繩索對握彎舉。", "If you want brachialis, forearm, and side-arm thickness, add hammer or rope neutral-grip curls."),
    ],
    relatedExercises: ["biceps-curl", "ez-bar-curl", "cable-biceps-curl", "rope-hammer-curl", "forearm-reverse-curl"],
  },
  {
    slug: "triceps-pressdown-vs-overhead-extension",
    title: lt("三頭下壓 vs 過頭伸展", "Triceps Pressdown vs Overhead Extension"),
    description: lt("比較兩個常見三頭動作對穩定補量、長頭拉長位置刺激和肘關節舒適度的差異。", "Compare two common triceps movements for stable volume, long-head lengthened work, and elbow comfort."),
    topic: "training",
    left: lt("三頭下壓", "Triceps pressdown"),
    right: lt("過頭伸展", "Overhead triceps extension"),
    summary: lt("三頭下壓穩定、好控制，適合累積訓練量；過頭伸展讓三頭長頭在更拉長的位置工作，但肘和肩的舒適度要優先。", "Pressdowns are stable and easy to control for volume; overhead extensions train the long head in a more lengthened position, but elbow and shoulder comfort come first."),
    rows: [
      { label: lt("角度", "Angle"), left: lt("手臂在身體前或側邊伸肘", "Elbow extension with arms in front/at sides"), right: lt("上臂接近頭上，長頭更拉長", "Upper arms overhead, long head more lengthened") },
      { label: lt("穩定度", "Stability"), left: lt("高，新手友善", "High, beginner-friendly"), right: lt("較吃肩肘位置控制", "Needs more shoulder and elbow control") },
      { label: lt("常見用途", "Use case"), left: lt("三頭補量、熱身、收尾", "Triceps volume, warm-up, finisher"), right: lt("補長頭、增加不同角度刺激", "Long-head emphasis and angle variety") },
    ],
    decision: [
      lt("肘關節敏感時，先用下壓找穩定路徑，不急著重做過頭。", "If elbows are sensitive, use pressdowns to find a stable path before loading overhead work."),
      lt("三頭長頭或手臂圍度想再補，過頭伸展可以少量加入。", "If long-head or arm-size work needs more attention, add overhead extensions in moderate volume."),
    ],
    relatedExercises: ["triceps-pressdown", "single-arm-triceps-pressdown", "overhead-triceps-extension", "skull-crusher", "cable-triceps-kickback"],
  },
];

export function comparisonBySlug(slug: string) {
  return comparisons.find((comparison) => comparison.slug === slug);
}

export function comparisonText(value: LText, lang: Lang) {
  return lang === "en" ? value.en : localizeText(value.zh, lang);
}
