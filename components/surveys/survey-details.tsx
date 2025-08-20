'use client'

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import { db } from "@/lib/firebase"
import { doc, onSnapshot } from "firebase/firestore"

interface SurveyDetailsProps {
  surveyId: string
}

export function SurveyDetails({ surveyId }: SurveyDetailsProps) {
  const [survey, setSurvey] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "surveys", surveyId), (doc) => {
      if (doc.exists()) {
        setSurvey({ id: doc.id, ...doc.data() })
      } else {
        setSurvey(null)
      }
      setIsLoading(false)
    })

    return () => unsub()
  }, [surveyId])

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

  return (
    <Card className="glassmorphism border-white/20">
      <CardHeader>
        <CardTitle>{survey.title}</CardTitle>
        <p className="text-muted-foreground">{survey.description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {survey.questions.map((question: any, index: number) => (
          <div key={index} className="p-4 border rounded-lg">
            <p className="font-medium">{index + 1}. {question.title}</p>
            {question.description && <p className="text-sm text-muted-foreground">{question.description}</p>}
            <div className="mt-2 space-y-2">
              {question.options?.map((option: string, i: number) => (
                <div key={i} className="flex items-center gap-2">
                  <input type={question.type === 'checkbox' ? 'checkbox' : 'radio'} name={`q_${index}`} disabled />
                  <label>{option}</label>
                </div>
              ))}
              {(question.type === 'text' || question.type === 'textarea') && (
                <input type="text" disabled placeholder="Answer..." className="w-full p-2 border rounded" />
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
