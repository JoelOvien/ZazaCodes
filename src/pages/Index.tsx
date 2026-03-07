import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import AboutSection from "@/components/ui/about-section";
import SkillsSection from "@/components/ui/skills-section";
import ProjectsSection from "@/components/ui/projects-section";
import ContactSection from "@/components/ui/contact-section";
import Footer from "@/components/ui/footer";

const tickerItems = [
  "Google #WeArePlay",
  "Pay4Me / Radius — Principal Engineer",
  "Flutter Clean Architecture",
  "Bells University — B.Tech CS",
  "Riverpod",
  "CI/CD",
  "KYC",
  "30+ Devs Mentored",
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
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
