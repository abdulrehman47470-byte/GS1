import { ArrowRight, Check, Crown, Diamond, Leaf } from "lucide-react";
import content from "@/content/site-content.json";

const PLAN_ICONS = [Leaf, Crown, Diamond];
const FEATURED_PLAN_INDEX = 1;

export function Membership() {
  return (
    <section id="membership" className="bg-background py-16">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid items-stretch gap-0 bg-secondary lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.5fr)_minmax(0,0.7fr)]">
          {/* Left copy */}
          <div className="flex flex-col justify-center p-10">
            <div className="flex items-center gap-3">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-gold">
                {content.membership.eyebrow}
              </p>
              <span className="h-px w-10 bg-gold/50" />
            </div>
            <h2 className="mt-6 font-display text-5xl font-semibold uppercase leading-tight text-ink">
              {content.membership.headingLine1}
              <br />
              {content.membership.headingLine2}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {content.membership.description}
            </p>
            <a
              href="#membership"
              className="mt-8 inline-flex w-fit items-center gap-6 bg-ink px-6 py-4 text-sm font-medium uppercase tracking-[0.2em] text-cream transition-opacity hover:opacity-85"
            >
              {content.membership.ctaLabel} <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Plans */}
          <div className="grid grid-cols-1 items-center gap-4 p-6 sm:grid-cols-3">
            {content.membership.plans.map(({ name, price, period, perks }, i) => {
              const Icon = PLAN_ICONS[i % PLAN_ICONS.length] ?? Leaf;
              const featured = i === FEATURED_PLAN_INDEX;
              return (
              <article
                key={i}
                className={
                  featured
                    ? "z-10 bg-ink p-6 text-cream shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] sm:-my-6 sm:py-10"
                    : "bg-background p-6"
                }
              >
                <Icon
                  className={`mx-auto h-7 w-7 ${featured ? "text-gold" : "text-ink"}`}
                  strokeWidth={1}
                />
                <h3
                  className={`mt-4 text-center font-display text-xl font-semibold uppercase tracking-[0.16em] ${
                    featured ? "text-gold" : "text-ink"
                  }`}
                >
                  {name}
                </h3>
                <p className="mt-3 text-center">
                  <span
                    className={`font-display text-3xl ${featured ? "text-cream" : "text-ink"}`}
                  >
                    {price}
                  </span>
                  <span
                    className={`ml-1 text-xs tracking-[0.16em] ${
                      featured ? "text-cream/60" : "text-muted-foreground"
                    }`}
                  >
                    {period}
                  </span>
                </p>

                <ul className="mt-6 space-y-3">
                  {perks.map((perk, pi) => (
                    <li key={pi} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-3 w-3 shrink-0 text-gold" />
                      <span
                        className={`text-sm tracking-wide ${
                          featured ? "text-cream/85" : "text-muted-foreground"
                        }`}
                      >
                        {perk}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={
                    featured
                      ? "mt-7 w-full bg-gold py-3 text-sm font-medium uppercase tracking-[0.2em] text-ink transition-opacity hover:opacity-90"
                      : "mt-7 w-full border border-border py-3 text-sm font-medium uppercase tracking-[0.2em] text-ink transition-colors hover:border-gold hover:text-gold"
                  }
                >
                  Select
                </button>
              </article>
              );
            })}
          </div>

          {/* Image */}
          <img
            src={content.membership.image}
            alt="Open humidor filled with premium cigars beside a whiskey glass"
            loading="lazy"
            width={900}
            height={1100}
            className="h-full min-h-[280px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
