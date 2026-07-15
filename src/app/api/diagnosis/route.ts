import { NextRequest } from "next/server"
import { diagnosisSchema } from "@/lib/forms"
import { handleFormSubmission } from "@/lib/api-helpers"

export async function POST(request: NextRequest) {
  return handleFormSubmission(request, diagnosisSchema, "diagnosis", (data) => {
    const { nome, email, telefone, empresa, segmento, funcionarios, desafio } = data
    return {
      to_name: "Equipe OráculoAI",
      from_name: nome,
      from_email: email,
      telefone,
      empresa,
      segmento,
      funcionarios,
      desafio,
      message: `Nova solicitação de diagnóstico de ${nome} (${email}) - ${empresa}`,
    }
  })
}
