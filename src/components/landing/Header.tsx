import { Logo } from "./Logo";

const NAV_LINKS = [
  "Home",
  "About",
  "Community",
  "Experiences",
  "Events",
  "Journal",
  "Contact",
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between gap-8 px-6">
        <div className="shrink-0">
          <Logo showTagline={false} />
        </div>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="whitespace-nowrap text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-gold"
            >
              {link}
            </a>
          ))}
        </nav>

        <a
          href="#membership"
          className="hidden shrink-0 whitespace-nowrap rounded-[14px] bg-ink px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-cream transition-opacity hover:opacity-85 xl:inline-block"
        >
          Join the Club
        </a>
      </div>
    </header>
  );
}
