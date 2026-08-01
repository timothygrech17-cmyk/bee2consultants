import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { PartnerCard } from "@/components/partner-card";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Fractional CMO in Malta and Europe — BEE²",
  description:
    "Fractional CMO leadership by Timothy Grech. One experienced hand owning your roadmap, budget and team, from strategy through delivery.",
};

const checklist = [
  "Marketing strategy tied to commercial goals",
  "Team structure, hiring plan and coaching",
  "Budget ownership and vendor management",
  "Brand, positioning and go-to-market",
  "Performance marketing oversight",
  "Board-level marketing reporting",
];

const audiences = [
  {
    title: "Founders and CEOs",
    description: "Hand marketing to someone who owns it, and get your week back.",
  },
  {
    title: "Boards and investors",
    description:
      "Give the portfolio company real marketing muscle ahead of the next raise.",
  },
  {
    title: "Marketing teams",
    description:
      "Talented teams get a lead who sharpens the work and raises the bar.",
  },
];

export default function FractionalCmoPage() {
  return (
    <>
      <section className="border-b border-border bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-blue">
                Fractional CMO · Led by Timothy Grech
              </p>
              <h1 className="mt-4 text-4xl sm:text-5xl">
                Marketing leadership, owned end to end.
              </h1>
              <p className="mt-6 max-w-xl text-base text-muted-foreground">
                It starts with one experienced hand at the top, at the pace
                and cost that fits. Tim runs marketing as if it were his own
                function: strategy, team, budget, delivery.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center rounded-full bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ink"
              >
                Book a conversation →
              </Link>
            </div>

            <div>
              <PartnerCard
                name="Timothy Grech"
                initials="TG"
                role="Fractional CMO"
                location="Malta"
                credentials="Brand, marketing and digital execution across banking, maritime, education, professional services and catering."
                accent="blue"
              />
              <p className="mt-4 text-sm text-muted-foreground">
                Tim leads every fractional CMO engagement personally, from
                first call to final handover.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue">
            What you get
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl">
            So what does that ownership look like week to week?
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Most fractional CMO engagements run 1–3 days a week, over 3–12
            months. Enough time inside the business to own outcomes, not
            just advise on them.
          </p>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-5 sm:grid-cols-2">
          {checklist.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <Check className="mt-0.5 size-5 shrink-0 text-blue" />
              <span className="text-base text-ink">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-lemon">
            Who this is for
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl text-white sm:text-4xl">
            And it fits wherever the gap sits today.
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {audiences.map((audience) => (
              <div
                key={audience.title}
                className="rounded-2xl border border-white/10 p-6"
              >
                <h3 className="text-lg text-white">{audience.title}</h3>
                <p className="mt-2 text-sm text-white/70">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection headline="Ready to put that seat to work in your business?" />
    </>
  );
}
