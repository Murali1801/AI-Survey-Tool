import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Settings, Calendar, Shield } from "lucide-react"

export function SurveySettings() {
  return (
    <div className="space-y-4">
      {/* General Settings */}
      <Card className="glassmorphism border-white/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-primary" />
            Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Survey Category</label>
            <Select>
              <SelectTrigger className="bg-background/50 border-white/20">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="feedback">Feedback</SelectItem>
                <SelectItem value="research">Research</SelectItem>
                <SelectItem value="evaluation">Evaluation</SelectItem>
                <SelectItem value="census">Census</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Language</label>
            <Select>
              <SelectTrigger className="bg-background/50 border-white/20">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="hi">Hindi</SelectItem>
                <SelectItem value="bn">Bengali</SelectItem>
                <SelectItem value="te">Telugu</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label className="text-sm font-medium text-foreground">Anonymous Responses</label>
              <p className="text-xs text-muted-foreground">Don't collect respondent information</p>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label className="text-sm font-medium text-foreground">Randomize Questions</label>
              <p className="text-xs text-muted-foreground">Show questions in random order</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      {/* Schedule Settings */}
      <Card className="glassmorphism border-white/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Schedule
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Start Date</label>
            <Input type="datetime-local" className="bg-background/50 border-white/20" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">End Date</label>
            <Input type="datetime-local" className="bg-background/50 border-white/20" />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label className="text-sm font-medium text-foreground">Auto-close</label>
              <p className="text-xs text-muted-foreground">Close when target reached</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      {/* Access Control */}
      <Card className="glassmorphism border-white/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Access Control
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Access Type</label>
            <Select>
              <SelectTrigger className="bg-background/50 border-white/20">
                <SelectValue placeholder="Select access type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="public">Public Link</SelectItem>
                <SelectItem value="private">Private (Invite Only)</SelectItem>
                <SelectItem value="password">Password Protected</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Response Limit</label>
            <Input type="number" placeholder="Max responses (optional)" className="bg-background/50 border-white/20" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
