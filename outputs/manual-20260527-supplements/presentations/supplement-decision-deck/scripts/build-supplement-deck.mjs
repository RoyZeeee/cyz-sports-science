import fs from "node:fs";
import path from "node:path";
import { Canvas } from "/Users/roy/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/node_modules/skia-canvas/lib/index.mjs";
import * as art from "/Users/roy/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/artifact_tool.mjs";

const OUT = "/Users/roy/Documents/Codex/2026-05-27/karpathy-442a6bf555914893e9891c11519de94f-https-gist-github-com/outputs/manual-20260527-supplements/presentations/supplement-decision-deck/output";
const PREVIEW = "/Users/roy/Documents/Codex/2026-05-27/karpathy-442a6bf555914893e9891c11519de94f-https-gist-github-com/outputs/manual-20260527-supplements/presentations/supplement-decision-deck/preview";
const W = 1280;
const H = 720;
const C = {
  bg: "#F7FAF8",
  ink: "#16231E",
  muted: "#5B6B63",
  line: "#D8E1DB",
  panel: "#EEF5F1",
  white: "#FFFFFF",
  green: "#1F7A4D",
  blue: "#2563A8",
  amber: "#B7791F",
  red: "#A94438",
  black: "#0B1210",
};

function fixed(v) { return art.fixed(v); }
function textStyle(size, color = C.ink, bold = false) {
  return { fontSize: size, color, bold, typeface: "Aptos" };
}
function t(value, left, top, width, height, style = {}, name = "") {
  return art.text(value, {
    name,
    position: { left, top },
    width: fixed(width),
    height: fixed(height),
    style: { ...textStyle(22), ...style, wrap: "square", autoFit: "shrink" },
  });
}
function rect(left, top, width, height, fill, line = "none", radius = 0) {
  const config = {
    geometry: "rect",
    position: { left, top },
    width: fixed(width),
    height: fixed(height),
    fill,
    borderRadius: radius,
  };
  if (line && line !== "none") config.line = art.stroke(line);
  return art.shape(config);
}
function pill(label, left, top, color, width = 126) {
  return [
    rect(left, top, width, 30, `${color}22`, `${color} 1px`, 6),
    t(label, left + 10, top + 5, width - 20, 20, textStyle(14, color, true)),
  ];
}
function slideBase(title, kicker, refs = [], accent = C.green) {
  const refText = refs.map((r, i) => `${i + 1}. ${r}`).join("\n\n");
  return [
    rect(0, 0, W, H, C.bg),
    rect(0, 0, 16, H, accent),
    t(kicker, 48, 34, 760, 24, textStyle(14, accent, true)),
    t(title, 48, 62, 770, 54, textStyle(34, C.ink, true)),
    rect(905, 0, 375, H, C.panel),
    t("文獻來源", 938, 42, 250, 30, textStyle(19, C.ink, true)),
    t(refText, 938, 84, 300, 560, textStyle(13.2, C.muted, false)),
  ];
}
function evidenceBadge(level, left, top, color) {
  return [
    rect(left, top, 52, 52, color, "none", 8),
    t(level, left, top + 8, 52, 30, textStyle(28, "#FFFFFF", true)),
    t("證據", left, top + 35, 52, 14, textStyle(10, "#FFFFFF", true)),
  ];
}
function bulletList(items, left, top, width, color = C.ink, size = 18, gap = 34) {
  const out = [];
  items.forEach((item, i) => {
    out.push(rect(left, top + i * gap + 7, 7, 7, color, "none", 3));
    out.push(t(item, left + 18, top + i * gap, width - 18, gap - 2, textStyle(size, color, false)));
  });
  return out;
}
function twoColSlide({ title, subtitle, level, accent, role, mechanism, suitable, unsuitable, notes, refs }) {
  const nodes = slideBase(title, subtitle, refs, accent);
  nodes.push(...evidenceBadge(level, 804, 56, accent));
  nodes.push(t(role, 48, 126, 800, 42, textStyle(19, C.muted, false)));
  nodes.push(rect(48, 174, 804, 38, "#F5FAF7", `${C.line} 1px`, 8));
  nodes.push(t("作用原理", 70, 184, 90, 18, textStyle(15, accent, true)));
  nodes.push(t(mechanism, 158, 181, 670, 22, textStyle(16, C.ink, false)));
  nodes.push(rect(48, 226, 390, 284, C.white, `${C.line} 1px`, 8));
  nodes.push(rect(462, 226, 390, 284, C.white, `${C.line} 1px`, 8));
  nodes.push(t("適用人群 / 情境", 72, 248, 300, 28, textStyle(22, C.green, true)));
  nodes.push(t("不適用 / 慎用", 486, 248, 300, 28, textStyle(22, C.red, true)));
  nodes.push(...bulletList(suitable, 74, 298, 330, C.ink, 17, 42));
  nodes.push(...bulletList(unsuitable, 488, 298, 330, C.ink, 17, 42));
  nodes.push(rect(48, 540, 804, 92, "#FFFDF5", `${C.line} 1px`, 8));
  nodes.push(t("講法", 70, 559, 70, 24, textStyle(17, C.amber, true)));
  nodes.push(t(notes, 136, 558, 686, 48, textStyle(17, C.ink, false)));
  return nodes;
}
function matrixSlide() {
  const refs = [
    "IOC consensus statement, Br J Sports Med, 2018, PMCID: PMC5867441",
    "AIS Sports Supplement Framework / Group A, Australian Institute of Sport",
    "ISSN position stands: creatine, caffeine, omega-3, beta-alanine, sodium bicarbonate",
  ];
  const nodes = slideBase("先用證據等級，而不是用行銷熱度", "補劑簡報｜決策框架", refs, C.blue);
  const rows = [
    ["A", "主力補劑", "肌酸、蛋白粉、咖啡因、硝酸鹽、beta-alanine、碳酸氫鈉", "可做主內容"],
    ["B", "情境補劑", "omega-3、citrulline、HMB、tart cherry/polyphenols", "要講族群與目的"],
    ["C", "謹慎補劑", "glutamine、GABA、一般抗氧化補劑", "適合做避坑內容"],
    ["D", "不建議包裝", "宣稱過強、成分不明、多成分刺激型產品", "高風險/低可信"],
  ];
  let y = 150;
  rows.forEach((r, i) => {
    const color = [C.green, C.blue, C.amber, C.red][i];
    nodes.push(rect(52, y, 795, 86, C.white, `${C.line} 1px`, 8));
    nodes.push(...evidenceBadge(r[0], 74, y + 17, color));
    nodes.push(t(r[1], 150, y + 18, 170, 26, textStyle(22, C.ink, true)));
    nodes.push(t(r[2], 324, y + 18, 360, 42, textStyle(16, C.muted, false)));
    nodes.push(t(r[3], 700, y + 25, 120, 28, textStyle(16, color, true)));
    y += 104;
  });
  nodes.push(t("商業化原則：賣判斷框架，不賣「神效承諾」。", 70, 590, 760, 34, textStyle(24, C.ink, true)));
  return nodes;
}
function sourceVerificationSlide() {
  const refs = [
    "PubMed / PMC records were checked for PMID, PMCID or DOI traceability",
    "NIH Office of Dietary Supplements pages were used for zinc and multivitamin safety",
    "AIS / IOC / ISSN / ACSM were prioritized for consensus-level sport nutrition guidance",
  ];
  const nodes = slideBase("來源核對：只保留可追溯文獻", "補劑簡報｜文獻真實性", refs, C.blue);
  nodes.push(rect(48, 140, 806, 430, C.white, `${C.line} 1px`, 8));
  nodes.push(t("已核對來源類型", 74, 162, 250, 28, textStyle(24, C.ink, true)));
  nodes.push(...bulletList([
    "PubMed / PMC：有 PMID、PMCID 或 DOI 可回查",
    "官方機構：NIH ODS、AIS、IOC、ACSM",
    "學會立場聲明：ISSN position stand",
    "刪除或替換：無法穩定追溯的年份、期刊或泛稱引用",
  ], 80, 218, 690, C.ink, 18, 42));
  nodes.push(rect(76, 402, 726, 1, C.line));
  nodes.push(t("新增微量營養素引用", 74, 428, 250, 26, textStyle(22, C.ink, true)));
  nodes.push(t("鋅片：NIH ODS Zinc Fact Sheet、IOC supplement consensus、AIS Group A / zinc。", 80, 468, 700, 28, textStyle(17, C.muted, false)));
  nodes.push(t("複合維生素：NIH ODS Multivitamin/mineral Fact Sheet、IOC supplement consensus、AIS framework。", 80, 506, 700, 28, textStyle(17, C.muted, false)));
  nodes.push(t("使用提醒：PPT 內的來源文字刻意保留 PMID / PMCID / DOI / 官方頁名稱，方便你未來整理成知識庫。", 62, 610, 760, 32, textStyle(20, C.blue, true)));
  return nodes;
}

const slides = [
  {
    nodes: [
      rect(0, 0, W, H, C.bg),
      rect(0, 0, W, 720, "linear(135deg, #F7FAF8 0%, #E7F2EC 58%, #F9F4E6 100%)"),
      rect(54, 64, 720, 6, C.green),
      t("SPORTS NUTRITION", 56, 90, 420, 26, textStyle(15, C.green, true)),
      t("補劑決策簡報", 54, 130, 700, 70, textStyle(48, C.ink, true)),
      t("適用人群、不適用人群、核心用途與文獻來源", 58, 214, 650, 44, textStyle(25, C.muted, false)),
      rect(54, 326, 340, 122, C.white, `${C.line} 1px`, 8),
      t("設計用途", 80, 350, 200, 28, textStyle(22, C.ink, true)),
      t("知識博主、課程、付費資訊產品、補劑避坑內容", 80, 388, 270, 42, textStyle(18, C.muted, false)),
      rect(428, 326, 340, 122, C.white, `${C.line} 1px`, 8),
      t("證據優先", 454, 350, 200, 28, textStyle(22, C.ink, true)),
      t("優先採用 IOC / AIS / ISSN / ACSM / meta-analysis", 454, 388, 272, 42, textStyle(18, C.muted, false)),
      rect(830, 0, 450, H, C.ink),
      t("一句話定位", 870, 92, 280, 26, textStyle(20, "#B7E2CD", true)),
      t("補劑不是地基；訓練、飲食、睡眠才是。補劑只在對的情境放大結果。", 870, 142, 330, 140, textStyle(30, "#FFFFFF", true)),
      t("Version 2026-05-27", 870, 628, 240, 22, textStyle(15, "#BFD0C8", false)),
    ],
  },
  { nodes: matrixSlide() },
  { nodes: sourceVerificationSlide() },
  {
    nodes: [
      ...slideBase("補劑總覽：先問目的，再問產品", "補劑簡報｜快速地圖", [
        "AIS Group A: supported for specific sport situations",
        "IOC consensus 2018: supplement use must be scenario-based",
        "ISSN position stands: ingredient-specific evidence",
      ], C.green),
      rect(48, 140, 806, 450, C.white, `${C.line} 1px`, 8),
      t("目的", 75, 162, 110, 26, textStyle(18, C.muted, true)),
      t("優先補劑", 248, 162, 170, 26, textStyle(18, C.muted, true)),
      t("最適合人群", 500, 162, 220, 26, textStyle(18, C.muted, true)),
      ...[
        ["增肌/力量", "肌酸、蛋白粉", "抗阻訓練者、蛋白不足者、素食者、老年人"],
        ["耐力/高強度", "咖啡因、硝酸鹽、beta-alanine、碳酸氫鈉", "耐力、格鬥、球類、反覆衝刺"],
        ["恢復/健康", "omega-3、tart cherry、多酚", "低魚類攝取、高訓練量、比賽密集者"],
        ["營養缺口", "鋅、維生素D、複合維生素", "限制飲食、熱量赤字、素食、飲食不規律"],
        ["睡眠/壓力", "GABA、鎂、L-theanine", "睡眠差或壓力高者，但證據較弱"],
        ["免疫/腸道", "益生菌、glutamine", "腸胃症狀、旅行、極高壓力或特殊族群"],
      ].flatMap((r, i) => {
        const y = 208 + i * 60;
        return [
          rect(70, y - 10, 754, 1, C.line),
          t(r[0], 75, y, 150, 30, textStyle(18, C.ink, true)),
          t(r[1], 248, y, 220, 36, textStyle(16, C.blue, true)),
          t(r[2], 500, y, 288, 36, textStyle(15, C.muted, false)),
        ];
      }),
      t("最容易賣錯：把 C 級補劑講成 A 級，把 marker 改善講成表現提升。", 58, 620, 760, 32, textStyle(22, C.red, true)),
    ],
  },
  {
    nodes: twoColSlide({
      title: "肌酸 Creatine Monohydrate",
      subtitle: "A 級｜力量與增肌最值得優先講",
      level: "A",
      accent: C.green,
      role: "核心用途：高強度輸出、力量、瘦體重/肌肉量、抗阻訓練適應。常見策略：3-5 g/day；或 loading 20 g/day 5-7 天後維持。",
      mechanism: "增加肌肉 phosphocreatine 儲備，幫助短時間高強度時更快再合成 ATP。",
      suitable: ["規律抗阻訓練者", "爆發力/衝刺/球類運動", "素食或肌酸攝取較低者", "中老年肌力與功能維持"],
      unsuitable: ["腎臟疾病或腎功能異常者先問醫師", "需短期嚴格控體重者慎用", "懷孕、青少年、用藥族群需專業評估", "期待『不訓練也增肌』者"],
      notes: "可作主力產品內容。重點是安全性、劑量、體重上升多為水分/瘦體重，不是傷腎神話。",
      refs: [
        "Kreider et al. ISSN creatine position stand, JISSN, 2017. PMCID: PMC5469049",
        "IOC consensus statement on dietary supplements, BJSM, 2018. PMCID: PMC5867441",
        "AIS Group A supplement framework: creatine listed for specific performance uses",
      ],
    }),
  },
  {
    nodes: twoColSlide({
      title: "蛋白粉 / EAA / Whey",
      subtitle: "A 級｜先達到每日總量，再談 timing",
      level: "A",
      accent: C.green,
      role: "核心用途：肌肥大、恢復、維持瘦體重。多數運動者常用目標約 1.4-2.0 g/kg/day；熱量赤字或高訓練量可更情境化。",
      mechanism: "提供 EAA / leucine 作為肌肉蛋白質合成原料與訊號，支持修復與生長。",
      suitable: ["蛋白質攝取不足者", "增肌/減脂期抗阻訓練者", "忙碌、食物攝取不方便者", "老年或食慾較低者"],
      unsuitable: ["每日蛋白已充足者未必需要粉", "嚴重腎臟疾病需醫療指導", "乳糖不耐或乳清過敏者需換來源", "把 BCAA 當完整蛋白替代者"],
      notes: "內容主軸：蛋白粉是工具，不是魔法。先教會讀者算總量，再談每餐分配與訓練前後。",
      refs: [
        "Campbell et al. ISSN protein and exercise position stand, JISSN, 2017. DOI: 10.1186/s12970-017-0177-8",
        "Antonio et al. Protein supplementation misconceptions, 2024. PMCID: PMC11022925",
        "Casuso & Goossens protein timing meta-analysis, 2025. PMID: 40647175",
      ],
    }),
  },
  {
    nodes: twoColSlide({
      title: "咖啡因 Caffeine",
      subtitle: "A 級｜急性表現補劑，但要付睡眠成本",
      level: "A",
      accent: C.blue,
      role: "核心用途：耐力、力量耐力、衝刺、警覺、睡眠不足情境下的認知與表現。常見劑量 3-6 mg/kg，運動前約 60 分鐘。",
      mechanism: "拮抗 adenosine receptor，提升中樞警覺、降低主觀疲勞並改善輸出意願。",
      suitable: ["耐力與球類運動員", "HIIT / 反覆衝刺訓練", "比賽日需要提升警覺者", "對咖啡因反應良好者"],
      unsuitable: ["焦慮、心悸、失眠者慎用", "下午/晚上訓練且睡眠重要者", "孕期、高血壓或心律問題需專業評估", "對刺激物敏感者"],
      notes: "很適合做『有效但不能亂用』內容。賣點不是更猛，而是劑量、時間、個體差異與睡眠取捨。",
      refs: [
        "Guest et al. ISSN caffeine and exercise performance, 2021. PMCID: PMC7777221",
        "IOC consensus statement, BJSM, 2018. PMCID: PMC5867441",
        "AIS Group A supplement framework: caffeine",
      ],
    }),
  },
  {
    nodes: twoColSlide({
      title: "硝酸鹽 / 甜菜根汁",
      subtitle: "A-B 級｜運動經濟性與血管-代謝效率",
      level: "A/B",
      accent: C.blue,
      role: "核心用途：nitrate-nitrite-NO pathway，降低亞最大運動耗氧成本，可能改善耐力、高強度耐受與血壓/redox 指標。",
      mechanism: "nitrate 轉為 nitrite / nitric oxide，影響血管舒張、氧氣利用與運動經濟性。",
      suitable: ["耐力跑、單車、划船等", "中高強度持續或間歇項目", "非菁英或反應較明顯者", "希望以食物優先補充者"],
      unsuitable: ["低血壓或相關用藥者慎用", "使用抗菌漱口水者可能削弱效果", "腸胃敏感者需測試耐受", "期待所有 time trial 都顯著進步者"],
      notes: "甜菜根汁不是『泵感神水』。主線應講 NO pathway、運動經濟性、劑量標準化與個體反應。",
      refs: [
        "Jones dietary nitrate supplementation review, Sports Med, 2014. PMID: 24791915 / PMCID: PMC4008816",
        "Ponce-Davila et al. beetroot juice oxidative stress meta-analysis, 2026. PMID: 41642915",
        "AIS Group A supplement framework: nitrate / beetroot juice",
      ],
    }),
  },
  {
    nodes: twoColSlide({
      title: "β-丙胺酸 Beta-alanine",
      subtitle: "A-B 級｜高強度酸鹼緩衝，不是一般增肌必需",
      level: "A/B",
      accent: C.amber,
      role: "核心用途：提高肌肉 carnosine，增強肌內 H+ 緩衝能力。較適合 1-4 分鐘高強度、反覆衝刺、格鬥、游泳/划船短中距離。",
      mechanism: "β-丙胺酸是 carnosine 合成的限制性前驅物；carnosine 可在肌肉內緩衝 H+。",
      suitable: ["HIIT、格鬥、球類反覆衝刺", "1-4 分鐘高強度輸出項目", "能接受皮膚刺癢/麻感者", "願意連續補充數週而非只賽前吃者"],
      unsuitable: ["純最大肌力或低強度長耐力不優先", "對 paresthesia 刺癢感很敏感者", "期待立即增肌者", "把它誤認為碳酸氫鈉者"],
      notes: "β-丙胺酸不是碳酸氫鈉。它是提高肌內 carnosine 的補劑，效果偏長期累積，重點是運動項目與補充週期。",
      refs: [
        "ISSN beta-alanine position stand, JISSN, 2015. DOI: 10.1186/s12970-015-0090-y",
        "IOC consensus statement, BJSM, 2018. PMCID: PMC5867441",
        "AIS Group A supplement framework: beta-alanine",
      ],
    }),
  },
  {
    nodes: twoColSlide({
      title: "碳酸氫鈉 Sodium Bicarbonate",
      subtitle: "A-B 級｜細胞外緩衝，效果與腸胃耐受綁在一起",
      level: "A/B",
      accent: C.amber,
      role: "核心用途：提高血液 bicarbonate，增強細胞外 H+ 緩衝能力。較適合反覆高強度、格鬥、游泳/划船短中距離等項目。",
      mechanism: "提高細胞外 bicarbonate 與 pH 緩衝容量，促進 H+ 外排，延後酸中毒相關疲勞。",
      suitable: ["1-7 分鐘高強度或反覆衝刺項目", "格鬥、游泳、划船、場上球類運動", "已在訓練日測試腸胃耐受者", "能安排賽前劑量與分次攝取者"],
      unsuitable: ["腸胃敏感或賽前容易腹瀉者", "限鈉、高血壓、腎臟疾病者慎用", "未測試就比賽日第一次使用者", "期待它像肌酸一樣長期增肌者"],
      notes: "碳酸氫鈉和 β-丙胺酸同屬酸鹼緩衝策略，但位置不同：一個偏細胞外緩衝，一個偏肌內 carnosine。",
      refs: [
        "ISSN sodium bicarbonate position stand, JISSN, 2021. DOI: 10.1186/s12970-021-00458-w",
        "IOC consensus statement, BJSM, 2018. PMCID: PMC5867441",
        "AIS Group A supplement framework: sodium bicarbonate",
      ],
    }),
  },
  {
    nodes: twoColSlide({
      title: "Omega-3 EPA/DHA",
      subtitle: "B 級｜狀態管理、恢復與長期健康",
      level: "B",
      accent: C.blue,
      role: "核心用途：EPA/DHA 狀態、心血管健康、發炎與恢復、肌肉功能、睡眠/免疫訊號。更像長期狀態補劑，不是急性增能。",
      mechanism: "EPA/DHA 進入細胞膜並調節發炎介質、血管功能與神經肌肉/恢復相關訊號。",
      suitable: ["魚類攝取少或 O3i 偏低者", "高訓練量/恢復壓力高者", "耐力或接觸運動員", "重視心血管與長期健康者"],
      unsuitable: ["魚類/海鮮過敏者", "抗凝血藥、手術前後需醫療評估", "高劑量且有心房顫動風險者慎用", "期待立即提升力量者"],
      notes: "適合做成『狀態檢測＋場景化劑量』內容。不要把 omega-3 包裝成所有運動表現的萬用補劑。",
      refs: [
        "Jager et al. ISSN omega-3 position stand, 2025. PMCID: PMC11737053",
        "Heileson et al. omega-3 index in athletes, 2025. Journal of Exercise and Nutrition",
        "Fernandez-Lazaro et al. omega-3 recovery systematic review, 2024. PMCID: PMC11243702",
      ],
    }),
  },
  {
    nodes: twoColSlide({
      title: "鋅片 Zinc",
      subtitle: "B-C 級｜缺乏時重要，足量時不該硬補",
      level: "B/C",
      accent: C.amber,
      role: "核心用途：免疫功能、蛋白質合成、傷口癒合、睪固酮/生殖健康與多種酵素反應。對缺乏者重要，對足量者未必提升表現。",
      mechanism: "作為多種酵素與轉錄因子輔因子，參與免疫、細胞分裂、蛋白合成與抗氧化防禦。",
      suitable: ["飲食鋅攝取不足或確認缺乏者", "素食/低肉類、熱量赤字或限制飲食者", "高流汗量、消化吸收差或免疫壓力高者", "需要短期補足營養缺口者"],
      unsuitable: ["鋅攝取充足者不需長期高劑量", "長期高劑量可能造成銅缺乏", "抗生素/penicillamine 需錯開或詢問專業", "把鋅當作直接增肌神器者"],
      notes: "適合做『缺乏補足』內容。成人 UL 常用 40 mg/day 作安全提醒；長期補充要看總攝取量與銅。",
      refs: [
        "NIH ODS Zinc Fact Sheet for Health Professionals: adult UL 40 mg/day and medication interactions",
        "IOC consensus statement, BJSM, 2018. PMCID: PMC5867441",
        "AIS Supplement Framework / Group A: zinc used for specific deficiency-support scenarios",
      ],
    }),
  },
  {
    nodes: twoColSlide({
      title: "複合維生素 / 礦物質",
      subtitle: "B-C 級｜保險型補缺口，不是表現補劑",
      level: "B/C",
      accent: C.amber,
      role: "核心用途：補足飲食缺口，特別是熱量赤字、限制飲食、旅行/賽季、食慾差或蔬果/全穀/動物性食物不足時。",
      mechanism: "提供多種維生素與礦物質，作為能量代謝、造血、免疫、骨骼與抗氧化系統的輔因子。",
      suitable: ["飲食不規律、熱量赤字或備賽減重者", "素食、低蔬果、低乳製品或食物多樣性不足者", "旅行、賽季、食慾低、難以穩定飲食者", "已知缺乏但尚未能用飲食完全修正者"],
      unsuitable: ["飲食均衡且無缺乏者期待提升表現", "同時疊加多款高劑量產品造成過量", "含鐵配方不適合所有男性或非缺鐵者", "用它取代蔬果、蛋白質與總熱量管理"],
      notes: "適合賣成『保險型基礎補充』，不要講成增肌或燃脂。重點是缺什麼補什麼，並避免重複攝取。",
      refs: [
        "NIH ODS Multivitamin/mineral Fact Sheet for Health Professionals",
        "IOC consensus statement, BJSM, 2018. PMCID: PMC5867441",
        "AIS Supplement Framework: multivitamin/mineral support should be scenario-based",
      ],
    }),
  },
  {
    nodes: twoColSlide({
      title: "維生素 D",
      subtitle: "B 級｜先檢測缺乏，再談表現",
      level: "B",
      accent: C.amber,
      role: "核心用途：骨骼健康、免疫、肌肉功能與低日照/室內訓練族群的缺乏修正。缺乏者優先，足量者不應期待神效。",
      mechanism: "透過 25(OH)D 狀態影響鈣磷代謝、骨骼重塑、免疫調節與肌肉功能相關訊號。",
      suitable: ["室內訓練、低日照或冬季訓練者", "抽血顯示 25(OH)D 不足/缺乏者", "骨密度、壓力性骨折風險較高者", "膚色較深、遮陽多或飲食攝取低者"],
      unsuitable: ["未檢測就長期高劑量者", "高血鈣、腎結石或腎臟疾病者需醫療評估", "已足量者期待直接增肌/增力者", "同時疊加多款含 D 產品者"],
      notes: "適合做『檢測導向』內容：先看 25(OH)D，再決定劑量與週期。不要把維生素 D 講成萬用表現補劑。",
      refs: [
        "Effects of Vitamin D Supplementation in Elite Athletes systematic review, 2024. PMID: 38188620 / PMCID: PMC10768611",
        "Vitamin D strength and power meta-analysis in athletes, 2023. PMID: 37841405",
        "IOC consensus statement, BJSM, 2018. PMCID: PMC5867441",
      ],
    }),
  },
  {
    nodes: twoColSlide({
      title: "益生菌 Probiotics",
      subtitle: "B 級｜腸胃與免疫情境，比增肌更合理",
      level: "B",
      accent: C.blue,
      role: "核心用途：腸道症狀、旅行/比賽期、上呼吸道感染風險與高訓練壓力下的健康支持。效果高度依賴菌株與劑量。",
      mechanism: "透過腸道菌相、屏障功能、短鏈脂肪酸與免疫訊號，影響腸胃耐受與感染風險。",
      suitable: ["腸胃敏感或運動中腸胃不適者", "旅行、比賽密集或飲食環境變動者", "高訓練壓力且常感冒者可評估", "願意記錄菌株、劑量與反應者"],
      unsuitable: ["嚴重免疫低下或重症者自行使用", "期待直接增肌或燃脂者", "不知道菌株只看 CFU 數字者", "吃幾天沒感覺就頻繁換產品者"],
      notes: "益生菌的關鍵不是『越多越好』，而是菌株、劑量、週期與目標症狀。適合做成腸胃/免疫管理內容。",
      refs: [
        "ISSN position stand: Probiotics, JISSN, 2019. DOI: 10.1186/s12970-019-0329-0",
        "IOC consensus statement, BJSM, 2018. PMCID: PMC5867441",
        "AIS Supplement Framework: probiotics used for targeted gut/immune support contexts",
      ],
    }),
  },
  {
    nodes: twoColSlide({
      title: "薑黃素 Curcumin",
      subtitle: "B-C 級｜恢復/痠痛可談，但不是訓練替代品",
      level: "B/C",
      accent: C.amber,
      role: "核心用途：DOMS、運動後發炎與肌肉損傷指標管理。較適合恢復壓力高、比賽密集或痠痛明顯者。",
      mechanism: "透過 NF-kB、COX-2、氧化壓力與發炎介質調節，可能降低運動後痠痛與部分損傷指標。",
      suitable: ["高訓練量或 DOMS 明顯者", "密集比賽期想降低恢復壓力者", "偏好植物多酚類恢復策略者", "可接受吸收率配方差異者"],
      unsuitable: ["抗凝血藥、手術前後或膽囊問題者慎用", "胃食道逆流或腸胃敏感者需測試", "用它掩蓋過度訓練與睡眠不足者", "期待直接增肌或大幅提升力量者"],
      notes: "可定位成恢復輔助。內容上要提醒：抗發炎不是永遠越強越好，訓練適應仍需要正常壓力訊號。",
      refs: [
        "Curcumin, DOMS and inflammation dose-response meta-analysis, 2022. PMID: 35574627",
        "Curcumin and exercise-induced muscle damage meta-analysis, 2023. PMID: 37408367",
        "Curcumin intake and EIMD in athletes systematic review, 2024. PMID: 39623590",
      ],
    }),
  },
  {
    nodes: twoColSlide({
      title: "輔酶 Q10 CoQ10",
      subtitle: "C-B 級｜粒線體/抗氧化概念強，表現證據不穩",
      level: "C/B",
      accent: C.amber,
      role: "核心用途：粒線體電子傳遞、抗氧化狀態、疲勞與運動後氧化壓力。對表現提升的結果目前較不一致。",
      mechanism: "作為粒線體電子傳遞鏈成分與脂溶性抗氧化物，參與 ATP 生成與膜脂質抗氧化保護。",
      suitable: ["高氧化壓力或恢復需求高者可評估", "年齡較高或飲食/健康狀態需支持者", "想做疲勞管理但能接受效果不穩者", "可選擇標準化劑量並追蹤反應者"],
      unsuitable: ["期待明確急性增能者", "已使用抗凝血藥者需詢問專業", "把 CoQ10 當減脂或增肌主力者", "預算有限且基礎補劑未到位者"],
      notes: "適合放在進階/健康狀態內容，不建議當 A 級表現補劑賣。講法要保守：可能改善指標，表現結果不穩。",
      refs: [
        "Coenzyme Q10 supplementation in athletes systematic review, 2023. PMID: 37764774",
        "CoQ10 EIMD/performance/oxidative stress GRADE meta-analysis, 2024. PMID: 38479900",
        "CoQ10 exercise performance systematic review/meta-analysis, 2026. PMID: 41457257",
      ],
    }),
  },
  {
    nodes: twoColSlide({
      title: "氮泵 Pre-workout / Pump",
      subtitle: "B-C 級｜先看成分，不要只看泵感",
      level: "B/C",
      accent: C.red,
      role: "核心用途：訓練前主觀能量、泵感、專注與局部血流。常見成分含 citrulline、arginine、nitrate、caffeine、beta-alanine。",
      mechanism: "多以 NO pathway、刺激物與酸鹼緩衝組合，影響血流、警覺、主觀用力與訓練容量。",
      suitable: ["需要訓練前專注與主觀動力者", "已能看懂成分劑量與刺激物含量者", "想短期提升泵感/訓練體感者", "已確認睡眠不被咖啡因影響者"],
      unsuitable: ["心悸、焦慮、高血壓或刺激物敏感者", "晚上訓練且睡眠容易受影響者", "成分不透明或 proprietary blend 產品", "運動員未查第三方檢測與禁藥風險者"],
      notes: "氮泵是產品類型，不是單一補劑。最值得教的是成分拆解、劑量、咖啡因總量與睡眠/心血管風險。",
      refs: [
        "Multi-ingredient pre-workout supplements review, JISSN, 2018. DOI: 10.1186/s12970-018-0247-6",
        "ISSN caffeine position stand, 2021. PMCID: PMC7777221",
        "IOC consensus statement, BJSM, 2018. PMCID: PMC5867441",
      ],
    }),
  },
  {
    nodes: twoColSlide({
      title: "精氨酸 L-Arginine",
      subtitle: "B-C 級｜NO 相關，但常被 citrulline 搶走位置",
      level: "B/C",
      accent: C.amber,
      role: "核心用途：NO 合成底物、血流/泵感與部分有氧或無氧表現。急性研究常用約 0.15 g/kg，運動前 60-90 分鐘。",
      mechanism: "作為 nitric oxide synthase 的底物，轉化為 NO，影響血管舒張、血流與代謝環境。",
      suitable: ["想測試 NO/泵感反應者", "不適合或不想用 citrulline 者", "有氧或高強度訓練情境可試用", "能接受腸胃耐受測試者"],
      unsuitable: ["低血壓或血管擴張/降壓藥使用者", "皰疹易復發者需謹慎", "腸胃敏感或高劑量不耐者", "期待它優於 citrulline 或 nitrate 的所有情境者"],
      notes: "精氨酸不是不能談，但要放在 NO 補劑比較裡。多數內容可用『citrulline / nitrate / arginine 差異』切入。",
      refs: [
        "Arginine athletic performance systematic review/meta-analysis, Nutrients, 2020. PMID: 32370176 / PMCID: PMC7282262",
        "IOC consensus statement, BJSM, 2018. PMCID: PMC5867441",
        "AIS Supplement Framework: compare NO-related ingredients by evidence and context",
      ],
    }),
  },
  {
    nodes: twoColSlide({
      title: "Citrulline / HMB / 多酚類",
      subtitle: "B-C 級｜可談，但一定要加情境",
      level: "B/C",
      accent: C.amber,
      role: "核心用途：citrulline 偏 NO/血流與高強度表現；HMB 偏老年、初學者或熱量赤字；tart cherry/polyphenols 偏恢復、DOMS 與抗氧化。",
      mechanism: "citrulline 提升 arginine/NO；HMB 影響蛋白分解/合成；多酚調節氧化壓力與發炎。",
      suitable: ["訓練者想優化泵感/血流", "老年、初學者、熱量赤字者可評估 HMB", "密集比賽或 DOMS 明顯者", "偏好食物型恢復策略者"],
      unsuitable: ["訓練與蛋白不足卻先買 HMB 者", "低血壓或硝酸鹽/血管用藥者慎用 citrulline", "把抗氧化當成越多越好者", "糖分控制者慎選果汁型產品"],
      notes: "這一組適合做『進階補劑』，但要清楚說：它們不是第一順位，且效果比肌酸、蛋白、咖啡因更依賴情境。",
      refs: [
        "Effects of citrulline on endurance performance systematic review/meta-analysis, 2023. PMCID: PMC10167868",
        "ISSN HMB position stand, JISSN, 2013. PMID: 23374455 / DOI: 10.1186/1550-2783-10-6",
        "Kuehl et al. tart cherry juice muscle pain RCT, JISSN, 2010. PMCID: PMC2874510",
      ],
    }),
  },
  {
    nodes: twoColSlide({
      title: "Glutamine / GABA",
      subtitle: "C 級｜適合避坑，不適合主打神效",
      level: "C",
      accent: C.red,
      role: "核心用途：glutamine 偏腸道/免疫/高壓力情境；GABA 偏睡眠/壓力，少量研究連到 GH 或瘦體重，但證據有限。",
      mechanism: "glutamine 支援腸道/免疫與氮代謝；GABA 可能影響放鬆、壓力與睡眠。",
      suitable: ["極高訓練壓力或腸胃壓力者可評估", "睡眠或壓力管理內容可謹慎談 GABA", "蛋白質不足者應先補蛋白", "喜歡科學避坑內容的受眾"],
      unsuitable: ["一般增肌者把 glutamine 當主補劑", "把 GABA=GH=必增肌 當銷售主張", "正在使用鎮靜安眠藥者自行疊加 GABA", "孕期、疾病、用藥族群自行嘗試"],
      notes: "這兩個很適合做反行銷內容：不是完全沒用，而是『適用範圍很窄、證據不能被放大』。",
      refs: [
        "Glutamine athletes systematic review/meta-analysis, Clinical Nutrition, 2019. DOI: 10.1016/j.clnu.2018.03.030",
        "Hepsomali et al. oral GABA stress/sleep systematic review, 2020. PMCID: PMC7527439",
        "GABA + whey resistance training RCT, 2019. PMCID: PMC6522239",
      ],
    }),
  },
  {
    nodes: [
      ...slideBase("補劑之外：恢復與抗阻訓練才是地基", "補劑簡報｜不要本末倒置", [
        "ACSM Progression Models in Resistance Training for Healthy Adults, 2009. PMID: 19204579",
        "ACSM simplified position stand PDF, 2009 MSSE 41(3):687-708",
        "ISSN protein and exercise; ISSN creatine position stand",
      ], C.green),
      rect(48, 140, 806, 390, C.white, `${C.line} 1px`, 8),
      t("增肌與恢復優先順序", 74, 164, 320, 32, textStyle(26, C.ink, true)),
      ...[
        ["1", "抗阻訓練", "漸進超負荷、足夠訓練量、接近力竭、長期一致性"],
        ["2", "能量與蛋白", "熱量、每日蛋白、餐次分配，先於補劑種類"],
        ["3", "睡眠與壓力", "恢復品質會決定訓練能不能持續累積"],
        ["4", "場景補劑", "肌酸、咖啡因、nitrate、omega-3 等只是在對的情境放大效果"],
      ].flatMap((r, i) => {
        const y = 220 + i * 72;
        return [
          rect(78, y, 38, 38, C.green, "none", 8),
          t(r[0], 90, y + 4, 16, 24, textStyle(21, "#FFFFFF", true)),
          t(r[1], 140, y - 2, 170, 28, textStyle(22, C.ink, true)),
          t(r[2], 314, y, 470, 42, textStyle(17, C.muted, false)),
        ];
      }),
      rect(48, 560, 806, 72, "#FFF3E6", `${C.line} 1px`, 8),
      t("內容金句", 70, 580, 100, 24, textStyle(17, C.amber, true)),
      t("補劑是放大器，不是替代品。沒有訓練、飲食、睡眠，補劑只是在放大混亂。", 166, 578, 650, 28, textStyle(20, C.ink, true)),
    ],
  },
  {
    nodes: [
      ...slideBase("做知識產品時，可信度就是護城河", "補劑簡報｜銷售與合規語言", [
        "IOC consensus: supplement risk includes contamination, mislabeling and inappropriate use",
        "AIS framework: supplement classification changes with evidence and context",
        "WADA / anti-doping risk: choose third-party tested products for athletes",
      ], C.red),
      rect(52, 148, 380, 380, C.white, `${C.line} 1px`, 8),
      t("可以說", 78, 172, 180, 30, textStyle(25, C.green, true)),
      ...bulletList([
        "「在這些情境可能有幫助」",
        "「證據強度為 A/B/C」",
        "「先確認訓練與飲食地基」",
        "「有疾病或用藥請問專業人員」",
      ], 80, 230, 300, C.ink, 18, 54),
      rect(472, 148, 380, 380, C.white, `${C.line} 1px`, 8),
      t("不要說", 498, 172, 180, 30, textStyle(25, C.red, true)),
      ...bulletList([
        "「保證增肌/燃脂/治療」",
        "「任何人都適合」",
        "「越高劑量越好」",
        "「有文獻 = 一定有效」",
      ], 500, 230, 300, C.ink, 18, 54),
      t("最好的產品不是替讀者買補劑，而是讓讀者知道什麼時候不用買。", 70, 585, 760, 36, textStyle(24, C.ink, true)),
    ],
  },
];

try {
  const deck = art.Presentation.create();
  slides.forEach((spec, index) => {
    const slide = deck.slides.add();
    try {
      slide.compose(art.layers({ width: fixed(W), height: fixed(H) }, spec.nodes));
    } catch (error) {
      throw new Error(`Slide ${index + 1} compose failed: ${error.message}`);
    }
  });

  const pptx = await art.PresentationFile.exportPptx(deck);
  const pptxPath = path.join(OUT, "sports-nutrition-supplement-decision-deck.pptx");
  fs.writeFileSync(pptxPath, Buffer.from(pptx.data));

  for (let i = 0; i < deck.slides.count; i++) {
    const slide = deck.slides.items[i];
    const canvas = new Canvas(W, H);
    const ctx = canvas.getContext("2d");
    await art.drawSlideToCtx(slide, null, ctx, [], null, null, null, null, null, null, { clearBeforeDraw: true });
    const png = await canvas.toBuffer("png");
    fs.writeFileSync(path.join(PREVIEW, `slide-${String(i + 1).padStart(2, "0")}.png`), png);
  }

  console.log(JSON.stringify({ pptxPath, slideCount: deck.slides.count, previewDir: PREVIEW }, null, 2));
} catch (error) {
  console.error("BUILD_FAILED:", error.message);
  process.exit(1);
}
