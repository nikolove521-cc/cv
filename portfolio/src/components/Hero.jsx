function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-shape hero-shape-1" />
        <div className="hero-shape hero-shape-2" />
        <div className="hero-shape hero-shape-3" />
        <div className="hero-grid" />
        <div className="hero-overlay" />
      </div>
      
      <div className="hero-content">
        <p className="hero-greeting">视觉增长运营 · 营销项目经理</p>
        
        <h1 className="hero-title">
          江采璇<br /><span className="accent">Jessica</span>
        </h1>
        
        <p className="hero-subtitle">
          9年互联网广告与增长运营经验，深耕腾讯、字节、百度等平台，<br />
          以客户增长为目标，用数据驱动每一次决策。
        </p>
        
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            查看项目
          </a>
          <a href="#contact" className="btn-secondary">
            联系方式
          </a>
        </div>
      </div>
      
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}

export default Hero
