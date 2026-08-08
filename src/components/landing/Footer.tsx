import { Facebook, Instagram, Youtube } from "lucide-react";
import { Logo } from "./Logo";

const COLUMNS = [
  {
    title: "Company",
    links: ["About Us", "Our Mission", "Careers", "Press", "Contact Us"],
  },
  {
    title: "Community",
    links: ["All Members", "Stories", "Discussions", "Events", "Ambassadors"],
  },
  {
    title: "Support",
    links: [
      "Help Center",
      "FAQ",
      "Terms of Service",
      "Privacy Policy",
      "Community Guidelines",
    ],
  },
  {
    title: "Resources",
    links: [
      "Cigar Journal",
      "Cigar Guide",
      "Pairing Guide",
      "Humidor Guide",
      "Industry News",
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
                <h3 className="text-[10px] uppercase tracking-[0.22em] text-gold">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#contact"
                        className="text-[11px] text-muted-foreground transition-colors hover:text-gold"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border border-border bg-secondary p-6">
            <p className="font-display text-base uppercase tracking-[0.18em] text-gold">
              Join the Club
            </p>
            <p className="mt-3 text-[10px] leading-relaxed text-muted-foreground">
              Unlock a world of premium experiences and connections.
            </p>
            <a
              href="#membership"
              className="mt-5 inline-block w-full bg-ink px-6 py-3 text-center text-[10px] uppercase tracking-[0.2em] text-cream transition-opacity hover:opacity-85"
            >
              Join Now
            </a>
          </div>
        </div>

        <p className="mt-10 border-t border-border pt-6 text-center text-[10px] tracking-wide text-muted-foreground">
          © 2026 Daily Stogie. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
