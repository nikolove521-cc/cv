import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

function setupRevealObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
  )

  document.querySelectorAll('.reveal:not(.visible)').forEach((el) => observer.observe(el))
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Observe after DOM is painted
requestAnimationFrame(() => {
  setupRevealObserver()
})
