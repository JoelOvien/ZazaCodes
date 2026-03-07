import { Cloud, Code2, Database, Palette, Settings, Smartphone } from "lucide-react";

const skillCategories = [
  { icon: Smartphone, title: "Mobile Frameworks",     skills: ["Flutter", "SwiftUI", "Android Studio", "Xcode"], primary: true },
  { icon: Code2,      title: "Programming Languages", skills: ["Dart", "Swift", "Kotlin", "Golang", "JavaScript"], primary: true },
  { icon: Database,   title: "Backend & APIs",         skills: ["Google Firebase", "GraphQL", "REST", "SQLite", "Supabase"] },
  { icon: Cloud,      title: "Cloud & DevOps",         skills: ["GCP", "Docker", "GitHub Actions", "Sentry", "AWS", "Bugsnag"] },
  { icon: Palette,    title: "Design & Prototyping",   skills: ["Figma", "Adobe XD"] },
  { icon: Settings,   title: "Development Tools",      skills: ["Git", "GitHub", "Visual Studio Code", "Postman", "Cursor", "LLMs"] },
];

const topSkills = [
  { name: "Flutter", primary: true },
  { name: "Dart", primary: true },
  { name: "Swift" }, { name: "SwiftUI" }, { name: "JavaScript" },
  { name: "Firebase" }, { name: "Kotlin" }, { name: "Git" },
  { name: "RESTful APIs" }, { name: "GraphQL" }, { name: "Figma" },
  { name: "CI/CD" }, { name: "GCP" }, { name: "Unit Testing" },
  { name: "Agile Methodologies" }, { name: "iOS Ecosystem" },
  { name: "Android Ecosystem" }, { name: "App Store Optimization" },
  { name: "Mobile Analytics" },
];

const SkillsSection = () => (
  <section id="skills" className="py-20 bg-[var(--ds-bg)]">
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <span className="font-mono-ds text-[10px] uppercase tracking-widest text-[var(--ds-text-dim)] block mb-4">
            // Skills & Expertise
          </span>
          <h2 className="font-body font-bold text-4xl md:text-5xl text-[var(--ds-text)]">
            Technical Arsenal
          </h2>
        </div>

        {/* Category cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--ds-border)] mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-[var(--ds-surface)] p-6 overflow-hidden transition-colors duration-300 hover:bg-[var(--ds-bg)]"
            >
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[var(--ds-accent)] scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300" />
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="h-5 w-5 text-[var(--ds-accent)]" />
                <span className="font-mono-ds text-xs font-semibold uppercase tracking-widest text-[var(--ds-text)]">
                  {category.title}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="font-mono-ds text-xs tracking-wide px-2.5 py-1.5 border border-[var(--ds-border)] text-[var(--ds-text-mid)] hover:border-[var(--ds-accent)] hover:text-[var(--ds-text)] transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core proficiencies */}
        <div>
          <span className="font-mono-ds text-xs font-semibold uppercase tracking-widest text-[var(--ds-text)] block mb-6">
            Core Proficiencies
          </span>
          <div className="flex flex-wrap gap-2">
            {topSkills.map((skill, index) => (
              <span
                key={index}
                className={`font-mono-ds text-xs tracking-wide px-3 py-1.5 border transition-colors duration-200 cursor-default hover:bg-[var(--ds-accent)]/10 ${
                  skill.primary
                    ? "border-[var(--ds-accent)] text-[var(--ds-accent)] font-semibold"
                    : "border-[var(--ds-border)] text-[var(--ds-text-mid)] hover:border-[var(--ds-accent)] hover:text-[var(--ds-text)]"
                }`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default SkillsSection;