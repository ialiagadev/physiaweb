import Hero from "@/components/hero"
import ComparisonSection from "@/components/comparison-section"
import BenefitsSection from "@/components/benefits-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ComparisonSection />
      <BenefitsSection />

    </main>
  )
}

