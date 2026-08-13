import { Card, CardContent, CardDescription, CardHeader, CardTitle } from 'website';

// CardHeader is a layout slot — it only renders truthfully inside a Card.
// It lays out title/description (and CardAction) on a two-column grid.

export const InCard = () => (
  <Card className="max-w-sm">
    <CardHeader>
      <CardTitle>Fractional CMO</CardTitle>
      <CardDescription>Led by Timothy Grech · Malta</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">
        Ongoing senior marketing leadership for businesses that need the function, not the
        full-time hire.
      </p>
    </CardContent>
  </Card>
);

// With a border it takes the divider padding (the [.border-b] rule).
export const Bordered = () => (
  <Card className="max-w-sm">
    <CardHeader className="border-b">
      <CardTitle>Project Management</CardTitle>
      <CardDescription>Led by Josef N. Grech, PMP</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">PMP-certified delivery with visible weekly progress.</p>
    </CardContent>
  </Card>
);
