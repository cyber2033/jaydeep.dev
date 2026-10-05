export function ExactAbout() {
  const pillars = [
    {
      icon: '🧠',
      title: 'Explainable AI & ML Pipelines',
      desc: 'Architecting multi-label XGBoost classification, SHAP feature attribution waterfalls, and low-latency RAG vector retrieval pipelines.',
    },
    {
      icon: '⚙️',
      title: 'Systems & Algorithmic Mastery',
      desc: 'Ranked #1 in HackerRank C domain (620 pts), 200+ LeetCode challenges solved, and deep understanding of memory architectures & OS internals.',
    },
    {
      icon: '🎨',
      title: 'Graphic Design & Production UI/UX',
      desc: 'Rare combination of ML depth and UI/UX design discipline — turning complex model telemetry into intuitive, responsive web experiences.',
    },
  ]

  return (
    <section id="about">
      <div className="section-header">
        <p className="section-label">About me</p>
        <h2>
          Engineering intelligence<br />
          <span>beyond the interface.</span>
        </h2>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <p className="about-lead">
            I am a Computer Science undergraduate at Lovely Professional University specializing in Artificial Intelligence and Machine Learning, with hands-on experience building machine learning pipelines, explainable AI models, and full-stack AI-powered applications.
          </p>

          <p>
            I am the co-inventor of <strong>MedBook</strong> — an interpretable AI healthcare decision support system using multi-label XGBoost and SHAP for clinical disease prediction, priority triage, and transparent feature attribution with sub-20ms inference latency.
          </p>

          <p>
            From engineering quantized edge computer vision models for offline crop diagnosis (<strong>Smart Krishi AI</strong> — Smart India Hackathon 2025) to building multimodal streaming RAG assistants (<strong>EduGenie</strong>) and dynamic memory visualizers, my focus is on clean architecture, mathematical rigor, and real-world system behavior.
          </p>

          {/* 3 Core Engineering Pillars */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '1.75rem', marginBottom: '1.75rem' }}>
            {pillars.map((p) => (
              <div
                key={p.title}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  padding: '1rem',
                }}
              >
                <div style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{p.icon}</div>
                <h4 style={{ fontSize: '0.88rem', fontWeight: 600, color: '#fff', marginBottom: '0.35rem' }}>
                  {p.title}
                </h4>
                <p style={{ fontSize: '0.78rem', color: '#b2bbc5', lineHeight: 1.5, margin: 0 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">#1</span>
              <span className="stat-label">HackerRank C Domain</span>
            </div>

            <div className="stat">
              <span className="stat-number">200+</span>
              <span className="stat-label">LeetCode Solved</span>
            </div>

            <div className="stat">
              <span className="stat-number">&lt; 20ms</span>
              <span className="stat-label">MedBook Latency</span>
            </div>

            <div className="stat">
              <span className="stat-number">7.8</span>
              <span className="stat-label">B.Tech CSE CGPA</span>
            </div>
          </div>
        </div>

        <div className="about-photo" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <div style={{ position: 'relative', width: '100%', borderRadius: '18px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.12)', boxShadow: '0 16px 40px rgba(0, 0, 0, 0.4)' }}>
            <img
              src="/jaydeep-portrait.png"
              onError={(e) => {
                ;(e.target as HTMLImageElement).src = '/portfolio.png'
              }}
              alt="Jaydeep Deore"
              className="about-image"
              width="800"
              height="1000"
              loading="lazy"
              style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </div>

          {/* Active Availability Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              borderRadius: '999px',
              background: 'rgba(52, 199, 89, 0.1)',
              border: '1px solid rgba(52, 199, 89, 0.3)',
              fontSize: '0.78rem',
              color: '#34c759',
              fontFamily: 'JetBrains Mono, monospace',
              fontWeight: 500,
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#34c759',
                boxShadow: '0 0 8px #34c759',
                display: 'inline-block',
              }}
            />
            <span>Open for AI/ML Roles &amp; Research</span>
          </div>
        </div>
      </div>
    </section>
  )
}
