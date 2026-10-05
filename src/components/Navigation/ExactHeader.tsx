import { useState, useEffect } from 'react'

export function ExactHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let lastScroll = window.scrollY
    const handleScroll = () => {
      const currentScroll = window.scrollY
      if (!menuOpen) {
        setHidden(currentScroll > lastScroll && currentScroll > 80)
      }
      lastScroll = currentScroll
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [menuOpen])

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 930 && menuOpen) {
        setMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [menuOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      const headerOffset = 90
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  const handleDownloadCv = () => {
    const link = document.createElement('a')
    link.href = '/Jaydeep_Deore.pdf'
    link.download = 'Jaydeep_Deore.pdf'
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  return (
    <div className={`header-wrapper ${hidden ? 'is-hidden' : ''}`}>
      <header>
        <a
          href="#welcome"
          onClick={(e) => handleNavClick(e, '#welcome')}
          className="desktop-header-brand"
          aria-label="Jaydeep Deore home"
        >
          <img
            src="/jaydeep-portrait.png"
            onError={(e) => {
              ;(e.target as HTMLImageElement).src = '/portfolio.png'
            }}
            alt="Jaydeep Deore"
            style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }}
          />
          <span>Jaydeep Deore</span>
        </a>

        {/* Small Screen: Toggle */}
        <input
          className="menu-checkbox"
          type="checkbox"
          id="menu-checkbox"
          checked={menuOpen}
          onChange={(e) => setMenuOpen(e.target.checked)}
        />
        <label
          className="menu-button"
          htmlFor="menu-checkbox"
          role="button"
          aria-expanded={menuOpen}
          aria-label="Toggle Navigation Menu"
        >
          <svg className="menu-brand-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <line
              data-menu-brand-line="left"
              x1={menuOpen ? 4.5 : 5}
              y1={menuOpen ? 4.5 : 21}
              x2={menuOpen ? 19.5 : 12}
              y2={menuOpen ? 19.5 : 3}
              style={{ transition: 'x1 0.35s ease, y1 0.35s ease, x2 0.35s ease, y2 0.35s ease' }}
            />
            <line
              data-menu-brand-line="right"
              x1={menuOpen ? 19.5 : 12}
              y1={menuOpen ? 4.5 : 3}
              x2={menuOpen ? 4.5 : 19}
              y2={menuOpen ? 19.5 : 21}
              style={{ transition: 'x1 0.35s ease, y1 0.35s ease, x2 0.35s ease, y2 0.35s ease' }}
            />
            <line
              data-menu-brand-line="base"
              x1={5}
              y1={21}
              x2={12}
              y2={21}
              style={{
                opacity: menuOpen ? 0 : 1,
                transition: 'opacity 0.25s ease',
              }}
            />
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </label>

        <nav aria-label="Main navigation">
          <ul>
            <li>
              <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>
                Technologies
              </a>
            </li>
            <li>
              <a href="#credentials" onClick={(e) => handleNavClick(e, '#credentials')}>
                Education
              </a>
            </li>
            <li>
              <a href="#faq" onClick={(e) => handleNavClick(e, '#faq')}>
                FAQ
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile only */}
          <a href="/Jaydeep_Deore.pdf" download className="mobile-download">
            <span>Download CV</span>
            <span className="material-symbols-outlined">download</span>
          </a>
        </nav>

        <button id="download-cv" onClick={handleDownloadCv} type="button">
          <span>Download CV</span>
          <span className="material-symbols-outlined">download</span>
        </button>
      </header>
    </div>
  )
}
