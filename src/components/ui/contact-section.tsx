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

    try {
      const res = await fetch(
        `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        toast({
          title: "Message sent successfully!",
          description: "I'll get back to you within 24 hours.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast({
          title: "Failed to send message.",
          description: "Something went wrong. Please try emailing me directly.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Network error.",
        description: "Check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[var(--ds-bg)]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-16">
            <span className="font-mono-ds text-[10px] uppercase tracking-widest text-[var(--ds-text-dim)] block mb-4">
              // Get In Touch
            </span>
            <h2 className="font-body font-bold text-4xl md:text-5xl text-[var(--ds-text)]">
              Let's Build Something Amazing
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="border border-[var(--ds-border)] bg-[var(--ds-surface)] p-8">
              <span className="font-mono-ds text-[10px] uppercase tracking-widest text-[var(--ds-text-dim)] block mb-6">
                Send a Message
              </span>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="font-mono-ds text-[10px] uppercase tracking-widest text-[var(--ds-text-dim)]">Name</Label>
                    <Input
                      id="name" name="name" value={formData.name}
                      onChange={handleInputChange} required placeholder="Your name"
                      className="bg-[var(--ds-bg)] border-[var(--ds-border)] text-[var(--ds-text)] placeholder:text-[var(--ds-text-dim)] focus:border-[var(--ds-accent)] rounded-none font-mono-ds text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="font-mono-ds text-[10px] uppercase tracking-widest text-[var(--ds-text-dim)]">Email</Label>
                    <Input
                      id="email" name="email" type="email" value={formData.email}
                      onChange={handleInputChange} required placeholder="your@email.com"
                      className="bg-[var(--ds-bg)] border-[var(--ds-border)] text-[var(--ds-text)] placeholder:text-[var(--ds-text-dim)] focus:border-[var(--ds-accent)] rounded-none font-mono-ds text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="subject" className="font-mono-ds text-[10px] uppercase tracking-widest text-[var(--ds-text-dim)]">Subject</Label>
                  <Input
                    id="subject" name="subject" value={formData.subject}
                    onChange={handleInputChange} required placeholder="Project discussion, collaboration..."
                    className="bg-[var(--ds-bg)] border-[var(--ds-border)] text-[var(--ds-text)] placeholder:text-[var(--ds-text-dim)] focus:border-[var(--ds-accent)] rounded-none font-mono-ds text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message" className="font-mono-ds text-[10px] uppercase tracking-widest text-[var(--ds-text-dim)]">Message</Label>
                  <Textarea
                    id="message" name="message" value={formData.message}
                    onChange={handleInputChange} required
                    placeholder="Tell me about your project or idea..."
                    rows={6}
                    className="bg-[var(--ds-bg)] border-[var(--ds-border)] text-[var(--ds-text)] placeholder:text-[var(--ds-text-dim)] focus:border-[var(--ds-accent)] rounded-none font-mono-ds text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full font-mono-ds text-[11px] uppercase tracking-widest px-6 py-3 bg-[var(--ds-accent)] text-[var(--ds-bg)] hover:brightness-90 transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2"
                  style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
                >
                  {isSubmitting ? (
                    <><div className="animate-spin h-3.5 w-3.5 border border-current border-t-transparent rounded-full" /> Sending...</>
                  ) : (
                    <><Send className="h-3.5 w-3.5" /> Send Message</>
                  )}
                </button>
              </form>
            </div>

            {/* Right column */}
            <div className="space-y-6">
              {/* Contact info */}
              <div className="space-y-px">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group relative flex items-center gap-4 p-4 bg-[var(--ds-surface)] border border-[var(--ds-border)] hover:bg-[var(--ds-bg)] transition-colors duration-300">
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[var(--ds-accent)] scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300" />
                    <info.icon className="h-4 w-4 text-[var(--ds-text-dim)] shrink-0" />
                    <div>
                      <span className="font-mono-ds text-[10px] uppercase tracking-widest text-[var(--ds-text-dim)] block">{info.label}</span>
                      {info.link ? (
                        <a href={info.link} className="font-body text-sm text-[var(--ds-text-mid)] hover:text-[var(--ds-text)] transition-colors">{info.value}</a>
                      ) : (
                        <span className="font-body text-sm text-[var(--ds-text-mid)]">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="space-y-px">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url} target="_blank" rel="noopener noreferrer"
                    className="group relative flex items-center gap-4 p-4 bg-[var(--ds-surface)] border border-[var(--ds-border)] hover:bg-[var(--ds-bg)] transition-colors duration-300"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[var(--ds-accent)] scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300" />
                    <social.icon className="h-4 w-4 text-[var(--ds-text-dim)] shrink-0" />
                    <div>
                      <span className="font-mono-ds text-[10px] uppercase tracking-widest text-[var(--ds-text-dim)] block">{social.label}</span>
                      <span className="font-body text-sm text-[var(--ds-text-mid)] group-hover:text-[var(--ds-text)] transition-colors">{social.username}</span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability */}
              <div className="p-6 border border-[var(--ds-accent)]/30 bg-[var(--ds-surface)]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--ds-accent)] animate-pulse" />
                  <span className="font-mono-ds text-[11px] uppercase tracking-widest text-[var(--ds-accent)]">
                    Open to remote opportunities
                  </span>
                </div>
                <p className="font-body text-sm text-[var(--ds-text-mid)] leading-relaxed">
                  I'm currently open to new opportunities and exciting projects.
                  Let's discuss how we can work together!
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;