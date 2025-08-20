"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Sparkles, GripVertical, Trash2 } from "lucide-react"
import { QuestionTypeSelector } from "./question-type-selector"
import { AIQuestionGenerator } from "./ai-question-generator"

export function SurveyBuilder() {
  const [surveyTitle, setSurveyTitle] = useState("")
  const [surveyDescription, setSurveyDescription] = useState("")
  const [questions, setQuestions] = useState<any[]>([])

  const addQuestion = (type: string) => {
    const newQuestion = {
      id: Date.now(),
      type,
      title: "",
      description: "",
      required: false,
      options: type === "multiple-choice" || type === "checkbox" ? ["Option 1", "Option 2"] : [],
    }
    setQuestions([...questions, newQuestion])
  }

  const removeQuestion = (id: number) => {
    setQuestions(questions.filter((q) => q.id !== id))
  }

  const updateQuestion = (id: number, updates: any) => {
    setQuestions(questions.map((q) => (q.id === id ? { ...q, ...updates } : q)))
  }

  return (
    <div className="space-y-6">
      {/* Survey Header */}
      <Card className="glassmorphism border-white/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            Survey Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Survey Title</label>
            <Input
              placeholder="Enter survey title..."
              value={surveyTitle}
              onChange={(e) => setSurveyTitle(e.target.value)}
              className="bg-background/50 border-white/20"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Description</label>
            <Textarea
              placeholder="Describe your survey purpose and instructions..."
              value={surveyDescription}
              onChange={(e) => setSurveyDescription(e.target.value)}
              className="bg-background/50 border-white/20 min-h-[100px]"
            />
          </div>
        </CardContent>
      </Card>

      {/* AI Question Generator */}
      <AIQuestionGenerator onQuestionsGenerated={(newQuestions) => setQuestions([...questions, ...newQuestions])} />

      {/* Questions */}
      <div className="space-y-4">
        {questions.map((question, index) => (
          <Card key={question.id} className="glassmorphism border-white/20">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <GripVertical className="h-4 w-4 text-muted-foreground cursor-move" />
                  <span className="text-sm font-medium text-muted-foreground">Question {index + 1}</span>
                  <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
                    {question.type.replace("-", " ")}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeQuestion(question.id)}
                  className="text-red-500 hover:text-red-600 hover:bg-red-500/10"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Input
                  placeholder="Question title..."
                  value={question.title}
                  onChange={(e) => updateQuestion(question.id, { title: e.target.value })}
                  className="bg-background/50 border-white/20 font-medium"
                />
              </div>
              <div>
                <Input
                  placeholder="Question description (optional)..."
                  value={question.description}
                  onChange={(e) => updateQuestion(question.id, { description: e.target.value })}
                  className="bg-background/50 border-white/20 text-sm"
                />
              </div>

              {/* Question Type Specific Fields */}
              {(question.type === "multiple-choice" || question.type === "checkbox") && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Options</label>
                  {question.options.map((option: string, optionIndex: number) => (
                    <div key={optionIndex} className="flex gap-2">
                      <Input
                        value={option}
                        onChange={(e) => {
                          const newOptions = [...question.options]
                          newOptions[optionIndex] = e.target.value
                          updateQuestion(question.id, { options: newOptions })
                        }}
                        className="bg-background/50 border-white/20"
                        placeholder={`Option ${optionIndex + 1}`}
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          const newOptions = question.options.filter((_: any, i: number) => i !== optionIndex)
                          updateQuestion(question.id, { options: newOptions })
                        }}
                        className="text-red-500 hover:text-red-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const newOptions = [...question.options, `Option ${question.options.length + 1}`]
                      updateQuestion(question.id, { options: newOptions })
                    }}
                    className="glassmorphism border-white/20 bg-transparent"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Option
                  </Button>
                </div>
              )}

              {question.type === "rating" && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Rating Scale</label>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <Input placeholder="Min label (e.g., Poor)" className="bg-background/50 border-white/20" />
                    </div>
                    <div className="flex-1">
                      <Input placeholder="Max label (e.g., Excellent)" className="bg-background/50 border-white/20" />
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add Question */}
      <QuestionTypeSelector onQuestionAdd={addQuestion} />

      {/* Save Actions */}
      <div className="flex gap-4 pt-6">
        <Button variant="outline" className="glassmorphism border-white/20 bg-transparent">
          Save as Draft
        </Button>
        <Button className="bg-primary hover:bg-primary/90">Publish Survey</Button>
      </div>
    </div>
  )
}
