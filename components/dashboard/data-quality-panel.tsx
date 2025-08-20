import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle, Clock } from "lucide-react"

const qualityMetrics = [
  {
    label: "Response Validation",
    score: 96,
    status: "excellent",
    issues: 12,
  },
  {
    label: "Data Completeness",
    score: 89,
    status: "good",
    issues: 45,
  },
  {
    label: "Consistency Checks",
    score: 94,
    status: "excellent",
    issues: 8,
  },
  {
    label: "Duplicate Detection",
    score: 78,
    status: "warning",
    issues: 156,
  },
]

const recentIssues = [
  {
    type: "warning",
    message: "High skip rate in Survey #24",
    time: "2 min ago",
  },
  {
    type: "error",
    message: "Validation failed for 12 responses",
    time: "15 min ago",
  },
  {
    type: "success",
    message: "Quality check completed for Survey #23",
    time: "1 hour ago",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "excellent":
      return "bg-green-500/10 text-green-600"
    case "good":
      return "bg-primary/10 text-primary"
    case "warning":
      return "bg-yellow-500/10 text-yellow-600"
    default:
      return "bg-muted text-muted-foreground"
  }
}

const getIssueIcon = (type: string) => {
  switch (type) {
    case "error":
      return <AlertTriangle className="h-4 w-4 text-destructive" />
    case "warning":
      return <Clock className="h-4 w-4 text-yellow-500" />
    case "success":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    default:
      return <AlertTriangle className="h-4 w-4 text-muted-foreground" />
  }
}

export function DataQualityPanel() {
  return (
    <Card className="glass-card border-border/50">
      <CardHeader>
        <CardTitle className="font-work-sans text-xl">Data Quality</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Quality Metrics */}
        <div className="space-y-4">
          {qualityMetrics.map((metric, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{metric.label}</span>
                <div className="flex items-center gap-2">
                  <Badge className={getStatusColor(metric.status)}>{metric.score}%</Badge>
                </div>
              </div>
              <Progress value={metric.score} className="h-2" />
              <div className="text-xs text-muted-foreground">{metric.issues} issues detected</div>
            </div>
          ))}
        </div>

        {/* Recent Issues */}
        <div>
          <h4 className="font-medium mb-3">Recent Issues</h4>
          <div className="space-y-3">
            {recentIssues.map((issue, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg glass border border-border/30">
                {getIssueIcon(issue.type)}
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground">{issue.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">{issue.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
