import type { Project } from '../../data/projects'

interface CaseStudyModalProps {
  project: Project | null
  onClose: () => void
}

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  if (!project) return null

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          padding: 'clamp(1.5rem, 4vw, 3rem)',
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRadius: '2rem',
          background: '#ffffff',
          color: '#121317',
          boxShadow: '0 30px 90px rgba(0,0,0,0.3)',
          border: '1px solid rgba(33, 34, 38, 0.1)',
        }}
      >
        {/* Top bar with Eyebrow and Close button */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
            <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#6f7278', fontWeight: 600 }}>
              CASE STUDY &bull; {project.index}
            </span>
            <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '999px', background: 'var(--theme-surface-surface-container-higher)', border: '1px solid var(--theme-outline-variant)', color: '#45474D', fontWeight: 500 }}>
              {project.year}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="button secondary"
            style={{ padding: '0.4rem 0.8rem', minHeight: 'auto', fontSize: '0.85rem' }}
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '1.2rem' }}>close</span>
            <span>Close</span>
          </button>
        </div>

        {/* Headline */}
        <h2 id="case-study-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 450, margin: '0 0 0.5rem 0', lineHeight: 1.1, color: '#121317', letterSpacing: '-0.04em' }}>
          {project.title}
        </h2>
        <p style={{ fontSize: '1rem', color: '#45474D', margin: '0 0 1.5rem 0', fontWeight: 500 }}>
          {project.category}
        </p>

        {/* Lead overview */}
        <div style={{ padding: '1.5rem', background: '#F8F9FC', borderRadius: '1.2rem', border: '1px solid rgba(33,34,38,0.06)', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontSize: '1.05rem', lineHeight: 1.6, color: '#121317' }}>
            {project.lead}
          </p>
        </div>

        {/* Metrics Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          {project.metrics.map((m) => (
            <div
              key={m.label}
              style={{
                padding: '1.2rem 1rem',
                borderRadius: '1rem',
                border: '1px solid rgba(33,34,38,0.08)',
                background: '#FFFFFF',
                textAlign: 'center',
                boxShadow: '0 4px 14px rgba(0,0,0,0.03)',
              }}
            >
              <div style={{ fontSize: '1.6rem', fontWeight: 600, color: '#121317', letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums' }}>
                {m.value}
              </div>
              <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6f7278', marginTop: '0.35rem', fontWeight: 500 }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Problem & Engineering Solution */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ padding: '1.5rem', borderRadius: '1.2rem', border: '1px solid rgba(33,34,38,0.08)', background: '#F8F9FC' }}>
            <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#6f7278', margin: '0 0 0.8rem 0', fontWeight: 600 }}>
              The Problem
            </h3>
            <p style={{ margin: 0, fontSize: '0.92rem', lineHeight: 1.65, color: '#45474D' }}>
              {project.challenge}
            </p>
          </div>

          <div style={{ padding: '1.5rem', borderRadius: '1.2rem', border: '1px solid rgba(33,34,38,0.08)', background: '#F8F9FC' }}>
            <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#121317', margin: '0 0 0.8rem 0', fontWeight: 600 }}>
              Engineering Solution
            </h3>
            <p style={{ margin: 0, fontSize: '0.92rem', lineHeight: 1.65, color: '#45474D' }}>
              {project.solution}
            </p>
          </div>
        </div>

        {/* Specifications & Role Details */}
        <div style={{ padding: '1.25rem 1.5rem', borderRadius: '1.2rem', background: '#F0F1F5', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '2rem', fontSize: '0.85rem' }}>
          <div>
            <span style={{ display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6f7278', marginBottom: '0.2rem' }}>Role</span>
            <strong style={{ color: '#121317' }}>{project.role}</strong>
          </div>
          <div>
            <span style={{ display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6f7278', marginBottom: '0.2rem' }}>Client / Context</span>
            <strong style={{ color: '#121317' }}>{project.client}</strong>
          </div>
          <div>
            <span style={{ display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6f7278', marginBottom: '0.2rem' }}>Timeline</span>
            <strong style={{ color: '#121317' }}>{project.duration}</strong>
          </div>
          <div>
            <span style={{ display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6f7278', marginBottom: '0.2rem' }}>Deliverable</span>
            <strong style={{ color: '#121317' }}>{project.deliverables}</strong>
          </div>
        </div>

        {/* Technologies */}
        <div style={{ marginBottom: '2.5rem' }}>
          <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#6f7278', fontWeight: 600, margin: '0 0 0.8rem 0' }}>
            Technologies & Libraries Deployed
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 500,
                  padding: '0.4rem 0.85rem',
                  borderRadius: '999px',
                  background: '#E6EAF0',
                  border: '1px solid rgba(33, 34, 38, 0.08)',
                  color: '#2F3034',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.8rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(33, 34, 38, 0.08)' }}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
              style={{ textDecoration: 'none' }}
            >
              <span>View Repository</span>
              <span className="material-symbols-outlined">open_in_new</span>
            </a>
          )}
          <button
            type="button"
            onClick={onClose}
            className="button secondary"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
