import Image from "next/image";
import { cn } from "@/lib/utils";

type Variant = "navy" | "white";

const sources: Record<Variant, string> = {
  navy: "/logo-navy.png",
  white: "/logo-white.png",
};

export function Logo({
  className,
  variant = "navy",
}: {
  className?: string;
  variant?: Variant;
}) {
  return (
    <Image
      src={sources[variant]}
      alt="BEE²"
      width={504}
      height={143}
      priority
      className={cn("h-7 w-auto", className)}
    />
  );
}
