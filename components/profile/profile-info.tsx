"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Save } from "lucide-react"

export function ProfileInfo() {
  return (
    <Card className="glass-card border-border/50">
      <CardHeader>
        <CardTitle className="font-work-sans text-xl">Personal Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <form className="space-y-6">
          {/* Basic Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                defaultValue="John"
                className="glass bg-input/50 border-border/50 focus:border-primary/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                defaultValue="Doe"
                className="glass bg-input/50 border-border/50 focus:border-primary/50"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              defaultValue="john.doe@mospi.gov.in"
              className="glass bg-input/50 border-border/50 focus:border-primary/50"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                defaultValue="+91 98765 43210"
                className="glass bg-input/50 border-border/50 focus:border-primary/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Select defaultValue="statistics">
                <SelectTrigger className="glass bg-input/50 border-border/50 focus:border-primary/50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="glass-card">
                  <SelectItem value="statistics">Ministry of Statistics</SelectItem>
                  <SelectItem value="census">Census Operations</SelectItem>
                  <SelectItem value="surveys">Survey Division</SelectItem>
                  <SelectItem value="analysis">Data Analysis</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              placeholder="Tell us about yourself..."
              defaultValue="Experienced data collection specialist with over 8 years in government survey operations. Specialized in AI-powered survey design and quality assurance."
              className="glass bg-input/50 border-border/50 focus:border-primary/50 min-h-[100px]"
            />
          </div>

          {/* Work Info */}
          <div className="border-t border-border/50 pt-6">
            <h3 className="font-work-sans text-lg font-semibold mb-4">Work Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="position">Position</Label>
                <Input
                  id="position"
                  defaultValue="Senior Data Collection Specialist"
                  className="glass bg-input/50 border-border/50 focus:border-primary/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Office Location</Label>
                <Input
                  id="location"
                  defaultValue="New Delhi, India"
                  className="glass bg-input/50 border-border/50 focus:border-primary/50"
                />
              </div>
            </div>
          </div>

          <Button type="submit" className="bg-primary hover:bg-primary/90">
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
