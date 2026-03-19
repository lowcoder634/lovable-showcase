import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Play } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import GetInTouch from "@/components/GetInTouch";

const VIDEO_ID = "gxh2gZuIvMw";

const VideoEmbed = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border shadow-md">
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1`}
          title="E.P.I.C 12"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setPlaying(true)}
          className="absolute inset-0 w-full h-full group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Play E.P.I.C 12 Collective performance video"
        >
          <img
            src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
            alt="E.P.I.C 12 Collective"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/90 group-hover:bg-white group-hover:scale-105 transition-all flex items-center justify-center shadow-lg">
              <Play className="w-7 h-7 text-black fill-black ml-1" />
            </div>
          </div>
        </button>
      )}
    </div>
  );
};

const Headshot = () => (
  <div className="relative w-full rounded-2xl overflow-hidden max-w-sm mx-auto shadow-md">
    <img src={`${import.meta.env.BASE_URL}headshot.jpeg`} alt="Nichole Acosta — Digital Health Product Manager, professional headshot" className="w-full h-auto block" />
  </div>
);


const values = [
  {
    label: "Born from lived experience",
    description: "I was diagnosed with Type 1 diabetes at 18. For years, glucose management was a relentless cognitive burden — until a CGM, insulin pump, and mobile apps transformed my daily life. That experience shapes every product decision I make.",
    link: { label: "Featured in STAT News", href: "https://www.statnews.com/sponsor/2023/06/16/mental-checklists-constant-vigilance-a-day-living-with-type-1-diabetes/" },
  },
  {
    label: "Reduce the mental load",
    description: "I believe great digital health products don't just inform — they liberate. Every product decision I make is guided by a single question: does this meaningfully reduce the burden of managing health for a real person?",
  },
];

const AboutMe = () => {
  return (
    <>
      {/* Quote Hero */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-36 md:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(250,65%,55%,0.08),transparent_60%)]" />
        <div className="container relative max-w-4xl text-center space-y-6">
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-foreground">
            "I don't build features.{" "}
            <span>
              I build bridges
            </span>{" "}
            — for the people the existing system forgot to design for."
          </p>
        </div>
      </section>

      {/* Headshot + Bio */}
      <section className="py-10 md:py-16">
        <div className="container max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            {/* Headshot */}
            <div className="w-full lg:w-2/5">
              <Headshot />
            </div>

            {/* Bio */}
            <div className="w-full lg:w-3/5 space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Nichole Acosta</h2>
                <p className="text-muted-foreground text-base">
                  Digital Health Product Manager · AI Builder · Poet
                </p>
              </div>

              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  I build bridges — between health information and real-world care, between people who wouldn't otherwise be in the same room. Before product management, I founded E.P.I.C 12, a collaborative performance collective that brought together 12 new musicians, poets, dancers, actors, and comedians each quarter to perform an original show. That experience sharpened something I use every day: how to frame a problem so the right people can actually solve it together. Poetry sharpened the way I listen and communicate. Product gave me the tools to scale what I care about. A Type 1 diabetes diagnosis at 18 gave me one clear perspective: usability isn't a nice-to-have. It's everything.
                </p>
                <p>
                  At Mayo Clinic, I built a cross-functional product team from scratch — one that became a model for how fast, rigorous product work could actually happen inside a large health system. My leadership helped position the organization as the global source of COVID information throughout the pandemic and evolve the international patient website experience. It's the kind of work I'm drawn to: high stakes, cross-functional, no obvious playbook. I stay close to what's emerging in AI, health tech, and medical research — because the best products are continuously discovering how to best serve the people who need them most.
                </p>
                <p>
                  Right now I'm focused on practical uses of AI — how we can reduce, not add to mental burden, so people can focus on living, not managing. I joined <a href="https://www.womendefiningai.org/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground transition-colors">Women Defining AI</a> in December and found the community I needed to start building real answers. I now co-host the Claude Code study group there. What would you build if you knew how?
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-10 md:py-14 border-t border-border">
        <div className="container max-w-5xl space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">What drives the work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
              I am fueled by a belief that great digital health products don't just inform — they liberate.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <Card key={v.label} className="border-border bg-card">
                <CardContent className="pt-6 pb-6 space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">{v.label}</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">{v.description}</p>
                  {v.link && (
                    <a href={v.link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline">
                      <ArrowRight className="w-3 h-3" />
                      {v.link.label}
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
            <Card className="border-border bg-card">
              <CardContent className="pt-6 pb-6 space-y-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">View my portfolios</p>
                <div className="flex flex-col gap-2">
                  <NavLink to="/product-management" className="flex items-center gap-2 text-sm text-foreground/80 hover:text-foreground transition-colors group">
                    <ArrowRight className="w-3.5 h-3.5 text-primary group-hover:translate-x-0.5 transition-transform" />
                    Product Management
                  </NavLink>
                  <NavLink to="/ai-builds" className="flex items-center gap-2 text-sm text-foreground/80 hover:text-foreground transition-colors group">
                    <ArrowRight className="w-3.5 h-3.5 text-primary group-hover:translate-x-0.5 transition-transform" />
                    AI Builds
                  </NavLink>
                  <NavLink to="/creative-writing" className="flex items-center gap-2 text-sm text-foreground/80 hover:text-foreground transition-colors group">
                    <ArrowRight className="w-3.5 h-3.5 text-primary group-hover:translate-x-0.5 transition-transform" />
                    Creative Writing
                  </NavLink>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Poetry */}
      <section className="py-16 md:py-24 border-t border-border bg-muted/30">
        <div className="container max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Video */}
            <div className="w-full lg:w-1/2 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">Beyond Product</p>
              <VideoEmbed />
              <p className="text-xs text-muted-foreground text-center">
                E.P.I.C 12 Collective [Every Performance is Collaborative]
              </p>
            </div>

            {/* Credentials */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">My creative writing spans poetry, podcast interviews, personal essay, and spoken word.</h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  My collection <span className="italic font-medium">Throat on Fire</span> was published by The Soap Box Press in 2020. My work has appeared in:
                </p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-foreground/80">
                  <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  Americas Poetry Festival of New York
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground/80">
                  <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <a href="https://diabeticsdoingthings.com/podcast/episode-089-diabetics-doing-spoken-word-poetry-with-nichole-acosta" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground transition-colors">
                    Diabetics Doing Things podcast
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground/80">
                  <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <a href="https://laurenselfridge.com/listen/9" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground transition-colors">
                    This Is Not What I Ordered podcast series
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground/80">
                  <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <a href="https://themighty.com/topic/diabetes-type-1/type-1-diabetes-managing-blood-sugar-math-equations/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground transition-colors">
                    The Mighty
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <GetInTouch />
    </>
  );
};

export default AboutMe;
