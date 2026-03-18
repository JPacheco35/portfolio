import { Header } from '@/components/Header';
import { ParticleBackground } from '@/components/ParticleBackground';
import { HeroSection } from '@/components/HeroSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { EducationSection } from '@/components/EducationSection';
import { ContactSection } from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <ParticleBackground />
      <Header />
      
      <main className="relative z-10">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
        
        <footer className="container-max py-8 mt-16 border-t border-blue-500/10 text-center text-sm text-slate-400">
          <p>&copy; 2025 John Pacheco. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
