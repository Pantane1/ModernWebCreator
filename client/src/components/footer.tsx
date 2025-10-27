import { Github, Linkedin, Mail, Heart, Code } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur-sm" data-testid="footer-main">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              Pantane
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Building powerful, beautiful, and responsive web experiences. Let's create something amazing together.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`link-footer-${item.toLowerCase()}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label="GitHub"
                data-testid="link-social-github"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label="LinkedIn"
                data-testid="link-social-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/254740312402"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-muted hover:bg-secondary/10 hover:text-secondary transition-colors"
                aria-label="WhatsApp"
                data-testid="link-social-whatsapp"
              >
                <SiWhatsapp className="h-5 w-5" />
              </a>
              <a
                href="mailto:pantane254@gmail.com"
                className="p-3 rounded-lg bg-muted hover:bg-accent/10 hover:text-accent transition-colors"
                aria-label="Email"
                data-testid="link-social-email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>
                <a href="#" className="hover:text-primary transition-colors" data-testid="link-privacy">
                  Privacy Policy
                </a>
              </p>
              <p>
                <a href="#" className="hover:text-primary transition-colors" data-testid="link-terms">
                  Terms of Service
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm" data-testid="text-copyright">
              © {currentYear} Pantane. All Rights Reserved.
            </p>
            <p className="flex items-center gap-2 text-sm text-muted-foreground" data-testid="text-coded-by">
              Coded with{" "}
              <Heart className="h-4 w-4 text-destructive fill-current animate-pulse" />{" "}
              and{" "}
              <Code className="h-4 w-4 text-primary" />{" "}
              by Pantane
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
