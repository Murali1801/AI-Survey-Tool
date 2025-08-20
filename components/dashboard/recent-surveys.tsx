'use client'

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Eye, Edit, Download, Loader2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { db } from "@/lib/firebase"
import { collection, query, where, orderBy, limit, onSnapshot } from "firebase/firestore"
import { useAuth } from "@/hooks/use-auth"

export function RecentSurveys() {
  const [surveys, setSurveys] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { user } = useAuth()

  useEffect(() => {
    if (!user) {
      setIsLoading(false)
      return
    }

    const q = query(
      collection(db, "surveys"),
      where("authorId", "==", user.uid),
      orderBy("createdAt", "desc"),
      limit(5)
    )
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
        return "bg-primary/10 text-primary hover:bg-primary/20"
      case "completed":
        return "bg-green-500/10 text-green-600 hover:bg-green-500/20"
      case "draft":
        return "bg-muted text-muted-foreground hover:bg-muted/80"
      default:
        return "bg-muted text-muted-foreground hover:bg-muted/80"
    }
  }

  if (isLoading) {
    return (
      <Card className="glass-card border-border/50">
        <CardHeader>
          <CardTitle className="font-work-sans text-xl">Recent Surveys</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center items-center h-40">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </CardContent>
      </Card>
    )
  }

  if (surveys.length === 0) {
    return (
      <Card className="glass-card border-border/50">
        <CardHeader>
          <CardTitle className="font-work-sans text-xl">Recent Surveys</CardTitle>
        </CardHeader>
        <CardContent className="text-center py-12">
          <h3 className="text-lg font-medium text-foreground">No recent surveys</h3>
          <p className="text-muted-foreground mt-2">
            You have not created any surveys yet.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="glass-card border-border/50">
      <CardHeader>
        <CardTitle className="font-work-sans text-xl">Recent Surveys</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {surveys.map((survey) => (
            <div
              key={survey.id}
              className="flex items-center justify-between p-4 rounded-lg glass border border-border/30 hover:shadow-md transition-all duration-200"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-medium text-foreground truncate">{survey.title}</h3>
                  <Badge className={getStatusColor(survey.status)}>{survey.status}</Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>
                    {survey.responses || 0} responses
                  </span>
                  <span>{survey.completion || 0}% complete</span>
                  {survey.quality > 0 && <span>Quality: {survey.quality}%</span>}
                  <span>
                    Created {survey.createdAt?.toDate().toLocaleDateString()}
                  </span>
                </div>
                {survey.status !== "draft" && (
                  <div className="mt-2 w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${survey.completion || 0}%` }}
                    />
                  </div>
                )}
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="ml-4">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="glass-card">
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link href={`/surveys/${survey.id}`}>
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit Survey
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Download className="mr-2 h-4 w-4" />
                    Export Data
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}