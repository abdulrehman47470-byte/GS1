import { ArrowRight, Check, Crown, Diamond, Leaf } from "lucide-react";
import humidor from "@/assets/humidor.jpg";

const PLANS = [
  {
    icon: Leaf,
    name: "Classic",
    price: "$99",
    period: "/YEAR",
    featured: false,
    perks: ["Community Access", "Monthly Newsletter", "Member Discounts"],
  },
  {
    icon: Crown,
    name: "Premier",
    price: "$249",
    period: "/YEAR",
    featured: true,
    perks: [
      "All Classic Benefits",
      "Private Events Access",
      "Early Access to Releases",
      "Priority Support",
    ],
  },
  {
    icon: Diamond,
    name: "Elite",
    price: "$499",
    period: "/YEAR",
    featured: false,
    perks: [
      "All Premier Benefits",
      "Exclusive Lounge Access",
      "Personal Concierge",
      "Global Event Invites",
    ],
  },
];

export function Membership() {
  return (
    <section id="membership" className="bg-background py-16">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid items-stretch gap-0 bg-secondary lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.5fr)_minmax(0,0.7fr)]">
          {/* Left copy */}
          <div className="flex flex-col justify-center p-10">
            <div className="flex items-center gap-3">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-gold">
                Become a Member
              </p>
              <span className="h-px w-10 bg-gold/50" />
            </div>
            <h2 className="mt-6 font-display text-5xl font-semibold uppercase leading-tight text-ink">
              Unlock a World
              <br />
              of Privileges
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Join Daily Stogie and elevate your cigar journey with exclusive
              benefits, curated experiences, and a global network.
            </p>
            <a
              href="#membership"
              className="mt-8 inline-flex w-fit items-center gap-6 bg-ink px-6 py-4 text-sm font-medium uppercase tracking-[0.2em] text-cream transition-opacity hover:opacity-85"
            >
              Become a Member <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Plans */}
          <div className="grid grid-cols-1 items-center gap-4 p-6 sm:grid-cols-3">
            {PLANS.map(({ icon: Icon, name, price, period, perks, featured }) => (
              <article
                key={name}
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
                  {perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2">
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
            ))}
          </div>

          {/* Image */}
          <img
            src={humidor}
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
