#!/usr/bin/env python3
"""Generate Jessica's styled resume PDF using reportlab."""

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm, cm, inch
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, KeepTogether
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT, TA_JUSTIFY

# Register fonts
pdfmetrics.registerFont(TTFont('STHeiti', '/System/Library/Fonts/STHeiti Medium.ttc'))
pdfmetrics.registerFont(TTFont('STHeitiL', '/System/Library/Fonts/STHeiti Light.ttc'))

FONT_REG = 'STHeitiL'
FONT_MD = 'STHeiti'

# Colors - teal accent
TEAL = colors.Color(0, 0.45, 0.42)        # Dark teal for headers/accent
TEAL_LIGHT = colors.Color(0.9, 0.96, 0.95) # Very light teal for left column bg
TEAL_DARK = colors.Color(0, 0.3, 0.28)     # Even darker teal for name area
GRAY_TEXT = colors.Color(0.25, 0.25, 0.25)  # Body text gray
WHITE = colors.Color(1, 1, 1)
BLACK = colors.Color(0, 0, 0)

# Page setup
PAGE_W, PAGE_H = A4  # 595.27 x 841.89
LEFT_MARGIN = 20 * mm
RIGHT_MARGIN = 20 * mm
TOP_MARGIN = 15 * mm
BOTTOM_MARGIN = 15 * mm

CONTENT_W = PAGE_W - LEFT_MARGIN - RIGHT_MARGIN
LEFT_COL_W = CONTENT_W * 0.32   # ~186pts
RIGHT_COL_W = CONTENT_W * 0.68  # ~409pts

doc = SimpleDocTemplate(
    "/Users/cxuan/Documents/New project/求职辅助/江采璇_简历_优化版.pdf",
    pagesize=A4,
    leftMargin=LEFT_MARGIN,
    rightMargin=RIGHT_MARGIN,
    topMargin=TOP_MARGIN,
    bottomMargin=BOTTOM_MARGIN,
)

styles = getSampleStyleSheet()

# Custom styles
def ns(name, **kw):
    """Create a named ParagraphStyle."""
    kw.setdefault('fontname', FONT_REG)
    kw.setdefault('fontsize', 10)
    kw.setdefault('leading', 14)
    return ParagraphStyle(name, parent=styles['Normal'], **kw)

style_name = ns('Name', fontname=FONT_MD, fontsize=22, leading=26,
                textColor=WHITE, spaceAfter=4)
style_contact = ns('Contact', fontname=FONT_REG, fontsize=9, leading=13,
                   textColor=colors.Color(0.95,0.95,0.95))
style_section_en = ns('SectionEn', fontname=FONT_MD, fontsize=13, leading=16,
                      textColor=TEAL, spaceBefore=6, spaceAfter=4)
style_section_cn = ns('SectionCn', fontname=FONT_REG, fontsize=11, leading=14,
                      textColor=GRAY_TEXT, spaceAfter=4)
style_left_label = ns('LeftLabel', fontname=FONT_MD, fontsize=10, leading=14,
                      textColor=TEAL_DARK, spaceAfter=1)
style_left_sub = ns('LeftSub', fontname=FONT_REG, fontsize=9, leading=12,
                    textColor=GRAY_TEXT, spaceAfter=1)
style_bullet = ns('Bullet', fontname=FONT_REG, fontsize=9, leading=13.5,
                  textColor=GRAY_TEXT, leftIndent=10, bulletIndent=4,
                  spaceBefore=1, spaceAfter=1)

style_left_space = ns('LeftSpace', fontname=FONT_REG, fontsize=6, leading=8,
                      spaceAfter=2)
style_header_right = ns('HeaderRight', fontname=FONT_REG, fontsize=9, leading=13,
                        textColor=GRAY_TEXT, alignment=TA_RIGHT)
style_summary = ns('Summary', fontname=FONT_REG, fontsize=9, leading=13,
                  textColor=colors.Color(0.95,0.95,0.95), alignment=TA_RIGHT)
style_divider = ns('Divider', fontname=FONT_REG, fontsize=7, leading=7,
                   textColor=TEAL, spaceBefore=2, spaceAfter=2)
style_photo_info = ns('PhotoInfo', fontname=FONT_REG, fontsize=9, leading=13,
                      textColor=colors.Color(0.95,0.95,0.95), alignment=TA_RIGHT)

story = []

# ===== HEADER =====
# Full-width header bar with name and contact
header_data = [
    [
        Paragraph("江 采 璇<br/>Jessica", style_name),
        Paragraph("男 · 31岁<br/>131-1365-8167<br/>求职城市：深圳<br/>期望薪资：12-15K", style_contact),
    ]
]
# Actually let me redo: name on left, contact on right
header_data = [
    [
        Paragraph("江 采 璇<br/>Jessica", style_name),
    ],
    [
        Paragraph("9年互联网广告与运营经验 | 求职城市：深圳 | 期望薪资：12-15K", style_contact),
    ],
]
header_table = Table(header_data, colWidths=[CONTENT_W])
header_table.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, -1), TEAL_DARK),
    ('ALIGN', (0, 0), (-1, 0), 'LEFT'),
    ('ALIGN', (0, 1), (-1, 1), 'CENTER'),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('LEFTPADDING', (0, 0), (-1, -1), 0),
    ('RIGHTPADDING', (0, 0), (-1, -1), 0),
    ('TOPPADDING', (0, 0), (-1, -1), 8),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
]))
story.append(header_table)
story.append(Spacer(1, 8))

# ===== SECTION: 个人优势 =====
story.append(Paragraph("PERSONAL ADVANTAGES", style_section_en))
story.append(Paragraph("个 人 优 势", style_section_cn))
story.append(Paragraph("━" * 40, style_divider))

advantages = [
    "9年互联网广告与运营经验，深耕腾讯广点通、字节巨量引擎、百度、抖音、小红书等主流投放平台，覆盖新媒体运营、渠道管理、广告执行、客户运营及增长运营全链路",
    "数据驱动增长：主导抖音获客投放从0到1搭建，线索成本降低68%，投产比稳定1.9，月均线索量增长22.5%，线索有效率峰值88.9%",
    "渠道管理：管理200+引流公众号渠道，建立渠道分级制度与SOP，优化调整后75%以上盈利账号占比，人力成本降低30%",
    "客户运营：服务30+活跃客户，半年累计广告流水2000万+，项目100%按时交付，客户满意度提升30%，续费率增加25%",
]

adv_data = []
for adv in advantages:
    adv_data.append(Paragraph(f"• {adv}", style_bullet))
adv_data.append(Spacer(1, 3))

adv_table = Table([adv_data], colWidths=[RIGHT_COL_W])
story.append(adv_table)
story.append(Spacer(1, 4))

# ===== WORK EXPERIENCE: Two-column layout =====
story.append(Paragraph("WORK EXPERIENCE", style_section_en))
story.append(Paragraph("工 作 经 历", style_section_cn))
story.append(Paragraph("━" * 40, style_divider))

# Experience data
experiences = [
    {
        "period": "2025.04 — 2026.06",
        "company": "深圳市欧捷科技有限公司",
        "role": "市场营销策划",
        "details": [
            "主导抖音获客投放从0到1搭建，制定投放策略、规划素材方向、建立数据监测与复盘机制，完成从方案制定到测试优化的全流程推进",
            "线索成本降低68%，整体投产比稳定在1.9，月均线索量增长22.5%",
            "线索有效率峰值达88.9%，月均有效率保持在60%以上",
            "建立销售、新媒体、内容团队的SOP流程，推动线索获取到转化的全流程衔接，提升跨部门协作效率",
            "搭建数据跟踪机制，监控线索质量及转化情况，为业务决策提供数据支持",
        ],
    },
    {
        "period": "2024.03 — 2025.02",
        "company": "深圳辉煌明天科技有限公司",
        "role": "广告执行AE",
        "details": [
            "独立负责30+活跃客户的全流程对接执行，服务覆盖社交、金融、电商、视听音乐、本地生活等多行业客户",
            "半年累计广告流水2000万+，项目100%按时上线",
            "推进百度、腾讯、头条、抖音、快手、荣耀厂商等主流媒体平台的开户、预算管理、合同审核及项目上线",
            "协调设计、媒介、财务等多部门协作，保障项目进度与流程顺畅",
            "客户满意度提升30%，续费率增加25%",
        ],
    },
    {
        "period": "2022.02 — 2024.01",
        "company": "深圳市潮生活新媒体有限公司",
        "role": "渠道运营",
        "details": [
            "管理200+引流公众号渠道，建立渠道等级制度，成功优化调整100+投放账号，实现75%以上盈利账号占比",
            "搭建渠道管理机制及运营标准流程（SOP），提高项目执行效率，人力成本降低30%",
            "对接广州日报、深圳新闻网、南方都市报等头部渠道/媒体资源，推进合作流程、合同签订及项目落地",
            "跟踪项目投放数据，完成数据清洗、整理及效果分析，输出渠道效果评估报告",
        ],
    },
    {
        "period": "2019.01 — 2021.11",
        "company": "深圳盛灿科技股份有限公司",
        "role": "运营专员",
        "details": [
            "搭建腾讯系社交平台广告投放体系，执行方案策划、广告文案创意设计，实现最终落地投放",
            "优化广告产品投放效果，结合用户需求和广告主需求，对广告产品和市场数据进行深度分析",
            "负责针对广告主Campaign包装社交广告产品，监控效果运营，输出结案报告",
            "腾讯广点通项目（有钱花/度小满/省呗/小花钱包）：ROI提升至1.5",
            "腾讯朋友圈项目（广州人保/穗岁康/招联金融/中信银行/澳门金沙）：品牌曝光百万以上，广告点击率1.5%",
        ],
    },
    {
        "period": "2017.03 — 2018.11",
        "company": "深圳易思智科技有限公司",
        "role": "新媒体运营",
        "details": [
            "代运营微信公众号，紧追社会热点，结合公众号调性策划口碑营销、事件营销等创意活动",
            "每月分析粉丝增长、图文阅读数据及行业内相关公众号运营概况，输出月度运营方案并执行",
            "完成推广项目内容交付，输出策划方案，设计营销物料（海报、信息图、H5）40+",
            "运营公司数字平台产品，参与产品测试与反馈，支援线下活动推广",
            "公众号运营：热点借势+长线IP策略打造华为合作伙伴公众号标杆案例，账号粉丝增长20%",
        ],
    },
]

exp_blocks = []
for i, exp in enumerate(experiences):
    # Skip divider before first entry
    if i > 0:
        exp_blocks.append(Spacer(1, 4))
        exp_blocks.append(Paragraph("━" * 55, style_divider))
        exp_blocks.append(Spacer(1, 2))
    
    # Left column content
    left_content = [
        Paragraph(exp["company"], style_left_label),
        Paragraph(exp["role"], style_left_sub),
        Paragraph(exp["period"], style_left_sub),
    ]
    left_data = [[Paragraph("\n".join(p.text for p in left_content), 
                           ns('LeftBlock', fontname=FONT_REG, fontsize=9, leading=13,
                              textColor=GRAY_TEXT, spaceBefore=0, spaceAfter=0))]
                 ]
    left_table = Table(left_data, colWidths=[LEFT_COL_W - 4])
    left_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), TEAL_LIGHT),
        ('BOX', (0, 0), (-1, -1), TEAL, 0.5),
        ('LEFTPADDING', (0, 0), (-1, -1), 6),
        ('RIGHTPADDING', (0, 0), (-1, -1), 4),
        ('TOPPADDING', (0, 0), (-1, -1), 4),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ]))
    
    # Right column content
    right_bullets = []
    for d in exp["details"]:
        right_bullets.append(Paragraph(f"• {d}", style_bullet))
    
    right_data = [[Paragraph("\n".join(b.text for b in right_bullets),
                             ns('RightBlock', fontname=FONT_REG, fontsize=9, leading=13,
                                textColor=GRAY_TEXT, spaceBefore=0, spaceAfter=0))]
                  ]
    right_table = Table(right_data, colWidths=[RIGHT_COL_W - 4])
    right_table.setStyle(TableStyle([
        ('LEFTPADDING', (0, 0), (-1, -1), 4),
        ('RIGHTPADDING', (0, 0), (-1, -1), 4),
        ('TOPPADDING', (0, 0), (-1, -1), 2),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 2),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ]))
    
    # Combine left and right into one row
    combo = Table([[left_table, right_table]], 
                  colWidths=[LEFT_COL_W, RIGHT_COL_W])
    combo.setStyle(TableStyle([
        ('VALIGN', (0, 0), (0, -1), 'TOP'),
        ('VALIGN', (1, 0), (1, -1), 'TOP'),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
        ('TOPPADDING', (0, 0), (-1, -1), 0),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 0),
    ]))
    exp_blocks.append(combo)

full_exp = Table([exp_blocks], colWidths=[CONTENT_W])
story.append(full_exp)
story.append(Spacer(1, 6))

# ===== EDUCATION =====
story.append(Paragraph("EDUCATION", style_section_en))
story.append(Paragraph("教 育 经 历", style_section_cn))
story.append(Paragraph("━" * 40, style_divider))

edu_items = [
    Paragraph("珠海城市职业技术学院 ｜ 计算机网络技术 ｜ 大专", 
              ns('EduLine', fontname=FONT_MD, fontsize=10, leading=14, textColor=GRAY_TEXT)),
    Paragraph("2014 — 2017", 
              ns('EduDate', fontname=FONT_REG, fontsize=9, leading=12, textColor=colors.Color(0.45, 0.45, 0.45))),
]
edu_table = Table([edu_items], colWidths=[RIGHT_COL_W])
edu_table.setStyle(TableStyle([
    ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ('LEFTPADDING', (0, 0), (-1, -1), 0),
    ('TOPPADDING', (0, 0), (-1, -1), 1),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 1),
]))
story.append(edu_table)
story.append(Spacer(1, 4))

# ===== CERTIFICATIONS =====
story.append(Paragraph("QUALIFICATIONS", style_section_en))
story.append(Paragraph("资 格 证 书", style_section_cn))
story.append(Paragraph("━" * 40, style_divider))

cert_items = [
    Paragraph("• 百度AI营销认证（初级）", style_bullet),
    Paragraph("• 全国计算机等级考试二级", style_bullet),
]
cert_table = Table([cert_items], colWidths=[RIGHT_COL_W])
cert_table.setStyle(TableStyle([
    ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ('LEFTPADDING', (0, 0), (-1, -1), 0),
    ('TOPPADDING', (0, 0), (-1, -1), 1),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 1),
]))
story.append(cert_table)

# Build PDF
doc.build(story)
print("PDF generated successfully!")
