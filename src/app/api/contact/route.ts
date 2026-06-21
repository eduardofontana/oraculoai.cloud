import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nome, email, telefone, assunto, mensagem } = body

    if (!nome || !email || !assunto || !mensagem) {
      return NextResponse.json({ error: "Todos os campos obrigatórios devem ser preenchidos" }, { status: 400 })
    }

    const templateParams = {
      to_name: "Equipe OráculoAI",
      from_name: nome,
      from_email: email,
      telefone: telefone || "Não informado",
      assunto,
      mensagem,
      message: `Nova mensagem de ${nome} - ${assunto}`,
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
    console.error("Contact API error:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}