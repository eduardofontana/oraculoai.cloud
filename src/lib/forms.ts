import { z } from "zod"

const emptyToUndefined = (value: unknown) => {
  if (typeof value !== "string") return value
  const trimmed = value.trim()
  return trimmed.length > 0 ? trimmed : undefined
}

const text = (min: number, max: number, message: string) =>
  z.string().trim().min(min, message).max(max, `Use até ${max} caracteres.`)

export const honeypotSchema = z.object({
  website: z.preprocess(emptyToUndefined, z.string().max(200).optional()),
})

export const diagnosisSchema = honeypotSchema.extend({
  nome: text(2, 100, "Informe seu nome."),
  email: z.string().trim().email("Informe um e-mail válido.").max(200, "Use até 200 caracteres."),
  telefone: z.string().trim().regex(/^\+?[\d\s().-]{10,20}$/, "Informe um telefone com DDD.").max(20, "Revise o telefone informado."),
  empresa: text(2, 100, "Informe o nome do negócio."),
  segmento: text(1, 80, "Escolha um segmento."),
  funcionarios: text(1, 80, "Escolha o tamanho da equipe."),
  desafio: text(10, 5000, "Conte um pouco mais sobre o desafio."),
})

export const contactSchema = honeypotSchema.extend({
  nome: text(2, 100, "Informe seu nome."),
  email: z.string().trim().email("Informe um e-mail válido.").max(200, "Use até 200 caracteres."),
  telefone: z.preprocess(emptyToUndefined, z.string().trim().regex(/^\+?[\d\s().-]{10,20}$/, "Revise o telefone informado.").max(20).optional()),
  assunto: text(2, 140, "Informe o assunto."),
  mensagem: text(10, 5000, "Escreva uma mensagem com pelo menos 10 caracteres."),
})

export type DiagnosisFormInput = z.input<typeof diagnosisSchema>
export type DiagnosisFormData = z.output<typeof diagnosisSchema>
export type ContactFormInput = z.input<typeof contactSchema>
export type ContactFormData = z.output<typeof contactSchema>

export function getClientIp(headers: Headers) {
  const forwarded = headers.get("x-forwarded-for")?.split(",")[0]?.trim()
  return forwarded || headers.get("x-real-ip") || "unknown"
}

const buckets = new Map<string, { count: number; resetAt: number }>()

export function isRateLimited(key: string, limit = 5, windowMs = 10 * 60 * 1000) {
  const now = Date.now()
  const bucket = buckets.get(key)
  if (!bucket || bucket.resetAt < now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs })
    return false
  }
  bucket.count += 1
  return bucket.count > limit
}
