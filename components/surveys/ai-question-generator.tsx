"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles, Wand2, Loader2 } from "lucide-react"

interface AIQuestionGeneratorProps {
  onQuestionsGenerated: (questions: any[]) => void
}

export function AIQuestionGenerator({ onQuestionsGenerated }: AIQuestionGeneratorProps) {
  const [prompt, setPrompt] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const generateQuestions = async () => {
    if (!prompt.trim()) return

    setIsGenerating(true)

    // Simulate AI generation
    setTimeout(() => {
      const generatedQuestions = [
        {
          id: Date.now(),
          type: "multiple-choice",
          title: "How would you rate your overall satisfaction?",
          description: "Please select the option that best describes your experience",
          required: true,
          options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very Dissatisfied"],
        },
        {
          id: Date.now() + 1,
          type: "textarea",
          title: "What improvements would you suggest?",
          description: "Please provide detailed feedback on areas for improvement",
          required: false,
          options: [],
        },
        {
          id: Date.now() + 2,
          type: "rating",
          title: "Rate the quality of our service",
          description: "Scale from 1 (Poor) to 5 (Excellent)",
          required: true,
          options: [],
        },
      ]

      onQuestionsGenerated(generatedQuestions)
      setPrompt("")
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <Card className="glassmorphism border-white/20 border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          AI Question Generator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">Describe your survey goals</label>
          <Textarea
            placeholder="e.g., I want to collect customer feedback about our new mobile app, focusing on usability and satisfaction..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="bg-background/50 border-white/20 min-h-[80px]"
          />
        </div>
        <Button
          onClick={generateQuestions}
          disabled={!prompt.trim() || isGenerating}
          className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
        >
          {isGenerating ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Generating Questions...
            </>
          ) : (
            <>
              <Wand2 className="h-4 w-4 mr-2" />
              Generate Questions with AI
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  )
}
