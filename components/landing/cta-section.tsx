import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

const features = [
  "No setup fees or hidden costs",
  "24/7 technical support",
  "GDPR & SOC 2 compliant",
  "99.9% uptime guarantee",
]

export function CTASection() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-accent p-8 sm:p-16">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative mx-auto max-w-4xl text-center">
            <h2 className="font-work-sans text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Ready to Modernize Your Surveys?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 sm:text-xl">
              Join thousands of organizations already using our AI-powered platform to collect better data, faster.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/signup">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg bg-transparent"
                >
                  Sign In
                </Button>
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center justify-center sm:justify-start text-white/90">
                  <CheckCircle className="mr-2 h-5 w-5 text-white" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
