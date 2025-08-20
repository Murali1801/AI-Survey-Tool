import { SurveyCompletionPage } from "@/components/survey-response/survey-completion-page"

interface SurveyCompletePageProps {
  params: {
    id: string
  }
}

export default function SurveyCompletePage({ params }: SurveyCompletePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <SurveyCompletionPage surveyId={params.id} />
      </main>
    </div>
  )
}
