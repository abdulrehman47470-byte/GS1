type LogoProps = {
  tone?: "dark" | "light";
};

export function Logo({ tone = "dark" }: LogoProps) {
  const text = tone === "dark" ? "text-ink" : "text-cream";
  return (
    <div className="flex items-center gap-3">
      <img src="/logo-mark.png" alt="" aria-hidden="true" className="h-10 w-10 object-contain" />
      <div className={text}>
        <div className="font-display text-xl leading-none tracking-[0.18em] uppercase">
          Daily Stogie
        </div>
        <div className="mt-1 text-[7px] leading-none tracking-[0.28em] uppercase opacity-60">
          Premier International Cigar Community
        </div>
      </div>
    </div>
  );
}
