"use client";

import { LocaleProvider } from "./locale-context";
import { SiteChrome } from "./chrome";
import { HeroSection } from "./sections/hero";
import { AboutSection } from "./sections/about";
import { JourneySection } from "./sections/journey";
import { ProjectsSection } from "./sections/projects";
import { RoadmapSection } from "./sections/roadmap";
import { TechnologiesSection } from "./sections/technologies";
import { LearningsSection } from "./sections/learnings";
import { EcosystemSection } from "./sections/ecosystem";
import { ContactSection } from "./sections/contact";
import { SiteFooter } from "./sections/footer";

export function Portfolio() {
  return (
    <LocaleProvider>
      <SiteChrome />
      <main>
        <HeroSection />
        <AboutSection />
        <JourneySection />
        <ProjectsSection />
        <RoadmapSection />
        <TechnologiesSection />
        <LearningsSection />
        <EcosystemSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </LocaleProvider>
  );
}
