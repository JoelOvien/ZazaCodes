import AboutSection from "@/components/ui/about-section";
import CompaniesSection from "@/components/ui/companies-section";
import ContactSection from "@/components/ui/contact-section";
import EngineeringImpactSection from "@/components/ui/engineering-impact-section";
import EngineeringPhilosophySection from "@/components/ui/engineering-philosophy-section";
import Footer from "@/components/ui/footer";
import HeroSection from "@/components/ui/hero-section";
import Navigation from "@/components/ui/navigation";
import ProjectsSection from "@/components/ui/projects-section";
import SkillsSection from "@/components/ui/skills-section";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <CompaniesSection />
        <EngineeringImpactSection />
        <SkillsSection />
        <ProjectsSection />
        <EngineeringPhilosophySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
