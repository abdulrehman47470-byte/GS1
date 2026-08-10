import newsletterBg from "@/assets/newsletter.jpg";

export function Newsletter() {
  return (
    <section className="bg-background py-12">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid items-center gap-0 bg-secondary lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="p-10">
            <h2 className="font-display text-xl font-semibold uppercase tracking-[0.1em] text-ink">
              Stay in the Loop
            </h2>
            <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                Join our newsletter and never miss exclusive releases, events, and
                stories.
              </p>
              <form
                className="flex w-full max-w-sm"
                onSubmit={(event) => event.preventDefault()}
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full border border-border bg-background px-4 py-3 text-base text-ink outline-none placeholder:text-muted-foreground focus:border-gold"
                />
                <button
                  type="submit"
                  className="shrink-0 bg-ink px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-cream transition-opacity hover:opacity-85"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <img
            src={newsletterBg}
            alt="Whiskey glass resting on a leather journal"
            loading="lazy"
            width={1400}
            height={512}
            className="h-full min-h-[160px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
