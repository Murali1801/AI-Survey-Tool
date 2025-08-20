import { GlasmorphismHeader } from "@/components/glassmorphism-header"
import { ProfileHeader } from "@/components/profile/profile-header"
import { ProfileInfo } from "@/components/profile/profile-info"
import { ProfileActivity } from "@/components/profile/profile-activity"
import { ProfileStats } from "@/components/profile/profile-stats"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <GlasmorphismHeader />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="font-work-sans text-3xl font-bold text-foreground">Profile</h1>
          <p className="mt-2 text-muted-foreground">Manage your account information and view your activity</p>
        </div>

        {/* Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Profile Header - Full Width */}
          <div className="lg:col-span-12">
            <ProfileHeader />
          </div>

          {/* Profile Info */}
          <div className="lg:col-span-8">
            <ProfileInfo />
          </div>

          {/* Profile Stats */}
          <div className="lg:col-span-4">
            <ProfileStats />
          </div>

          {/* Profile Activity - Full Width */}
          <div className="lg:col-span-12">
            <ProfileActivity />
          </div>
        </div>
      </main>
    </div>
  )
}
