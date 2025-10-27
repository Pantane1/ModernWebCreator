import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  color: string;
}

const projects: Project[] = [
  {
    title: "Pantane Portfolio",
    description: "A modern, responsive personal portfolio website showcasing projects and skills with smooth animations and a beautiful dark theme.",
    technologies: ["React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    features: ["Responsive Design", "Dark Theme", "Smooth Animations", "SEO Optimized"],
    color: "primary",
  },
  {
    title: "SmartShop",
    description: "Full-featured e-commerce platform with product management, shopping cart, secure checkout, and admin dashboard.",
    technologies: ["Laravel", "MySQL", "Vue.js", "Stripe API"],
    features: ["Payment Integration", "Admin Panel", "Order Tracking", "Inventory Management"],
    color: "secondary",
  },
  {
    title: "BlogSphere",
    description: "Modern blogging platform with rich text editor, comment system, user authentication, and social media integration.",
    technologies: ["Node.js", "MongoDB", "Express", "React"],
    features: ["User Authentication", "Rich Text Editor", "Comment System", "Tag Management"],
    color: "accent",
  },
  {
    title: "AI Prompt Studio",
    description: "Creative tool for generating and managing AI prompts with categorization, favorites, and export functionality.",
    technologies: ["React", "Firebase", "OpenAI API", "Tailwind"],
    features: ["Prompt Generation", "Cloud Sync", "Categories", "Export Options"],
    color: "primary",
  },
  {
    title: "TaskFlow Pro",
    description: "Project management application with kanban boards, team collaboration, and real-time updates for efficient workflow.",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "WebSockets"],
    features: ["Real-time Updates", "Team Collaboration", "Kanban Boards", "Analytics"],
    color: "secondary",
  },
  {
    title: "HealthTracker",
    description: "Fitness and health tracking app with workout logging, nutrition tracking, and progress visualization.",
    technologies: ["React Native", "Node.js", "MongoDB", "Chart.js"],
    features: ["Workout Logging", "Nutrition Tracking", "Progress Charts", "Goal Setting"],
    color: "accent",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-8" data-testid="section-projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" data-testid="heading-projects">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const colorClass =
              project.color === "primary"
                ? "from-primary/20 to-primary/5"
                : project.color === "secondary"
                ? "from-secondary/20 to-secondary/5"
                : "from-accent/20 to-accent/5";

            return (
              <Card
                key={project.title}
                className="group bg-card/50 backdrop-blur-sm border-card-border hover-elevate active-elevate-2 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-xl hover:shadow-primary/10"
                data-testid={`card-project-${idx}`}
              >
                <div className={`h-48 bg-gradient-to-br ${colorClass} flex items-center justify-center border-b border-card-border`}>
                  <div className="text-center p-6">
                    <div className="text-6xl font-bold opacity-20">{project.title.charAt(0)}</div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-card-foreground" data-testid={`heading-project-${idx}`}>{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="flex-1 space-y-4">
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-project-description-${idx}`}>
                    {project.description}
                  </p>

                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Key Features:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs"
                        data-testid={`badge-tech-${tech.toLowerCase().replace(/\s/g, '-')}-${idx}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="gap-2 pt-4 border-t border-card-border">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    data-testid={`button-view-project-${idx}`}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Live
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    data-testid={`button-github-${idx}`}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
