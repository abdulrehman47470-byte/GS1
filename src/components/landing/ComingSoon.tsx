import { useState } from "react";
import { Apple, Play } from "lucide-react";

export function ComingSoon() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="app" className="bg-background py-16 lg:py-24">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-20">
        {/* Left — story */}
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
            Premier International Cigar Community
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold uppercase leading-[1.05] tracking-tight text-ink">
            Exquisite <span className="text-gold">Mobile Experience</span>
          </h2>

          <div className="mt-6 inline-flex items-center gap-3 border border-gold/40 px-5 py-2">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-ink">
              Coming November 2026
            </span>
          </div>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            Step into the exclusive mobile app community built for true cigar
            lovers—where every day brings curated picks, insider tips,
            member-only discussions, and a private circle of enthusiasts who
            share your passion. No noise, no crowds—just pure stogie culture,
            delivered straight to your pocket.
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            Mark your calendar and get ready to claim your spot. The best
            conversations (and the best smokes) are almost here.
          </p>
        </div>

        {/* Right — waitlist form */}
        <div className="flex flex-col items-center text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
            Be the First. Get on the Waiting List.
          </p>

          {submitted ? (
            <p className="mt-6 w-full border border-gold/40 px-6 py-5 text-base text-ink">
              Thank you — you're on the list. We'll be in touch before launch.
            </p>
          ) : (
            <form
              className="mt-6 grid w-full gap-3 text-left"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <div>
                <label htmlFor="waitlist-name" className="sr-only">
                  Name
                </label>
                <input
                  id="waitlist-name"
                  type="text"
                  required
                  placeholder="Name"
                  className="w-full border border-border bg-background px-4 py-3 text-base text-ink outline-none placeholder:text-muted-foreground focus:border-gold"
                />
              </div>
              <div>
                <label htmlFor="waitlist-phone" className="sr-only">
                  Phone
                </label>
                <input
                  id="waitlist-phone"
                  type="tel"
                  required
                  placeholder="Phone"
                  className="w-full border border-border bg-background px-4 py-3 text-base text-ink outline-none placeholder:text-muted-foreground focus:border-gold"
                />
              </div>
              <div>
                <label htmlFor="waitlist-email" className="sr-only">
                  Email
                </label>
                <input
                  id="waitlist-email"
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full border border-border bg-background px-4 py-3 text-base text-ink outline-none placeholder:text-muted-foreground focus:border-gold"
                />
              </div>
              <button
                type="submit"
                className="bg-gold px-6 py-4 text-sm font-medium uppercase tracking-[0.2em] text-ink transition-opacity hover:opacity-85"
              >
                Join the Waiting List
              </button>
            </form>
          )}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#app"
              className="flex items-center gap-3 border border-border px-5 py-3 text-ink transition-colors hover:border-gold hover:text-gold"
            >
              <Apple className="h-5 w-5" strokeWidth={1.5} />
              <span className="text-left leading-none">
                <span className="block text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Download on the
                </span>
                <span className="mt-1 block text-sm font-medium uppercase tracking-[0.12em]">
                  App Store
                </span>
              </span>
            </a>
            <a
              href="#app"
              className="flex items-center gap-3 border border-border px-5 py-3 text-ink transition-colors hover:border-gold hover:text-gold"
            >
              <Play className="h-4 w-4 fill-current" strokeWidth={1.5} />
              <span className="text-left leading-none">
                <span className="block text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Get it on
                </span>
                <span className="mt-1 block text-sm font-medium uppercase tracking-[0.12em]">
                  Google Play
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
