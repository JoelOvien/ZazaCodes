import profileImg from "@/assets/joel-profile.jpg";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";

const stats = [
  {
    index: "01",
    value: "100K+",
    label: "Users served",
    sub: "Via the Pay4Me mobile app across 12 countries",
  },
  {
    index: "02",
    value: "$9M+",
    label: "Transactions processed",
    sub: "In cross-border payments via the Pay4Me app",
  },
  {
    index: "03",
    value: "10+",
    label: "Devs mentored",
    sub: "GDSC Lead & Flutter curriculum designer",
  },
  {
    index: "04",
    value: "★ G",
    label: "Google recognised",
    sub: "#WeArePlay campaign — featured on Google Play",
  },
];

const StatCard = ({ stat, wide }: { stat: typeof stats[0]; wide?: boolean }) => (
  <div className={`group relative p-5 border border-[var(--ds-border)] bg-[var(--ds-surface)] overflow-hidden transition-colors duration-300 hover:bg-[var(--ds-bg)]${wide ? " col-span-2" : ""}`}>
    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[var(--ds-accent)] scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300" />
    <span className="font-mono-ds text-[10px] text-[var(--ds-text-dim)] tracking-widest block mb-3">
      {stat.index}
    </span>
    <div className="font-display text-4xl lg:text-5xl text-[var(--ds-text)] leading-none mb-2">
      {stat.value}
    </div>
    <div className="font-body font-semibold text-sm text-[var(--ds-text)] mb-1">
      {stat.label}
    </div>
    <div className="font-mono-ds text-[10px] text-[var(--ds-text-dim)] leading-relaxed">
      {stat.sub}
    </div>
  </div>
);

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-[var(--ds-bg)] overflow-hidden"
    >
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left column ── */}
          <div className="space-y-8">
            {/* Role tag */}
            <div className="flex items-center gap-3">
              <span className="font-mono-ds text-[var(--ds-text-dim)] text-xs uppercase tracking-widest">
                Senior Mobile Engineer
              </span>
            </div>

            {/* Name + Avatar */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              <img
                src={profileImg}
                alt="Joel Ovienloba"
                className="w-24 h-24 lg:w-[130px] lg:h-[130px] rounded-full object-cover border-2 border-[var(--ds-accent)] shrink-0"
              />
              <h1 className="font-display text-6xl lg:text-7xl xl:text-8xl leading-[0.95] text-[var(--ds-text)]">
                Joel<br />
                <span className="italic">Ovienloba</span>
              </h1>
            </div>

            {/* Mono subtitle */}
            <p className="font-mono-ds text-sm text-[var(--ds-text-mid)] tracking-wide">
              Flutter · Android · iOS · Cross-platform
            </p>

            {/* Bio */}
            <p className="font-body text-[var(--ds-text-mid)] leading-relaxed max-w-md text-base">
              I build high-performance mobile applications serving 100,000+ users globally. I specialize in scalable architecture and product-driven engineering for fintech and cross-platform products. At Radius (fka. Pay4Me), the app I built from the ground up has processed over $9M in cross-border transactions.
            </p>

            {/* Credibility line */}
            <p className="font-mono-ds text-xs text-[var(--ds-accent)] tracking-wide">
              Mobile Team Lead at Radius Inc. (fka. Pay4Me) · Techstars Chicago '22 · Google #WeArePlay
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <button
                onClick={() => scrollToSection("projects")}
                className="font-body font-semibold text-sm px-6 py-3 bg-[var(--ds-accent)] text-[var(--ds-bg)] transition-all duration-200 hover:brightness-110"
                style={{
                  clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                }}
              >
                View My Work
              </button>

              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/Joel-Ovienloba-Resume.pdf";
                  link.download = "Joel-Ovienloba-Resume.pdf";
                  link.click();
                }}
                className="font-mono-ds text-xs text-[var(--ds-text-dim)] hover:text-[var(--ds-text)] transition-colors duration-200 flex items-center gap-1.5 group"
              >
                <Download className="h-3.5 w-3.5" />
                Download Resume
                <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </div>

          {/* ── Right column — stats grid ── */}
          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat, i) => (
              <StatCard key={stat.index} stat={stat} wide={i === stats.length - 1 && stats.length % 2 !== 0} />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("about")}
          className="p-2 border border-[var(--ds-border)] hover:border-[var(--ds-accent)] transition-colors duration-200"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-4 w-4 text-[var(--ds-text-mid)]" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;