import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Clock, Target } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "85% Faster Data Collection",
    description: "AI-powered automation reduces survey completion time and improves response rates significantly.",
    metric: "85%",
    label: "Time Saved",
  },
  {
    icon: Users,
    title: "Multi-Channel Reach",
    description: "Reach respondents through web, mobile, WhatsApp, and voice interfaces for maximum inclusivity.",
    metric: "5+",
    label: "Channels",
  },
  {
    icon: Clock,
    title: "Real-Time Insights",
    description: "Get instant feedback on data quality and survey performance with live monitoring dashboards.",
    metric: "24/7",
    label: "Monitoring",
  },
  {
    icon: Target,
    title: "99.9% Data Accuracy",
    description: "Advanced validation and AI-powered quality checks ensure the highest data integrity standards.",
    metric: "99.9%",
    label: "Accuracy",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Proven Results
          </Badge>
          <h2 className="font-work-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Transforming Government Data Collection
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join leading government agencies already using our platform to modernize their survey operations.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card
                key={index}
                className="glass-card text-center border-border/50 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="text-3xl font-bold text-primary">{benefit.metric}</div>
                    <div className="text-sm text-muted-foreground">{benefit.label}</div>
                  </div>
                  <h3 className="font-work-sans text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
