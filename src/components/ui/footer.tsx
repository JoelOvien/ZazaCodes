import { ArrowUp, Download } from "lucide-react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--ds-surface)] border-t border-[var(--ds-border)]">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-4">
              <div className="font-body font-bold text-2xl text-[var(--ds-text)]">Joel Ovienloba</div>
              <p className="font-body text-sm text-[var(--ds-text-dim)] max-w-sm leading-relaxed">
                Senior Mobile Engineer with 4+ years of experience creating high-performant
                mobile applications with expertise in Flutter, iOS, and Android.
              </p>
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/Joel-Ovienloba-Resume.pdf";
                  link.download = "Joel-Ovienloba-Resume.pdf";
                  link.click();
                }}
                className="font-mono-ds text-[11px] uppercase tracking-widest px-4 py-2 bg-[var(--ds-accent)] text-[var(--ds-bg)] hover:brightness-90 transition-all duration-200 flex items-center gap-2 w-fit"
                style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}
              >
                <Download className="h-3 w-3" /> Download Resume
              </button>
            </div>

            <div>
              <span className="font-mono-ds text-[10px] uppercase tracking-widest text-[var(--ds-text-dim)] block mb-4">Quick Links</span>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                      className="font-mono-ds text-[11px] uppercase tracking-widest text-[var(--ds-text-dim)] hover:text-[var(--ds-text)] transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="font-mono-ds text-[10px] uppercase tracking-widest text-[var(--ds-text-dim)] block mb-4">Get In Touch</span>
              <div className="space-y-2">
                <p className="font-mono-ds text-[11px] text-[var(--ds-text-dim)]">Lagos, Nigeria</p>
                <a
                  href="mailto:jovienloba1@gmail.com"
                  className="font-mono-ds text-[11px] text-[var(--ds-text-dim)] hover:text-[var(--ds-text)] transition-colors duration-200 block"
                >
                  jovienloba1@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[var(--ds-border)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="font-mono-ds text-[10px] text-[var(--ds-text-dim)] uppercase tracking-widest">
              © {currentYear} Joel Ovienloba
            </span>
            <div className="flex items-center gap-4">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 cursor-pointer"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="font-mono-ds text-[10px] uppercase tracking-widest text-[var(--ds-accent)] hover:brightness-110 transition-all duration-200">
                  Available for hire
                </span>
              </button>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="p-2 border border-[var(--ds-border)] text-[var(--ds-text-dim)] hover:border-[var(--ds-accent)] hover:text-[var(--ds-text)] transition-colors duration-200"
                aria-label="Back to top"
              >
                <ArrowUp className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;