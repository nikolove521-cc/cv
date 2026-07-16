function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-inner">
          <p className="section-label reveal">联系方式</p>
          
          <h2 className="contact-big-title reveal reveal-delay-1">
            期待与您<br /><span className="accent">携手合作</span>
          </h2>
          
          <p className="contact-subtitle reveal reveal-delay-2">
            无论是项目合作、客户咨询还是行业交流，<br />
            都欢迎随时联系我。
          </p>
          
          <div className="contact-methods reveal reveal-delay-3">
            <div className="contact-method">
              <span className="contact-method-label">电话</span>
              <a href="tel:13113658167" className="contact-method-value">13113658167</a>
            </div>
            <div className="contact-method">
              <span className="contact-method-label">邮箱</span>
              <a href="mailto:jessica.jiang@email.com" className="contact-method-value">jessica.jiang@email.com</a>
            </div>
            <div className="contact-method">
              <span className="contact-method-label">微信</span>
              <span className="contact-method-value">jessica_jiang</span>
            </div>
          </div>
          
          <a href="mailto:jessica.jiang@email.com" className="contact-email-btn reveal reveal-delay-4">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/>
            </svg>
            发送邮件
          </a>
          
          <div className="footer reveal reveal-delay-5">
            <span className="footer-text">© 2026 江采璇 Jessica. All rights reserved.</span>
            <div className="footer-links">
              <a href="#hero">回到顶部 ↑</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
