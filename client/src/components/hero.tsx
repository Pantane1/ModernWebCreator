import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Briefcase } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-primary text-lg md:text-xl font-semibold mb-4 tracking-wide" data-testid="text-greeting">
              Hey, I'm
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight" data-testid="text-name">
              Pantane
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light mb-4" data-testid="text-subtitle">
              (Martin Wamuhu)
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl text-foreground/90 font-medium mb-12 max-w-4xl mx-auto leading-relaxed" data-testid="text-tagline">
              I build powerful, beautiful, and responsive web experiences
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              size="lg"
              className="group px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all"
              onClick={() => scrollToSection("#projects")}
              data-testid="button-view-work"
            >
              <Briefcase className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group px-8 py-6 text-lg border-2 border-primary/50 bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary font-semibold transition-all"
              onClick={() => scrollToSection("#contact")}
              data-testid="button-contact"
            >
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Contact Me
            </Button>
          </div>

          <div
            className={`mt-20 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <button
              onClick={() => scrollToSection("#about")}
              className="animate-bounce text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Scroll to about section"
              data-testid="button-scroll-down"
            >
              <ArrowDown className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
