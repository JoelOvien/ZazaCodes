import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            className="text-sm text-muted-foreground hover:text-primary transition-smooth px-3 py-1 rounded-full hover:bg-accent"
          >
            {item.label}
          </button>
        ))}

        <div className="w-px h-4 bg-border mx-1" />

        <Button
          size="sm"
          className="hover:shadow-glow transition-smooth rounded-full text-sm h-8"
        >
          Hire Me
        </Button>
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

        <Button
          variant="ghost"
          size="sm"
          className="rounded-full"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-4 right-4 py-4 bg-card/95 backdrop-blur-md rounded-2xl border border-border shadow-lg animate-fade-in-scale">
          <div className="flex flex-col space-y-1 px-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground hover:text-primary transition-smooth px-4 py-2 text-left rounded-xl hover:bg-accent"
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-2">
              <Button
                size="sm"
                className="w-full hover:shadow-glow transition-smooth rounded-full"
              >
                Hire Me
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;