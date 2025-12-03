export interface Option {
  label: string;
  value: string;
  icon?: string;
}

export interface Question {
  id: number;
  question: string;
  options: Option[];
  backgroundImage: string;
  insight?: string; // Persuasive fact/stat displayed with the question
}

export type AppStep = 'intro' | 'quiz' | 'processing' | 'results';

export interface QuizState {
  currentStep: AppStep;
  currentQuestionIndex: number;
  answers: Record<number, string>;
}