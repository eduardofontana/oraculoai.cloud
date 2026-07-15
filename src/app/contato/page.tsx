import type { Metadata } from "next"
import dynamic from "next/dynamic"

const ContactContent = dynamic(() =>
  import("./ContactContent").then((m) => m.ContactContent),
)

export const metadata: Metadata = {
  title: "Contato",
  description: "Envie uma mensagem para a OráculoAI ou inicie um diagnóstico do seu negócio.",
}

export default function ContatoPage() { return <ContactContent /> }
