import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Eye, Edit, BarChart3, Users, Calendar } from "lucide-react"
import Link from "next/link"

export function SurveysList() {
  const surveys = [
    {
      id: "1",
      title: "Customer Satisfaction Survey 2024",
      description: "Comprehensive feedback collection for service improvement",
      status: "active",
      responses: 342,
      completion: 78,
      created: "2024-01-15",
      category: "Feedback",
    },
    {
      id: "2",
      title: "Employee Engagement Assessment",
      description: "Annual employee satisfaction and engagement survey",
      status: "active",
      responses: 156,
      completion: 45,
      created: "2024-01-10",
      category: "Research",
    },
    {
      id: "3",
      title: "Product Feature Evaluation",
      description: "User feedback on new product features and usability",
      status: "draft",
      responses: 0,
      completion: 0,
      created: "2024-01-08",
      category: "Evaluation",
    },
    {
      id: "4",
      title: "Market Research Study",
      description: "Consumer behavior and market trends analysis",
      status: "completed",
      responses: 892,
      completion: 100,
      created: "2023-12-20",
      category: "Research",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500/20 text-green-700 border-green-500/30"
      case "draft":
        return "bg-yellow-500/20 text-yellow-700 border-yellow-500/30"
      case "completed":
        return "bg-blue-500/20 text-blue-700 border-blue-500/30"
      default:
        return "bg-gray-500/20 text-gray-700 border-gray-500/30"
    }
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
                  <Badge variant="outline" className="border-white/20">
                    {survey.category}
                  </Badge>
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
                  <span>{survey.responses} responses</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  <span>{survey.completion}% complete</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Created {survey.created}</span>
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
