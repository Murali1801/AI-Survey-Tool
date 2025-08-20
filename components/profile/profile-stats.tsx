import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Users, CheckCircle, Award } from "lucide-react"

const stats = [
  {
    label: "Surveys Created",
    value: "47",
    icon: BarChart3,
    color: "text-primary",
  },
  {
    label: "Total Responses",
    value: "125K",
    icon: Users,
    color: "text-accent",
  },
  {
    label: "Completed Projects",
    value: "32",
    icon: CheckCircle,
    color: "text-green-500",
  },
  {
    label: "Quality Score",
    value: "96%",
    icon: Award,
    color: "text-yellow-500",
  },
]

const achievements = [
  { title: "Survey Expert", description: "Created 50+ surveys", earned: true },
  { title: "Quality Champion", description: "Maintained 95%+ quality", earned: true },
  { title: "Data Master", description: "Collected 100K+ responses", earned: true },
  { title: "Innovation Leader", description: "Implemented AI features", earned: false },
]

export function ProfileStats() {
  return (
    <div className="space-y-6">
      {/* Stats Card */}
      <Card className="glass-card border-border/50">
        <CardHeader>
          <CardTitle className="font-work-sans text-xl">Statistics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
                <span className="font-semibold text-foreground">{stat.value}</span>
              </div>
            )
          })}
        </CardContent>
      </Card>

      {/* Achievements Card */}
      <Card className="glass-card border-border/50">
        <CardHeader>
          <CardTitle className="font-work-sans text-xl">Achievements</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg glass border border-border/30 ${
                achievement.earned ? "opacity-100" : "opacity-50"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-medium text-sm">{achievement.title}</h4>
                <Badge variant={achievement.earned ? "default" : "secondary"} className="text-xs">
                  {achievement.earned ? "Earned" : "Locked"}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">{achievement.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
