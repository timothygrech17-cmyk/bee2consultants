import { Card, CardContent, CardDescription, CardHeader, CardTitle } from 'website';

// CardContent supplies the card's horizontal padding for body content.

export const InCard = () => (
  <Card className="max-w-sm">
    <CardHeader>
      <CardTitle>Project Management</CardTitle>
      <CardDescription>Structured delivery for the initiatives that matter.</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">
        Timelines, stakeholders and accountability in safe hands, with a handover your team can
        run confidently without us.
      </p>
    </CardContent>
  </Card>
);

// Body content is free-form — here a small definition list.
export const WithList = () => (
  <Card className="max-w-sm">
    <CardHeader>
      <CardTitle>Engagement</CardTitle>
    </CardHeader>
    <CardContent>
      <dl className="grid grid-cols-2 gap-y-2">
        <dt className="text-muted-foreground">Partner</dt>
        <dd className="text-ink">Timothy Grech</dd>
        <dt className="text-muted-foreground">Location</dt>
        <dd className="text-ink">Malta</dd>
        <dt className="text-muted-foreground">Cadence</dt>
        <dd className="text-ink">Quarterly review</dd>
      </dl>
    </CardContent>
  </Card>
);
