import { useState } from 'react'
import { PROJECTS, type Project } from '../../data/projects'

interface ExactExpertiseProps {
  onOpenCaseStudy: (project: Project) => void
}

type FilterCategory = 'all' | 'ai' | 'healthcare-agritech' | 'systems'

export function ExactExpertise({ onOpenCaseStudy }: ExactExpertiseProps) {
  const [filter, setFilter] = useState<FilterCategory>('all')

  const filterMap: Record<FilterCategory, (p: Project) => boolean> = {
    all: () => true,
    ai: (p) => p.id === 'edugenie' || p.id === 'medbook',
    'healthcare-agritech': (p) => p.id === 'medbook' || p.id === 'smartkrishi',
    systems: (p) => p.id === 'memvisualizer',
  }

  const filteredProjects = PROJECTS.filter(filterMap[filter])

  // Resume technical bullet points mapping
  const resumeBullets: Record<string, string[]> = {
    edugenie: [
      'Developed a multimodal AI assistant supporting text, high-res image analysis, and PDF-based question answering.',
      'Implemented RAG-based semantic search with LangChain, ChromaDB vector store, and live token-by-token streaming.',
      'Engineered an asynchronous FastAPI backend fortified with JWT authentication, rate limiting, and strict input validation.',
    ],
    medbook: [
      'Co-inventor of an interpretable AI healthcare decision support pipeline for automated symptom triage and hospital recommendation.',
      'Developed a multi-label XGBoost classification model to predict multiple co-occurring clinical conditions simultaneously.',
      'Embedded SHAP-based feature importance waterfalls for transparent per-condition attribution with sub-20ms inference latency.',
    ],
    smartkrishi: [
      'Smart India Hackathon 2025 platform for crop disease detection with confidence scoring and severity classification.',
      'Implemented EfficientNetB0 transfer learning using TensorFlow/Keras and quantized with TFLite for 100% offline edge inference.',
      'Integrated weather-based disease alerts, APMC digital slot booking, and multilingual voice interaction in Marathi, Hindi, and English.',
    ],
    memvisualizer: [
      'Interactive visual simulation tool demonstrating dynamic memory allocation routines: malloc, calloc, realloc, and free.',
      'Real-time tracking of pointer offsets, heap fragmentation, and block headers across First-Fit, Best-Fit, and Worst-Fit algorithms.',
      'Constructed a 60 FPS HTML5 Canvas engine to render byte-level boundary tags and heap compaction.',
    ],
  }

  return (
    <section id="expertise">
      <div className="section-header">
        <p className="section-label">Selected Projects</p>

        <h2>
          Building software<br />
          <span>across every layer.</span>
        </h2>

        <p className="intro">
          A selection of projects spanning multimodal generative AI assistants, edge computer vision,
          explainable healthcare decision systems, and systems-level memory models.
        </p>

        {/* Filter Navigation Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginTop: '2rem',
            justifyContent: 'center',
          }}
        >
          {[
            { id: 'all', label: 'All Projects (4)' },
            { id: 'ai', label: 'AI & Machine Learning (2)' },
            { id: 'healthcare-agritech', label: 'Healthcare & Agritech (2)' },
            { id: 'systems', label: 'Systems & Algorithms (1)' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id as FilterCategory)}
              style={{
                padding: '0.45rem 1rem',
                borderRadius: '999px',
                fontSize: '0.82rem',
                fontFamily: 'JetBrains Mono, monospace',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                background: filter === tab.id ? '#8cecff' : 'rgba(255, 255, 255, 0.05)',
                color: filter === tab.id ? '#0d131a' : '#cdd4dc',
                border: filter === tab.id ? '1px solid #8cecff' : '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="expertise-grid">
        {filteredProjects.map((proj) => (
          <article key={proj.id} className="expertise-card">
            {/* Visual Simulated Mockup per Project */}
            <div
              className="expertise-image"
              style={{
                background: '#0e1015',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.75rem',
                minHeight: '340px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              {/* EduGenie RAG Mockup */}
              {proj.id === 'edugenie' && (
                <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.6rem', fontSize: '0.75rem' }}>
                    <span style={{ color: '#8cecff', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34c759' }} />
                      EDUGENIE RAG STREAM
                    </span>
                    <span style={{ color: '#b2bbc5' }}>FastAPI + ChromaDB</span>
                  </div>

                  <div style={{ marginTop: '0.75rem', background: 'rgba(255,255,255,0.03)', padding: '0.85rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.06)', fontSize: '0.76rem' }}>
                    <div style={{ color: '#8cecff', marginBottom: '0.35rem' }}>📄 Context: transformer-attention.pdf (p.14)</div>
                    <div style={{ color: '#e5e5ea', lineHeight: 1.45 }}>
                      "Multi-head attention permits model to attend to information from different representation subspaces..."
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginTop: '0.75rem' }}>
                    <div style={{ background: 'rgba(0,0,0,0.4)', padding: '0.5rem', borderRadius: '6px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ color: '#86868b', fontSize: '0.65rem' }}>LATENCY</div>
                      <div style={{ color: '#8cecff', fontSize: '0.82rem', fontWeight: 600 }}>&lt;800ms</div>
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.4)', padding: '0.5rem', borderRadius: '6px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ color: '#86868b', fontSize: '0.65rem' }}>SIMILARITY</div>
                      <div style={{ color: '#34c759', fontSize: '0.82rem', fontWeight: 600 }}>0.94 cos</div>
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.4)', padding: '0.5rem', borderRadius: '6px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ color: '#86868b', fontSize: '0.65rem' }}>AUTH</div>
                      <div style={{ color: '#ffb020', fontSize: '0.82rem', fontWeight: 600 }}>JWT Pass</div>
                    </div>
                  </div>
                </div>
              )}

              {/* MedBook Healthcare Mockup */}
              {proj.id === 'medbook' && (
                <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.6rem', fontSize: '0.75rem' }}>
                    <span style={{ color: '#ff4d6a', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ff4d6a' }} />
                      MEDBOOK CLINICAL XAI
                    </span>
                    <span style={{ color: '#34c759' }}>&lt;20ms INFERENCE</span>
                  </div>

                  <div style={{ marginTop: '0.75rem', background: 'rgba(255,255,255,0.03)', padding: '0.85rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.06)', fontSize: '0.76rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                      <span style={{ color: '#b2bbc5' }}>SHAP Attribution Waterfall</span>
                      <span style={{ color: '#34c759' }}>+0.52 (High)</span>
                    </div>
                    <div style={{ width: '100%', height: '5px', background: 'rgba(255,255,255,0.08)', borderRadius: '999px', overflow: 'hidden' }}>
                      <div style={{ width: '88%', height: '100%', background: '#34c759' }} />
                    </div>
                    <div style={{ color: '#ff4d6a', marginTop: '0.5rem', fontSize: '0.72rem' }}>
                      &gt; Triage Priority: TIER_1_URGENT | Bed Allocated
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginTop: '0.75rem' }}>
                    <div style={{ background: 'rgba(0,0,0,0.4)', padding: '0.5rem', borderRadius: '6px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ color: '#86868b', fontSize: '0.65rem' }}>ROLE</div>
                      <div style={{ color: '#ff4d6a', fontSize: '0.78rem', fontWeight: 600 }}>Co-Inventor</div>
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.4)', padding: '0.5rem', borderRadius: '6px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ color: '#86868b', fontSize: '0.65rem' }}>MODEL</div>
                      <div style={{ color: '#8cecff', fontSize: '0.78rem', fontWeight: 600 }}>XGBoost Multi</div>
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.4)', padding: '0.5rem', borderRadius: '6px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ color: '#86868b', fontSize: '0.65rem' }}>EXPLAIN</div>
                      <div style={{ color: '#34c759', fontSize: '0.78rem', fontWeight: 600 }}>SHAP Tree</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Smart Krishi AI Mockup */}
              {proj.id === 'smartkrishi' && (
                <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.6rem', fontSize: '0.75rem' }}>
                    <span style={{ color: '#34c759', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34c759' }} />
                      SMART KRISHI AI (SIH 2025)
                    </span>
                    <span style={{ color: '#8cecff' }}>OFFLINE TFLITE</span>
                  </div>

                  <div style={{ marginTop: '0.75rem', background: 'rgba(255,255,255,0.03)', padding: '0.85rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.06)', fontSize: '0.76rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                      <span style={{ color: '#b2bbc5' }}>Target: Tomato Early Blight</span>
                      <span style={{ color: '#34c759' }}>98.4% Match</span>
                    </div>
                    <div style={{ width: '100%', height: '5px', background: 'rgba(255,255,255,0.08)', borderRadius: '999px', overflow: 'hidden' }}>
                      <div style={{ width: '98%', height: '100%', background: '#34c759' }} />
                    </div>
                    <div style={{ color: '#8cecff', marginTop: '0.5rem', fontSize: '0.72rem' }}>
                      &gt; APMC Mandi Slot #42 Reserved | Audio: मराठी / हिंदी
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginTop: '0.75rem' }}>
                    <div style={{ background: 'rgba(0,0,0,0.4)', padding: '0.5rem', borderRadius: '6px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ color: '#86868b', fontSize: '0.65rem' }}>VISION</div>
                      <div style={{ color: '#34c759', fontSize: '0.78rem', fontWeight: 600 }}>EffNetB0</div>
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.4)', padding: '0.5rem', borderRadius: '6px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ color: '#86868b', fontSize: '0.65rem' }}>EDGE</div>
                      <div style={{ color: '#8cecff', fontSize: '0.78rem', fontWeight: 600 }}>100% Offline</div>
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.4)', padding: '0.5rem', borderRadius: '6px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ color: '#86868b', fontSize: '0.65rem' }}>VOICE</div>
                      <div style={{ color: '#cdd4dc', fontSize: '0.78rem', fontWeight: 600 }}>3 Languages</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Dynamic Memory Allocation Visualizer Mockup */}
              {proj.id === 'memvisualizer' && (
                <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.6rem', fontSize: '0.75rem' }}>
                    <span style={{ color: '#ffb020', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ffb020' }} />
                      HEAP MEMORY ENGINE
                    </span>
                    <span style={{ color: '#8cecff' }}>HTML5 CANVAS 60FPS</span>
                  </div>

                  <div style={{ marginTop: '0.75rem', background: 'rgba(255,255,255,0.03)', padding: '0.85rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.06)', fontSize: '0.76rem' }}>
                    <div style={{ color: '#86868b', fontSize: '0.68rem', marginBottom: '0.4rem' }}>VIRTUAL ADDRESS SPACE (1024 BYTES)</div>
                    <div style={{ display: 'flex', gap: '3px', height: '18px', width: '100%', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ flex: '3', background: '#0071e3' }} title="Block A (Allocated)" />
                      <div style={{ flex: '1.5', background: 'rgba(255,255,255,0.15)' }} title="Free" />
                      <div style={{ flex: '4', background: '#34c759' }} title="Block B (Allocated)" />
                      <div style={{ flex: '2', background: 'rgba(255,255,255,0.15)' }} title="Free" />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#ffb020', marginTop: '0.5rem', fontSize: '0.72rem' }}>
                      <span>Algo: Best-Fit Allocator</span>
                      <span>Fragmentation: 22.4%</span>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginTop: '0.75rem' }}>
                    <div style={{ background: 'rgba(0,0,0,0.4)', padding: '0.5rem', borderRadius: '6px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ color: '#86868b', fontSize: '0.65rem' }}>ROUTINES</div>
                      <div style={{ color: '#ffb020', fontSize: '0.78rem', fontWeight: 600 }}>malloc / free</div>
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.4)', padding: '0.5rem', borderRadius: '6px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ color: '#86868b', fontSize: '0.65rem' }}>POINTERS</div>
                      <div style={{ color: '#8cecff', fontSize: '0.78rem', fontWeight: 600 }}>Exact Byte Track</div>
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.4)', padding: '0.5rem', borderRadius: '6px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ color: '#86868b', fontSize: '0.65rem' }}>SYSTEMS</div>
                      <div style={{ color: '#34c759', fontSize: '0.78rem', fontWeight: 600 }}>C Model</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="expertise-content">
              <span className="expertise-number" aria-hidden="true">
                {proj.index}
              </span>

              <div className="project-badges">
                <span>{proj.badge}</span>
                <span className="project-badge-link">{proj.category.split('·')[0]}</span>
              </div>

              <h3>{proj.title.split('—')[0]}</h3>

              <p style={{ marginBottom: '1rem' }}>{proj.lead}</p>

              {/* Exact Resume Key Technical Highlights */}
              {resumeBullets[proj.id] && (
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 1.25rem 0',
                    fontSize: '0.82rem',
                    color: '#b2bbc5',
                    lineHeight: 1.55,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                  }}
                >
                  {resumeBullets[proj.id].map((bullet, bIdx) => (
                    <li key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <span style={{ color: '#8cecff', fontSize: '0.85rem', lineHeight: '1.2' }}>•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              <ul className="expertise-tags">
                {proj.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>

              <div className="project-links">
                <button
                  onClick={() => onOpenCaseStudy(proj)}
                  className="project-link"
                  type="button"
                >
                  View Case Study
                </button>

                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    className="project-link project-link-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
