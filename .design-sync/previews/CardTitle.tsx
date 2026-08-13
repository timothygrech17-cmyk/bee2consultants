import { Card, CardContent, CardDescription, CardHeader, CardTitle } from 'website';

// CardTitle carries the Fraunces heading face at card scale.

export const InCard = () => (
  <Card className="max-w-sm">
    <CardHeader>
      <CardTitle>Engagement summary</CardTitle>
      <CardDescription>Retained · reviewed quarterly</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">Three of five milestones cleared this quarter.</p>
    </CardContent>
  </Card>
);

// data-size=sm on the Card steps the title down with it.
export const CompactCard = () => (
  <Card size="sm" className="max-w-xs">
    <CardHeader>
      <CardTitle>Weekly progress</CardTitle>
      <CardDescription>Compact density.</CardDescription>
    </CardHeader>
  </Card>
);
