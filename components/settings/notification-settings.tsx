"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export function NotificationSettings() {
  return (
    <Card className="glass-card border-border/50">
      <CardHeader>
        <CardTitle className="font-work-sans text-xl">Notifications</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Email Notifications */}
        <div className="space-y-4">
          <div>
            <Label className="text-base font-medium">Email Notifications</Label>
            <p className="text-sm text-muted-foreground">Choose what email notifications you want to receive</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="survey-updates">Survey Updates</Label>
                <p className="text-sm text-muted-foreground">Get notified about survey progress and completion</p>
              </div>
              <Switch id="survey-updates" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="quality-alerts">Quality Alerts</Label>
                <p className="text-sm text-muted-foreground">Receive alerts about data quality issues</p>
              </div>
              <Switch id="quality-alerts" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="team-activity">Team Activity</Label>
                <p className="text-sm text-muted-foreground">Updates about team member activities</p>
              </div>
              <Switch id="team-activity" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="system-updates">System Updates</Label>
                <p className="text-sm text-muted-foreground">Important system announcements and updates</p>
              </div>
              <Switch id="system-updates" defaultChecked />
            </div>
          </div>
        </div>

        <Separator />

        {/* Push Notifications */}
        <div className="space-y-4">
          <div>
            <Label className="text-base font-medium">Push Notifications</Label>
            <p className="text-sm text-muted-foreground">Manage browser and mobile push notifications</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="browser-notifications">Browser Notifications</Label>
                <p className="text-sm text-muted-foreground">Show notifications in your browser</p>
              </div>
              <Switch id="browser-notifications" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="mobile-notifications">Mobile Notifications</Label>
                <p className="text-sm text-muted-foreground">Receive notifications on mobile devices</p>
              </div>
              <Switch id="mobile-notifications" />
            </div>
          </div>
        </div>

        <Separator />

        {/* Notification Frequency */}
        <div className="space-y-4">
          <div>
            <Label className="text-base font-medium">Notification Frequency</Label>
            <p className="text-sm text-muted-foreground">Control how often you receive notifications</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="digest-frequency">Email Digest</Label>
                <p className="text-sm text-muted-foreground">Receive a summary of activities</p>
              </div>
              <Select defaultValue="daily">
                <SelectTrigger className="w-[140px] glass bg-input/50 border-border/50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="glass-card">
                  <SelectItem value="realtime">Real-time</SelectItem>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="never">Never</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="quiet-hours">Quiet Hours</Label>
                <p className="text-sm text-muted-foreground">No notifications during these hours</p>
              </div>
              <Switch id="quiet-hours" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
