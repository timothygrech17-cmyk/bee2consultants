import { PillarCard } from 'website';

// Both tones, with the copy the homepage actually ships (src/app/page.tsx).

export const Navy = () => (
  <div className="max-w-xl">
    <PillarCard
      tone="navy"
      eyebrow="Pillar 01 · Marketing leadership"
      title="Fractional CMO"
      lead="Ongoing senior marketing leadership for businesses that need the function, not the full-time hire."
      bullets={[
        'A seat inside your leadership team, from day one',
        'Own the marketing roadmap, budget and hiring plan',
        'Specialists brought in exactly when the brief calls for them',
      ]}
      led="Timothy Grech"
      href="/fractional-cmo"
    />
  </div>
);

export const Blue = () => (
  <div className="max-w-xl">
    <PillarCard
      tone="blue"
      eyebrow="Pillar 02 · Delivery leadership"
      title="Project Management"
      lead="Structured delivery for the initiatives that matter. Timelines, stakeholders and accountability, in safe hands."
      bullets={[
        'PMP-certified delivery with visible weekly progress',
        'Executive stakeholders aligned and well informed',
        'A handover your team can run confidently without us',
      ]}
      led="Josef N. Grech, PMP"
      href="/project-management"
    />
  </div>
);
