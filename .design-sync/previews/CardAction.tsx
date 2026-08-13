import {
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from 'website';

// CardAction parks a control in the header's right-hand column. It only lays
// out correctly inside a CardHeader, which switches to a two-column grid when
// an action is present.

export const InCard = () => (
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
      <p className="text-muted-foreground">Next review scheduled for the first week of the quarter.</p>
    </CardContent>
  </Card>
);

export const WithLink = () => (
  <Card className="max-w-sm">
    <CardHeader>
      <CardTitle>Weekly progress</CardTitle>
      <CardDescription>Three of five milestones cleared</CardDescription>
      <CardAction>
        <Button variant="link" size="sm">
          View all
        </Button>
      </CardAction>
    </CardHeader>
  </Card>
);
