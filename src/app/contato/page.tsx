import type { Metadata } from "next"
import { ContactContent } from "./ContactContent"

export const metadata: Metadata = {
  title: "Contato",
  description: "Envie uma mensagem para a OráculoAI ou inicie um diagnóstico do seu negócio.",
}

export default function ContatoPage() { return <ContactContent /> }
