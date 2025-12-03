import React, { useState } from 'react';
import Intro from './components/Intro';
import QuizQuestion from './components/QuizQuestion';
import Processing from './components/Processing';
import Results from './components/Results';
import { QUIZ_QUESTIONS } from './constants';
import { AppStep, QuizState } from './types';

const App: React.FC = () => {
  const [state, setState] = useState<QuizState>({
    currentStep: 'intro',
    currentQuestionIndex: 0,
    answers: {},
  });

  const handleStart = () => {
    setState(prev => ({ ...prev, currentStep: 'quiz' }));
  };

  const handleAnswer = (answerValue: string) => {
    setState(prev => {
      const newAnswers = { ...prev.answers, [prev.currentQuestionIndex]: answerValue };
      return { ...prev, answers: newAnswers };
    });

    // Small delay for better UX interaction feel
    setTimeout(() => {
      if (state.currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
        setState(prev => ({
          ...prev,
          currentQuestionIndex: prev.currentQuestionIndex + 1,
        }));
      } else {
        setState(prev => ({ ...prev, currentStep: 'processing' }));
      }
    }, 300);
  };

  const handleProcessingComplete = () => {
    setState(prev => ({ ...prev, currentStep: 'results' }));
  };

  // Calculate progress for the progress bar
  const progress = ((state.currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="min-h-screen bg-[#f0f2f5] flex items-center justify-center font-sans">
      {/* Mobile Wrapper */}
      <div className="w-full h-[100dvh] md:h-[850px] md:max-w-[430px] bg-white md:rounded-[40px] shadow-2xl overflow-hidden relative flex flex-col border-gray-100 md:border-4">
        
        {state.currentStep === 'intro' && (
          <Intro onStart={handleStart} />
        )}

        {state.currentStep === 'quiz' && (
          <QuizQuestion 
            data={QUIZ_QUESTIONS[state.currentQuestionIndex]} 
            onAnswer={handleAnswer}
            progress={progress}
          />
        )}

        {state.currentStep === 'processing' && (
          <Processing onComplete={handleProcessingComplete} />
        )}

        {state.currentStep === 'results' && (
          <Results />
        )}

      </div>
      
      {/* Desktop Background (hidden on mobile) */}
      <div className="fixed inset-0 -z-10 hidden md:block bg-[#004F2D]">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
    </div>
  );
};

export default App;