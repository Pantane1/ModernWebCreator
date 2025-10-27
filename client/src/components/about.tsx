import { Card } from "@/components/ui/card";
import { Code2, Palette, Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-8" data-testid="section-about">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" data-testid="heading-about">
            About Me
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-card-border hover-elevate active-elevate-2">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground" data-testid="heading-passion">Passionate Developer</h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid="text-passion">
                    I'm a full-stack web developer from Kenya with a deep passion for creating digital experiences that not only look stunning but perform flawlessly. Every line of code I write is crafted with precision and purpose.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-card-border hover-elevate active-elevate-2">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <Palette className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground" data-testid="heading-mission">Mission Statement</h3>
                  <p className="text-lg font-medium text-primary italic mb-3" data-testid="text-mission-quote">
                    "To create digital experiences that inspire and perform."
                  </p>
                  <p className="text-muted-foreground leading-relaxed" data-testid="text-mission-detail">
                    I believe that great software is where creativity meets functionality. My mission is to bridge the gap between beautiful design and powerful technology.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-card-border hover-elevate active-elevate-2">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Sparkles className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground" data-testid="heading-interests">Beyond the Code</h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid="text-interests">
                    When I'm not coding, you'll find me exploring the latest frameworks, diving into design trends, writing tech articles, and constantly learning new ways to push the boundaries of web development. I'm always excited about the next big thing in tech!
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20 hover:shadow-primary/30 transition-shadow duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
              <div className="aspect-square bg-gradient-to-br from-card via-card to-muted flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                      <span className="text-6xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                        P
                      </span>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground">Profile Image</p>
                  <p className="text-sm text-muted-foreground/70 mt-2">Kenya 🇰🇪</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
