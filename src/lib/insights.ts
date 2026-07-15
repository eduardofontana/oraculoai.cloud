export type Insight = {
  slug: string
  category: string
  title: string
  excerpt: string
  publishedAt: string
  readingTime: string
  content: { heading: string; paragraphs: string[] }[]
}

export const INSIGHTS: Insight[] = [
  {
    slug: "automacao-para-autonomos",
    category: "Guia",
    title: "Automação para autônomos: por onde começar sem complicar",
    excerpt: "Um caminho prático para recuperar tempo sem transformar sua rotina em um projeto de tecnologia.",
    publishedAt: "23 jun. 2026",
    readingTime: "5 min",
    content: [
      { heading: "Comece pelo que mais se repete", paragraphs: ["Automação não precisa começar com um sistema grande. Para quem trabalha sozinho, a melhor primeira oportunidade costuma ser uma tarefa simples que acontece muitas vezes: confirmar horários, responder dúvidas iniciais ou registrar novos contatos.", "Anote durante uma semana o que você faz de forma quase idêntica. Frequência, tempo gasto e risco de erro ajudam a escolher a prioridade."] },
      { heading: "Mantenha as decisões importantes com você", paragraphs: ["Uma boa automação organiza dados e prepara o próximo passo. Negociação, situações sensíveis e exceções continuam com uma pessoa.", "Defina claramente o que a IA pode responder, quando deve pedir mais informações e quando precisa encaminhar a conversa."] },
      { heading: "Valide antes de ampliar", paragraphs: ["Teste o fluxo com poucos casos reais, acompanhe as falhas e ajuste a linguagem. Só depois conecte novas etapas.", "Começar pequeno torna o investimento mais previsível e deixa evidente se a automação realmente está devolvendo tempo."] },
    ],
  },
  {
    slug: "atendimento-com-ia-pequenos-negocios",
    category: "Atendimento",
    title: "Atendimento com IA para pequenos negócios: o que automatizar",
    excerpt: "Como responder mais rápido sem perder contexto, cuidado ou controle sobre a conversa.",
    publishedAt: "23 jun. 2026",
    readingTime: "6 min",
    content: [
      { heading: "A IA funciona melhor na primeira etapa", paragraphs: ["Perguntas frequentes, coleta de dados e classificação inicial são tarefas previsíveis. A IA pode cuidar dessa entrada e entregar o contato organizado para a equipe.", "Isso reduz tempo de espera sem fingir que toda conversa pode ser resolvida automaticamente."] },
      { heading: "Contexto vale mais do que velocidade", paragraphs: ["Responder em segundos não ajuda quando a resposta está errada. A base de informações precisa estar atualizada e o agente deve reconhecer quando não sabe.", "Horários, políticas, serviços e limites devem ter uma fonte clara e responsável por atualização."] },
      { heading: "Crie uma saída humana", paragraphs: ["Todo fluxo precisa oferecer um caminho simples para falar com uma pessoa. O histórico e os dados já coletados devem acompanhar o encaminhamento.", "A automação melhora a experiência quando evita repetição, não quando cria uma barreira."] },
    ],
  },
  {
    slug: "primeiro-processo-para-automatizar",
    category: "Estratégia",
    title: "Como escolher o primeiro processo para automatizar",
    excerpt: "Quatro critérios para priorizar uma automação útil, segura e possível de manter.",
    publishedAt: "23 jun. 2026",
    readingTime: "4 min",
    content: [
      { heading: "Frequência e esforço", paragraphs: ["Uma tarefa diária de dez minutos pode consumir mais tempo no mês do que uma atividade longa que acontece raramente. Meça frequência e duração antes de priorizar.", "Procure também interrupções: tarefas pequenas que quebram a concentração têm um custo maior do que parecem."] },
      { heading: "Regras claras", paragraphs: ["Processos com entradas conhecidas e decisões consistentes são melhores candidatos. Quando cada caso exige julgamento diferente, a IA pode ajudar a organizar, mas não deve decidir sozinha."] },
      { heading: "Dados disponíveis e risco", paragraphs: ["A automação precisa encontrar as informações necessárias em uma fonte confiável. Também é importante avaliar o impacto de um erro.", "Comece por um fluxo reversível, fácil de acompanhar e com uma pessoa responsável pelas exceções."] },
      { heading: "Resultado observável", paragraphs: ["Defina como reconhecer a melhora: menos tempo de resposta, menos registros incompletos ou menos tarefas esquecidas. Sem um sinal observável, fica difícil saber se vale ampliar."] },
    ],
  },
]

export function getInsight(slug: string) {
  return INSIGHTS.find((insight) => insight.slug === slug)
}
