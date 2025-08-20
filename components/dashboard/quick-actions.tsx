'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, FileText, Download, Settings, Users, BarChart3 } from "lucide-react"
import Link from "next/link"

const actions = [
  {
    title: "Create Survey",
    description: "Start a new survey project",
    icon: Plus,
    variant: "default" as const,
    href: "/surveys/create",
  },
  {
    title: "Import Data",
    description: "Upload existing survey data",
    icon: Download,
    variant: "outline" as const,
    href: "/import",
  },
  {
    title: "Manage Users",
    description: "Add or edit enumerators",
    icon: Users,
    variant: "outline" as const,
    href: "/users",
  },
  {
    title: "View Reports",
    description: "Generate analytics reports",
    icon: BarChart3,
    variant: "outline" as const,
    href: "/reports",
  },
  {
    title: "Survey Templates",
    description: "Browse question banks",
    icon: FileText,
    variant: "outline" as const,
    href: "/templates",
  },
  {
    title: "System Settings",
    description: "Configure platform settings",
    icon: Settings,
    variant: "outline" as const,
    href: "/settings",
  },
]

export function QuickActions() {
  return (
    <Card className="glass-card border-border/50">
      <CardHeader>
        <CardTitle className="font-work-sans text-xl">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {actions.map((action, index) => {
          const Icon = action.icon
          return (
            <Link href={action.href} key={index}>
              <Button
                variant={action.variant}
                className="w-full justify-start h-auto p-4 glass hover:bg-primary/5"
              >
                <Icon className="mr-3 h-5 w-5" />
                <div className="text-left">
                  <div className="font-medium">{action.title}</div>
                  <div className="text-xs text-muted-foreground">{action.description}</div>
                </div>
              </Button>
            </Link>
          )
        })}
      </CardContent>
    </Card>
  )
}