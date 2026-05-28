import type { Lang } from "./content";
import { localizeText } from "./content";

type LText = { zh: string; en: string };

const lt = (zh: string, en: string): LText => ({ zh, en });

export type FoodGuide = {
  slug: string;
  title: LText;
  description: LText;
  intro: LText;
  rows: {
    label: LText;
    value: LText;
  }[];
  tips: LText[];
  foodSlugs: string[];
};

export const foodGuides: FoodGuide[] = [
  {
    slug: "high-protein-foods",
    title: lt("高蛋白食物排行", "High-Protein Foods"),
    description: lt("整理雞胸、鮪魚、蝦仁、牛肉、蛋、豆製品、乳製品和蛋白飲的蛋白質與適合情境。", "Compare chicken, tuna, shrimp, beef, eggs, soy foods, dairy, and protein shakes by protein and use case."),
    intro: lt("高蛋白食物不只看蛋白質，也要看脂肪、方便性、價格、飽足感和你能不能長期吃。", "High-protein choices are not only about protein. Fat, convenience, cost, satiety, and adherence matter too."),
    rows: [
      { label: lt("低脂高蛋白", "Lean protein"), value: lt("雞胸、水煮鮪魚、蝦仁、豬里肌", "Chicken breast, tuna in water, shrimp, pork tenderloin") },
      { label: lt("方便補缺口", "Convenient gap-fillers"), value: lt("乳清蛋白飲、茶葉蛋、低脂牛奶、希臘優格", "Whey shake, tea egg, low-fat milk, Greek yogurt") },
      { label: lt("植物性選擇", "Plant options"), value: lt("豆腐、無糖豆漿、毛豆", "Tofu, unsweetened soy milk, edamame") },
    ],
    tips: [
      lt("減脂期優先選蛋白高、脂肪低、飽足感好的來源。", "During fat loss, prioritize high-protein, lower-fat, filling sources."),
      lt("增肌期可以加入鮭魚、牛肉、牛奶和堅果，但要知道它們也帶熱量。", "During gaining, salmon, beef, milk, and nuts can help, but they bring calories too."),
      lt("蛋白粉只是補缺口，日常食物仍是底盤。", "Protein powder fills gaps; everyday foods are still the base."),
    ],
    foodSlugs: ["chicken-breast", "canned-tuna", "shrimp", "pork-tenderloin", "lean-beef", "egg", "tea-egg", "greek-yogurt", "protein-shake", "tofu", "soy-milk", "edamame"],
  },
  {
    slug: "fat-loss-foods",
    title: lt("減脂食物排行", "Fat-Loss Foods"),
    description: lt("用熱量、蛋白質、飽足感和外食可行性，整理減脂期比較好安排的食物。", "Rank practical fat-loss foods by calories, protein, satiety, and eating-out feasibility."),
    intro: lt("減脂沒有神奇食物，核心仍是熱量赤字。但有些食物更容易讓你吃飽、保留蛋白質，讓赤字比較可持續。", "There are no magic fat-loss foods. The core is still an energy deficit, but some foods make fullness and protein easier."),
    rows: [
      { label: lt("蛋白優先", "Protein first"), value: lt("雞胸、鮪魚、蝦仁、希臘優格、豆腐", "Chicken, tuna, shrimp, Greek yogurt, tofu") },
      { label: lt("高飽足主食", "Filling carbs"), value: lt("地瓜、馬鈴薯、糙米飯、燕麥", "Sweet potato, potato, brown rice, oats") },
      { label: lt("小心熱量密度", "Watch calorie density"), value: lt("堅果、酪梨、橄欖油、含糖奶茶", "Nuts, avocado, olive oil, sweetened milk tea") },
    ],
    tips: [
      lt("每餐先放蛋白質，再放蔬菜和主食，最後才看醬料和飲料。", "Build meals with protein first, then vegetables and carbs, then check sauces and drinks."),
      lt("健康脂肪不是不能吃，但減脂期最容易在油、堅果、飲料和醬料失守。", "Healthy fats are fine, but oils, nuts, drinks, and sauces are common fat-loss traps."),
      lt("如果常外食，先學會辨認隱形熱量，比背很多食物禁忌更有用。", "If you eat out often, spotting hidden calories is more useful than memorizing food bans."),
    ],
    foodSlugs: ["chicken-breast", "canned-tuna", "shrimp", "greek-yogurt", "tofu", "broccoli", "apple", "sweet-potato", "potato", "brown-rice", "almonds", "avocado", "olive-oil", "sweetened-milk-tea"],
  },
  {
    slug: "muscle-gain-carbs",
    title: lt("增肌碳水來源", "Carb Sources for Muscle Gain"),
    description: lt("整理白飯、地瓜、燕麥、香蕉、吐司和飯糰等增肌期常見碳水來源。", "Compare rice, sweet potato, oats, banana, toast, and rice balls as practical carbohydrate sources for gaining."),
    intro: lt("增肌期碳水不是敵人。足夠碳水能支持訓練量、恢復和總熱量，但份量仍要和體重變化一起調整。", "Carbs are not the enemy during gaining. Enough carbs support training volume, recovery, and calories, but portions still need tracking."),
    rows: [
      { label: lt("訓練前後", "Around training"), value: lt("白飯、香蕉、飯糰、吐司", "Rice, banana, rice ball, toast") },
      { label: lt("早餐或備餐", "Breakfast or meal prep"), value: lt("燕麥、地瓜、糙米飯", "Oats, sweet potato, brown rice") },
      { label: lt("增肌熱量不足", "When calories are low"), value: lt("牛奶、燕麥、堅果搭配主食", "Milk, oats, nuts paired with staples") },
    ],
    tips: [
      lt("訓練量高的人，碳水太低常會影響表現和總組數。", "For high-volume lifters, very low carbs often hurt performance and total sets."),
      lt("增肌不是無限制亂吃，體重上升太快通常代表脂肪也長太快。", "Gaining is not unlimited eating; if weight rises too fast, fat gain usually rises too."),
      lt("把碳水放在訓練前後，常比隨機吃零食更有用。", "Placing carbs around training is often more useful than random snacking."),
    ],
    foodSlugs: ["cooked-rice", "brown-rice", "sweet-potato", "potato", "oats", "banana", "whole-wheat-toast", "rice-ball", "milk", "low-fat-milk", "almonds"],
  },
  {
    slug: "convenience-store-fitness-foods",
    title: lt("便利商店健身吃法", "Convenience-Store Fitness Foods"),
    description: lt("用茶葉蛋、飯糰、雞胸沙拉、牛奶、豆漿、蛋白飲和蛋白棒組出比較實際的便利商店健身餐。", "Build practical convenience-store fitness meals with eggs, rice balls, chicken salad, milk, soy milk, protein shakes, and bars."),
    intro: lt("便利商店不是不能健身吃，問題通常在於只買主食或飲料，蛋白質不足，或醬料甜飲讓熱量失控。", "Convenience stores can work for fitness. The usual problem is too little protein or calories sneaking in through sauces and drinks."),
    rows: [
      { label: lt("減脂組合", "Cutting combo"), value: lt("雞胸沙拉 + 茶葉蛋 + 無糖茶或無糖豆漿", "Chicken salad + tea egg + unsweetened tea or soy milk") },
      { label: lt("增肌組合", "Gaining combo"), value: lt("飯糰 + 牛奶 + 茶葉蛋或蛋白飲", "Rice ball + milk + tea egg or protein shake") },
      { label: lt("趕時間補蛋白", "Fast protein"), value: lt("蛋白飲、茶葉蛋、希臘優格、低脂牛奶", "Protein shake, tea egg, Greek yogurt, low-fat milk") },
    ],
    tips: [
      lt("看標籤時先看熱量和蛋白質，再看脂肪與糖。", "Read calories and protein first, then fat and sugar."),
      lt("飯糰適合補碳水，但它不是高蛋白食物。", "Rice balls are useful carbs, but they are not high-protein foods."),
      lt("蛋白棒可以救急，但不要自動把它當健康低熱量。", "Protein bars are useful backups, but do not automatically treat them as low-calorie health food."),
    ],
    foodSlugs: ["tea-egg", "rice-ball", "chicken-salad", "protein-shake", "protein-bar", "soy-milk", "milk", "low-fat-milk", "greek-yogurt", "banana"],
  },
  {
    slug: "eating-out-fat-loss",
    title: lt("外食減脂怎麼選", "How to Eat Out During Fat Loss"),
    description: lt("整理外食減脂時如何先抓蛋白質、主食份量、醬料、油脂和飲料。", "Organize how to choose protein, carb portions, sauces, fats, and drinks when eating out during fat loss."),
    intro: lt("外食減脂的核心不是完美，而是讓你大多數餐都有蛋白質、份量可控，並避開最容易失控的隱形熱量。", "Fat-loss eating out is not about perfection. It is about enough protein, controllable portions, and avoiding the biggest hidden-calorie traps."),
    rows: [
      { label: lt("先找蛋白質", "Find protein first"), value: lt("雞、魚、瘦牛、豆腐、蛋", "Chicken, fish, lean beef, tofu, eggs") },
      { label: lt("主食可調整", "Adjust carbs"), value: lt("白飯、地瓜、馬鈴薯依訓練量增減", "Rice, sweet potato, potato adjusted to training") },
      { label: lt("最常爆熱量", "Common calorie traps"), value: lt("油炸、濃醬、奶茶、堅果、額外淋油", "Fried foods, creamy sauces, milk tea, nuts, added oil") },
    ],
    tips: [
      lt("可以吃白飯；問題通常是飯量、油脂、醬料和飲料一起超標。", "Rice is fine; the issue is usually rice portion plus oil, sauce, and drinks."),
      lt("如果不知道熱量，先選清楚看得到原型的食物。", "When calories are unclear, choose foods whose ingredients are easier to see."),
      lt("一餐不完美沒關係，看一週平均比看單餐更準。", "One imperfect meal is fine; weekly averages matter more than one meal."),
    ],
    foodSlugs: ["chicken-breast", "lean-beef", "salmon", "tofu", "egg", "cooked-rice", "sweet-potato", "broccoli", "olive-oil", "sweetened-milk-tea"],
  },
];

export function foodGuideBySlug(slug: string) {
  return foodGuides.find((guide) => guide.slug === slug);
}

export function foodGuideText(value: LText, lang: Lang) {
  return lang === "en" ? value.en : localizeText(value.zh, lang);
}
