import { Logo } from 'website';

export const Navy = () => (
  <div className="p-4">
    <Logo variant="navy" />
  </div>
);

export const White = () => (
  <div className="rounded-xl bg-navy p-6">
    <Logo variant="white" />
  </div>
);

// className overrides the default h-7; width follows automatically.
export const Sizes = () => (
  <div className="flex items-end gap-8 p-4">
    <Logo variant="navy" className="h-5" />
    <Logo variant="navy" className="h-7" />
    <Logo variant="navy" className="h-10" />
  </div>
);
