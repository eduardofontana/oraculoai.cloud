import type { Metadata } from "next"
import { ContactContent } from "./ContactContent"

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a OráculoAI. Tire dúvidas, solicite um orçamento ou agende uma conversa sobre IA para seu negócio.",
  openGraph: {
    title: "Contato — OráculoAI",
    description:
      "Fale com a OráculoAI. WhatsApp, email ou formulário. Estamos prontos para transformar seu negócio com IA.",
  },
}

export default function ContatoPage() {
  return <ContactContent />
}
