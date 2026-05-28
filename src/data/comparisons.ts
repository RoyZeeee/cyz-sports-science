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
];

export function comparisonBySlug(slug: string) {
  return comparisons.find((comparison) => comparison.slug === slug);
}

export function comparisonText(value: LText, lang: Lang) {
  return lang === "en" ? value.en : localizeText(value.zh, lang);
}
