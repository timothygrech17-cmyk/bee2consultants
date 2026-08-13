import { CTASection } from 'website';

// Full-bleed band — one export per row (cardMode: column) so it is never
// squeezed into a grid cell.

export const Default = () => <CTASection headline="Start a conversation with Tim or Josef." />;

export const CustomCopy = () => (
  <CTASection
    headline="Ready to bring marketing leadership in-house, without the hire?"
    sub="Tell us what needs to move in the next quarter. A partner replies personally."
    ctaLabel="Book 30 minutes"
  />
);
