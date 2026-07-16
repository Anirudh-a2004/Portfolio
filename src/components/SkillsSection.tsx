import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/Reveal";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Security & Systems",
      skills: ["Cybersecurity Fundamentals", "Networking & Network Security", "IoT & Cloud Fundamentals"]
    },
    {
      title: "Core & Programming",
      skills: ["Java", "C Programming", "SAP ABAP Basics", "ML & DL Fundamentals"]
    },
    {
      title: "Web Development",
      skills: ["React.js Fundamentals", "Node.js & Express.js", "REST APIs", "Git & GitHub"]
    }
  ];

  const allSkills = [
    "Cybersecurity Fundamentals", "Networking & Network Security", "IoT & Cloud Fundamentals",
    "Java", "C Programming", "SAP ABAP Basics", "ML & DL Fundamentals",
    "React.js Fundamentals", "Node.js & Express.js", "REST APIs", "Git & GitHub"
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-hero-subtle">
      <div className="container mx-auto max-w-6xl">
        <Reveal className="text-center mb-16">
          <h2 className="gradient-text mb-4">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set spanning software development, IoT, and cybersecurity
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Reveal
              key={categoryIndex}
              variant="scale"
              delay={categoryIndex * 150}
              className="glass-card p-8 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-6 text-card-foreground text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} className="skill-badge">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16 text-center animate-fade-in-up">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">
            All Skills at a Glance
          </h3>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {allSkills.map((skill, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
