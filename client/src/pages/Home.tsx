/*
 * Blueprint Precision Design — Home Page
 * Design: Technical drawing / architectural blueprint aesthetic
 * Typography: Instrument Serif (display), DM Sans (body), IBM Plex Mono (labels)
 * Colors: Linen (#FAF8F5) bg, Navy (#0C1B33) text, Teal (#0891B2) accent
 */

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import PublicationsSection from "@/components/PublicationsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <PublicationsSection />
      <ContactSection />
    </div>
  );
}
