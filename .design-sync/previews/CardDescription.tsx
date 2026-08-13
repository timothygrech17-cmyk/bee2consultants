import { Card, CardContent, CardDescription, CardHeader, CardTitle } from 'website';

// CardDescription is the muted supporting line under a CardTitle.
export const InCard = () => (
  <Card className="max-w-sm">
    <CardHeader>
      <CardTitle>Fractional CMO</CardTitle>
      <CardDescription>
        Ongoing senior marketing leadership for businesses that need the function, not the
        full-time hire.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">Malta · retained, reviewed quarterly.</p>
    </CardContent>
  </Card>
);
