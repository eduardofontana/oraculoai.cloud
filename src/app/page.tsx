import dynamic from "next/dynamic"
import { Hero } from "@/components/sections/Hero"
import { HomeSections } from "@/components/sections/HomeSections"

const DiagnosisForm = dynamic(() =>
  import("@/components/forms/DiagnosisForm").then((module) => module.DiagnosisForm),
)

export default function Home() {
  return (
    <>
      <Hero />
      <HomeSections />
      <DiagnosisForm />
    </>
  )
}
