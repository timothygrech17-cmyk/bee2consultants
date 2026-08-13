import { PartnerCard } from 'website';

// The two real partners, exactly as src/app/page.tsx renders them.

export const Blue = () => (
  <div className="max-w-md">
    <PartnerCard
      name="Timothy Grech"
      initials="TG"
      role="Fractional CMO"
      location="Malta"
      credentials="Brand, marketing and digital execution across banking, maritime, education, professional services and catering."
      accent="blue"
    />
  </div>
);

export const Lemon = () => (
  <div className="max-w-md">
    <PartnerCard
      name="Josef N. Grech"
      initials="JG"
      role="Project Management, PMP"
      location="Zug, Switzerland"
      credentials="Corporate strategy, executive coaching and delivery leadership rooted in pharma and life sciences."
      accent="lemon"
    />
  </div>
);

export const Pair = () => (
  <div className="grid max-w-3xl gap-6 sm:grid-cols-2">
    <PartnerCard
      name="Timothy Grech"
      initials="TG"
      role="Fractional CMO"
      location="Malta"
      credentials="Brand, marketing and digital execution across banking, maritime, education, professional services and catering."
      accent="blue"
    />
    <PartnerCard
      name="Josef N. Grech"
      initials="JG"
      role="Project Management, PMP"
      location="Zug, Switzerland"
      credentials="Corporate strategy, executive coaching and delivery leadership rooted in pharma and life sciences."
      accent="lemon"
    />
  </div>
);
