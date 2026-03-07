const principles = [
  {
    title: "Architecture First",
    description: "Clean, modular architecture scales better than quick fixes. Invest in structure early.",
  },
  {
    title: "Performance by Default",
    description: "Performance optimization should happen early, not as an afterthought.",
  },
  {
    title: "Network Resilience",
    description: "Mobile apps should handle unreliable networks gracefully. Users don't care about your server status.",
  },
  {
    title: "Developer Experience",
    description: "Good developer experience leads to faster teams. Code that the next engineer enjoys reading ships better products.",
  },
];

const EngineeringPhilosophySection = () => (
  <section className="py-24 bg-[var(--ds-bg)]">
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-16">
          <span className="font-mono-ds text-[10px] uppercase tracking-widest text-[var(--ds-text-dim)] block mb-4">
            // Approach
          </span>
          <h2 className="font-body font-bold text-4xl md:text-5xl text-[var(--ds-text)]">
            How I Think About Engineering
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-[var(--ds-border)]">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="group relative bg-[var(--ds-surface)] p-6 overflow-hidden transition-colors duration-300 hover:bg-[var(--ds-bg)]"
            >
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[var(--ds-accent)] scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300" />
              <span className="font-mono-ds text-[10px] text-[var(--ds-text-dim)] tracking-widest block mb-3">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-body font-semibold text-lg text-[var(--ds-text)] mb-2">
                {principle.title}
              </h3>
              <p className="font-body text-sm text-[var(--ds-text-mid)] leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  </section>
);

export default EngineeringPhilosophySection;
