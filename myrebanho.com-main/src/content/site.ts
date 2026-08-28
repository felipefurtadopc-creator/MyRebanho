/**
 * ============================================================
 *  CONTEÚDO DO SITE MYREBANHO
 * ============================================================
 *  Este é o ÚNICO lugar onde os textos do site ficam.
 *  Para mudar qualquer texto, edite aqui — as seções e páginas
 *  leem deste arquivo automaticamente.
 *
 *  Organização (na ordem em que aparecem na home):
 *   1. header        — menu e botões do topo
 *   2. hero          — primeira dobra
 *   3. parceiros     — marquee de balanças e bastões
 *   4. autoridade    — faixa bordô (Fazenda Fortaleza / Areopagus)
 *   5. solucoes      — bento grid de funcionalidades + comparação
 *   6. plataforma    — seção de abas com a simulação do sistema
 *   7. comoFunciona  — os 3 passos
 *   8. depoimento    — Antônio Bussiki
 *   9. planos        — cards de planos + FAQ (usado na home e em /planos)
 *  10. blog          — posts (usado na home e em /blog)
 *  11. ctaFinal      — formulário de contato
 *  12. footer        — rodapé
 *  13. solucoesPage  — conteúdo extra da página /solucoes
 * ============================================================
 */

// ------------------------------------------------------------
// 1. HEADER
// ------------------------------------------------------------
export const header = {
  navLinks: [
    { label: "Soluções", href: "/solucoes" },
    { label: "Planos", href: "/planos" },
  ],
  ctaSecundario: {
    label: "Área do Cliente",
    href: "https://app.myrebanho.com/login",
  },
  ctaPrimario: { label: "Fale Conosco", href: "#contato" },
};

// ------------------------------------------------------------
// 2. HERO (primeira dobra)
// ------------------------------------------------------------
export const hero = {
  // Cada item do array é uma linha da headline (a linha 2 fica dourada)
  headline: ["O ÚLTIMO SOFTWARE DE GESTÃO PECUÁRIA", "QUE VOCÊ VAI PRECISAR"],
  // O trecho destacado em dourado é o subDestaque
  subAntes: "Identifique os ",
  subDestaque: "animais improdutivos",
  subDepois:
    ", enxergue onde sua operação perde dinheiro e ganhe previsibilidade.",
  ctaPrimario: { label: "Quero uma demonstração", href: "#contato" },
  ctaSecundario: { label: "Ver planos", href: "/planos" },
};

// ------------------------------------------------------------
// 3. PARCEIROS (marquee de integrações de hardware)
// ------------------------------------------------------------
export const parceiros = {
  titulo: "Conecta com as balanças e bastões que você já usa no campo",
  balancas: [
    "Açores",
    "Coimma",
    "Gallagher",
    "InBalance",
    "Pesenti",
    "Prix (Toledo)",
    "Progresso",
    "Tru-Test",
    "Weightech",
  ],
  bastoes: ["Allflex", "Alltags", "PecFort", "Progresso"],
};

// ------------------------------------------------------------
// 4. AUTORIDADE (faixa bordô)
// ------------------------------------------------------------
export const autoridade = {
  desenvolvidoPor: "Areopagus",
  tagCaso: "Caso de uso comprovado",
  tituloLinha1: "SISTEMA UTILIZADO",
  tituloLinha2: "NA FAZENDA FORTALEZA",
  descricao:
    "Uma das maiores fazendas do Centro-Oeste brasileiro confia no MyRebanho para gerenciar seu rebanho com precisão e inteligência de dados.",
  stats: [
    { value: 12000, suffix: "", label: "Cabeças gerenciadas" },
    { value: 45, suffix: "%", label: "Redução de perdas" },
    { value: 3, suffix: "x", label: "ROI no 1º ano" },
  ],
  quote:
    "O MyRebanho transformou a forma como enxergo os dados do meu rebanho. Hoje tomo decisões com base em informações reais, não em suposições.",
  quoteDestaque: "informações reais",
  autor: "Antonio Bussiki",
  autorHandle: "@antoniobussikiagro",
  autorCargo: "Produtor Rural e Influenciador",
  autorFazenda: "Fazenda Fortaleza, MT",
};

// ------------------------------------------------------------
// 5. SOLUÇÕES (bento grid) + comparação Planilha × MyRebanho
// ------------------------------------------------------------
export const solucoes = {
  tag: "Funcionalidades",
  tituloAntes: "TUDO QUE SEU ",
  tituloDestaque: "REBANHO PRECISA",
  descricao:
    "Uma plataforma completa para produtores que levam a gestão a sério. Do campo ao relatório, cada dado transformado em decisão.",
  // O primeiro item é o card GRANDE do bento grid
  itens: [
    {
      icon: "tag",
      title: "Controle Individual por Animal",
      description:
        "Cada animal com brinco, raça, peso de entrada, origem e histórico completo. Prontuário digital que acompanha a evolução individual e mostra quem dá lucro e quem dá prejuízo.",
      grande: true,
    },
    {
      icon: "trending",
      title: "Cálculo de GMD e Engorda",
      description:
        "Ganho Médio Diário automático por animal e por lote. Identifique os melhores e piores desempenhos.",
      grande: false,
    },
    {
      icon: "satellite",
      title: "Mapeamento por Satélite",
      description:
        "Demarque piquetes e pastos no mapa. Lotação exata de cada área em tempo real.",
      grande: false,
    },
    {
      icon: "wallet",
      title: "Gestão Financeira Integrada",
      description:
        "Custo por arroba, DRE pecuário e fluxo de caixa. A rentabilidade real do rebanho.",
      grande: false,
    },
    {
      icon: "heart",
      title: "Ciclo Reprodutivo",
      description:
        "Coberturas, prenhezes, partos e desmames. Taxa de natalidade sob controle.",
      grande: false,
    },
    {
      icon: "smartphone",
      title: "App Mobile para o Campo",
      description:
        "Registre pesagens e manejos no campo, mesmo sem internet. Sincroniza sozinho.",
      grande: false,
    },
  ],
  ctaLabel: "Ver todas as funcionalidades",
  ctaHref: "/solucoes",
  // Comparação (estilo "o que todo mundo faz × o que você faz aqui")
  comparacao: {
    tag: "A diferença",
    titulo: "PLANILHA × MYREBANHO",
    antes: {
      titulo: "Como todo mundo controla",
      itens: [
        "Planilha desatualizada no escritório",
        "Pesagem anotada no caderno e digitada depois",
        "GMD calculado só no fim do ciclo, tarde demais",
        "Animal improdutivo descoberto só na venda",
        "Custo da arroba: um chute",
      ],
    },
    depois: {
      titulo: "Como você controla aqui",
      itens: [
        "Dado entra no campo e aparece na hora",
        "Bastão lê o brinco, balança envia o peso",
        "GMD por animal a cada pesagem",
        "Improdutivo identificado no ciclo, não depois",
        "Custo da arroba produzida em tempo real",
      ],
    },
  },
};

// ------------------------------------------------------------
// 6. PLATAFORMA (seção de abas com simulação do sistema real)
// ------------------------------------------------------------
export const plataforma = {
  tag: "A Plataforma",
  tituloLinha1: "O SISTEMA QUE",
  tituloDestaque: "FALA A LÍNGUA",
  tituloLinha3: "DO PECUARISTA",
  descricao:
    "Desenvolvido com produtores rurais reais. Intuitivo para quem está no campo, poderoso para quem gerencia no escritório. Isto que você vê abaixo é o sistema de verdade.",
  abas: [
    { id: "dashboard", label: "Visão Geral" },
    { id: "satelite", label: "Mapa por Satélite" },
    { id: "campo", label: "No Campo" },
  ],
  // ---- Aba 1: dados da simulação do dashboard (fiéis ao produto) ----
  dashboard: {
    kpis: [
      { titulo: "Total de Animais", valor: 1248, decimais: 0, prefixo: "", sufixo: "", variacao: "+4,2%", positivo: true },
      { titulo: "Peso Total (Arrobas)", valor: 18540, decimais: 0, prefixo: "", sufixo: "", variacao: "+6,8%", positivo: true },
      { titulo: "Custo da Arroba Produzida", valor: 203.64, decimais: 2, prefixo: "R$ ", sufixo: "", variacao: "-3,1%", positivo: true },
      { titulo: "Ganho de Peso Médio", valor: 1.79, decimais: 2, prefixo: "", sufixo: " kg/dia", variacao: "+8,5%", positivo: true },
    ],
    graficoTitulo: "Evolução do Peso (90 dias)",
    // Pontos do gráfico (todos medidos, em kg)
    pesos: [312, 328, 341, 355, 372, 386, 401, 418],
    atividadesTitulo: "Atividades Recentes",
    atividades: [
      { tipo: "Pesagem", detalhe: "Lote 12 · 148 animais", status: "Aprovado", quando: "Hoje, 07h40" },
      { tipo: "Manejo sanitário", detalhe: "Vacinação aftosa · Lote 08", status: "Aprovado", quando: "Ontem, 15h10" },
      { tipo: "Manejo nutricional", detalhe: "Ajuste de dieta · Confinamento 02", status: "Pendente", quando: "Ontem, 09h25" },
      { tipo: "Manejo geral", detalhe: "Troca de pasto · Piquete 14 → 17", status: "Aprovado", quando: "Seg, 16h50" },
    ],
    acoesTitulo: "Próximas Ações",
    acoes: [
      { titulo: "Pesagem · Lote 05", quando: "Amanhã, 07h00", cor: "amarelo" },
      { titulo: "Vacinação · Bezerros desmame", quando: "Sex, 08h30", cor: "azul" },
      { titulo: "Inseminação · Protocolo IATF G3", quando: "Sáb, 06h00", cor: "verde" },
    ],
    statusTitulo: "Status do Rebanho",
    statusRebanho: [
      { label: "Em engorda", valor: 642 },
      { label: "Gestantes", valor: 218 },
      { label: "Em lactação", valor: 187 },
      { label: "Bezerros", valor: 201 },
    ],
  },
  // ---- Aba 2: mapa por satélite ----
  satelite: {
    titulo: "Áreas e Pastos",
    cards: [
      { label: "Área total", valor: "2.480 ha" },
      { label: "Taxa de lotação", valor: "1,4 UA/ha" },
      { label: "Cabeça / ha", valor: "1,8" },
      { label: "Ocupação", valor: "82%" },
    ],
    piquetes: [
      { nome: "Piquete 14", status: "Em uso", animais: 320 },
      { nome: "Piquete 17", status: "Descanso", animais: 0 },
      { nome: "Piquete 21", status: "Em uso", animais: 275 },
    ],
    legenda: "Pastejo rotacionado com lotação em tempo real",
  },
  // ---- Aba 3: fluxo de coleta no campo ----
  campo: {
    passos: [
      { titulo: "Animal no tronco", detalhe: "Contenção segura para o manejo" },
      { titulo: "Bastão lê o brinco eletrônico", detalhe: "Identificação em 1 segundo, sem papel" },
      { titulo: "Balança envia o peso", detalhe: "Direto para o app, sem digitação" },
      { titulo: "Sistema calcula na hora", detalhe: "GMD atualizado e histórico completo" },
    ],
    leitura: {
      brinco: "BR 105 0123 4567",
      peso: "387 kg",
      gmd: "GMD 1,18 kg/dia",
      lote: "Lote 12",
    },
    legenda: "Funciona com as principais balanças e bastões do mercado, mesmo sem internet.",
  },
  checklist: [
    "Mais de 25 relatórios",
    "Importação de dados do Excel",
    "Usuários ilimitados",
    "Fazendas ilimitadas",
    "Integração com balanças e bastões",
    "Rastreabilidade SISBOV",
  ],
};

// ------------------------------------------------------------
// 7. COMO FUNCIONA (3 passos)
// ------------------------------------------------------------
export const comoFunciona = {
  tag: "Como funciona",
  tituloAntes: "SIMPLES COMO ",
  tituloDestaque: "DEVE SER",
  descricao:
    "Em 3 passos, você transforma a sua fazenda em um negócio orientado por dados.",
  passos: [
    {
      number: "01",
      icon: "clipboard",
      title: "Cadastre seus animais",
      description:
        "Importe do Excel ou cadastre manualmente. Brinco, raça, peso, lote, procedência: tudo organizado em segundos.",
      details: [
        "Importação em lote via Excel",
        "Brinco eletrônico e SISBOV",
        "Fotos e documentos anexados",
      ],
    },
    {
      number: "02",
      icon: "activity",
      title: "Registre os manejos",
      description:
        "Pesagens, vacinas, vermifugações, movimentos de pasto. Tudo registrado no campo pelo app, mesmo offline.",
      details: [
        "Registro offline via app",
        "Leitura por bastão e balança",
        "Histórico completo por animal",
      ],
    },
    {
      number: "03",
      icon: "chart",
      title: "Tome decisões com dados reais",
      description:
        "Relatórios automáticos, gráficos de desempenho e alertas inteligentes. Descubra onde está o lucro e onde está o prejuízo.",
      details: [
        "Relatórios em PDF/Excel",
        "Simulações de pasto e confinamento",
        "Projeções de engorda",
      ],
    },
  ],
};

// ------------------------------------------------------------
// 8. DEPOIMENTO (Antônio Bussiki)
// ------------------------------------------------------------
export const depoimento = {
  tag: "Depoimento em destaque",
  foto: "/images/antonio-confinamento-1.jpg",
  seguidores: "+200k",
  parceiroOficial: "Parceiro oficial",
  quoteAntes: "“O MYREBANHO TRANSFORMOU ",
  quoteDestaque: "A FORMA COMO ENXERGO",
  quoteDepois: " OS DADOS DO MEU REBANHO.”",
  texto:
    "Antes, eu tomava decisões no feeling. Com o MyRebanho, sei exatamente qual animal está performando, qual piquete precisa de descanso, e quanto cada arroba está me custando. Isso mudou meu negócio.",
  autor: "Antonio Bussiki",
  autorHandle: "@antoniobussikiagro",
  autorCargo: "Produtor Rural · Influenciador do Agro",
  autorFazendaLabel: "Fazenda",
  autorFazenda: "Fortaleza, MT",
};

// ------------------------------------------------------------
// 9. PLANOS (home + página /planos)
// ------------------------------------------------------------
export const planos = {
  tag: "Planos",
  tituloAntes: "ESCOLHA O PLANO ",
  tituloDestaque: "IDEAL",
  descricao:
    "Cada operação tem um tamanho. Escolha o plano que cresce com o seu rebanho e consulte nossos especialistas.",
  // Título da página /planos
  paginaTituloLinha1: "INVESTIMENTO QUE",
  paginaTituloDestaque: "GERA RETORNO",
  paginaDescricao:
    "Cada plano é personalizado para o tamanho da sua operação. Fale com nossos consultores e receba uma proposta adequada para você.",
  notaRodape:
    "Todos os planos incluem período de implantação assistida e treinamento da equipe. Sem fidelidade mínima.",
  ctaLabel: "Falar com consultor",
  // A principal diferença entre os planos é o número de animais.
  // Todos incluem as mesmas funcionalidades; gerente de contas
  // entra do Produtividade para cima.
  lista: [
    {
      name: "Essencial",
      subtitle: "Para pequenos produtores",
      description:
        "Para quem está começando a profissionalizar a gestão do rebanho.",
      limite: "Até 500 animais",
      price: "R$390,00/mensal",
      highlight: false,
      badge: "",
      features: [
        "Controle individual por animal",
        "Cálculo de GMD",
        "Mais de 25 relatórios",
        "Usuários ilimitados",
        "Mapeamento por satélite",
        "Ciclo reprodutivo",
        "App mobile",
        "Suporte prioritário",
        "Fazendas ilimitadas (multipropriedades)",
        "Treinamento personalizado",
      ],
      notIncluded: ["Gerente de contas dedicado"],
    },
    {
      name: "Produtividade",
      subtitle: "O mais escolhido",
      description:
        "Para propriedades em crescimento que querem decisões baseadas em dados.",
      limite: "Até 1.000 animais",
      price: "Sob consulta",
      highlight: true,
      badge: "Mais popular",
      features: [
        "Controle individual por animal",
        "Cálculo de GMD",
        "Mais de 25 relatórios",
        "Usuários ilimitados",
        "Mapeamento por satélite",
        "Ciclo reprodutivo",
        "App mobile",
        "Suporte prioritário",
        "Fazendas ilimitadas (multipropriedades)",
        "Gerente de contas dedicado",
        "Treinamento personalizado",
      ],
      notIncluded: [],
    },
    {
      name: "Estratégico",
      subtitle: "Para grandes operações",
      description:
        "Para operações consolidadas que precisam de visão completa da produção.",
      limite: "Até 3.000 animais",
      price: "Sob consulta",
      highlight: false,
      badge: "",
      features: [
        "Controle individual por animal",
        "Cálculo de GMD",
        "Mais de 25 relatórios",
        "Usuários ilimitados",
        "Mapeamento por satélite",
        "Ciclo reprodutivo",
        "App mobile",
        "Suporte prioritário",
        "Fazendas ilimitadas (multipropriedades)",
        "Gerente de contas dedicado",
        "Treinamento personalizado",
      ],
      notIncluded: [],
    },
    {
      name: "Enterprise",
      subtitle: "Para operações de escala",
      description:
        "Para grandes grupos e operações integradas com alto volume de animais.",
      limite: "Acima de 3.000 animais",
      price: "Sob consulta",
      highlight: false,
      badge: "",
      features: [
        "Controle individual por animal",
        "Cálculo de GMD",
        "Mais de 25 relatórios",
        "Usuários ilimitados",
        "Mapeamento por satélite",
        "Ciclo reprodutivo",
        "App mobile",
        "Suporte prioritário",
        "Fazendas ilimitadas (multipropriedades)",
        "Gerente de contas dedicado",
        "Treinamento personalizado",
      ],
      notIncluded: [],
    },
  ],
  faqs: [
    {
      q: "Como funciona o seu acesso à plataforma?",
      a: "Solicite o seu contato e nossa equipe avaliará o seu perfil para um diagnóstico gratuito da sua operação. Sendo elegível, nossos especialistas entrarão em contato para agendar uma conversa. Nessa reunião, você terá acesso a 7 dias de teste da plataforma com uma demonstração 100% personalizada e aplicada à realidade do seu negócio",
    },
    {
      q: "Posso migrar meus dados do Excel?",
      a: "Sim. Todos os planos incluem importação via planilha Excel. Nossa equipe de suporte auxilia na estruturação dos dados para uma migração sem dor de cabeça.",
    },
    {
      q: "O app funciona sem internet?",
      a: "Sim. O app mobile tem modo offline completo. Você registra pesagens, manejos e vacinas no campo e os dados sincronizam automaticamente ao voltar ao sinal.",
    },
    {
      q: "Funciona com minha balança e meu bastão?",
      a: "Sim. O MyRebanho conecta com as principais marcas do mercado: Tru-Test, Coimma, Gallagher, Prix (Toledo), Allflex, entre outras. Consulte nosso time sobre o seu modelo.",
    },
    {
      q: "Quantas fazendas posso cadastrar?",
      a: "Todos os planos incluem fazendas ilimitadas (multipropriedades), com painel centralizado para visão consolidada da sua operação.",
    },
    {
      q: "Há fidelidade ou contrato mínimo?",
      a: "Não. Trabalhamos com mensalidade sem fidelidade mínima. Você pode cancelar quando quiser, sem multa.",
    },
  ],
};

// ------------------------------------------------------------
// 10. BLOG (home + página /blog)
// ------------------------------------------------------------
export const blog = {
  tag: "Blog",
  tituloAntes: "CONHECIMENTO QUE ",
  tituloDestaque: "GERA RESULTADO",
  // Título da página /blog
  paginaTituloLinha1: "CONHECIMENTO PARA",
  paginaTituloDestaque: "QUEM PRODUZ",
  paginaDescricao:
    "Artigos técnicos e práticos sobre gestão pecuária, tecnologia no campo e resultados reais.",
  verTodos: "Ver todos os artigos",
  categorias: ["Todos", "Gestão", "Tecnologia", "Reprodução", "Financeiro", "Nutrição"],
  posts: [
    {
      category: "Gestão",
      categoryColor: "bg-bordo/20 text-bordo-light border-bordo/20",
      date: "12 Jun 2025",
      readTime: "5 min",
      title: "GMD: O indicador que separa os melhores fazendeiros dos demais",
      excerpt:
        "Entenda como o Ganho Médio Diário pode ser o principal termômetro da eficiência do seu confinamento ou pastejo rotacionado.",
      image: "/images/pasto-nelore-arvore.jpg",
      featured: true,
      slug: "gmd-indicador-fazendeiros",
    },
    {
      category: "Tecnologia",
      categoryColor: "bg-ouro/10 text-ouro border-ouro/20",
      date: "5 Jun 2025",
      readTime: "8 min",
      title: "Como o mapeamento por satélite reduziu o custo de lotação em 30%",
      excerpt:
        "Caso de uso real: como a Fazenda Fortaleza usou o MyRebanho para otimizar a distribuição do rebanho por piquete com base em dados satelitais.",
      image: "/images/confinamento-corredor.jpg",
      featured: false,
      slug: "mapeamento-satelite-lotacao",
    },
    {
      category: "Reprodução",
      categoryColor: "bg-green-900/30 text-green-400 border-green-800/30",
      date: "28 Mai 2025",
      readTime: "6 min",
      title: "Taxa de natalidade: como chegar a 90% no seu rebanho",
      excerpt:
        "O ciclo reprodutivo é o coração da pecuária de cria. Descubra as métricas que você precisa monitorar para maximizar a produção de bezerros.",
      image: "/images/confinamento-cocho.jpg",
      featured: false,
      slug: "taxa-natalidade-rebanho",
    },
    {
      category: "Financeiro",
      categoryColor: "bg-blue-900/30 text-blue-400 border-blue-800/30",
      date: "20 Mai 2025",
      readTime: "7 min",
      title: "Custo por arroba: o cálculo que todo pecuarista precisa dominar",
      excerpt:
        "Muitos produtores vendem o boi sem saber quanto gastaram para produzir cada arroba. Aprenda a calcular e usar este número para tomar decisões melhores.",
      image: "/images/confinamento-corredor-2.jpg",
      featured: false,
      slug: "custo-por-arroba",
    },
    {
      category: "Nutrição",
      categoryColor: "bg-orange-900/30 text-orange-400 border-orange-800/30",
      date: "14 Mai 2025",
      readTime: "9 min",
      title: "Pastejo rotacionado x confinamento: quando cada estratégia compensa?",
      excerpt:
        "Uma análise comparativa das duas principais estratégias de produção bovina, com foco em eficiência financeira e impacto no GMD.",
      image: "/images/manejo-tronco.jpg",
      featured: false,
      slug: "pastejo-rotacionado-confinamento",
    },
    {
      category: "Gestão",
      categoryColor: "bg-bordo/20 text-bordo-light border-bordo/20",
      date: "7 Mai 2025",
      readTime: "4 min",
      title: "5 erros de gestão que custam caro na pecuária de corte",
      excerpt:
        "Identificamos os 5 erros mais comuns de gestão que consultores encontram ao analisar fazendas com baixa rentabilidade. Veja se você comete algum.",
      image: "/images/confinamento-corredor-nublado.jpg",
      featured: false,
      slug: "erros-gestao-pecuaria",
    },
  ],
};

// ------------------------------------------------------------
// 11. CTA FINAL (formulário de contato)
// ------------------------------------------------------------
export const ctaFinal = {
  tag: "Entre em contato",
  tituloAntes: "PRONTO PARA GERIR SEU ",
  tituloDestaque: "REBANHO COM DADOS REAIS?",
  descricao:
    "Fale com um consultor especializado em gestão pecuária. Analisamos sua operação gratuitamente e apresentamos a solução ideal.",
  sucessoTitulo: "MENSAGEM ENVIADA!",
  sucessoTexto: "Nosso time entrará em contato em até",
  sucessoDestaque: "24 horas úteis",
  sucessoRodape: "Fique de olho no seu WhatsApp!",
  botaoLabel: "Quero ser contatado",
  botaoEnviando: "Enviando...",
  notaForm: "Sem spam. Sem compromisso. Apenas uma conversa sobre seu negócio.",
  badges: [
    "🔒 Dados protegidos pela LGPD",
    "✅ Sem fidelidade",
    "⚡ Implantação em 48h",
    "🇧🇷 100% nacional",
  ],
  // Opções dos seletores do formulário
  tamanhoRebanhoOpcoes: [
    "Ainda não comecei",
    "Até 100 animais",
    "100 a 200 animais",
    "200 a 500 animais",
    "500 a 1000 animais",
    "1000 a 3000 animais",
    "Mais de 3000 animais",
  ],
  tipoOperacaoOpcoes: [
    "Cria",
    "Recria",
    "Engorda",
    "Ciclo completo",
    "Recria e engorda",
    "Cria e recria",
    "Cria e engorda",
  ],
  consentimentoAntes: "Concordo com a ",
  consentimentoLink: "Política de Privacidade",
  consentimentoDepois:
    " e autorizo o MyRebanho a usar minhas informações de contato para fins de marketing.",
};

// ------------------------------------------------------------
// 12. FOOTER
// ------------------------------------------------------------
export const whatsappLink =
  "https://api.whatsapp.com/send/?phone=5548991782128&text=Oi%21+Vim+pelo+site+da+MyRebanho.+Podem+me+explicar+como+funciona+o+sistema%3F&type=phone_number&app_absent=0";

export const footer = {
  descricao: "Visibilidade total do seu negócio pecuário.",
  socials: [
    { rede: "instagram", href: "https://www.instagram.com/myrebanho" },
    { rede: "youtube", href: "https://www.youtube.com/@myrebanho" },
    { rede: "linkedin", href: "https://www.linkedin.com/company/myrebanho/" },
    { rede: "whatsapp", href: whatsappLink },
  ],
  colunas: {
    produto: [
      { label: "Soluções", href: "/solucoes" },
      { label: "Planos", href: "/planos" },
      { label: "Área do Cliente", href: "https://app.myrebanho.com/login" },
    ],
    empresa: [],
    suporte: [
      { label: "Central de Ajuda", href: whatsappLink },
      { label: "Contato", href: "#contato" },
    ],
    legal: [
      { label: "Política de Privacidade", href: "/privacidade" },
      { label: "Termos e Condições", href: "/termos" },
      { label: "LGPD", href: "/lgpd" },
    ],
  },
  copyrightEmpresa: "MyRebanho",
  assinatura: "Desenvolvido com paixão pelo agronegócio brasileiro 🇧🇷",
};

// ------------------------------------------------------------
// 13. PÁGINA /SOLUCOES (conteúdo detalhado)
// ------------------------------------------------------------
export const solucoesPage = {
  tag: "Soluções",
  tituloLinha1: "TUDO QUE A GESTÃO",
  tituloDestaque: "BOVINA EXIGE",
  descricao:
    "Da pesagem no campo ao relatório financeiro. Uma plataforma completa para produtores que levam a gestão a sério.",
  categorias: [
    {
      title: "Gestão de Rebanho",
      subtitle: "Controle total do seu gado",
      icon: "tag",
      color: "ouro",
      features: [
        {
          name: "Controle Individual por Animal",
          desc: "Cadastro completo com brinco, raça, peso, lote, procedência, histórico sanitário e documentos. Cada animal tem seu prontuário digital.",
        },
        {
          name: "Cálculo Automático de GMD",
          desc: "Ganho Médio Diário calculado automaticamente a cada pesagem. Compare lotes, identifique desempenhos abaixo da meta e tome ação imediata.",
        },
        {
          name: "Gestão de Lotes e Categorias",
          desc: "Organize por categoria (bezerro, novilho, vaca, touro) e lote. Movimente animais entre lotes e piquetes com rastreamento completo.",
        },
      ],
    },
    {
      title: "Tecnologia de Campo",
      subtitle: "Dados do pasto direto no sistema",
      icon: "satellite",
      color: "bordo",
      features: [
        {
          name: "Mapeamento por Satélite",
          desc: "Demarcação de piquetes, pastos, aguadas e benfeitorias com imagens satelitais. Visualize a lotação de cada área.",
        },
        {
          name: "Balanças e Bastões Conectados",
          desc: "Integração com as principais marcas do mercado: Tru-Test, Coimma, Gallagher, Prix (Toledo), Açores, InBalance, Pesenti, Weightech, Allflex, Alltags, PecFort e Progresso.",
        },
        {
          name: "App Mobile com Offline",
          desc: "Registre pesagens, vacinas e manejos diretamente pelo celular no campo, sem precisar de internet. Sincronização automática ao voltar ao sinal.",
        },
      ],
    },
    {
      title: "Gestão Financeira",
      subtitle: "Da arroba ao balanço",
      icon: "wallet",
      color: "ouro",
      features: [
        {
          name: "DRE Pecuário",
          desc: "Demonstrativo de Resultado do Exercício adaptado para a pecuária bovina. Veja receitas, custos fixos/variáveis, margem bruta e lucro líquido.",
        },
        {
          name: "Custo por Arroba",
          desc: "Calcule o custo de produção de cada arroba ao longo do ciclo. Compare com a cotação do boi gordo e maximize sua margem de venda.",
        },
        {
          name: "Fluxo de Caixa",
          desc: "Controle de entradas e saídas com categorização por centro de custo. Projeções futuras baseadas nos ciclos de venda e despesas previstas.",
        },
      ],
    },
    {
      title: "Reprodução",
      subtitle: "Maximize a natalidade",
      icon: "heart",
      color: "bordo",
      features: [
        {
          name: "Ciclo Reprodutivo Completo",
          desc: "Registro de coberturas, datas de prenhez confirmada, datas prováveis de parto e desmame. Acompanhe a taxa de natalidade e prenhez em tempo real.",
        },
        {
          name: "IATF e Touros",
          desc: "Gerencie protocolos de IATF, registre touros por lote e acompanhe o desempenho reprodutivo de cada matriz. Calcule a taxa de repetição.",
        },
        {
          name: "Ficha de Maternidade",
          desc: "Registro completo de partos, com peso ao nascer do bezerro, condições do nascimento e rastreamento automático da genealogia.",
        },
      ],
    },
  ],
  integracoesTitulo: "INTEGRAÇÕES E RECURSOS",
  integracoesDescricao: "Conecte com as ferramentas que você já usa",
  integracoes: [
    { name: "Balanças e bastões", icon: "scale" },
    { name: "Excel / CSV", icon: "file" },
    { name: "Relatórios PDF", icon: "file" },
    { name: "Multi-usuário", icon: "users" },
  ],
  ctaTitulo: "PRONTO PARA COMEÇAR?",
  ctaDescricao:
    "Fale com um especialista e veja como o MyRebanho se adapta ao tamanho da sua operação.",
  ctaLabel: "Quero uma demonstração",
};
