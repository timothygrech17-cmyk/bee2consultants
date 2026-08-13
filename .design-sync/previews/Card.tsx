import {
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from 'website';

export const Basic = () => (
  <Card className="max-w-sm">
    <CardHeader>
      <CardTitle>Fractional CMO</CardTitle>
      <CardDescription>
        Ongoing senior marketing leadership for businesses that need the function, not the
        full-time hire.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">
        A seat inside your leadership team from day one, owning the roadmap, budget and hiring
        plan.
      </p>
    </CardContent>
  </Card>
);

export const WithFooter = () => (
  <Card className="max-w-sm">
    <CardHeader>
      <CardTitle>Project Management</CardTitle>
      <CardDescription>PMP-certified delivery with visible weekly progress.</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">
        Executive stakeholders aligned and well informed, with a handover your team can run
        confidently without us.
      </p>
    </CardContent>
    <CardFooter>
      <Button size="sm">See how it works</Button>
    </CardFooter>
  </Card>
);

export const WithAction = () => (
  <Card className="max-w-sm">
    <CardHeader>
      <CardTitle>Engagement summary</CardTitle>
      <CardDescription>Malta · retained, reviewed quarterly</CardDescription>
      <CardAction>
        <Button variant="ghost" size="sm">
          Edit
        </Button>
      </CardAction>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">
        Led by Timothy Grech. Next review scheduled for the first week of the quarter.
      </p>
    </CardContent>
  </Card>
);

export const Small = () => (
  <Card size="sm" className="max-w-xs">
    <CardHeader>
      <CardTitle>Weekly progress</CardTitle>
      <CardDescription>Compact density for dashboard use.</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">Three of five milestones cleared.</p>
    </CardContent>
  </Card>
);
