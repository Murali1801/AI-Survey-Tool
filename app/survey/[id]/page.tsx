import { SurveyResponseInterface } from "@/components/survey-response/survey-response-interface"
import { SurveyHeader } from "@/components/survey-response/survey-header"

interface SurveyResponsePageProps {
  params: {
    id: string
  }
}

export default function SurveyResponsePage({ params }: SurveyResponsePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <SurveyHeader surveyId={params.id} />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <SurveyResponseInterface surveyId={params.id} />
      </main>
    </div>
  )
}
