import { GlasmorphismHeader } from "@/components/glassmorphism-header"
import { GeneralSettings } from "@/components/settings/general-settings"
import { NotificationSettings } from "@/components/settings/notification-settings"
import { SecuritySettings } from "@/components/settings/security-settings"
import { IntegrationSettings } from "@/components/settings/integration-settings"

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

        {/* Settings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <GeneralSettings />
          <NotificationSettings />
          <SecuritySettings />
          <IntegrationSettings />
        </div>
      </main>
    </div>
  )
}
