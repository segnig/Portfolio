import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { CertificateAchievementSection } from "@/components/certificate-achievement-section"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <CertificateAchievementSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <BlogSection />        
        <ContactSection />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
