import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/Reveal";
import {
  Code2,
  Layout,
  Server,
  Database,
  Network,
  Headphones,
  ShieldCheck,
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code2 className="w-5 h-5" />,
      skills: ["Java", "Python", "C", "SAP ABAP Basics"],
    },
    {
      title: "Frontend",
      icon: <Layout className="w-5 h-5" />,
      skills: ["React", "Tailwind CSS", "HTML", "CSS"],
    },
    {
      title: "Backend",
      icon: <Server className="w-5 h-5" />,
      skills: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      title: "Database",
      icon: <Database className="w-5 h-5" />,
      skills: ["MongoDB", "Firebase", "MySQL"],
    },
    {
      title: "Networking",
      icon: <Network className="w-5 h-5" />,
      skills: ["TCP/IP", "DNS", "DHCP", "Network Security"],
    },
    {
      title: "Technical Support",
      icon: <Headphones className="w-5 h-5" />,
      skills: ["Windows", "Troubleshooting", "System Configuration"],
    },
    {
      title: "Cybersecurity",
      icon: <ShieldCheck className="w-5 h-5" />,
      skills: ["Wireshark", "Burp Suite", "Nmap", "VAPT Basics"],
    },
  ];

  return (
    <section id="skills" className="py-16 px-4 bg-gradient-hero-subtle">
      <div className="container mx-auto max-w-6xl">
        <Reveal className="text-center mb-12">
          <h2 className="gradient-text mb-3">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Organized across the domains I actively work in
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <Reveal
              key={category.title}
              variant="fade-up"
              delay={i * 80}
              className="glass-card p-6 rounded-2xl hover:shadow-glow transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-gradient-hero text-primary-foreground">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="border-primary/40 text-foreground bg-background/40 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
