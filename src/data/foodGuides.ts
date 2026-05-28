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
  {
    slug: "chicken-vs-tuna",
    title: lt("雞胸 vs 鮪魚罐頭", "Chicken Breast vs Canned Tuna"),
    description: lt("比較雞胸肉和水煮鮪魚罐頭的蛋白質、脂肪、方便性、鈉含量和適合情境。", "Compare chicken breast and canned tuna by protein, fat, convenience, sodium, and use case."),
    intro: lt("雞胸和鮪魚都很適合補蛋白。差別不在誰絕對比較好，而是你需要備餐、外食、低脂，還是快速補缺口。", "Chicken and tuna are both useful protein sources. The real question is meal prep, eating out, low fat, or quick gap-filling."),
    rows: [
      { label: lt("蛋白質", "Protein"), value: lt("兩者都高；雞胸 100 g 約 31 g，鮪魚瀝乾 100 g 約 26 g", "Both are high; chicken is about 31 g per 100 g cooked, tuna about 26 g per 100 g drained") },
      { label: lt("方便性", "Convenience"), value: lt("雞胸適合備餐；鮪魚罐頭適合臨時補蛋白", "Chicken works well for meal prep; tuna is useful for last-minute protein") },
      { label: lt("注意事項", "Watch out"), value: lt("雞胸看烹調油；鮪魚看鈉含量和食用頻率", "Watch cooking oil for chicken; watch sodium and frequency for tuna") },
    ],
    tips: [
      lt("減脂期兩者都可用，重點是不要讓油、醬料和美乃滋把熱量拉高。", "Both work during fat loss; keep oil, sauces, and mayo from driving calories up."),
      lt("如果你很常吃罐頭，記得輪替蛋白來源，不要所有餐都靠同一種。", "If you eat canned foods often, rotate protein sources instead of relying on one item."),
      lt("增肌期雞胸太乾吃不下時，換成牛肉、鮭魚、豆腐或牛奶也可以。", "During gaining, if chicken is hard to eat, rotate beef, salmon, tofu, or milk."),
    ],
    foodSlugs: ["chicken-breast", "canned-tuna", "shrimp", "lean-beef", "tofu", "protein-shake"],
  },
  {
    slug: "rice-vs-sweet-potato",
    title: lt("白飯 vs 地瓜", "Rice vs Sweet Potato"),
    description: lt("比較白飯和地瓜在熱量、碳水、飽足感、訓練前後使用與減脂增肌情境的差異。", "Compare rice and sweet potato for calories, carbs, fullness, training timing, fat loss, and gaining."),
    intro: lt("白飯不是壞食物，地瓜也不是減脂神物。兩者都是碳水來源，差別主要在份量、飽足感、消化速度和你怎麼搭配蛋白質。", "Rice is not bad and sweet potato is not magic. Both are carb sources; portions, fullness, digestion, and meal pairing matter."),
    rows: [
      { label: lt("熱量和碳水", "Calories and carbs"), value: lt("熟白飯 100 g 約 130 kcal / 碳水 28 g；地瓜 100 g 約 85 kcal / 碳水 20 g", "Cooked rice 100 g is about 130 kcal / 28 g carbs; sweet potato 100 g is about 85 kcal / 20 g carbs") },
      { label: lt("減脂期", "Fat loss"), value: lt("地瓜常更有飽足感；白飯也可以吃，只要份量可控", "Sweet potato often feels more filling; rice is fine if portions are controlled") },
      { label: lt("訓練前後", "Around training"), value: lt("白飯和飯糰更方便快速補碳水；地瓜適合備餐和增加飽足感", "Rice and rice balls are convenient quick carbs; sweet potato is useful for meal prep and fullness") },
    ],
    tips: [
      lt("不要只看食物名稱，要看熟重、份量和同餐油脂。", "Do not judge by food name alone; check cooked weight, portion, and fat in the meal."),
      lt("增肌期吃不夠時，白飯通常比大量地瓜更容易補熱量。", "When gaining and under-eating, rice is often easier than large amounts of sweet potato."),
      lt("減脂期可以用地瓜或馬鈴薯提高飽足感，但仍要留蛋白質空間。", "During fat loss, sweet potato or potato can improve fullness, but leave room for protein."),
    ],
    foodSlugs: ["cooked-rice", "sweet-potato", "brown-rice", "potato", "rice-ball", "banana", "oats"],
  },
  {
    slug: "milk-vs-soy-milk",
    title: lt("牛奶 vs 豆漿", "Milk vs Soy Milk"),
    description: lt("比較牛奶、低脂牛奶和無糖豆漿在蛋白質、碳水、脂肪、便利性與適合族群上的差異。", "Compare milk, low-fat milk, and unsweetened soy milk by protein, carbs, fat, convenience, and who they fit."),
    intro: lt("牛奶和豆漿都能成為方便的蛋白來源。選哪個，通常取決於乳糖耐受、熱量需求、脂肪控制和你是否偏好植物性飲食。", "Milk and soy milk can both be convenient protein sources. The choice depends on lactose tolerance, calorie needs, fat control, and plant-based preference."),
    rows: [
      { label: lt("蛋白質", "Protein"), value: lt("250 ml 牛奶或無糖豆漿通常都約 8 g 蛋白質上下", "250 ml milk or unsweetened soy milk is usually around 8 g protein") },
      { label: lt("減脂期", "Fat loss"), value: lt("低脂牛奶或無糖豆漿比較好控制熱量；加糖飲品另算", "Low-fat milk or unsweetened soy milk is easier to fit; sweetened drinks are different") },
      { label: lt("腸胃耐受", "Tolerance"), value: lt("乳糖不耐者可選無糖豆漿或低乳糖產品", "People with lactose intolerance can choose soy milk or lactose-reduced options") },
    ],
    tips: [
      lt("看標籤時先看有沒有加糖，再看蛋白質和總熱量。", "Check added sugar first, then protein and total calories."),
      lt("增肌期牛奶很方便，但全脂版本會多帶脂肪和熱量。", "Milk is convenient during gaining, but whole milk adds more fat and calories."),
      lt("無糖豆漿適合植物性飲食，也適合早餐補一點蛋白。", "Unsweetened soy milk works for plant-based diets and breakfast protein."),
    ],
    foodSlugs: ["milk", "low-fat-milk", "soy-milk", "greek-yogurt", "tofu", "protein-shake"],
  },
  {
    slug: "protein-bar-worth-it",
    title: lt("蛋白棒值得買嗎？", "Are Protein Bars Worth It?"),
    description: lt("比較蛋白棒、蛋白飲、茶葉蛋和正餐食物，判斷蛋白棒什麼時候方便、什麼時候只是甜點。", "Compare protein bars, shakes, eggs, and whole foods to decide when protein bars are useful and when they are basically candy."),
    intro: lt("蛋白棒不是不能吃，但它不會因為叫蛋白棒就自動低熱量。它最適合當作趕時間的備案，而不是每天取代正餐。", "Protein bars are not bad, but the name does not make them low-calorie. They work best as backup food, not a daily replacement for real meals."),
    rows: [
      { label: lt("適合情境", "Best use"), value: lt("沒時間吃正餐、旅行、課間或訓練後臨時補蛋白", "No time for meals, travel, between classes, or quick post-training protein") },
      { label: lt("要看什麼", "What to check"), value: lt("熱量、蛋白質、糖、脂肪和糖醇耐受", "Calories, protein, sugar, fat, and sugar alcohol tolerance") },
      { label: lt("替代選擇", "Alternatives"), value: lt("茶葉蛋、蛋白飲、希臘優格、雞胸沙拉通常更像食物", "Tea eggs, protein shakes, Greek yogurt, and chicken salad often behave more like food") },
    ],
    tips: [
      lt("如果一條蛋白棒 250 kcal、蛋白只有 10 g，它比較像零食。", "If a bar has 250 kcal and only 10 g protein, it is closer to a snack."),
      lt("減脂期不要把蛋白棒當免費熱量；增肌期則可當方便補給。", "During fat loss, do not treat bars as free calories; during gaining, they can be convenient."),
      lt("腸胃容易脹氣的人，要注意糖醇和纖維添加。", "If you bloat easily, watch sugar alcohols and added fiber."),
    ],
    foodSlugs: ["protein-bar", "protein-shake", "tea-egg", "greek-yogurt", "chicken-salad", "egg"],
  },
  {
    slug: "eggs-per-day-guide",
    title: lt("一天可以吃幾顆蛋？", "How Many Eggs Per Day?"),
    description: lt("用蛋白質、脂肪、熱量、飽足感和個人健康情境，整理健身者一天吃蛋的判斷方式。", "Use protein, fat, calories, satiety, and personal health context to decide how eggs fit a lifter's day."),
    intro: lt("雞蛋便宜、方便、營養密度高，但它也有脂肪和熱量。一天幾顆蛋沒有單一答案，要看整天飲食和健康情境。", "Eggs are cheap, convenient, and nutrient-dense, but they still contain fat and calories. There is no universal number; the whole diet and health context matter."),
    rows: [
      { label: lt("營養直覺", "Nutrition intuition"), value: lt("1 顆蛋約 70 kcal、蛋白 6 g、脂肪 5 g", "One egg is about 70 kcal, 6 g protein, and 5 g fat") },
      { label: lt("健身用途", "Fitness use"), value: lt("早餐、便利商店補蛋白、減脂期增加飽足感", "Breakfast, convenience-store protein, and satiety during fat loss") },
      { label: lt("注意情境", "Watch context"), value: lt("血脂、醫囑、總脂肪攝取和同餐烹調油都要一起看", "Blood lipids, medical advice, total fat intake, and cooking oil all matter") },
    ],
    tips: [
      lt("如果只是想補蛋白，雞胸、豆腐、鮪魚、蛋白飲可能蛋白質更集中。", "If the goal is pure protein, chicken, tofu, tuna, or shakes are more protein-dense."),
      lt("茶葉蛋很方便，但鈉含量通常比白煮蛋高。", "Tea eggs are convenient, but usually higher in sodium than boiled eggs."),
      lt("有血脂或醫療限制時，不要用網路通則取代醫師或營養師建議。", "With lipid or medical restrictions, do not replace clinician advice with generic internet rules."),
    ],
    foodSlugs: ["egg", "tea-egg", "chicken-breast", "tofu", "canned-tuna", "protein-shake"],
  },
];

export function foodGuideBySlug(slug: string) {
  return foodGuides.find((guide) => guide.slug === slug);
}

export function foodGuideText(value: LText, lang: Lang) {
  return lang === "en" ? value.en : localizeText(value.zh, lang);
}
