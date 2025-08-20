import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FileText, Users, Download, Settings } from "lucide-react"

const activities = [
  {
    id: 1,
    user: "Sarah Johnson",
    action: "created",
    target: "Health Survey 2024",
    time: "2 minutes ago",
    type: "survey",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 2,
    user: "Mike Chen",
    action: "exported data from",
    target: "Economic Census",
    time: "15 minutes ago",
    type: "export",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 3,
    user: "Admin",
    action: "updated settings for",
    target: "Data Collection Platform",
    time: "1 hour ago",
    type: "settings",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 4,
    user: "Lisa Wang",
    action: "added 25 enumerators to",
    target: "Agricultural Study",
    time: "2 hours ago",
    type: "users",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 5,
    user: "David Kumar",
    action: "completed quality check for",
    target: "Education Survey",
    time: "3 hours ago",
    type: "survey",
    avatar: "/placeholder.svg?height=32&width=32",
  },
]

const getActivityIcon = (type: string) => {
  switch (type) {
    case "survey":
      return <FileText className="h-4 w-4 text-primary" />
    case "export":
      return <Download className="h-4 w-4 text-accent" />
    case "users":
      return <Users className="h-4 w-4 text-blue-500" />
    case "settings":
      return <Settings className="h-4 w-4 text-muted-foreground" />
    default:
      return <FileText className="h-4 w-4 text-muted-foreground" />
  }
}

export function ActivityFeed() {
  return (
    <Card className="glass-card border-border/50">
      <CardHeader>
        <CardTitle className="font-work-sans text-xl">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={activity.avatar || "/placeholder.svg"} alt={activity.user} />
                <AvatarFallback>
                  {activity.user
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  {getActivityIcon(activity.type)}
                  <p className="text-sm text-foreground">
                    <span className="font-medium">{activity.user}</span> {activity.action}{" "}
                    <span className="font-medium">{activity.target}</span>
                  </p>
                </div>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
