import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Clock, Users } from "lucide-react"
import Link from "next/link"

interface SurveyHeaderProps {
  surveyId: string
}

export function SurveyHeader({ surveyId }: SurveyHeaderProps) {
  // Mock survey data - in real app, fetch based on surveyId
  const survey = {
    title: "Customer Satisfaction Survey 2024",
    description: "Help us improve our services by sharing your feedback",
    estimatedTime: "5-7 minutes",
    responses: 342,
    progress: 0, // Will be updated as user progresses
  }

  return (
    <div className="sticky top-0 z-50 glassmorphism border-b border-white/20 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-4 max-w-4xl">
        <div className="flex items-center justify-between mb-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back to Home</span>
          </Link>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{survey.estimatedTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{survey.responses} responses</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <h1 className="text-2xl font-bold text-foreground">{survey.title}</h1>
            <p className="text-muted-foreground">{survey.description}</p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="text-muted-foreground">{survey.progress}% complete</span>
            </div>
            <Progress value={survey.progress} className="h-2" />
          </div>
        </div>
      </div>
    </div>
  )
}
