function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-layout">
          {/* Portrait */}
          <div className="about-portrait reveal">
            <div className="portrait-frame">
              <img src="/assets/photo_0.png" alt="江采璇" />
            </div>
            <div className="portrait-accent" />
            <div className="portrait-number">01</div>
          </div>
          
          {/* Info */}
          <div className="about-info">
            <p className="section-label reveal">关于我</p>
            <h2 className="about-name reveal reveal-delay-1">江采璇</h2>
            <p className="about-role reveal reveal-delay-2">视觉增长运营 / 营销项目经理 / 客户运营</p>
            
            <p className="about-text reveal reveal-delay-2">
              9年互联网广告及运营经验，深耕腾讯、字节、百度、荣耀厂商等主流平台，
              覆盖新媒体运营、渠道运营、广告项目执行、客户运营及增长运营。
              擅长项目全生命周期管理，以ROI为导向，通过精细化运营实现线索成本大幅降低，
              客户季度消耗流水2000万+，负责活跃客户30+。
            </p>
            
            <div className="about-metrics reveal reveal-delay-3">
              <div className="metric">
                <div className="metric-value">9+</div>
                <div className="metric-label">年互联网<br />运营经验</div>
              </div>
              <div className="metric">
                <div className="metric-value">30+</div>
                <div className="metric-label">活跃客户<br />持续服务</div>
              </div>
              <div className="metric">
                <div className="metric-value">2000万+</div>
                <div className="metric-label">季度客户<br />消耗流水</div>
              </div>
            </div>
            
            <div className="about-contact reveal reveal-delay-4">
              <div className="contact-row">
                <span className="dot" />
                13113658167
              </div>
              <div className="contact-row">
                <span className="dot" />
                jessica.jiang@email.com
              </div>
              <div className="contact-row">
                <span className="dot" />
                中国
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
