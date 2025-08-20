import { GlasmorphismHeader } from "@/components/glassmorphism-header"
import { SampleCharts } from "@/components/reports/sample-charts"

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-background">
      <GlasmorphismHeader />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="font-work-sans text-3xl font-bold text-foreground">View Reports</h1>
          <p className="mt-2 text-muted-foreground">
            Here are some sample reports and analytics.
          </p>
        </div>
        <SampleCharts />
      </main>
    </div>
  )
}