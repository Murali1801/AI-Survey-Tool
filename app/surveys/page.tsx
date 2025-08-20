import { GlasmorphismHeader } from "@/components/glassmorphism-header"
import { SurveysList } from "@/components/surveys/surveys-list"
import { SurveysStats } from "@/components/surveys/surveys-stats"
import { SurveysFilters } from "@/components/surveys/surveys-filters"

export default function SurveysPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <GlasmorphismHeader />

      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="space-y-8">
          {/* Page Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              Survey Management
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Create, manage, and analyze your AI-powered surveys with advanced analytics and real-time insights.
            </p>
          </div>

          {/* Survey Statistics */}
          <SurveysStats />

          {/* Filters and Search */}
          <SurveysFilters />

          {/* Surveys List */}
          <SurveysList />
        </div>
      </main>
    </div>
  )
}
