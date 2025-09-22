import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Cloud,
  Code2,
  Database,
  Palette,
  Settings,
  Smartphone
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Smartphone,
      title: "Mobile Frameworks",
      skills: ["Flutter", "SwiftUI", "Android Studio", "Xcode"],
      color: "text-tech-blue"
    },
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["Dart", "Swift", "Kotlin", "Golang", "JavaScript"],
      color: "text-tech-teal"
    },
    {
      icon: Database,
      title: "Backend & APIs",
      skills: ["Google Firebase", "GraphQL", "REST", "SQLite", "Supabase" ],
      color: "text-primary"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["GCP", "Docker", "GitHub Actions", "Sentry", "AWS", "Bugsnag"],
      color: "text-tech-blue"
    },
    {
      icon: Palette,
      title: "Design & Prototyping",
      skills: ["Figma", "Adobe XD"],
      color: "text-tech-teal"
    },
    {
      icon: Settings,
      title: "Development Tools",
      skills: ["Git", "GitHub", "Visual Studio Code", "Postman", "Cursor", "LLMs"],
      color: "text-primary"
    }
  ];

  const topSkills = [
    { name: "Flutter"},
    { name: "Dart" },
    { name: "Swift" },
    { name: "SwiftUI"},
    { name: "JavaScript"},
    { name: "Firebase"},
    { name: "Kotlin"},
    { name: "Git"},
    { name: "RESTful APIs"},
    { name: "GraphQL"},
    { name: "Figma"},
    { name: "CI/CD"},
    { name: "GCP"},
    { name: "Unit Testing"},
    { name: "Agile Methodologies"},
    { name: "iOS Ecosystem"},
    { name: "Android Ecosystem"},
    { name: "App Store Optimization"},
    { name: "Mobile Analytics"} 

  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Skills & Expertise
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technical Arsenal
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive expertise across the mobile development ecosystem, 
              from native platforms to cross-platform solutions.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-card hover-lift transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <category.icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>


            {/* Core Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-8">Core Proficiencies</h3>
  
            <div className="flex flex-wrap gap-3">
                {topSkills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="justify-center py-2 text-sm">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;