const companies = [
  {
    name: "Pay4Me Inc (Radius)",
    role: "Senior Mobile Engineer",
    period: "Dec 2021 - Present",
    description: "Techstars-backed fintech serving 100K+ users globally. over $9M in transactions processed. Featured in Google #WeArePlay and on NASDAQ MarketSite.",
  },
  {
    name: "PT Chat",
    role: "Senior Software Engineer",
    period: "Apr 2024 - Feb 2025",
    description: "Educational platform with AI-powered micro-learning for parents and children",
  },
  {
    name: "TravelTube",
    role: "Mobile App Developer",
    period: "Mar 2021 - Oct 2021",
    description: "Social travel platform with food ordering and delivery across three apps",
  },
];

const CompaniesSection = () => (
  <section className="py-24 bg-[var(--ds-bg)]">
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-16">
          <span className="font-mono-ds text-[10px] uppercase tracking-widest text-[var(--ds-text-dim)] block mb-4">
            // Experience
          </span>
          <h2 className="font-body font-bold text-4xl md:text-5xl text-[var(--ds-text)]">
            Companies & Products I've Built For
          </h2>
          <p className="font-body text-[var(--ds-text-mid)] mt-4 max-w-2xl leading-relaxed">
            Production mobile applications used by real users across fintech, education, and travel.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-[var(--ds-border)]">
          {companies.map((company, index) => (
            <div
              key={index}
              className="group relative bg-[var(--ds-surface)] p-6 overflow-hidden transition-colors duration-300 hover:bg-[var(--ds-bg)]"
            >
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[var(--ds-accent)] scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300" />
              <span className="font-mono-ds text-[10px] text-[var(--ds-text-dim)] tracking-widest block mb-3">
                {company.period}
              </span>
              <h3 className="font-mono-ds text-lg text-[var(--ds-text)] mb-1">
                {company.name}
              </h3>
              <span className="font-mono-ds text-xs text-[var(--ds-accent)] block mb-3">
                {company.role}
              </span>
              <p className="font-body text-sm text-[var(--ds-text-mid)] leading-relaxed">
                {company.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  </section>
);

export default CompaniesSection;
