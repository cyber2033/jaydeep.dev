import { ExactWaveCanvas } from '../Canvas/ExactWaveCanvas'

export function ExactFooter() {
  const techStack = [
    'Three.js',
    'WebGL',
    'TypeScript',
    'React 19',
    'Python',
    'FastAPI',
    'XGBoost',
    'SHAP',
    'Vite',
    'Git',
  ]

  return (
    <footer id="footer">
      <ExactWaveCanvas
        id="footer-wave-canvas"
        color="#8cecff"
        particleCount={5500}
        cameraY={120}
        cameraZ={260}
        waveHeight={18}
        speed={0.75}
      />

      <div className="footer-content">
        <p className="footer-label">AI/ML Engineer & Systems Developer</p>

        <h2>
          JAYDEEP<br />
          <span>DEORE</span>
        </h2>

        <p className="footer-text">
          Engineering intelligent systems through deep learning architectures, explainable AI,
          real-time 3D graphics, and full-stack software with an uncompromising focus on performance,
          accessibility and clean engineering.
        </p>

        <div className="footer-social" aria-label="Social links">
          <a href="https://github.com/JaydeepDeore" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/jaydeep-deore" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:jaydeepdeore85@gmail.com">
            Email
          </a>
          <a href="/Jaydeep_Deore.pdf" download>
            Download CV
          </a>
        </div>

        <div className="footer-tech">
          <p className="footer-tech-label">Engineered with</p>

          <ul className="footer-tech-list">
            {techStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Jaydeep Deore. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
