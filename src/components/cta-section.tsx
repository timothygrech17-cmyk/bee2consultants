import Link from "next/link";

interface CTASectionProps {
  headline: string;
  sub?: string;
  ctaLabel?: string;
}

export function CTASection({
  headline,
  sub = "Bring the outcome you want next. A partner replies personally, not a sales team.",
  ctaLabel = "Book a conversation",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="pointer-events-none absolute inset-0 bg-brand-gradient opacity-20" />
      <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl text-white sm:text-4xl">{headline}</h2>
        <p className="mt-4 text-base text-white/80">{sub}</p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center rounded-full bg-lemon px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-lemon/90"
        >
          {ctaLabel}
        </Link>
        <p className="mt-4 text-xs text-white/60">
          30 minutes · Calendly · with Timothy Grech
        </p>
      </div>
    </section>
  );
}
