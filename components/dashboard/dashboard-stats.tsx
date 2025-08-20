import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Users, CheckCircle, TrendingUp } from "lucide-react"

const stats = [
  {
    title: "Total Surveys",
    value: "24",
    change: "+12%",
    changeType: "positive" as const,
    icon: BarChart3,
    description: "Active surveys",
  },
  {
    title: "Total Responses",
    value: "8,547",
    change: "+23%",
    changeType: "positive" as const,
    icon: Users,
    description: "This month",
  },
  {
    title: "Completion Rate",
    value: "87.3%",
    change: "+5.2%",
    changeType: "positive" as const,
    icon: CheckCircle,
    description: "Average completion",
  },
  {
    title: "Data Quality Score",
    value: "94.8%",
    change: "-1.2%",
    changeType: "negative" as const,
    icon: TrendingUp,
    description: "Quality index",
  },
  {
    title: "Active Enumerators",
    value: "156",
    change: "+8",
    changeType: "positive" as const,
    icon: Users,
    description: "Field workers",
  },
]

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <Card key={index} className="glass-card border-border/50 hover:shadow-lg transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="flex items-center justify-between mt-2">
                <p className="text-xs text-muted-foreground">{stat.description}</p>
                <Badge
                  variant={stat.changeType === "positive" ? "default" : "destructive"}
                  className={
                    stat.changeType === "positive"
                      ? "bg-primary/10 text-primary hover:bg-primary/20"
                      : "bg-destructive/10 text-destructive hover:bg-destructive/20"
                  }
                >
                  {stat.change}
                </Badge>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
