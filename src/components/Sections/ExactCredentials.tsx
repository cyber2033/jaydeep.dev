export function ExactCredentials() {
  const education = [
    {
      degree: 'B.Tech, Computer Science Engineering',
      institution: 'Lovely Professional University',
      location: 'Punjab, India',
      timeline: '2024 – 2028',
      score: 'CGPA: 7.8',
      desc: 'Specializing in Artificial Intelligence and Machine Learning, Algorithms, and Distributed Systems.',
    },
    {
      degree: 'Class XII, Higher Secondary (State Board)',
      institution: 'M.S.G College',
      location: 'Malegaon, Maharashtra',
      timeline: '2023',
      score: '84.00%',
      desc: 'Higher secondary coursework in Physics, Chemistry, Mathematics, and Computer Science.',
    },
    {
      degree: 'Class X, Secondary School (State Board)',
      institution: 'R.V. Shah High School',
      location: 'Malegaon, Maharashtra',
      timeline: '2021',
      score: '83.80%',
      desc: 'Foundation in science and mathematics with distinction.',
    },
  ]

  const achievements = [
    {
      title: "Ranked #1 in HackerRank's C Domain",
      detail: '25/25 challenges solved, 620 points earned. Additional star badges in C++ and Python.',
      category: 'Competitive Programming',
      badge: '#1 Rank',
    },
    {
      title: 'Solved 200+ Problems on LeetCode',
      detail: 'Consistent problem solving across Data Structures, Dynamic Programming, and Graph Algorithms.',
      category: 'Algorithms',
      badge: '200+ Solved',
    },
    {
      title: 'IIT Delhi zkFHE Hackathon Finalist',
      detail: 'Airchains x BECon 2025 organized by IIT Delhi, competed as part of Team Warriors.',
      category: 'Zero-Knowledge & AI',
      badge: 'IIT Delhi',
    },
    {
      title: 'Hack-N-Win 3.0 Hackathon',
      detail: 'Organized by D4 Community in collaboration with CGC University, Mohali.',
      category: 'Hackathon Innovation',
      badge: 'CGC Mohali',
    },
  ]

  const certifications = [
    'Deep Learning for Developers — Infosys Springboard (Sep 2026)',
    'Programming Using C++ — Infosys Springboard (Aug 2025)',
    'Database Management System Part-1 — Infosys Springboard (Aug 2026)',
    'Cyber Security Essentials (15+ hrs) — Tech Veda (Mar 2025)',
    'Computer Programming (72 Hours) — Lovely Professional University, iamneo (2025)',
    'C# (Basic) — HackerRank (2025)',
  ]

  return (
    <section id="credentials" style={{ borderTop: '1px solid var(--theme-outline-variant)', paddingBlock: '6rem' }}>
      <div className="section-header">
        <p className="section-label">Foundations & Records</p>
        <h2>
          Education, honors<br />
          <span>and competitive records.</span>
        </h2>
        <p className="intro">
          Academic foundation from Lovely Professional University, competitive rankings on HackerRank & LeetCode, and verified industry certifications.
        </p>
      </div>

      {/* Education Grid in Codarox Card Style */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        {education.map((edu) => (
          <article key={edu.degree} className="faq-item" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#6f7278', fontSize: '0.8rem', marginBottom: '0.75rem', fontFamily: 'monospace' }}>
                <span>{edu.timeline}</span>
                <span>{edu.location.split(',')[0]}</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 500, margin: '0 0 0.5rem 0', color: 'var(--theme-surface-on-surface)' }}>
                {edu.degree}
              </h3>
              <div style={{ color: 'var(--theme-surface-on-surface-variant)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                {edu.institution}
              </div>
              <p style={{ fontSize: '0.85rem', lineHeight: '1.6', color: 'var(--theme-surface-on-surface-variant)' }}>
                {edu.desc}
              </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--theme-outline-variant)' }}>
              <span style={{ fontSize: '0.75rem', color: '#6f7278', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Score</span>
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--theme-surface-on-surface)', background: 'var(--theme-surface-surface-container-higher)', padding: '0.2rem 0.6rem', borderRadius: '999px' }}>
                {edu.score}
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Achievements Row */}
      <div style={{ marginBottom: '3rem' }}>
        <h3 style={{ fontSize: '1.35rem', fontWeight: 500, marginBottom: '1.5rem', color: 'var(--theme-surface-on-surface)' }}>
          Competitive Programming & Hackathons
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
          {achievements.map((ach) => (
            <article key={ach.title} className="faq-item" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.72rem', color: '#6f7278', textTransform: 'uppercase' }}>{ach.category}</span>
                <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--theme-surface-on-surface)', background: 'var(--theme-surface-surface-container-higher)', padding: '0.15rem 0.5rem', borderRadius: '999px' }}>{ach.badge}</span>
              </div>
              <h4 style={{ fontSize: '1.05rem', margin: '0.5rem 0', fontWeight: 500, color: 'var(--theme-surface-on-surface)' }}>{ach.title}</h4>
              <p style={{ fontSize: '0.82rem', margin: 0, color: 'var(--theme-surface-on-surface-variant)', lineHeight: '1.6' }}>{ach.detail}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Certifications Row */}
      <div>
        <h3 style={{ fontSize: '1.35rem', fontWeight: 500, marginBottom: '1.5rem', color: 'var(--theme-surface-on-surface)' }}>
          Verified Technical Certifications
        </h3>
        <ul className="stack-list">
          {certifications.map((c) => (
            <li key={c} style={{ fontSize: '0.85rem', padding: '0.6rem 1.1rem' }}>
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
