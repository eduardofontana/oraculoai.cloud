import { NextRequest, NextResponse } from "next/server"
import { diagnosisSchema, getClientIp, isRateLimited } from "@/lib/forms"

const ALLOWED_ORIGINS = ["https://oraculoai.cloud", "https://www.oraculoai.cloud", "http://localhost:3000"]

export async function POST(request: NextRequest) {
  try {
    const origin = request.headers.get("origin")
    if (origin && !ALLOWED_ORIGINS.includes(origin)) {
      return NextResponse.json({ error: "Origem não autorizada" }, { status: 403 })
    }

    const parsed = diagnosisSchema.safeParse(await request.json())
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message || "Dados inválidos" }, { status: 400 })
    }
    if (parsed.data.website) {
      return NextResponse.json({ success: true })
    }

    const ip = getClientIp(request.headers)
    if (isRateLimited(`diagnosis:${ip}`)) {
      return NextResponse.json({ error: "Muitas tentativas. Tente novamente em alguns minutos." }, { status: 429 })
    }

    const { nome, email, telefone, empresa, segmento, funcionarios, desafio } = parsed.data

    const templateParams = {
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

    const serviceId = process.env.EMAILJS_SERVICE_ID
    const templateId = process.env.EMAILJS_TEMPLATE_ID
    const publicKey = process.env.EMAILJS_PUBLIC_KEY
    const privateKey = process.env.EMAILJS_PRIVATE_KEY

    if (!serviceId || !templateId || !publicKey || !privateKey) {
      console.error("EmailJS credentials not configured")
      return NextResponse.json({ error: "Serviço de email não configurado" }, { status: 500 })
    }

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        accessToken: privateKey,
        template_params: templateParams,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("EmailJS error:", errorText)
      return NextResponse.json({ error: "Erro ao enviar formulário" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Diagnosis API error:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}
