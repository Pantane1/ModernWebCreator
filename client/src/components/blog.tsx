import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  color: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Building Responsive Layouts with Tailwind CSS",
    excerpt: "Learn how to create beautiful, responsive designs efficiently using Tailwind's utility-first approach and mobile-first methodology.",
    category: "Web Development",
    date: "2025-01-15",
    readTime: "8 min read",
    color: "primary",
  },
  {
    title: "Top 10 VS Code Extensions for Web Developers",
    excerpt: "Boost your productivity with these essential VS Code extensions that every modern web developer should have installed.",
    category: "Tech Tools",
    date: "2025-01-10",
    readTime: "6 min read",
    color: "secondary",
  },
  {
    title: "The Art of Minimalist UI Design",
    excerpt: "Explore the principles of minimalist design and how to create clean, user-friendly interfaces that users love.",
    category: "Design Tips",
    date: "2025-01-05",
    readTime: "10 min read",
    color: "accent",
  },
  {
    title: "Getting Started with AI-Powered Development",
    excerpt: "Discover how AI tools and automation can enhance your development workflow and help you build better applications faster.",
    category: "AI & Automation",
    date: "2024-12-28",
    readTime: "12 min read",
    color: "primary",
  },
  {
    title: "React Performance Optimization Techniques",
    excerpt: "Master the art of optimizing React applications for better performance using memoization, code splitting, and lazy loading.",
    category: "Web Development",
    date: "2024-12-20",
    readTime: "9 min read",
    color: "secondary",
  },
  {
    title: "Modern Authentication Patterns in 2025",
    excerpt: "Understand the latest authentication and authorization patterns including OAuth, JWT, and passwordless authentication.",
    category: "Web Development",
    date: "2024-12-15",
    readTime: "11 min read",
    color: "accent",
  },
];

const categories = ["Web Development", "Tech Tools", "Design Tips", "AI & Automation"];

export function Blog() {
  return (
    <section id="blog" className="py-24 px-6 lg:px-8 bg-muted/20" data-testid="section-blog">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" data-testid="heading-blog">
            Pantane Writes About Tech
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development and technology
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant="outline"
              className="px-4 py-2 text-sm cursor-pointer hover-elevate active-elevate-2"
              data-testid={`badge-category-${category.toLowerCase().replace(/\s&\s/g, '-').replace(/\s/g, '-')}`}
            >
              {category}
            </Badge>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, idx) => {
            const colorClass =
              post.color === "primary"
                ? "from-primary/20 to-primary/5"
                : post.color === "secondary"
                ? "from-secondary/20 to-secondary/5"
                : "from-accent/20 to-accent/5";

            return (
              <Card
                key={post.title}
                className="group bg-card/50 backdrop-blur-sm border-card-border hover-elevate active-elevate-2 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-xl hover:shadow-primary/10"
                data-testid={`card-blog-${idx}`}
              >
                <div className={`h-32 bg-gradient-to-br ${colorClass} border-b border-card-border`} />

                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs" data-testid={`badge-post-category-${idx}`}>
                      {post.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors" data-testid={`heading-blog-${idx}`}>
                    {post.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 space-y-4">
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-blog-excerpt-${idx}`}>
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="group/btn p-0 h-auto font-semibold text-primary hover:text-primary/80"
                    data-testid={`button-read-more-${idx}`}
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="group" data-testid="button-view-all-posts">
            View All Posts
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
