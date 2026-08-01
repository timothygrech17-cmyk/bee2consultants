import type { Metadata } from "next";
import Link from "next/link";
import { PillarCard } from "@/components/pillar-card";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Services — Fractional CMO, Project Management and more — BEE²",
  description:
    "Two pillars, five adjacent services. Fractional CMO and Project Management lead the offer, with strategy, brand, performance, content and events beneath.",
};

const adjacentServices = [
  {
    title: "Corporate strategy & tactical planning",
    led: "Josef",
    lead: "Turn the board deck into a quarter your team can run with confidence.",
    detail:
      "Facilitated strategy work that ends in a live operating plan, with owners and dates attached.",
  },
  {
    title: "Brand strategy & identity",
    led: "Tim",
    lead: "Positioning, voice and a visual system built to perform in the real world.",
    detail:
      "Brand work grounded in commercial reality and rolled out into sales, product and marketing so it shows up everywhere.",
  },
  {
    title: "Performance marketing",
    led: "Tim",
    lead: "Paid and digital execution, measured on the pipeline it creates.",
    detail:
      "Search, social and lifecycle campaigns run by Tim's network of specialists, under a single senior brief.",
  },
  {
    title: "Content & storytelling",
    led: "Tim",
    lead: "Fewer, sharper pieces that carry a clear point of view.",
    detail:
      "Editorial thinking applied to marketing: what to say, why and how often, written for people first.",
  },
  {
    title: "Event strategy & delivery",
    led: "Josef",
    lead: "Complex, multi-stakeholder events run with full project discipline.",
    detail:
      "Concept, timeline, vendors and on-the-day execution held by Josef's project discipline.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-blue">
          Services
        </p>
        <h1 className="mt-4 text-4xl sm:text-5xl">
          Two pillars we lead with. Five services that make them stronger.
        </h1>
        <p className="mt-6 text-base text-muted-foreground">
          Most engagements start with a fractional CMO or project management
          seat. The five services below extend that seat when the brief
          calls for more.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <PillarCard
            tone="navy"
            eyebrow="Pillar 01 · Marketing leadership"
            title="Fractional CMO"
            lead="Ongoing senior marketing leadership for businesses that need the function, not the full-time hire."
            bullets={[
              "Marketing strategy and roadmap",
              "Team, budget and vendors",
              "Board-level reporting",
            ]}
            led="Timothy Grech"
            href="/fractional-cmo"
          />
          <PillarCard
            tone="blue"
            eyebrow="Pillar 02 · Delivery leadership"
            title="Project Management"
            lead="Structured delivery for the initiatives that matter. Timelines, stakeholders and accountability, in safe hands."
            bullets={[
              "PMP-certified delivery",
              "Executive stakeholder management",
              "Clean, documented handover",
            ]}
            led="Josef N. Grech, PMP"
            href="/project-management"
          />
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue">
            Adjacent services
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl">More ways we add value.</h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {adjacentServices.map((service) => (
              <div
                key={service.title}
                className="flex flex-col rounded-2xl border border-border bg-background p-6"
              >
                <span className="inline-flex w-fit items-center rounded-full bg-mist px-2.5 py-0.5 text-xs font-medium text-ink">
                  Led by {service.led}
                </span>
                <h3 className="mt-4 text-lg">{service.title}</h3>
                <p className="mt-2 text-sm text-ink">{service.lead}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {service.detail}
                </p>
                <Link
                  href="/contact"
                  className="mt-4 text-sm font-medium text-navy hover:text-ink"
                >
                  Talk it through →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection headline="Not sure which service fits? Start with a call." />
    </>
  );
}
