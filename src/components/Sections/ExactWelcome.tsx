import { ExactWaveCanvas } from '../Canvas/ExactWaveCanvas'

export function ExactWelcome() {
  return (
    <section id="welcome">
      <ExactWaveCanvas
        id="welcome-wave-canvas"
        color="#202124"
        particleCount={12000}
        cameraY={70}
        cameraZ={180}
        waveHeight={30}
        speed={0.55}
      />

      <div className="welcome-content">
        <h1 className="brand brand-logo" aria-label="Jaydeep Deore">
          <span className="home-brand-mark" data-home-brand aria-hidden="true">
            <svg
              className="home-brand-mark-svg"
              viewBox="165 135 170 230"
              role="presentation"
              focusable="false"
            >
              <path
                className="home-brand-segment home-brand-segment--left"
                data-home-brand-segment
                pathLength="1"
                d="M 175 350 L 250 150"
              />
              <path
                className="home-brand-segment home-brand-segment--right"
                data-home-brand-segment
                pathLength="1"
                d="M 250 150 L 325 350"
              />
              <path
                className="home-brand-segment home-brand-segment--base"
                data-home-brand-segment
                pathLength="1"
                d="M 175 350 L 250 350"
              />
            </svg>
          </span>
        </h1>

        <p>
          Jaydeep Deore
          <span>AI/ML Engineer &bull; Engineering intelligence beyond the interface</span>
        </p>
      </div>
    </section>
  )
}
