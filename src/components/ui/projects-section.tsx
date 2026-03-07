import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    index: "01",
    title: "Pay4Me App",
    description: "Cross-border payment application built with Flutter, featuring secure transactions, KYC verification, and document uploads. Led the mobile team through the complete development lifecycle.",
    tech: ["Flutter", "Dart", "Firebase", "GitHub Actions"],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=app.pay4me.app",
      appStore: "https://apps.apple.com/ng/app/pay4me-app/id1627285676?see-all=reviews",
    },
  },
  {
    index: "02",
    title: "TravelTube Mobile",
    description: "Social travel platform connecting foodies and travelers worldwide. Features real-time chat, location services, and social interactions.",
    tech: ["Flutter", "Dart", "Pusher", "Sentry"],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.traveltube.tclubmobile",
      appStore: "https://apps.apple.com/us/app/traveltube/id1580895770",
    },
  },
  {
    index: "03",
    title: "Tcourier Delivery App",
    description: "On-demand delivery service connecting drivers with restaurants and customers, with real-time order tracking and management.",
    tech: ["Flutter", "Dart", "Real-time APIs", "Maps Integration"],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.traveltube.tcourier",
    },
  },
  {
    index: "04",
    title: "Partner Central App",
    description: "Restaurant management application for order processing, inventory management, and analytics — built to streamline restaurant operations.",
    tech: ["Flutter", "Dart", "Firebase", "Analytics"],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.traveltube.tcourierorders",
    },
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <div className="group relative flex flex-col p-6 border border-[var(--ds-border)] bg-[var(--ds-bg)] overflow-hidden transition-colors duration-300 hover:bg-[var(--ds-surface)] h-full">
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
    <p className="font-body text-sm text-[var(--ds-text-mid)] leading-relaxed mb-6 flex-1">
      {project.description}
    </p>

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
    <div className="flex flex-wrap gap-4">
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
  <section id="projects" className="py-20 bg-[var(--ds-surface)]">
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <span className="font-mono-ds text-[10px] uppercase tracking-widest text-[var(--ds-text-dim)] block mb-4">
            // Featured Projects
          </span>
          <h2 className="font-body font-bold text-4xl md:text-5xl text-[var(--ds-text)]">
            Apps That Make a Difference
          </h2>
        </div>

        {/* Project grid — 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--ds-border)]">
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