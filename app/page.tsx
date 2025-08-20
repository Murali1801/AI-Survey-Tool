import { GlasmorphismHeader } from "@/components/glassmorphism-header"
import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { BenefitsSection } from "@/components/landing/benefits-section"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <GlasmorphismHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
