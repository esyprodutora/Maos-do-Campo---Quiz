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
    }, 400);
  };

  const handleProcessingComplete = () => {
    setState(prev => ({ ...prev, currentStep: 'results' }));
  };

  // Calculate progress for the progress bar
  const progress = ((state.currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="min-h-screen bg-[#f0f2f5] flex items-center justify-center font-sans overflow-hidden">
      
      {/* Mobile Wrapper/Phone Frame */}
      <div className="w-full h-[100dvh] md:h-[850px] md:max-w-[430px] bg-white md:rounded-[45px] shadow-2xl overflow-hidden relative flex flex-col border-gray-200 md:border-[8px] transition-all">
        
        {/* Dynamic Content */}
        <div className="flex-1 h-full overflow-hidden relative">
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

        {/* Home Indicator (iOS style for desktop view) */}
        <div className="hidden md:block absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-900/10 rounded-full pointer-events-none z-50"></div>
      </div>
      
      {/* Desktop Background Ambience */}
      <div className="fixed inset-0 -z-10 hidden md:block bg-gradient-to-br from-[#004F2D] to-[#002817]">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:24px_24px]"></div>
        {/* Decorative blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00A86B] rounded-full mix-blend-overlay filter blur-[100px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400 rounded-full mix-blend-overlay filter blur-[100px] opacity-20"></div>
      </div>
    </div>
  );
};

export default App;