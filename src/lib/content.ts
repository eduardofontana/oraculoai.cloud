export const BRAND = {
  name: "OráculoAI",
  description: "Automações e atendimentos com IA pensadas para freelancers e negócios enxutos.",
} as const

export const NAVIGATION = [
  { label: "Benefícios", href: "/#beneficios" },
  { label: "Soluções", href: "/#solucoes" },
  { label: "Processo", href: "/#processo" },
  { label: "Planos", href: "/#planos" },
  { label: "Dúvidas", href: "/#faq" },
] as const

export const SEGMENTS = [
  "Clínicas e consultórios",
  "Lojas e e-commerce",
  "Prestadores de serviço",
  "Escritórios e consultorias",
  "Restaurantes e delivery",
  "Profissionais autônomos",
] as const

export const BENEFITS = [
  { title: "Entrada organizada", description: "Cada mensagem vira contexto: origem, interesse, urgência e próximo passo sugerido." },
  { title: "Aprovação humana", description: "A IA prepara, mas decisões sensíveis ficam aguardando sua confirmação." },
  { title: "Agenda sem atrito", description: "Disponibilidade, lembretes e confirmações deixam de depender de troca manual." },
  { title: "Follow-up consistente", description: "Novos contatos não somem: o fluxo lembra, registra e avisa quando agir." },
  { title: "Operação visível", description: "Você enxerga o que está pendente, concluído e bloqueado por falta de informação." },
  { title: "Dados minimizados", description: "O projeto define o que a IA pode acessar, registrar e encaminhar." },
] as const

export const ROUTINES = [
  {
    title: "Atendimento inicial",
    before: "Mensagens espalhadas no WhatsApp e Instagram, com perguntas repetidas e respostas atrasadas.",
    after: "A IA identifica intenção, coleta dados mínimos e deixa o atendimento pronto para uma pessoa assumir.",
    output: "Triagem com contexto",
  },
  {
    title: "Agendamento",
    before: "Você confere agenda, manda horários, espera resposta e precisa lembrar de confirmar.",
    after: "O fluxo sugere horários, registra preferência, dispara lembrete e sinaliza conflitos.",
    output: "Agenda confirmada",
  },
  {
    title: "Follow-up comercial",
    before: "Novos contatos esfriam porque ninguém lembra quem pediu retorno ou qual era o interesse.",
    after: "Cada oportunidade ganha status, resumo e próxima ação com prazo.",
    output: "Próxima ação clara",
  },
  {
    title: "Conteúdo e respostas",
    before: "Posts, mensagens e respostas começam do zero toda vez.",
    after: "A IA monta rascunhos no tom da marca, com revisão humana antes de publicar ou enviar.",
    output: "Rascunho revisável",
  },
  {
    title: "Relatórios simples",
    before: "Informações ficam em conversas, planilhas e anotações que ninguém cruza.",
    after: "O painel mostra volume, pendências, origem dos contatos e gargalos da semana.",
    output: "Visão semanal",
  },
] as const

export const CONTROL_POINTS = [
  { title: "Limites da IA", description: "Definimos quais respostas ela pode dar sozinha e quais exigem aprovação." },
  { title: "Logs e rastreio", description: "A operação registra etapa, canal e motivo de cada encaminhamento importante." },
  { title: "LGPD na prática", description: "Coleta mínima, finalidade clara e dados sensíveis fora do fluxo quando não forem necessários." },
  { title: "Permissões por ferramenta", description: "Cada integração entra com acesso limitado ao que precisa executar." },
] as const

export const TRUST_CHECKLIST = [
  "Mapa do processo antes da ferramenta",
  "Teste com situações reais do seu atendimento",
  "Plano de reversão se uma integração falhar",
  "Mensagens revisadas no tom da marca",
  "Critérios de quando uma pessoa assume",
  "Resumo de dados usados pela automação",
] as const

export const PROCESS = [
  { number: "01", title: "Descobrir", description: "Entendemos sua rotina, os gargalos e o que não pode falhar.", tags: ["Diagnóstico", "Prioridades", "Mapa do processo"] },
  { number: "02", title: "Construir", description: "Desenhamos, conectamos e testamos a automação com situações reais.", tags: ["Protótipo", "Integrações", "Validação"] },
  { number: "03", title: "Colocar no ar", description: "Treinamos o uso, acompanhamos a operação e ajustamos o que for necessário.", tags: ["Implantação", "Acompanhamento", "Evolução"] },
] as const

export const INTEGRATIONS = ["WhatsApp", "Instagram", "E-mail", "Google Agenda", "Planilhas", "Formulários", "CRM", "Site"] as const

export const PLANS = [
  { name: "Essencial", description: "Para validar uma rotina crítica sem mexer na operação inteira.", fit: "1 fluxo prioritário", timing: "Implantação enxuta", features: ["Diagnóstico do processo", "Uma automação prioritária", "Mensagens e regras básicas", "Acompanhamento inicial"], highlight: false },
  { name: "Crescimento", description: "Para conectar atendimento, agenda e follow-up em uma operação acompanhável.", fit: "2 a 4 fluxos conectados", timing: "Evolução por etapas", features: ["Mapa de múltiplos fluxos", "Automações conectadas", "Painel de acompanhamento", "Ajustes após uso real"], highlight: true },
  { name: "Sob medida", description: "Para regras específicas, integrações avançadas ou agentes especializados.", fit: "Arquitetura personalizada", timing: "Escopo definido no diagnóstico", features: ["Integrações sob análise", "Regras e permissões", "Testes de exceção", "Suporte prioritário"], highlight: false },
] as const

export const EXPECTATIONS = [
  { title: "Menos trabalho repetitivo", description: "O objetivo é devolver tempo à rotina, sem prometer resultados que dependem de outros fatores." },
  { title: "Informação organizada", description: "Cada contato e tarefa chega com mais contexto para você tomar a próxima decisão." },
  { title: "Automação compreensível", description: "Você sabe quando a IA atua, quais dados utiliza e quando uma pessoa assume." },
  { title: "Implantação sem susto", description: "O fluxo começa pequeno, é testado com casos reais e evolui quando fizer sentido." },
] as const

export const CAPABILITIES = [
  { title: "Estratégia e processos", description: "Transformar problemas da rotina em fluxos claros e priorizados." },
  { title: "Automação e integrações", description: "Conectar canais e ferramentas sem criar uma operação frágil." },
  { title: "Experiência e conteúdo", description: "Criar conversas úteis, diretas e coerentes com a sua marca." },
  { title: "Dados e segurança", description: "Definir acessos, registros e limites adequados ao contexto do projeto." },
  { title: "Treinamento e adoção", description: "Preparar a equipe para usar, revisar e melhorar a automação no dia a dia." },
  { title: "Medição e evolução", description: "Acompanhar gargalos, ajustar regras e decidir próximos passos com evidências simples." },
] as const

export const FAQ_ITEMS = [
  { question: "Como vocês descobrem onde a IA pode ser usada?", answer: "Começamos pela rotina: tarefas que se repetem, informações que se perdem e etapas que atrasam o atendimento. A tecnologia só entra depois que o processo está claro." },
  { question: "Quais soluções a OráculoAI oferece?", answer: "Automação de tarefas, agentes de atendimento, organização de contatos, geração assistida de conteúdo, análise de dados e integrações entre ferramentas, sempre conforme o diagnóstico." },
  { question: "Por que não usar uma ferramenta pronta sozinho?", answer: "Ferramentas prontas ajudam, mas raramente conhecem suas regras, limites e exceções. Nosso trabalho é adaptar a solução à operação e evitar que a automação crie mais problemas do que resolve." },
  { question: "Como vocês tratam segurança e privacidade?", answer: "A solução considera minimização de dados, controle de acesso, registro das etapas e requisitos aplicáveis da LGPD. Os detalhes dependem das ferramentas escolhidas." },
  { question: "É possível integrar com o que eu já uso?", answer: "Muitas ferramentas permitem integração, mas a viabilidade precisa ser confirmada. O diagnóstico identifica APIs, permissões, custos externos e alternativas antes da proposta." },
] as const

export const LEGAL_NAVIGATION = [
  { label: "Privacidade", href: "/privacidade" },
  { label: "Termos", href: "/termos" },
  { label: "Cookies", href: "/cookies" },
] as const
