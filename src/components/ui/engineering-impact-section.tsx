import { TrendingUp } from "lucide-react";

const impacts = [
  "Built the Pay4Me mobile app from the ground up — now serving 100,000+ users across 12 countries",
  "App has processed over $9M in cross-border transactions",
  "Achieved 4.6-star Play Store rating and 4.5-star App Store rating with 100K+ downloads",
  "Reduced crash rates by 40% in production mobile applications at TravelTube",
  "Built Fast KYC system enabling identity verification in under 5 minutes",
  "Led mobile implementation of USD Virtual Card and Pay a Business product launches",
  "Mentored 10+ developers as GDSC Lead; designed and delivered Flutter curriculum",
  "Speaker at OSCAFest 2025 on building maintainable AI-powered Flutter apps at scale",
];

const EngineeringImpactSection = () => (
  <section className="py-24 bg-[var(--ds-surface)]">
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-16">
          <span className="font-mono-ds text-[10px] uppercase tracking-widest text-[var(--ds-text-dim)] block mb-4">
            // Track Record
          </span>
          <h2 className="font-body font-bold text-4xl md:text-5xl text-[var(--ds-text)]">
            Engineering Impact
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-[var(--ds-border)]">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="group relative flex items-start gap-4 p-5 bg-[var(--ds-bg)] overflow-hidden transition-colors duration-300 hover:bg-[var(--ds-surface)]"
            >
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[var(--ds-accent)] scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300" />
              <TrendingUp className="h-4 w-4 text-[var(--ds-accent)] shrink-0 mt-0.5" />
              <p className="font-body text-sm text-[var(--ds-text-mid)] group-hover:text-[var(--ds-text)] transition-colors duration-300 leading-relaxed">
                {impact}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  </section>
);

export default EngineeringImpactSection;
