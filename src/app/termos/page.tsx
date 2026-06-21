import type { Metadata } from "next"
import { Scale } from "lucide-react"
import { AdBanner } from "@/components/ads/AdBanner"

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos e condições de uso do site e serviços da OráculoAI.",
}

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0F172A]">
      <div className="container-main py-16 sm:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center">
              <Scale className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
              Legal
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0A2540] dark:text-white mb-4">
            Termos de Uso
          </h1>
          <p className="text-sm text-gray-400 mb-8">
            Última atualização: junho de 2026
          </p>

          <AdBanner slot="legal_top" format="horizontal" className="mb-8" />

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            <p>
              Ao acessar e utilizar o site da <strong>OráculoAI</strong> (doravante &ldquo;nós&rdquo;, &ldquo;nosso&rdquo; ou &ldquo;plataforma&rdquo;), você concorda com os termos e condições descritos abaixo. Se você não concordar com qualquer parte destes termos, não utilize nossos serviços.
            </p>

            <h2 className="text-xl font-bold text-[#0A2540] dark:text-white mt-8 mb-3">1. Definições</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Plataforma:</strong> site oraculoai.cloud e todos os seus subdomínios.</li>
              <li><strong>Usuário:</strong> qualquer pessoa que acesse a plataforma.</li>
              <li><strong>Cliente:</strong> usuário que contrata os serviços da OráculoAI.</li>
              <li><strong>Serviços:</strong> chatbots, agentes de IA, consultoria, segurança digital, sites e ecossistema digital oferecidos pela OráculoAI.</li>
            </ul>

            <h2 className="text-xl font-bold text-[#0A2540] dark:text-white mt-8 mb-3">2. Aceitação dos Termos</h2>
            <p>
              Ao utilizar nossa plataforma, você declara ter lido, compreendido e aceitado estes Termos de Uso, bem como nossa{" "}
              <a href="/privacidade" className="text-purple-600 dark:text-purple-400 underline">Política de Privacidade</a> e{" "}
              <a href="/cookies" className="text-purple-600 dark:text-purple-400 underline">Política de Cookies</a>.
            </p>

            <h2 className="text-xl font-bold text-[#0A2540] dark:text-white mt-8 mb-3">3. Serviços Oferecidos</h2>
            <p>
              A OráculoAI oferece soluções de inteligência artificial para pequenos negócios, incluindo:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Automação de atendimento com chatbots para WhatsApp, Instagram e site.</li>
              <li>Agentes de IA para tarefas complexas.</li>
              <li>Consultoria em IA personalizada.</li>
              <li>Segurança digital e adequação à LGPD.</li>
              <li>Criação de sites profissionais.</li>
              <li>Ecossistema digital completo com hospedagem Hostinger.</li>
            </ul>
            <p>
              Os detalhes de cada serviço, incluindo escopo, prazos e valores, são definidos em proposta comercial e contrato de prestação de serviços específico.
            </p>

            <h2 className="text-xl font-bold text-[#0A2540] dark:text-white mt-8 mb-3">4. Contratação e Pagamento</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Os planos e preços estão descritos no site e podem ser alterados sem aviso prévio, respeitando as condições vigentes no momento da contratação.</li>
              <li>O pagamento é processado através das formas indicadas no momento da contratação.</li>
              <li>Os planos são de assinatura mensal, com cancelamento permitido a qualquer momento, sem multa.</li>
              <li>Em caso de inadimplência, os serviços poderão ser suspensos após 15 dias de atraso.</li>
            </ul>

            <h2 className="text-xl font-bold text-[#0A2540] dark:text-white mt-8 mb-3">5. Obrigações do Usuário</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Fornecer informações verdadeiras, precisas e atualizadas.</li>
              <li>Não utilizar a plataforma para atividades ilegais ou não autorizadas.</li>
              <li>Não violar direitos de propriedade intelectual da OráculoAI ou de terceiros.</li>
              <li>Não tentar acessar áreas restritas da plataforma sem autorização.</li>
              <li>Não enviar spam, malware ou qualquer conteúdo malicioso através da plataforma.</li>
            </ul>

            <h2 className="text-xl font-bold text-[#0A2540] dark:text-white mt-8 mb-3">6. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo da plataforma (textos, imagens, logotipos, códigos, designs, marcas) é de propriedade exclusiva da OráculoAI ou de seus licenciadores, protegido por leis de propriedade intelectual. É proibida a reprodução, distribuição ou modificação sem autorização prévia por escrito.
            </p>

            <h2 className="text-xl font-bold text-[#0A2540] dark:text-white mt-8 mb-3">7. Limitação de Responsabilidade</h2>
            <p>
              A OráculoAI empreende os melhores esforços para garantir a disponibilidade e funcionalidade da plataforma, mas não se responsabiliza por:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Interrupções temporárias devidas a manutenção, falhas técnicas ou casos fortuitos.</li>
              <li>Danos decorrentes do uso inadequado dos serviços pelo usuário.</li>
              <li>Conteúdo compartilhado por usuários em interações com chatbots ou formulários.</li>
              <li>Perdas indiretas ou lucros cessantes, exceto quando previsto em lei.</li>
            </ul>

            <h2 className="text-xl font-bold text-[#0A2540] dark:text-white mt-8 mb-3">8. Cancelamento e Rescisão</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>O cliente pode cancelar sua assinatura a qualquer momento, sem multa.</li>
              <li>A OráculoAI pode rescindir o contrato em caso de violação destes termos, inadimplência ou conduta ilegal.</li>
              <li>Em caso de rescisão por parte da OráculoAI por violação dos termos, não haverá reembolso de valores já pagos.</li>
            </ul>

            <h2 className="text-xl font-bold text-[#0A2540] dark:text-white mt-8 mb-3">9. Privacidade e Proteção de Dados</h2>
            <p>
              O tratamento de dados pessoais é regido pela nossa{" "}
              <a href="/privacidade" className="text-purple-600 dark:text-purple-400 underline">Política de Privacidade</a>, em conformidade com a LGPD. Ao utilizar nossos serviços, você consente com o tratamento dos seus dados conforme descrito na referida política.
            </p>

            <h2 className="text-xl font-bold text-[#0A2540] dark:text-white mt-8 mb-3">10. Disposições Gerais</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Estes termos são regidos pela legislação brasileira.</li>
              <li>Fica eleito o foro da cidade de São Paulo, SP, para dirimir quaisquer controvérsias.</li>
              <li>Estes termos podem ser alterados a qualquer momento, mediante comunicação aos usuários.</li>
              <li>Se qualquer cláusula for considerada inválida, as demais permanecem em vigor.</li>
            </ul>

            <AdBanner slot="legal_bottom" format="horizontal" className="my-8" />

            <h2 className="text-xl font-bold text-[#0A2540] dark:text-white mt-8 mb-3">11. Contato</h2>
            <p>
              Para dúvidas sobre estes Termos de Uso, entre em contato:
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
