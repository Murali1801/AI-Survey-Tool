import { GlasmorphismHeader } from "@/components/glassmorphism-header"
import { TemplateList } from "@/components/templates/template-list"

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-background">
      <GlasmorphismHeader />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="font-work-sans text-3xl font-bold text-foreground">Survey Templates</h1>
          <p className="mt-2 text-muted-foreground">
            Choose from a variety of templates to get started quickly.
          </p>
        </div>
        <TemplateList />
      </main>
    </div>
  )
}