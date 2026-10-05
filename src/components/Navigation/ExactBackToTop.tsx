import { useState, useEffect } from 'react'

export function ExactBackToTop() {
  const [visible, setVisible] = useState(false)
  const [dashOffset, setDashOffset] = useState(132)
  const circumference = 132

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = maxScroll > 0 ? scrollY / maxScroll : 0
      setDashOffset(circumference - circumference * progress)
      setVisible(scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className={`back-to-top ${visible ? 'is-visible' : ''}`}
      aria-label="Back to top"
      onClick={scrollToTop}
      type="button"
    >
      <svg className="back-to-top-progress" viewBox="0 0 46 46">
        <circle
          cx="23"
          cy="23"
          r="21"
          style={{ strokeDashoffset: dashOffset }}
        />
      </svg>
      <span className="material-symbols-outlined">arrow_upward</span>
    </button>
  )
}
