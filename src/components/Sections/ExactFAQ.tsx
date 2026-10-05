import { useState } from 'react'

export function ExactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: 'What types of machine learning and software systems do you build?',
      a: 'I specialize in production-grade AI/ML pipelines, multimodal RAG systems, Explainable AI models (such as tree-based SHAP classifiers), edge computer vision (quantized for offline mobile inference), and interactive 3D browser telemetry built with Three.js and WebGL.',
    },
    {
      q: 'How do you address the "black box" problem in clinical or critical AI?',
      a: 'I implement Explainable AI (XAI) frameworks like SHAP (SHapley Additive exPlanations) and local feature attribution. This ensures that every prediction exposes exact per-feature contributions and waterfall drivers, giving human domain experts verifiable rationale rather than opaque confidence scores.',
    },
    {
      q: 'Can you deliver full-stack systems from scratch?',
      a: 'Yes. From mathematical formulation and model training in PyTorch/TensorFlow to backend asynchronous API architecture with FastAPI/Docker, vector database indexing with ChromaDB, and responsive high-performance frontends in React/TypeScript.',
    },
    {
      q: 'Why combine 3D graphics (Three.js/WebGL) with AI engineering?',
      a: 'Complex machine learning models operate in high-dimensional vector spaces that are difficult to interpret using static 2D charts alone. Browser-native WebGL allows operators to interact directly with volumetric scans, 3D latent manifolds, and real-time telemetry at 60 FPS without installing local client software.',
    },
    {
      q: 'How do you approach real-time performance and edge optimization?',
      a: 'Performance is engineered at every layer: quantization of deep neural networks (using TensorFlow Lite and ONNX Runtime) for zero-latency offline edge inference, instanced WebGL rendering to eliminate CPU-GPU bottlenecking, and asynchronous non-blocking event loops for backend APIs.',
    },
  ]

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="faq">
      <div className="section-header">
        <p className="section-label">Frequently Asked Questions</p>

        <h2>
          Questions about<br />
          <span>how I build software.</span>
        </h2>

        <p className="intro">
          Everything from architecture and development workflows to model explainability
          and AI integration.
        </p>
      </div>

      <div className="faq-list">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx
          return (
            <article
              key={faq.q}
              className={`faq-item ${isOpen ? 'is-open' : ''}`}
            >
              <button
                className="faq-question"
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
              >
                <span>{faq.q}</span>
                <span className="faq-icon">+</span>
              </button>

              <div
                className="faq-answer"
                style={{
                  height: isOpen ? 'auto' : 0,
                  opacity: isOpen ? 1 : 0,
                  paddingBottom: isOpen ? '1rem' : 0,
                }}
              >
                <p>{faq.a}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
