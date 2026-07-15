import type { Metadata } from "next"
import Link from "next/link"
import { LegalDocument } from "@/components/legal/LegalDocument"

export const metadata: Metadata = { title: "Termos de Uso", description: "Condições para utilização do site OráculoAI." }

export default function TermsPage() {
  return <LegalDocument label="Condições" title="Termos de Uso" description="Regras básicas para navegar, enviar informações e interpretar o conteúdo deste site.">
    <h2>1. Finalidade do site</h2><p>O site apresenta a abordagem da OráculoAI e permite solicitar contato ou diagnóstico inicial. O conteúdo é informativo e não constitui proposta comercial definitiva.</p>
    <h2>2. Exemplos e simulações</h2><p>Mapas, fluxos e cenários apresentados são ilustrações. Resultados, integrações, prazo e investimento dependem de avaliação e acordo específicos.</p>
    <h2>3. Responsabilidade do usuário</h2><p>Ao enviar um formulário, forneça informações legítimas e evite incluir dados sensíveis ou informações de terceiros sem autorização.</p>
    <h2>4. Propriedade intelectual</h2><p>Marca, textos, interfaces e elementos visuais pertencem aos respectivos titulares e não podem ser reproduzidos comercialmente sem autorização.</p>
    <h2>5. Disponibilidade</h2><p>O site pode passar por manutenção ou apresentar indisponibilidade temporária. Não há garantia de operação ininterrupta de integrações externas.</p>
    <h2>6. Privacidade</h2><p>O tratamento de dados é descrito na <Link href="/privacidade">Política de Privacidade</Link>.</p>
    <h2>7. Contato</h2><p>Dúvidas sobre estes termos podem ser enviadas pelo <Link href="/contato">formulário de contato</Link>.</p>
  </LegalDocument>
}
