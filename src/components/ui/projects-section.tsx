import pay4me from "@/assets/pay4me.svg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, ExternalLink, Play } from "lucide-react";


const ProjectsSection = () => {
  const projects = [
    {
      title: "Pay4Me App",
      description: "Cross-border payment application built with Flutter, featuring secure transactions, KYC verification, and document uploads. Led the mobile team through complete development lifecycle.",
      image: pay4me,
      tech: ["Flutter", "Dart", "Firebase", "GitHub Actions"],
      links: {
        playStore: "https://play.google.com/store/apps/details?id=app.pay4me.app",
        appStore: "https://apps.apple.com/ng/app/pay4me-app/id1627285676?see-all=reviews"
      },
    },
    {
      title: "TravelTube Mobile",
      description: "Social travel platform connecting foodies and travelers worldwide, built with Flutter. Features real-time chat, location services, and social interactions.",
      image: "/placeholder.svg",
      tech: ["Flutter", "Dart", "Pusher", "Sentry"],
      links: {
        playStore: "https://play.google.com/store/apps/details?id=com.traveltube.tclubmobile",
        appStore: "https://apps.apple.com/us/app/traveltube/id1580895770"
      },
    },
    {
      title: "Tcourier Delivery App",
      description: "On-demand delivery service connecting drivers with restaurants and customers. Built with Flutter for real-time order tracking and management.",
      image: "/placeholder.svg",
      tech: ["Flutter", "Dart", "Real-time APIs", "Maps Integration"],
      links: {
        playStore: "https://play.google.com/store/apps/details?id=com.traveltube.tcourier"
      }
    },
    {
      title: "Partner Central App",
      description: "Restaurant management application for order processing, inventory management, and analytics. Built to streamline restaurant operations.",
      image: "/placeholder.svg",
      tech: ["Flutter", "Dart", "Firebase", "Analytics"],
      links: {
        playStore: "https://play.google.com/store/apps/details?id=com.traveltube.tcourierorders"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Featured Projects
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Apps That Make a Difference
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of mobile applications I've built, each solving real-world problems 
              and delivering exceptional user experiences to millions of users.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`bg-card hover-lift transition-smooth`}
              >
                <CardContent className="p-0">
                  <div className={`grid md:grid-cols-3 gap-0`}>
                    {/* Project Image */}
                   <div className="w-[312px] h-[312px] bg-white flex items-center justify-center">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>

                    {/* Project Content */}
                    <div className={`p-6 md:col-span-2`}>


                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-3">
                        {project.links.appStore && (
                          <Button size="sm" className="hover:shadow-glow transition-smooth">
                            <Play className="h-4 w-4 mr-2" />
                            Play Store
                          </Button>
                        )}
                        {project.links.playStore && (
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            App Store
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Interested in seeing more of my work or discussing a project?
            </p>
            <Button 
              size="lg" 
              className="hover:shadow-glow transition-smooth"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Work Together
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;