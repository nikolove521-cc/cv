import { useState, useRef, useEffect } from 'react'

function Carousel({ slides }) {
  const [active, setActive] = useState(0)
  const trackRef = useRef(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <div className="carousel-visual">
      <div className="carousel-track" ref={trackRef} style={{ transform: `translateX(-${active * 100}%)` }}>
        {slides.map((slide, i) => (
          <div key={i} className="carousel-slide">
            <img src={slide} alt={`Slide ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
      <div className="carousel-nav">
        {slides.map((_, i) => (
          <span key={i} className={`carousel-dot ${i === active ? 'active' : ''}`} />
        ))}
      </div>
    </div>
  )
}

/* Abstract data visualization card for project visuals */
function AbstractCard({ config }) {
  return (
    <div className="abstract-card">
      <div className="abstract-card-bg" style={{ background: config.bg || 'linear-gradient(135deg, #1a1a1a 0%, #141414 100%)' }} />
      <div className="abstract-card-grid" />
      
      {config.points?.map((pt, i) => (
        <div key={i} className="abstract-data-point" style={{ top: pt.top, left: pt.left }}>
          <span className="abstract-data-value">{pt.value}</span>
          <span className="abstract-data-label">{pt.label}</span>
        </div>
      ))}
      
      {config.bars?.map((bar, i) => (
        <div key={i} className="abstract-bar" style={{ bottom: bar.bottom }}>
          <div className="abstract-bar-fill" style={{ width: bar.width, background: bar.color || 'var(--gold)' }} />
        </div>
      ))}
      
      {config.circles?.map((circ, i) => (
        <div key={i} className="abstract-circle" style={{ ...circ.style }} />
      ))}
      
      {config.icon && (
        <div className="abstract-icon" style={config.iconStyle}>
          {config.icon}
        </div>
      )}
    </div>
  )
}

function Projects() {
  const projects = [
    {
      type: '策略方案',
      title: '达兔AI营销服务·渠道拓展方案',
      desc: '从0到1完成AI营销服务的单人渠道拓展策略，涵盖目标人群画像、触达路径设计、转化流程搭建及风险应对，实现线索量增长22.5%，线索成本下降68%。',
      tags: ['渠道拓展', 'SOP设计', 'AI营销', '策略规划'],
      visualType: 'abstract',
      abstractConfig: {
        bg: 'linear-gradient(135deg, #1a1815 0%, #0f0e0c 100%)',
        points: [
          { top: '15%', left: '10%', value: '+22.5%', label: '线索增长' },
          { top: '45%', left: '55%', value: '-68%', label: '成本下降' },
          { top: '70%', left: '20%', value: '1.9', label: '投产比' },
        ],
        bars: [
          { bottom: '20%', width: '78%' },
          { bottom: '35%', width: '52%' },
          { bottom: '50%', width: '90%' },
        ],
        circles: [
          { style: { width: 80, height: 80, top: '25%', right: '15%' } },
          { style: { width: 50, height: 50, bottom: '30%', right: '30%' } },
        ],
      },
    },
    {
      type: '品牌策划',
      title: 'ECHOEGROUP·品牌合作权益策划',
      desc: '深度拆解品牌合作与权益策划岗位，梳理ECHOEGROUP圈层商业模式与创始人IP矩阵，设计标准化品牌合作权益包，提出三个月落地执行路径。',
      tags: ['品牌策划', '权益设计', '圈层经济', 'IP运营'],
      visualType: 'carousel',
      images: ['/assets/project_echo_p1.png', '/assets/project_echo_p4.png', '/assets/project_echo_p5.png'],
    },
    {
      type: '媒介策略',
      title: '美妆赛道·小红书媒介执行策略',
      desc: '完成美妆赛道小红书投放全案，包括平台洞察、达人矩阵策略（头部/腰部/KOC分层）、内容方向拆解（测评/教程/故事/干货）及4周投放节奏规划。',
      tags: ['小红书', '媒介策略', '达人矩阵', '内容规划'],
      visualType: 'abstract',
      abstractConfig: {
        bg: 'linear-gradient(135deg, #18151a 0%, #0e0c10 100%)',
        points: [
          { top: '20%', left: '15%', value: '4周', label: '投放周期' },
          { top: '50%', left: '50%', value: '3层', label: '达人矩阵' },
        ],
        bars: [
          { bottom: '25%', width: '65%' },
          { bottom: '45%', width: '82%' },
        ],
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
            <path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4Z"/>
          </svg>
        ),
        iconStyle: { top: '20%', right: '15%' },
      },
    },
    {
      type: '线下活动',
      title: '参半·线下快闪活动全案策划',
      desc: '完成口腔护理品牌参半的线下快闪活动提案，含竞品分析（参半/usmile/云南白药/舒客）、场景化营销策略、快闪互动设计、预算分配及应急预案。',
      tags: ['线下活动', '品牌策划', '竞品分析', '全案执行'],
      visualType: 'carousel',
      images: ['/assets/project_event_p1.png', '/assets/project_event_p6.png', '/assets/project_event_p11.png', '/assets/project_event_p14.png'],
    },
    {
      type: '数字化运营',
      title: '华为生态伙伴大会·数字化运营',
      desc: '独立驻场执行华为生态伙伴大会全国巡演（兰州/杭州/深圳），服务超5000名参会者，完成签到系统部署、现场人员培训、突发应急处理，三站0重大事故。',
      tags: ['大型活动', '数字化运营', '项目管理', '现场执行'],
      visualType: 'abstract',
      abstractConfig: {
        bg: 'linear-gradient(135deg, #15181a 0%, #0c0e10 100%)',
        points: [
          { top: '18%', left: '12%', value: '5000+', label: '参会规模' },
          { top: '55%', left: '48%', value: '3站', label: '全国巡演' },
          { top: '75%', left: '22%', value: '0', label: '重大事故' },
        ],
        circles: [
          { style: { width: 100, height: 100, top: '30%', right: '10%' } },
        ],
      },
    },
  ]

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects-header">
          <div>
            <p className="section-label reveal">精选项目</p>
            <h2 className="section-title reveal reveal-delay-1">策划与策略案例</h2>
          </div>
          <p className="section-desc reveal reveal-delay-2" style={{ textAlign: 'right' }}>
            从策略拆解到方案落地，每一个项目都展现完整的策划思维与执行能力。
          </p>
        </div>
        
        <div className="project-grid">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className={`project-card reveal ${i === 0 ? 'project-featured' : 'project-standard'}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Visual area */}
              <div className="project-visual">
                {project.visualType === 'abstract' ? (
                  <AbstractCard config={project.abstractConfig} />
                ) : (
                  <Carousel slides={project.images} />
                )}
              </div>
              
              {/* Details */}
              <div className="project-details">
                <span className="project-type">{project.type}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="tag">{tag}</span>
                  ))}
                </div>
                <a href="#contact" className="project-link">
                  了解详情 <span className="project-link-arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
