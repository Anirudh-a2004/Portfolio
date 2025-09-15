import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Mic, Users, Shield } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Smart Voice Surveillance and Alert Device",
      description: "An intelligent surveillance system using Nicla Voice Acoustic Sensor for real-time audio monitoring and threat detection. Features advanced voice recognition and automated alert mechanisms.",
      technologies: ["IoT", "Voice Recognition", "Embedded Systems", "C++"],
      icon: <Mic className="w-8 h-8" />,
      github: "https://github.com/Anirudh-a2004",
      demo: null,
      featured: true
    },
    {
      title: "Attendance Tracker",
      description: "A comprehensive attendance management system designed for educational institutions. Streamlines the process of tracking student attendance with automated reporting features.",
      technologies: ["Java", "Database Management", "UI/UX Design"],
      icon: <Users className="w-8 h-8" />,
      github: "https://github.com/Anirudh-a2004",
      demo: null,
      featured: false
    },
    {
      title: "Esports Tournament Manager",
      description: "A complete tournament management platform for esports events. Handles player registration, bracket generation, match scheduling, and result tracking.",
      technologies: ["Java", "Tournament Logic", "Database Design"],
      icon: <Shield className="w-8 h-8" />,
      github: "https://github.com/Anirudh-a2004",
      demo: null,
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="gradient-text mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions combining IoT, cybersecurity, and software engineering
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`card-hover ${project.featured ? 'md:col-span-2' : ''} group`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`grid ${project.featured ? 'md:grid-cols-2' : 'grid-cols-1'} gap-6 items-center`}>
                {/* Project Icon & Info */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-4 bg-gradient-hero rounded-xl text-primary-foreground group-hover:scale-110 transition-transform">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <Badge className="skill-badge mt-2">Featured Project</Badge>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button 
                      className="btn-hero-primary group"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                      GitHub
                    </Button>
                    {project.demo && (
                      <Button 
                        variant="outline"
                        className="btn-hero-secondary group"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>

                {/* Project Visual (for featured projects) */}
                {project.featured && (
                  <div className="hidden md:block">
                    <div className="aspect-video bg-gradient-card rounded-xl border-2 border-border flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 mx-auto bg-gradient-hero rounded-full flex items-center justify-center text-primary-foreground">
                          {project.icon}
                        </div>
                        <p className="text-muted-foreground">Project Demo</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <p className="text-lg text-muted-foreground mb-6">
            Interested in seeing more of my work?
          </p>
          <Button 
            className="btn-hero-secondary"
            onClick={() => window.open('https://github.com/Anirudh-a2004', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;