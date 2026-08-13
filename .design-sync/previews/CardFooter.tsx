import { Button, Card, CardContent, CardFooter, CardHeader, CardTitle } from 'website';

// CardFooter sits flush to the card's bottom edge on its own muted band with a
// top border — the Card drops its bottom padding when a footer is present.

export const InCard = () => (
  <Card className="max-w-sm">
    <CardHeader>
      <CardTitle>Fractional CMO</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">
        A seat inside your leadership team, from day one.
      </p>
    </CardContent>
    <CardFooter>
      <Button size="sm">See how it works</Button>
    </CardFooter>
  </Card>
);

export const TwoActions = () => (
  <Card className="max-w-sm">
    <CardHeader>
      <CardTitle>Project brief</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">Ready for partner review.</p>
    </CardContent>
    <CardFooter className="gap-2">
      <Button size="sm">Approve</Button>
      <Button size="sm" variant="outline">
        Send back
      </Button>
    </CardFooter>
  </Card>
);
