import type { Metadata } from "next"
import { Cookie } from "lucide-react"
import { AdBanner } from "@/components/ads/AdBanner"

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Saiba como utilizamos cookies e tecnologias similares no site da OráculoAI.",
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0F172A]">
      <div className="container-main py-16 sm:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center">
              <Cookie className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
              Cookies
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0A2540] dark:text-white mb-4">
            Política de Cookies
          </h1>
          <p className="text-sm text-gray-400 mb-8">
            Última atualização: junho de 2026
          </p>

          <AdBanner slot="legal_top" format="horizontal" className="mb-8" />

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            <p>
              Esta Política de Cookies explica o que são cookies, como utilizamos essas tecnologias no site da <strong>OráculoAI</strong> e como você pode gerenciá-las.
            </p>

            <h2 className="text-xl font-bold text-[#0A2540] dark:text-white mt-8 mb-3">1. O que são Cookies?</h2>
            <p>
              Cookies são pequenos arquivos de texto armazenados no seu navegador quando você visita um site. Eles permitem que o site reconheça seu dispositivo e lembre de suas preferências, melhorando sua experiência de navegação.
            </p>

            <h2 className="text-xl font-bold text-[#0A2540] dark:text-white mt-8 mb-3">2. Tipos de Cookies que Utilizamos</h2>

            <div className="space-y-4 mt-4">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                <h3 className="font-bold text-[#0A2540] dark:text-white">Necessários</h3>
                <p className="text-xs text-gray-500 mt-1">Sempre ativos</p>
                <p className="text-sm mt-2">
                  Essenciais para o funcionamento do site. Sem eles, o site não funciona corretamente. Incluem cookies de sessão, preferência de tema (claro/escuro) e consentimento de cookies.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                <h3 className="font-bold text-[#0A2540] dark:text-white">Analytics</h3>
                <p className="text-xs text-gray-500 mt-1">Requerem consentimento</p>
                <p className="text-sm mt-2">
                  Utilizamos o <strong>Vercel Analytics</strong> para entender como os visitantes interagem com o site, quais páginas são mais acessadas e identificar possíveis problemas de desempenho. Os dados são anônimos e não permitem identificação pessoal.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                <h3 className="font-bold text-[#0A2540] dark:text-white">Marketing</h3>
                <p className="text-xs text-gray-500 mt-1">Requerem consentimento</p>
                <p className="text-sm mt-2">
                  Utilizamos o <strong>Google AdSense</strong> para exibir anúncios relevantes para você. O Google pode usar cookies para personalizar anúncios com base em sua navegação. Consulte a{" "}
                  <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 underline">Política de Publicidade do Google</a> para mais informações.
                </p>
              </div>
            </div>

            <h2 className="text-xl font-bold text-[#0A2540] dark:text-white mt-8 mb-3">3. Cookies de Terceiros</h2>
            <p>Além dos cookies próprios, utilizamos cookies de terceiros confiáveis:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Google AdSense</strong> — Cookies de publicidade para exibir anúncios relevantes.{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 underline">Política de Privacidade do Google</a>
              </li>
              <li>
                <strong>Vercel Analytics</strong> — Cookies de análise de tráfego anônimos.{" "}
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 underline">Política de Privacidade da Vercel</a>
              </li>
              <li>
                <strong>EmailJS</strong> — Cookies necessários para o funcionamento do formulário de contato.{" "}
                <a href="https://www.emailjs.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 underline">Política de Privacidade do EmailJS</a>
              </li>
            </ul>

            <h2 className="text-xl font-bold text-[#0A2540] dark:text-white mt-8 mb-3">4. Como Gerenciar Cookies</h2>
            <p>Você pode gerenciar suas preferências de cookies de duas formas:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>Através do banner de cookies:</strong> Ao acessar o site pela primeira vez, um banner permite que você aceite todos os cookies, recuse todos ou personalize suas preferências por categoria.
              </li>
              <li>
                <strong>Nas configurações do navegador:</strong> A maioria dos navegadores permite bloquear ou excluir cookies. Consulte a documentação do seu navegador:
                <ul className="list-disc pl-6 mt-1">
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 underline">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/pt-BR/kb/gerencie-configuracoes-de-cookies-e-dados-de-sites" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 underline">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 underline">Safari</a></li>
                  <li><a href="https://support.microsoft.com/pt-br/microsoft-edge/excluir-cookies-no-microsoft-edge" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 underline">Microsoft Edge</a></li>
                </ul>
              </li>
            </ol>
            <p>
              A desativação de cookies pode afetar a funcionalidade de algumas partes do site.
            </p>

            <h2 className="text-xl font-bold text-[#0A2540] dark:text-white mt-8 mb-3">5. Consentimento</h2>
            <p>
              Ao clicar em &ldquo;Aceitar Todos&rdquo; no banner de cookies, você consente com o uso de todas as categorias de cookies. Você pode revogar seu consentimento a qualquer momento ajustando suas preferências ou configurando seu navegador para recusar cookies.
            </p>

            <h2 className="text-xl font-bold text-[#0A2540] dark:text-white mt-8 mb-3">6. Atualizações</h2>
            <p>
              Esta Política de Cookies pode ser atualizada periodicamente. Recomenda-se revisá-la regularmente. A data da última atualização está indicada no topo da página.
            </p>

            <AdBanner slot="legal_bottom" format="horizontal" className="my-8" />

            <h2 className="text-xl font-bold text-[#0A2540] dark:text-white mt-8 mb-3">7. Contato</h2>
            <p>
              Em caso de dúvidas sobre esta Política de Cookies, entre em contato:
            </p>
            <p className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 mt-2">
              <strong>E-mail:</strong>{" "}
              <a href="mailto:oraculoai@proton.me" className="text-purple-600 dark:text-purple-400 underline">oraculoai@proton.me</a>
              <br />
              <strong>WhatsApp:</strong>{" "}
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 underline">(11) 99999-9999</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
