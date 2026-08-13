import { SiteHeader } from 'website';

// Sticky, full-width, light header. Needs a >=1024px viewport for the desktop
// nav to appear (the links are `hidden lg:flex`) — see cfg.overrides.SiteHeader.
// A little page content sits underneath so the bottom border and the header's
// relationship to the page are both visible.
export const Default = () => (
  <div className="min-h-[320px] bg-background">
    <SiteHeader />
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-wider text-blue">
        Fractional leadership
      </p>
      <h1 className="mt-4 max-w-2xl text-4xl">
        Senior marketing and delivery leadership, without the full-time hire.
      </h1>
    </div>
  </div>
);
