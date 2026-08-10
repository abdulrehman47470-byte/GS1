import { ArrowRight } from "lucide-react";
import j1 from "@/assets/journal-1.jpg";
import j2 from "@/assets/journal-2.jpg";
import j3 from "@/assets/journal-3.jpg";
import j4 from "@/assets/journal-4.jpg";

const ARTICLES = [
  {
    category: "Cigar Guide",
    title: "How to Build the Perfect Cigar Collection",
    date: "May 2, 2026",
    read: "5 min read",
    img: j1,
  },
  {
    category: "Lifestyle",
    title: "The Art of Pairing Cigars with Fine Whiskey",
    date: "April 28, 2026",
    read: "6 min read",
    img: j2,
  },
  {
    category: "Behind the Leaf",
    title: "Inside the Craft: What Makes a Cigar Truly Exceptional",
    date: "April 20, 2026",
    read: "7 min read",
    img: j3,
  },
  {
    category: "Travel",
    title: "Top Cigar Destinations Around the World",
    date: "April 15, 2026",
    read: "6 min read",
    img: j4,
  },
];

export function Journal() {
  return (
    <section id="journal" className="bg-background py-12">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="border-t border-border pt-6">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            From Our Journal
          </p>
          <div className="mt-3 flex items-end justify-between">
            <h2 className="font-display text-2xl font-semibold uppercase tracking-wide text-ink">
              Insights &amp; Stories
            </h2>
            <a
              href="#journal"
              className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-gold"
            >
              View All Articles <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ARTICLES.map((article) => (
            <article key={article.title} className="group border border-border bg-background">
              <div className="overflow-hidden">
                <img
                  src={article.img}
                  alt={article.title}
                  loading="lazy"
                  width={760}
                  height={512}
                  className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                  {article.category}
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-ink">
                  {article.title}
                </h3>
                <p className="mt-4 text-xs tracking-wide text-muted-foreground">
                  {article.date} &nbsp;·&nbsp; {article.read}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
