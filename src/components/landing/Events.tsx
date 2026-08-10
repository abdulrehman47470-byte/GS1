import { ArrowRight, MapPin, User } from "lucide-react";
import ny from "@/assets/event-ny.jpg";
import london from "@/assets/event-london.jpg";
import dubai from "@/assets/event-dubai.jpg";
import miami from "@/assets/event-miami.jpg";

const EVENTS = [
  { month: "MAY", day: "24", title: "Cigar Dinner", city: "New York", place: "New York, USA", img: ny },
  { month: "JUN", day: "12", title: "Summer Smoke", city: "London", place: "London, UK", img: london },
  { month: "JUL", day: "08", title: "Private Lounge Night", city: "Dubai", place: "Dubai, UAE", img: dubai },
  { month: "AUG", day: "21", title: "Aficionado Meetup", city: "Miami", place: "Miami, USA", img: miami },
];

export function Events() {
  return (
    <section id="events" className="bg-background py-10">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex items-end justify-between border-t border-border pt-6">
          <h2 className="text-2xl font-semibold uppercase tracking-[0.1em] text-ink">
            Upcoming Events
          </h2>
          <a
            href="#events"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-gold"
          >
            View All Events <ArrowRight className="h-3 w-3" />
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {EVENTS.map((event) => (
            <article key={event.title} className="group relative overflow-hidden">
              <img
                src={event.img}
                alt={`${event.title} in ${event.city}`}
                loading="lazy"
                width={700}
                height={560}
                className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />

              <div className="absolute left-3 top-3 bg-background px-3 py-2 text-center">
                <div className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  {event.month}
                </div>
                <div className="font-display text-xl font-semibold leading-none text-ink">{event.day}</div>
              </div>

              <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-background/85">
                <User className="h-3 w-3 text-ink" />
              </span>

              <div className="absolute inset-x-0 bottom-0 p-4 text-cream">
                <p className="text-sm font-medium uppercase tracking-[0.2em]">{event.title}</p>
                <p className="mt-1 font-display text-lg font-semibold leading-tight">{event.city}</p>
                <p className="mt-2 flex items-center gap-1 text-xs tracking-wide text-gold">
                  <MapPin className="h-3 w-3" /> {event.place}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
