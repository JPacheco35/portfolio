import { ContactSection } from './components/ContactSection'
import { ExperienceSection } from './components/ExperienceSection'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { ParticleBackground } from './components/ParticleBackground'
import { ProjectsSection } from './components/ProjectsSection'
import { SkillsSection } from './components/SkillsSection'
import {EducationSection} from "@/components/EducationSection.tsx";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-b from-slate-950 via-slate-900 to-slate-950">
      <ParticleBackground />
      <header className="relative z-20" role="banner" aria-label="Site Header">
        <Header />
      </header>

      <main className="relative z-10" role="main" aria-label="Main Content">
          {/*name + bio + picture*/}
          <HeroSection />

          {/*skills + technologies section*/}
          <SkillsSection />

          {/*school section*/}
          <EducationSection />

          {/*past experience section*/}
          <ExperienceSection />

          {/*personal projects section*/}
          <ProjectsSection />

          {/*contact me section*/}
          <ContactSection />
      </main>

      <footer className="container-max mt-16 border-t border-blue-500/10 py-8 text-center text-sm text-slate-400" role="contentinfo">
        <p>&copy; 2026 John Pacheco. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App