import type { Metadata } from "next"
import { AboutContent } from "./AboutContent"

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça a forma como a OráculoAI desenha automações responsáveis para pequenos negócios.",
}

export default function SobrePage() { return <AboutContent /> }
