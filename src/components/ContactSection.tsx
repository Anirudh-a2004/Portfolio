import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, Send, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:anirudhhfhs2017@gmail.com?subject=Portfolio Contact from ${name}&body=From: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;
    window.location.href = mailtoLink;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/anirudh-a-31b301256/",
      icon: <Linkedin className="w-5 h-5" />,
      description: "Professional Network"
    },
    {
      name: "GitHub",
      url: "https://github.com/Anirudh-a2004",
      icon: <Github className="w-5 h-5" />,
      description: "Code Repository"
    },
    {
      name: "Email",
      url: "mailto:anirudhhfhs2017@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      description: "Direct Contact"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="gradient-text mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss opportunities, collaborate on projects, or just connect? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-card-foreground">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-card-foreground">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-card-foreground">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-card-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    required
                    className="bg-background/50 border-border focus:border-primary resize-none"
                  />
                </div>
                <Button type="submit" className="btn-hero-primary w-full group">
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Information & Social Links */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Contact Info */}
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-card-foreground">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-hero rounded-lg text-primary-foreground">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Email</p>
                    <p className="text-muted-foreground">anirudhhfhs2017@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-accent rounded-lg text-accent-foreground">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Location</p>
                    <p className="text-muted-foreground">Kochi, Kerala, India</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Connect With Me</h3>
              {socialLinks.map((link, index) => (
                <Card 
                  key={index}
                  className="card-hover cursor-pointer group"
                  onClick={() => window.open(link.url, '_blank')}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-6 flex items-center gap-4">
                    <div className="p-3 bg-gradient-hero rounded-lg text-primary-foreground group-hover:scale-110 transition-transform">
                      {link.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                        {link.name}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {link.description}
                      </p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Send className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-muted-foreground mb-6">
              Whether you're looking for a dedicated team member, have a project in mind, 
              or just want to connect with a fellow tech enthusiast, I'm always open to new opportunities.
            </p>
            <Button 
              className="btn-hero-primary"
              onClick={() => window.open('mailto:anirudhhfhs2017@gmail.com', '_blank')}
            >
              <Mail className="w-5 h-5 mr-2" />
              Start a Conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;