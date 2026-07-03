import type { Metadata } from "next"
import { LegalDocument } from "@/components/legal/LegalDocument"

export const metadata: Metadata = { title: "Política de Cookies", description: "Entenda as preferências de cookies do site OráculoAI." }

export default function CookiesPage() {
  return <LegalDocument label="Preferências" title="Política de Cookies" description="Você escolhe se métricas opcionais podem ser ativadas.">
    <h2>1. O que são cookies</h2><p>Cookies são pequenos registros usados pelo navegador para guardar preferências e permitir determinadas funções do site.</p>
    <h2>2. Cookies necessários</h2><p>São usados para registrar sua escolha de privacidade e manter funções essenciais. Eles não podem ser desativados pelo painel do site.</p>
    <h2>3. Analytics opcional</h2><p>Quando autorizado, o Vercel Analytics ajuda a entender uso e desempenho de forma agregada. O componente só é carregado após consentimento.</p>
    <h2>4. Publicidade</h2><p>O site não carrega Google AdSense nem utiliza cookies para exibir anúncios personalizados.</p>
    <h2>5. Alterar a escolha</h2><p>A preferência é armazenada por 180 dias. Você pode apagar o cookie <code>oraculoai_consent</code> nas configurações do navegador para exibir o painel novamente.</p>
  </LegalDocument>
}
