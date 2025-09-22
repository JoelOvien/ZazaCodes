import { Badge } from "@/components/ui/badge";

const AboutSection = () => {

  const highlights = [
    "Senior Mobile Engineer at Pay4Me Inc, leading mobile team and architecting Flutter applications",
    "Led end-to-end development lifecycle from planning to App Store/Play Store releases",
    "Expert in Flutter, Dart, Swift, SwiftUI with focus on performance optimization and clean code",
    "Built CI/CD pipelines (GitHub Actions) and reduced crash rates by 40% across multiple projects",
    "Mentored 10+ developers and conducted code reviews to maintain high engineering standards"
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              About Me
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Passionate Mobile Engineer
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With over 4 years of experience in mobile development, I specialize in creating 
              high-performance, scalable mobile applications with expertise in Flutter, iOS, and 
              Android development.
            </p>
          </div>


            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">
                Building the Future of Mobile
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                I'm a Senior Mobile Engineer with 4+ years of experience in creating high-performant 
                mobile applications. My journey started with native mobile development and has evolved 
                to encompass Flutter, cross-platform solutions, and full-stack mobile development.
              </p>

              <div className="space-y-3">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">{highlight}</p>
                  </div>
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Currently leading mobile development at Pay4Me Inc, I focus on building secure 
                cross-border transaction features, mentoring developers, and maintaining high 
                engineering standards through comprehensive code reviews and CI/CD practices.
              </p>
            </div>
          </div>
      </div>
    </section>
  );
};

export default AboutSection;