import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    index: "01",
    title: "Radius (fka. Pay4Me App)",
    description:
      "Techstars-backed fintech platform enabling cross-border tuition and payments for international students and immigrants. 100,000+ users globally, over $9M in transactions processed, payments to 229 institutions across 12 countries.",
    contributions: [
      "Built the production Flutter app from the ground up as sole mobile engineer, now serving 100K+ users",
      "Led 4-person mobile team; architected modular features (wallets, transfers, virtual accounts, USD virtual cards, Pay a Business)",
      "Built Fast KYC system enabling identity verification in under 5 minutes",
      "Implemented CI/CD with GitHub Actions & Fastlane; integrated Firebase Analytics, Mixpanel, AppsFlyer with centralized analytics manager",
      "Key technical contributor during Techstars Chicago '22 accelerator; helped ship v2.0",
    ],
    tech: ["Flutter", "Dart", "Firebase", "GitHub Actions", "Fastlane", "Remote Config"],
    impact: "100K+ downloads, 4.6-star rating on Play Store, 4.5 on App Store, over $9M in transactions processed, featured in Google #WeArePlay and on NASDAQ MarketSite",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=app.pay4me.app",
      appStore: "https://apps.apple.com/ng/app/pay4me-app/id1627285676?see-all=reviews",
    },
  },
  {
    index: "02",
    title: "PT Chat",
    description:
      "Cross-platform educational app helping parents support children's learning through personalized micro-learning activities and AI chat support.",
    contributions: [
      "Architected Flutter application using Clean Architecture with feature-first organization",
      "Developed RESTful API integration with Repository-DataSource pattern and Either monad error handling",
      "Built secure session management with encrypted storage and automatic expiration",
      "Delivered localization and runtime language switching using Flutter's l10n/intl",
    ],
    tech: ["Flutter", "Dart", "BLoC", "OneSignal", "Clean Architecture"],
    impact: "Shipped accessibility features including Text-to-Speech and multi-language support",
    links: {},
  },
  {
    index: "03",
    title: "TravelTube",
    description:
      "Social travel platform connecting foodies and travelers worldwide with lifestyle news, tourism content, and a food ordering and delivery system.",
    contributions: [
      "Led development of three interconnected mobile applications (TravelTube, Tcourier, Partner Central)",
      "Integrated Sentry for real-time error tracking and Pusher for instant notifications",
      "Improved application modularity and decreased crash rates by 40%",
      "Delivered localization and runtime language switching for global user base",
    ],
    tech: ["Flutter", "Dart", "Pusher", "Sentry", "Maps Integration"],
    impact: "Reduced crash rates by 40% across the application suite",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.traveltube.tclubmobile",
      appStore: "https://apps.apple.com/us/app/traveltube/id1580895770",
    },
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <div className="group relative flex flex-col p-8 border border-[var(--ds-border)] bg-[var(--ds-bg)] overflow-hidden transition-colors duration-300 hover:bg-[var(--ds-surface)]">
    {/* Accent stripe */}
    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[var(--ds-accent)] scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300" />

    {/* Index + title */}
    <div className="mb-4">
      <span className="font-mono-ds text-[10px] text-[var(--ds-text-dim)] tracking-widest block mb-2">
        {project.index}
      </span>
      <h3 className="font-mono-ds text-2xl text-[var(--ds-text)] leading-tight">
        {project.title}
      </h3>
    </div>

    {/* Description */}
    <p className="font-body text-sm text-[var(--ds-text-mid)] leading-relaxed mb-5">
      {project.description}
    </p>

    {/* Key contributions */}
    <div className="mb-5">
      <span className="font-mono-ds text-[10px] uppercase tracking-widest text-[var(--ds-text-dim)] block mb-3">
        Key Contributions
      </span>
      <ul className="space-y-2">
        {project.contributions.map((c, i) => (
          <li key={i} className="font-body text-xs text-[var(--ds-text-mid)] leading-relaxed flex items-start gap-2">
            <span className="text-[var(--ds-accent)] mt-0.5 shrink-0">-</span>
            {c}
          </li>
        ))}
      </ul>
    </div>

    {/* Impact */}
    <div className="mb-5 p-3 border-l-2 border-[var(--ds-accent)] bg-[var(--ds-surface)]">
      <span className="font-mono-ds text-[10px] uppercase tracking-widest text-[var(--ds-accent)] block mb-1">
        Impact
      </span>
      <p className="font-body text-xs text-[var(--ds-text)] leading-relaxed">
        {project.impact}
      </p>
    </div>

    {/* Tech tags */}
    <div className="flex flex-wrap gap-2 mb-6">
      {project.tech.map((tech, i) => (
        <span
          key={i}
          className="font-mono-ds text-[10px] tracking-wide px-2 py-1 border border-[var(--ds-border)] text-[var(--ds-text-dim)]"
        >
          {tech}
        </span>
      ))}
    </div>

    {/* Links */}
    <div className="flex flex-wrap gap-4 mt-auto">
      {project.links.playStore && (
        <a
          href={project.links.playStore}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono-ds text-[11px] uppercase tracking-widest text-[var(--ds-text-dim)] hover:text-[var(--ds-text)] transition-colors duration-200 flex items-center gap-1 group/link"
        >
          Play Store <ArrowUpRight className="h-3 w-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
        </a>
      )}
      {project.links.appStore && (
        <a
          href={project.links.appStore}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono-ds text-[11px] uppercase tracking-widest text-[var(--ds-text-dim)] hover:text-[var(--ds-text)] transition-colors duration-200 flex items-center gap-1 group/link"
        >
          App Store <ArrowUpRight className="h-3 w-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
        </a>
      )}
    </div>
  </div>
);

const ProjectsSection = () => (
  <section id="projects" className="py-24 bg-[var(--ds-surface)]">
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <span className="font-mono-ds text-[10px] uppercase tracking-widest text-[var(--ds-text-dim)] block mb-4">
            // Featured Projects
          </span>
          <h2 className="font-body font-bold text-4xl md:text-5xl text-[var(--ds-text)]">
            Production Apps I've Built & Led
          </h2>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[var(--ds-border)]">
          {projects.map((project) => (
            <ProjectCard key={project.index} project={project} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 pt-8 border-t border-[var(--ds-border)] flex items-center justify-between flex-wrap gap-4">
          <p className="font-mono-ds text-[11px] text-[var(--ds-text-dim)] uppercase tracking-widest">
            Interested in discussing a project?
          </p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="font-mono-ds text-[11px] uppercase tracking-widest text-[var(--ds-text-dim)] hover:text-[var(--ds-text)] transition-colors duration-200 flex items-center gap-1.5 group"
          >
            Let's Work Together
            <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>

      </div>
    </div>
  </section>
);

export default ProjectsSection;
