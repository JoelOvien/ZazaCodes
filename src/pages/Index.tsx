import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import AboutSection from "@/components/ui/about-section";
import SkillsSection from "@/components/ui/skills-section";
import ProjectsSection from "@/components/ui/projects-section";
import ContactSection from "@/components/ui/contact-section";
import Footer from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
