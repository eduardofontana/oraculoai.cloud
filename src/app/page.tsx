import { Hero } from "@/components/sections/Hero"
import { PoweredBy } from "@/components/sections/PoweredBy"
import { Problems } from "@/components/sections/Problems"
import { Services } from "@/components/sections/Services"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { Results } from "@/components/sections/Results"
import { WhyUs } from "@/components/sections/WhyUs"
import { Testimonials } from "@/components/sections/Testimonials"
import { FAQSection } from "@/components/sections/FAQ"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { DiagnosisForm } from "@/components/forms/DiagnosisForm"

export default function Home() {
  return (
    <>
      <Hero />
      <PoweredBy />
      <Problems />
      <Services />
      <HowItWorks />
      <Results />
      <WhyUs />
      <Testimonials />
      <DiagnosisForm />
      <FAQSection />
      <FinalCTA />
    </>
  )
}
