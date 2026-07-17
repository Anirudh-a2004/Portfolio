import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import avatarImage from "@/assets/anirudh-avatar.jpg";
import Reveal from "@/components/Reveal";

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[92vh] flex items-center justify-center px-4 pt-24 pb-12">
      <div className="container mx-auto max-w-4xl text-center">
        <Reveal variant="fade-up" duration={700} className="space-y-7">
          {/* Avatar */}
          <div className="relative inline-block">
            <div className="w-32 h-32 md:w-36 md:h-36 mx-auto rounded-full overflow-hidden shadow-glow animate-float">
              <img
                src={avatarImage}
                alt="Anirudh A - Professional Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-1 bg-gradient-hero rounded-full opacity-20 blur-xl"></div>
          </div>

          {/* Name and Title */}
          <div className="space-y-3">
            <h1 className="gradient-text text-5xl md:text-7xl font-extrabold tracking-tight">
              Anirudh A
            </h1>
            <h2 className="text-lg md:text-2xl text-muted-foreground font-medium">
              Technical Support Engineer{" "}
              <span className="text-primary/60">|</span> Cybersecurity Enthusiast{" "}
              <span className="text-primary/60">|</span> Full-Stack Developer
            </h2>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Currently pursuing BE in IoT &amp; CSBT at SEA College of Engineering (VTU).
            I build secure, reliable systems and I'm starting a career in cybersecurity.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <Button className="btn-hero-primary group" asChild>
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
        </Reveal>
      </div>
    </section>
  );
};

export default HeroSection;
