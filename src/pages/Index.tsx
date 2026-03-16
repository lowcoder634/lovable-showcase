import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, MessageSquare, Stethoscope, FlaskConical, Brain, BookOpen, Users, ImageIcon, Bell, AlertTriangle } from "lucide-react";

const apps = [
  {
    title: "MedPrep",
    subtitle: "Patient Appointment Prep",
    problem: "Patients forget symptoms, medications, and questions during doctor visits. With only 15 minutes per appointment, disorganized information leads to missed diagnoses and wasted visits.",
    solution: "An AI-powered app that collects simple patient notes and generates a structured 'Doctor Visit Brief' — covering symptoms, timeline, medications, and questions — ready to hand to the doctor in under 30 seconds.",
    tags: ["Healthcare", "AI", "Patient Experience"],
    icon: <Stethoscope className="w-5 h-5" />,
    color: "from-[hsl(160,45%,45%)] to-[hsl(180,40%,40%)]",
    projectUrl: "/projects/45626d46-b3a7-4b68-a119-0c5ca5bdccae",
    dashboardImage: "/mevi-dashboard2.png",
    userFlowImage1: "/symptom-log.png",
    userFlowImage2: "/ai-visit-prep.png",
  },
  {
    title: "Clinical Trial Matching Agent",
    subtitle: "Agent Workflow",
    problem: "Finding the right clinical trial is an overwhelming and time-consuming experience. Trial listings are written in dense medical jargon that is difficult for patients to navigate on their own, and too voluminous for researchers and coordinators to screen manually — causing eligible patients to miss trials they qualify for and slowing enrollment for life-saving research.",
    solution: "The Clinical Trial Matching Agent replaces filter-based searching with simple conversation — describe the patient, get matched trials to follow up with the research team. What used to take hours now takes minutes.",
    disclaimer: "This agent is intended for personal use in its current form. For deployment at scale — such as across a care team, clinic, or organization — the agent should be integrated with a secure, HIPAA-compliant communication channel to ensure the privacy and protection of sensitive health information.",
    articleUrl: "https://medium.com/@nicholeacosta/from-filter-fatigue-to-guided-discovery-building-an-agentic-clinical-trial-matching-system-97eac1a273c3",
    tags: ["Healthtech", "Personalization", "Research"],
    icon: <FlaskConical className="w-5 h-5" />,
    color: "from-[hsl(250,55%,55%)] to-[hsl(280,50%,50%)]",
    projectUrl: "/projects/b2cf96ef-5e59-400a-8431-e7e7ebce13e4",
    sideBySide: [
      { label: "Backend Workflow", image: "/clinical-trial-ai-flow.png" },
      { label: "Frontend Conversation", video: "/trial-match-recording.mov" },
    ],
  },
  {
    title: "Medical Refill Reminder Agent",
    subtitle: "Agent Workflow",
    problem: "My pharmacy portal didn't offer automatic refill reminders. It didn't support auto-shipment. There was no way to schedule or proactively manage anything — and with multiple medications and medical supplies to track, each with different usage rates and reorder timelines, the mental overload was overwhelming. So I built my own system.",
    solution: "The Medical Refill Reminder Agent tracks your medications and medical supplies and sends a reminder 7–14 days before you're at risk of running out — giving you a comfortable window to refill without any last-minute scrambling. Alerts are delivered to the communication channel of your choice, so reminders reach you where you already are. No spreadsheets, no guesswork, no gaps in care.",
    disclaimer: "This agent is intended for personal use in its current form. For deployment at scale — such as across a care team, clinic, or organization — the agent should be integrated with a secure, HIPAA-compliant communication channel to ensure the privacy and protection of sensitive health information.",
    tags: ["Healthcare", "Automation", "AI Agent"],
    icon: <Bell className="w-5 h-5" />,
    color: "from-[hsl(20,80%,50%)] to-[hsl(40,75%,45%)]",
    projectUrl: "",
    sideBySide: [
      { label: "Agent Workflow", image: "/medical-refill-reminder-ai-flow.png" },
    ],
    articleUrl: "https://medium.com/@nicholeacosta/from-mental-load-to-agentic-care-building-a-refill-reminder-system-that-actually-works-ce97820f597b",
  },
  {
    title: "Story Scout",
    subtitle: "Children's Book Recommendations",
    problem: "My children and I visit the library every week and pick books to read together at night, but choosing at random makes the experience hit-or-miss—some stories are great, others not so much. I wanted a way to get personalized recommendations so my family and others in the community could spend more time reading books we'll enjoy.",
    solution: "An AI-powered recommendation engine that analyzes a family's reading history — likes, dislikes, themes, and authors — to suggest personalized children's books available in the local library catalog.",
    tags: ["EdTech", "AI", "Family"],
    icon: <BookOpen className="w-5 h-5" />,
    color: "from-[hsl(35,85%,55%)] to-[hsl(15,75%,50%)]",
    projectUrl: "/projects/e0275e0c-1b0f-4930-a76c-578b58dde4ed",
    dashboardImage: "/story-scout-dash.png",
    hideUserFlowPlaceholders: true,
  },
  {
    title: "Start Buddy",
    subtitle: "Accountability Companion",
    problem: "People with ADHD and executive function challenges struggle to start tasks alone. Existing productivity apps add complexity instead of providing the simple human presence that makes starting easier.",
    solution: "A body-doubling app with real-time companion messaging — share a link, a buddy joins with zero sign-up, and their encouraging presence helps you start and finish tasks without judgment.",
    tags: ["Wellness", "Real-time", "Accessibility"],
    icon: <Users className="w-5 h-5" />,
    color: "from-[hsl(140,50%,45%)] to-[hsl(160,45%,40%)]",
    projectUrl: "/projects/947db697-7ee7-4406-b178-3935f7a6bf0e",
    sideBySide: [
      { label: "Start Buddy 1", image: "/startbuddy1.jpeg" },
      { label: "Start Buddy 2", image: "/startbuddy2.jpeg" },
    ],
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
      <section className="relative overflow-hidden pt-24 pb-12 md:pt-36 md:pb-16">
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
            These tools span healthcare, education, and community access. What connects them isn't the technology — it's the population. Each one was built for someone who was underserved, overwhelmed, or overlooked by the existing system. My design philosophy is simple: if it doesn't reduce a real barrier for a real person, it isn't worth building.
          </p>
          <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed italic text-foreground/80">
            "I don't build features. I build bridges — for the people the existing system forgot to design for."
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="pt-10 pb-20 md:pt-12 md:pb-28">
        <div className="container max-w-6xl space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Products</h2>
            <nav className="flex flex-wrap justify-center gap-3 pt-1">
              {apps.map((app) => (
                <a
                  key={app.title}
                  href={`#${app.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors border border-border rounded-full px-4 py-1.5 hover:border-primary/40"
                >
                  {app.title}
                </a>
              ))}
            </nav>
          </div>

          {apps.map((app, i) => (
            <div
              key={app.title}
              id={app.title.toLowerCase().replace(/\s+/g, "-")}
              className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 lg:gap-16 items-start`}
            >
              {/* Screenshots */}
              <div className="w-full lg:w-1/2 space-y-4 order-last lg:order-none">
                {app.sideBySide ? (
                  <div className={`grid gap-4 ${app.sideBySide.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}>
                    {app.sideBySide.map((panel) => (
                      panel.image ? (
                        <div key={panel.label} className="rounded-lg overflow-hidden border border-border shadow-md">
                          <img
                            src={panel.image}
                            alt={`${app.title} — ${panel.label}`}
                            className="w-full h-auto block"
                          />
                        </div>
                      ) : panel.video ? (
                        <div key={panel.label} className="rounded-lg overflow-hidden border border-border shadow-md">
                          <video
                            src={panel.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-auto block"
                          />
                        </div>
                      ) : (
                        <ScreenshotPlaceholder key={panel.label} label={panel.label} />
                      )
                    ))}
                  </div>
                ) : (
                  <>
                    {app.dashboardImage ? (
                      <div className="relative w-full rounded-lg overflow-hidden border border-border shadow-md">
                        <img
                          src={app.dashboardImage}
                          alt={`${app.title} — Dashboard View`}
                          className="w-full h-auto block"
                        />
                      </div>
                    ) : (
                      <ScreenshotPlaceholder label={`${app.title} — Dashboard View`} />
                    )}
                    {!app.hideUserFlowPlaceholders && (
                      <div className="grid grid-cols-2 gap-4">
                        {app.userFlowImage1 ? (
                          <div className="rounded-lg overflow-hidden border border-border shadow-md">
                            <img
                              src={app.userFlowImage1}
                              alt={`${app.title} — User Flow Step 1`}
                              className="w-full h-auto block"
                            />
                          </div>
                        ) : (
                          <ScreenshotPlaceholder label="User Flow Step 1" />
                        )}
                        {app.userFlowImage2 ? (
                          <div className="rounded-lg overflow-hidden border border-border shadow-md">
                            <img
                              src={app.userFlowImage2}
                              alt={`${app.title} — User Flow Step 2`}
                              className="w-full h-auto block"
                            />
                          </div>
                        ) : (
                          <ScreenshotPlaceholder label="User Flow Step 2" />
                        )}
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-6 order-first lg:order-none">
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

                {app.disclaimer && (
                  <div className="flex gap-3 rounded-lg border border-yellow-500/30 bg-yellow-500/5 px-4 py-3">
                    <AlertTriangle className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" />
                    <p className="text-xs leading-relaxed text-foreground/70">
                      <span className="font-semibold text-yellow-600">Disclaimer: </span>
                      {app.disclaimer}
                    </p>
                  </div>
                )}

                {app.articleUrl && (
                  <a
                    href={app.articleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    <ArrowRight className="w-4 h-4" />
                    Read the full article on Medium
                  </a>
                )}
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
