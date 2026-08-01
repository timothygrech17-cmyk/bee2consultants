import { cn } from "@/lib/utils";

type Accent = "blue" | "lemon";

interface PartnerCardProps {
  name: string;
  initials: string;
  role: string;
  location: string;
  credentials: string;
  accent: Accent;
}

const ringByAccent: Record<Accent, string> = {
  blue: "ring-blue",
  lemon: "ring-lemon",
};

const badgeByAccent: Record<Accent, string> = {
  blue: "bg-blue/10 text-blue",
  lemon: "bg-lemon/20 text-ink",
};

export function PartnerCard({
  name,
  initials,
  role,
  location,
  credentials,
  accent,
}: PartnerCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-background p-6">
      <div className="flex items-center gap-4">
        <div
          className={cn(
            "flex size-14 shrink-0 items-center justify-center rounded-full bg-mist text-lg font-semibold text-navy ring-2",
            ringByAccent[accent]
          )}
        >
          {initials}
        </div>
        <div>
          <p className="font-serif text-lg font-medium text-ink">{name}</p>
          <span
            className={cn(
              "mt-1 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
              badgeByAccent[accent]
            )}
          >
            {role}
          </span>
        </div>
      </div>
      <p className="mt-4 text-sm font-medium text-ink">{location}</p>
      <p className="mt-1 text-sm text-muted-foreground">{credentials}</p>
    </div>
  );
}
