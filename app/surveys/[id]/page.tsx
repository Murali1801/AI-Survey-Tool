import { GlasmorphismHeader } from "@/components/glassmorphism-header"
import { SurveyDetails } from "@/components/surveys/survey-details"
import { SurveyActions } from "@/components/surveys/survey-actions"
import { SurveyPreview } from "@/components/surveys/survey-preview"

interface SurveyPageProps {
  params: {
    id: string
  }
}

export default function SurveyPage({ params }: SurveyPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <GlasmorphismHeader />

      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="space-y-8">
          {/* Survey Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Survey Details</h1>
              <p className="text-muted-foreground">Survey ID: {params.id}</p>
            </div>
            <SurveyActions surveyId={params.id} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Survey Details */}
            <div className="lg:col-span-2">
              <SurveyDetails surveyId={params.id} />
            </div>

            {/* Survey Preview */}
            <div className="lg:col-span-1">
              <SurveyPreview surveyId={params.id} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
