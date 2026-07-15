import type { Metadata } from "next"
import Link from "next/link"
import { LegalDocument } from "@/components/legal/LegalDocument"

export const metadata: Metadata = { title: "Política de Privacidade", description: "Como a OráculoAI trata dados pessoais e respeita a LGPD." }

export default function PrivacyPage() {
  return <LegalDocument label="LGPD" title="Política de Privacidade" description="Como coletamos, utilizamos e protegemos informações enviadas neste site.">
    <h2>1. Dados coletados</h2><p>Os formulários podem coletar nome, e-mail, telefone, empresa, segmento, tamanho da equipe e a descrição enviada pelo usuário. Dados técnicos básicos também podem ser processados pela infraestrutura de hospedagem.</p>
    <h2>2. Finalidades</h2><p>As informações são utilizadas para responder mensagens, analisar solicitações de diagnóstico, preparar contato comercial solicitado e manter a segurança do site.</p>
    <h2>3. Bases legais</h2><p>O tratamento pode se basear em consentimento, procedimentos preliminares relacionados a eventual contratação, legítimo interesse e cumprimento de obrigação legal, conforme aplicável.</p>
    <h2>4. Fornecedores</h2><p>O site utiliza Vercel para hospedagem e, mediante consentimento, analytics. O EmailJS é utilizado para encaminhar formulários quando as credenciais do serviço estão configuradas. Não vendemos dados pessoais nem utilizamos AdSense.</p>
    <h2>5. Retenção e segurança</h2><p>Dados são mantidos pelo período necessário para atender a finalidade informada e obrigações aplicáveis. Medidas técnicas e organizacionais compatíveis com o serviço são utilizadas para reduzir acesso indevido, perda e alteração.</p>
    <h2>6. Direitos do titular</h2><p>Você pode solicitar confirmação, acesso, correção, informação sobre compartilhamento, oposição ou eliminação quando cabível. Envie a solicitação pelo <Link href="/contato">formulário de contato</Link>.</p>
    <h2>7. Cookies</h2><p>Preferências e métricas opcionais são explicadas na <Link href="/cookies">Política de Cookies</Link>.</p>
    <h2>8. Atualizações</h2><p>Este texto pode ser atualizado quando serviços, fornecedores ou requisitos legais mudarem. A data da versão vigente aparece nesta página.</p>
  </LegalDocument>
}
