import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Mic, Database, Brain } from "lucide-react";
import Reveal from "@/components/Reveal";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Multimodal AI System for Emergency & Distress Detection",
      description:
        "Developed an AI-powered emergency detection system using audio stress analysis and speech recognition. Integrated FastAPI, TensorFlow/Keras, and Whisper ASR for intelligent distress detection and alert workflows.",
      technologies: ["FastAPI", "TensorFlow/Keras", "Whisper ASR", "Python", "AI/ML"],
      icon: <Brain className="w-8 h-8" />,
      role: "Team Lead",
      period: "11/2025 – 01/2026",
      github: "https://github.com/Anirudh-a2004",
      demo: null,
      featured: true,
    },
    {
      title: "Decentralized Cloud Storage using Blockchain Technology",
      description:
        "Built a decentralized cloud storage system using Ethereum, Solidity, IPFS, React, and MetaMask. Enabled secure file upload, preview, download, and management — ensuring data integrity, immutability, and secure access control through blockchain.",
      technologies: ["Ethereum", "Solidity", "IPFS", "React", "MetaMask"],
      icon: <Database className="w-8 h-8" />,
      role: "Team Lead",
      period: "04/2025 – 12/2025",
      github: "https://github.com/Anirudh-a2004",
      demo: null,
      featured: true,
    },
    {
      title: "Voice Surveillance using Arduino Nicla Voice Sensor",
      description:
        "Developed a voice-activated surveillance system to detect abnormal sound levels in real time. Implemented automated alerts and IoT-based remote monitoring focused on security.",
      technologies: ["Arduino", "Nicla Voice Sensor", "IoT", "Embedded Systems"],
      icon: <Mic className="w-8 h-8" />,
      role: "Developer",
      period: "08/2024 – 01/2025",
      github: "https://github.com/Anirudh-a2004",
      demo: null,
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <Reveal className="text-center mb-14">
          <h2 className="gradient-text mb-3">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions combining IoT, cybersecurity, and software engineering
          </p>
        </Reveal>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Reveal
              key={index}
              variant="fade-up"
              delay={index * 120}
              className="group bg-card border border-border rounded-2xl p-8 md:p-10 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-5">
                  <div className="p-4 bg-gradient-hero rounded-xl text-primary-foreground group-hover:scale-110 transition-transform flex-shrink-0">
                    {project.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl md:text-[1.65rem] font-semibold text-card-foreground group-hover:text-primary transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {project.role} • {project.period}
                    </p>
                    {project.featured && (
                      <Badge className="skill-badge mt-3">Featured Project</Badge>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="px-3 py-1 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4 pt-2">
                  <Button
                    className="btn-hero-primary group/btn"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="w-5 h-5 mr-2 group-hover/btn:rotate-12 transition-transform" />
                    GitHub
                  </Button>
                  {project.demo && (
                    <Button
                      variant="outline"
                      className="btn-hero-secondary group/btn"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-14">
          <p className="text-lg text-muted-foreground mb-6">
            Interested in seeing more of my work?
          </p>
          <Button
            className="btn-hero-secondary"
            onClick={() => window.open("https://github.com/Anirudh-a2004", "_blank")}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </Reveal>
      </div>
    </section>
  );
};

export default ProjectsSection;
