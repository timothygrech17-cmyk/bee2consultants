import type { Metadata } from "next";
import { Calendar, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a conversation with BEE² — Tim or Josef",
  description:
    "Pick a 30-minute slot with Timothy Grech. A working conversation about the goal you want to hit, and a clear next step to reach it.",
};

const CALENDLY_URL = "https://calendly.com/timothy-beesquared/30min";

const infoRows = [
  {
    icon: Calendar,
    label: "30 minutes on Calendly",
    href: CALENDLY_URL,
    external: true,
  },
  {
    icon: Mail,
    label: "Prefer email first?",
    value: "hello@bee2consulting.com",
    href: "mailto:hello@bee2consulting.com",
  },
  {
    icon: MapPin,
    label: "Where we sit",
    value: "Malta and Zug, Switzerland. Engagements across Europe.",
  },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-blue">
            Book a call
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl">
            30 minutes, straight to a partner.
          </h1>
          <p className="mt-6 max-w-md text-base text-muted-foreground">
            Bring the outcome you want next. We will show you whether a
            fractional CMO seat, a project management seat or something
            lighter is the best route there.
          </p>

          <div className="mt-10 space-y-6">
            {infoRows.map((row) => (
              <div key={row.label} className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-mist text-navy">
                  <row.icon className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">{row.label}</p>
                  {row.href ? (
                    <a
                      href={row.href}
                      target={row.external ? "_blank" : undefined}
                      rel={row.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-muted-foreground hover:text-navy"
                    >
                      {row.value ?? row.href}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{row.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ink lg:hidden"
          >
            Open Calendly
          </a>
        </div>

        <div className="hidden lg:block">
          <iframe
            src={`${CALENDLY_URL}?hide_gdpr_banner=1&primary_color=001A5D`}
            title="Book a call with BEE² on Calendly"
            width="100%"
            height="720"
            loading="lazy"
            className="rounded-2xl border border-border"
          />
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Calendar not loading?{" "}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-navy hover:text-ink"
            >
              Open it in a new tab →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
