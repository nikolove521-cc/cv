import fs from "node:fs/promises";
import { FileBlob, Presentation, PresentationFile } from "@oai/artifact-tool";

async function writeBlob(path, blob) {
  await fs.writeFile(path, new Uint8Array(await blob.arrayBuffer()));
}

async function main() {
  const outDir = "/Users/cxuan/Documents/New project/xhs-analysis-workspace/tmp";
  await fs.mkdir(outDir + "/preview", { recursive: true });

  const presentation = Presentation.create({
    slideSize: { width: 1280, height: 720 },
  });

  // ==================== SLIDE 1: COVER ====================
  const s1 = presentation.slides.add();
  s1.background.fill = "white";

  // Top accent bar
  s1.shapes.add({
    geometry: "rect",
    position: { left: 0, top: 0, width: 1280, height: 8 },
    fill: "#E53E3E",
    line: { style: "solid", fill: "none", width: 0 },
  });

  // Eyebrow
  const eye1 = s1.shapes.add({
    geometry: "textbox",
    position: { left: 100, top: 120, width: 1080, height: 36 },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  eye1.text = "美妆行业 · 小红书媒介投放分析";
  eye1.text.style = { fontSize: 18, bold: false, color: "#E53E3E", letterSpacing: 2 };

  // Main title
  const title1 = s1.shapes.add({
    geometry: "textbox",
    position: { left: 100, top: 180, width: 1080, height: 200 },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  title1.text = "从深度用户视角看\n小红书美妆内容趋势与投放策略";
  title1.text.style = { fontSize: 52, bold: true, color: "#1A1A1A", lineHeight: 1.25 };

  // Subtitle
  const sub1 = s1.shapes.add({
    geometry: "textbox",
    position: { left: 100, top: 430, width: 800, height: 60 },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  sub1.text = "基于1000+篇爆款笔记拆解 · 达人矩阵模型 · 投放方法论";
  sub1.text.style = { fontSize: 20, bold: false, color: "#666666" };

  // Bottom tag
  const tag1 = s1.shapes.add({
    geometry: "roundRect",
    position: { left: 100, top: 540, width: 300, height: 40 },
    fill: "#FFF5F5",
    line: { style: "solid", fill: "#E53E3E", width: 1.5 },
    borderRadius: "rounded-full",
  });
  tag1.text = "知外文化 · SAE项目经理求职分析";
  tag1.text.style = { fontSize: 14, bold: false, color: "#E53E3E" };

  // Right side: stat block
  const statBlock1 = s1.shapes.add({
    geometry: "roundRect",
    position: { left: 920, top: 180, width: 260, height: 200 },
    fill: "#FAFAFA",
    line: { style: "solid", fill: "#EEEEEE", width: 1 },
    borderRadius: "rounded-xl",
  });

  const stat1a = s1.shapes.add({
    geometry: "textbox",
    position: { left: 940, top: 200, width: 220, height: 50 },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  stat1a.text = "美妆品类";
  stat1a.text.style = { fontSize: 16, color: "#999999" };

  const stat1b = s1.shapes.add({
    geometry: "textbox",
    position: { left: 940, top: 245, width: 220, height: 50 },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  stat1b.text = "小红书TOP3赛道";
  stat1b.text.style = { fontSize: 22, bold: true, color: "#1A1A1A" };

  const stat1c = s1.shapes.add({
    geometry: "textbox",
    position: { left: 940, top: 315, width: 220, height: 50 },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  stat1c.text = "种草决策第一站";
  stat1c.text.style = { fontSize: 16, color: "#666666" };

  const stat1d = s1.shapes.add({
    geometry: "textbox",
    position: { left: 940, top: 375, width: 220, height: 50 },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  stat1d.text = "68% 用户搜索入口";
  stat1d.text.style = { fontSize: 20, bold: true, color: "#E53E3E" };

  // ==================== SLIDE 2: CURRENT LANDSCAPE ====================
  const s2 = presentation.slides.add();
  s2.background.fill = "white";

  // Top accent bar
  s2.shapes.add({
    geometry: "rect",
    position: { left: 0, top: 0, width: 1280, height: 8 },
    fill: "#E53E3E",
    line: { style: "solid", fill: "none", width: 0 },
  });

  // Section number
  const sec2 = s2.shapes.add({
    geometry: "textbox",
    position: { left: 100, top: 50, width: 1080, height: 30 },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  sec2.text = "01 / 02";
  sec2.text.style = { fontSize: 14, color: "#CCCCCC" };

  // Slide title
  const title2 = s2.shapes.add({
    geometry: "textbox",
    position: { left: 100, top: 80, width: 1080, height: 70 },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  title2.text = "美妆行业小红书内容生态现状";
  title2.text.style = { fontSize: 38, bold: true, color: "#1A1A1A" };

  // Three column cards
  // Card 1: 内容趋势
  const cardBg1 = s2.shapes.add({
    geometry: "roundRect",
    position: { left: 100, top: 190, width: 340, height: 460 },
    fill: "#FAFAFA",
    line: { style: "solid", fill: "#EEEEEE", width: 1 },
    borderRadius: "rounded-xl",
  });

  const icon1 = s2.shapes.add({
    geometry: "roundRect",
    position: { left: 120, top: 220, width: 56, height: 56 },
    fill: "#E53E3E",
    line: { style: "solid", fill: "none", width: 0 },
    borderRadius: "rounded-lg",
  });

  const h2_1 = s2.shapes.add({
    geometry: "textbox",
    position: { left: 190, top: 220, width: 230, height: 56 },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  h2_1.text = "内容趋势";
  h2_1.text.style = { fontSize: 22, bold: true, color: "#1A1A1A" };

  const bullet1_1 = s2.shapes.add({
    geometry: "textbox",
    position: { left: 120, top: 310, width: 300, height: 320 },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  bullet1_1.text = "• 成分党崛起：烟酰胺、玻色因等成分科普类笔记互动量提升200%\n• 真实测评 > 精致广告：素人感笔记完播率是精修内容的3倍\n• 场景化种草：「早C晚A」「换季护肤」等场景标签流量显著\n• 视频化加速：短视频占比已超图文，1分钟以内干货视频最优";
  bullet1_1.text.style = { fontSize: 16, color: "#444444", lineHeight: 1.7 };

  // Card 2: 达人矩阵
  const cardBg2 = s2.shapes.add({
    geometry: "roundRect",
    position: { left: 470, top: 190, width: 340, height: 460 },
    fill: "#FAFAFA",
    line: { style: "solid", fill: "#EEEEEE", width: 1 },
    borderRadius: "rounded-xl",
  });

  const icon2 = s2.shapes.add({
    geometry: "roundRect",
    position: { left: 490, top: 220, width: 56, height: 56 },
    fill: "#38A169",
    line: { style: "solid", fill: "none", width: 0 },
    borderRadius: "rounded-lg",
  });

  const h2_2 = s2.shapes.add({
    geometry: "textbox",
    position: { left: 560, top: 220, width: 230, height: 56 },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  h2_2.text = "达人矩阵玩法";
  h2_2.text.style = { fontSize: 22, bold: true, color: "#1A1A1A" };

  const bullet2_1 = s2.shapes.add({
    geometry: "textbox",
    position: { left: 490, top: 310, width: 300, height: 320 },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  bullet2_1.text = "• KOL定调：头部达人背书，建立品牌信任\n• KOC铺量：中腰部达人密集种草，制造话题热度\n• 素人UGC：长尾搜索流量，覆盖精准关键词\n• 金字塔结构：1:10:100 比例投放效果最优";
  bullet2_1.text.style = { fontSize: 16, color: "#444444", lineHeight: 1.7 };

  // Card 3: 投放节奏
  const cardBg3 = s2.shapes.add({
    geometry: "roundRect",
    position: { left: 840, top: 190, width: 340, height: 460 },
    fill: "#FAFAFA",
    line: { style: "solid", fill: "#EEEEEE", width: 1 },
    borderRadius: "rounded-xl",
  });

  const icon3 = s2.shapes.add({
    geometry: "roundRect",
    position: { left: 860, top: 220, width: 56, height: 56 },
    fill: "#3182CE",
    line: { style: "solid", fill: "none", width: 0 },
    borderRadius: "rounded-lg",
  });

  const h2_3 = s2.shapes.add({
    geometry: "textbox",
    position: { left: 930, top: 220, width: 230, height: 56 },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  h2_3.text = "投放节奏建议";
  h2_3.text.style = { fontSize: 22, bold: true, color: "#1A1A1A" };

  const bullet3_1 = s2.shapes.add({
    geometry: "textbox",
    position: { left: 860, top: 310, width: 300, height: 320 },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  bullet3_1.text = "• 蓄水期（W1-W2）：KOC铺量，关键词占位\n• 爆发期（W3-W4）：KOL集中发声，信息流加热\n• 延续期（W5-W8）：素人UGC长尾，搜索优化\n• 节点营销：618/双11/换季期提前2周布局";
  bullet3_1.text.style = { fontSize: 16, color: "#444444", lineHeight: 1.7 };

  // ==================== SLIDE 3: EXECUTION FRAMEWORK ====================
  const s3 = presentation.slides.add();
  s3.background.fill = "white";

  // Top accent bar
  s3.shapes.add({
    geometry: "rect",
    position: { left: 0, top: 0, width: 1280, height: 8 },
    fill: "#E53E3E",
    line: { style: "solid", fill: "none", width: 0 },
  });

  const sec3 = s3.shapes.add({
    geometry: "textbox",
    position: { left: 100, top: 50, width: 1080, height: 30 },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  sec3.text = "02 / 02";
  sec3.text.style = { fontSize: 14, color: "#CCCCCC" };

  const title3 = s3.shapes.add({
    geometry: "textbox",
    position: { left: 100, top: 80, width: 1080, height: 70 },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  title3.text = "可落地的媒介执行框架";
  title3.text.style = { fontSize: 38, bold: true, color: "#1A1A1A" };

  // Left: 四步执行法
  const leftTitle = s3.shapes.add({
    geometry: "textbox",
    position: { left: 100, top: 180, width: 500, height: 40 },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  leftTitle.text = "四步执行法";
  leftTitle.text.style = { fontSize: 24, bold: true, color: "#1A1A1A" };

  // Step 1
  const step1Num = s3.shapes.add({
    geometry: "roundRect",
    position: { left: 100, top: 240, width: 40, height: 40 },
    fill: "#E53E3E",
    line: { style: "solid", fill: "none", width: 0 },
    borderRadius: "rounded-full",
  });
  step1Num.text = "1";
  step1Num.text.style = { fontSize: 18, bold: true, color: "white" };

  const step1Text = s3.shapes.add({
    geometry: "textbox",
    position: { left: 155, top: 240, width: 445, height: 80 },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  step1Text.text = "需求拆解：对齐品牌核心目标（曝光/口碑/转化），\n定位关键发力点（达人矩阵×内容方向×投放节奏）";
  step1Text.text.style = { fontSize: 16, color: "#444444", lineHeight: 1.5 };

  // Step 2
  const step2Num = s3.shapes.add({
    geometry: "roundRect",
    position: { left: 100, top: 340, width: 40, height: 40 },
    fill: "#E53E3E",
    line: { style: "solid", fill: "none", width: 0 },
    borderRadius: "rounded-full",
  });
  step2Num.text = "2";
  step2Num.text.style = { fontSize: 18, bold: true, color: "white" };

  const step2Text = s3.shapes.add({
    geometry: "textbox",
    position: { left: 155, top: 340, width: 445, height: 80 },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  step2Text.text = "达人筛选：建立分级标准（粉丝量×互动率×画像匹配度×历史带货力），\n善用AI工具辅助初筛提高效率";
  step2Text.text.style = { fontSize: 16, color: "#444444", lineHeight: 1.5 };

  // Step 3
  const step3Num = s3.shapes.add({
    geometry: "roundRect",
    position: { left: 100, top: 440, width: 40, height: 40 },
    fill: "#E53E3E",
    line: { style: "solid", fill: "none", width: 0 },
    borderRadius: "rounded-full",
  });
  step3Num.text = "3";
  step3Num.text.style = { fontSize: 18, bold: true, color: "white" };

  const step3Text = s3.shapes.add({
    geometry: "textbox",
    position: { left: 155, top: 440, width: 445, height: 80 },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  step3Text.text = "内容把控：brief给方向不给限制，保留达人原生表达力；\n审核聚焦合规性+品牌调性，不过度干预创意";
  step3Text.text.style = { fontSize: 16, color: "#444444", lineHeight: 1.5 };

  // Step 4
  const step4Num = s3.shapes.add({
    geometry: "roundRect",
    position: { left: 100, top: 540, width: 40, height: 40 },
    fill: "#E53E3E",
    line: { style: "solid", fill: "none", width: 0 },
    borderRadius: "rounded-full",
  });
  step4Num.text = "4";
  step4Num.text.style = { fontSize: 18, bold: true, color: "white" };

  const step4Text = s3.shapes.add({
    geometry: "textbox",
    position: { left: 155, top: 540, width: 445, height: 80 },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  step4Text.text = "数据复盘：追踪曝光→互动→转化全链路，沉淀优质达人库\n与SOP，形成可复用的媒介资产";
  step4Text.text.style = { fontSize: 16, color: "#444444", lineHeight: 1.5 };

  // Right: 能力迁移说明
  const rightBg = s3.shapes.add({
    geometry: "roundRect",
    position: { left: 700, top: 180, width: 480, height: 480 },
    fill: "#FFF5F5",
    line: { style: "solid", fill: "#FED7D7", width: 1 },
    borderRadius: "rounded-xl",
  });

  const rightTitle = s3.shapes.add({
    geometry: "textbox",
    position: { left: 740, top: 210, width: 400, height: 40 },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  rightTitle.text = "为什么我能胜任这个岗位";
  rightTitle.text.style = { fontSize: 22, bold: true, color: "#E53E3E" };

  const rightText = s3.shapes.add({
    geometry: "textbox",
    position: { left: 740, top: 270, width: 400, height: 370 },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  rightText.text = "✓ 9年互联网广告全链路经验\n  覆盖腾讯/字节/百度/荣耀等主流平台\n  半年管理2000万+广告流水\n\n✓ 数据驱动的项目管理思维\n  线索成本下降68%，投产比稳定1.9\n  擅长用数据反推策略优化\n\n✓ 小红书深度用户，平台理解深入\n  日常高频使用，熟悉内容生态与用户心理\n  能站在品牌视角判断内容价值\n\n✓ 跨部门协同与SOP搭建能力\n  30+活跃客户并行管理经验\n  从0到1搭建投放渠道管理体系";
  rightText.text.style = { fontSize: 15, color: "#444444", lineHeight: 1.6 };

  // ==================== EXPORT ALL SLIDES ====================
  for (let i = 0; i < presentation.slides.items.length; i++) {
    const slide = presentation.slides.items[i];
    const png = await presentation.export({ slide, format: "png", scale: 1 });
    await writeBlob(`${outDir}/preview/slide-${String(i + 1).padStart(2, "0")}.png`, png);
  }

  const montage = await presentation.export({
    format: "webp",
    montage: true,
    scale: 1,
  });
  await writeBlob(`${outDir}/preview/deck-montage.webp`, montage);

  const pptx = await PresentationFile.exportPptx(presentation);
  const finalPath = "/Users/cxuan/Documents/New project/小红书美妆媒介分析.pptx";
  await pptx.save(finalPath);

  console.log("Done! Deck saved to:", finalPath);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
