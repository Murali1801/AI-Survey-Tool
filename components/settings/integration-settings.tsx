'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Database, MessageSquare, BarChart3, Cloud, Webhook } from "lucide-react"

const integrations = [
  {
    name: "WhatsApp Business API",
    description: "Send surveys via WhatsApp messaging.",
    icon: MessageSquare,
    status: "connected",
    enabled: true,
  },
  {
    name: "Google Analytics",
    description: "Track survey performance and user behavior.",
    icon: BarChart3,
    status: "connected",
    enabled: true,
  },
  {
    name: "Cloud Storage",
    description: "Automatically backup survey data to cloud.",
    icon: Cloud,
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
    <Card>
      <CardHeader>
        <CardTitle>Integrations</CardTitle>
        <CardDescription>Connect your account with third-party services.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">API Configuration</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>API Access</Label>
                <p className="text-sm text-muted-foreground">Enable API access for external applications.</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <Label>API Key</Label>
                <p className="text-sm text-muted-foreground">Your personal API key for authentication.</p>
              </div>
              <Button variant="outline" size="sm">
                Generate New
              </Button>
            </div>
          </div>
        </div>
        <Separator />
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Connected Services</h3>
          <div className="space-y-4">
            {integrations.map((integration, index) => {
              const Icon = integration.icon
              return (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg gap-4"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-6 w-6 text-muted-foreground" />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Label className="font-medium">{integration.name}</Label>
                        <Badge className={getStatusColor(integration.status)}>
                          {integration.status === "connected" ? "Connected" : "Not Connected"}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{integration.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 self-end sm:self-center">
                    {integration.status === "connected" && <Switch checked={integration.enabled} />}
                    <Button variant="outline" size="sm">
                      {integration.status === "connected" ? "Configure" : "Connect"}
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <Separator />
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Webhook Configuration</h3>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <Label>Webhook URL</Label>
                <p className="text-sm text-muted-foreground">Send real-time notifications to this URL.</p>
              </div>
              <Button variant="outline">Add Webhook</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}