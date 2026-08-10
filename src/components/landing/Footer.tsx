import { Facebook, Instagram, Youtube } from "lucide-react";
import { Logo } from "./Logo";

const COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Our Mission", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "All Members", href: "#community" },
      { label: "Stories", href: "#" },
      { label: "Discussions", href: "#" },
      { label: "Events", href: "#events" },
      { label: "Ambassadors", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Community Guidelines", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Cigar Journal", href: "#journal" },
      { label: "Cigar Guide", href: "#" },
      { label: "Pairing Guide", href: "#" },
      { label: "Humidor Guide", href: "#" },
      { label: "Industry News", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-background pb-10 pt-12">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid gap-10 border-t border-border pt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)_minmax(0,1fr)]">
          <div>
            <Logo />
            <div className="mt-6 flex items-center gap-4 text-muted-foreground">
              <a href="#contact" aria-label="Instagram" className="transition-colors hover:text-gold">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#contact" aria-label="Facebook" className="transition-colors hover:text-gold">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#contact" aria-label="X" className="transition-colors hover:text-gold">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M17.5 3h3l-6.6 7.5L21.8 21h-6l-4.7-6-5.4 6H2.7l7-8L2.2 3h6.2l4.2 5.6L17.5 3Zm-1.1 16h1.7L7.7 4.8H5.9L16.4 19Z" />
                </svg>
              </a>
              <a href="#contact" aria-label="YouTube" className="transition-colors hover:text-gold">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {COLUMNS.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-gold"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border border-border bg-secondary p-6">
            <p className="font-display text-xl font-semibold uppercase tracking-[0.18em] text-gold">
              Join the Club
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Unlock a world of premium experiences and connections.
            </p>
            <a
              href="#membership"
              className="mt-5 inline-block w-full bg-ink px-6 py-3 text-center text-sm font-medium uppercase tracking-[0.2em] text-cream transition-opacity hover:opacity-85"
            >
              Join Now
            </a>
          </div>
        </div>

        <p className="mt-10 border-t border-border pt-6 text-center text-xs tracking-wide text-muted-foreground">
          © 2026 Daily Stogie. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
