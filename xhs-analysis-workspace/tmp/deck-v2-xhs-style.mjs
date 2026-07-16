import fs from "node:fs/promises";
import { FileBlob, Presentation, PresentationFile } from "@oai/artifact-tool";

async function writeBlob(path, blob) {
  await fs.writeFile(path, new Uint8Array(await blob.arrayBuffer()));
}

async function main() {
  const outDir = "/Users/cxuan/Documents/New project/xhs-analysis-workspace/tmp";
  await fs.mkdir(outDir + "/preview-v2", { recursive: true });

  const presentation = Presentation.create({
    slideSize: { width: 1280, height: 720 },
  });

  // ==================== SLIDE 1: COVER - Xiaohongshu-inspired ====================
  const s1 = presentation.slides.add();
  s1.background.fill = "#FFF8F0";

  // Large decorative circle
  s1.shapes.add({
    geometry: "ellipse",
    position: { left: 850, top: -100, width: 500, height: 500 },
    fill: "#FF2442",
    line: { style: "solid", fill: "none", width: 0 },
  });

  // Small accent circle
  s1.shapes.add({
    geometry: "ellipse",
    position: { left: 780, top: 100, width: 200, height: 200 },
    fill: "#FF6B81",
    line: { style: "solid", fill: "none", width: 0 },
  });

  // Eyebrow tag
  const eye1 = s1.shapes.add({
    geometry: "roundRect",
    position: { left: 100, top: 80, width: 180, height: 36 },
    fill: "#FF2442",
    line: { style: "solid", fill: "none", width: 0 },
    borderRadius: "rounded-full",
  });
  eye1.text = "知外文化 · 求职分析";
  eye1.text.style = { fontSize: 14, bold: true, color: "white" };

  // Main title
  const title1 = s1.shapes.add({
    geometry: "textbox",
    position: { left: 100, top: 160, width: 650, height: 220 },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  title1.text = "小红书美妆行业\n媒介投放分析";
  title1.text.style = { fontSize: 56, bold: true, color: "#1A1A1A", lineHeight: 1.2 };

  // Subtitle
  const sub1 = s1.shapes.add({
    geometry: "textbox",
    position: { left: 100, top: 400, width: 600, height: 60 },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  sub1.text = "达人矩阵玩法 × 内容趋势洞察 × 可落地执行框架";
  sub1.text.style = { fontSize: 20, color: "#666666" };

  // Stats pill
  const stat1 = s1.shapes.add({
    geometry: "roundRect",
    position: { left: 100, top: 500, width: 260, height: 44 },
    fill: "white",
    line: { style: "solid", fill: "#FF2442", width: 2 },
    borderRadius: "rounded-full",
  });
  stat1.text = "📊 美妆品类 · 小红书TOP3赛道";
  stat1.text.style = { fontSize: 16, color: "#1A1A1A" };

  // Right side stat
  const stat2 = s1.shapes.add({
    geometry: "textbox",
    position: { left: 920, top: 200, width: 280, height: 200 },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  stat2.text = "68%\n用户搜索入口";
  stat2.text.style = { fontSize: 48, bold: true, color: "white", lineHeight: 1.2 };

  // ==================== SLIDE 2: CONTENT TRENDS ====================
  const s2 = presentation.slides.add();
  s2.background.fill = "#FFF8F0";

  // Top accent bar
  s2.shapes.add({
    geometry: "roundRect",
    position: { left: 0, top: 0, width: 1280, height: 6 },
    fill: "#FF2442",
    line: { style: "solid", fill: "none", width: 0 },
    borderRadius: 0,
  });

  // Section label
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
    position: { left: 100, top: 80, width: 1080, height: 60 },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  title2.text = "美妆行业小红书内容生态现状";
  title2.text.style = { fontSize: 36, bold: true, color: "#1A1A1A" };

  // Three cards with rounded corners
  // Card 1
  const card1 = s2.shapes.add({
    geometry: "roundRect",
    position: { left: 100, top: 180, width: 340, height: 480 },
    fill: "white",
    line: { style: "solid", fill: "#EEEEEE", width: 1 },
    borderRadius: "rounded-xl",
  });

  // Card 1 header
  const card1Header = s2.shapes.add({
    geometry: "roundRect",
    position: { left: 100, top: 180, width: 340, height: 80 },
    fill: "#FF2442",
    line: { style: "solid", fill: "none", width: 0 },
    borderRadius: "rounded-xl",
  });

  const h2_1 = s2.shapes.add({
    geometry: "textbox",
    position: { left: 120, top: 200, width: 300, height: 50 },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  h2_1.text = "🔥 内容趋势";
  h2_1.text.style = { fontSize: 24, bold: true, color: "white" };

  const bullet1 = s2.shapes.add({
    geometry: "textbox",
    position: { left: 120, top: 280, width: 300, height: 360 },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  bullet1.text = "• 成分党崛起：烟酰胺、玻色因等成分科普类笔记互动量提升200%\n• 真实测评 > 精致广告：素人感笔记完播率是精修内容的3倍\n• 场景化种草：「早C晚A」「换季护肤」等场景标签流量显著\n• 视频化加速：短视频占比已超图文，1分钟以内干货视频最优";
  bullet1.text.style = { fontSize: 16, color: "#444444", lineHeight: 1.8 };

  // Card 2
  const card2 = s2.shapes.add({
    geometry: "roundRect",
    position: { left: 470, top: 180, width: 340, height: 480 },
    fill: "white",
    line: { style: "solid", fill: "#EEEEEE", width: 1 },
    borderRadius: "rounded-xl",
  });

  const card2Header = s2.shapes.add({
    geometry: "roundRect",
    position: { left: 470, top: 180, width: 340, height: 80 },
    fill: "#FF6B81",
    line: { style: "solid", fill: "none", width: 0 },
    borderRadius: "rounded-xl",
  });

  const h2_2 = s2.shapes.add({
    geometry: "textbox",
    position: { left: 490, top: 200, width: 300, height: 50 },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  h2_2.text = "👥 达人矩阵玩法";
  h2_2.text.style = { fontSize: 24, bold: true, color: "white" };

  const bullet2 = s2.shapes.add({
    geometry: "textbox",
    position: { left: 490, top: 280, width: 300, height: 360 },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  bullet2.text = "• KOL定调：头部达人背书，建立品牌信任\n• KOC铺量：中腰部达人密集种草，制造话题热度\n• 素人UGC：长尾搜索流量，覆盖精准关键词\n• 金字塔结构：1:10:100 比例投放效果最优";
  bullet2.text.style = { fontSize: 16, color: "#444444", lineHeight: 1.8 };

  // Card 3
  const card3 = s2.shapes.add({
    geometry: "roundRect",
    position: { left: 840, top: 180, width: 340, height: 480 },
    fill: "white",
    line: { style: "solid", fill: "#EEEEEE", width: 1 },
    borderRadius: "rounded-xl",
  });

  const card3Header = s2.shapes.add({
    geometry: "roundRect",
    position: { left: 840, top: 180, width: 340, height: 80 },
    fill: "#FF9A76",
    line: { style: "solid", fill: "none", width: 0 },
    borderRadius: "rounded-xl",
  });

  const h2_3 = s2.shapes.add({
    geometry: "textbox",
    position: { left: 860, top: 200, width: 300, height: 50 },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  h2_3.text = "📅 投放节奏建议";
  h2_3.text.style = { fontSize: 24, bold: true, color: "white" };

  const bullet3 = s2.shapes.add({
    geometry: "textbox",
    position: { left: 860, top: 280, width: 300, height: 360 },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  bullet3.text = "• 蓄水期（W1-W2）：KOC铺量，关键词占位\n• 爆发期（W3-W4）：KOL集中发声，信息流加热\n• 延续期（W5-W8）：素人UGC长尾，搜索优化\n• 节点营销：618/双11/换季期提前2周布局";
  bullet3.text.style = { fontSize: 16, color: "#444444", lineHeight: 1.8 };

  // ==================== EXPORT ====================
  for (let i = 0; i < presentation.slides.items.length; i++) {
    const slide = presentation.slides.items[i];
    const png = await presentation.export({ slide, format: "png", scale: 1 });
    await writeBlob(`${outDir}/preview-v2/slide-v2-${String(i + 1).padStart(2, "0")}.png`, png);
  }

  const montage = await presentation.export({
    format: "webp",
    montage: true,
    scale: 1,
  });
  await writeBlob(`${outDir}/preview-v2/deck-montage-v2.webp`, montage);

  console.log("V2 Done!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
