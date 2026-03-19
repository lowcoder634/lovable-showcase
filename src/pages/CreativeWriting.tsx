import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ImageIcon, ArrowRight, Play } from "lucide-react";
import GetInTouch from "@/components/GetInTouch";

const base = import.meta.env.BASE_URL;

const pieces = [
  {
    title: "Throat on Fire",
    subtitle: "Poetry / Chapbook",
    solutionLabel: "About the Book",
    problemLabel: "Virtual Book Launch",
    solution: "Throat on Fire (The Soap Box Press, 2020) is a collection of poems about empathy and its power to change the world. Limited copies remain — use the contact form to request yours.",
    problem: "Watch the virtual book launch to hear the poems performed live, learn what inspired the collection, and listen to a conversation about the themes, the writing process, and what it means to lead with empathy on the page and on the stage.",
    tags: ["Poetry", "Spoken Word", "Chapbook"],
    color: "from-[hsl(300,50%,50%)] to-[hsl(320,45%,45%)]",
    coverImage: `${base}throat-on-fire-cover.png`,
    blurb: {
      quote: "I was blessed with the opportunity to know Nichole as a quiet child prodigy in love with language, and now you, dear readers, can see her wield it with urgency, precision, and grace in Throat on Fire. These examinations of how far we've come and how far we've yet to go with regard to our perceptions on sexuality, race, and gender are evidence of a new force in spoken word — for the stage and the page — and one who leads with the bravest of hearts.",
      attribution: "— Alan Semerdjian, Author of In the Architecture of Bone and The Serpent and The Crane",
    },
    launchUrl: "https://www.youtube.com/watch?v=TvqL8cH-WFo",
  },
  {
    title: "Spoken Word Poetry",
    subtitle: "Live Performances / Video Poems",
    solutionLabel: "About the Work",
    problemLabel: "The Inspiration",
    solution: "A body of spoken word video poetry and live performances exploring identity, empathy, sexuality, race, and the human experience.",
    problem: "Placeholder — what draws you to spoken word and video as a format? What does performance make possible that the page alone cannot?",
    tags: ["Video Poetry", "Spoken Word", "Performance", "Collaboration"],
    color: "from-[hsl(10,75%,50%)] to-[hsl(30,70%,45%)]",
    videos: [
      { youtubeId: "xUUEzazCtqE", caption: "NY Historical Society — Poetic Justice Series" },
      { youtubeId: "gubys5N_uLY", caption: "Sisters — Video Poem" },
      { youtubeId: "bQE6YVC5ncg", caption: "Shot Heard Round The World (Cultation)" },
      { youtubeId: "tQ59qxshNxE", caption: "Trash — with Xavier Simmons", customThumbnail: `${base}trash-video-poem.png` },
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

const VideoThumbnail = ({ youtubeId, title, customThumbnail }: { youtubeId: string; title: string; customThumbnail?: string }) => {
  const [playing, setPlaying] = useState(false);
  const thumbnail = customThumbnail ?? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border shadow-md">
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setPlaying(true)}
          className="absolute inset-0 w-full h-full group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label={`Play ${title}`}
        >
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`; }}
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

const CreativeWriting = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-12 md:pt-36 md:pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(250,65%,55%,0.08),transparent_60%)]" />
        <div className="container relative max-w-4xl text-center space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            Creative{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Writing
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Words as a tool for connection, clarity, and change. These pieces explore the human side of the systems I work within — told through poetry, personal essay, and spoken word.
          </p>
        </div>
      </section>

      {/* Pieces */}
      <section className="pt-10 pb-20 md:pt-12 md:pb-28">
        <div className="container max-w-6xl space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Selected Works</h2>
            <nav className="flex flex-wrap justify-center gap-3 pt-1">
              {pieces.map((p, i) => (
                <a
                  key={i}
                  href={`#piece-${i}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors border border-border rounded-full px-4 py-1.5 hover:border-primary/40"
                >
                  {p.title}
                </a>
              ))}
            </nav>
          </div>

          {pieces.map((piece, i) => {
            const isMultiVideo = piece.videos && piece.videos.length > 1;

            return isMultiVideo ? (
              /* Full-width stacked layout for multi-video pieces */
              <div key={i} id={`piece-${i}`} className="space-y-8">
                {/* Title */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${piece.color} flex items-center justify-center text-primary-foreground`}>
                    <span className="text-sm font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{piece.title}</h3>
                    <p className="text-sm text-muted-foreground">{piece.subtitle}</p>
                  </div>
                </div>

                {/* Full-width About card */}
                <Card className="border-accent/20 bg-accent/5">
                  <CardContent className="pt-5 pb-5 space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">{piece.solutionLabel}</p>
                    <p className="text-sm leading-relaxed text-foreground/80">{piece.solution}</p>
                  </CardContent>
                </Card>

                {/* 2-column video grid — stacks on mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {piece.videos!.map((v) => (
                    <div key={v.youtubeId} className="space-y-2">
                      <VideoThumbnail youtubeId={v.youtubeId} title={v.caption} customThumbnail={v.customThumbnail} />
                      <p className="text-xs text-muted-foreground">{v.caption}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Standard side-by-side layout */
              <div
                key={i}
                id={`piece-${i}`}
                className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-6 lg:gap-10 items-start`}
              >
                {/* Media */}
                <div className="w-full lg:w-1/2 space-y-6 order-last lg:order-none">
                  {piece.videos ? (
                    piece.videos.map((v) => (
                      <div key={v.youtubeId} className="space-y-2">
                        <VideoThumbnail youtubeId={v.youtubeId} title={v.caption} />
                        <p className="text-xs text-muted-foreground">{v.caption}</p>
                      </div>
                    ))
                  ) : piece.coverImage ? (
                    <div className="rounded-lg overflow-hidden border border-border shadow-md max-w-xs">
                      <img src={piece.coverImage} alt={`${piece.title} — Cover`} className="w-full h-auto block" />
                    </div>
                  ) : (
                    <ScreenshotPlaceholder label={`${piece.title} — Image`} />
                  )}
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6 order-first lg:order-none">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${piece.color} flex items-center justify-center text-primary-foreground`}>
                      <span className="text-sm font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{piece.title}</h3>
                      <p className="text-sm text-muted-foreground">{piece.subtitle}</p>
                    </div>
                  </div>

                  <Card className="border-accent/20 bg-accent/5">
                    <CardContent className="pt-5 pb-5 space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-wider text-accent">{piece.solutionLabel}</p>
                      <p className="text-sm leading-relaxed text-foreground/80">{piece.solution}</p>
                      {piece.readUrl && (
                        <a href={piece.readUrl} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline pt-1">
                          <ArrowRight className="w-3.5 h-3.5" />
                          {piece.readLabel}
                        </a>
                      )}
                    </CardContent>
                  </Card>

                  {piece.problem && (
                    <Card className="border-primary/20 bg-primary/5">
                      <CardContent className="pt-5 pb-5 space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-wider text-primary">{piece.problemLabel}</p>
                        <p className="text-sm leading-relaxed text-foreground/80">{piece.problem}</p>
                        {piece.launchUrl && (
                          <a href={piece.launchUrl} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline pt-1">
                            <Play className="w-3.5 h-3.5 fill-primary" />
                            Watch the Virtual Chapbook Launch
                          </a>
                        )}
                      </CardContent>
                    </Card>
                  )}

                  {piece.blurb && (
                    <blockquote className="border-l-2 border-primary/40 pl-4 space-y-2">
                      <p className="text-sm leading-relaxed text-foreground/70 italic">"{piece.blurb.quote}"</p>
                      <cite className="text-xs text-muted-foreground font-medium not-italic">{piece.blurb.attribution}</cite>
                    </blockquote>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <GetInTouch />
    </>
  );
};

export default CreativeWriting;
