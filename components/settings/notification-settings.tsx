'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export function NotificationSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>Configure how you receive notifications.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Email Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Survey Updates</Label>
                <p className="text-sm text-muted-foreground">Get notified about survey progress and completion.</p>
              </div>
              <Switch id="survey-updates" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Quality Alerts</Label>
                <p className="text-sm text-muted-foreground">Receive alerts about data quality issues.</p>
              </div>
              <Switch id="quality-alerts" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Team Activity</Label>
                <p className="text-sm text-muted-foreground">Updates about team member activities.</p>
              </div>
              <Switch id="team-activity" />
            </div>
          </div>
        </div>
        <Separator />
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Push Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Browser Notifications</Label>
                <p className="text-sm text-muted-foreground">Show notifications in your browser.</p>
              </div>
              <Switch id="browser-notifications" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Mobile Notifications</Label>
                <p className="text-sm text-muted-foreground">Receive notifications on mobile devices.</p>
              </div>
              <Switch id="mobile-notifications" />
            </div>
          </div>
        </div>
        <Separator />
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Notification Frequency</h3>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <Label>Email Digest</Label>
                <p className="text-sm text-muted-foreground">Receive a summary of activities.</p>
              </div>
              <Select defaultValue="daily">
                <SelectTrigger className="w-full sm:w-[140px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="realtime">Real-time</SelectItem>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="never">Never</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Quiet Hours</Label>
                <p className="text-sm text-muted-foreground">No notifications during these hours.</p>
              </div>
              <Switch id="quiet-hours" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
