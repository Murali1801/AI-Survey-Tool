'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { ThemeToggle } from "@/components/theme-toggle"
import { Separator } from "@/components/ui/separator"

export function GeneralSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>General</CardTitle>
        <CardDescription>Manage your general account settings.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Appearance</h3>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <Label>Theme</Label>
                <p className="text-sm text-muted-foreground">Choose your preferred theme.</p>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
        <Separator />
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Language & Region</h3>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <Label>Display Language</Label>
                <p className="text-sm text-muted-foreground">Choose your preferred language.</p>
              </div>
              <Select defaultValue="en">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="hi">हिंदी (Hindi)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <Label>Timezone</Label>
                <p className="text-sm text-muted-foreground">Your local timezone.</p>
              </div>
              <Select defaultValue="ist">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ist">IST (UTC+5:30)</SelectItem>
                  <SelectItem value="utc">UTC (UTC+0:00)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <Separator />
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Interface</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Enable Animations</Label>
                <p className="text-sm text-muted-foreground">Show smooth transitions and effects.</p>
              </div>
              <Switch id="animations" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Compact Mode</Label>
                <p className="text-sm text-muted-foreground">Use a more compact interface layout.</p>
              </div>
              <Switch id="compact" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
