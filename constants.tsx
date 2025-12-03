import { Question } from './types';
import { 
  NotebookPen, 
  FileSpreadsheet, 
  XCircle, 
  Smartphone, 
  CheckCircle2, 
  HelpCircle, 
  Search, 
  Tractor, 
  Sprout, 
  Coins, 
  AlertTriangle 
} from 'lucide-react';

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    question: "Como você controla os gastos da sua lavoura hoje?",
    options: [
      { label: "Caderninho de anotações", value: "notebook", icon: "NotebookPen" },
      { label: "Papéis soltos / De cabeça", value: "loose", icon: "XCircle" },
      { label: "Planilha de Excel", value: "excel", icon: "FileSpreadsheet" },
      { label: "Aplicativo ou Software", value: "app", icon: "Smartphone" },
    ],
  },
  {
    id: 2,
    question: "Você sabe exatamente quanto custou cada hectare da sua última safra?",
    options: [
      { label: "Sim, com precisão", value: "yes", icon: "CheckCircle2" },
      { label: "Tenho uma estimativa", value: "maybe", icon: "HelpCircle" },
      { label: "Não faço ideia", value: "no", icon: "XCircle" },
    ],
  },
  {
    id: 3,
    question: "Você revisa a lista de insumos aplicados por talhão?",
    options: [
      { label: "Sempre reviso", value: "always", icon: "Search" },
      { label: "Às vezes", value: "sometimes", icon: "HelpCircle" },
      { label: "Nunca, aplico e sigo", value: "never", icon: "XCircle" },
    ],
  },
  {
    id: 4,
    question: "Você registra gastos com mão de obra, diesel e manutenção diariamente?",
    options: [
      { label: "Sim, tudo", value: "yes", icon: "Tractor" },
      { label: "Só os gastos maiores", value: "partial", icon: "HelpCircle" },
      { label: "Não registro", value: "no", icon: "XCircle" },
    ],
  },
  {
    id: 5,
    question: "Você consegue prever seu lucro antes mesmo da colheita?",
    options: [
      { label: "Sim, tenho previsão", value: "yes", icon: "Coins" },
      { label: "Não, só depois de vender", value: "no", icon: "XCircle" },
      { label: "Só sei que perdi dinheiro depois", value: "loss", icon: "AlertTriangle" },
    ],
  },
  {
    id: 6,
    question: "Qual cultura principal você planta?",
    options: [
      { label: "Café", value: "cafe", icon: "Sprout" },
      { label: "Milho", value: "milho", icon: "Sprout" },
      { label: "Soja", value: "soja", icon: "Sprout" },
      { label: "Outra", value: "outra", icon: "Sprout" },
    ],
  },
  {
    id: 7,
    question: "Qual seu maior medo hoje na lavoura?",
    options: [
      { label: "Custos saindo do controle", value: "costs", icon: "AlertTriangle" },
      { label: "Não saber o lucro real", value: "profit", icon: "HelpCircle" },
      { label: "Desorganização geral", value: "mess", icon: "XCircle" },
      { label: "Preços dos insumos", value: "inputs", icon: "Coins" },
    ],
  },
];

export const PROCESSING_MESSAGES = [
  "Analisando suas respostas...",
  "Identificando pontos de perda financeira...",
  "Comparando com produtores de alta rentabilidade...",
  "Calculando potencial de lucro...",
  "Gerando diagnóstico..."
];
