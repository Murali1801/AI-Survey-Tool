import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full glass-card px-4 py-2 text-sm font-medium">
            <Sparkles className="mr-2 h-4 w-4 text-primary" />
            AI-Powered Survey Technology
          </div>

          {/* Headline */}
          <h1 className="font-work-sans text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Transform Data Collection with{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AI Intelligence
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            Build smarter surveys with no-code interfaces, adaptive questioning, and real-time validation. Perfect for
            government agencies and enterprises requiring reliable data collection.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="glass-card px-8 py-3 text-lg bg-transparent">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16">
            <p className="text-sm font-medium text-muted-foreground">Trusted by Government Agencies</p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 opacity-60">
              <div className="glass-card px-6 py-3 text-sm font-medium text-center">Ministry of Statistics</div>
              <div className="glass-card px-6 py-3 text-sm font-medium text-center">Digital India Initiative</div>
              <div className="glass-card px-6 py-3 text-sm font-medium text-center">National Sample Survey</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
