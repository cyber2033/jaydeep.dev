import { PROJECTS, type Project } from '../../data/projects'

interface ExactFeaturedProps {
  onOpenCaseStudy: (project: Project) => void
}

export function ExactFeatured({ onOpenCaseStudy }: ExactFeaturedProps) {
  const medbook = PROJECTS.find((p) => p.id === 'medbook') || PROJECTS[1]

  return (
    <div className="featured-project">
      <div className="featured-project-content">
        <p className="project-eyebrow">Main project</p>
        <div className="project-badges">
          <span>Co-Inventor</span>
          <span className="project-badge-link">Healthcare AI Research</span>
        </div>

        <h3>MedBook</h3>
        <p>
          An interpretable AI-based healthcare decision support pipeline for automated symptom extraction,
          multi-label disease prediction, priority triage classification, cost estimation, and hospital
          recommendation with sub-20ms inference latency.
        </p>

        <div className="project-tech">
          <span>Python</span>
          <span>XGBoost</span>
          <span>SHAP Values</span>
          <span>Scikit-learn</span>
          <span>NLP</span>
          <span>FastAPI</span>
        </div>

        <div className="project-links">
          <button
            onClick={() => onOpenCaseStudy(medbook)}
            className="project-link"
            type="button"
          >
            View Case Study
          </button>
          {medbook.githubUrl && (
            <a
              href={medbook.githubUrl}
              className="project-link project-link-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
        </div>
      </div>

      <div className="featured-project-visual" style={{ background: '#121317', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ color: '#fff', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.75rem', marginBottom: '1.25rem' }}>
            <span style={{ color: '#8cecff' }}>MEDBOOK TELEMETRY ENGINE</span>
            <span style={{ color: '#34c759' }}>ACTIVE &bull; &lt;20MS</span>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#b2bbc5', fontSize: '0.75rem', marginBottom: '0.35rem' }}>
              <span>Multi-Label Prediction Confidence</span>
              <span style={{ color: '#8cecff' }}>98.4%</span>
            </div>
            <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '999px', overflow: 'hidden' }}>
              <div style={{ width: '98%', height: '100%', background: '#8cecff', borderRadius: '999px' }} />
            </div>
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#b2bbc5', fontSize: '0.75rem', marginBottom: '0.35rem' }}>
              <span>SHAP Feature Attribution Waterfall</span>
              <span style={{ color: '#34c759' }}>+0.52 impact</span>
            </div>
            <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '999px', overflow: 'hidden' }}>
              <div style={{ width: '88%', height: '100%', background: '#34c759', borderRadius: '999px' }} />
            </div>
          </div>

          <div style={{ background: '#0a0a0d', padding: '1rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.05)', fontSize: '0.78rem', color: '#b7bfd9' }}>
            <span style={{ color: '#6f7278' }}>// Clinical Triage Allocation</span><br />
            &gt; Priority: TIER_1_URGENT<br />
            &gt; Model: XGBoost + SHAP TreeExplainer (14.2ms)
          </div>
        </div>
      </div>
    </div>
  )
}
