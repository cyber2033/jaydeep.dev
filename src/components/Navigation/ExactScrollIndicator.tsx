import { useState, useEffect } from 'react'

export function ExactScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(['0', '0', '0'])
  const [visible, setVisible] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = maxScroll > 0 ? Math.round((scrollY / maxScroll) * 100) : 0
      const formatted = String(progress).padStart(3, '0').split('')
      setScrollProgress(formatted)
      setVisible(scrollY > 250)

      // Check if overlapping dark sections (e.g. contact or footer)
      const footer = document.querySelector('#footer')
      const contact = document.querySelector('#contact')
      let dark = false
      const indicatorY = window.innerHeight / 2

      if (footer) {
        const rect = footer.getBoundingClientRect()
        if (indicatorY >= rect.top && indicatorY <= rect.bottom) dark = true
      }
      if (contact) {
        const rect = contact.getBoundingClientRect()
        if (indicatorY >= rect.top && indicatorY <= rect.bottom) dark = true
      }
      setIsDark(dark)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`scroll-indicator ${visible ? 'is-visible' : ''} ${isDark ? 'is-dark' : ''}`}
      aria-hidden="true"
    >
      <div className="scroll-indicator-number">
        <span>{scrollProgress[0]}</span>
        <span>{scrollProgress[1]}</span>
        <span>{scrollProgress[2]}</span>
      </div>
      <div className="scroll-indicator-line" />
    </div>
  )
}
