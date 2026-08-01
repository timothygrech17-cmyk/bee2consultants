const sectors = [
  "Banking",
  "Maritime",
  "Pharma",
  "Life sciences",
  "Education",
  "Professional services",
  "Catering",
];

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-mist">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-blue">
              Where we&apos;ve worked
            </p>
            <p className="mt-2 text-lg font-medium text-ink">
              Two careers of trusted, senior-stakeholder work.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5 lg:max-w-2xl lg:justify-end">
            {sectors.map((sector) => (
              <span
                key={sector}
                className="rounded-full border border-border bg-background px-4 py-1.5 text-sm text-ink"
              >
                {sector}
              </span>
            ))}
            <span className="rounded-full border border-dashed border-border px-4 py-1.5 text-sm text-muted-foreground">
              client logos to follow
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
