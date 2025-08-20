import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Share2, Download, Home } from "lucide-react"
import Link from "next/link"

interface SurveyCompletionPageProps {
  surveyId: string
}

export function SurveyCompletionPage({ surveyId }: SurveyCompletionPageProps) {
  return (
    <div className="space-y-8 text-center">
      {/* Success Message */}
      <div className="space-y-4">
        <div className="flex justify-center">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
            Thank You!
          </h1>
          <p className="text-lg text-muted-foreground">Your response has been successfully submitted</p>
        </div>
      </div>

      {/* Completion Details */}
      <Card className="glassmorphism border-white/20">
        <CardHeader>
          <CardTitle>Survey Completed</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="space-y-1">
              <div className="text-2xl font-bold text-primary">5</div>
              <div className="text-sm text-muted-foreground">Questions Answered</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-primary">3:42</div>
              <div className="text-sm text-muted-foreground">Time Taken</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-primary">343</div>
              <div className="text-sm text-muted-foreground">Total Responses</div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/20">
            <p className="text-sm text-muted-foreground">
              Your feedback is valuable to us and will help improve our services. You'll receive updates on how we're
              using this feedback to make improvements.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="glassmorphism border-white/20">
        <CardHeader>
          <CardTitle>What's Next?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-center space-y-2">
              <Share2 className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-medium">Share This Survey</h3>
              <p className="text-sm text-muted-foreground">
                Help us reach more people by sharing this survey with others
              </p>
            </div>
            <div className="text-center space-y-2">
              <Download className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-medium">Get Results</h3>
              <p className="text-sm text-muted-foreground">
                We'll email you a summary of the survey results when available
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="outline" className="glassmorphism border-white/20 bg-transparent">
          <Share2 className="h-4 w-4 mr-2" />
          Share Survey
        </Button>
        <Link href="/">
          <Button className="bg-primary hover:bg-primary/90">
            <Home className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Footer Message */}
      <div className="pt-8 border-t border-white/20">
        <p className="text-xs text-muted-foreground">
          This survey is powered by AI Survey Tool - Making data collection smarter and more efficient
        </p>
      </div>
    </div>
  )
}
