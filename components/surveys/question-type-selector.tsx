"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Type, CheckSquare, Circle, Star, Calendar, FileText, ToggleLeft, Hash } from "lucide-react"

interface QuestionTypeSelectorProps {
  onQuestionAdd: (type: string) => void
}

export function QuestionTypeSelector({ onQuestionAdd }: QuestionTypeSelectorProps) {
  const questionTypes = [
    {
      type: "text",
      label: "Text Input",
      description: "Short text response",
      icon: Type,
    },
    {
      type: "textarea",
      label: "Long Text",
      description: "Multi-line text response",
      icon: FileText,
    },
    {
      type: "multiple-choice",
      label: "Multiple Choice",
      description: "Single selection from options",
      icon: Circle,
    },
    {
      type: "checkbox",
      label: "Checkbox",
      description: "Multiple selections allowed",
      icon: CheckSquare,
    },
    {
      type: "rating",
      label: "Rating Scale",
      description: "Numeric rating scale",
      icon: Star,
    },
    {
      type: "date",
      label: "Date Picker",
      description: "Date selection input",
      icon: Calendar,
    },
    {
      type: "number",
      label: "Number Input",
      description: "Numeric value input",
      icon: Hash,
    },
    {
      type: "yes-no",
      label: "Yes/No",
      description: "Binary choice question",
      icon: ToggleLeft,
    },
  ]

  return (
    <Card className="glassmorphism border-white/20">
      <CardHeader>
        <CardTitle>Add Question</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {questionTypes.map((type) => (
            <Button
              key={type.type}
              variant="outline"
              onClick={() => onQuestionAdd(type.type)}
              className="glassmorphism border-white/20 bg-transparent h-auto p-4 flex flex-col items-center gap-2 hover:border-primary/50 hover:bg-primary/5"
            >
              <type.icon className="h-5 w-5 text-primary" />
              <div className="text-center">
                <div className="font-medium text-sm">{type.label}</div>
                <div className="text-xs text-muted-foreground">{type.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
