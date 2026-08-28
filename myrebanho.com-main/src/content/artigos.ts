/**
 * ============================================================
 *  ARTIGOS DO BLOG (páginas /blog/[slug])
 * ============================================================
 *  Texto completo dos 6 artigos técnicos. Os números citados
 *  vêm de fontes públicas consolidadas (Embrapa, ABIEC, CEPEA,
 *  IBGE) e as premissas de cada conta estão explícitas no texto.
 *  Edite aqui para ajustar qualquer parágrafo.
 *
 *  Estrutura de cada seção do artigo:
 *   - titulo: subtítulo (h2)
 *   - paragrafos: lista de parágrafos
 *   - lista (opcional): bullets exibidos após os parágrafos
 *   - destaque (opcional): frase em card dourado (callout)
 *   - tabela (opcional): { colunas: [], linhas: [[]] }
 * ============================================================
 */

export interface SecaoArtigo {
  titulo: string;
  paragrafos: string[];
  lista?: string[];
  destaque?: string;
  tabela?: { colunas: string[]; linhas: string[][] };
}

export interface Artigo {
  slug: string;
  intro: string;
  secoes: SecaoArtigo[];
  fontes: string[];
  cta: { titulo: string; texto: string; botao: string };
}

export const artigos: Artigo[] = [
  // ============================================================
  // 1. GMD
  // ============================================================
  {
    slug: "gmd-indicador-fazendeiros",
    intro:
      "O Ganho Médio Diário (GMD) é o indicador mais direto da eficiência produtiva de uma operação de corte: quanto peso cada animal ganhou, por dia, no período. Ele é simples de calcular, mas a maioria das fazendas brasileiras não o acompanha de forma sistemática, e é exatamente aí que os melhores gestores abrem vantagem.",
    secoes: [
      {
        titulo: "O que é o GMD e como calcular",
        paragrafos: [
          "A fórmula é direta: GMD = (peso final − peso inicial) ÷ número de dias entre as pesagens. Um garrote que entrou na recria com 240 kg e chegou a 330 kg após 120 dias teve GMD de 0,75 kg/dia.",
          "O que muda o jogo não é a conta, é a disciplina de pesagem. Sem ao menos duas pesagens confiáveis por animal, o GMD vira estimativa de olho, e decisões de venda, suplementação e descarte passam a ser tomadas no achismo.",
        ],
      },
      {
        titulo: "Referências de GMD na pecuária brasileira",
        paragrafos: [
          "Os números variam com genética, forrageira, clima e suplementação, mas as faixas abaixo, consolidadas em publicações técnicas da Embrapa e em levantamentos de consultorias de pecuária, servem de régua inicial:",
        ],
        tabela: {
          colunas: ["Sistema", "GMD típico (kg/dia)"],
          linhas: [
            ["Pasto degradado, sem suplementação", "0,2 a 0,4"],
            ["Pasto bem manejado, período das águas", "0,7 a 1,0"],
            ["Pasto na seca, sem suplementação", "próximo de zero (ou negativo)"],
            ["Semiconfinamento (pasto + concentrado)", "0,8 a 1,1"],
            ["Confinamento", "1,3 a 1,6"],
          ],
        },
      },
      {
        titulo: "Quanto vale 100 gramas a mais por dia?",
        paragrafos: [
          "Vamos à conta, com premissas explícitas: considere +0,1 kg/dia de GMD mantido por 365 dias. São +36,5 kg de peso vivo por animal no ano. Com rendimento de carcaça de 55%, isso vira cerca de 20 kg de carcaça, ou aproximadamente 1,3 arroba a mais por animal por ano.",
          "Com a arroba a R$ 300 (consulte sempre o indicador CEPEA/B3 do dia), são cerca de R$ 400 a mais por animal por ano. Em um rebanho de 1.000 cabeças, a diferença de apenas 100 gramas diárias representa na ordem de R$ 400 mil por ano.",
        ],
        destaque:
          "100 g/dia a mais de GMD ≈ 1,3 @ a mais por animal/ano. Em 1.000 cabeças, isso pode passar de R$ 400 mil por ano.",
      },
      {
        titulo: "A média esconde os improdutivos",
        paragrafos: [
          "Um lote com GMD médio de 0,8 kg/dia pode conter animais ganhando 1,1 e animais ganhando 0,3. A média parece saudável, mas a cauda improdutiva está consumindo pasto, suplemento e dias de fazenda sem converter em arroba.",
          "Por isso o GMD precisa ser acompanhado por animal, não só por lote. É a comparação individual que revela quem deve ser vendido antecipadamente, quem responde à suplementação e qual genética está performando de verdade.",
        ],
      },
      {
        titulo: "Como implantar o controle de GMD na prática",
        paragrafos: [
          "Não é preciso pesar toda semana. Uma rotina factível para a maioria das fazendas:",
        ],
        lista: [
          "Pese todos os animais a cada 60–90 dias (ou em todo manejo de curral)",
          "Padronize a condição de pesagem (mesmo horário e manejo, de preferência com jejum semelhante)",
          "Use brinco eletrônico + bastão + balança conectada para eliminar erro de anotação",
          "Compare GMD por animal, por lote e por pasto no mesmo período",
          "Defina uma meta por fase (cria, recria, terminação) e aja sobre quem ficar abaixo dela",
        ],
      },
    ],
    fontes: [
      "Embrapa Gado de Corte — publicações técnicas sobre recria e engorda em pastagens e confinamento",
      "CEPEA/Esalq-USP — Indicador do Boi Gordo CEPEA/B3",
      "ABIEC — Beef Report (perfil da pecuária brasileira)",
    ],
    cta: {
      titulo: "Quer ver o GMD de cada animal sem planilha?",
      texto:
        "O MyRebanho calcula o GMD automaticamente a cada pesagem, por animal e por lote, e mostra quem está abaixo da meta.",
      botao: "Quero uma demonstração",
    },
  },

  // ============================================================
  // 2. MAPEAMENTO POR SATÉLITE
  // ============================================================
  {
    slug: "mapeamento-satelite-lotacao",
    intro:
      "O Brasil tem em torno de 160 milhões de hectares de pastagens, e levantamentos como os do MapBiomas indicam que cerca de metade apresenta algum nível de degradação. O resultado aparece na taxa de lotação média nacional, historicamente próxima de 1 UA/ha, quando sistemas bem manejados sustentam duas a três vezes isso. O mapeamento por satélite é o primeiro passo para fechar essa diferença, porque ninguém gerencia o que não mede.",
    secoes: [
      {
        titulo: "O problema: a área que você acha que tem não é a área útil",
        paragrafos: [
          "Boa parte das fazendas trabalha com a área 'de escritura' ou com estimativas antigas dos piquetes. Só que reserva legal, APPs, aguadas, curral, estradas internas e áreas degradadas não produzem pasto.",
          "Quando a lotação é calculada sobre a área total em vez da área útil de pastejo, o gestor superestima a capacidade de suporte, degrada o pasto nos piquetes menores e subutiliza os maiores. O custo por arroba sobe sem que ninguém veja onde.",
        ],
      },
      {
        titulo: "O que o mapeamento por satélite entrega",
        paragrafos: [
          "Com imagens de satélite e demarcação digital dos piquetes, a fazenda passa a saber com precisão:",
        ],
        lista: [
          "A área real de cada piquete, pasto, aguada e benfeitoria (em hectares)",
          "A taxa de lotação real de cada área (UA/ha), animal por animal",
          "Quais piquetes estão acima ou abaixo da capacidade de suporte",
          "O planejamento do pastejo rotacionado: qual lote vai para qual piquete e quando",
          "A evolução do uso das áreas ao longo das estações",
        ],
      },
      {
        titulo: "Caso prático: redistribuindo lotes pela área útil real",
        paragrafos: [
          "Na Fazenda Fortaleza (MS), que utiliza o MyRebanho, a demarcação por satélite revelou diferenças relevantes entre a área estimada e a área útil real de vários piquetes. Com a lotação recalculada sobre hectares reais, os lotes foram redistribuídos e o pastejo rotacionado passou a respeitar a capacidade de suporte de cada área.",
          "O efeito combinado, ou seja, menos suplementação corretiva em piquetes sobrecarregados e melhor aproveitamento dos subutilizados, reduziu o custo de lotação da operação em cerca de 30% na comparação com o manejo anterior.",
        ],
        destaque:
          "Lotação calculada sobre área útil real, e não sobre área de escritura, é a base de qualquer pastejo rotacionado que funciona.",
      },
      {
        titulo: "Como começar na sua fazenda",
        paragrafos: ["Um roteiro simples de implantação em quatro passos:"],
        lista: [
          "Demarque digitalmente todos os piquetes, aguadas e benfeitorias sobre a imagem de satélite",
          "Classifique cada área: pasto produtivo, reserva, confinamento, curral",
          "Cadastre os lotes e vincule cada lote ao piquete em que está",
          "Acompanhe a taxa de lotação (UA/ha) e o tempo de ocupação de cada piquete, e ajuste a rotação",
        ],
      },
    ],
    fontes: [
      "MapBiomas — mapeamento de pastagens e níveis de degradação no Brasil",
      "Embrapa — capacidade de suporte e manejo de pastagens tropicais",
      "IBGE — Censo Agropecuário (área de pastagens)",
    ],
    cta: {
      titulo: "Quer enxergar sua fazenda do satélite?",
      texto:
        "No MyRebanho você demarca piquetes sobre a imagem real da fazenda e acompanha a lotação de cada área com os animais que estão nela.",
      botao: "Quero mapear minha fazenda",
    },
  },

  // ============================================================
  // 3. TAXA DE NATALIDADE
  // ============================================================
  {
    slug: "taxa-natalidade-rebanho",
    intro:
      "A taxa de natalidade média do rebanho de cria brasileiro gira historicamente em torno de 60%, ou seja, a cada 100 matrizes em reprodução, cerca de 40 não desmamam bezerro no ano. Fazendas bem manejadas operam consistentemente acima de 85%. Essa diferença define a rentabilidade da cria, porque a vaca vazia custa o ano inteiro e não entrega nada.",
    secoes: [
      {
        titulo: "O custo invisível da vaca vazia",
        paragrafos: [
          "Uma matriz consome pasto, mineral, vacinas e mão de obra o ano todo. Colocando premissas conservadoras na conta, o custo anual de manutenção de uma vaca fica na faixa de R$ 1.200 a R$ 1.800 dependendo da região e do sistema.",
          "Se ela desmama um bezerro, esse custo se dilui no produto. Se está vazia, é prejuízo puro. Em um rebanho de 500 matrizes com natalidade de 60%, são 200 vacas custando sem produzir, entre R$ 240 mil e R$ 360 mil por ano de custo sem receita correspondente.",
        ],
        destaque:
          "Cada ponto percentual de natalidade em 500 matrizes são 5 bezerros a mais por ano. A diferença entre 60% e 85% são 125 bezerros.",
      },
      {
        titulo: "As alavancas que levam aos 90%",
        paragrafos: [
          "Não existe truque único: natalidade alta é resultado de um conjunto de práticas executadas com disciplina.",
        ],
        lista: [
          "Estação de monta definida (60–90 dias): concentra partos, facilita manejo e expõe rapidamente as vazias",
          "Escore de condição corporal: vaca parindo com ECC adequado (3,0+ na escala 1–5) volta a ciclar mais rápido",
          "IATF: o Brasil é o maior usuário mundial da técnica, com taxas de concepção típicas em torno de 50% por protocolo, permitindo emprenhar cedo e concentrar a genética",
          "Diagnóstico de gestação precoce (30–60 dias após a estação): identifica vazias a tempo de decidir",
          "Descarte orientado: vaca vazia duas estações seguidas não deve continuar no rebanho",
          "Sanidade reprodutiva em dia: brucelose, IBR, BVD e leptospirose comprometem a prenhez silenciosamente",
          "Mineralização correta o ano todo, especialmente fósforo na época das águas",
        ],
      },
      {
        titulo: "Intervalo entre partos: a métrica irmã",
        paragrafos: [
          "O ideal biológico é um bezerro por vaca por ano, com intervalo entre partos (IEP) de 12 meses. No rebanho comercial brasileiro, o IEP frequentemente passa de 18 meses, o que significa que a matriz produz um bezerro a cada ano e meio.",
          "Reduzir o IEP de 18 para 13 meses aumenta em cerca de 38% o número de bezerros produzidos pela mesma vaca ao longo da vida útil, sem comprar uma matriz a mais.",
        ],
      },
      {
        titulo: "Sem registro, não há gestão reprodutiva",
        paragrafos: [
          "Estação de monta, IATF, diagnóstico e descarte só funcionam se cada evento estiver registrado por matriz: data de cobertura ou inseminação, touro ou sêmen utilizado, resultado do diagnóstico, previsão e data real do parto.",
          "Com o histórico organizado, a fazenda enxerga taxa de prenhez por lote, por touro e por protocolo, e passa a decidir o descarte com base em dados, não na memória do vaqueiro.",
        ],
      },
    ],
    fontes: [
      "Embrapa Gado de Corte — eficiência reprodutiva em rebanhos de cria",
      "ABIEC — Beef Report (indicadores do rebanho brasileiro)",
      "Literatura técnica sobre IATF no Brasil (protocolos e taxas de concepção)",
    ],
    cta: {
      titulo: "Controle o ciclo reprodutivo por matriz",
      texto:
        "Cio, cobertura, IATF, diagnóstico, previsão de parto e desmame: o MyRebanho organiza o histórico reprodutivo de cada vaca e mostra a taxa de prenhez por lote.",
      botao: "Quero organizar minha reprodução",
    },
  },

  // ============================================================
  // 4. CUSTO POR ARROBA
  // ============================================================
  {
    slug: "custo-por-arroba",
    intro:
      "O preço da arroba quem define é o mercado, você acompanha pelo indicador CEPEA/B3 e não tem controle sobre ele. O que está 100% nas suas mãos é o custo de produzir cada arroba. Quem não conhece esse número vende no escuro: pode estar tendo lucro ou prejuízo e só descobre no fim do ciclo.",
    secoes: [
      {
        titulo: "Primeiro conceito: arrobas produzidas",
        paragrafos: [
          "Antes do custo, é preciso saber quantas arrobas a fazenda de fato produziu no período. A fórmula consagrada é:",
          "Arrobas produzidas = (estoque final em @ + vendas em @) − (estoque inicial em @ + compras em @).",
          "Ou seja: o que a fazenda tem hoje mais o que vendeu, descontado o que já tinha e o que comprou. O que sobra é a produção genuína do período, o peso que o seu pasto, sua dieta e seu manejo colocaram nos animais.",
        ],
      },
      {
        titulo: "Segundo conceito: qual custo usar",
        paragrafos: [
          "A metodologia usual de custos em pecuária trabalha em camadas:",
        ],
        lista: [
          "Custo Operacional Efetivo (COE): tudo que sai do caixa no período — suplementação, sanidade, mão de obra, combustível, manutenção, arrendamento pago",
          "Custo Operacional Total (COT): COE + depreciações (cercas, curral, máquinas) + pró-labore do produtor",
          "Custo Total (CT): COT + custo de oportunidade do capital (terra, rebanho, benfeitorias)",
        ],
        destaque:
          "Custo da arroba produzida = custo do período ÷ arrobas produzidas no período. Compare o COT com o indicador do dia antes de decidir a venda.",
      },
      {
        titulo: "Exemplo numérico completo",
        paragrafos: [
          "Fazenda hipotética de recria e engorda, período de 12 meses, com premissas explícitas:",
        ],
        tabela: {
          colunas: ["Item", "Valor"],
          linhas: [
            ["Estoque inicial", "9.000 @"],
            ["Compras no período", "3.000 @"],
            ["Vendas no período", "6.500 @"],
            ["Estoque final", "10.000 @"],
            ["Arrobas produzidas = (10.000 + 6.500) − (9.000 + 3.000)", "4.500 @"],
            ["Custo operacional total do período", "R$ 1.035.000"],
            ["Custo da @ produzida = 1.035.000 ÷ 4.500", "R$ 230/@"],
          ],
        },
      },
      {
        titulo: "O que fazer com o número",
        paragrafos: [
          "Com o custo da arroba em mãos, as decisões mudam de natureza. Se a arroba está sendo produzida a R$ 230 e o mercado paga R$ 300, cada arroba deixada no pasto rende margem, e vale intensificar. Se o custo encosta no preço de venda, é hora de rever a dieta, a lotação ou a estratégia de compra de reposição.",
          "O custo por arroba também permite comparar safras, comparar lotes (confinado × pasto) e negociar melhor: quem conhece sua margem não vende no desespero.",
        ],
      },
      {
        titulo: "Os erros mais comuns nesse cálculo",
        paragrafos: [],
        lista: [
          "Ignorar depreciação e pró-labore: o COE parece bom, mas a fazenda se descapitaliza",
          "Misturar compra de animais com custeio: compra de reposição entra na conta de arrobas, não como despesa operacional",
          "Não fazer inventário (pesagem) no início e no fim do período: sem estoque em @ confiável, a produção vira chute",
          "Calcular só no fim do ciclo: o custo deve ser acompanhado mês a mês para permitir correção de rota",
        ],
      },
    ],
    fontes: [
      "CEPEA/Esalq-USP — Indicador do Boi Gordo CEPEA/B3 e metodologia de custos",
      "Embrapa — gestão econômica e custo de produção na pecuária de corte",
    ],
    cta: {
      titulo: "Custo da arroba produzida, em tempo real",
      texto:
        "O MyRebanho cruza suas pesagens com o financeiro e mostra o custo da arroba produzida sem você montar planilha nenhuma.",
      botao: "Quero conhecer meu custo",
    },
  },

  // ============================================================
  // 5. PASTEJO ROTACIONADO × CONFINAMENTO
  // ============================================================
  {
    slug: "pastejo-rotacionado-confinamento",
    intro:
      "Rotacionado ou confinamento? A pergunta certa não é 'qual é melhor', e sim 'qual é o papel de cada um na minha operação'. O pasto bem manejado é quase sempre a arroba mais barata do Brasil; o confinamento é a arroba mais rápida. As melhores operações combinam os dois.",
    secoes: [
      {
        titulo: "Pastejo rotacionado: a arroba barata",
        paragrafos: [
          "O princípio é dar ao capim o que ele precisa: períodos curtos de ocupação (1 a 7 dias) e descanso suficiente para rebrota (20 a 40 dias, conforme a forrageira e a estação). Na prática, divide-se a área em piquetes e o lote gira entre eles.",
          "Bem executado, o rotacionado permite dobrar ou até triplicar a taxa de lotação em relação ao pastejo contínuo na mesma área, segundo a literatura da Embrapa sobre manejo de pastagens tropicais. O investimento é relativamente baixo: cerca (elétrica, em geral), distribuição de água e bebedouros.",
          "O ganho individual nas águas fica tipicamente entre 0,7 e 1,0 kg/dia em pasto tropical bem manejado, com custo por arroba baixo, já que o insumo principal é o capim.",
        ],
      },
      {
        titulo: "Confinamento: a arroba rápida",
        paragrafos: [
          "No confinamento o animal recebe dieta total no cocho e converte em ganhos de 1,3 a 1,6 kg/dia, encurtando a terminação para ciclos típicos de 90 a 110 dias, nos quais o boi coloca de 3 a 5 arrobas.",
          "O custo é dominado pela alimentação (milho e coproduto respondem pela maior parte da diária), então a viabilidade depende da relação de troca: preço da arroba × custo da dieta. Em anos de milho caro, a conta aperta; com boi valorizado e grão barato, o confinamento brilha.",
          "Além da velocidade, o confinamento libera pasto na seca, justamente quando o capim é escasso, e permite vender no pico de entressafra.",
        ],
      },
      {
        titulo: "Comparativo direto",
        paragrafos: [],
        tabela: {
          colunas: ["Critério", "Rotacionado", "Confinamento"],
          linhas: [
            ["GMD típico", "0,7–1,0 kg/dia (águas)", "1,3–1,6 kg/dia"],
            ["Custo da @ produzida", "Mais baixo", "Mais alto (sensível ao milho)"],
            ["Investimento inicial", "Cerca + água", "Cocho, máquinas, silagem"],
            ["Giro do capital", "Mais lento", "Rápido (90–110 dias)"],
            ["Principal risco", "Seca / manejo do capim", "Relação de troca boi × grão"],
            ["Melhor papel", "Cria e recria", "Terminação"],
          ],
        },
      },
      {
        titulo: "A estratégia que os melhores usam: combinar",
        paragrafos: [
          "O modelo que vem encurtando a idade de abate no Brasil, historicamente próxima de 3,5 a 4 anos e hoje abaixo de 30 meses nas operações intensificadas, é justamente a combinação: cria e recria em pasto rotacionado bem manejado, terminação em confinamento ou semiconfinamento.",
          "O animal chega ao cocho mais pesado e mais jovem, fica menos tempo no confinamento e a fazenda gira mais arrobas por hectare por ano. A decisão de quando transferir do pasto para o cocho deve ser feita com dados: GMD da recria, custo da diária e relação de troca do momento.",
        ],
        destaque:
          "Pasto rotacionado produz a arroba barata; confinamento produz a arroba rápida. A margem está em saber a hora de trocar um pelo outro, e isso exige pesagem e custo em dia.",
      },
    ],
    fontes: [
      "Embrapa — manejo de pastagens tropicais e pastejo rotacionado",
      "Embrapa Gado de Corte — desempenho em confinamento",
      "ABIEC — Beef Report (intensificação e idade de abate)",
    ],
    cta: {
      titulo: "Simule pasto × confinamento com seus números",
      texto:
        "O MyRebanho tem simulações de pasto e confinamento para você comparar cenários antes de decidir onde termina o seu boi.",
      botao: "Quero simular minha engorda",
    },
  },

  // ============================================================
  // 6. 5 ERROS DE GESTÃO
  // ============================================================
  {
    slug: "erros-gestao-pecuaria",
    intro:
      "Depois de acompanhar dezenas de operações de corte, os consultores repetem o mesmo diagnóstico: o que separa fazendas rentáveis de fazendas apertadas raramente é a genética ou a terra. É gestão. Estes são os 5 erros mais comuns, e mais caros, que encontramos em fazendas com baixa rentabilidade.",
    secoes: [
      {
        titulo: "Erro 1: decidir no olho, sem pesar",
        paragrafos: [
          "“Esse lote está bonito” não é dado. Sem pesagens periódicas, não existe GMD; sem GMD, não há como saber se a suplementação está pagando, qual lote performa e qual animal deveria já ter sido vendido.",
          "Correção: rotina de pesagem a cada 60–90 dias, com brinco eletrônico e balança conectada para eliminar erro de anotação. O custo da rotina é ínfimo perto do custo da decisão errada.",
        ],
      },
      {
        titulo: "Erro 2: não conhecer o custo da arroba produzida",
        paragrafos: [
          "Muitos produtores sabem o preço da arroba de cor, mas não sabem quanto custa produzi-la na própria fazenda. Resultado: vendem com margem negativa sem perceber, ou deixam de intensificar quando a margem era ótima.",
          "Correção: inventário em arrobas no início e fim do período, custos organizados por centro de custo e cálculo mensal do custo da arroba produzida.",
        ],
      },
      {
        titulo: "Erro 3: vender no desespero, não na estratégia",
        paragrafos: [
          "Sem fluxo de caixa projetado, a venda acontece quando a conta aperta, geralmente no pior momento do mercado, junto com todo mundo que também não planejou.",
          "Correção: fluxo de caixa com projeção de 12 meses, casando os ciclos de venda com os compromissos. Quem enxerga o caixa com antecedência escolhe quando vender.",
        ],
      },
      {
        titulo: "Erro 4: carregar animal improdutivo",
        paragrafos: [
          "A vaca vazia pela segunda estação, o boi de GMD cronicamente baixo, o lote que não responde: todos consomem pasto e custo fixo em silêncio. Em rebanhos sem controle individual, esses animais ficam anos escondidos na média.",
          "Correção: ranking de GMD por animal e histórico reprodutivo por matriz. Descarte deixa de ser evento traumático e vira rotina mensal de higiene do rebanho.",
        ],
        destaque:
          "Animal improdutivo não dá prejuízo de uma vez, ele dá prejuízo todo dia, um pouco. Por isso passa despercebido.",
      },
      {
        titulo: "Erro 5: dados espalhados em caderno e planilha",
        paragrafos: [
          "A pesagem está no caderno do vaqueiro, a vacina na agenda, o financeiro numa planilha e o histórico na memória. Quando o gestor precisa cruzar as informações, para saber por exemplo o custo do lote 12 até aqui, a resposta demora dias ou simplesmente não existe.",
          "Correção: uma única base de dados por animal, alimentada no campo (mesmo offline) e consultável de qualquer lugar. O dado nasce no curral e chega ao escritório sem redigitação.",
        ],
      },
      {
        titulo: "Por onde começar",
        paragrafos: [
          "Não tente corrigir os cinco de uma vez. A ordem que recomendamos: primeiro a pesagem com identificação individual (ela alimenta tudo), depois o custo da arroba, depois fluxo de caixa, e então as rotinas de descarte. Com a base de dados única, o resto vira consequência.",
        ],
      },
    ],
    fontes: [
      "Embrapa — boas práticas de gestão na pecuária de corte",
      "Experiência de campo consolidada de consultorias de gestão pecuária",
    ],
    cta: {
      titulo: "Elimine os 5 erros com uma única ferramenta",
      texto:
        "Pesagem individual, custo da arroba, fluxo de caixa, ranking de GMD e histórico completo por animal, tudo no MyRebanho.",
      botao: "Quero arrumar minha gestão",
    },
  },
];

/** Busca um artigo pelo slug */
export function getArtigo(slug: string): Artigo | undefined {
  return artigos.find((a) => a.slug === slug);
}
