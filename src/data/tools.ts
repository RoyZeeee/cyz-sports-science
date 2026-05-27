import * as OpenCC from "opencc-js";
import type { Lang } from "./content";

type LText = {
  zh: string;
  en: string;
};

export type MuscleGroup = {
  slug: string;
  name: LText;
  description: LText;
  trainingNote: LText;
};

export type Exercise = {
  slug: string;
  name: LText;
  summary: LText;
  muscleGroup: string;
  primary: LText[];
  secondary: LText[];
  equipment: LText;
  difficulty: "beginner" | "intermediate" | "advanced";
  rating: 1 | 2 | 3 | 4 | 5;
  visualFocus: "chest" | "back" | "shoulders" | "quads" | "glutes" | "hamstrings" | "arms" | "core" | "calves";
  bestFor: LText[];
  cues: LText[];
  cautions: LText[];
};

export type Food = {
  slug: string;
  name: LText;
  unit: LText;
  kcal: string;
  protein: string;
  carbs: string;
  fat: string;
  bestUse: LText;
  note: LText;
};

export const muscleGroups: MuscleGroup[] = [
  {
    slug: "chest",
    name: { zh: "胸肌", en: "Chest" },
    description: { zh: "以推類動作為主，搭配飛鳥或夾胸補足伸展與收縮。", en: "Pressing movements first, with fly variations for stretch and contraction." },
    trainingNote: { zh: "每週 8-16 組有效組常是好的起點。", en: "A common starting range is 8-16 hard sets per week." },
  },
  {
    slug: "back",
    name: { zh: "背部", en: "Back" },
    description: { zh: "垂直拉和水平拉都要有，背闊、上背與肩胛控制一起看。", en: "Use both vertical and horizontal pulls for lats, upper back, and scapular control." },
    trainingNote: { zh: "不要只追重量，完整活動範圍很重要。", en: "Do not chase load at the expense of range of motion." },
  },
  {
    slug: "shoulders",
    name: { zh: "肩膀", en: "Shoulders" },
    description: { zh: "推舉、側平舉、後三角動作分工不同。", en: "Presses, lateral raises, and rear-delt work each solve different problems." },
    trainingNote: { zh: "側三角通常需要較穩定的中高次數累積。", en: "Side delts often respond well to consistent moderate-to-high rep volume." },
  },
  {
    slug: "legs",
    name: { zh: "腿部", en: "Legs" },
    description: { zh: "股四頭、腿後側、小腿需要不同動作刺激。", en: "Quads, hamstrings, and calves need different movement patterns." },
    trainingNote: { zh: "蹲、腿推、髖鉸鏈和腿後側彎曲類動作可以互補。", en: "Squat, leg press, hinge, and knee-flexion patterns complement each other." },
  },
  {
    slug: "glutes",
    name: { zh: "臀部", en: "Glutes" },
    description: { zh: "髖伸、單腿穩定和深度蹲類都能參與臀部訓練。", en: "Hip extension, single-leg stability, and deep squat patterns all train glutes." },
    trainingNote: { zh: "臀推和羅馬尼亞硬舉常能和深蹲形成互補。", en: "Hip thrusts and Romanian deadlifts often complement squats well." },
  },
  {
    slug: "core",
    name: { zh: "核心腹肌", en: "Core and Abs" },
    description: { zh: "核心不只捲腹，也包含抗伸展、骨盆控制與軀幹穩定。", en: "Core training includes anti-extension, pelvic control, and trunk stability." },
    trainingNote: { zh: "先穩定，再增加難度，不必每天做到痠爆。", en: "Earn stability first, then add difficulty. Daily soreness is not required." },
  },
  {
    slug: "arms",
    name: { zh: "手臂", en: "Arms" },
    description: { zh: "二頭和三頭需要直接訓練，也會從拉與推中得到刺激。", en: "Biceps and triceps benefit from direct work and from rows, pulls, and presses." },
    trainingNote: { zh: "手臂很吃穩定累積，動作亂甩通常收益很差。", en: "Arms reward consistent volume; sloppy swinging usually pays poorly." },
  },
];

type QuickExerciseInput = {
  slug: string;
  zh: string;
  en: string;
  group: Exercise["muscleGroup"];
  primary: LText[];
  secondary?: LText[];
  equipment: LText;
  difficulty?: Exercise["difficulty"];
  rating?: Exercise["rating"];
  focus: Exercise["visualFocus"];
  summary?: LText;
};

const lt = (zh: string, en: string): LText => ({ zh, en });

function quickExercise(input: QuickExerciseInput): Exercise {
  const difficulty = input.difficulty ?? "intermediate";
  const rating = input.rating ?? 4;
  const primaryName = input.primary[0] ?? lt("目標肌群", "target muscle");
  return {
    slug: input.slug,
    name: lt(input.zh, input.en),
    summary:
      input.summary ??
      lt(`以${primaryName.zh}為主的常見訓練動作，適合放進對應肌群課表。`, `A common exercise for ${primaryName.en}, useful in a targeted program.`),
    muscleGroup: input.group,
    primary: input.primary,
    secondary: input.secondary ?? [],
    equipment: input.equipment,
    difficulty,
    rating,
    visualFocus: input.focus,
    bestFor: [lt("想增加動作選擇、補足肌群訓練量的人", "Lifters who want more exercise options and targeted volume")],
    cues: [
      lt("先穩定身體和關節位置，再追求重量。", "Set body and joint position before chasing load."),
      lt("控制離心，讓目標肌群完成主要輸出。", "Control the lowering phase and let the target muscle do the work."),
    ],
    cautions: [lt("若出現尖銳疼痛或代償明顯，先降低重量或換更穩定的變式。", "If sharp pain or obvious compensation appears, lower the load or use a more stable variation.")],
  };
}

export const exercises: Exercise[] = [
  {
    slug: "barbell-bench-press",
    name: { zh: "槓鈴臥推", en: "Barbell Bench Press" },
    summary: { zh: "胸肌增肌與上肢推力的經典主動作。", en: "A classic main lift for chest growth and upper-body pressing strength." },
    muscleGroup: "chest",
    primary: [{ zh: "胸大肌", en: "Pectoralis major" }],
    secondary: [{ zh: "前三角", en: "Front delts" }, { zh: "肱三頭肌", en: "Triceps" }],
    equipment: { zh: "槓鈴、臥推椅", en: "Barbell and bench" },
    difficulty: "intermediate",
    rating: 5,
    visualFocus: "chest",
    bestFor: [{ zh: "想建立胸部厚度和推力的人", en: "Lifters building chest size and pressing strength" }],
    cues: [{ zh: "肩胛微收下壓，腳踩穩。", en: "Set the shoulder blades and keep the feet planted." }, { zh: "槓路穩定，不要彈胸。", en: "Control the bar path; do not bounce off the chest." }],
    cautions: [{ zh: "肩前側痛時先降重量或改啞鈴/器械。", en: "If the front shoulder hurts, reduce load or use dumbbells/machines." }],
  },
  {
    slug: "incline-dumbbell-press",
    name: { zh: "上斜啞鈴推", en: "Incline Dumbbell Press" },
    summary: { zh: "偏重上胸和左右控制，對胸部外觀很實用。", en: "Useful for upper-chest emphasis and side-to-side control." },
    muscleGroup: "chest",
    primary: [{ zh: "上胸", en: "Upper chest" }],
    secondary: [{ zh: "前三角", en: "Front delts" }, { zh: "肱三頭肌", en: "Triceps" }],
    equipment: { zh: "啞鈴、可調椅", en: "Dumbbells and adjustable bench" },
    difficulty: "intermediate",
    rating: 5,
    visualFocus: "chest",
    bestFor: [{ zh: "想補上胸和改善左右差的人", en: "Lifters targeting upper chest and side differences" }],
    cues: [{ zh: "椅背約 20-35 度常較好抓胸感。", en: "A 20-35 degree incline often keeps chest involvement clear." }, { zh: "底部控制，不要聳肩。", en: "Control the bottom and avoid shrugging." }],
    cautions: [{ zh: "角度太高容易變成肩推。", en: "Too steep an angle turns it into more of a shoulder press." }],
  },
  {
    slug: "cable-fly",
    name: { zh: "繩索夾胸", en: "Cable Fly" },
    summary: { zh: "用較穩定張力補足胸肌伸展和夾合感。", en: "Adds stable tension for chest stretch and adduction." },
    muscleGroup: "chest",
    primary: [{ zh: "胸大肌", en: "Pectoralis major" }],
    secondary: [{ zh: "前三角", en: "Front delts" }],
    equipment: { zh: "滑輪繩索", en: "Cable station" },
    difficulty: "beginner",
    rating: 4,
    visualFocus: "chest",
    bestFor: [{ zh: "臥推後補胸部孤立刺激", en: "Chest isolation after pressing work" }],
    cues: [{ zh: "手肘微彎固定，用胸帶動夾合。", en: "Keep a soft elbow bend and let the chest drive the motion." }, { zh: "不要用手腕硬拉重量。", en: "Do not yank the handles with the wrists." }],
    cautions: [{ zh: "肩前側不舒服時縮小活動範圍。", en: "Shorten the range if the front shoulder feels irritated." }],
  },
  {
    slug: "pull-up",
    name: { zh: "引體向上", en: "Pull-up" },
    summary: { zh: "背闊肌、上背和手臂的高價值徒手拉力動作。", en: "A high-value bodyweight pull for lats, upper back, and arms." },
    muscleGroup: "back",
    primary: [{ zh: "背闊肌", en: "Lats" }],
    secondary: [{ zh: "肱二頭肌", en: "Biceps" }, { zh: "上背", en: "Upper back" }],
    equipment: { zh: "單槓", en: "Pull-up bar" },
    difficulty: "advanced",
    rating: 5,
    visualFocus: "back",
    bestFor: [{ zh: "想提升相對力量和背部寬度的人", en: "Lifters building relative strength and back width" }],
    cues: [{ zh: "先下壓肩胛，再把胸口拉向槓。", en: "Depress the scapulae, then pull the chest toward the bar." }, { zh: "全程控制，不用甩腿借力。", en: "Control the full rep; avoid kicking for momentum." }],
    cautions: [{ zh: "做不了完整次數可用彈力帶或高位下拉替代。", en: "Use bands or lat pulldowns if full reps are not ready." }],
  },
  {
    slug: "lat-pulldown",
    name: { zh: "高位下拉", en: "Lat Pulldown" },
    summary: { zh: "比引體更容易調重量，是背闊肌入門主力。", en: "A scalable lat-builder that is easier to load than pull-ups." },
    muscleGroup: "back",
    primary: [{ zh: "背闊肌", en: "Lats" }],
    secondary: [{ zh: "肱二頭肌", en: "Biceps" }, { zh: "下斜方", en: "Lower traps" }],
    equipment: { zh: "高位下拉機", en: "Pulldown machine" },
    difficulty: "beginner",
    rating: 5,
    visualFocus: "back",
    bestFor: [{ zh: "新手建立背部發力感", en: "Beginners learning to feel the back work" }],
    cues: [{ zh: "把手肘往身體兩側拉，不是用手腕拉。", en: "Drive the elbows down, not the wrists." }, { zh: "不要把身體往後甩成划船。", en: "Avoid leaning back so far it becomes a row." }],
    cautions: [{ zh: "頸後下拉對多數人沒有必要。", en: "Behind-the-neck pulldowns are unnecessary for most people." }],
  },
  {
    slug: "seated-cable-row",
    name: { zh: "坐姿划船", en: "Seated Cable Row" },
    summary: { zh: "水平拉的基本款，適合建立上背厚度。", en: "A staple horizontal pull for upper-back thickness." },
    muscleGroup: "back",
    primary: [{ zh: "中背", en: "Mid back" }],
    secondary: [{ zh: "背闊肌", en: "Lats" }, { zh: "肱二頭肌", en: "Biceps" }],
    equipment: { zh: "坐姿划船機", en: "Cable row station" },
    difficulty: "beginner",
    rating: 5,
    visualFocus: "back",
    bestFor: [{ zh: "想補背部厚度和姿勢控制的人", en: "Lifters building back thickness and posture control" }],
    cues: [{ zh: "胸口打開，手肘往後帶。", en: "Keep the chest open and drive elbows back." }, { zh: "回放時讓肩胛自然前伸。", en: "Let the shoulder blades protract on the return." }],
    cautions: [{ zh: "不要用下背大幅後仰借力。", en: "Avoid using the low back to swing the weight." }],
  },
  {
    slug: "one-arm-dumbbell-row",
    name: { zh: "單臂啞鈴划船", en: "One-arm Dumbbell Row" },
    summary: { zh: "方便、好調整，適合補左右背部差異。", en: "Convenient and adjustable for side-to-side back work." },
    muscleGroup: "back",
    primary: [{ zh: "背闊肌", en: "Lats" }],
    secondary: [{ zh: "中背", en: "Mid back" }, { zh: "肱二頭肌", en: "Biceps" }],
    equipment: { zh: "啞鈴、椅子", en: "Dumbbell and bench" },
    difficulty: "beginner",
    rating: 4,
    visualFocus: "back",
    bestFor: [{ zh: "家庭或健身房都容易安排", en: "Easy to program at home or in a gym" }],
    cues: [{ zh: "讓手肘往髖部方向走。", en: "Drive the elbow toward the hip." }, { zh: "軀幹保持穩定，不要旋轉甩重量。", en: "Keep the torso stable instead of rotating to swing." }],
    cautions: [{ zh: "下背累積疲勞高時可改胸托划船。", en: "Use chest-supported rows if low-back fatigue is high." }],
  },
  {
    slug: "back-squat",
    name: { zh: "槓鈴深蹲", en: "Back Squat" },
    summary: { zh: "下肢力量和肌肉量的主力動作，但需要動作品質。", en: "A main lift for lower-body strength and size, but technique matters." },
    muscleGroup: "legs",
    primary: [{ zh: "股四頭肌", en: "Quadriceps" }, { zh: "臀大肌", en: "Glutes" }],
    secondary: [{ zh: "核心", en: "Core" }, { zh: "內收肌", en: "Adductors" }],
    equipment: { zh: "槓鈴、深蹲架", en: "Barbell and squat rack" },
    difficulty: "intermediate",
    rating: 5,
    visualFocus: "quads",
    bestFor: [{ zh: "想建立腿部整體力量的人", en: "Lifters building general leg strength" }],
    cues: [{ zh: "腳掌穩定，膝蓋跟著腳尖方向。", en: "Keep the foot stable and knees tracking with toes." }, { zh: "深度以能控制骨盆和脊椎為準。", en: "Depth should match pelvic and spinal control." }],
    cautions: [{ zh: "膝蓋或下背痛時先調整深度、變式和負荷。", en: "With knee or low-back pain, adjust depth, variation, and load." }],
  },
  {
    slug: "leg-press",
    name: { zh: "腿推", en: "Leg Press" },
    summary: { zh: "穩定累積腿部訓練量，對新手和增肌都友善。", en: "A stable way to accumulate leg volume for beginners and hypertrophy." },
    muscleGroup: "legs",
    primary: [{ zh: "股四頭肌", en: "Quadriceps" }],
    secondary: [{ zh: "臀大肌", en: "Glutes" }, { zh: "腿後側", en: "Hamstrings" }],
    equipment: { zh: "腿推機", en: "Leg press machine" },
    difficulty: "beginner",
    rating: 5,
    visualFocus: "quads",
    bestFor: [{ zh: "想練腿但深蹲技術還不穩的人", en: "Lifters who want leg work while squat technique develops" }],
    cues: [{ zh: "全腳掌發力，不要讓臀部離開椅背。", en: "Push through the whole foot and keep hips on the pad." }, { zh: "控制下降，不要鎖死膝蓋彈重量。", en: "Control the lowering and avoid snapping the knees locked." }],
    cautions: [{ zh: "重量太大時活動範圍常會偷掉。", en: "Very heavy loading often steals range of motion." }],
  },
  {
    slug: "romanian-deadlift",
    name: { zh: "羅馬尼亞硬舉", en: "Romanian Deadlift" },
    summary: { zh: "腿後側和臀部的高價值髖鉸鏈動作。", en: "A high-value hip hinge for hamstrings and glutes." },
    muscleGroup: "glutes",
    primary: [{ zh: "腿後側", en: "Hamstrings" }, { zh: "臀大肌", en: "Glutes" }],
    secondary: [{ zh: "豎脊肌", en: "Spinal erectors" }, { zh: "握力", en: "Grip" }],
    equipment: { zh: "槓鈴或啞鈴", en: "Barbell or dumbbells" },
    difficulty: "intermediate",
    rating: 5,
    visualFocus: "hamstrings",
    bestFor: [{ zh: "想補腿後側和臀部的人", en: "Lifters targeting hamstrings and glutes" }],
    cues: [{ zh: "屁股往後推，脊椎保持中立。", en: "Push the hips back and keep the spine neutral." }, { zh: "感覺腿後側被拉長，不是彎腰找地板。", en: "Feel hamstrings lengthen; do not just bend toward the floor." }],
    cautions: [{ zh: "下背先累代表重量、範圍或髖鉸鏈可能不合適。", en: "If the low back dominates, load, range, or hinge pattern may need work." }],
  },
  {
    slug: "hip-thrust",
    name: { zh: "臀推", en: "Hip Thrust" },
    summary: { zh: "臀大肌髖伸的代表動作，容易安排漸進負荷。", en: "A glute-focused hip-extension lift that is easy to load progressively." },
    muscleGroup: "glutes",
    primary: [{ zh: "臀大肌", en: "Glutes" }],
    secondary: [{ zh: "腿後側", en: "Hamstrings" }, { zh: "核心", en: "Core" }],
    equipment: { zh: "槓鈴、椅子或臀推機", en: "Barbell and bench or hip-thrust machine" },
    difficulty: "beginner",
    rating: 5,
    visualFocus: "glutes",
    bestFor: [{ zh: "想提高臀部刺激且降低膝負擔的人", en: "Lifters seeking glute stimulus with lower knee demand" }],
    cues: [{ zh: "頂端骨盆微後傾，避免腰椎過度拱起。", en: "Slightly posteriorly tilt the pelvis at the top; avoid over-arching." }, { zh: "小腿接近垂直，腳跟穩定。", en: "Keep shins near vertical and heels stable." }],
    cautions: [{ zh: "頂端若下背夾痛，先降重量調骨盆位置。", en: "If the low back pinches at the top, lower load and adjust pelvis position." }],
  },
  {
    slug: "bulgarian-split-squat",
    name: { zh: "保加利亞分腿蹲", en: "Bulgarian Split Squat" },
    summary: { zh: "單腿訓練高效但很累，適合補腿臀和左右差。", en: "A demanding single-leg lift for legs, glutes, and side differences." },
    muscleGroup: "legs",
    primary: [{ zh: "股四頭肌", en: "Quadriceps" }, { zh: "臀大肌", en: "Glutes" }],
    secondary: [{ zh: "內收肌", en: "Adductors" }, { zh: "核心穩定", en: "Core stability" }],
    equipment: { zh: "啞鈴、椅子", en: "Dumbbells and bench" },
    difficulty: "intermediate",
    rating: 4,
    visualFocus: "quads",
    bestFor: [{ zh: "想補單腿穩定和下肢肌肉的人", en: "Lifters building single-leg stability and lower-body muscle" }],
    cues: [{ zh: "前腳踩穩，身體略前傾可增加臀部參與。", en: "Plant the front foot; a slight torso lean can increase glute involvement." }, { zh: "下降時保持控制，不要彈到底。", en: "Lower under control; do not bounce at the bottom." }],
    cautions: [{ zh: "平衡太難時先扶固定物或改分腿蹲。", en: "If balance is limiting, hold support or use a regular split squat." }],
  },
  {
    slug: "dumbbell-shoulder-press",
    name: { zh: "啞鈴肩推", en: "Dumbbell Shoulder Press" },
    summary: { zh: "肩部推力主動作，比槓鈴更容易調整左右路徑。", en: "A main shoulder press with more freedom than a barbell." },
    muscleGroup: "shoulders",
    primary: [{ zh: "前三角", en: "Front delts" }, { zh: "中三角", en: "Side delts" }],
    secondary: [{ zh: "肱三頭肌", en: "Triceps" }, { zh: "上胸", en: "Upper chest" }],
    equipment: { zh: "啞鈴、椅子", en: "Dumbbells and bench" },
    difficulty: "intermediate",
    rating: 4,
    visualFocus: "shoulders",
    bestFor: [{ zh: "想建立肩推力量和肩部厚度的人", en: "Lifters building overhead strength and shoulder size" }],
    cues: [{ zh: "肋骨不要外翻，手肘略在身體前方。", en: "Avoid flaring the ribs; keep elbows slightly in front." }, { zh: "上推到穩定位置，不必硬碰啞鈴。", en: "Press to a stable lockout; dumbbells do not need to clank." }],
    cautions: [{ zh: "肩夾痛時先改地雷管推或器械。", en: "If the shoulder pinches, try landmine or machine presses." }],
  },
  {
    slug: "lateral-raise",
    name: { zh: "側平舉", en: "Lateral Raise" },
    summary: { zh: "中三角外觀的核心動作，重量不必大但要穩。", en: "A key side-delt builder where control beats heavy swinging." },
    muscleGroup: "shoulders",
    primary: [{ zh: "中三角", en: "Side delts" }],
    secondary: [{ zh: "上斜方", en: "Upper traps" }],
    equipment: { zh: "啞鈴或繩索", en: "Dumbbells or cable" },
    difficulty: "beginner",
    rating: 5,
    visualFocus: "shoulders",
    bestFor: [{ zh: "想讓肩膀看起來更寬的人", en: "Lifters wanting wider-looking shoulders" }],
    cues: [{ zh: "手肘帶動，不要用手腕甩。", en: "Lead with elbows instead of flinging the wrists." }, { zh: "控制下降，保持張力。", en: "Control the lowering and keep tension." }],
    cautions: [{ zh: "聳肩過多可能代表重量太重。", en: "Too much shrugging may mean the weight is too heavy." }],
  },
  {
    slug: "face-pull",
    name: { zh: "面拉", en: "Face Pull" },
    summary: { zh: "後三角、上背和肩胛控制的輔助動作。", en: "An accessory for rear delts, upper back, and scapular control." },
    muscleGroup: "shoulders",
    primary: [{ zh: "後三角", en: "Rear delts" }],
    secondary: [{ zh: "上背", en: "Upper back" }, { zh: "旋轉肌群", en: "Rotator cuff" }],
    equipment: { zh: "繩索滑輪", en: "Cable station" },
    difficulty: "beginner",
    rating: 4,
    visualFocus: "shoulders",
    bestFor: [{ zh: "久坐、推類動作很多的人", en: "Desk workers or lifters doing lots of pressing" }],
    cues: [{ zh: "把繩子拉向臉兩側，手肘打開。", en: "Pull the rope toward both sides of the face with elbows open." }, { zh: "不要後仰借力。", en: "Do not lean back to cheat the movement." }],
    cautions: [{ zh: "它是輔助，不是治療所有肩痛的魔法。", en: "It is an accessory, not a cure-all for shoulder pain." }],
  },
  {
    slug: "biceps-curl",
    name: { zh: "啞鈴二頭彎舉", en: "Dumbbell Biceps Curl" },
    summary: { zh: "直接訓練肱二頭肌，簡單但很需要控制。", en: "Direct biceps work: simple, but control matters." },
    muscleGroup: "arms",
    primary: [{ zh: "肱二頭肌", en: "Biceps" }],
    secondary: [{ zh: "肱肌", en: "Brachialis" }, { zh: "前臂", en: "Forearms" }],
    equipment: { zh: "啞鈴", en: "Dumbbells" },
    difficulty: "beginner",
    rating: 4,
    visualFocus: "arms",
    bestFor: [{ zh: "想補手臂圍度和拉力輔助的人", en: "Lifters building arm size and pulling support" }],
    cues: [{ zh: "上臂穩定，不要甩背。", en: "Keep upper arms stable; do not swing the back." }, { zh: "底部伸展、頂端擠壓。", en: "Use a full stretch and squeeze at the top." }],
    cautions: [{ zh: "手腕痛時可改槌式彎舉。", en: "Use hammer curls if wrists feel irritated." }],
  },
  {
    slug: "triceps-pressdown",
    name: { zh: "三頭下壓", en: "Triceps Pressdown" },
    summary: { zh: "三頭肌直接訓練的穩定選擇，容易累積有效組。", en: "A stable triceps builder that is easy to accumulate volume with." },
    muscleGroup: "arms",
    primary: [{ zh: "肱三頭肌", en: "Triceps" }],
    secondary: [{ zh: "前臂", en: "Forearms" }],
    equipment: { zh: "繩索滑輪", en: "Cable station" },
    difficulty: "beginner",
    rating: 4,
    visualFocus: "arms",
    bestFor: [{ zh: "想補推力和手臂後側的人", en: "Lifters building pressing support and back-of-arm size" }],
    cues: [{ zh: "手肘固定在身體旁，往下伸直。", en: "Keep elbows by the body and extend down." }, { zh: "回放時控制，不要讓重量拉走手肘。", en: "Control the return; do not let the stack pull elbows forward." }],
    cautions: [{ zh: "重量太大會變成全身下壓。", en: "Too much load turns it into a whole-body press." }],
  },
  {
    slug: "plank",
    name: { zh: "棒式", en: "Plank" },
    summary: { zh: "抗伸展核心入門動作，重點是姿勢品質不是撐多久。", en: "An entry anti-extension core exercise where quality beats duration." },
    muscleGroup: "core",
    primary: [{ zh: "腹直肌", en: "Rectus abdominis" }, { zh: "深層核心", en: "Deep core" }],
    secondary: [{ zh: "臀部", en: "Glutes" }, { zh: "肩帶穩定", en: "Shoulder stability" }],
    equipment: { zh: "徒手", en: "Bodyweight" },
    difficulty: "beginner",
    rating: 4,
    visualFocus: "core",
    bestFor: [{ zh: "新手建立核心穩定和骨盆控制", en: "Beginners building core stability and pelvic control" }],
    cues: [{ zh: "肋骨收、臀部微夾，不要塌腰。", en: "Keep ribs down, squeeze glutes lightly, and avoid sagging." }, { zh: "能穩定 20-45 秒就可進階。", en: "Progress once 20-45 quality seconds are stable." }],
    cautions: [{ zh: "撐很久但腰痠，不代表核心更強。", en: "Long holds with low-back discomfort are not better." }],
  },
  {
    slug: "hanging-leg-raise",
    name: { zh: "懸垂舉腿", en: "Hanging Leg Raise" },
    summary: { zh: "較進階的腹肌和髖屈控制動作。", en: "A more advanced ab and hip-flexion control exercise." },
    muscleGroup: "core",
    primary: [{ zh: "腹直肌", en: "Rectus abdominis" }],
    secondary: [{ zh: "髖屈肌", en: "Hip flexors" }, { zh: "握力", en: "Grip" }],
    equipment: { zh: "單槓", en: "Pull-up bar" },
    difficulty: "advanced",
    rating: 4,
    visualFocus: "core",
    bestFor: [{ zh: "已有基礎核心控制的人", en: "Lifters with baseline core control" }],
    cues: [{ zh: "先控制骨盆後傾，再抬腿。", en: "Control pelvic tilt before raising the legs." }, { zh: "減少晃動，比抬很高更重要。", en: "Reducing swing matters more than height." }],
    cautions: [{ zh: "下背代償或握力不足時先做反向捲腹。", en: "Use reverse crunches first if low back or grip limits you." }],
  },
  {
    slug: "standing-calf-raise",
    name: { zh: "站姿提踵", en: "Standing Calf Raise" },
    summary: { zh: "小腿腓腸肌訓練的基本款。", en: "A basic calf exercise emphasizing the gastrocnemius." },
    muscleGroup: "legs",
    primary: [{ zh: "腓腸肌", en: "Gastrocnemius" }],
    secondary: [{ zh: "比目魚肌", en: "Soleus" }],
    equipment: { zh: "器械、史密斯或啞鈴", en: "Machine, Smith machine, or dumbbells" },
    difficulty: "beginner",
    rating: 3,
    visualFocus: "calves",
    bestFor: [{ zh: "想補小腿圍度和踝關節控制的人", en: "Lifters building calves and ankle control" }],
    cues: [{ zh: "底部停一下感受伸展，頂端完整踮起。", en: "Pause in the stretch and rise fully at the top." }, { zh: "不要快速彈震。", en: "Avoid fast bouncing reps." }],
    cautions: [{ zh: "阿基里斯腱不舒服時降低幅度和負荷。", en: "Reduce range and load if the Achilles feels irritated." }],
  },
  quickExercise({ slug: "dumbbell-bench-press", zh: "啞鈴臥推", en: "Dumbbell Bench Press", group: "chest", primary: [lt("胸大肌", "Pectoralis major")], secondary: [lt("前三角", "Front delts"), lt("肱三頭肌", "Triceps")], equipment: lt("啞鈴、臥推椅", "Dumbbells and bench"), rating: 5, focus: "chest", summary: lt("比槓鈴更自由，適合補左右控制和胸部活動範圍。", "A freer press than the barbell, useful for range of motion and side-to-side control.") }),
  quickExercise({ slug: "smith-machine-bench-press", zh: "史密斯臥推", en: "Smith Machine Bench Press", group: "chest", primary: [lt("胸大肌", "Pectoralis major")], secondary: [lt("前三角", "Front delts"), lt("肱三頭肌", "Triceps")], equipment: lt("史密斯機、臥推椅", "Smith machine and bench"), rating: 4, focus: "chest" }),
  quickExercise({ slug: "machine-chest-press", zh: "胸推器械", en: "Machine Chest Press", group: "chest", primary: [lt("胸大肌", "Pectoralis major")], secondary: [lt("前三角", "Front delts"), lt("肱三頭肌", "Triceps")], equipment: lt("胸推器械", "Chest press machine"), difficulty: "beginner", rating: 5, focus: "chest", summary: lt("穩定度高，適合累積胸部有效組和做遞減組。", "Stable and useful for accumulating chest volume or drop sets.") }),
  quickExercise({ slug: "machine-bench-press", zh: "器械臥推", en: "Machine Bench Press", group: "chest", primary: [lt("胸大肌", "Pectoralis major")], secondary: [lt("肱三頭肌", "Triceps")], equipment: lt("臥推器械", "Bench press machine"), difficulty: "beginner", rating: 4, focus: "chest" }),
  quickExercise({ slug: "incline-barbell-bench-press", zh: "槓鈴上斜臥推", en: "Incline Barbell Bench Press", group: "chest", primary: [lt("上胸", "Upper chest")], secondary: [lt("前三角", "Front delts"), lt("肱三頭肌", "Triceps")], equipment: lt("槓鈴、上斜椅", "Barbell and incline bench"), rating: 4, focus: "chest" }),
  quickExercise({ slug: "incline-machine-press", zh: "器械上斜推", en: "Incline Machine Press", group: "chest", primary: [lt("上胸", "Upper chest")], secondary: [lt("前三角", "Front delts"), lt("肱三頭肌", "Triceps")], equipment: lt("上斜胸推器械", "Incline press machine"), difficulty: "beginner", rating: 4, focus: "chest" }),
  quickExercise({ slug: "smith-incline-press", zh: "史密斯上斜臥推", en: "Smith Machine Incline Press", group: "chest", primary: [lt("上胸", "Upper chest")], secondary: [lt("前三角", "Front delts")], equipment: lt("史密斯機、上斜椅", "Smith machine and incline bench"), rating: 4, focus: "chest" }),
  quickExercise({ slug: "pec-deck-fly", zh: "蝴蝶機夾胸", en: "Pec Deck Fly", group: "chest", primary: [lt("胸大肌", "Pectoralis major")], secondary: [lt("前三角", "Front delts")], equipment: lt("蝴蝶機", "Pec deck machine"), difficulty: "beginner", rating: 4, focus: "chest", summary: lt("穩定孤立胸肌，適合放在推類動作後。", "A stable chest isolation option after presses.") }),
  quickExercise({ slug: "weighted-dip", zh: "負重雙槓臂屈伸", en: "Weighted Dip", group: "chest", primary: [lt("下胸", "Lower chest")], secondary: [lt("肱三頭肌", "Triceps"), lt("前三角", "Front delts")], equipment: lt("雙槓、負重帶", "Dip bars and weight belt"), difficulty: "advanced", rating: 4, focus: "chest" }),
  quickExercise({ slug: "high-to-low-cable-fly", zh: "雙邊繩索下斜夾胸", en: "High-to-Low Cable Fly", group: "chest", primary: [lt("中下胸", "Mid/lower chest")], secondary: [lt("前三角", "Front delts")], equipment: lt("龍門架繩索", "Cable crossover station"), rating: 4, focus: "chest" }),
  quickExercise({ slug: "wide-grip-lat-pulldown", zh: "寬握高位下拉", en: "Wide-Grip Lat Pulldown", group: "back", primary: [lt("背闊肌", "Lats")], secondary: [lt("上背", "Upper back"), lt("肱二頭肌", "Biceps")], equipment: lt("高位下拉機", "Pulldown machine"), difficulty: "beginner", rating: 5, focus: "back" }),
  quickExercise({ slug: "plate-loaded-row", zh: "槓片式器械划船", en: "Plate-Loaded Row", group: "back", primary: [lt("中背", "Mid back")], secondary: [lt("背闊肌", "Lats"), lt("肱二頭肌", "Biceps")], equipment: lt("槓片式划船機", "Plate-loaded row machine"), rating: 5, focus: "back" }),
  quickExercise({ slug: "chest-supported-single-arm-row", zh: "單邊靠墊划船", en: "Chest-Supported Single-Arm Row", group: "back", primary: [lt("背闊肌", "Lats")], secondary: [lt("中背", "Mid back")], equipment: lt("胸托划船器械", "Chest-supported row machine"), rating: 5, focus: "back" }),
  quickExercise({ slug: "bilateral-machine-row", zh: "雙邊器械划船", en: "Bilateral Machine Row", group: "back", primary: [lt("中背", "Mid back")], secondary: [lt("背闊肌", "Lats")], equipment: lt("划船器械", "Row machine"), difficulty: "beginner", rating: 4, focus: "back" }),
  quickExercise({ slug: "narrow-grip-cable-row", zh: "龍門架窄握划船", en: "Narrow-Grip Cable Row", group: "back", primary: [lt("背闊肌", "Lats")], secondary: [lt("中背", "Mid back"), lt("肱二頭肌", "Biceps")], equipment: lt("龍門架、窄握把", "Cable station and narrow handle"), rating: 4, focus: "back" }),
  quickExercise({ slug: "neutral-grip-cable-row", zh: "龍門架對握划船", en: "Neutral-Grip Cable Row", group: "back", primary: [lt("中背", "Mid back")], secondary: [lt("背闊肌", "Lats"), lt("肱二頭肌", "Biceps")], equipment: lt("龍門架、對握把", "Cable station and neutral handle"), rating: 4, focus: "back" }),
  quickExercise({ slug: "wide-grip-cable-row", zh: "龍門架寬握划船", en: "Wide-Grip Cable Row", group: "back", primary: [lt("上背", "Upper back")], secondary: [lt("後三角", "Rear delts"), lt("背闊肌", "Lats")], equipment: lt("龍門架、寬握把", "Cable station and wide bar"), rating: 4, focus: "back" }),
  quickExercise({ slug: "straight-bar-pulldown", zh: "平槓正握下拉", en: "Straight-Bar Overhand Pulldown", group: "back", primary: [lt("背闊肌", "Lats")], secondary: [lt("肱二頭肌", "Biceps")], equipment: lt("高位滑輪、平槓", "High cable and straight bar"), difficulty: "beginner", rating: 4, focus: "back" }),
  quickExercise({ slug: "reverse-grip-pulldown", zh: "窄槓反握下拉", en: "Reverse-Grip Pulldown", group: "back", primary: [lt("背闊肌", "Lats")], secondary: [lt("肱二頭肌", "Biceps")], equipment: lt("高位滑輪、窄槓", "High cable and close bar"), rating: 4, focus: "back" }),
  quickExercise({ slug: "machine-lat-pulldown", zh: "器械下拉", en: "Machine Lat Pulldown", group: "back", primary: [lt("背闊肌", "Lats")], secondary: [lt("肱二頭肌", "Biceps")], equipment: lt("下拉器械", "Pulldown machine"), difficulty: "beginner", rating: 4, focus: "back" }),
  quickExercise({ slug: "barbell-row", zh: "槓鈴划船", en: "Barbell Row", group: "back", primary: [lt("中背", "Mid back")], secondary: [lt("背闊肌", "Lats"), lt("豎脊肌", "Spinal erectors")], equipment: lt("槓鈴", "Barbell"), difficulty: "advanced", rating: 5, focus: "back" }),
  quickExercise({ slug: "neutral-grip-pulldown", zh: "對握下拉", en: "Neutral-Grip Pulldown", group: "back", primary: [lt("背闊肌", "Lats")], secondary: [lt("肱二頭肌", "Biceps")], equipment: lt("高位下拉機、對握把", "Pulldown machine and neutral handle"), difficulty: "beginner", rating: 4, focus: "back" }),
  quickExercise({ slug: "straight-arm-pulldown", zh: "直臂下壓", en: "Straight-Arm Pulldown", group: "back", primary: [lt("背闊肌", "Lats")], secondary: [lt("大圓肌", "Teres major")], equipment: lt("繩索滑輪", "Cable station"), rating: 4, focus: "back" }),
  quickExercise({ slug: "single-arm-cable-pulldown", zh: "單邊繩索下拉", en: "Single-Arm Cable Pulldown", group: "back", primary: [lt("背闊肌", "Lats")], secondary: [lt("肱二頭肌", "Biceps")], equipment: lt("龍門架單把手", "Cable station and single handle"), rating: 4, focus: "back" }),
  quickExercise({ slug: "v-grip-t-bar-row", zh: "V 握海豹划船", en: "V-Grip Seal Row", group: "back", primary: [lt("中背", "Mid back")], secondary: [lt("背闊肌", "Lats"), lt("後三角", "Rear delts")], equipment: lt("胸托划船椅、V 握把", "Seal row bench and V handle"), rating: 4, focus: "back" }),
  quickExercise({ slug: "weighted-pull-up", zh: "負重引體向上", en: "Weighted Pull-up", group: "back", primary: [lt("背闊肌", "Lats")], secondary: [lt("肱二頭肌", "Biceps"), lt("核心", "Core")], equipment: lt("單槓、負重帶", "Pull-up bar and weight belt"), difficulty: "advanced", rating: 5, focus: "back" }),
  quickExercise({ slug: "barbell-overhead-press", zh: "實力推舉", en: "Barbell Overhead Press", group: "shoulders", primary: [lt("前三角", "Front delts")], secondary: [lt("中三角", "Side delts"), lt("肱三頭肌", "Triceps")], equipment: lt("槓鈴", "Barbell"), difficulty: "advanced", rating: 5, focus: "shoulders" }),
  quickExercise({ slug: "machine-shoulder-press", zh: "器械肩推", en: "Machine Shoulder Press", group: "shoulders", primary: [lt("前三角", "Front delts"), lt("中三角", "Side delts")], secondary: [lt("肱三頭肌", "Triceps")], equipment: lt("肩推器械", "Shoulder press machine"), difficulty: "beginner", rating: 4, focus: "shoulders" }),
  quickExercise({ slug: "smith-machine-shoulder-press", zh: "史密斯肩推", en: "Smith Machine Shoulder Press", group: "shoulders", primary: [lt("前三角", "Front delts")], secondary: [lt("肱三頭肌", "Triceps")], equipment: lt("史密斯機、椅子", "Smith machine and bench"), rating: 4, focus: "shoulders" }),
  quickExercise({ slug: "cable-lateral-raise", zh: "龍門架側平舉", en: "Cable Lateral Raise", group: "shoulders", primary: [lt("中三角", "Side delts")], secondary: [lt("上斜方", "Upper traps")], equipment: lt("龍門架單把手", "Cable station and single handle"), difficulty: "beginner", rating: 5, focus: "shoulders" }),
  quickExercise({ slug: "dumbbell-rear-delt-fly", zh: "啞鈴後束飛鳥", en: "Dumbbell Rear-Delt Fly", group: "shoulders", primary: [lt("後三角", "Rear delts")], secondary: [lt("上背", "Upper back")], equipment: lt("啞鈴", "Dumbbells"), difficulty: "beginner", rating: 4, focus: "shoulders" }),
  quickExercise({ slug: "reverse-pec-deck", zh: "蝴蝶機後束", en: "Reverse Pec Deck", group: "shoulders", primary: [lt("後三角", "Rear delts")], secondary: [lt("中下斜方", "Mid/lower traps")], equipment: lt("蝴蝶機", "Reverse pec deck"), difficulty: "beginner", rating: 5, focus: "shoulders" }),
  quickExercise({ slug: "cable-rear-delt-fly", zh: "龍門架後束飛鳥", en: "Cable Rear-Delt Fly", group: "shoulders", primary: [lt("後三角", "Rear delts")], secondary: [lt("上背", "Upper back")], equipment: lt("龍門架繩索", "Cable station"), rating: 4, focus: "shoulders" }),
  quickExercise({ slug: "rear-delt-row", zh: "後束提拉", en: "Rear-Delt Row", group: "shoulders", primary: [lt("後三角", "Rear delts")], secondary: [lt("上背", "Upper back")], equipment: lt("啞鈴或繩索", "Dumbbells or cable"), rating: 4, focus: "shoulders" }),
  quickExercise({ slug: "cable-front-raise", zh: "繩索前平舉", en: "Cable Front Raise", group: "shoulders", primary: [lt("前三角", "Front delts")], secondary: [lt("上胸", "Upper chest")], equipment: lt("低位滑輪", "Low cable"), rating: 3, focus: "shoulders" }),
  quickExercise({ slug: "cable-crunch", zh: "跪姿繩索捲腹", en: "Kneeling Cable Crunch", group: "core", primary: [lt("腹直肌", "Rectus abdominis")], secondary: [lt("腹斜肌", "Obliques")], equipment: lt("高位繩索", "High cable"), difficulty: "beginner", rating: 5, focus: "core" }),
  quickExercise({ slug: "incline-bench-crunch", zh: "躺椅捲腹", en: "Incline Bench Crunch", group: "core", primary: [lt("腹直肌", "Rectus abdominis")], secondary: [lt("髖屈肌", "Hip flexors")], equipment: lt("可調斜板", "Incline bench"), difficulty: "beginner", rating: 4, focus: "core" }),
  quickExercise({ slug: "lying-crunch", zh: "躺姿捲腹", en: "Lying Crunch", group: "core", primary: [lt("腹直肌", "Rectus abdominis")], secondary: [lt("深層核心", "Deep core")], equipment: lt("徒手或墊子", "Bodyweight or mat"), difficulty: "beginner", rating: 3, focus: "core" }),
  quickExercise({ slug: "cable-oblique-crunch", zh: "繩索腹外斜捲腹", en: "Cable Oblique Crunch", group: "core", primary: [lt("腹外斜肌", "External obliques")], secondary: [lt("腹直肌", "Rectus abdominis")], equipment: lt("繩索滑輪", "Cable station"), rating: 4, focus: "core" }),
  quickExercise({ slug: "ez-bar-curl", zh: "曲槓二頭彎舉", en: "EZ-Bar Curl", group: "arms", primary: [lt("肱二頭肌", "Biceps")], secondary: [lt("肱肌", "Brachialis")], equipment: lt("曲槓", "EZ bar"), rating: 4, focus: "arms" }),
  quickExercise({ slug: "cable-biceps-curl", zh: "龍門架二頭彎舉", en: "Cable Biceps Curl", group: "arms", primary: [lt("肱二頭肌", "Biceps")], secondary: [lt("前臂", "Forearms")], equipment: lt("低位滑輪", "Low cable"), difficulty: "beginner", rating: 4, focus: "arms" }),
  quickExercise({ slug: "reverse-cable-curl", zh: "龍門架反握二頭彎舉", en: "Reverse Cable Curl", group: "arms", primary: [lt("肱橈肌", "Brachioradialis")], secondary: [lt("前臂伸肌", "Forearm extensors"), lt("肱二頭肌", "Biceps")], equipment: lt("低位滑輪、直槓", "Low cable and straight bar"), rating: 3, focus: "arms" }),
  quickExercise({ slug: "preacher-curl", zh: "牧師椅二頭彎舉", en: "Preacher Curl", group: "arms", primary: [lt("肱二頭肌", "Biceps")], secondary: [lt("肱肌", "Brachialis")], equipment: lt("牧師椅、啞鈴或曲槓", "Preacher bench with dumbbell or EZ bar"), rating: 4, focus: "arms" }),
  quickExercise({ slug: "machine-preacher-curl", zh: "牧師椅器械彎舉", en: "Machine Preacher Curl", group: "arms", primary: [lt("肱二頭肌", "Biceps")], secondary: [lt("肱肌", "Brachialis")], equipment: lt("牧師椅彎舉器械", "Preacher curl machine"), difficulty: "beginner", rating: 4, focus: "arms" }),
  quickExercise({ slug: "chest-supported-dumbbell-curl", zh: "胸靠椅二頭彎舉", en: "Chest-Supported Dumbbell Curl", group: "arms", primary: [lt("肱二頭肌", "Biceps")], secondary: [lt("前臂", "Forearms")], equipment: lt("上斜椅、啞鈴", "Incline bench and dumbbells"), rating: 4, focus: "arms" }),
  quickExercise({ slug: "lying-cable-curl", zh: "躺姿繩索二頭彎舉", en: "Lying Cable Curl", group: "arms", primary: [lt("肱二頭肌", "Biceps")], secondary: [lt("肱肌", "Brachialis")], equipment: lt("低位滑輪", "Low cable"), rating: 3, focus: "arms" }),
  quickExercise({ slug: "skull-crusher", zh: "碎顱者", en: "Skull Crusher", group: "arms", primary: [lt("肱三頭肌", "Triceps")], secondary: [lt("肘關節穩定", "Elbow stability")], equipment: lt("曲槓或啞鈴", "EZ bar or dumbbells"), rating: 4, focus: "arms" }),
  quickExercise({ slug: "overhead-triceps-extension", zh: "三頭後屈伸", en: "Overhead Triceps Extension", group: "arms", primary: [lt("肱三頭肌長頭", "Long head of triceps")], secondary: [lt("核心穩定", "Core stability")], equipment: lt("啞鈴或繩索", "Dumbbell or cable"), rating: 4, focus: "arms" }),
  quickExercise({ slug: "forearm-reverse-curl", zh: "小臂反向彎舉", en: "Reverse Curl", group: "arms", primary: [lt("肱橈肌", "Brachioradialis")], secondary: [lt("前臂伸肌", "Forearm extensors")], equipment: lt("曲槓或啞鈴", "EZ bar or dumbbells"), rating: 3, focus: "arms" }),
  quickExercise({ slug: "wrist-curl", zh: "小臂正握腕彎舉", en: "Wrist Curl", group: "arms", primary: [lt("前臂屈肌", "Forearm flexors")], secondary: [lt("握力", "Grip")], equipment: lt("啞鈴、槓鈴或繩索", "Dumbbell, barbell, or cable"), rating: 3, focus: "arms" }),
  quickExercise({ slug: "reverse-wrist-curl", zh: "小臂反握腕彎舉", en: "Reverse Wrist Curl", group: "arms", primary: [lt("前臂伸肌", "Forearm extensors")], secondary: [lt("握力", "Grip")], equipment: lt("啞鈴或繩索", "Dumbbell or cable"), rating: 3, focus: "arms" }),
  quickExercise({ slug: "rope-hammer-curl", zh: "雙頭繩二頭彎舉", en: "Rope Hammer Curl", group: "arms", primary: [lt("肱肌", "Brachialis")], secondary: [lt("肱二頭肌", "Biceps"), lt("前臂", "Forearms")], equipment: lt("低位滑輪、雙頭繩", "Low cable and rope"), rating: 4, focus: "arms" }),
  quickExercise({ slug: "single-arm-cable-curl", zh: "單臂繩索二頭彎舉", en: "Single-Arm Cable Curl", group: "arms", primary: [lt("肱二頭肌", "Biceps")], secondary: [lt("前臂", "Forearms")], equipment: lt("龍門架單把手", "Cable station and single handle"), rating: 4, focus: "arms" }),
  quickExercise({ slug: "single-arm-triceps-pressdown", zh: "單臂三頭下壓", en: "Single-Arm Triceps Pressdown", group: "arms", primary: [lt("肱三頭肌", "Triceps")], secondary: [lt("前臂", "Forearms")], equipment: lt("龍門架單把手", "Cable station and single handle"), rating: 4, focus: "arms" }),
  quickExercise({ slug: "cable-triceps-kickback", zh: "繩索三頭後踢", en: "Cable Triceps Kickback", group: "arms", primary: [lt("肱三頭肌", "Triceps")], secondary: [lt("肩部穩定", "Shoulder stability")], equipment: lt("低位滑輪", "Low cable"), rating: 3, focus: "arms" }),
  quickExercise({ slug: "leg-extension", zh: "股四頭器械伸腿", en: "Leg Extension", group: "legs", primary: [lt("股四頭肌", "Quadriceps")], secondary: [lt("膝關節控制", "Knee control")], equipment: lt("伸腿機", "Leg extension machine"), difficulty: "beginner", rating: 4, focus: "quads" }),
  quickExercise({ slug: "lying-leg-curl", zh: "躺姿腿後彎舉", en: "Lying Leg Curl", group: "legs", primary: [lt("腿後側", "Hamstrings")], secondary: [lt("腓腸肌", "Gastrocnemius")], equipment: lt("腿後彎舉機", "Leg curl machine"), difficulty: "beginner", rating: 4, focus: "hamstrings" }),
  quickExercise({ slug: "deadlift", zh: "硬拉", en: "Deadlift", group: "legs", primary: [lt("臀大肌", "Glutes"), lt("腿後側", "Hamstrings")], secondary: [lt("豎脊肌", "Spinal erectors"), lt("上背", "Upper back")], equipment: lt("槓鈴", "Barbell"), difficulty: "advanced", rating: 4, focus: "glutes" }),
  quickExercise({ slug: "walking-lunge", zh: "弓箭步", en: "Walking Lunge", group: "legs", primary: [lt("股四頭肌", "Quadriceps"), lt("臀大肌", "Glutes")], secondary: [lt("內收肌", "Adductors"), lt("核心穩定", "Core stability")], equipment: lt("啞鈴或徒手", "Dumbbells or bodyweight"), rating: 4, focus: "quads" }),
  quickExercise({ slug: "hip-adduction-machine", zh: "內收器械", en: "Hip Adduction Machine", group: "legs", primary: [lt("內收肌群", "Adductors")], secondary: [lt("骨盆穩定", "Pelvic stability")], equipment: lt("內收機", "Adduction machine"), difficulty: "beginner", rating: 3, focus: "quads" }),
  quickExercise({ slug: "hip-abduction-machine", zh: "外展器械", en: "Hip Abduction Machine", group: "glutes", primary: [lt("臀中肌", "Glute medius")], secondary: [lt("臀大肌上束", "Upper glutes")], equipment: lt("外展機", "Abduction machine"), difficulty: "beginner", rating: 4, focus: "glutes" }),
  quickExercise({ slug: "cable-hip-adduction", zh: "繩索髖內收", en: "Cable Hip Adduction", group: "legs", primary: [lt("內收肌群", "Adductors")], secondary: [lt("核心穩定", "Core stability")], equipment: lt("低位滑輪、腳踝帶", "Low cable and ankle strap"), rating: 3, focus: "quads" }),
  quickExercise({ slug: "smith-calf-raise", zh: "史密斯提踵", en: "Smith Machine Calf Raise", group: "legs", primary: [lt("腓腸肌", "Gastrocnemius")], secondary: [lt("比目魚肌", "Soleus")], equipment: lt("史密斯機", "Smith machine"), difficulty: "beginner", rating: 4, focus: "calves" }),
  quickExercise({ slug: "barbell-glute-bridge", zh: "槓鈴臀橋", en: "Barbell Glute Bridge", group: "glutes", primary: [lt("臀大肌", "Glutes")], secondary: [lt("腿後側", "Hamstrings"), lt("核心", "Core")], equipment: lt("槓鈴、地墊", "Barbell and mat"), rating: 4, focus: "glutes" }),
  quickExercise({ slug: "smith-hip-thrust", zh: "史密斯臀推", en: "Smith Machine Hip Thrust", group: "glutes", primary: [lt("臀大肌", "Glutes")], secondary: [lt("腿後側", "Hamstrings")], equipment: lt("史密斯機、椅子", "Smith machine and bench"), rating: 4, focus: "glutes" }),
];

export const foods: Food[] = [
  { slug: "egg", name: { zh: "雞蛋", en: "Egg" }, unit: { zh: "1 顆", en: "1 egg" }, kcal: "70", protein: "6 g", carbs: "0.5 g", fat: "5 g", bestUse: { zh: "便宜、方便的蛋白和脂肪來源", en: "Cheap, convenient protein and fat" }, note: { zh: "大小不同會影響數字。", en: "Egg size changes the numbers." } },
  { slug: "chicken-breast", name: { zh: "雞胸肉", en: "Chicken Breast" }, unit: { zh: "100 g 熟重", en: "100 g cooked" }, kcal: "165", protein: "31 g", carbs: "0 g", fat: "3.5 g", bestUse: { zh: "高蛋白、低脂，適合減脂和增肌", en: "High protein and low fat for cutting or gaining" }, note: { zh: "烹調油和醬料會大幅改變熱量。", en: "Oil and sauce can change calories a lot." } },
  { slug: "lean-beef", name: { zh: "瘦牛肉", en: "Lean Beef" }, unit: { zh: "100 g 熟重", en: "100 g cooked" }, kcal: "210", protein: "26 g", carbs: "0 g", fat: "11 g", bestUse: { zh: "蛋白質、鐵和肌酸來源", en: "Protein, iron, and dietary creatine" }, note: { zh: "脂肪比例差異很大。", en: "Fat percentage varies widely." } },
  { slug: "cooked-rice", name: { zh: "熟白飯", en: "Cooked Rice" }, unit: { zh: "100 g", en: "100 g" }, kcal: "130", protein: "2.7 g", carbs: "28 g", fat: "0.3 g", bestUse: { zh: "訓練前後好消化的主食", en: "Easy-to-digest staple around training" }, note: { zh: "熟飯含水量會影響重量。", en: "Water content changes cooked weight." } },
  { slug: "oats", name: { zh: "燕麥", en: "Oats" }, unit: { zh: "100 g 乾重", en: "100 g dry" }, kcal: "380", protein: "13 g", carbs: "66 g", fat: "7 g", bestUse: { zh: "早餐、增肌期補熱量和纖維", en: "Breakfast, calories, and fiber during gaining" }, note: { zh: "100 g 乾燕麥份量其實不少。", en: "100 g dry oats is a large serving." } },
  { slug: "banana", name: { zh: "香蕉", en: "Banana" }, unit: { zh: "100 g", en: "100 g" }, kcal: "90", protein: "1.1 g", carbs: "23 g", fat: "0.3 g", bestUse: { zh: "訓練前快速碳水", en: "Quick pre-training carbohydrate" }, note: { zh: "成熟度會影響口感和消化感。", en: "Ripeness affects taste and digestion." } },
  { slug: "tofu", name: { zh: "豆腐", en: "Tofu" }, unit: { zh: "100 g", en: "100 g" }, kcal: "80", protein: "8 g", carbs: "2 g", fat: "5 g", bestUse: { zh: "植物性蛋白和日常料理", en: "Plant protein and everyday meals" }, note: { zh: "嫩豆腐、板豆腐數字不同。", en: "Soft and firm tofu differ." } },
  { slug: "milk", name: { zh: "牛奶", en: "Milk" }, unit: { zh: "250 ml", en: "250 ml" }, kcal: "150", protein: "8 g", carbs: "12 g", fat: "8 g", bestUse: { zh: "方便補蛋白和熱量", en: "Convenient protein and calories" }, note: { zh: "低脂、全脂差異明顯。", en: "Low-fat and whole milk differ clearly." } },
  { slug: "greek-yogurt", name: { zh: "希臘優格", en: "Greek Yogurt" }, unit: { zh: "100 g", en: "100 g" }, kcal: "60-100", protein: "8-10 g", carbs: "3-6 g", fat: "0-5 g", bestUse: { zh: "高蛋白點心或早餐", en: "High-protein snack or breakfast" }, note: { zh: "無糖和加糖差很多。", en: "Plain and sweetened versions differ a lot." } },
  { slug: "sweet-potato", name: { zh: "地瓜", en: "Sweet Potato" }, unit: { zh: "100 g", en: "100 g" }, kcal: "85", protein: "1.6 g", carbs: "20 g", fat: "0.1 g", bestUse: { zh: "飽足感好的主食替換", en: "Filling staple option" }, note: { zh: "品種和烤製失水會改變熱量密度。", en: "Variety and water loss change calorie density." } },
];

const toCn = OpenCC.Converter({ from: "tw", to: "cn" });

export function text(value: LText, lang: Lang) {
  if (lang === "en") return value.en;
  return lang === "zh-cn" ? toCn(value.zh) : value.zh;
}

export function listText(values: LText[], lang: Lang) {
  return values.map((value) => text(value, lang));
}

export function difficultyLabel(difficulty: Exercise["difficulty"], lang: Lang) {
  const labels = {
    beginner: { zh: "新手友善", en: "Beginner-friendly" },
    intermediate: { zh: "中階", en: "Intermediate" },
    advanced: { zh: "進階", en: "Advanced" },
  };
  return text(labels[difficulty], lang);
}

export function getExercise(slug: string) {
  return exercises.find((exercise) => exercise.slug === slug);
}

export function getMuscleGroup(slug: string) {
  return muscleGroups.find((group) => group.slug === slug);
}

export function exercisesForMuscle(slug: string) {
  return exercises
    .filter((exercise) => exercise.muscleGroup === slug)
    .sort((a, b) => b.rating - a.rating || a.name.en.localeCompare(b.name.en));
}

export function toolCopy(lang: Lang) {
  if (lang === "en") {
    return {
      exercises: "Exercise Library",
      muscles: "Muscle Guide",
      foods: "Food Nutrition",
      rating: "Recommendation",
      difficulty: "Difficulty",
      equipment: "Equipment",
      primary: "Primary muscles",
      secondary: "Secondary muscles",
      bestFor: "Best for",
      cues: "How to do it",
      cautions: "Watch out",
      read: "View details",
      browse: "Browse",
      unit: "Serving",
      kcal: "Calories",
      protein: "Protein",
      carbs: "Carbs",
      fat: "Fat",
    };
  }
  return {
    exercises: lang === "zh-cn" ? "动作库" : "動作庫",
    muscles: lang === "zh-cn" ? "肌群指南" : "肌群指南",
    foods: lang === "zh-cn" ? "食物营养库" : "食物營養庫",
    rating: lang === "zh-cn" ? "推荐指数" : "推薦指數",
    difficulty: lang === "zh-cn" ? "难度" : "難度",
    equipment: lang === "zh-cn" ? "器材" : "器材",
    primary: lang === "zh-cn" ? "主练肌群" : "主練肌群",
    secondary: lang === "zh-cn" ? "辅助肌群" : "輔助肌群",
    bestFor: lang === "zh-cn" ? "适合谁" : "適合誰",
    cues: lang === "zh-cn" ? "动作重点" : "動作重點",
    cautions: lang === "zh-cn" ? "注意事项" : "注意事項",
    read: lang === "zh-cn" ? "看详情" : "看詳情",
    browse: lang === "zh-cn" ? "浏览" : "瀏覽",
    unit: lang === "zh-cn" ? "份量" : "份量",
    kcal: lang === "zh-cn" ? "热量" : "熱量",
    protein: lang === "zh-cn" ? "蛋白质" : "蛋白質",
    carbs: lang === "zh-cn" ? "碳水" : "碳水",
    fat: lang === "zh-cn" ? "脂肪" : "脂肪",
  };
}
