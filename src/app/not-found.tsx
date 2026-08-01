import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-4 py-32 text-center sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl">This page moved or never existed.</h1>
      <div className="mt-8 flex items-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center rounded-full bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ink"
        >
          Back home
        </Link>
        <Link
          href="/contact"
          className="text-sm font-medium text-navy hover:text-ink"
        >
          Book a call →
        </Link>
      </div>
    </section>
  );
}
