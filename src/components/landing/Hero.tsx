import { useCallback, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { HeroSequence } from "./HeroSequence";
import content from "@/content/site-content.json";

const DESKTOP_BREAKPOINT = 1024;
const FADE_START = 0.45;
const FADE_END = 0.68;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  const handleProgress = useCallback((progress: number) => {
    const el = copyRef.current;
    if (!el) return;
    // Mobile keeps the copy block fully visible throughout, as before. On
    // desktop, fade it out well before the sequence reaches its closing
    // logo-reveal frames, so the "Daily Stogie" name shows up clean with the
    // copy already fully gone instead of still fading over it.
    if (window.innerWidth < DESKTOP_BREAKPOINT) {
      el.style.opacity = "";
      el.style.pointerEvents = "";
      return;
    }
    const t = Math.min(1, Math.max(0, (progress - FADE_START) / (FADE_END - FADE_START)));
    const opacity = 1 - t;
    el.style.opacity = String(opacity);
    el.style.pointerEvents = opacity < 0.05 ? "none" : "auto";
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink lg:block"
    >
      {/* Cinematic scroll-scrubbed visual — stacked on top on mobile, full-bleed background on desktop */}
      <div className="relative h-[28svh] w-full shrink-0 lg:absolute lg:inset-0 lg:h-auto">
        <HeroSequence
          sectionRef={sectionRef}
          poster="/sequence/ezgif-frame-001.jpg"
          onProgress={handleProgress}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent lg:bg-gradient-to-r lg:from-ink lg:via-ink/45 lg:to-ink/10" />
      </div>

      {/* Copy — always visible on mobile; on desktop it overlays the sequence
          and fades out near the end so the closing logo-reveal frame is unobstructed */}
      <div
        ref={copyRef}
        className="relative z-10 flex flex-1 flex-col justify-center bg-ink px-6 py-4 lg:absolute lg:inset-0 lg:flex-none lg:bg-transparent lg:py-0"
      >
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="max-w-md">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
              {content.hero.eyebrow}
            </p>
            <h1 className="mt-4 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-cream sm:text-[68px] lg:mt-6">
              {content.hero.headlineLine1}
              <span className="block text-gold">{content.hero.headlineLine2}</span>
            </h1>

            <div className="mt-5 inline-flex items-center gap-3 border border-gold/40 px-5 py-2 lg:mt-7">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              <span className="text-xs font-medium uppercase tracking-[0.22em] text-cream">
                {content.hero.badge}
              </span>
            </div>

            <p className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-gold lg:mt-6">
              {content.hero.kicker}
            </p>

            <div className="mt-5 flex flex-wrap gap-3 lg:mt-8">
              <a
                href="#app"
                className="inline-flex items-center gap-6 bg-gold px-6 py-4 text-sm font-medium uppercase tracking-[0.2em] text-ink transition-opacity hover:opacity-85"
              >
                {content.hero.ctaLabel} <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
