import { Card } from "@/components/ui/card";
import { Code, Layers, Wrench } from "lucide-react";
import { useEffect, useState, useRef } from "react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: typeof Code;
  color: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code,
    color: "primary",
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "HTML/CSS", level: 98 },
      { name: "Python", level: 85 },
      { name: "PHP", level: 80 },
    ],
  },
  {
    title: "Frameworks",
    icon: Layers,
    color: "secondary",
    skills: [
      { name: "React", level: 95 },
      { name: "Node.js", level: 90 },
      { name: "Laravel", level: 85 },
      { name: "Tailwind CSS", level: 98 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "accent",
    skills: [
      { name: "Git", level: 92 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 88 },
      { name: "Firebase", level: 85 },
      { name: "WordPress", level: 80 },
    ],
  },
];

function SkillBar({ skill, isVisible }: { skill: Skill; isVisible: boolean }) {
  return (
    <div className="mb-6" data-testid={`skill-${skill.name.toLowerCase().replace(/[\s\/]/g, '-')}`}>
      <div className="flex justify-between mb-2">
        <span className="text-foreground font-medium">{skill.name}</span>
        <span className="text-muted-foreground font-mono text-sm">{skill.level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${skill.level}%` : "0%",
          }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-24 px-6 lg:px-8 bg-muted/20" data-testid="section-skills">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" data-testid="heading-skills">
            Skills & Expertise
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            const colorClass = category.color === "primary" ? "text-primary" : category.color === "secondary" ? "text-secondary" : "text-accent";
            const bgClass = category.color === "primary" ? "bg-primary/10" : category.color === "secondary" ? "bg-secondary/10" : "bg-accent/10";

            return (
              <Card
                key={category.title}
                className={`p-8 bg-card/50 backdrop-blur-sm border-card-border hover-elevate active-elevate-2 transition-all duration-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
                data-testid={`card-skill-category-${category.title.toLowerCase()}`}
              >
                <div className={`inline-flex p-3 rounded-lg ${bgClass} mb-6`}>
                  <Icon className={`h-8 w-8 ${colorClass}`} />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-card-foreground" data-testid={`heading-${category.title.toLowerCase()}`}>
                  {category.title}
                </h3>
                <div>
                  {category.skills.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} isVisible={isVisible} />
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
