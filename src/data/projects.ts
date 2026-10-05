export interface Project {
  id: string
  index: string
  title: string
  shortTitle: string
  category: string
  badge: string
  year: string
  client: string
  role: string
  duration: string
  deliverables: string
  callout: string
  lead: string
  challenge: string
  solution: string
  metrics: { label: string; value: string }[]
  tags: string[]
  accent: string
  githubUrl?: string
  demoUrl?: string
  palette: { name: string; hex: string }[]
}

export const PROJECTS: Project[] = [
  {
    id: 'edugenie',
    index: '01',
    title: 'EduGenie — Multimodal Academic Assistant',
    shortTitle: 'EduGenie',
    category: 'Multimodal AI · Full-Stack',
    badge: '2025',
    year: '2025',
    client: 'GenAI Systems & Document Intelligence',
    role: 'Lead AI & Backend Architecture',
    duration: '4 Months',
    deliverables: 'RAG Semantic Engine, ChromaDB Vector Store, FastAPI Backend, Next.js Streaming UI',
    callout: 'Semantic RAG Search + FastAPI Backend: Token-by-token streaming delivery with secure asynchronous JWT authentication.',
    lead: 'A production-grade multimodal AI assistant supporting text, high-resolution image analysis, and PDF-grounded contextual question answering with real-time response streaming.',
    challenge:
      'Users need low-latency, accurate answers from lengthy technical PDFs without hallucination. Handling multi-turn conversation memory, high-dimensional vector retrieval, JWT authentication, and real-time token streaming simultaneously requires tight backend orchestration.',
    solution:
      'Constructed an end-to-end Retrieval-Augmented Generation (RAG) pipeline using LangChain, ChromaDB, and OpenAI/Gemini models. Built an asynchronous FastAPI backend fortified with JWT authentication, rate limiting, and strict payload validation, paired with a Next.js frontend with live streaming markdown rendering.',
    metrics: [
      { label: 'Streaming Latency', value: '<800ms' },
      { label: 'Modalities', value: '3+ (PDF/Img/Text)' },
      { label: 'Architecture', value: 'RAG Pipeline' },
      { label: 'Auth & Rate Limit', value: 'JWT + Redis' },
    ],
    tags: ['Next.js', 'FastAPI', 'LangChain', 'ChromaDB', 'OpenAI / Gemini', 'JWT'],
    accent: '#0071e3',
    githubUrl: 'https://github.com/cyber2033',
    palette: [
      { name: 'Deep Ink', hex: '#121118' },
      { name: 'Off-White', hex: '#FAF9F6' },
      { name: 'Apple Blue', hex: '#0071e3' },
      { name: 'Lavender Pulse', hex: '#8E7DBE' },
    ],
  },
  {
    id: 'medbook',
    index: '02',
    title: 'MedBook — AI Healthcare Decision Support System',
    shortTitle: 'MedBook',
    category: 'Healthcare AI · Co-Inventor',
    badge: 'Research 2025',
    year: '2025',
    client: 'Healthcare Systems Research (Co-Inventor)',
    role: 'Co-Inventor | Multi-Stage AI Healthcare Pipeline',
    duration: '5 Months',
    deliverables: 'Multi-Label XGBoost Pipeline, SHAP Explainability Engine, Triage Matrix, Hospital Recommender',
    callout: '< 20ms Latency + SHAP XAI: Multi-label XGBoost architecture delivering local and global feature attribution for clinical verification.',
    lead: 'An interpretable AI-based healthcare decision support pipeline for automated symptom extraction, disease prediction, priority triage classification, cost estimation, and hospital recommendation.',
    challenge:
      'Clinical deployment of machine learning often stumbles on the "black-box" dilemma — medical professionals must understand the exact causal drivers of a prediction. Furthermore, real patients often exhibit multiple co-occurring conditions that single-label classifiers misdiagnose.',
    solution:
      'Developed a multi-label XGBoost classification model to predict co-occurring conditions accurately. Embedded SHAP (SHapley Additive exPlanations) to provide clinicians with per-condition feature importance and granular attribution waterfalls, achieving sub-20ms inference response.',
    metrics: [
      { label: 'Inference Latency', value: '<20ms' },
      { label: 'Attribution', value: 'SHAP Waterfall' },
      { label: 'Classification', value: 'Multi-Label XGB' },
      { label: 'Clinical Triage', value: '4-Tier Priority' },
    ],
    tags: ['Python', 'XGBoost', 'SHAP Values', 'Scikit-learn', 'NLP', 'Explainable AI'],
    accent: '#34c759',
    githubUrl: 'https://github.com/cyber2033',
    palette: [
      { name: 'Deep Ink', hex: '#121118' },
      { name: 'Clinical White', hex: '#FFFFFF' },
      { name: 'Emerald Health', hex: '#34c759' },
      { name: 'Muted Slate', hex: '#4A4656' },
    ],
  },
  {
    id: 'smartkrishi',
    index: '03',
    title: 'Smart Krishi AI — Agriculture Platform',
    shortTitle: 'Smart Krishi',
    category: 'Edge Vision · Agritech',
    badge: 'SIH 2025',
    year: '2026',
    client: 'Smart India Hackathon 2025',
    role: 'Lead AI/ML & System Architect',
    duration: '3 Months',
    deliverables: 'EfficientNetB0, TFLite Edge, APMC Booking, Multilingual Voice',
    callout: 'EfficientNetB0 + TFLite: Quantized edge model running crop disease detection completely offline, paired with multilingual voice assistance.',
    lead: 'Smart India Hackathon project addressing agricultural diagnosis and market procurement through transfer learning vision models and offline edge deployment.',
    challenge:
      'Rural agricultural producers frequently face spotty network connectivity and multi-dialect language barriers. Image diagnosis models must execute offline on constrained mobile edge hardware while mandi booking demands seamless queueing.',
    solution:
      'Engineered an EfficientNetB0 transfer learning vision model quantized with TensorFlow Lite for zero-network edge inference. Integrated regional voice assistance across Marathi, Hindi, and English alongside an APMC digital slot allocation backend.',
    metrics: [
      { label: 'Supported Dialects', value: '3 (MR / HI / EN)' },
      { label: 'Inference Engine', value: 'TFLite Edge' },
      { label: 'Base Architecture', value: 'EfficientNetB0' },
      { label: 'Network Mode', value: '100% Offline' },
    ],
    tags: ['TensorFlow', 'Keras', 'TFLite Edge', 'React', 'Node.js', 'Computer Vision'],
    accent: '#0071e3',
    githubUrl: 'https://github.com/cyber2033',
    palette: [
      { name: 'Earth Ink', hex: '#16151E' },
      { name: 'Clean White', hex: '#FFFFFF' },
      { name: 'Apple Blue', hex: '#0071e3' },
      { name: 'Harvest Leaf', hex: '#34c759' },
    ],
  },
  {
    id: 'memvisualizer',
    index: '04',
    title: 'Dynamic Memory Allocation Visualizer',
    shortTitle: 'MemViz',
    category: 'Systems · Computer Science',
    badge: '2024',
    year: '2024',
    client: 'Computer Systems & OS Education',
    role: 'Software Developer & UI Engineer',
    duration: '2 Months',
    deliverables: 'Interactive Memory Simulator, Allocation Algorithms, Pointer Tracking',
    callout: 'First-Fit, Best-Fit & Worst-Fit: Interactive canvas simulation tracking pointer offsets and heap limits in real-time.',
    lead: 'Interactive simulator demonstrating low-level C memory routines: malloc, calloc, realloc, and free, visually breaking down boundary tags and heap fragmentation.',
    challenge:
      'Low-level pointer arithmetic, boundary tags, and heap fragmentation are notoriously abstract concepts. Traditional static diagrams fail to give students an intuitive mental model of dynamic runtime allocation.',
    solution:
      'Constructed a dynamic HTML5 Canvas memory simulation that models byte-level heap allocations, headers, free-lists, and compaction in real-time across First-Fit, Best-Fit, and Worst-Fit algorithms.',
    metrics: [
      { label: 'Supported Routines', value: 'malloc, calloc, free' },
      { label: 'Algorithms', value: 'First/Best/Worst Fit' },
      { label: 'Simulation Engine', value: 'HTML5 Canvas 60fps' },
      { label: 'Heap Modeling', value: 'Boundary Tag Blocks' },
    ],
    tags: ['HTML5 Canvas', 'JavaScript', 'C Memory Model', 'Data Structures', 'Systems'],
    accent: '#0071e3',
    githubUrl: 'https://github.com/cyber2033',
    palette: [
      { name: 'Deep Ink', hex: '#121118' },
      { name: 'Canvas White', hex: '#FFFFFF' },
      { name: 'Apple Blue', hex: '#0071e3' },
      { name: 'Memory Slate', hex: '#4A4656' },
    ],
  },
]

export function getProject(id: string) {
  return PROJECTS.find((p) => p.id === id)
}
