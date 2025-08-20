'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Shield, Key, Smartphone, Eye } from "lucide-react"

export function SecuritySettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Security & Privacy</CardTitle>
        <CardDescription>Manage your account security and privacy settings.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Password & Authentication</h3>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <Key className="h-5 w-5 text-muted-foreground" />
                <div>
                  <Label>Change Password</Label>
                  <p className="text-sm text-muted-foreground">Last changed 3 months ago</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Update
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <Smartphone className="h-5 w-5 text-muted-foreground" />
                <div>
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security.</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-green-500/10 text-green-600">Enabled</Badge>
                <Button variant="outline" size="sm">
                  Manage
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Separator />
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Privacy Controls</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Profile Visibility</Label>
                <p className="text-sm text-muted-foreground">Make your profile visible to team members.</p>
              </div>
              <Switch id="profile-visibility" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Activity Tracking</Label>
                <p className="text-sm text-muted-foreground">Allow tracking of your platform activity.</p>
              </div>
              <Switch id="activity-tracking" defaultChecked />
            </div>
          </div>
        </div>
        <Separator />
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Session Management</h3>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <Eye className="h-5 w-5 text-muted-foreground" />
                <div>
                  <Label>Active Sessions</Label>
                  <p className="text-sm text-muted-foreground">View and manage your active sessions.</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-muted-foreground" />
                <div>
                  <Label>Security Log</Label>
                  <p className="text-sm text-muted-foreground">Review recent security events.</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                View Log
              </Button>
            </div>
          </div>
        </div>
        <Separator />
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Data Management</h3>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <Label>Export My Data</Label>
                <p className="text-sm text-muted-foreground">Export all your data to a CSV file.</p>
              </div>
              <Button variant="outline">Export</Button>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <Label className="text-destructive">Delete Account</Label>
                <p className="text-sm text-muted-foreground">Permanently delete your account and all your data.</p>
              </div>
              <Button variant="destructive">Delete</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
