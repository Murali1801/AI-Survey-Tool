import { GlasmorphismHeader } from "@/components/glassmorphism-header"
import { FileUpload } from "@/components/import/file-upload"

export default function ImportPage() {
  return (
    <div className="min-h-screen bg-background">
      <GlasmorphismHeader />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="font-work-sans text-3xl font-bold text-foreground">Import Data</h1>
          <p className="mt-2 text-muted-foreground">
            Upload your existing survey data in CSV format.
          </p>
        </div>
        <FileUpload />
      </main>
    </div>
  )
}