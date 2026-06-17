import type { Metadata } from "next"
import { AboutContent } from "./AboutContent"

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Conheça a OráculoAI — agência de IA para pequenos negócios brasileiros. Nossa missão, visão, valores e o time por trás da transformação digital.",
  openGraph: {
    title: "Sobre a OráculoAI",
    description:
      "Conheça nossa história, missão e o time que está democratizando a IA para pequenos negócios no Brasil.",
  },
}

export default function SobrePage() {
  return <AboutContent />
}
