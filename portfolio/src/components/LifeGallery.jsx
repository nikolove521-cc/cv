function LifeGallery() {
  const photos = [
    { src: '/assets/life_1.jpg', caption: '在路上', span: 'gallery-item-1' },
    { src: '/assets/life_2.jpg', caption: '风景', span: 'gallery-item-2' },
    { src: '/assets/life_3.jpg', caption: '生活', span: 'gallery-item-3' },
    { src: '/assets/life_4.jpg', caption: '旅行', span: 'gallery-item-4' },
    { src: '/assets/life_5.jpg', caption: '日常', span: 'gallery-item-5' },
    { src: '/assets/life_6.jpg', caption: '瞬间', span: 'gallery-item-6' },
  ]

  return (
    <section className="life-gallery" id="life">
      <div className="container">
        <div className="gallery-header">
          <p className="section-label reveal">生活切片</p>
          <h2 className="section-title reveal reveal-delay-1">工作之外</h2>
          <p className="section-desc reveal reveal-delay-2">
            热爱探索，保持好奇。生活中的每一次出发，都是灵感的来源。
          </p>
        </div>
        
        <div className="gallery-grid">
          {photos.map((photo, i) => (
            <div key={i} className={`gallery-item ${photo.span} reveal`} style={{ transitionDelay: `${i * 0.08}s` }}>
              <img src={photo.src} alt={photo.caption} loading="lazy" />
              <div className="gallery-caption">{photo.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LifeGallery
