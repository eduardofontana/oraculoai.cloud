import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const principles = [
  { code: "01", title: "Começar pelo processo", copy: "A ferramenta entra depois que a rotina, o gargalo e o resultado esperado estão claros." },
  { code: "02", title: "Explicar os limites", copy: "Automação confiável depende de regras, dados disponíveis e momentos definidos para intervenção humana." },
  { code: "03", title: "Construir para usar", copy: "A solução precisa caber na operação diária, não apenas funcionar em uma demonstração." },
  { code: "04", title: "Evoluir com evidência", copy: "O que acontece no uso real orienta ajustes, prioridades e próximos passos." },
]

export function AboutContent() {
  return (
    <>
      <header className="page-hero">
        <div className="container-main">
          <span className="eyebrow">Sobre a OráculoAI</span>
          <h1>Inteligência artificial com os pés na operação.</h1>
          <p>Nascemos para aproximar automação avançada da realidade de quem administra, atende, vende e resolve tudo ao mesmo tempo.</p>
        </div>
      </header>
      <section className="page-section">
        <div className="container-main page-grid">
          <h2>Menos fascínio pela ferramenta. Mais atenção ao trabalho.</h2>
          <div className="page-copy">
            <p>A OráculoAI desenha automações e agentes a partir de processos concretos. Isso significa observar onde a informação chega, quem decide, o que se repete e onde um erro teria impacto.</p>
            <p>Nosso papel é transformar esse mapa em uma solução compreensível: o que a IA faz, quais dados utiliza, quando precisa pedir ajuda e como a equipe acompanha o resultado.</p>
            <p>Não publicamos números, equipes ou cases sem comprovação. A confiança começa pelo que pode ser explicado.</p>
            <div className="principle-grid">
              {principles.map((principle) => <article className="principle-card" key={principle.code}><span>{principle.code}</span><h3>{principle.title}</h3><p>{principle.copy}</p></article>)}
            </div>
          </div>
        </div>
      </section>
      <section className="final-cta"><div className="container-main final-cta__inner"><span className="mono-label">CONVERSA COM CONTEXTO</span><h2>Seu processo pode ser o próximo mapa.</h2><p>O diagnóstico inicial ajuda a descobrir se existe uma oportunidade real de automação.</p><Link className="button button--primary" href="/#diagnostico">Iniciar diagnóstico <ArrowUpRight aria-hidden="true" /></Link></div></section>
    </>
  )
}
