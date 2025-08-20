"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { ThemeToggle } from "@/components/theme-toggle"
import { Separator } from "@/components/ui/separator"

export function GeneralSettings() {
  return (
    <Card className="glass-card border-border/50">
      <CardHeader>
        <CardTitle className="font-work-sans text-xl">General Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Theme Settings */}
        <div className="space-y-4">
          <div>
            <Label className="text-base font-medium">Appearance</Label>
            <p className="text-sm text-muted-foreground">Customize how the interface looks and feels</p>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="theme">Theme</Label>
              <p className="text-sm text-muted-foreground">Choose your preferred theme</p>
            </div>
            <ThemeToggle />
          </div>
        </div>

        <Separator />

        {/* Language Settings */}
        <div className="space-y-4">
          <div>
            <Label className="text-base font-medium">Language & Region</Label>
            <p className="text-sm text-muted-foreground">Set your language and regional preferences</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="language">Display Language</Label>
                <p className="text-sm text-muted-foreground">Choose your preferred language</p>
              </div>
              <Select defaultValue="en">
                <SelectTrigger className="w-[180px] glass bg-input/50 border-border/50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="glass-card">
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="hi">हिंदी (Hindi)</SelectItem>
                  <SelectItem value="bn">বাংলা (Bengali)</SelectItem>
                  <SelectItem value="te">తెలుగు (Telugu)</SelectItem>
                  <SelectItem value="ta">தமிழ் (Tamil)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="timezone">Timezone</Label>
                <p className="text-sm text-muted-foreground">Your local timezone</p>
              </div>
              <Select defaultValue="ist">
                <SelectTrigger className="w-[180px] glass bg-input/50 border-border/50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="glass-card">
                  <SelectItem value="ist">IST (UTC+5:30)</SelectItem>
                  <SelectItem value="utc">UTC (UTC+0:00)</SelectItem>
                  <SelectItem value="est">EST (UTC-5:00)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <Separator />

        {/* Interface Settings */}
        <div className="space-y-4">
          <div>
            <Label className="text-base font-medium">Interface</Label>
            <p className="text-sm text-muted-foreground">Customize your interface preferences</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="animations">Enable Animations</Label>
                <p className="text-sm text-muted-foreground">Show smooth transitions and effects</p>
              </div>
              <Switch id="animations" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="sounds">Sound Effects</Label>
                <p className="text-sm text-muted-foreground">Play sounds for notifications and actions</p>
              </div>
              <Switch id="sounds" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="compact">Compact Mode</Label>
                <p className="text-sm text-muted-foreground">Use a more compact interface layout</p>
              </div>
              <Switch id="compact" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
