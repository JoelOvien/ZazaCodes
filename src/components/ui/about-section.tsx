const highlights = [
  "Built the Pay4Me mobile app from the ground up — now serving 100,000+ users across 12 countries, processing over $9M in transactions",
  "Promoted from Mobile Engineer to Senior Mobile Engineer & Mobile Team Lead within months of joining",
  "Key technical contributor during Techstars Chicago '22 accelerator powered by J.P. Morgan",
  "App featured in Google's #WeArePlay campaign and on NASDAQ's MarketSite tower in Times Square",
  "Speaker at OSCAFest 2025 — Africa's largest open-source tech festival — on scalable AI-powered Flutter architecture",
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-[var(--ds-surface)]">
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <span className="font-mono-ds text-[10px] uppercase tracking-widest text-[var(--ds-text-dim)] block mb-4">
            // About Me
          </span>
          <h2 className="font-body font-bold text-4xl md:text-5xl text-[var(--ds-text)]">
            Senior Mobile Engineer
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — prose */}
          <div className="space-y-6">
            <h3 className="font-body font-semibold text-2xl text-[var(--ds-text)]">
              Shipping Production Mobile Apps at Scale
            </h3>
            <p className="font-body text-[var(--ds-text-mid)] leading-relaxed">
              Joel Ovienloba is a senior mobile engineer with 6+ years of software development experience, including 5+ years specializing in Flutter and mobile development for iOS and Android. He leads mobile at Radius (fka. Pay4Me), a Techstars-backed fintech where the app he built from the ground up now serves 100,000+ users globally and has processed over $9M in cross-border transactions.
            </p>
            <p className="font-body text-[var(--ds-text-mid)] leading-relaxed">
              He focuses on scalable architecture, performance optimization, and building mobile products that users rely on every day. Beyond Pay4Me, he has shipped production apps across education (PT Chat) and travel (TravelTube), and actively gives back through mentoring 10+ developers and speaking at conferences like OSCAFest.
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
