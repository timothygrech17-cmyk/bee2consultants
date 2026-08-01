import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "The partners — Timothy Grech and Josef N. Grech — BEE²",
  description:
    "BEE² is Timothy Grech and Josef N. Grech. Two partners, two disciplines. Fractional CMO and PMP-certified project management, delivered personally.",
};

type Accent = "blue" | "lemon";

interface Partner {
  name: string;
  initials: string;
  tagline: string;
  location: string;
  accent: Accent;
  paragraphs: string[];
  tags: string[];
  linkedin: string;
}

const partners: Partner[] = [
  {
    name: "Timothy Grech",
    initials: "TG",
    tagline: "Fractional CMO · Brand, marketing, digital",
    location: "Malta",
    accent: "blue",
    paragraphs: [
      "Tim leads BEE²'s fractional CMO practice. Two decades building and running marketing functions that had to deliver.",
      "His work has spanned banking, maritime, education, professional services and catering. The through-line: senior marketing that sits inside the leadership team, owns a number and sees it through.",
    ],
    tags: [
      "Fractional CMO practice lead",
      "Brand strategy and identity",
      "Performance marketing oversight",
      "Content and storytelling",
    ],
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Josef N. Grech",
    initials: "JG",
    tagline: "Project Management, PMP · Strategy, coaching",
    location: "Zug, Switzerland",
    accent: "lemon",
    paragraphs: [
      "Josef leads BEE²'s project management practice. PMP-certified, with a career shaped by pharma and life sciences, where delivery has to be right.",
      "He runs corporate strategy and coaching alongside delivery leadership. Executives bring him in when an initiative needs a steady hand and a clear path to the date.",
    ],
    tags: [
      "PMP-certified",
      "Corporate strategy and planning",
      "Executive coaching",
      "Event strategy and delivery",
    ],
    linkedin: "https://www.linkedin.com",
  },
];

const ringByAccent: Record<Accent, string> = {
  blue: "ring-blue",
  lemon: "ring-lemon",
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-blue">
          The partners
        </p>
        <h1 className="mt-4 text-4xl sm:text-5xl">
          Two partners. Both in the room with you.
        </h1>
        <p className="mt-6 text-base text-muted-foreground">
          BEE² is Timothy Grech and Josef N. Grech. Every engagement is led
          by one of them personally. That is the value of the model.
        </p>
      </section>

      {partners.map((partner, index) => (
        <section
          key={partner.name}
          className={cn(index % 2 === 1 && "bg-mist")}
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:items-start lg:gap-16">
              <div>
                <div
                  className={cn(
                    "flex aspect-square w-full max-w-[280px] items-center justify-center rounded-3xl bg-navy text-5xl font-semibold text-white ring-4",
                    ringByAccent[partner.accent]
                  )}
                >
                  {partner.initials}
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  Placeholder — real headshot to follow
                </p>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl">{partner.name}</h2>
                <p className="mt-2 text-sm font-medium text-ink">
                  {partner.tagline}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {partner.location}
                </p>

                <div className="mt-6 space-y-4">
                  {partner.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {partner.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-medium text-ink"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={partner.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-ink"
                >
                  <ExternalLink className="size-4" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTASection
        headline="Meet the partner your work needs."
        sub="A 30-minute call goes straight to Tim or Josef, matched to the discipline you need."
      />
    </>
  );
}
