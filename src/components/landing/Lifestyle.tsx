import { Globe, MessageCircle, Leaf, Crown, ShieldCheck } from "lucide-react";

const FEATURES = [
  {
    icon: Globe,
    title: "Global Community",
    text: "Connect with cigar enthusiasts worldwide and build lasting friendships.",
  },
  {
    icon: MessageCircle,
    title: "Daily Stories",
    text: "Share your experiences, discover insights, and be inspired by our global members.",
  },
  {
    icon: Leaf,
    title: "Premium Discovery",
    text: "Explore the world's finest cigars, handpicked by experts for true aficionados.",
  },
  {
    icon: Crown,
    title: "Exclusive Access",
    text: "Members-only events, limited releases, and private lounge privileges.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy First",
    text: "Your privacy and personal data are protected with the highest standards.",
  },
];

export function Lifestyle() {
  return (
    <section id="about" className="bg-secondary py-20">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-border" />
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-ink">
            More Than a Cigar
          </p>
          <span className="h-px w-16 bg-border" />
        </div>

        <h2 className="mt-6 text-center font-display text-5xl font-semibold uppercase tracking-wide text-ink">
          A Lifestyle of <span className="text-gold">Refinement</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-y-0">
          {FEATURES.map(({ icon: Icon, title, text }, i) => (
            <article
              key={title}
              className={`px-6 text-center ${i > 0 ? "lg:border-l lg:border-border" : ""}`}
            >
              <Icon className="mx-auto h-8 w-8 text-gold" strokeWidth={1} />
              <h3 className="mt-5 text-lg font-semibold uppercase tracking-[0.16em] text-ink">
                {title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
