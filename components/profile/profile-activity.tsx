import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Users, Settings } from "lucide-react"

const activities = [
  {
    id: 1,
    action: "Created survey",
    target: "National Health Survey 2024",
    time: "2 hours ago",
    type: "create",
    status: "completed",
  },
  {
    id: 2,
    action: "Exported data from",
    target: "Economic Census - Urban Areas",
    time: "1 day ago",
    type: "export",
    status: "completed",
  },
  {
    id: 3,
    action: "Updated settings for",
    target: "Education Infrastructure Assessment",
    time: "2 days ago",
    type: "update",
    status: "completed",
  },
  {
    id: 4,
    action: "Added enumerators to",
    target: "Agricultural Productivity Study",
    time: "3 days ago",
    type: "team",
    status: "completed",
  },
  {
    id: 5,
    action: "Completed quality review for",
    target: "Digital Literacy Survey",
    time: "1 week ago",
    type: "review",
    status: "completed",
  },
  {
    id: 6,
    action: "Started data collection for",
    target: "Rural Infrastructure Survey",
    time: "1 week ago",
    type: "start",
    status: "in-progress",
  },
]

const getActivityIcon = (type: string) => {
  switch (type) {
    case "create":
    case "review":
      return <FileText className="h-4 w-4 text-primary" />
    case "export":
      return <Download className="h-4 w-4 text-accent" />
    case "team":
      return <Users className="h-4 w-4 text-blue-500" />
    case "update":
      return <Settings className="h-4 w-4 text-muted-foreground" />
    default:
      return <FileText className="h-4 w-4 text-muted-foreground" />
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-green-500/10 text-green-600"
    case "in-progress":
      return "bg-primary/10 text-primary"
    case "pending":
      return "bg-yellow-500/10 text-yellow-600"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export function ProfileActivity() {
  return (
    <Card className="glass-card border-border/50">
      <CardHeader>
        <CardTitle className="font-work-sans text-xl">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between p-4 rounded-lg glass border border-border/30"
            >
              <div className="flex items-center gap-3">
                {getActivityIcon(activity.type)}
                <div>
                  <p className="text-sm text-foreground">
                    {activity.action} <span className="font-medium">{activity.target}</span>
                  </p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
              <Badge className={getStatusColor(activity.status)}>{activity.status}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
