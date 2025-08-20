import { GlasmorphismHeader } from "@/components/glassmorphism-header"
import { SurveyBuilder } from "@/components/surveys/survey-builder"
import { SurveyPreviewPanel } from "@/components/surveys/survey-preview-panel"
import { SurveySettings } from "@/components/surveys/survey-settings"

export default function CreateSurveyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <GlasmorphismHeader />

      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="space-y-8">
          {/* Page Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              Create New Survey
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Build intelligent surveys with AI-powered question generation and advanced logic
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
            {/* Survey Builder */}
            <div className="xl:col-span-2">
              <SurveyBuilder />
            </div>

            {/* Preview Panel */}
            <div className="xl:col-span-1">
              <SurveyPreviewPanel />
            </div>

            {/* Settings Panel */}
            <div className="xl:col-span-1">
              <SurveySettings />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
