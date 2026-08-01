import Link from "next/link";
import { Logo } from "@/components/logo";

const serviceLinks = [
  { href: "/fractional-cmo", label: "Fractional CMO" },
  { href: "/project-management", label: "Project Management" },
  { href: "/services", label: "Corporate strategy" },
  { href: "/services", label: "Brand strategy" },
  { href: "/services", label: "Performance marketing" },
  { href: "/services", label: "Content & storytelling" },
  { href: "/services", label: "Event delivery" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <div className="inline-flex rounded-2xl bg-white px-5 py-3">
              <Logo className="h-8" />
            </div>
            <p className="mt-5 max-w-sm text-sm text-white/70">
              BEE² is a two-partner fractional consultancy: senior marketing
              leadership and structured project delivery, without the
              full-time hire.
            </p>
            <p className="mt-3 text-sm text-white/70">
              Timothy Grech — Malta · Josef N. Grech — Zug, Switzerland
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((link, i) => (
                <li key={`${link.label}-${i}`}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Book a conversation
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Meet the partners
                </Link>
              </li>
              <li>
                <a
                  href="https://calendly.com/timothy-beesquared/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Calendly
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@bee2consulting.com"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  hello@bee2consulting.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-8 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} BEE² Consulting. Business Excellence & Execution, squared.</p>
          <p>bee2consulting.com</p>
        </div>
      </div>
    </footer>
  );
}
