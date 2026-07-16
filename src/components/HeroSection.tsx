import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import avatarImage from "@/assets/anirudh-avatar.jpg";
import Reveal from "@/components/Reveal";

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="container mx-auto max-w-4xl text-center">
        <Reveal variant="fade-up" duration={700} className="space-y-8">
          {/* Avatar */}
          <div className="relative inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden shadow-glow animate-float">
              <img 
                src={avatarImage} 
                alt="Anirudh A - Professional Portrait" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-1 bg-gradient-hero rounded-full opacity-20 blur-xl"></div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="gradient-text">
              Anirudh A
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
              Aspiring Software & IoT Engineer
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm currently pursuing BE in IoT & CSBT at SEA College of Engineering (VTU). 
            I build secure, reliable systems using IoT concepts — and I'm starting a career in cybersecurity.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button 
              className="btn-hero-primary group"
              asChild
            >
              <a href="/resume.pdf" download="Anirudh_A_Resume.pdf">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </a>
            </Button>
            <Button 
              variant="outline"
              className="btn-hero-secondary group"
              onClick={scrollToProjects}
            >
              View Projects
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;