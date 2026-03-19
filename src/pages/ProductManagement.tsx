import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ImageIcon, ArrowRight, Play } from "lucide-react";
import GetInTouch from "@/components/GetInTouch";

const VideoPlayer = ({ src, label, aspectClass = "aspect-video" }: { src: string; label: string; aspectClass?: string }) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    setTimeout(() => videoRef.current?.play(), 50);
  };

  return (
    <div className={`relative w-full ${aspectClass} rounded-lg overflow-hidden border border-border shadow-md bg-muted`}>
      <video
        ref={videoRef}
        src={src}
        controls
        playsInline
        className="w-full h-full object-contain"
      />
      {!playing && (
        <button
          onClick={handlePlay}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handlePlay()}
          className="absolute inset-0 w-full h-full flex items-center justify-center group bg-black/20 hover:bg-black/30 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label={`Play ${label}`}
        >
          <div className="w-14 h-14 rounded-full bg-white/90 group-hover:bg-white group-hover:scale-105 transition-all flex items-center justify-center shadow-lg">
            <Play className="w-6 h-6 text-black fill-black ml-0.5" />
          </div>
        </button>
      )}
    </div>
  );
};

const base = import.meta.env.BASE_URL;

const projects = [
  {
    title: "Mayo Clinic International Patient Website",
    subtitle: "Mayo Clinic · Senior Product Manager",
    problem: "The international patient website information architecture did not align with careseekers' expectations and suffered from misrouting, redundancy, language complexity, and accessibility gaps — causing high drop-off rates, missed conversions, and compliance risks.",
    solution: "Led a full strategic redesign, guiding a cross-functional product team through continuous discovery to align the site's information architecture with how international patients actually seek and evaluate care.",
    outcomes: [
      "Form completion reached its highest recorded level in the first month post-redesign",
      "50% increase in engagement and conversion",
      "Surfacing travel requirements and appointment process information upfront shifted visitor behavior — enabling international patients to self-select more intentionally before scheduling",
    ],
    tags: ["Information Architecture", "UX", "Accessibility", "Internationalization", "Continuous Discovery", "Stakeholder Management", "Cross-functional Leadership"],
    color: "from-[hsl(200,65%,50%)] to-[hsl(220,60%,45%)]",
    sideBySide: [
      { label: "Before", video: `${base}intl-old.mp4`, aspectClass: "aspect-[3/4]" },
      { label: "After", video: `${base}intl-new.mp4`, aspectClass: "aspect-[3/4]" },
    ],
    showSideBySideCaptions: true,
  },
  {
    title: "Mayo Clinic Concierge Medicine",
    subtitle: "Mayo Clinic · Product Manager",
    problem: "Prospective members had to navigate a static PDF to determine which concierge medicine tier was right for them — a high-friction, low-guidance experience that placed the burden of decision-making entirely on the user and limited consultation conversions.",
    solution: "Replaced the PDF with a question-based, personalized tier-matching quiz. Designed the end-to-end user flow, partnered with the designer on landing page experiences tied to each quiz outcome, and led QA testing of the full submission-to-consultation scheduling flow as part of a rebranded program launch.",
    outcomes: [
      "$1.2M in revenue within 4 months of launch",
    ],
    tags: ["Acquisition", "UX", "Personalization", "Product Launch"],
    color: "from-[hsl(170,55%,45%)] to-[hsl(190,50%,40%)]",
    dashboardImage: `${base}concierge-medicine.webp`,
    hidePlaceholders: true,
  },
  {
    title: "MayoClinic.org Appointments FAQ",
    subtitle: "Mayo Clinic · A/B Testing & User Engagement",
    problem: "The existing Appointments FAQ had low engagement with its CTAs. The hypothesis: reframing the page as 'Everything you need to know before requesting an appointment' would increase relevance and drive more users toward scheduling.",
    solution: "Led cross-functional alignment across Optimization, UX, Content, and Access Management teams to design and run a multi-variant experiment. The winning variation introduced anchor links, expand/collapse functionality, and SEO-informed content restructuring.",
    outcomes: [
      "83.3% increase in clickthrough to the appointment request page",
      "30.9% increase in form start rate",
      "63.6% increase in form submission rate",
      "74% of users expanded at least one Q&A",
    ],
    tags: ["A/B Testing", "Acquisition", "UX", "SEO"],
    color: "from-[hsl(160,50%,45%)] to-[hsl(180,45%,40%)]",
    sideBySide: [
      { label: "Before", image: `${base}faq-old.webp` },
      { label: "After", image: `${base}faq-new.webp` },
    ],
    showSideBySideCaptions: true,
  },
  {
    title: "Mayo Clinic Patient Visitor Guide & Billing",
    subtitle: "Mayo Clinic · Product Strategy & Delivery Owner",
    problem: "Poor content findability, outdated billing and insurance information, and misalignment with new regulatory requirements were eroding trust and creating friction for patients trying to prepare for their visits.",
    solution: "Owned the end-to-end product strategy as Delivery Owner, leading a cross-functional team spanning SEO, UX design, analytics, content strategy, and editorial. Drove a full content audit and redesign that modernized the experience and brought it into regulatory compliance.",
    outcomes: [
      "+23% average homepage clickthrough increase",
      "75% acceleration in stakeholder review cycle (2 quarters → 1.5 months)",
      "45 URL reviews across 3 Revenue Cycle teams in 30 days",
      "Content QA completed 8 days early; migration within 7 days",
    ],
    tags: ["Content Strategy", "Regulatory", "UX", "SEO", "Stakeholder Management", "Cross-functional Leadership"],
    color: "from-[hsl(30,80%,50%)] to-[hsl(50,75%,45%)]",
    dashboardImage: `${base}PVG+pre+vs.+post+redesign+(1).webp`,
    hidePlaceholders: true,
  },
  {
    title: "MayoClinic.org Diseases & Conditions",
    subtitle: "Mayo Clinic · Senior Product Manager",
    problem: "The Diseases & Conditions index — spanning 1,500+ conditions — had unfiltered search results that created cognitive burden, too many distracting on-page elements, and a non-English experience that was disrupted by English-language content.",
    solution: "Redesigned the search capability and rebuilt the index as a user-centric, accessible page with refined results targeting. Optimized the experience across four languages to ensure consistent quality regardless of the user's preferred language.",
    outcomes: [
      "+15% year-over-year organic search increase",
      "4 languages optimized",
      "Improved user engagement and related content discovery",
    ],
    tags: ["SEO", "Accessibility", "Internationalization", "UX"],
    color: "from-[hsl(280,55%,50%)] to-[hsl(300,50%,45%)]",
    sideBySide: [
      { label: "Before", image: `${base}disease-before.webp` },
      { label: "After", image: `${base}disease-after.webp` },
    ],
    showSideBySideCaptions: true,
  },
  {
    title: "Mayo Clinic COVID Resource Center",
    subtitle: "Mayo Clinic · Product Manager",
    problem: "COVID-19 created a fast-moving, high-stakes information environment. Mayo Clinic needed to establish itself as the world's leading source of COVID information — while managing constantly evolving search intent, widespread vaccine misinformation, and eventual COVID fatigue as conditions changed.",
    solution: "Led a cross-functional product team through a data-driven content strategy with deliberate roadmap pivots. Early pandemic: content driven entirely by user questions. Later stages: shifted to a hope-focused narrative showcasing vaccine importance. Delivered a U.S. COVID transmission map, vaccine comparison chart, and interactive timeline — all iterated through A/B testing and accessibility audits.",
    outcomes: [
      "15.9M views on the U.S. COVID transmission map (2021)",
      "5.5M views on the COVID tracker tool",
      "100% task completion after accessibility fix via collapsible data tables",
    ],
    tags: ["Content Strategy", "A/B Testing", "Accessibility", "Cross-functional Leadership", "Change Management"],
    color: "from-[hsl(220,60%,50%)] to-[hsl(240,55%,45%)]",
    dashboardVideo: `${base}COVID-Map-Screen Recording 2022-02-22.mp4`,
    dashboardVideoCaption: "Screen recording of U.S. COVID-19 transmission map tool over the course of the pandemic",
    secondaryVideo: `${base}vaccine-comparison.mp4`,
    secondaryVideoCaption: "Vaccine Comparison Chart to maximize informed decision making and accessibility",
    tertiaryVideo: `${base}infectious-disease-timeline.mp4`,
    tertiaryVideoCaption: "Adapting to User Needs: From Answering Critical Questions to Showcasing the Importance of Vaccines Throughout History",
    hidePlaceholders: true,
  },
  {
    title: "RiseAboveCOVID.org",
    subtitle: "Jumo Health · B2B2C Clinical Trial Recruitment",
    problem: "Clinical trial recruitment is notoriously slow and inequitable — with eligible patients often unaware of trials they qualify for. Jumo Health needed a digital product that could bridge the gap between trial sponsors and the patients most likely to enroll.",
    solution: "Led digital publishing, QA testing, and SEO optimization for a B2B2C clinical trial recruitment website designed to match patients to trials with clarity and trust. Delivered an award-winning site that became the primary patient acquisition channel.",
    outcomes: [
      "44% of referred patients originated from the website",
    ],
    tags: ["Clinical Trials", "B2B2C", "SEO", "Digital Publishing"],
    color: "from-[hsl(10,75%,50%)] to-[hsl(30,70%,45%)]",
    detailImages: [`${base}jumo-covid1.webp`, `${base}jumo-covid2.webp`, `${base}jumo-covid3.webp`],
    hidePlaceholders: true,
  },
];

const ScreenshotPlaceholder = ({ label }: { label: string }) => (
  <div className="relative w-full aspect-[16/10] rounded-lg bg-muted/50 border-2 border-dashed border-border flex flex-col items-center justify-center gap-3 overflow-hidden group hover:border-primary/40 transition-colors">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
    <ImageIcon className="w-10 h-10 text-muted-foreground/40 group-hover:text-primary/40 transition-colors" />
    <span className="text-sm text-muted-foreground/60 font-medium">{label}</span>
  </div>
);

const ProductManagement = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-12 md:pt-36 md:pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(250,65%,55%,0.08),transparent_60%)]" />
        <div className="container relative max-w-4xl text-center space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            Product{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Management
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A selection of product work spanning 17 years in digital health — strategy, discovery, and measurable outcomes.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="pt-10 pb-20 md:pt-12 md:pb-28">
        <div className="container max-w-6xl space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Case Studies</h2>
            <nav className="flex flex-wrap justify-center gap-3 pt-1">
              {projects.map((p, i) => (
                <a
                  key={i}
                  href={`#project-${i}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors border border-border rounded-full px-4 py-1.5 hover:border-primary/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {p.title}
                </a>
              ))}
            </nav>
          </div>

          {projects.map((project, i) => (
            <div
              key={i}
              id={`project-${i}`}
              className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 lg:gap-16 items-start scroll-mt-28`}
            >
              {/* Screenshots */}
              <div className="w-full lg:w-1/2 space-y-4 order-last lg:order-none">
                {project.sideBySide ? (
                  <div className="grid grid-cols-2 gap-3">
                    {project.sideBySide.map((panel) => (
                      <div key={panel.label} className="space-y-1.5">
                        {panel.video ? (
                          <VideoPlayer src={panel.video} label={panel.label} aspectClass={panel.aspectClass} />
                        ) : panel.image ? (
                          <div className="rounded-lg overflow-hidden border border-border shadow-md">
                            <img src={panel.image} alt={`${project.title} — ${panel.label}`} className="w-full h-auto block" />
                          </div>
                        ) : (
                          <ScreenshotPlaceholder label={panel.label} />
                        )}
                        {project.showSideBySideCaptions && (
                          <p className="text-xs text-muted-foreground text-center">{panel.label}</p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : project.dashboardVideo ? (
                  <div className="space-y-3">
                    <figure>
                      <VideoPlayer src={project.dashboardVideo} label={`${project.title} — Dashboard View`} />
                      {project.dashboardVideoCaption && (
                        <figcaption className="text-xs text-muted-foreground mt-1.5">{project.dashboardVideoCaption}</figcaption>
                      )}
                    </figure>
                    {project.secondaryVideo && (
                      <figure>
                        <VideoPlayer src={project.secondaryVideo} label={`${project.title} — Secondary`} />
                        {project.secondaryVideoCaption && (
                          <figcaption className="text-xs text-muted-foreground mt-1.5">{project.secondaryVideoCaption}</figcaption>
                        )}
                      </figure>
                    )}
                    {project.tertiaryVideo && (
                      <figure>
                        <VideoPlayer src={project.tertiaryVideo} label={`${project.title} — Tertiary`} />
                        {project.tertiaryVideoCaption && (
                          <figcaption className="text-xs text-muted-foreground mt-1.5">{project.tertiaryVideoCaption}</figcaption>
                        )}
                      </figure>
                    )}
                  </div>
                ) : project.detailImages ? (
                  <div className={`grid gap-3 ${project.detailImages.length === 3 ? "grid-cols-3" : "grid-cols-2"}`}>
                    {project.detailImages.map((src) => (
                      <div key={src} className="rounded-lg overflow-hidden border border-border shadow-md">
                        <img src={src} alt={`${project.title} — Detail`} className="w-full h-auto block" />
                      </div>
                    ))}
                  </div>
                ) : project.dashboardImage ? (
                  <div className="rounded-lg overflow-hidden border border-border shadow-md">
                    <img src={project.dashboardImage} alt={`${project.title} — Before & After`} className="w-full h-auto block" />
                  </div>
                ) : (
                  <ScreenshotPlaceholder label={`${project.title} — Dashboard View`} />
                )}
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-6 order-first lg:order-none">
                <div className="flex items-center gap-3">
                  <div aria-hidden="true" className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-primary-foreground`}>
                    <span className="text-sm font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Card className="border-destructive/20 bg-destructive/5">
                  <CardContent className="pt-5 pb-5 space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-destructive">The Problem</p>
                    <p className="text-sm leading-relaxed text-foreground/80">{project.problem}</p>
                  </CardContent>
                </Card>

                <Card className="border-accent/20 bg-accent/5">
                  <CardContent className="pt-5 pb-5 space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">The Solution</p>
                    <p className="text-sm leading-relaxed text-foreground/80">{project.solution}</p>
                  </CardContent>
                </Card>

                {project.outcomes && (
                  <Card className="border-primary/20 bg-primary/5">
                    <CardContent className="pt-5 pb-5 space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary">Outcomes</p>
                      <ul className="space-y-2">
                        {project.outcomes.map((outcome) => (
                          <li key={outcome} className="flex items-start gap-2 text-sm text-foreground/80">
                            <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <GetInTouch />
    </>
  );
};

export default ProductManagement;
