"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Shield, Key, Smartphone, Eye } from "lucide-react"

export function SecuritySettings() {
  return (
    <Card className="glass-card border-border/50">
      <CardHeader>
        <CardTitle className="font-work-sans text-xl">Security & Privacy</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Password Settings */}
        <div className="space-y-4">
          <div>
            <Label className="text-base font-medium">Password & Authentication</Label>
            <p className="text-sm text-muted-foreground">Manage your account security settings</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Key className="h-5 w-5 text-muted-foreground" />
                <div>
                  <Label>Change Password</Label>
                  <p className="text-sm text-muted-foreground">Last changed 3 months ago</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="glass-card bg-transparent">
                Update
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Smartphone className="h-5 w-5 text-muted-foreground" />
                <div>
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-green-500/10 text-green-600">Enabled</Badge>
                <Button variant="outline" size="sm" className="glass-card bg-transparent">
                  Manage
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Privacy Settings */}
        <div className="space-y-4">
          <div>
            <Label className="text-base font-medium">Privacy Controls</Label>
            <p className="text-sm text-muted-foreground">Control your data and privacy preferences</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="profile-visibility">Profile Visibility</Label>
                <p className="text-sm text-muted-foreground">Make your profile visible to team members</p>
              </div>
              <Switch id="profile-visibility" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="activity-tracking">Activity Tracking</Label>
                <p className="text-sm text-muted-foreground">Allow tracking of your platform activity</p>
              </div>
              <Switch id="activity-tracking" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="data-sharing">Data Sharing</Label>
                <p className="text-sm text-muted-foreground">Share anonymized usage data for improvements</p>
              </div>
              <Switch id="data-sharing" />
            </div>
          </div>
        </div>

        <Separator />

        {/* Session Management */}
        <div className="space-y-4">
          <div>
            <Label className="text-base font-medium">Session Management</Label>
            <p className="text-sm text-muted-foreground">Manage your active sessions and devices</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Eye className="h-5 w-5 text-muted-foreground" />
                <div>
                  <Label>Active Sessions</Label>
                  <p className="text-sm text-muted-foreground">View and manage your active sessions</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="glass-card bg-transparent">
                View All
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-muted-foreground" />
                <div>
                  <Label>Security Log</Label>
                  <p className="text-sm text-muted-foreground">Review recent security events</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="glass-card bg-transparent">
                View Log
              </Button>
            </div>
          </div>
        </div>

        <Separator />

        {/* Data Export */}
        <div className="space-y-4">
          <div>
            <Label className="text-base font-medium">Data Management</Label>
            <p className="text-sm text-muted-foreground">Export or delete your account data</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="outline" className="glass-card bg-transparent">
              Export My Data
            </Button>
            <Button variant="destructive" className="bg-destructive/10 text-destructive hover:bg-destructive/20">
              Delete Account
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
