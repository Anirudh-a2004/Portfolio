import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Java Training Program",
      organization: "Tap Academy",
      duration: "2025",
      location: "Training Institute",
      type: "Training",
      highlights: [
        "Hands-on Java fundamentals and core concepts",
        "Object-Oriented Programming (OOP) principles",
        "Data types, control structures, and algorithms",
        "Basic project development and implementation",
        "Problem-solving methodologies"
      ],
      icon: <Award className="w-6 h-6" />
    }
  ];

  const achievements = [
    "Strong foundation in Java programming",
    "Practical experience with OOP concepts",
    "Project-based learning approach",
    "Industry-standard coding practices"
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-hero-subtle">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="gradient-text mb-4">Experience & Training</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning through structured training programs and hands-on projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Experience Timeline */}
          <div className="space-y-8 animate-fade-in-up">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="card-hover relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline connector */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-16 bg-gradient-hero opacity-30"></div>
                )}
                
                <div className="flex items-start space-x-6">
                  <div className="p-3 bg-gradient-hero rounded-lg text-primary-foreground flex-shrink-0">
                    {exp.icon}
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="skill-badge text-xs">
                          {exp.type}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-card-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-primary font-medium">
                        {exp.organization}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium text-card-foreground">Key Learning Areas:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        {exp.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements & Skills Gained */}
          <div className="space-y-8 animate-slide-in-right">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-card-foreground flex items-center gap-3">
                <Award className="w-6 h-6 text-accent" />
                Key Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-4 bg-background/50 rounded-lg"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Approach */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                Learning Philosophy
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe in hands-on, project-based learning that combines theoretical knowledge 
                with practical implementation. My approach focuses on understanding core concepts 
                deeply and applying them to solve real-world problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;