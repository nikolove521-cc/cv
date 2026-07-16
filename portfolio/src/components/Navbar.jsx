import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="navbar-brand">Jessica Jiang</a>
      
      <ul className="navbar-links">
        <li><a href="#about">关于</a></li>
        <li><a href="#experience">经历</a></li>
        <li><a href="#projects">项目</a></li>
        <li><a href="#skills">能力</a></li>
        <li><a href="#life">生活</a></li>
      </ul>
      
      <a href="#contact" className="navbar-cta">联系我</a>
    </nav>
  )
}

export default Navbar
