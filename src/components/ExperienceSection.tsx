import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award, Brain, Database, Shield, Headphones } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import Reveal from "@/components/Reveal";

type Experience = {
  title: string;
  organization: string;
  website: string;
  duration: string;
  location: string;
  type: string;
  highlights: string[];
  icon: JSX.Element;
};

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

const ExperienceCard = ({ exp }: { exp: Experience }) => {
  const { ref, visible } = useReveal<HTMLDivElement>({
    threshold: 0.15,
    rootMargin: "0px 0px -8% 0px",
  });

  const t = (delay: number, duration = 550): React.CSSProperties => ({
    transition: `opacity ${duration}ms ${EASE} ${delay}ms, transform ${duration}ms ${EASE} ${delay}ms`,
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(8px)",
    willChange: "opacity, transform",
  });

  return (
    <div
      ref={ref}
      className="relative pl-20 md:pl-24 motion-reduce:transition-none"
      style={{
        transition: `opacity 600ms ${EASE}, transform 600ms ${EASE}`,
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.98)",
      }}
    >
      {/* Icon perfectly centered on the timeline line (left-8 = 2rem line center) */}
      <div
        className="absolute left-8 top-6 -translate-x-1/2 z-10 p-3 bg-gradient-hero rounded-lg text-primary-foreground shadow-soft motion-reduce:transition-none"
        style={{
          transition: `opacity 500ms ${EASE}, transform 500ms ${EASE}`,
          opacity: visible ? 1 : 0,
          transform: `translateX(-50%) ${visible ? "scale(1)" : "scale(0.9)"}`,
        }}
      >
        {exp.icon}
      </div>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-7 shadow-card hover:shadow-glow transition-shadow duration-300">
        <div style={t(80)}>
          <div className="flex items-center gap-2 mb-2">
            <Badge className="skill-badge text-xs">{exp.type}</Badge>
          </div>
          <h3 className="text-xl font-semibold text-card-foreground">{exp.title}</h3>
          <a
            href={exp.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-primary font-medium hover:underline inline-flex items-center gap-1"
          >
            {exp.organization}
            <span aria-hidden>↗</span>
          </a>
        </div>

        <div
          className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-4"
          style={t(160)}
        >
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {exp.duration}
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {exp.location}
          </div>
        </div>

        <div className="mt-5 space-y-2">
          <h4 className="font-medium text-card-foreground" style={t(220)}>
            Responsibilities:
          </h4>
          <ul className="space-y-2 text-muted-foreground">
            {exp.highlights.map((highlight, hIndex) => (
              <li
                key={hIndex}
                className="flex items-start gap-2 motion-reduce:transition-none"
                style={t(280 + hIndex * 70, 500)}
              >
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      title: "Technical Support Intern",
      organization: "TechAptiva",
      website: "https://www.techaptiva.com/",
      duration: "07/2026 – Present",
      location: "Kochi, India",
      type: "Internship",
      highlights: [
        "Assisted in monitoring, troubleshooting, and maintaining IT systems and network infrastructure",
        "Diagnosed and resolved hardware, software, and connectivity issues",
        "Supported system installation, configuration, and preventive maintenance activities",
        "Collaborated with senior engineers to provide technical assistance and customer support",
      ],
      icon: <Headphones className="w-6 h-6" />,
    },
    {
      title: "Generative AI Assisted Android App Development Intern",
      organization: "MindMartix",
      website: "https://lms.mindmatrix.io/",
      duration: "02/2026 – 05/2026",
      location: "Bangalore, India",
      type: "Internship",
      highlights: [
        "Explored AI-assisted Android application development workflows",
        "Learned modern AI-supported development practices",
      ],
      icon: <Brain className="w-6 h-6" />,
    },
    {
      title: "Edge Computing, SAP ABAP, SAP Analytic Cloud Intern",
      organization: "Edunet Foundation",
      website: "https://edunetfoundation.org/",
      duration: "10/2025 – 02/2026",
      location: "Bangalore, India",
      type: "Internship",
      highlights: [
        "Worked with SAP ABAP and Edge Computing concepts",
        "Explored analytics and backend-oriented development workflows",
      ],
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: "Cybersecurity Intern",
      organization: "ELEVATE LABS",
      website: "https://elevatelabs.in/",
      duration: "10/2025 – 12/2025",
      location: "Bangalore, India",
      type: "Internship",
      highlights: [
        "Assisted in vulnerability assessment and phishing analysis",
        "Worked on basic security monitoring and VAPT-related tasks",
      ],
      icon: <Shield className="w-6 h-6" />,
    },
  ];

  const achievements = [
    "Hands-on experience across AI, SAP, and cybersecurity domains",
    "Exposure to real-world enterprise tools and workflows",
    "Practical experience with vulnerability assessment & VAPT",
    "Strong foundation in modern software & analytics stacks",
  ];

  const { ref: timelineRef, progress } = useScrollProgress<HTMLDivElement>(0.55);

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-hero-subtle">
      <div className="container mx-auto max-w-5xl">
        <Reveal className="text-center mb-14">
          <h2 className="gradient-text mb-3">Experience & Training</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Continuous learning through structured training programs and hands-on projects
          </p>
        </Reveal>

        {/* Timeline column */}
        <div ref={timelineRef} className="relative">
          {/* Track */}
          <div
            className="absolute left-8 top-6 bottom-6 w-0.5 bg-border/70 rounded-full pointer-events-none"
            aria-hidden
          />
          {/* Progress fill — driven by scroll, retracts on scroll up */}
          <div
            className="absolute left-8 top-6 w-0.5 bg-gradient-hero rounded-full pointer-events-none origin-top motion-reduce:hidden"
            style={{
              height: `calc((100% - 3rem) * ${progress})`,
              transition: "height 120ms linear",
            }}
            aria-hidden
          />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} />
            ))}
          </div>
        </div>

        {/* Achievements & Philosophy */}
        <div className="grid md:grid-cols-2 gap-6 mt-14">
          <Reveal variant="fade-up" className="glass-card p-7 rounded-2xl">
            <h3 className="text-xl font-semibold mb-5 text-card-foreground flex items-center gap-3">
              <Award className="w-5 h-5 text-accent" />
              Key Achievements
            </h3>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <Reveal
                  key={index}
                  variant="fade-up"
                  delay={index * 80}
                  duration={500}
                  className="flex items-start gap-3 p-3 bg-background/50 rounded-lg"
                >
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground text-sm">{achievement}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal variant="fade-up" delay={120} className="glass-card p-7 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3 text-card-foreground">
              Learning Philosophy
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I believe in hands-on, project-based learning that combines theoretical knowledge
              with practical implementation. My approach focuses on understanding core concepts
              deeply and applying them to solve real-world problems.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
