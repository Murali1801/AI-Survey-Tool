import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Globe, Zap, Shield, BarChart3, MessageSquare, Smartphone, Database, CheckCircle } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Driven Adaptive Questioning",
    description:
      "Automatically infer respondent traits and personalize follow-up questions using lightweight LLMs and rule-based classifiers.",
  },
  {
    icon: Zap,
    title: "No-Code Survey Builder",
    description:
      "Create complex surveys with conditional logic, loops, and skip patterns using our intuitive drag-and-drop interface.",
  },
  {
    icon: Globe,
    title: "Multilingual & Multi-Modal",
    description:
      "Support for multiple languages with automated translation, WhatsApp integration, and AI avatar chat interfaces.",
  },
  {
    icon: Database,
    title: "Smart Data Prepopulation",
    description:
      "Use unique identifiers like Aadhaar and phone numbers to pre-fill known data fields and reduce respondent burden.",
  },
  {
    icon: CheckCircle,
    title: "Real-Time Validation",
    description:
      "Built-in AI rules detect inconsistent responses and auto-code text/categorical responses using standard classifications.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Optimized for smartphones with offline capabilities and GPS coordinate capture for field surveys.",
  },
  {
    icon: BarChart3,
    title: "Quality Dashboard",
    description:
      "Monitor survey progress, data quality, and enumerator performance with real-time analytics and flagging.",
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description: "End-to-end encryption, data minimization principles, and comprehensive consent management built-in.",
  },
  {
    icon: MessageSquare,
    title: "Natural Language Prompts",
    description: "Generate survey forms using natural language descriptions and access standardized question banks.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-work-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Powerful Features for Modern Data Collection
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to conduct efficient, accurate, and inclusive surveys at scale.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="glass-card border-border/50 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-work-sans text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
