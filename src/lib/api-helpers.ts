import { NextRequest, NextResponse } from "next/server"
import type { ZodSchema } from "zod"
import { getClientIp, isRateLimited } from "@/lib/forms"

const ALLOWED_ORIGINS = ["https://oraculoai.cloud", "https://www.oraculoai.cloud"]

if (process.env.NODE_ENV !== "production") {
  ALLOWED_ORIGINS.push("http://localhost:3000")
}

export function validateOrigin(request: NextRequest): NextResponse | null {
  const origin = request.headers.get("origin")
  const referer = request.headers.get("referer")

  if (!origin && !referer) {
    return NextResponse.json({ error: "Origem não identificada" }, { status: 403 })
  }

  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    return NextResponse.json({ error: "Origem não autorizada" }, { status: 403 })
  }

  if (referer) {
    try {
      const refererUrl = new URL(referer)
      const refererOrigin = `${refererUrl.protocol}//${refererUrl.host}`
      if (!ALLOWED_ORIGINS.includes(refererOrigin)) {
        return NextResponse.json({ error: "Referência não autorizada" }, { status: 403 })
      }
    } catch {
      return NextResponse.json({ error: "Referência inválida" }, { status: 403 })
    }
  }

  return null
}

export function validateCsrfToken(request: NextRequest): NextResponse | null {
  const cookieToken = request.cookies.get("csrf_token")?.value
  const headerToken = request.headers.get("x-csrf-token")

  if (!cookieToken || !headerToken) {
    return NextResponse.json({ error: "Token CSRF ausente" }, { status: 403 })
  }

  if (cookieToken !== headerToken) {
    return NextResponse.json({ error: "Token CSRF inválido" }, { status: 403 })
  }

  return null
}

export function checkHoneypot(website: string | undefined): NextResponse | null {
  if (website) {
    return NextResponse.json({ success: true })
  }
  return null
}

export function checkRateLimit(prefix: string, request: NextRequest): NextResponse | null {
  const ip = getClientIp(request.headers)
  if (isRateLimited(`${prefix}:${ip}`)) {
    console.warn(`[SECURITY] Rate limit exceeded for ${prefix} from IP: ${ip}`)
    return NextResponse.json({ error: "Muitas tentativas. Tente novamente em alguns minutos." }, { status: 429 })
  }
  return null
}

function getEmailJsCredentials() {
  const serviceId = process.env.EMAILJS_SERVICE_ID
  const templateId = process.env.EMAILJS_TEMPLATE_ID
  const publicKey = process.env.EMAILJS_PUBLIC_KEY
  const privateKey = process.env.EMAILJS_PRIVATE_KEY

  if (!serviceId || !templateId || !publicKey || !privateKey) {
    return null
  }

  return { serviceId, templateId, publicKey, privateKey }
}

export async function sendEmail(templateParams: Record<string, string>): Promise<NextResponse> {
  const creds = getEmailJsCredentials()
  if (!creds) {
    console.error("[CONFIG] EmailJS credentials not configured")
    return NextResponse.json({ error: "Serviço de email não configurado" }, { status: 500 })
  }

  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: creds.serviceId,
      template_id: creds.templateId,
      user_id: creds.publicKey,
      accessToken: creds.privateKey,
      template_params: templateParams,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    console.error("[EMAILJS] Send failed:", errorText)
    return NextResponse.json({ error: "Erro ao enviar formulário" }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}

export async function handleFormSubmission<T extends { website?: string }>(
  request: NextRequest,
  schema: ZodSchema<T>,
  prefix: string,
  buildTemplateParams: (data: T) => Record<string, string>,
): Promise<NextResponse> {
  try {
    const originError = validateOrigin(request)
    if (originError) return originError

    const csrfError = validateCsrfToken(request)
    if (csrfError) return csrfError

    const parsed = schema.safeParse(await request.json())
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message || "Dados inválidos" }, { status: 400 })
    }

    const honeypotError = checkHoneypot(parsed.data.website)
    if (honeypotError) return honeypotError

    const rateLimitError = checkRateLimit(prefix, request)
    if (rateLimitError) return rateLimitError

    return await sendEmail(buildTemplateParams(parsed.data))
  } catch (error) {
    console.error(`[API] ${prefix} error:`, error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}
