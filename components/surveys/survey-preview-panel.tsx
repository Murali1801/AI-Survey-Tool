import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, Smartphone, Monitor, Tablet } from "lucide-react"

export function SurveyPreviewPanel() {
  return (
    <Card className="glassmorphism border-white/20 sticky top-24">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Eye className="h-5 w-5 text-primary" />
          Live Preview
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Device Toggle */}
        <div className="flex gap-1 p-1 bg-muted/20 rounded-lg">
          <Button variant="ghost" size="sm" className="flex-1 bg-primary/20 text-primary">
            <Monitor className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="flex-1">
            <Tablet className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="flex-1">
            <Smartphone className="h-4 w-4" />
          </Button>
        </div>

        {/* Preview Content */}
        <div className="border border-white/20 rounded-lg p-4 bg-background/30 min-h-[400px]">
          <div className="space-y-4">
            <div className="text-center space-y-2">
              <h3 className="font-semibold text-foreground">Survey Preview</h3>
              <p className="text-sm text-muted-foreground">Your survey will appear here as you build it</p>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-muted/10 rounded border border-white/10">
                <div className="text-sm font-medium mb-1">Sample Question</div>
                <div className="text-xs text-muted-foreground mb-2">This is how your questions will look</div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 border border-white/30 rounded-full"></div>
                    <span className="text-xs">Option 1</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 border border-white/30 rounded-full"></div>
                    <span className="text-xs">Option 2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Button variant="outline" className="w-full glassmorphism border-white/20 bg-transparent">
          <Eye className="h-4 w-4 mr-2" />
          Full Preview
        </Button>
      </CardContent>
    </Card>
  )
}
