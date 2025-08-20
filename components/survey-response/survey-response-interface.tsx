'use client'

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ChevronLeft, ChevronRight, Send, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { db } from "@/lib/firebase"
import { doc, getDoc, addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useAuth } from "@/hooks/use-auth"
import { useToast } from "@/hooks/use-toast"

interface SurveyResponseInterfaceProps {
  surveyId: string
}

export function SurveyResponseInterface({ surveyId }: SurveyResponseInterfaceProps) {
  const router = useRouter()
  const [survey, setSurvey] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [responses, setResponses] = useState<Record<string, any>>({})
  const { user } = useAuth()
  const { toast } = useToast()

  useEffect(() => {
    const fetchSurvey = async () => {
      const docRef = doc(db, "surveys", surveyId)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        setSurvey({ id: docSnap.id, ...docSnap.data() })
      } else {
        setSurvey(null)
      }
      setIsLoading(false)
    }
    fetchSurvey()
  }, [surveyId])

  const updateResponse = (questionId: string, value: any) => {
    setResponses((prev) => ({ ...prev, [questionId]: value }))
  }

  const nextQuestion = () => {
    if (survey && currentQuestion < survey.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const submitSurvey = async () => {
    setIsLoading(true)
    try {
      const responseData = {
        surveyId,
        responses,
        submittedAt: serverTimestamp(),
        userId: user?.uid || null,
      }
      await addDoc(collection(db, "responses"), responseData)
      toast({ title: "Success", description: "Survey submitted successfully!" })
      router.push(`/survey/${surveyId}/complete`)
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" })
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (!survey) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-foreground">Survey not found</h3>
        <p className="text-muted-foreground mt-2">
          The survey you are looking for does not exist.
        </p>
      </div>
    )
  }

  const question = survey.questions[currentQuestion]
  const isLastQuestion = currentQuestion === survey.questions.length - 1
  const canProceed = !question.required || responses[question.id]

  const renderQuestion = () => {
    switch (question.type) {
      case "multiple-choice":
        return (
          <RadioGroup
            value={responses[question.id] || ""}
            onValueChange={(value) => updateResponse(question.id, value)}
          >
            {question.options.map((option: string, index: number) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`${question.id}-${index}`} />
                <Label htmlFor={`${question.id}-${index}`} className="cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        )

      case "checkbox":
        return (
          <div className="space-y-3">
            {question.options.map((option: string, index: number) => (
              <div key={index} className="flex items-center space-x-2">
                <Checkbox
                  id={`${question.id}-${index}`}
                  checked={(responses[question.id] || []).includes(option)}
                  onCheckedChange={(checked) => {
                    const current = responses[question.id] || []
                    if (checked) {
                      updateResponse(question.id, [...current, option])
                    } else {
                      updateResponse(
                        question.id,
                        current.filter((item: string) => item !== option),
                      )
                    }
                  }}
                />
                <Label htmlFor={`${question.id}-${index}`} className="cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </div>
        )

      case "textarea":
        return (
          <Textarea
            placeholder="Enter your response..."
            value={responses[question.id] || ""}
            onChange={(e) => updateResponse(question.id, e.target.value)}
            className="bg-background/50 border-white/20 min-h-[120px]"
          />
        )

      case "text":
        return (
          <Input
            placeholder="Enter your response..."
            value={responses[question.id] || ""}
            onChange={(e) => updateResponse(question.id, e.target.value)}
            className="bg-background/50 border-white/20"
          />
        )

      case "rating":
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Not likely</span>
              <span className="text-sm text-muted-foreground">Very likely</span>
            </div>
            <div className="flex gap-2 justify-center">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
                <Button
                  key={rating}
                  variant={responses[question.id] === rating ? "default" : "outline"}
                  size="sm"
                  onClick={() => updateResponse(question.id, rating)}
                  className={`w-10 h-10 ${
                    responses[question.id] === rating
                      ? "bg-primary text-primary-foreground"
                      : "glassmorphism border-white/20 bg-transparent hover:border-primary/50"
                  }`}
                >
                  {rating}
                </Button>
              ))}
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      {/* Question Card */}
      <Card className="glassmorphism border-white/20">
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {survey.questions.length}
            </span>
            {question.required && (
              <span className="text-xs text-red-500 bg-red-500/10 px-2 py-1 rounded">Required</span>
            )}
          </div>
          <CardTitle className="text-xl text-foreground">{question.title}</CardTitle>
          {question.description && <p className="text-muted-foreground">{question.description}</p>}
        </CardHeader>
        <CardContent className="space-y-6">{renderQuestion()}</CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={prevQuestion}
          disabled={currentQuestion === 0}
          className="glassmorphism border-white/20 bg-transparent"
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>

        <div className="text-sm text-muted-foreground">
          {currentQuestion + 1} / {survey.questions.length}
        </div>

        {isLastQuestion ? (
          <Button onClick={submitSurvey} disabled={!canProceed || isLoading} className="bg-primary hover:bg-primary/90">
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4 mr-2" />}
            Submit Survey
          </Button>
        ) : (
          <Button onClick={nextQuestion} disabled={!canProceed} className="bg-primary hover:bg-primary/90">
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        )}
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center space-x-2">
        {survey.questions.map((_: any, index: number) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${index <= currentQuestion ? "bg-primary" : "bg-muted"}`}
          />
        ))}
      </div>
    </div>
  )
}