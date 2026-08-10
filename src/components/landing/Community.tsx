import { Lock } from "lucide-react";
import content from "@/content/site-content.json";

export function Community() {
  return (
    <section id="community" className="bg-background py-16">
      <div className="mx-auto max-w-[1280px] px-6">
        <p className="text-center text-xs font-medium uppercase tracking-[0.28em] text-gold">
          {content.community.eyebrow}
        </p>
        <h2 className="mt-4 text-center font-display text-5xl font-semibold uppercase tracking-wide text-ink">
          {content.community.heading}
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {content.community.photos.map(({ src, alt }, i) => (
            <figure key={i} className="group relative overflow-hidden">
              <img
                src={src}
                alt={alt}
                loading="lazy"
                width={700}
                height={560}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-background/85">
                <Lock className="h-3 w-3 text-ink" />
              </span>
            </figure>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="#community"
            className="border border-border bg-background px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-ink transition-colors hover:border-gold hover:text-gold"
          >
            {content.community.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
