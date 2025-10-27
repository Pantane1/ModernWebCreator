import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send, Github, Linkedin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export function Contact() {
  const { toast } = useToast();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: (response: any) => {
      toast({
        title: "Message Sent Successfully!",
        description: response?.message || "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Failed to Send Message",
        description: error?.message || "Something went wrong. Please try again later.",
      });
    },
  });

  const onSubmit = async (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-8" data-testid="section-contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" data-testid="heading-contact">
            Let's Build Something Amazing Together
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-card-border hover-elevate active-elevate-2">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            {...field}
                            className="bg-background/50 border-border focus:border-primary transition-colors"
                            data-testid="input-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your.email@example.com"
                            {...field}
                            className="bg-background/50 border-border focus:border-primary transition-colors"
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project..."
                            rows={6}
                            {...field}
                            className="bg-background/50 border-border focus:border-primary transition-colors resize-none"
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all"
                    disabled={contactMutation.isPending}
                    data-testid="button-submit"
                  >
                    {contactMutation.isPending ? (
                      <>
                        <MessageSquare className="mr-2 h-5 w-5 animate-pulse" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-card-border hover-elevate active-elevate-2">
              <h3 className="text-2xl font-bold mb-6 text-card-foreground">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email</p>
                    <a
                      href="mailto:pantane254@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-email"
                    >
                      pantane254@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <SiWhatsapp className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">WhatsApp</p>
                    <a
                      href="https://wa.me/254740312402"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-secondary transition-colors"
                      data-testid="link-whatsapp"
                    >
                      +254 740 312 402
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <MessageSquare className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Location</p>
                    <p className="text-muted-foreground">Kenya 🇰🇪</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-card-border hover-elevate active-elevate-2">
              <h3 className="text-2xl font-bold mb-6 text-card-foreground">Connect With Me</h3>
              
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 min-w-[140px]"
                  asChild
                  data-testid="button-github"
                >
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 min-w-[140px]"
                  asChild
                  data-testid="button-linkedin"
                >
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-semibold"
                  data-testid="button-hire"
                >
                  Hire Me
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
