import { Code, Shield, Cpu, Database } from "lucide-react";
import Reveal from "@/components/Reveal";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Voice Surveillance System",
      description: "Built using Nicla Voice sensor for smart acoustic monitoring"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Decentralized Cloud Storage",
      description: "Blockchain-based secure storage solution"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cybersecurity Focus",
      description: "Passionate about building secure, reliable systems"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "IoT Innovation",
      description: "Expertise in connected systems and IoT fundamentals"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <Reveal className="text-center mb-16">
          <h2 className="gradient-text mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Final-year B.E. Computer Science Engineering (IoT & CSBT) student passionate about
            software development, IoT systems, and emerging technologies.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <Reveal className="space-y-6">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-card-foreground">
                My Journey
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Final-year B.E. Computer Science Engineering (IoT & CSBT) student with interest
                  in software development, IoT systems, and emerging technologies.
                </p>
                <p>
                  Hands-on experience through internships and academic projects involving
                  cybersecurity fundamentals, SAP technologies, AI-based systems, and web
                  development concepts.
                </p>
                <p>
                  Passionate about learning modern technologies, solving real-world problems,
                  and continuously improving technical and analytical skills.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Key Highlights */}
          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <Reveal
                key={index}
                variant="slide-right"
                delay={index * 100}
                className="card-hover group"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-hero rounded-lg text-primary-foreground group-hover:scale-110 transition-transform">
                    {highlight.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2 text-card-foreground">
                      {highlight.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;