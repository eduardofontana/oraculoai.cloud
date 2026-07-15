import { NextRequest } from "next/server"
import { contactSchema } from "@/lib/forms"
import { handleFormSubmission } from "@/lib/api-helpers"

export async function POST(request: NextRequest) {
  return handleFormSubmission(request, contactSchema, "contact", (data) => {
    const { nome, email, telefone, assunto, mensagem } = data
    return {
      to_name: "Equipe OráculoAI",
      from_name: nome,
      from_email: email,
      telefone: telefone || "Não informado",
      assunto,
      mensagem,
      message: `Nova mensagem de ${nome} - ${assunto}`,
    }
  })
}
