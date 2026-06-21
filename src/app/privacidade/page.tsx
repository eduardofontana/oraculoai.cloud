import type { Metadata } from "next"
import { Shield } from "lucide-react"
import { AdBanner } from "@/components/ads/AdBanner"

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de Privacidade da OráculoAI em conformidade com a LGPD. Saiba como tratamos seus dados pessoais.",
}

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0F172A]">
      <div className="container-main py-16 sm:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
              LGPD
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0A2540] dark:text-white mb-4">
            Política de Privacidade
          </h1>
          <p className="text-sm text-gray-400 mb-8">
            Última atualização: junho de 2026
          </p>

          <AdBanner slot="legal_top" format="horizontal" className="mb-8" />

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            <p>
              A <strong>OráculoAI</strong> valoriza a privacidade e a proteção de dados pessoais dos seus usuários e clientes. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e compartilhamos suas informações, em conformidade com a <strong>Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018)</strong>.
            </p>

            <h2 className="text-xl font-bold text-[#0A2540] dark:text-white mt-8 mb-3">1. Dados que Coletamos</h2>
            <p>Podemos coletar os seguintes dados pessoais:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Dados de identificação:</strong> nome completo, e-mail, telefone/WhatsApp, nome da empresa.</li>
              <li><strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas, tempo de visita, origem do tráfego.</li>
              <li><strong>Dados de preferência:</strong> segmento de atuação, número de funcionários, desafios do negócio (via formulário de diagnóstico).</li>
              <li><strong>Dados de comunicação:</strong> mensagens trocadas via chatbot, WhatsApp e formulários de contato.</li>
              <li><strong>Cookies e tecnologias similares:</strong> conforme detalhado em nossa <a href="/cookies" className="text-purple-600 dark:text-purple-400 underline">Política de Cookies</a>.</li>
            </ul>

            <h2 className="text-xl font-bold text-[#0A2540] dark:text-white mt-8 mb-3">2. Finalidade do Tratamento</h2>
            <p>Utilizamos seus dados para as seguintes finalidades:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Prestar os serviços contratados (automação, chatbots, consultoria).</li>
              <li>Realizar diagnóstico gratuito e enviar propostas personalizadas.</li>
              <li>Entrar em contato para atendimento, suporte e follow-up comercial.</li>
              <li>Melhorar a experiência de navegação e personalizar conteúdo.</li>
              <li>Exibir anúncios relevantes (Google AdSense), mediante consentimento.</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>

            <h2 className="text-xl font-bold text-[#0A2540] dark:text-white mt-8 mb-3">3. Base Legal para o Tratamento</h2>
            <p>As bases legais que fundamentam o tratamento dos seus dados, conforme a LGPD, incluem:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Consentimento (art. 7º, I):</strong> para cookies analíticos e de marketing, e para comunicação comercial.</li>
              <li><strong>Execução de contrato (art. 7º, V):</strong> para prestação dos serviços contratados.</li>
              <li><strong>Legítimo interesse (art. 7º, IX):</strong> para melhoria dos serviços e segurança do site.</li>
              <li><strong>Cumprimento de obrigação legal (art. 7º, II):</strong> para atender exigências legais e regulatórias.</li>
            </ul>

            <h2 className="text-xl font-bold text-[#0A2540] dark:text-white mt-8 mb-3">4. Compartilhamento de Dados</h2>
            <p>Compartilhamos seus dados apenas com terceiros estritamente necessários para a operação dos serviços:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Google LLC:</strong> para exibição de anúncios (AdSense) e analytics, mediante seu consentimento.</li>
              <li><strong>EmailJS:</strong> para envio de formulários de contato e diagnóstico.</li>
              <li><strong>Vercel Inc.:</strong> hospedagem do site e analytics de performance.</li>
              <li><strong>Hostinger:</strong> serviços de hospedagem contratados por nossos clientes.</li>
            </ul>
            <p>Não vendemos seus dados pessoais para terceiros.</p>

            <h2 className="text-xl font-bold text-[#0A2540] dark:text-white mt-8 mb-3">5. Direitos do Titular (LGPD)</h2>
            <p>Você tem os seguintes direitos garantidos pela LGPD:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Confirmação e acesso:</strong> saber se tratamos seus dados e acessá-los.</li>
              <li><strong>Correção:</strong> solicitar a correção de dados incompletos, inexatos ou desatualizados.</li>
              <li><strong>Anonimização, bloqueio ou eliminação:</strong> solicitar a anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade com a LGPD.</li>
              <li><strong>Portabilidade:</strong> solicitar a portabilidade dos dados a outro fornecedor de serviço.</li>
              <li><strong>Eliminação:</strong> solicitar a eliminação dos dados tratados com seu consentimento.</li>
              <li><strong>Informação:</strong> ser informado sobre o compartilhamento de dados com entidades públicas e privadas.</li>
              <li><strong>Revogação do consentimento:</strong> revogar seu consentimento a qualquer tempo.</li>
              <li><strong>Oposição:</strong> opor-se ao tratamento com base em legítimo interesse.</li>
            </ul>
            <p>
              Para exercer seus direitos, entre em contato pelo e-mail{" "}
              <a href="mailto:oraculoai@proton.me" className="text-purple-600 dark:text-purple-400 underline">oraculoai@proton.me</a>.
              Responderemos em até 15 dias úteis.
            </p>

            <h2 className="text-xl font-bold text-[#0A2540] dark:text-white mt-8 mb-3">6. Segurança dos Dados</h2>
            <p>
              Adotamos medidas técnicas e organizacionais para proteger seus dados pessoais contra acesso não autorizado, destruição, perda, alteração ou qualquer forma de tratamento inadequado, incluindo criptografia SSL/TLS, firewalls, controle de acesso e backups regulares.
            </p>

            <h2 className="text-xl font-bold text-[#0A2540] dark:text-white mt-8 mb-3">7. Armazenamento e Retenção</h2>
            <p>
              Seus dados são armazenados em servidores seguros e mantidos pelo tempo necessário para cumprir as finalidades descritas nesta política, ou pelo período exigido por lei. Após esse período, os dados são eliminados ou anonimizados.
            </p>

            <h2 className="text-xl font-bold text-[#0A2540] dark:text-white mt-8 mb-3">8. Cookies</h2>
            <p>
              Utilizamos cookies e tecnologias similares para melhorar sua experiência. Para mais informações sobre os tipos de cookies que usamos e como gerenciá-los, consulte nossa{" "}
              <a href="/cookies" className="text-purple-600 dark:text-purple-400 underline">Política de Cookies</a>.
            </p>

            <h2 className="text-xl font-bold text-[#0A2540] dark:text-white mt-8 mb-3">9. Transferência Internacional de Dados</h2>
            <p>
              Alguns de nossos parceiros (como Google e Vercel) podem estar localizados em países com legislação de proteção de dados diferente da brasileira. Nesses casos, adotamos cláusulas contratuais padrão e outras garantias para assegurar a proteção adequada dos seus dados.
            </p>

            <h2 className="text-xl font-bold text-[#0A2540] dark:text-white mt-8 mb-3">10. Alterações nesta Política</h2>
            <p>
              Esta política pode ser atualizada periodicamente. Recomendamos que você a revise regularmente. Em caso de mudanças significativas, notificaremos os usuários cadastrados por e-mail.
            </p>

            <AdBanner slot="legal_bottom" format="horizontal" className="my-8" />

            <h2 className="text-xl font-bold text-[#0A2540] dark:text-white mt-8 mb-3">11. Contato do Encarregado (DPO)</h2>
            <p>
              Caso tenha dúvidas sobre esta política ou queira exercer seus direitos, entre em contato com nosso Encarregado de Proteção de Dados (DPO):
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
