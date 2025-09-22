import heroImage from "@/assets/hero-mobile-dev.jpg";
import profileImage from "@/assets/joel-profile.jpg";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Mobile development workspace" 
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-background/1" />
      </div>
      <div className="container mx-auto px-6 py-20">
        <div className="flex justify-center items-center min-h-[80vh]">
          {/* Content */}
          <div className="max-w-2xl space-y-8 animate-slide-up flex flex-col items-center text-center">

            <img 
              src={profileImage} 
              alt="Joel Ovienloba" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary/30 shadow-glow object-cover animate-fade-in-scale"
            />

                {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Joel Ovienloba
              </h1>
            </div>
            
            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
               Senior Mobile Engineer with 4+ years of experience creating high-performant mobile applications. Expertise in Flutter, iOS, and Android development with a proven track record of delivering complex projects on time and exceptional quality.
            </p>
        
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="transition-smooth"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="transition-smooth"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Joel-Ovienloba-Resume.pdf';
                  link.download = 'Joel-Ovienloba-Resume.pdf';
                  link.click();
                }}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 pt-4 justify-center">
              <a 
                href="https://www.linkedin.com/in/ovienloba-joel" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com/joelovienloba" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-smooth"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="mailto:jovienloba1@gmail.com" 
                className="p-2 text-muted-foreground hover:text-primary transition-smooth"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="p-2 rounded-full border border-primary/30 hover:border-primary transition-smooth"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-5 w-5 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;