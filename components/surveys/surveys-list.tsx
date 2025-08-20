'use client'

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Eye, Edit, BarChart3, Users, Calendar, Loader2 } from "lucide-react"
import Link from "next/link"
import { db } from "@/lib/firebase"
import { collection, query, where, onSnapshot } from "firebase/firestore"
import { useAuth } from "@/hooks/use-auth"

export function SurveysList() {
  const [surveys, setSurveys] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { user } = useAuth()

  useEffect(() => {
    if (!user) {
      setIsLoading(false)
      return
    }

    const q = query(collection(db, "surveys"), where("authorId", "==", user.uid))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const surveysData: any[] = []
      querySnapshot.forEach((doc) => {
        surveysData.push({ id: doc.id, ...doc.data() })
      })
      setSurveys(surveysData)
      setIsLoading(false)
    })

    return () => unsubscribe()
  }, [user])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
      case "published":
        return "bg-green-500/20 text-green-700 border-green-500/30"
      case "draft":
        return "bg-yellow-500/20 text-yellow-700 border-yellow-500/30"
      case "completed":
        return "bg-blue-500/20 text-blue-700 border-blue-500/30"
      default:
        return "bg-gray-500/20 text-gray-700 border-gray-500/30"
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (surveys.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-foreground">No surveys found</h3>
        <p className="text-muted-foreground mt-2">
          Get started by creating a new survey.
        </p>
        <Button asChild className="mt-4">
          <Link href="/surveys/create">Create Survey</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {surveys.map((survey) => (
        <Card
          key={survey.id}
          className="glassmorphism border-white/20 hover:border-white/30 transition-all duration-200"
        >
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <CardTitle className="text-xl text-foreground">{survey.title}</CardTitle>
                  <Badge className={getStatusColor(survey.status)}>{survey.status}</Badge>
                  {survey.category && (
                    <Badge variant="outline" className="border-white/20">
                      {survey.category}
                    </Badge>
                  )}
                </div>
                <p className="text-muted-foreground">{survey.description}</p>
              </div>
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>{survey.responses || 0} responses</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  <span>{survey.completion || 0}% complete</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Created {survey.createdAt?.toDate().toLocaleDateString()}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Link href={`/surveys/${survey.id}`}>
                  <Button variant="outline" size="sm" className="glassmorphism border-white/20 bg-transparent">
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                </Link>
                <Link href={`/surveys/${survey.id}/results`}>
                  <Button variant="outline" size="sm" className="glassmorphism border-white/20 bg-transparent">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Results
                  </Button>
                </Link>
                <Button variant="outline" size="sm" className="glassmorphism border-white/20 bg-transparent">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}