import type { Metadata } from "next";
import Link from "next/link";
import { PartnerCard } from "@/components/partner-card";
import { PillarCard } from "@/components/pillar-card";
import { TrustStrip } from "@/components/trust-strip";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "BEE² — Fractional CMO and Project Management",
  description:
    "BEE² is a fractional consultancy run by Timothy Grech and Josef N. Grech. Senior marketing leadership and structured project delivery, without the full-time hire.",
};

const howWeWork = [
  {
    title: "Sit inside the room",
    description:
      "We join your team's meetings and decisions, not just the reporting calls.",
  },
  {
    title: "Own an outcome",
    description:
      "A specific goal or initiative is ours to run, with a clear measure of success.",
  },
  {
    title: "Move week by week",
    description:
      "Progress shows up on a visible weekly cadence, not a quarterly surprise.",
  },
  {
    title: "Hand it back cleanly",
    description: "When the work is done, your team can run it without us.",
  },
];

const secondaryServices = [
  {
    title: "Corporate strategy & tactical planning",
    description:
      "Turn the board deck into a quarter your team can run with confidence.",
  },
  {
    title: "Brand strategy & identity",
    description:
      "Positioning, voice and a visual system built to perform in the real world.",
  },
  {
    title: "Performance marketing",
    description: "Paid and digital execution, measured on the pipeline it creates.",
  },
  {
    title: "Content & storytelling",
    description: "Fewer, sharper pieces that carry a clear point of view.",
  },
];

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-blue">
              Fractional CMO · Project Management
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl">
              Senior partners, in your corner. We keep your plan moving.
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground">
              BEE² is a two-partner consultancy. Senior marketing leadership
              from Tim. Structured project delivery from Josef. Embedded in
              your business for as long as you need us, so strategy turns
              into shipped work.
            </p>
            <div className="mt-8 flex flex-col items-start gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ink"
              >
                Book a conversation →
              </Link>
              <p className="text-xs text-muted-foreground">
                30 minutes with a partner. Useful either way.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-mist p-6 sm:p-8">
            <p className="text-sm font-semibold text-ink">
              The partners you&apos;ll actually work with
            </p>
            <div className="mt-5 space-y-4">
              <PartnerCard
                name="Timothy Grech"
                initials="TG"
                role="Fractional CMO"
                location="Malta"
                credentials="Brand, marketing and digital execution across banking, maritime, education, professional services and catering."
                accent="blue"
              />
              <PartnerCard
                name="Josef N. Grech"
                initials="JG"
                role="Project Management, PMP"
                location="Zug, Switzerland"
                credentials="Corporate strategy, executive coaching and delivery leadership rooted in pharma and life sciences."
                accent="lemon"
              />
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue">
            What we do, first
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl">
            Two disciplines, each led by the partner who has done the work.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Strategy without follow-through stalls. Follow-through without
            strategy drifts. BEE² pairs both, each led personally by the
            partner who owns it.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <PillarCard
            tone="navy"
            eyebrow="Pillar 01 · Marketing leadership"
            title="Fractional CMO"
            lead="Ongoing senior marketing leadership for businesses that need the function, not the full-time hire."
            bullets={[
              "A seat inside your leadership team, from day one",
              "Own the marketing roadmap, budget and hiring plan",
              "Specialists brought in exactly when the brief calls for them",
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
              "PMP-certified delivery with visible weekly progress",
              "Executive stakeholders aligned and well informed",
              "A handover your team can run confidently without us",
            ]}
            led="Josef N. Grech, PMP"
            href="/project-management"
          />
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue">
              How we work
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl">
              Embedded alongside your team.
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Execution improves the moment a senior owner is accountable
              for it. That is the role we take on, in your business, on
              your terms.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {howWeWork.map((item, index) => (
              <div key={item.title}>
                <span className="font-serif text-2xl text-blue">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-blue">
              We also do this
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl">
              Extra value that folds into the two pillars.
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm font-medium text-navy hover:text-ink"
          >
            See the services hub →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {secondaryServices.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-border p-6"
            >
              <h3 className="text-lg">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}

          <div className="rounded-2xl border border-border p-6 sm:col-span-2">
            <h3 className="text-lg">Event strategy & delivery</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Complex, multi-stakeholder events run with full project
              discipline.
            </p>
            <Link
              href="/services"
              className="mt-4 inline-block text-sm font-medium text-navy hover:text-ink"
            >
              Read more →
            </Link>
          </div>
        </div>
      </section>

      <CTASection headline="Start a conversation with Tim or Josef." />
    </>
  );
}
