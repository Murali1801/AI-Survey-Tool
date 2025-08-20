import { GlasmorphismHeader } from "@/components/glassmorphism-header"
import { SurveyResultsOverview } from "@/components/surveys/survey-results-overview"
import { SurveyAnalytics } from "@/components/surveys/survey-analytics"
import { ResponsesTable } from "@/components/surveys/responses-table"

interface SurveyResultsPageProps {
  params: {
    id: string
  }
}

export default function SurveyResultsPage({ params }: SurveyResultsPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <GlasmorphismHeader />

      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="space-y-8">
          {/* Results Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              Survey Results & Analytics
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive analysis and insights from your survey responses
            </p>
          </div>

          {/* Results Overview */}
          <SurveyResultsOverview surveyId={params.id} />

          {/* Analytics Charts */}
          <SurveyAnalytics surveyId={params.id} />

          {/* Responses Table */}
          <ResponsesTable surveyId={params.id} />
        </div>
      </main>
    </div>
  )
}
