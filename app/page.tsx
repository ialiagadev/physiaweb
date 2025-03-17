import Hero from "@/components/hero"
import ComparisonSection from "@/components/comparison-section"
import BenefitsSection from "@/components/benefits-section"
import TestimonialsSection from "@/components/testimonial-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ComparisonSection />
      <BenefitsSection />
      <TestimonialsSection />

    </main>
  )
}

