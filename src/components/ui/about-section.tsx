const highlights = [
  "Senior Mobile Engineer at Pay4Me Inc, leading mobile team and architecting Flutter applications",
  "Led end-to-end development lifecycle from planning to App Store/Play Store releases",
  "Expert in Flutter, Dart, Swift, SwiftUI with focus on performance optimization and clean code",
  "Built CI/CD pipelines (GitHub Actions) and reduced crash rates by 40% across multiple projects",
  "Mentored 10+ developers and conducted code reviews to maintain high engineering standards",
];

const AboutSection = () => (
  <section id="about" className="py-20 bg-[var(--ds-surface)]">
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <span className="font-mono-ds text-[10px] uppercase tracking-widest text-[var(--ds-text-dim)] block mb-4">
            // About Me
          </span>
          <h2 className="font-body font-bold text-4xl md:text-5xl text-[var(--ds-text)]">
            Passionate Mobile Engineer
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — prose */}
          <div className="space-y-6">
            <h3 className="font-body font-semibold text-2xl text-[var(--ds-text)]">
              Building the Future of Mobile
            </h3>
            <p className="font-body text-[var(--ds-text-mid)] leading-relaxed">
              I'm a Senior Mobile Engineer with 4+ years of experience in creating high-performant
              mobile applications. My journey started with native mobile development and has evolved
              to encompass Flutter, cross-platform solutions, and full-stack mobile development.
            </p>
            <p className="font-body text-[var(--ds-text-mid)] leading-relaxed">
              Currently leading mobile development at Radius Inc. (fka. Pay4Me App), I focus on building secure
              cross-border transaction features, mentoring developers, and maintaining high
              engineering standards through comprehensive code reviews and CI/CD practices.
            </p>
          </div>

          {/* Right — highlights */}
          <div className="space-y-px">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group relative flex items-start gap-4 p-4 bg-[var(--ds-bg)] border-l-2 border-[var(--ds-border)] hover:border-[var(--ds-accent)] transition-colors duration-300"
              >
                <span className="font-mono-ds text-[10px] text-[var(--ds-text-dim)] shrink-0 mt-0.5">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-body text-sm text-[var(--ds-text-mid)] group-hover:text-[var(--ds-text)] transition-colors duration-300 leading-relaxed">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default AboutSection;