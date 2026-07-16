function Skills() {
  const skills = [
    {
      title: '数据分析',
      desc: '从曝光到线索的全漏斗分析能力，熟练使用Excel进行数据清洗、归因分析及看板搭建。',
      items: ['全漏斗归因分析', 'Excel数据清洗', '数据看板搭建', '线索质量评估']
    },
    {
      title: '广告投放',
      desc: '深耕腾讯、字节、百度、荣耀等主流平台，精通各平台投放策略与素材规划。',
      items: ['腾讯广点通/朋友圈', '抖音/头条信息流', '百度SEM/信息流', '荣耀厂商广告']
    },
    {
      title: '客户运营',
      desc: '服务30+活跃客户，季度消耗流水2000万+，客户满意度提升30%。',
      items: ['大客户维护', '需求挖掘', '转介绍拓展', '满意度管理']
    },
    {
      title: '项目管理',
      desc: '熟悉项目全生命周期管理，具备需求梳理、方案制定、资源协调及项目落地能力。',
      items: ['需求梳理', 'SOP制定', '跨部门协作', '进度管控']
    },
    {
      title: '内容营销',
      desc: '策划口碑营销、事件营销等创意方案，累计设计营销物料40+。',
      items: ['热点借势', 'IP策划', '物料设计', 'H5落地页']
    },
    {
      title: '渠道扩展',
      desc: '管理200+引流公众号渠道，对接头部媒体，建立渠道等级制度。',
      items: ['渠道分级管理', '媒体资源对接', '合作流程优化', 'ROI持续优化']
    }
  ]

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills-header">
          <p className="section-label reveal">核心能力</p>
          <h2 className="section-title reveal reveal-delay-1">我的竞争优势</h2>
          <p className="section-desc reveal reveal-delay-2">
            九年实战沉淀，覆盖策略、执行、数据、客户四大维度。
          </p>
        </div>
        
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div 
              key={i} 
              className="skill-card reveal"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className="skill-number">0{i + 1}</div>
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-desc">{skill.desc}</p>
              <ul className="skill-items">
                {skill.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
