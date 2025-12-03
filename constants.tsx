import { Question } from './types';
import { 
  NotebookPen, 
  FileSpreadsheet, 
  XCircle, 
  Smartphone, 
  CheckCircle2, 
  HelpCircle, 
  Search, 
  Sprout, 
  Coins, 
  AlertTriangle 
} from 'lucide-react';

// Optimized images (w=600, q=60) for faster mobile loading
export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    question: "Como você controla os gastos da sua lavoura hoje?",
    backgroundImage: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=60&w=600&auto=format&fit=crop",
    insight: "⚠️ O 'caderninho' esconde erros de cálculo que somam até 15% de prejuízo por safra.",
    options: [
      { label: "Caderninho / Papel", value: "notebook", icon: "NotebookPen" },
      { label: "De cabeça / Memória", value: "loose", icon: "XCircle" },
      { label: "Planilha de Excel", value: "excel", icon: "FileSpreadsheet" },
      { label: "Aplicativo de Gestão", value: "app", icon: "Smartphone" },
    ],
  },
  {
    id: 2,
    question: "Você sabe o custo exato de cada talhão nesta safra?",
    backgroundImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=60&w=600&auto=format&fit=crop",
    insight: "💡 Produtores que monitoram custos por talhão aumentam a margem em até 22%.",
    options: [
      { label: "Sim, cada centavo", value: "yes", icon: "CheckCircle2" },
      { label: "Tenho uma média", value: "maybe", icon: "HelpCircle" },
      { label: "Não faço ideia", value: "no", icon: "XCircle" },
    ],
  },
  {
    id: 3,
    question: "Como você decide o momento exato de aplicar insumos?",
    backgroundImage: "https://images.unsplash.com/photo-1530260626688-d482330037a0?q=60&w=600&auto=format&fit=crop",
    insight: "⛈️ Aplicar no timing errado por falta de dados joga fora 30% da eficiência do produto.",
    options: [
      { label: "Olhômetro / Hábito", value: "habit", icon: "Search" },
      { label: "Recomendação Agronômica", value: "agronomist", icon: "CheckCircle2" },
      { label: "Dados Climáticos / GPS", value: "tech", icon: "Smartphone" },
    ],
  },
  {
    id: 4,
    question: "Sua internet funciona bem em toda a propriedade?",
    backgroundImage: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=60&w=600&auto=format&fit=crop",
    insight: "📵 Ferramentas online falham no campo. Você precisa de tecnologia que funcione 100% offline.",
    options: [
      { label: "Sim, em tudo", value: "yes", icon: "CheckCircle2" },
      { label: "Oscila muito", value: "partial", icon: "HelpCircle" },
      { label: "Não, é péssima na roça", value: "no", icon: "XCircle" },
    ],
  },
  {
    id: 5,
    question: "Você consegue saber seu lucro antes de vender a colheita?",
    backgroundImage: "https://images.unsplash.com/photo-1559884743-748dfa89782b?q=60&w=600&auto=format&fit=crop",
    insight: "💰 Quem prevê o lucro consegue negociar insumos melhor e vender na hora certa.",
    options: [
      { label: "Sim, com certeza", value: "yes", icon: "Coins" },
      { label: "Não, é uma surpresa", value: "no", icon: "XCircle" },
      { label: "Geralmente tenho prejuízo", value: "loss", icon: "AlertTriangle" },
    ],
  },
  {
    id: 6,
    question: "Qual cultura é o foco da sua produção?",
    backgroundImage: "https://images.unsplash.com/photo-1515596377399-53b00694e9f7?q=60&w=600&auto=format&fit=crop",
    insight: "🌱 O Tonico AI é treinado especificamente para maximizar resultados na sua cultura.",
    options: [
      { label: "Café", value: "cafe", icon: "Sprout" },
      { label: "Milho / Soja", value: "graos", icon: "Sprout" },
      { label: "Hortifruti", value: "horti", icon: "Sprout" },
      { label: "Outra", value: "outra", icon: "Sprout" },
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