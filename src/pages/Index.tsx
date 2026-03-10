import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, MessageSquare, Zap, Users, Shield, TrendingUp, ImageIcon } from "lucide-react";

const apps = [
  {
    title: "TaskFlow Pro",
    subtitle: "Project Management",
    problem: "Remote teams waste 5+ hours weekly switching between scattered tools — Slack threads, email chains, and spreadsheets — losing context and momentum on every project.",
    solution: "A unified Kanban workspace with real-time collaboration, automated status updates, and integrated team chat — reducing context-switching by 60%.",
    tags: ["Productivity", "Collaboration", "Real-time"],
    icon: <Users className="w-5 h-5" />,
    color: "from-[hsl(250,65%,55%)] to-[hsl(280,60%,55%)]",
  },
  {
    title: "HealthSync",
    subtitle: "Patient Portal",
    problem: "Patients juggle multiple apps for appointments, lab results, and prescriptions — leading to missed medications and fragmented health records.",
    solution: "A single dashboard connecting patients to their care team with appointment scheduling, real-time lab results, medication reminders, and secure messaging.",
    tags: ["Healthcare", "HIPAA", "Telehealth"],
    icon: <Shield className="w-5 h-5" />,
    color: "from-[hsl(170,60%,45%)] to-[hsl(190,55%,45%)]",
  },
  {
    title: "InvestTracker",
    subtitle: "Financial Analytics",
    problem: "Retail investors lack institutional-grade tools to track portfolio performance, analyze risk exposure, and spot market opportunities in real time.",
    solution: "An analytics dashboard with live market data, custom watchlists, AI-powered risk scoring, and automated portfolio rebalancing alerts.",
    tags: ["Fintech", "Analytics", "AI"],
    icon: <TrendingUp className="w-5 h-5" />,
    color: "from-[hsl(35,90%,55%)] to-[hsl(15,80%,50%)]",
  },
  {
    title: "ShopEase",
    subtitle: "Mobile Commerce",
    problem: "Small retailers lose 68% of mobile shoppers to abandoned carts due to clunky checkout flows and poor product discovery on mobile devices.",
    solution: "A mobile-first storefront with one-tap checkout, AI-curated product recommendations, and streamlined inventory management for store owners.",
    tags: ["E-commerce", "Mobile", "Payments"],
    icon: <Zap className="w-5 h-5" />,
    color: "from-[hsl(300,50%,50%)] to-[hsl(330,60%,50%)]",
  },
];

const ScreenshotPlaceholder = ({ label }: { label: string }) => (
  <div className="relative w-full aspect-[16/10] rounded-lg bg-muted/50 border-2 border-dashed border-border flex flex-col items-center justify-center gap-3 overflow-hidden group hover:border-primary/40 transition-colors">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
    <ImageIcon className="w-10 h-10 text-muted-foreground/40 group-hover:text-primary/40 transition-colors" />
    <span className="text-sm text-muted-foreground/60 font-medium">{label}</span>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(250,65%,55%,0.08),transparent_60%)]" />
        <div className="container relative max-w-4xl text-center space-y-8">
          <Badge variant="secondary" className="px-4 py-1.5 text-sm font-medium">
            Portfolio · Built with Lovable
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            Real problems.{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Shipped solutions.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A showcase of full-stack applications I've designed and built with Lovable — 
            each solving a specific user pain point, from concept to deployment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="gap-2 text-base px-8" asChild>
              <a href="#schedule">
                <Calendar className="w-4 h-4" />
                Schedule a Call
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-base px-8" asChild>
              <a href="#projects">
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 md:py-28">
        <div className="container max-w-6xl space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Projects</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Each project started with a real user problem and ended with a shipped product.
            </p>
          </div>

          {apps.map((app, i) => (
            <div
              key={app.title}
              className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 lg:gap-16 items-center`}
            >
              {/* Screenshots */}
              <div className="w-full lg:w-1/2 space-y-4">
                <ScreenshotPlaceholder label={`${app.title} — Dashboard View`} />
                <div className="grid grid-cols-2 gap-4">
                  <ScreenshotPlaceholder label="User Flow Step 1" />
                  <ScreenshotPlaceholder label="User Flow Step 2" />
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center text-primary-foreground`}>
                    {app.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{app.title}</h3>
                    <p className="text-sm text-muted-foreground">{app.subtitle}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {app.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Card className="border-destructive/20 bg-destructive/5">
                  <CardContent className="pt-5 pb-5 space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-destructive">The Problem</p>
                    <p className="text-sm leading-relaxed text-foreground/80">{app.problem}</p>
                  </CardContent>
                </Card>

                <Card className="border-accent/20 bg-accent/5">
                  <CardContent className="pt-5 pb-5 space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">The Solution</p>
                    <p className="text-sm leading-relaxed text-foreground/80">{app.solution}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="schedule" className="py-20 md:py-28 border-t border-border">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10">
            <Card className="bg-card border-border">
              <CardContent className="pt-8 pb-8 space-y-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Schedule a Call</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Interested in working together or want to discuss a project idea? 
                  Book a free 30-minute discovery call.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-primary" /> 30-minute video call</li>
                  <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-primary" /> No commitment required</li>
                  <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-primary" /> Project feasibility review</li>
                </ul>
                <Button className="w-full gap-2" size="lg">
                  <Calendar className="w-4 h-4" />
                  Book a Time
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-8 pb-8 space-y-5">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Share Feedback</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Tried one of these apps or have thoughts on the approach? 
                  I'd love to hear your perspective.
                </p>
                <textarea
                  placeholder="What stood out to you? Any suggestions?"
                  className="w-full h-28 rounded-lg border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
                <Button variant="outline" className="w-full gap-2" size="lg">
                  <MessageSquare className="w-4 h-4" />
                  Send Feedback
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border text-center text-sm text-muted-foreground">
        <div className="container">
          Built with Lovable · {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
};

export default Index;
