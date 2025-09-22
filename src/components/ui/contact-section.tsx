import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Calendar,
  Clock,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send
} from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jovienloba1@gmail.com",
      link: "mailto:jovienloba1@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lagos, Nigeria",
      link: "https://maps.google.com/?q=Lagos,Nigeria"
    },
    {
      icon: Clock,
      label: "Timezone",
      value: "WAT (UTC+1)",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/ovienloba-joel",
      username: "@ovienloba-joel"
    },
    {
      icon: Github,
      label: "GitHub", 
      url: "https://github.com/JoelOvien",
      username: "@JoelOvien"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Get In Touch
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm always excited to discuss new opportunities, innovative projects, 
              or just chat about mobile development. Reach out and let's connect!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="Project discussion, collaboration, etc."
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell me about your project or idea..."
                      rows={6}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full hover:shadow-glow transition-smooth"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="bg-card hover-lift transition-smooth">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <info.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{info.label}</p>
                            {info.link ? (
                              <a 
                                href={info.link} 
                                className="text-muted-foreground hover:text-primary transition-smooth"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-muted-foreground">{info.value}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <Card key={index} className="bg-card hover-lift transition-smooth">
                      <CardContent className="p-4">
                        <a 
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 w-full"
                        >
                          <div className="p-2 rounded-lg bg-primary/10">
                            <social.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{social.label}</p>
                            <p className="text-muted-foreground">{social.username}</p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="h-6 w-6" />
                    <h4 className="text-lg font-semibold">Currently Available</h4>
                  </div>
                  <p className="text-primary-foreground/90">
                    I'm currently open to new opportunities and exciting projects. 
                    Let's discuss how we can work together!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;