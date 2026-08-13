import { Button } from 'website';

export const Primary = () => <Button>Book a conversation</Button>;

export const Variants = () => (
  <div className="flex flex-wrap items-center gap-3">
    <Button variant="default">Book a conversation</Button>
    <Button variant="secondary">See how it works</Button>
    <Button variant="outline">Download the brief</Button>
    <Button variant="ghost">Not now</Button>
    <Button variant="destructive">Cancel engagement</Button>
    <Button variant="link">Read the case note</Button>
  </div>
);

export const Sizes = () => (
  <div className="flex flex-wrap items-center gap-3">
    <Button size="xs">Extra small</Button>
    <Button size="sm">Small</Button>
    <Button size="default">Default</Button>
    <Button size="lg">Large</Button>
  </div>
);

export const Disabled = () => (
  <div className="flex flex-wrap items-center gap-3">
    <Button disabled>Book a conversation</Button>
    <Button variant="outline" disabled>
      Download the brief
    </Button>
  </div>
);
