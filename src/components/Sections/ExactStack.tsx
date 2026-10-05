export function ExactStack() {
  const stackCategories = [
    {
      number: '01',
      title: 'Machine Learning & AI',
      desc: 'Supervised & unsupervised learning, gradient boosting, Explainable AI, NLP, and multimodal neural search.',
      items: [
        'Machine Learning',
        'Artificial Intelligence',
        'XGBoost',
        'Scikit-learn',
        'SHAP (Explainable AI)',
        'NLP',
        'Multi-Label Classification',
        'Model Explainability',
        'Data Preprocessing',
        'Pandas',
        'NumPy',
        'TensorFlow',
        'Keras',
        'TFLite Edge',
        'LangChain',
        'ChromaDB',
      ],
    },
    {
      number: '02',
      title: 'Programming Languages',
      desc: 'Compiled and interpreted languages for systems development, algorithmic computing, and scripting.',
      items: [
        'Python',
        'C (Rank #1 HackerRank)',
        'C++',
        'Java',
        'JavaScript',
        'TypeScript',
      ],
    },
    {
      number: '03',
      title: 'Web & Backend Architecture',
      desc: 'High-throughput asynchronous APIs, real-time token streaming, and document databases.',
      items: [
        'FastAPI',
        'Node.js',
        'Next.js',
        'REST APIs',
        'JSON',
        'HTML5',
        'CSS3',
        'MongoDB',
        'JWT Auth',
        'SSE Streaming',
      ],
    },
    {
      number: '04',
      title: 'Core Computer Science',
      desc: 'Foundational computer science principles applied in production systems and problem solving.',
      items: [
        'Data Structures & Algorithms',
        'Operating Systems',
        'OOPs (Object Oriented)',
        'DBMS (Database Management)',
        'Dynamic Memory Allocation',
        'System Architecture',
      ],
    },
    {
      number: '05',
      title: 'Tools, Platforms & Design',
      desc: 'Development environments, version control pipelines, interactive 3D, and visual user experience.',
      items: [
        'Git',
        'GitHub',
        'VS Code',
        'Jupyter Notebook',
        'Three.js / WebGL',
        'UI/UX Designing',
        'Graphic Design',
        'Vite',
      ],
    },
  ]

  return (
    <section id="skills">
      <div className="section-header">
        <p className="section-label">Technology Stack</p>

        <h2>
          Tools behind<br />
          <span>the systems.</span>
        </h2>

        <p className="intro">
          Technologies, frameworks and engineering tools used to build production AI pipelines,
          real-time systems, and low-latency software.
        </p>
      </div>

      <div className="stack-rows">
        {stackCategories.map((cat) => (
          <article key={cat.number} className="stack-row">
            <span className="stack-number">{cat.number}</span>

            <div className="stack-info">
              <h3>{cat.title}</h3>
              <p>{cat.desc}</p>
            </div>

            <ul className="stack-list">
              {cat.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
