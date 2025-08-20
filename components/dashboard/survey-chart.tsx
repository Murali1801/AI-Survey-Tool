'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"
import { useTheme } from "next-themes"

const data = [
  { month: "Jan", responses: 1200, quality: 92 },
  { month: "Feb", responses: 1800, quality: 89 },
  { month: "Mar", responses: 2400, quality: 94 },
  { month: "Apr", responses: 2200, quality: 91 },
  { month: "May", responses: 3100, quality: 96 },
  { month: "Jun", responses: 2800, quality: 93 },
  { month: "Jul", responses: 3400, quality: 95 },
  { month: "Aug", responses: 3800, quality: 97 },
]

export function SurveyChart() {
  const { resolvedTheme } = useTheme()

  const primaryColor = resolvedTheme === 'dark' ? 'hsl(120, 80%, 70%)' : 'hsl(260, 80%, 55%)';
  const backgroundColor = resolvedTheme === 'dark' ? 'hsl(142, 20%, 8%)' : 'hsl(240, 20%, 99%)';

  return (
    <Card className="glass-card border-border/50">
      <CardHeader>
        <CardTitle className="font-work-sans text-xl">Survey Performance</CardTitle>
        <CardDescription>Monthly response trends and data quality metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorResponses" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={primaryColor} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={primaryColor} stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} className="text-xs fill-muted-foreground" />
              <YAxis axisLine={false} tickLine={false} className="text-xs fill-muted-foreground" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  backdropFilter: "blur(8px)",
                }}
              />
              <Area
                type="monotone"
                dataKey="responses"
                stroke={primaryColor}
                fillOpacity={1}
                fill="url(#colorResponses)"
                strokeWidth={3}
                dot={{ r: 6, fill: primaryColor, stroke: backgroundColor, strokeWidth: 2 }}
                activeDot={{ r: 8, fill: primaryColor, stroke: backgroundColor, strokeWidth: 2 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
