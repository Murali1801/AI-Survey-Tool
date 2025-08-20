import { GlasmorphismHeader } from "@/components/glassmorphism-header"
import { UsersTable } from "@/components/users/users-table"

export default function UsersPage() {
  return (
    <div className="min-h-screen bg-background">
      <GlasmorphismHeader />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="font-work-sans text-3xl font-bold text-foreground">Manage Users</h1>
          <p className="mt-2 text-muted-foreground">
            Add, edit, or remove users from the system.
          </p>
        </div>
        <UsersTable />
      </main>
    </div>
  )
}