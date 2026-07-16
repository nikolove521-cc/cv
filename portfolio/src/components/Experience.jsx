function Experience() {
  const experiences = [
    {
      period: '2025.04 — 至今',
      company: '深圳市欧捷科技有限公司',
      role: '市场营销策划',
      desc: '负责新业务市场验证、抖音百度渠道获客项目运营，协调销售与内容团队建立SOP流程，参与AI营销服务项目孵化。',
      highlights: ['线索量增长22.5%', '线索成本下降68%', '投产比稳定1.9', 'AI营销孵化']
    },
    {
      period: '2024.03 — 2025.02',
      company: '深圳辉煌明天科技有限公司',
      role: '广告执行 AE',
      desc: '负责京东、美团、优酷等头部品牌广告全流程对接，管理30+活跃客户，覆盖社交、金融、电商、视听音乐等行业。',
      highlights: ['半年流水2000万+', '客户满意度+30%', '续费率+25%', '100%按时上线']
    },
    {
      period: '2022.02 — 2024.01',
      company: '深圳市潮生活新媒体有限公司',
      role: '渠道运营',
      desc: '负责微信公众号渠道运营及合作资源管理，管理200+引流公众号渠道，建立渠道等级制度。',
      highlights: ['管理200+渠道', '人力成本-30%', '75%盈利账号', '头部媒体合作']
    },
    {
      period: '2019.01 — 2021.11',
      company: '深圳盛灿科技股份有限公司',
      role: '运营专员',
      desc: '搭建腾讯系社交平台广告投放，执行方案策划与广告文案创意设计，优化广告产品投放效果。',
      highlights: ['ROI提升至1.5', '品牌曝光百万+', '点击率1.5%', '多行业客户']
    },
    {
      period: '2017.03 — 2018.11',
      company: '深圳易思智科技有限公司',
      role: '新媒体运营',
      desc: '代运营华为合作伙伴微信公众号，策划口碑营销与事件营销，设计营销物料40+。',
      highlights: ['粉丝增长20%', '物料40+', '5000+参会管理', '标杆案例']
    }
  ]

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="exp-header">
          <p className="section-label reveal">职业经历</p>
          <h2 className="section-title reveal reveal-delay-1">9年深耕互联网广告与增长运营</h2>
          <p className="section-desc reveal reveal-delay-2">
            从新媒体运营到项目管理，从渠道扩展到客户增长，每一步都在积累更深的专业壁垒。
          </p>
        </div>
        
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-item reveal">
              <div className="timeline-dot" />
              <div className="timeline-period">{exp.period}</div>
              <div className="timeline-company">{exp.company}</div>
              <div className="timeline-role">{exp.role}</div>
              <div className="timeline-desc">{exp.desc}</div>
              <div className="timeline-tags">
                {exp.highlights.map((tag, j) => (
                  <span key={j} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
