import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Eye, Edit, Download } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const surveys = [
  {
    id: 1,
    title: "National Health Survey 2024",
    status: "active",
    responses: 2847,
    target: 5000,
    completion: 57,
    lastUpdated: "2 hours ago",
    quality: 94,
  },
  {
    id: 2,
    title: "Economic Census - Urban Areas",
    status: "completed",
    responses: 12450,
    target: 12000,
    completion: 100,
    lastUpdated: "1 day ago",
    quality: 98,
  },
  {
    id: 3,
    title: "Education Infrastructure Assessment",
    status: "active",
    responses: 1234,
    target: 3000,
    completion: 41,
    lastUpdated: "5 hours ago",
    quality: 91,
  },
  {
    id: 4,
    title: "Agricultural Productivity Study",
    status: "draft",
    responses: 0,
    target: 8000,
    completion: 0,
    lastUpdated: "3 days ago",
    quality: 0,
  },
  {
    id: 5,
    title: "Digital Literacy Survey",
    status: "active",
    responses: 567,
    target: 2000,
    completion: 28,
    lastUpdated: "1 hour ago",
    quality: 89,
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-primary/10 text-primary hover:bg-primary/20"
    case "completed":
      return "bg-green-500/10 text-green-600 hover:bg-green-500/20"
    case "draft":
      return "bg-muted text-muted-foreground hover:bg-muted/80"
    default:
      return "bg-muted text-muted-foreground hover:bg-muted/80"
  }
}

export function RecentSurveys() {
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
                    {survey.responses.toLocaleString()} / {survey.target.toLocaleString()} responses
                  </span>
                  <span>{survey.completion}% complete</span>
                  {survey.quality > 0 && <span>Quality: {survey.quality}%</span>}
                  <span>Updated {survey.lastUpdated}</span>
                </div>
                {survey.status !== "draft" && (
                  <div className="mt-2 w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${survey.completion}%` }}
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
                  <DropdownMenuItem className="cursor-pointer">
                    <Eye className="mr-2 h-4 w-4" />
                    View Details
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
