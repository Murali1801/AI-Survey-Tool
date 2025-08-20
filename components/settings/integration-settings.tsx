"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Database, MessageSquare, BarChart3, Cloud, Webhook } from "lucide-react"

const integrations = [
  {
    name: "WhatsApp Business API",
    description: "Send surveys via WhatsApp messaging",
    icon: MessageSquare,
    status: "connected",
    enabled: true,
  },
  {
    name: "Google Analytics",
    description: "Track survey performance and user behavior",
    icon: BarChart3,
    status: "connected",
    enabled: true,
  },
  {
    name: "Cloud Storage",
    description: "Automatically backup survey data to cloud",
    icon: Cloud,
    status: "connected",
    enabled: false,
  },
  {
    name: "Webhook Notifications",
    description: "Send real-time notifications to external systems",
    icon: Webhook,
    status: "not-connected",
    enabled: false,
  },
  {
    name: "External Database",
    description: "Connect to external databases for data validation",
    icon: Database,
    status: "not-connected",
    enabled: false,
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "connected":
      return "bg-green-500/10 text-green-600"
    case "not-connected":
      return "bg-muted text-muted-foreground"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export function IntegrationSettings() {
  return (
    <Card className="glass-card border-border/50">
      <CardHeader>
        <CardTitle className="font-work-sans text-xl">Integrations</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* API Settings */}
        <div className="space-y-4">
          <div>
            <Label className="text-base font-medium">API Configuration</Label>
            <p className="text-sm text-muted-foreground">Manage API keys and external integrations</p>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label>API Access</Label>
              <p className="text-sm text-muted-foreground">Enable API access for external applications</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label>API Key</Label>
              <p className="text-sm text-muted-foreground">Your personal API key for authentication</p>
            </div>
            <Button variant="outline" size="sm" className="glass-card bg-transparent">
              Generate New
            </Button>
          </div>
        </div>

        <Separator />

        {/* Connected Services */}
        <div className="space-y-4">
          <div>
            <Label className="text-base font-medium">Connected Services</Label>
            <p className="text-sm text-muted-foreground">Manage your connected third-party services</p>
          </div>
          <div className="space-y-4">
            {integrations.map((integration, index) => {
              const Icon = integration.icon
              return (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg glass border border-border/30"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Label className="text-sm font-medium">{integration.name}</Label>
                        <Badge className={getStatusColor(integration.status)}>
                          {integration.status === "connected" ? "Connected" : "Not Connected"}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{integration.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {integration.status === "connected" && <Switch checked={integration.enabled} size="sm" />}
                    <Button variant="outline" size="sm" className="glass-card bg-transparent">
                      {integration.status === "connected" ? "Configure" : "Connect"}
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <Separator />

        {/* Webhook Settings */}
        <div className="space-y-4">
          <div>
            <Label className="text-base font-medium">Webhook Configuration</Label>
            <p className="text-sm text-muted-foreground">Set up webhooks for real-time notifications</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="outline" className="glass-card bg-transparent">
              Add Webhook
            </Button>
            <Button variant="outline" className="glass-card bg-transparent">
              View Documentation
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
