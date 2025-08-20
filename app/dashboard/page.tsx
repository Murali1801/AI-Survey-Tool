'use client'

import { GlasmorphismHeader } from "@/components/glassmorphism-header"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { RecentSurveys } from "@/components/dashboard/recent-surveys"
import { SurveyChart } from "@/components/dashboard/survey-chart"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { ActivityFeed } from "@/components/dashboard/activity-feed"
import { DataQualityPanel } from "@/components/dashboard/data-quality-panel"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useIsMobile } from "@/hooks/use-mobile"

export default function DashboardPage() {
  const isMobile = useIsMobile()

  return (
    <div className="min-h-screen bg-background">
      <GlasmorphismHeader />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="font-work-sans text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="mt-2 text-muted-foreground">
            Monitor your survey performance and manage data collection activities
          </p>
        </div>

        {isMobile ? (
          <div className="space-y-6">
            <DashboardStats />
            <Tabs defaultValue="performance" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="performance">Performance</TabsTrigger>
                <TabsTrigger value="recent">Recent Surveys</TabsTrigger>
              </TabsList>
              <TabsContent value="performance">
                <SurveyChart />
              </TabsContent>
              <TabsContent value="recent">
                <RecentSurveys />
              </TabsContent>
            </Tabs>
            <QuickActions />
            <DataQualityPanel />
            <ActivityFeed />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-6">
              <DashboardStats />
              <SurveyChart />
              <RecentSurveys />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <QuickActions />
              <DataQualityPanel />
              <ActivityFeed />
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
