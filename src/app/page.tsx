import { Hero } from "@/components/sections/Hero"
import { PoweredBy } from "@/components/sections/PoweredBy"
import dynamic from "next/dynamic"

const Problems = dynamic(() => import("@/components/sections/Problems").then((m) => m.Problems))
const Services = dynamic(() => import("@/components/sections/Services").then((m) => m.Services))
const HowItWorks = dynamic(() => import("@/components/sections/HowItWorks").then((m) => m.HowItWorks))
const Results = dynamic(() => import("@/components/sections/Results").then((m) => m.Results))
const WhyUs = dynamic(() => import("@/components/sections/WhyUs").then((m) => m.WhyUs))
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then((m) => m.Testimonials))
const DiagnosisForm = dynamic(() => import("@/components/forms/DiagnosisForm").then((m) => m.DiagnosisForm))
const FAQSection = dynamic(() => import("@/components/sections/FAQ").then((m) => m.FAQSection))
const FinalCTA = dynamic(() => import("@/components/sections/FinalCTA").then((m) => m.FinalCTA))

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
