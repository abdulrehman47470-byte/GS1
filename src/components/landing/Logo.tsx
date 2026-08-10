import content from "@/content/site-content.json";

type LogoProps = {
  tone?: "dark" | "light";
  showTagline?: boolean;
};

export function Logo({ tone = "dark", showTagline = true }: LogoProps) {
  const text = tone === "dark" ? "text-ink" : "text-cream";
  return (
    <div className="flex items-center gap-3">
      <img src="/logo-mark.png" alt="" aria-hidden="true" className="h-10 w-10 object-contain" />
      <div className={text}>
        <div className="whitespace-nowrap font-display text-2xl font-semibold leading-none tracking-[0.18em] uppercase">
          {content.logo.name}
        </div>
        {showTagline && (
          <div className="mt-1 text-xs font-medium leading-none tracking-[0.28em] uppercase opacity-60">
            {content.logo.tagline}
          </div>
        )}
      </div>
    </div>
  );
}
