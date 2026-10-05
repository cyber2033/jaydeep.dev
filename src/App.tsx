import { useState } from 'react'
import { ExactLoader } from './components/Loader/ExactLoader'
import { ExactScrollIndicator } from './components/Navigation/ExactScrollIndicator'
import { ExactBackToTop } from './components/Navigation/ExactBackToTop'
import { ExactHeader } from './components/Navigation/ExactHeader'
import { ExactWelcome } from './components/Sections/ExactWelcome'
import { ExactAbout } from './components/Sections/ExactAbout'
import { ExactFeatured } from './components/Sections/ExactFeatured'
import { ExactQuality } from './components/Sections/ExactQuality'
import { ExactLab } from './components/Sections/ExactLab'
import { ExactExpertise } from './components/Sections/ExactExpertise'
import { ExactStack } from './components/Sections/ExactStack'
import { ExactCredentials } from './components/Sections/ExactCredentials'
import { ExactFAQ } from './components/Sections/ExactFAQ'
import { ExactContact } from './components/Sections/ExactContact'
import { ExactFooter } from './components/Sections/ExactFooter'
import { CaseStudyModal } from './components/CaseStudy/CaseStudyModal'
import type { Project } from './data/projects'

export default function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  const handleOpenCaseStudy = (project: Project) => {
    setActiveProject(project)
  }

  const handleCloseCaseStudy = () => {
    setActiveProject(null)
  }

  return (
    <>
      {/* 01. White Page Loader with Split Sliding Doors */}
      <ExactLoader />

      {/* 02. Vertical Numeric Scroll Indicator (000..100) */}
      <ExactScrollIndicator />

      {/* 03. Circular Progress Back To Top Button */}
      <ExactBackToTop />

      {/* 04. Top Header Navigation with Mobile Menu & Download CV */}
      <ExactHeader />

      <main>
        {/* 05. Welcome Hero with Exact Three.js Wave Canvas & Animated Geometric Brand Mark */}
        <ExactWelcome />

        {/* 06. About Section with Lead, Stats, and Portrait */}
        <ExactAbout />

        {/* 07. Featured Work (MedBook Flagship System) */}
        <section id="projects">
          <div className="section-header">
            <p className="section-label">Featured work</p>
            <h2>
              Projects built with<br />
              <span>purpose and precision.</span>
            </h2>
            <p className="intro">
              A selection of machine learning pipelines, edge computer vision systems, and systems-level tools
              built with a focus on real-world reliability, performance, and mathematical rigor.
            </p>
          </div>

          <ExactFeatured onOpenCaseStudy={handleOpenCaseStudy} />
        </section>

        {/* 08. Engineering Quality (100/100 Google Lighthouse Dashboard) */}
        <ExactQuality />

        {/* 09. Engineering Lab (Dynamic Memory Visualizer / 60 FPS HTML5 Canvas Demo) */}
        <ExactLab onOpenCaseStudy={handleOpenCaseStudy} />

        {/* 10. Selected Projects (01..04 Alternating Cards with Big Numbers) */}
        <ExactExpertise onOpenCaseStudy={handleOpenCaseStudy} />

        {/* 11. Technology Stack (01..05 Stack Rows with Pills) */}
        <ExactStack />

        {/* 12. Foundations & Credentials (Education, HackerRank #1, Hackathons, Certifications) */}
        <ExactCredentials />

        {/* 13. Frequently Asked Questions Accordion */}
        <ExactFAQ />

        {/* 14. Contact Card with Embedded Cyan Wave Canvas */}
        <ExactContact />
      </main>

      {/* 15. Deep Dark Footer with Embedded Cyan Wave Canvas & Giant Typography */}
      <ExactFooter />

      {/* Case Study Modal */}
      <CaseStudyModal project={activeProject} onClose={handleCloseCaseStudy} />
    </>
  )
}
