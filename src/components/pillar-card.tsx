import Link from "next/link";
import { cn } from "@/lib/utils";

type Tone = "navy" | "blue";

interface PillarCardProps {
  eyebrow: string;
  title: string;
  lead: string;
  bullets: string[];
  led: string;
  href: string;
  tone: Tone;
}

export function PillarCard({
  eyebrow,
  title,
  lead,
  bullets,
  led,
  href,
  tone,
}: PillarCardProps) {
  const isNavy = tone === "navy";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border p-8 sm:p-10",
        isNavy
          ? "border-navy-deep bg-navy text-white"
          : "border-border bg-mist text-ink"
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute -right-16 -top-16 size-56 rounded-full blur-3xl",
          isNavy ? "bg-blue/40" : "bg-lemon/40"
        )}
      />

      <div className="relative">
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-wider",
            isNavy ? "text-lemon" : "text-blue"
          )}
        >
          {eyebrow}
        </p>
        <h3 className="mt-4 text-2xl sm:text-3xl">{title}</h3>
        <p
          className={cn(
            "mt-4 text-base",
            isNavy ? "text-white/80" : "text-muted-foreground"
          )}
        >
          {lead}
        </p>

        <ul className="mt-6 space-y-3">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 text-sm">
              <span
                className={cn(
                  "mt-1.5 size-1.5 shrink-0 rounded-full",
                  isNavy ? "bg-lemon" : "bg-blue"
                )}
              />
              <span className={isNavy ? "text-white/90" : "text-ink"}>
                {bullet}
              </span>
            </li>
          ))}
        </ul>

        <p
          className={cn(
            "mt-6 text-xs font-medium uppercase tracking-wider",
            isNavy ? "text-white/60" : "text-muted-foreground"
          )}
        >
          Led by {led}
        </p>

        <Link
          href={href}
          className={cn(
            "mt-6 inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
            isNavy
              ? "bg-white text-navy hover:bg-mist"
              : "bg-navy text-white hover:bg-ink"
          )}
        >
          See how it works →
        </Link>
      </div>
    </div>
  );
}
