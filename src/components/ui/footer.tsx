import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  const handleLinkClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/20 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="text-2xl font-bold mb-4">
                Joel Ovienloba
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Senior Mobile Engineer with 4+ years of experience creating high-performant 
                mobile applications with expertise in Flutter, iOS, and Android development.
              </p>
              <Button 
                className="hover:shadow-glow transition-smooth"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Joel-Ovienloba-Resume.pdf';
                  link.download = 'Joel-Ovienloba-Resume.pdf';
                  link.click();
                }}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => handleLinkClick(link.href)}
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Lagos, Nigeria</p>
                <a 
                  href="mailto:jovienloba1@gmail.com" 
                  className="block hover:text-primary transition-smooth"
                >
                  jovienloba1@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <p>© {currentYear} Joel Ovienloba. Made with</p>
                <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                <p>and lots of ☕</p>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-4">
                <Badge variant="outline" className="border-green-500/50 text-green-500">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                  Available for hire
                </Badge>
                
                {/* Back to Top */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={scrollToTop}
                  className="hover:bg-primary/10 transition-smooth"
                >
                  <ArrowUp className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;