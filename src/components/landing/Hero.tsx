import { useRef } from "react";
import { ArrowRight, Play } from "lucide-react";
import { HeroSequence } from "./HeroSequence";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink lg:block"
    >
      {/* Cinematic scroll-scrubbed visual — stacked on top on mobile, full-bleed background on desktop */}
      <div className="relative h-[28svh] w-full shrink-0 lg:absolute lg:inset-0 lg:h-auto">
        <HeroSequence sectionRef={sectionRef} poster="/sequence/ezgif-frame-001.jpg" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent lg:bg-gradient-to-r lg:from-ink lg:via-ink/55 lg:to-ink/15" />
        <div className="absolute inset-0 hidden bg-gradient-to-t from-ink via-ink/10 to-ink/50 lg:block" />
      </div>

      {/* Copy */}
      <div className="relative z-10 flex flex-1 flex-col justify-center bg-ink px-6 py-4 lg:absolute lg:inset-0 lg:flex-none lg:bg-transparent lg:py-32">
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="max-w-md">
            <p className="text-[10px] uppercase tracking-[0.28em] text-gold">
              Premier International Cigar Community
            </p>
            <h1 className="mt-4 font-display text-6xl uppercase leading-[0.95] tracking-tight text-cream sm:text-7xl lg:mt-6">
              Exquisite
              <span className="block text-gold">Experiences</span>
            </h1>

            <div className="mt-4 flex items-center gap-3 lg:mt-7">
              <span className="h-px w-24 bg-cream/25" />
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-gold" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M12 21V11" strokeLinecap="round" />
                <path d="M12 12c-.6-5-4.5-8-9-8-.6 5 2.8 8.6 9 8Z" />
              </svg>
              <span className="h-px w-24 bg-cream/25" />
            </div>

            <p className="mt-3 text-sm leading-relaxed text-cream/75 lg:mt-6">
              Where passion meets refinement. Discover a world of premium cigars,
              curated moments, and global connections.
            </p>

            <div className="mt-5 flex flex-wrap gap-3 lg:mt-8">
              <a
                href="#membership"
                className="inline-flex items-center gap-6 bg-gold px-6 py-4 text-[10px] uppercase tracking-[0.2em] text-ink transition-opacity hover:opacity-85"
              >
                Join the Club <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a
                href="#experiences"
                className="inline-flex items-center border border-cream/30 bg-transparent px-8 py-4 text-[10px] uppercase tracking-[0.2em] text-cream transition-colors hover:border-gold hover:text-gold"
              >
                Explore More
              </a>
            </div>

            <button type="button" className="mt-4 flex items-center gap-3 text-left lg:mt-10">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/60 text-gold">
                <Play className="h-3 w-3 fill-current" />
              </span>
              <span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-cream">
                  Watch Intro
                </span>
                <span className="block text-[10px] tracking-wide text-cream/60">
                  1:24 min
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
