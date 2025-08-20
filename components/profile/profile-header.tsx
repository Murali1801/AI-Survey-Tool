"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Camera, MapPin, Calendar, Mail, Phone, Edit } from "lucide-react"

export function ProfileHeader() {
  return (
    <Card className="glass-card border-border/50">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          {/* Avatar Section */}
          <div className="relative">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
              <AvatarFallback className="text-2xl">JD</AvatarFallback>
            </Avatar>
            <Button
              size="sm"
              className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-primary hover:bg-primary/90"
            >
              <Camera className="h-4 w-4" />
            </Button>
          </div>

          {/* Profile Info */}
          <div className="flex-1 space-y-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h2 className="font-work-sans text-2xl font-bold text-foreground">Dr. John Doe</h2>
                <Badge className="bg-primary/10 text-primary">Survey Administrator</Badge>
              </div>
              <p className="text-muted-foreground">Senior Data Collection Specialist</p>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>john.doe@mospi.gov.in</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>New Delhi, India</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Joined March 2022</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <Button className="bg-primary hover:bg-primary/90">
            <Edit className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
