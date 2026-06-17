export const SITE = {
  name: "OráculoAI",
  tagline: "IA que funciona de verdade para o seu pequeno negócio crescer",
  description: "Agência de IA para pequenos negócios e empreendedores brasileiros. Automação, chatbots, consultoria e ecossistema digital completo.",
  url: "https://oraculoai.cloud",
  whatsapp: "5511999999999",
  email: "contato@oraculoai.cloud",
  social: {
    instagram: "@oraculoai",
    linkedin: "oraculoai",
  },
} as const

export const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Cases", href: "/#cases" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
] as const

export const HERO = {
  headline: "IA que funciona de verdade para o seu pequeno negócio crescer",
  subheadline:
    "Automação inteligente, chatbots, consultoria em IA, segurança digital e ecossistema completo com Hostinger para transformar seu negócio.",
  ctaPrimary: "Fazer Diagnóstico Gratuito",
  ctaSecondary: "Conversar com o Oráculo IA",
  trustText: "Já atendemos mais de 50 pequenos negócios no Brasil",
} as const

export const PROBLEMS = {
  title: "Os desafios que seu negócio enfrenta todo dia",
  subtitle:
    "Sabemos como é difícil administrar tudo sozinho. Identificamos os gargalos que mais travam o crescimento de pequenos negócios.",
  items: [
    {
      icon: "Clock",
      title: "Falta de tempo",
      description:
        "Você passa horas respondendo perguntas repetitivas de clientes no WhatsApp e Instagram.",
    },
    {
      icon: "Users",
      title: "Perda de leads",
      description:
        "Sem atendimento 24h, você perde vendas enquanto dorme e nos finais de semana.",
    },
    {
      icon: "TrendingDown",
      title: "Custos operacionais altos",
      description:
        "Manter uma equipe de atendimento 24 horas é inviável para o seu orçamento atual.",
    },
    {
      icon: "BarChart3",
      title: "Dificuldade de escalar",
      description:
        "Seu negócio não cresce porque você está preso em tarefas operacionais repetitivas.",
    },
    {
      icon: "HardDrive",
      title: "Tecnologia defasada",
      description:
        "Seus concorrentes já usam automação e você ainda perde tempo com processos manuais.",
    },
    {
      icon: "Shield",
      title: "Falta de segurança",
      description:
        "Dados de clientes e sistemas vulneráveis — sem proteção adequada contra ameaças digitais.",
    },
  ],
} as const

export const SERVICES = {
  title: "Soluções completas para digitalizar seu negócio",
  subtitle:
    "Do atendimento ao cliente à segurança digital — um ecossistema integrado para sua empresa vender mais e trabalhar menos.",
  items: [
    {
      icon: "Bot",
      title: "Automação e Chatbots",
      description:
        "Chatbots inteligentes para WhatsApp, Instagram e Site. Atendimento 24h automático que qualifica leads e vende por você.",
      gradient: "from-purple-500 to-purple-700",
    },
    {
      icon: "Brain",
      title: "Agentes de IA",
      description:
        "Assistentes virtuais que executam tarefas complexas: agendamento, follow-up, emissão de relatórios e muito mais.",
      gradient: "from-blue-500 to-indigo-700",
    },
    {
      icon: "Lightbulb",
      title: "Consultoria em IA",
      description:
        "Diagnóstico personalizado para identificar onde a IA pode gerar mais impacto no seu negócio com resultados mensuráveis.",
      gradient: "from-violet-500 to-purple-700",
    },
    {
      icon: "ShieldCheck",
      title: "Segurança Digital",
      description:
        "Proteção de dados, backup automatizado, monitoramento de ameaças e adequação à LGPD para seu negócio.",
      gradient: "from-emerald-500 to-teal-700",
    },
    {
      icon: "Globe",
      title: "Site Profissional",
      description:
        "Criação de sites modernos e otimizados para conversão, integrados com WhatsApp, chatbot e ferramentas de vendas.",
      gradient: "from-cyan-500 to-blue-700",
    },
    {
      icon: "LayoutGrid",
      title: "Ecossistema Digital Completo",
      description:
        "Hospedagem Hostinger, e-mail profissional, site, chatbot e automação — tudo integrado em um só lugar.",
      gradient: "from-orange-500 to-red-600",
    },
  ],
  pricing: {
    title: "Escolha o plano ideal para seu negócio",
    subtitle:
      "Soluções modulares que crescem junto com você. Sem contratos de fidelidade.",
    plans: [
      {
        name: "Início Rápido",
        price: "R$ 997",
        period: "/mês",
        description:
          "Perfeito para quem está começando a automatizar o atendimento.",
        highlight: false,
        features: [
          "Chatbot WhatsApp + Instagram",
          "Até 500 atendimentos/mês",
          "Respostas automáticas ilimitadas",
          "Relatórios semanais",
          "Suporte por WhatsApp",
          "Site institucional básico",
          "Hospedagem Hostinger 1 ano grátis",
          "E-mail profissional hostinger",
        ],
        cta: "Começar Agora",
      },
      {
        name: "Crescimento",
        price: "R$ 2.497",
        period: "/mês",
        description:
          "Para negócios que querem escalar com IA e atendimento premium.",
        highlight: true,
        features: [
          "Tudo do plano Início Rápido",
          "Até 2.000 atendimentos/mês",
          "Agente de IA dedicado",
          "Consultoria em IA mensal",
          "Relatórios em tempo real",
          "Site profissional + blog",
          "Integração com CRM",
          "Segurança digital básica",
        ],
        cta: "Plano Mais Popular",
      },
      {
        name: "Ecossistema Total",
        price: "R$ 4.997",
        period: "/mês",
        description:
          "Solução completa — o ecossistema digital que seu negócio merece.",
        highlight: false,
        features: [
          "Tudo do plano Crescimento",
          "Atendimentos ilimitados",
          "Agente de IA + automações custom",
          "Consultoria IA semanal",
          "Segurança digital completa + LGPD",
          "Gestão de tráfego pago",
          "Suporte prioritário 24h",
          "Sites ilimitados Hostinger",
        ],
        cta: "Falar com Consultor",
      },
    ],
  },
} as const

export const HOW_IT_WORKS = {
  title: "Como funciona",
  subtitle: "5 passos simples para transformar seu negócio com IA.",
  steps: [
    {
      number: "01",
      icon: "ClipboardCheck",
      title: "Diagnóstico Gratuito",
      description:
        "Você responde nosso formulário rápido. Analisamos seu negócio e identificamos as maiores oportunidades de automação.",
    },
    {
      number: "02",
      icon: "Route",
      title: "Estratégia Personalizada",
      description:
        "Criamos um plano de ação sob medida com prazos, métricas e ferramentas específicas para seu negócio.",
    },
    {
      number: "03",
      icon: "Zap",
      title: "Implementação Rápida",
      description:
        "Em até 7 dias seu chatbot e automações estão no ar. Você começa a ver resultados imediatamente.",
    },
    {
      number: "04",
      icon: "GraduationCap",
      title: "Treinamento da Equipe",
      description:
        "Sua equipe aprende a usar todas as ferramentas. Simples, intuitivo, sem complicação técnica.",
    },
    {
      number: "05",
      icon: "TrendingUp",
      title: "Acompanhamento e Evolução",
      description:
        "Monitoramos resultados, ajustamos rotas e evoluímos junto com seu negócio. Suporte contínuo.",
    },
  ],
} as const

export const RESULTS = {
  title: "Resultados que nossos clientes conquistaram",
  subtitle:
    "Métricas reais de pequenos negócios que transformaram a operação com a OráculoAI.",
  metrics: [
    {
      value: "+40%",
      label: "Atendimentos realizados",
      description: "Aumento médio na capacidade de atendimento ao cliente",
    },
    {
      value: "-60%",
      label: "Custos operacionais",
      description: "Redução com equipe de atendimento e processos manuais",
    },
    {
      value: "24/7",
      label: "Atendimento contínuo",
      description: "Atendimento automático funciona 24 horas, todos os dias",
    },
    {
      value: "+3x",
      label: "Conversão de leads",
      description: "Taxa de conversão de leads qualificados pelo chatbot",
    },
  ],
} as const

export const WHY_US = {
  title: "Por que a OráculoAI?",
  subtitle:
    "Não somos apenas mais uma agência de tecnologia. Somos parceiros de crescimento do seu negócio.",
  benefits: [
    {
      icon: "Target",
      title: "Foco em resultado real",
      description:
        "Não vendemos tecnologia por vender. Cada solução é desenhada para gerar mais vendas, economia e eficiência.",
    },
    {
      icon: "Headphones",
      title: "Suporte humano de verdade",
      description:
        "Você fala com gente que entende de negócio, não com robôs. Suporte direto pelo WhatsApp sem burocracia.",
    },
    {
      icon: "PiggyBank",
      title: "Soluções acessíveis",
      description:
        "Planos que cabem no bolso do pequeno negócio. De R$ 997/mês você já automatiza seu atendimento.",
    },
    {
      icon: "Rocket",
      title: "Implementação em 7 dias",
      description:
        "Do diagnóstico ao chatbot funcionando em até uma semana. Resultado rápido sem promessa vazia.",
    },
    {
      icon: "Award",
      title: "Parceiro Oficial Hostinger",
      description:
        "Hospedagem, e-mail profissional e sites com a melhor plataforma do mercado — tudo incluso nos planos.",
    },
    {
      icon: "Shield",
      title: "LGPD e Segurança",
      description:
        "Todos os sistemas em conformidade com a LGPD. Seus dados e de seus clientes protegidos.",
    },
  ],
} as const

export const TESTIMONIALS = {
  title: "Quem já transformou o negócio com a gente",
  subtitle:
    "Depoimentos reais de empreendedores que automatizaram o atendimento e multiplicaram resultados.",
  items: [
    {
      name: "Carlos Mendes",
      role: "Proprietário — Clínica Odontológica",
      avatar: "CM",
      text: "O chatbot da OráculoAI mudou completamente nosso atendimento. Agendamentos automáticos 24h e 40% mais pacientes. Melhor investimento que fizemos.",
    },
    {
      name: "Ana Beatriz",
      role: "CEO — Loja de Moda Feminina",
      avatar: "AB",
      text: "Perdia vendas todo fim de semana por não ter atendimento. Com a automação, recuperei leads e aumentei o faturamento em 60% em 2 meses.",
    },
    {
      name: "Rafael Oliveira",
      role: "Sócio — Escritório de Advocacia",
      avatar: "RO",
      text: "A consultoria em IA nos ajudou a automatizar a triagem de casos. Reduzimos custos operacionais e melhoramos o atendimento aos clientes.",
    },
    {
      name: "Juliana Costa",
      role: "Diretora — Academia de CrossFit",
      avatar: "JC",
      text: "O ecossistema completo + site + chatbot foi a virada de chave. Alunos novos aumentaram 80% depois que implementamos tudo.",
    },
  ],
} as const

export const FAQ = {
  title: "Perguntas frequentes",
  subtitle: "Tire suas dúvidas sobre como a IA pode transformar seu negócio.",
  items: [
    {
      q: "Preciso ter conhecimento técnico para usar as soluções da OráculoAI?",
      a: "Não! Tudo é desenvolvido para ser simples e intuitivo. Você e sua equipe recebem treinamento completo e suporte contínuo. Se você sabe usar WhatsApp, já sabe usar nossas soluções.",
    },
    {
      q: "Quanto tempo leva para implementar o chatbot?",
      a: "Em média 7 dias. Faremos um diagnóstico rápido, configuramos tudo e você já começa a receber atendimentos automáticos. Alguns casos mais simples ficam prontos em até 48 horas.",
    },
    {
      q: "O chatbot funciona 24 horas por dia?",
      a: "Sim! O chatbot Oráculo IA funciona 24/7, incluindo finais de semana e feriados. Enquanto você dorme, ele está atendendo, qualificando leads e agendando serviços.",
    },
    {
      q: "Quanto custa para começar?",
      a: "Nosso plano Início Rápido custa R$ 997/mês e já inclui chatbot, site básico e hospedagem Hostinger grátis por 1 ano. Fazemos um diagnóstico gratuito para indicar o melhor plano.",
    },
    {
      q: "Vocês atendem qualquer tipo de negócio?",
      a: "Atendemos pequenos negócios de diversos segmentos: clínicas, lojas, escritórios, academias, restaurantes, corretoras, entre outros. Cada solução é personalizada para a realidade do seu negócio.",
    },
    {
      q: "O que está incluído no 'Ecossistema Digital Completo'?",
      a: "É nossa solução mais completa: chatbot + agente de IA + site profissional + hospedagem Hostinger + e-mail profissional + segurança digital + consultoria contínua + suporte prioritário. Tudo integrado.",
    },
    {
      q: "Meus dados e dos meus clientes ficam seguros?",
      a: "Totalmente. Seguimos todas as diretrizes da LGPD. Todos os dados são criptografados e armazenados em servidores seguros. Oferecemos relatórios de conformidade sob demanda.",
    },
    {
      q: "Posso cancelar quando quiser?",
      a: "Sim! Não temos contratos de fidelidade. Você pode cancelar quando quiser. Mas garantimos que depois que você ver os resultados, não vai querer parar.",
    },
  ],
} as const

export const CTA_FINAL = {
  title: "Seu negócio merece o poder da IA",
  subtitle:
    "Milhares de pequenos negócios já estão automatizando e crescendo. Não fique para trás.",
  cta: "Fazer Diagnóstico Gratuito",
  secondary: "Quero falar com um consultor",
} as const

export const CONTACT = {
  title: "Entre em contato",
  subtitle: "Tire dúvidas, solicite um orçamento ou agende uma conversa.",
  info: [
    {
      icon: "Mail",
      label: "Email",
      value: "contato@oraculoai.cloud",
    },
    {
      icon: "Phone",
      label: "WhatsApp",
      value: "(11) 99999-9999",
    },
    {
      icon: "MapPin",
      label: "Localização",
      value: "São Paulo, SP — Brasil",
    },
  ],
} as const

export const ABOUT = {
  title: "Nossa história",
  subtitle:
    "Nascemos para democratizar o acesso à IA para pequenos negócios brasileiros.",
  mission:
    "Nossa missão é transformar a realidade de pequenos negócios através da inteligência artificial, tornando tecnologia avançada acessível, simples e com resultados reais.",
  vision:
    "Ser referência nacional em transformação digital com IA para pequenos negócios, ajudando milhares de empreendedores a automatizar, crescer e competir em igualdade com grandes empresas.",
  values: [
    { title: "Resultado acima de tudo", description: "Cada ação precisa gerar impacto mensurável no seu negócio." },
    { title: "Simplicidade é poder", description: "Tecnologia complexa por trás, experiência simples na frente." },
    { title: "Parceria de verdade", description: "Seu crescimento é nosso crescimento. Estamos juntos nessa." },
    { title: "Brasil em primeiro lugar", description: "Soluções desenhadas para a realidade do empreendedor brasileiro." },
  ],
  team: [
    { name: "Lucas Andrade", role: "CEO & Fundador", avatar: "LA", description: "Expert em automação de IA, 10+ anos transformando negócios com tecnologia." },
    { name: "Marina Torres", role: "CTO & Head de IA", avatar: "MT", description: "Cientista de dados e engenheira de IA, referência em chatbots inteligentes." },
    { name: "Pedro Costa", role: "Head de Operações", avatar: "PC", description: "Especialista em processos e operações, garante entregas dentro do prazo." },
    { name: "Camila Rocha", role: "Customer Success", avatar: "CR", description: "Cuida de cada cliente como se fosse único. Suporte humano de verdade." },
  ],
} as const
