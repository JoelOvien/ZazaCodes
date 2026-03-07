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

const tickerItems = [
  "Google #WeArePlay",
  "Techstars Chicago '22",
  "NASDAQ MarketSite Featured",
  "100K+ Users Globally",
  "Over $9M+ in Transactions",
  "OSCAFest 2025 Speaker",
  "10+ Devs Mentored",
  "Pay4Me / Radius — Mobile Team Lead",
];

const RecognitionStrip = () => (
  <div className="relative border-y border-[var(--ds-border)] bg-[var(--ds-surface)] overflow-hidden py-3">
    <div className="flex items-center">
      <span className="font-mono-ds text-[10px] uppercase tracking-widest text-[var(--ds-text-dim)] px-6 border-r border-[var(--ds-border)] shrink-0 z-10 bg-[var(--ds-surface)]">
        Recognition
      </span>
      <div className="overflow-hidden flex-1">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="font-mono-ds text-[11px] text-[var(--ds-text-mid)] px-6 shrink-0">
              {item}
              <span className="ml-6 text-[var(--ds-border)]">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <RecognitionStrip />
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
