import fs from "node:fs/promises";
import { FileBlob, Presentation, PresentationFile } from "@oai/artifact-tool";

const RED = "#E4182A";
const DARK_RED = "#C41220";
const LIGHT_BG = "#FFF5F5";
const CARD_BG = "#FFFFFF";
const TEXT_PRIMARY = "#1A1A1A";
const TEXT_SECONDARY = "#666666";
const TEXT_LIGHT = "#999999";
const BORDER_LIGHT = "#F0E0E0";
const ACCENT_ORANGE = "#FF6B35";

async function wb(path, blob) {
  await fs.writeFile(path, new Uint8Array(await blob.arrayBuffer()));
}

const W = 1280, H = 720;
const P = { l: 72, t: 64, w: 1136, h: 592 };
const CL = 430, G = 28, CR = P.w - CL - G;

async function headerBar(s, num, title, sub) {
  s.shapes.add({ geometry: "roundRect", position: { left: P.l, top: P.t, width: CL, height: 56 }, fill: RED, borderRadius: "rounded-xl", line: { style: "solid", fill: "none", width: 0 } });
  const ht = s.shapes.add({ geometry: "textbox", position: { left: P.l + 20, top: P.t + 4, width: CL - 40, height: 48 }, fill: "none", line: { style: "solid", fill: "none", width: 0 } });
  ht.text = num + "  " + title;
  ht.text.style = { fontSize: 24, bold: true, color: "#FFF" };
  const hs = s.shapes.add({ geometry: "textbox", position: { left: P.l + 20, top: P.t + 68, width: CL, height: 40 }, fill: "none", line: { style: "solid", fill: "none", width: 0 } });
  hs.text = sub;
  hs.text.style = { fontSize: 36, bold: true, color: TEXT_PRIMARY };
}

async function card(s, x, y, w, h, fill, br, lineFill) {
  s.shapes.add({ geometry: "roundRect", position: { left: x, top: y, width: w, height: h }, fill: fill || CARD_BG, borderRadius: br || "rounded-xl", line: { style: "solid", fill: lineFill || BORDER_LIGHT, width: 1 } });
}

async function txt(s, x, y, w, h, content, style) {
  const t = s.shapes.add({ geometry: "textbox", position: { left: x, top: y, width: w, height: h }, fill: "none", line: { style: "solid", fill: "none", width: 0 } });
  t.text = content;
  t.text.style = style;
  return t;
}

async function main() {
  const outDir = "/Users/cxuan/Documents/New project/work/presentations/xiaohongshu-media-analysis/tmp/preview";
  await fs.mkdir(outDir, { recursive: true });
  const deck = Presentation.create({ slideSize: { width: W, height: H } });

  // ===== SLIDE 1: COVER =====
  {
    const s = deck.slides.add();
    s.background.fill = "#FFF";
    s.shapes.add({ geometry: "rect", position: { left: 0, top: 0, width: W, height: 8 }, fill: RED, line: { style: "solid", fill: "none", width: 0 } });
    s.shapes.add({ geometry: "roundRect", position: { left: P.l, top: P.t, width: 12, height: 200 }, fill: RED, borderRadius: "rounded-3xl", line: { style: "solid", fill: "none", width: 0 } });
    await txt(s, P.l + 36, P.t + 20, 600, 36, "知外文化 · 小红书SAE岗位申请", { fontSize: 16, bold: true, color: RED, letterSpacing: 2 });
    await txt(s, P.l + 36, P.t + 72, 800, 120, "美妆赛道小红书媒介执行分析", { fontSize: 52, bold: true, color: TEXT_PRIMARY, leading: 1.15 });
    await txt(s, P.l + 36, P.t + 210, 700, 60, "达人矩阵策略 · 内容方向拆解 · 投放节奏规划", { fontSize: 22, color: TEXT_SECONDARY });
    await card(s, P.l + 36, P.t + 320, 560, 120, LIGHT_BG, "rounded-2xl", BORDER_LIGHT);
    await txt(s, P.l + 60, P.t + 340, 500, 36, "分析师：江采璇（Jessica）", { fontSize: 18, bold: true, color: TEXT_PRIMARY });
    await txt(s, P.l + 60, P.t + 385, 500, 36, "9年互联网广告及媒介执行经验 | 深耕腾讯、字节、百度等平台", { fontSize: 16, color: TEXT_SECONDARY });
    await txt(s, P.l + 60, P.t + 425, 500, 36, "小红书深度用户 | 熟悉平台生态与内容调性", { fontSize: 16, color: TEXT_SECONDARY });
    // Right circle
    s.shapes.add({ geometry: "roundRect", position: { left: 820, top: P.t + 80, width: 380, height: 380 }, fill: RED, borderRadius: "rounded-full", line: { style: "solid", fill: "none", width: 0 } });
    await txt(s, 820, P.t + 180, 380, 80, "小红书", { fontSize: 64, bold: true, color: "#FFF", alignment: "center" });
    await txt(s, 820, P.t + 480, 380, 40, "2025年7月", { fontSize: 16, color: "#FFF", alignment: "center" });
    await wb(outDir + "/slide-1.png", await deck.export({ slide: s, format: "png", scale: 1 }));
  }

  // ===== SLIDE 2: 平台洞察 =====
  {
    const s = deck.slides.add();
    s.background.fill = "#FFF";
    await headerBar(s, "01", "平台洞察", "美妆用户在小红书的行为特征");
    // Big stat
    await card(s, P.l + CL + G, P.t + 64, CR, 170, LIGHT_BG, "rounded-2xl", BORDER_LIGHT);
    await txt(s, P.l + CL + G + 24, P.t + 74, 300, 80, "73%", { fontSize: 56, bold: true, color: RED });
    await txt(s, P.l + CL + G + 24, P.t + 154, 400, 36, "美妆消费者在决策前会先在小红书搜索", { fontSize: 18, color: TEXT_SECONDARY });
    await txt(s, P.l + CL + G + 400, P.t + 100, 200, 80, "（来源：小红书美妆行业白皮书）", { fontSize: 14, color: TEXT_LIGHT });
    // Three insights
    const insights = [
      { t: "搜索驱动决策", d: "美妆用户平均搜索3.2次后才完成购买，关键词布局是投放的第一步" },
      { t: "真实体验优先", d: "素人笔记的信任度高于明星代言，真实感是内容核心" },
      { t: "圈层化明显", d: "成分党、敏感肌、抗老等细分人群需求差异大，需精准定向" },
    ];
    for (let i = 0; i < 3; i++) {
      const y = P.t + 260 + i * 120;
      await card(s, P.l, y, CL, 100, CARD_BG, "rounded-xl", BORDER_LIGHT);
      s.shapes.add({ geometry: "roundRect", position: { left: P.l + 16, top: y + 36, width: 8, height: 28 }, fill: RED, borderRadius: "rounded-xl", line: { style: "solid", fill: "none", width: 0 } });
      await txt(s, P.l + 40, y + 16, CL - 60, 32, insights[i].t, { fontSize: 20, bold: true, color: TEXT_PRIMARY });
      await txt(s, P.l + 40, y + 52, CL - 60, 36, insights[i].d, { fontSize: 15, color: TEXT_SECONDARY });
    }
    // Funnel
    await txt(s, P.l + CL + G, P.t + 260, CR, 40, "美妆用户种草→转化路径", { fontSize: 22, bold: true, color: TEXT_PRIMARY });
    const steps = [
      { pct: "100%", l: "曝光触达", s: "信息流/搜索/话题页", c: RED },
      { pct: "42%", l: "互动收藏", s: "点赞/收藏/评论", c: DARK_RED },
      { pct: "18%", l: "搜索加深", s: "品牌词/竞品词搜索", c: "#D44050" },
      { pct: "7%", l: "站外转化", s: "跳转电商/到店", c: ACCENT_ORANGE },
    ];
    for (let i = 0; i < 4; i++) {
      const y = P.t + 310 + i * 90;
      const bw = 800 - i * 160;
      s.shapes.add({ geometry: "roundRect", position: { left: P.l + CL + G + 40, top: y, width: bw, height: 64 }, fill: steps[i].c, borderRadius: "rounded-lg", line: { style: "solid", fill: "none", width: 0 } });
      await txt(s, P.l + CL + G + 60, y + 8, 200, 30, steps[i].pct, { fontSize: 22, bold: true, color: "#FFF" });
      await txt(s, P.l + CL + G + 200, y + 8, 300, 30, steps[i].l, { fontSize: 18, bold: true, color: "#FFF" });
      await txt(s, P.l + CL + G + 200, y + 36, 300, 24, steps[i].s, { fontSize: 14, color: "rgba(255,255,255,0.8)" });
    }
    await wb(outDir + "/slide-2.png", await deck.export({ slide: s, format: "png", scale: 1 }));
  }

  // ===== SLIDE 3: 达人矩阵 =====
  {
    const s = deck.slides.add();
    s.background.fill = "#FFF";
    await headerBar(s, "02", "达人矩阵策略", "金字塔模型与分层打法");
    // Pyramid bars
    const tiers = [
      { n: "头部达人", p: "5-10%", b: "20-30%", r: "品牌背书 + 声量爆发", c: RED, i: 0 },
      { n: "腰部达人", p: "20-30%", b: "40-50%", r: "专业种草 + 信任建立", c: DARK_RED, i: 1 },
      { n: "KOC/素人", p: "60-75%", b: "20-30%", r: "铺量造势 + SEO覆盖", c: "#D44050", i: 2 },
    ];
    for (const tier of tiers) {
      const y = P.t + 140 + tier.i * 155;
      const bw = 380 - tier.i * 80;
      const x = P.l + 200 + tier.i * 40;
      s.shapes.add({ geometry: "roundRect", position: { left: x, top: y, width: bw, height: 120 }, fill: tier.c, borderRadius: "rounded-xl", line: { style: "solid", fill: "none", width: 0 } });
      await txt(s, x + 16, y + 12, bw - 80, 36, tier.n, { fontSize: 22, bold: true, color: "#FFF" });
      await txt(s, x + bw - 100, y + 12, 80, 36, tier.p, { fontSize: 18, bold: true, color: "rgba(255,255,255,0.9)", alignment: "right" });
      await txt(s, x + 16, y + 52, bw - 32, 30, tier.r, { fontSize: 15, color: "rgba(255,255,255,0.85)" });
      await txt(s, x + bw - 100, y + 52, 80, 30, tier.b, { fontSize: 14, color: "rgba(255,255,255,0.8)", alignment: "right" });
    }
    // Right strategies
    const strats = [
      { title: "筛选标准", items: ["粉丝量级 × 互动率 × 粉丝画像匹配度", "近30天内容垂直度 >= 80%", "过往品牌合作口碑评估"] },
      { title: "报价管理", items: ["建立分级报价体系，设定上限", "批量采购享受折扣（10篇+）", "以置换+费用组合降低成本"] },
      { title: "内容把控", items: ["brief给方向不给限制", "保留达人原创表达空间", "设置3个必提卖点即可"] },
    ];
    for (let i = 0; i < 3; i++) {
      const strat = strats[i];
      const y = P.t + 100 + i * 170;
      await card(s, P.l + CL + G + 20, y, CR - 20, 150, CARD_BG, "rounded-xl", BORDER_LIGHT);
      await txt(s, P.l + CL + G + 40, y + 16, 400, 32, strat.title, { fontSize: 20, bold: true, color: TEXT_PRIMARY });
      for (let j = 0; j < strat.items.length; j++) {
        await txt(s, P.l + CL + G + 40, y + 56 + j * 30, CR - 60, 26, "• " + strat.items[j], { fontSize: 15, color: TEXT_SECONDARY });
      }
    }
    await wb(outDir + "/slide-3.png", await deck.export({ slide: s, format: "png", scale: 1 }));
  }

  // ===== SLIDE 4: 内容方向 =====
  {
    const s = deck.slides.add();
    s.background.fill = "#FFF";
    await headerBar(s, "03", "内容方向", "爆款笔记的结构拆解");
    const contents = [
      { title: "测评类", tag: "信任型内容", desc: "横向对比3-5款同类产品，突出自家优势", ex: "\"空瓶记\"式真实使用记录，前后对比图", ratio: "占比25%", c: RED },
      { title: "教程类", tag: "实用型内容", desc: "场景化教学（如早C晚A搭配指南）", ex: "步骤清晰、可复制，收藏率高", ratio: "占比30%", c: DARK_RED },
      { title: "故事类", tag: "情感型内容", desc: "个人经历+产品融入（如敏感肌自救）", ex: "引发共鸣，评论区互动率高", ratio: "占比20%", c: "#D44050" },
      { title: "干货类", tag: "知识型内容", desc: "成分科普、选购指南、避坑攻略", ex: "长尾流量好，搜索排名持续生效", ratio: "占比25%", c: ACCENT_ORANGE },
    ];
    for (let i = 0; i < 4; i++) {
      const c = contents[i];
      const x = P.l + (i % 2) * (CR + G);
      const y = P.t + 120 + Math.floor(i / 2) * 230;
      const cw = CR - 20, ch = 210;
      await card(s, x + 10, y, cw, ch, CARD_BG, "rounded-xl", BORDER_LIGHT);
      s.shapes.add({ geometry: "roundRect", position: { left: x + 10, top: y, width: cw, height: 6 }, fill: c.c, borderRadius: "rounded-xl", line: { style: "solid", fill: "none", width: 0 } });
      await txt(s, x + 30, y + 24, cw - 100, 32, c.title, { fontSize: 24, bold: true, color: TEXT_PRIMARY });
      s.shapes.add({ geometry: "roundRect", position: { left: x + cw - 98, top: y + 26, width: 76, height: 28 }, fill: c.c, borderRadius: "rounded-lg", line: { style: "solid", fill: "none", width: 0 } });
      await txt(s, x + cw - 98, y + 28, 72, 24, c.tag, { fontSize: 12, bold: true, color: "#FFF", alignment: "center" });
      await txt(s, x + 30, y + 64, cw - 60, 36, c.desc, { fontSize: 16, color: TEXT_SECONDARY });
      await txt(s, x + 30, y + 106, cw - 60, 30, "示例：" + c.ex, { fontSize: 14, color: TEXT_LIGHT, italic: true });
      await card(s, x + 30, y + 150, 100, 40, LIGHT_BG, "rounded-lg", BORDER_LIGHT);
      await txt(s, x + 34, y + 154, 92, 32, c.ratio, { fontSize: 16, bold: true, color: c.c, alignment: "center" });
    }
    await card(s, P.l, P.t + 590, P.w, 56, RED, "rounded-xl", null);
    await txt(s, P.l + 20, P.t + 594, P.w - 40, 48, "关键结论：标题决定点击率，封面决定停留，正文决定转化 — 三者缺一不可", { fontSize: 18, bold: true, color: "#FFF", alignment: "center" });
    await wb(outDir + "/slide-4.png", await deck.export({ slide: s, format: "png", scale: 1 }));
  }

  // ===== SLIDE 5: 投放节奏 =====
  {
    const s = deck.slides.add();
    s.background.fill = "#FFF";
    await headerBar(s, "04", "投放节奏与预算", "4周SOP框架");
    // Timeline arrow
    s.shapes.add({ geometry: "rect", position: { left: P.l + 40, top: P.t + 200, width: P.w - 80, height: 3 }, fill: BORDER_LIGHT, line: { style: "solid", fill: "none", width: 0 } });
    const weeks = [
      { w: "第1周", p: "蓄水期", bg: "#FFE4E8", ac: RED, tasks: ["达人招募与brief下发", "种子笔记铺垫（10-15篇）", "品牌词SEO占位"], bud: "15%" },
      { w: "第2周", p: "爆发期", bg: LIGHT_BG, ac: DARK_RED, tasks: ["腰部达人集中发布（30-50篇）", "头部达人引爆声量", "信息流投放加码"], bud: "45%" },
      { w: "第3周", p: "扩散期", bg: "#FFE4E8", ac: "#D44050", tasks: ["KOC铺量（100+篇）", "UGC话题挑战", "评论区运营引导"], bud: "25%" },
      { w: "第4周", p: "复盘期", bg: LIGHT_BG, ac: ACCENT_ORANGE, tasks: ["数据追踪与效果归因", "优质内容二次投放", "沉淀SOP与达人库"], bud: "15%" },
    ];
    for (let i = 0; i < 4; i++) {
      const wk = weeks[i];
      const x = P.l + 40 + i * 300;
      const cw = 270, ch = 340;
      const y = P.t + 240;
      s.shapes.add({ geometry: "roundRect", position: { left: x, top: y - 50, width: cw, height: 44 }, fill: wk.ac, borderRadius: "rounded-xl", line: { style: "solid", fill: "none", width: 0 } });
      await txt(s, x + 12, y - 46, 160, 36, wk.w + " · " + wk.p, { fontSize: 18, bold: true, color: "#FFF" });
      await txt(s, x + cw - 70, y - 46, 56, 36, wk.bud, { fontSize: 18, bold: true, color: "#FFF", alignment: "right" });
      await card(s, x, y, cw, ch, wk.bg, "rounded-xl", BORDER_LIGHT);
      for (let j = 0; j < wk.tasks.length; j++) {
        await txt(s, x + 20, y + 20 + j * 80, cw - 40, 70, "▸ " + wk.tasks[j], { fontSize: 16, color: TEXT_PRIMARY, leading: 1.4 });
      }
    }
    // KPI row
    const kpis = [
      { l: "曝光量", m: "目标值", c: RED },
      { l: "互动率", m: ">= 3%", c: DARK_RED },
      { l: "搜索排名", m: "品牌词TOP3", c: "#D44050" },
      { l: "ROI", m: ">= 1.5", c: ACCENT_ORANGE },
    ];
    for (let i = 0; i < 4; i++) {
      const k = kpis[i];
      const x = P.l + 40 + i * 300;
      const y = P.t + 610;
      s.shapes.add({ geometry: "roundRect", position: { left: x, top: y, width: 270, height: 44 }, fill: k.c, borderRadius: "rounded-xl", line: { style: "solid", fill: "none", width: 0 } });
      await txt(s, x + 16, y + 6, 120, 32, k.l, { fontSize: 16, bold: true, color: "#FFF" });
      await txt(s, x + 140, y + 6, 120, 32, k.m, { fontSize: 16, bold: true, color: "rgba(255,255,255,0.9)", alignment: "right" });
    }
    await wb(outDir + "/slide-5.png", await deck.export({ slide: s, format: "png", scale: 1 }));
  }

  // ===== SLIDE 6: 能力匹配 =====
  {
    const s = deck.slides.add();
    s.background.fill = "#FFF";
    await headerBar(s, "05", "能力匹配", "为什么我能胜任这个岗位");
    const maps = [
      { from: "30+品牌客户对接执行", to: "达人招募与需求沟通", c: RED },
      { from: "2000万+广告流水管理", to: "预算分配与报价管控", c: DARK_RED },
      { from: "SOP流程搭建（抖音/百度）", to: "小红书媒介执行SOP", c: "#D44050" },
      { from: "数据归因分析 & ROI优化", to: "投放效果追踪与复盘", c: ACCENT_ORANGE },
      { from: "跨部门协同（设计/媒介/财务）", to: "内容审核与出品把控", c: RED },
    ];
    for (let i = 0; i < 5; i++) {
      const m = maps[i];
      const y = P.t + 140 + i * 96;
      await card(s, P.l, y, CL - 40, 76, LIGHT_BG, "rounded-xl", BORDER_LIGHT);
      await txt(s, P.l + 20, y + 22, CL - 80, 32, "\u2713 " + m.from, { fontSize: 17, bold: true, color: TEXT_PRIMARY });
      const ar = s.shapes.add({ geometry: "textbox", position: { left: CL - 10, top: y + 20, width: 40, height: 36 }, fill: "none", line: { style: "solid", fill: "none", width: 0 } });
      ar.text = "\u2192";
      ar.text.style = { fontSize: 28, bold: true, color: m.c };
      ar.alignment = "center";
      await card(s, P.l + CL + G, y, CR - 20, 76, m.c, "rounded-xl", null);
      await txt(s, P.l + CL + G + 20, y + 22, CR - 60, 32, m.to, { fontSize: 17, bold: true, color: "#FFF" });
    }
    await card(s, P.l, P.t + 630, P.w - 144, 72, LIGHT_BG, "rounded-xl", BORDER_LIGHT);
    await txt(s, P.l + 24, P.t + 642, P.w - 192, 56, String.fromCharCode(8220) + "我不是只做执行的人，而是能从品牌视角理解平台逻辑、推动营销闭环的项目经理。" + String.fromCharCode(8221), { fontSize: 18, italic: true, color: TEXT_SECONDARY, alignment: "center" });
    await wb(outDir + "/slide-6.png", await deck.export({ slide: s, format: "png", scale: 1 }));
  }

  // Export
  const pptx = await PresentationFile.exportPptx(deck);
  await pptx.save("/Users/cxuan/Documents/New project/work/presentations/xiaohongshu-media-analysis/美妆赛道小红书媒介分析.pptx");
  console.log("DONE");
}

main().catch(e => { console.error(e); process.exitCode = 1; });
