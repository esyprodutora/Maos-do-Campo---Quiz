import { Question } from './types';

// Optimized images (w=600, q=60) for faster mobile loading
export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    question: "Como você controla as contas e gastos da fazenda hoje?",
    backgroundImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=60&w=600&auto=format&fit=crop",
    insight: "⚠️ O 'caderninho' esconde erros de cálculo que somam até 15% de prejuízo por safra.",
    options: [
      { label: "Caderninho / Papel de Pão", value: "notebook", icon: "BookOpen" },
      { label: "De cabeça / Memória", value: "memory", icon: "CircleX" },
      { label: "Planilha no Computador", value: "excel", icon: "FileSpreadsheet" },
      { label: "Aplicativo de Gestão", value: "app", icon: "Smartphone" },
    ],
  },
  {
    id: 2,
    question: "Você sabe exatamente quanto tem de insumo no galpão agora?",
    backgroundImage: "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=60&w=600&auto=format&fit=crop",
    insight: "📦 Estoque sem controle gera compras duplicadas e abre brecha para desperdícios ou furtos.",
    options: [
      { label: "Sei de cabeça", value: "memory", icon: "CircleHelp" },
      { label: "Tenho anotado, mas desatualizado", value: "outdated", icon: "BookOpen" },
      { label: "Não sei, preciso ir lá contar", value: "no", icon: "Package" },
      { label: "Controle total e atualizado", value: "yes", icon: "CircleCheck" },
    ],
  },
  {
    id: 3,
    question: "Como você registra o dia de trabalho dos funcionários ou diaristas?",
    backgroundImage: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=60&w=600&auto=format&fit=crop",
    insight: "👥 Falhas no apontamento de horas e diárias são a causa nº 1 de processos trabalhistas no campo.",
    options: [
      { label: "Anoto num caderno no fim do dia", value: "notebook", icon: "BookOpen" },
      { label: "Confio na memória", value: "memory", icon: "Users" },
      { label: "Marco na folha de ponto", value: "paper", icon: "FileSpreadsheet" },
      { label: "Registro digital automático", value: "app", icon: "Smartphone" },
    ],
  },
  {
    id: 4,
    question: "Quando uma máquina quebra, você tem o histórico das manutenções?",
    backgroundImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=60&w=600&auto=format&fit=crop",
    insight: "🚜 A falta de preventivas diminui a vida útil do maquinário em até 4 anos.",
    options: [
      { label: "Não, só arrumo quando quebra", value: "break", icon: "TriangleAlert" },
      { label: "Tento lembrar das trocas de óleo", value: "memory", icon: "CircleHelp" },
      { label: "Tenho tudo anotado e programado", value: "yes", icon: "Tractor" },
    ],
  },
  {
    id: 5,
    question: "Você tem um histórico de chuva de cada talhão?",
    backgroundImage: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=60&w=600&auto=format&fit=crop",
    insight: "🌧️ Saber quanto choveu em cada pedaço da terra define o sucesso da adubação.",
    options: [
      { label: "Tenho um pluviômetro na sede", value: "simple", icon: "Droplets" },
      { label: "Olho para o céu e estimo", value: "guess", icon: "Search" },
      { label: "Não controlo", value: "no", icon: "CircleX" },
      { label: "Tenho dados exatos por talhão", value: "yes", icon: "Smartphone" },
    ],
  },
  {
    id: 6,
    question: "Você sabe qual foi o seu custo final por saca na última colheita?",
    backgroundImage: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=60&w=600&auto=format&fit=crop",
    insight: "📉 Vender a saca sem saber o custo real é o caminho mais rápido para a falência.",
    options: [
      { label: "Tenho uma estimativa", value: "guess", icon: "CircleHelp" },
      { label: "Não, só vejo o que sobrou no banco", value: "bank", icon: "DollarSign" },
      { label: "Sim, sei o custo exato", value: "yes", icon: "Coins" },
    ],
  },
  {
    id: 7,
    question: "Como você decide a hora certa de vender sua produção?",
    backgroundImage: "https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?q=60&w=600&auto=format&fit=crop",
    insight: "📊 Vender na emoção ou necessidade faz o produtor perder as altas do mercado.",
    options: [
      { label: "Quando preciso de dinheiro", value: "need", icon: "CreditCard" },
      { label: "Quando o vizinho vende", value: "neighbor", icon: "Users" },
      { label: "Acompanho cotações e custo", value: "data", icon: "TrendingUp" },
    ],
  },
  {
    id: 8,
    question: "As contas da casa e da fazenda são separadas?",
    backgroundImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=60&w=600&auto=format&fit=crop",
    insight: "🏠 Misturar o dinheiro da família com o da lavoura é o erro financeiro #1.",
    options: [
      { label: "É tudo a mesma conta", value: "mixed", icon: "CircleX" },
      { label: "Tento separar, mas misturo", value: "try", icon: "CircleHelp" },
      { label: "Totalmente separadas", value: "separated", icon: "CircleCheck" },
    ],
  },
  {
    id: 9,
    question: "Você lembra quando foi a última aplicação de defensivo em cada talhão?",
    backgroundImage: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=60&w=600&auto=format&fit=crop",
    insight: "📅 Perder o período de carência ou repetir aplicação gera custo dobrado e risco químico.",
    options: [
      { label: "Confio na memória", value: "memory", icon: "CircleHelp" },
      { label: "Olho na embalagem vazia", value: "trash", icon: "Search" },
      { label: "Tenho tudo registrado", value: "yes", icon: "Calendar" },
    ],
  },
  {
    id: 10,
    question: "Qual é a sua cultura principal?",
    backgroundImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=60&w=600&auto=format&fit=crop",
    insight: "🌱 O aplicativo se adapta aos ciclos específicos da sua plantação.",
    options: [
      { label: "Café", value: "coffee", icon: "Leaf" },
      { label: "Soja", value: "soy", icon: "Sprout" },
      { label: "Milho", value: "corn", icon: "Sprout" },
      { label: "Hortifruti", value: "veg", icon: "Leaf" },
      { label: "Outra", value: "other", icon: "Leaf" },
    ],
  },
];

export const PROCESSING_MESSAGES = [
  "Conectando aos satélites...",
  "Analisando histórico de chuvas e solo...",
  "Tonico AI processando seus dados...",
  "Calculando desperdício financeiro...",
  "Gerando diagnóstico de safra..."
];