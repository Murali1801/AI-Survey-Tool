'use client'

import { GlasmorphismHeader } from "@/components/glassmorphism-header"
import { GeneralSettings } from "@/components/settings/general-settings"
import { NotificationSettings } from "@/components/settings/notification-settings"
import { SecuritySettings } from "@/components/settings/security-settings"
import { IntegrationSettings } from "@/components/settings/integration-settings"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Bell, Lock, Link as LinkIcon } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-background">
      <GlasmorphismHeader />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="font-work-sans text-3xl font-bold text-foreground">Settings</h1>
          <p className="mt-2 text-muted-foreground">Customize your experience and manage your preferences</p>
        </div>

        <Tabs defaultValue="general" className="flex flex-col md:flex-row gap-8">
          <TabsList className="flex flex-row flex-wrap md:flex-col md:w-1/4 h-full bg-transparent p-0 gap-2 md:gap-0 md:space-y-2">
            <TabsTrigger value="general" className="w-full justify-start">
              <User className="mr-2 h-4 w-4" />
              General
            </TabsTrigger>
            <TabsTrigger value="notifications" className="w-full justify-start">
              <Bell className="mr-2 h-4 w-4" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="security" className="w-full justify-start">
              <Lock className="mr-2 h-4 w-4" />
              Security
            </TabsTrigger>
            <TabsTrigger value="integrations" className="w-full justify-start">
              <LinkIcon className="mr-2 h-4 w-4" />
              Integrations
            </TabsTrigger>
          </TabsList>

          <div className="flex-1">
            <TabsContent value="general">
              <GeneralSettings />
            </TabsContent>
            <TabsContent value="notifications">
              <NotificationSettings />
            </TabsContent>
            <TabsContent value="security">
              <SecuritySettings />
            </TabsContent>
            <TabsContent value="integrations">
              <IntegrationSettings />
            </TabsContent>
          </div>
        </Tabs>
      </main>
    </div>
  )
}