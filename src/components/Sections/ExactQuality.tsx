import { useEffect, useRef, useState } from 'react'

export function ExactQuality() {
  const sectionRef = useRef<HTMLElement>(null)
  const [counts, setCounts] = useState([0, 0, 0, 0])
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el || hasAnimated) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true)
          const startTime = performance.now()
          const duration = 1200

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            // Codarox cubic ease-out curve
            const easeOut = 1 - Math.pow(1 - progress, 3)
            const currentVal = Math.floor(easeOut * 100)

            setCounts([currentVal, currentVal, currentVal, currentVal])

            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setCounts([100, 100, 100, 100])
            }
          }

          requestAnimationFrame(animate)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [hasAnimated])

  const scores = [
    {
      title: 'Performance',
      desc: 'Optimized assets, sub-second TTFB, efficient GPU WebGL rendering, and zero layout shift.',
      score: counts[0],
    },
    {
      title: 'Accessibility',
      desc: 'Semantic HTML5, ARIA landmarks, WCAG AAA contrast ratio, and keyboard navigation.',
      score: counts[1],
    },
    {
      title: 'Best Practices',
      desc: 'Modern TypeScript standards, CSP compliance, HTTPS secure architecture, and zero console errors.',
      score: counts[2],
    },
    {
      title: 'SEO',
      desc: 'Rich JSON-LD schema, open-graph metadata, semantic headers, and search-optimized structure.',
      score: counts[3],
    },
  ]

  return (
    <section id="engineering-quality" ref={sectionRef}>
      <div className="section-header quality-header">
        <p className="section-label">Engineering Quality</p>

        <h2>
          Quality you can<br />
          <span>measure.</span>
        </h2>

        <p className="intro">
          Every page of this portfolio was carefully engineered for peak performance, accessibility,
          best practices and technical SEO using modern web standards and verified audit metrics.
        </p>
      </div>

      <div className="quality-dashboard">
        <div className="quality-dashboard-header">
          <span>LIGHTHOUSE AUDIT</span>
          <span>VERIFIED 100/100</span>
        </div>

        <div className="quality-dashboard-grid">
          {scores.map((s) => (
            <article key={s.title} className="quality-score">
              <div className="quality-score-number">
                <span className="quality-score-value">{s.score}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>

        <div className="quality-dashboard-footer">
          Verified with Google Lighthouse across every audited category (100 / 100 / 100 / 100).
        </div>
      </div>
    </section>
  )
}
