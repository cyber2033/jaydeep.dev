import { useState } from 'react'
import { ExactWaveCanvas } from '../Canvas/ExactWaveCanvas'

export function ExactContact() {
  const email = 'jaydeepdeore85@gmail.com'
  const phone = '+91 9021119250'

  const [form, setForm] = useState({ name: '', senderEmail: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.senderEmail || !form.message) return

    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Hi Jaydeep,\n\nName: ${form.name}\nEmail: ${form.senderEmail}\n\nMessage:\n${form.message}\n`
    )
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section id="contact">
      <div className="contact-card">
        <ExactWaveCanvas
          id="contact-wave-canvas"
          color="#8cecff"
          particleCount={7000}
          cameraY={95}
          cameraZ={230}
          waveHeight={22}
          speed={0.9}
        />

        <div className="contact-content" style={{ maxWidth: '960px', width: '100%', margin: '0 auto' }}>
          <p className="section-label" style={{ color: '#ffffffa6' }}>Contact</p>

          <h2>
            Let’s build<br />
            <span>something exceptional.</span>
          </h2>

          <p className="contact-intro">
            Have a machine learning project, AI decision support system, edge vision pipeline, or full-stack software
            collaboration in mind? Drop a message below or reach out directly.
          </p>

          {/* Quick Contact Form + Direct Actions Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              marginTop: '3rem',
              textAlign: 'left',
              width: '100%',
            }}
          >
            {/* Quick Contact Form */}
            <form
              onSubmit={handleSubmit}
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '1.5rem',
                padding: '2rem',
                backdropFilter: 'blur(16px)',
              }}
            >
              <h3 style={{ fontSize: '1.1rem', fontWeight: 550, color: '#fff', margin: '0 0 1.25rem 0' }}>
                Quick message
              </h3>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#ffffff8c', marginBottom: '0.4rem' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Johnson"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.75rem',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                    color: '#fff',
                    fontSize: '0.9rem',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#ffffff8c', marginBottom: '0.4rem' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@domain.com"
                  value={form.senderEmail}
                  onChange={(e) => setForm({ ...form, senderEmail: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.75rem',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                    color: '#fff',
                    fontSize: '0.9rem',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#ffffff8c', marginBottom: '0.4rem' }}>
                  Message
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Tell me about your project, idea, or role..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.75rem',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                    color: '#fff',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '0.85rem 1.25rem',
                  borderRadius: '999px',
                  background: '#ffffff',
                  color: '#121317',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  transition: 'background 0.2s ease, transform 0.2s ease',
                }}
              >
                <span>{submitted ? 'Message Ready (Opening Mail)' : 'Send message'}</span>
                <span className="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>arrow_forward</span>
              </button>
            </form>

            {/* Direct Connect Information */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.5rem',
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '1.5rem',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 550, color: '#fff', margin: '0 0 1rem 0' }}>
                  Direct channels
                </h3>
                <p style={{ color: '#ffffff8c', fontSize: '0.88rem', lineHeight: 1.6, margin: '0 0 1.5rem 0' }}>
                  Based in Malegaon / LPU Punjab, available for AI/ML engineering roles, research collaborations,
                  and software consulting.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <a
                    href={`mailto:${email}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      color: '#ffffff',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      padding: '0.6rem 0.8rem',
                      background: 'rgba(255,255,255,0.06)',
                      borderRadius: '0.75rem',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ color: '#8cecff', fontSize: '1.2rem' }}>mail</span>
                    <span>{email}</span>
                  </a>

                  <a
                    href={`tel:${phone}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      color: '#ffffff',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      padding: '0.6rem 0.8rem',
                      background: 'rgba(255,255,255,0.06)',
                      borderRadius: '0.75rem',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ color: '#34c759', fontSize: '1.2rem' }}>call</span>
                    <span>{phone}</span>
                  </a>
                </div>
              </div>

              <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#ffffff73', display: 'block', marginBottom: '0.8rem' }}>
                  Developer profiles
                </span>
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                  <a
                    href="https://github.com/cyber2033"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-button secondary"
                    style={{ minHeight: 'auto', padding: '0.5rem 1rem', fontSize: '0.82rem' }}
                  >
                    GitHub
                    <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>open_in_new</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/jaydeep-deore-14ba96320/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-button secondary"
                    style={{ minHeight: 'auto', padding: '0.5rem 1rem', fontSize: '0.82rem' }}
                  >
                    LinkedIn
                    <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>open_in_new</span>
                  </a>

                  <a
                    href="/Jaydeep_Deore.pdf"
                    download
                    className="contact-button secondary"
                    style={{ minHeight: 'auto', padding: '0.5rem 1rem', fontSize: '0.82rem' }}
                  >
                    Download CV
                    <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>download</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
