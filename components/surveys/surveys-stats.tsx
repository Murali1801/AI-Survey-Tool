import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Users, TrendingUp, Clock } from "lucide-react"

export function SurveysStats() {
  const stats = [
    {
      title: "Total Surveys",
      value: "24",
      change: "+12%",
      icon: BarChart3,
      color: "text-blue-600",
    },
    {
      title: "Active Surveys",
      value: "8",
      change: "+3",
      icon: TrendingUp,
      color: "text-green-600",
    },
    {
      title: "Total Responses",
      value: "1,247",
      change: "+18%",
      icon: Users,
      color: "text-purple-600",
    },
    {
      title: "Avg. Completion Time",
      value: "4.2 min",
      change: "-0.3 min",
      icon: Clock,
      color: "text-orange-600",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="glassmorphism border-white/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">{stat.change}</span> from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
