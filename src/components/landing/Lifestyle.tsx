import { Globe, MessageCircle, Leaf, Crown, ShieldCheck } from "lucide-react";
import content from "@/content/site-content.json";

const FEATURE_ICONS = [Globe, MessageCircle, Leaf, Crown, ShieldCheck];

export function Lifestyle() {
  return (
    <section id="about" className="bg-secondary py-20">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-border" />
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-ink">
            {content.lifestyle.eyebrow}
          </p>
          <span className="h-px w-16 bg-border" />
        </div>

        <h2 className="mt-6 text-center font-display text-5xl font-semibold uppercase tracking-wide text-ink">
          {content.lifestyle.headingLine1} <span className="text-gold">{content.lifestyle.headingHighlight}</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-y-0">
          {content.lifestyle.features.map(({ title, text }, i) => {
            const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length] ?? Globe;
            return (
            <article
              key={i}
              className={`px-6 text-center ${i > 0 ? "lg:border-l lg:border-border" : ""}`}
            >
              <Icon className="mx-auto h-8 w-8 text-gold" strokeWidth={1} />
              <h3 className="mt-5 text-lg font-semibold uppercase tracking-[0.16em] text-ink">
                {title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{text}</p>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
