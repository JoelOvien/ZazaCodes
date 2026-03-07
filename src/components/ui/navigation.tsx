import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      {/* Desktop floating pill */}
      <div className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-border transition-smooth ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-md shadow-lg'
          : 'bg-background/60 backdrop-blur-sm shadow-md'
      }`}>
        <button
          onClick={() => scrollToSection('hero')}
          className="hover:scale-105 transition-smooth mr-2"
        >
          <img src="/initials-512x512.png" alt="JO" className="h-7 w-7" />
        </button>

        <div className="w-px h-4 bg-border mx-1" />

        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="font-mono-ds text-[11px] uppercase tracking-widest text-[var(--ds-text-dim)] hover:text-[var(--ds-text)] transition-smooth px-3 py-1"
          >
            {item.label}
          </button>
        ))}

        <div className="w-px h-4 bg-border mx-1" />

        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-1.5 text-muted-foreground hover:text-foreground transition-smooth"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>

        <a
          href="mailto:jovienloba1@gmail.com"
          className="font-mono-ds text-[11px] uppercase tracking-widest px-4 py-1.5 bg-[var(--ds-accent)] text-[var(--ds-bg)] hover:brightness-90 transition-all duration-200"
          style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}
        >
          Hire Me
        </a>
      </div>

      {/* Mobile bar */}
      <div className={`md:hidden flex items-center justify-between w-full px-4 py-2 rounded-full border border-border transition-smooth ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-md shadow-lg'
          : 'bg-background/60 backdrop-blur-sm shadow-md'
      }`}>
        <button
          onClick={() => scrollToSection('hero')}
          className="hover:scale-105 transition-smooth"
        >
          <img src="/initials-512x512.png" alt="JO" className="h-7 w-7" />
        </button>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            className="rounded-full"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-4 right-4 py-4 bg-card/95 backdrop-blur-md rounded-2xl border border-border shadow-lg animate-fade-in-scale">
          <div className="flex flex-col space-y-1 px-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-mono-ds text-[11px] uppercase tracking-widest text-[var(--ds-text-dim)] hover:text-[var(--ds-text)] transition-smooth px-4 py-2 text-left"
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-2">
              <a
                href="mailto:jovienloba1@gmail.com"
                className="font-mono-ds text-[11px] uppercase tracking-widest px-4 py-2 bg-[var(--ds-accent)] text-[var(--ds-bg)] hover:brightness-90 transition-all duration-200 block text-center"
                style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;