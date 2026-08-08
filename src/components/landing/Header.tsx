import { Menu } from "lucide-react";
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
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-gold"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#membership"
            className="hidden bg-ink px-6 py-3 text-[10px] uppercase tracking-[0.2em] text-cream transition-opacity hover:opacity-85 sm:inline-block"
          >
            Join the Club
          </a>
          <button
            type="button"
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink transition-colors hover:border-gold hover:text-gold"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
