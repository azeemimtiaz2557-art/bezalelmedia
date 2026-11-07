import React from 'react';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { IntroSection } from './components/IntroSection';

function App() {
  return (
    <div className="w-full min-h-screen bg-[#0A1628] text-[#F5F7FA] selection:bg-[#cbb59d] selection:text-black">
      <IntroSection />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}

export default App;