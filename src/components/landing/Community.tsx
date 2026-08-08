import { Lock } from "lucide-react";
import c1 from "@/assets/community-1.jpg";
import c2 from "@/assets/community-2.jpg";
import c3 from "@/assets/community-3.jpg";
import c4 from "@/assets/community-4.jpg";
import c5 from "@/assets/community-5.jpg";

const PHOTOS = [
  { src: c1, alt: "Two members sharing cigars and conversation" },
  { src: c2, alt: "Close-up of premium cigars with gold bands" },
  { src: c3, alt: "Members gathered at a private lounge event" },
  { src: c4, alt: "City skyline at night from a members lounge" },
  { src: c5, alt: "Hand holding a lit cigar with rising smoke" },
];

export function Community() {
  return (
    <section id="community" className="bg-background py-16">
      <div className="mx-auto max-w-[1280px] px-6">
        <p className="text-center text-[10px] uppercase tracking-[0.28em] text-gold">
          The Heart of Daily Stogie
        </p>
        <h2 className="mt-4 text-center font-display text-4xl uppercase tracking-wide text-ink sm:text-5xl">
          A Global Community
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {PHOTOS.map(({ src, alt }) => (
            <figure key={alt} className="group relative overflow-hidden">
              <img
                src={src}
                alt={alt}
                loading="lazy"
                width={700}
                height={560}
                className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-background/85">
                <Lock className="h-3 w-3 text-ink" />
              </span>
            </figure>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="#community"
            className="border border-border bg-background px-8 py-4 text-[10px] uppercase tracking-[0.2em] text-ink transition-colors hover:border-gold hover:text-gold"
          >
            Discover Our Community
          </a>
        </div>
      </div>
    </section>
  );
}
