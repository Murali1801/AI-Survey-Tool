'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, Plus } from "lucide-react"

interface TemplateCardProps {
  template: {
    title: string
    description: string
  }
  onPreview: () => void
}

export function TemplateCard({ template, onPreview }: TemplateCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{template.title}</CardTitle>
        <CardDescription>{template.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
          <Button variant="outline" size="sm" className="w-full sm:w-auto" onClick={onPreview}>
            <Eye className="mr-2 h-4 w-4" />
            Preview
          </Button>
          <Button size="sm" className="w-full sm:w-auto">
            <Plus className="mr-2 h-4 w-4" />
            Use Template
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
