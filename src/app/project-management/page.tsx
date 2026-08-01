import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { PartnerCard } from "@/components/partner-card";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Project Management, PMP-certified — BEE²",
  description:
    "Structured project delivery led by Josef N. Grech, PMP. Timelines, stakeholders and accountability in safe hands, from kickoff to clean handover.",
};

const checklist = [
  "Kickoff, charter and scope alignment",
  "Timeline and milestone architecture",
  "Executive stakeholder management",
  "Risk, issue and dependency tracking",
  "Cross-functional coordination",
  "Clean handover to the internal owner",
];

const fits = [
  {
    title: "Cross-functional launches",
    description: "Multiple teams, one deadline, one owner. Josef takes the seat.",
  },
  {
    title: "Transformation programmes",
    description:
      "Restructures, systems migrations and operating-model shifts, guided at exec level.",
  },
  {
    title: "Regulated delivery",
    description: "Pharma, life sciences and finance projects delivered with certainty.",
  },
];

export default function ProjectManagementPage() {
  return (
    <>
      <section className="border-b border-border bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-blue">
                Project Management · Led by Josef N. Grech, PMP
              </p>
              <h1 className="mt-4 text-4xl sm:text-5xl">
                Delivery leadership that gets the initiative landed.
              </h1>
              <p className="mt-6 max-w-xl text-base text-muted-foreground">
                A senior project lead who holds the plan, the stakeholders
                and the calendar with you. Josef brings the rigour that
                pharma and life sciences delivery demands.
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
                name="Josef N. Grech"
                initials="JG"
                role="Project Management, PMP"
                location="Zug, Switzerland"
                credentials="Corporate strategy, executive coaching and delivery leadership rooted in pharma and life sciences."
                accent="lemon"
              />
              <p className="mt-4 text-sm text-muted-foreground">
                Josef leads every project engagement personally. PMP-certified,
                with regulated-industry rigour.
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
            Delivery leadership you can feel every week.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            One senior lead is accountable for the plan, the risks and the
            stakeholders, so nothing falls through the gaps between teams.
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
            Where this fits
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl text-white sm:text-4xl">
            The projects where getting it right really pays off.
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {fits.map((fit) => (
              <div
                key={fit.title}
                className="rounded-2xl border border-white/10 p-6"
              >
                <h3 className="text-lg text-white">{fit.title}</h3>
                <p className="mt-2 text-sm text-white/70">{fit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection headline="Let us help your next initiative land." />
    </>
  );
}
