import { Code, Shield, Cpu, Database } from "lucide-react";

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
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="gradient-text mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Student at SEA College of Engineering (VTU), pursuing BE in IoT & CSBT with a 
            passion for connected systems and cybersecurity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-card-foreground">
                My Journey
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  As a dedicated engineering student specializing in IoT and Cyber Security & 
                  Blockchain Technology, I'm passionate about creating innovative solutions that 
                  bridge the gap between connected devices and robust security frameworks.
                </p>
                <p>
                  My academic journey has been complemented by practical projects that showcase 
                  my ability to implement real-world solutions, from voice-controlled surveillance 
                  systems to blockchain-based storage solutions.
                </p>
                <p>
                  I believe in continuous learning and am actively building expertise in 
                  cybersecurity fundamentals while maintaining a strong foundation in 
                  programming and system design.
                </p>
              </div>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="grid gap-6 animate-slide-in-right">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="card-hover group"
                style={{ animationDelay: `${index * 100}ms` }}
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