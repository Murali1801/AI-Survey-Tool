'use client'

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Users, CheckCircle, TrendingUp, Loader2 } from "lucide-react"
import { db } from "@/lib/firebase"
import { collection, query, where, getDocs } from "firebase/firestore"
import { useAuth } from "@/hooks/use-auth"

export function DashboardStats() {
  const [stats, setStats] = useState({
    totalSurveys: 0,
    totalResponses: 0,
    completionRate: 0,
    dataQualityScore: 0,
    activeEnumerators: 0,
  })
  const [isLoading, setIsLoading] = useState(true)
  const { user } = useAuth()

  useEffect(() => {
    const fetchStats = async () => {
      if (!user) {
        setIsLoading(false)
        return
      }

      const surveysQuery = query(collection(db, "surveys"), where("authorId", "==", user.uid))
      const surveysSnapshot = await getDocs(surveysQuery)
      const surveysData = surveysSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      
      let totalResponses = 0
      for (const survey of surveysData) {
        const responsesQuery = query(collection(db, "responses"), where("surveyId", "==", survey.id))
        const responsesSnapshot = await getDocs(responsesQuery)
        totalResponses += responsesSnapshot.size
      }

      setStats({
        totalSurveys: surveysData.length,
        totalResponses,
        completionRate: 87.3, // Mock data
        dataQualityScore: 94.8, // Mock data
        activeEnumerators: 156, // Mock data
      })
      setIsLoading(false)
    }

    fetchStats()
  }, [user])

  const statsData = [
    {
      title: "Total Surveys",
      value: stats.totalSurveys,
      change: "+12%",
      changeType: "positive" as const,
      icon: BarChart3,
      description: "Your surveys",
    },
    {
      title: "Total Responses",
      value: stats.totalResponses,
      change: "+23%",
      changeType: "positive" as const,
      icon: Users,
      description: "Across all surveys",
    },
    {
      title: "Completion Rate",
      value: `${stats.completionRate}%`,
      change: "+5.2%",
      changeType: "positive" as const,
      icon: CheckCircle,
      description: "Average completion",
    },
    {
      title: "Data Quality Score",
      value: `${stats.dataQualityScore}%`,
      change: "-1.2%",
      changeType: "negative" as const,
      icon: TrendingUp,
      description: "Quality index",
    },
    {
      title: "Active Enumerators",
      value: stats.activeEnumerators,
      change: "+8",
      changeType: "positive" as const,
      icon: Users,
      description: "Field workers",
    },
  ]

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Card key={index} className="glass-card border-border/50 h-28 flex justify-center items-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {statsData.map((stat, index) => {
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