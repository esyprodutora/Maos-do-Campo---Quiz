import React from 'react';
import { Question, Option } from '../types';
import * as Icons from 'lucide-react';

interface QuizQuestionProps {
  data: Question;
  onAnswer: (value: string) => void;
  progress: number;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ data, onAnswer, progress }) => {
  const IconComponent = (name: string) => {
    // @ts-ignore
    const Icon = Icons[name];
    return Icon ? <Icon size={28} strokeWidth={1.5} /> : null;
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Top Bar */}
      <div className="px-6 pt-6 pb-2">
        <div className="flex justify-between items-center text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
          <span>Progresso</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#00A86B] transition-all duration-700 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Container */}
      <div className="flex-1 flex flex-col px-6 overflow-y-auto custom-scrollbar">
        <h2 className="text-2xl md:text-3xl font-bold text-[#004F2D] mt-6 mb-8 leading-tight">
          {data.question}
        </h2>

        <div className="space-y-3 pb-6">
          {data.options.map((option: Option, idx) => (
            <button
              key={idx}
              onClick={() => onAnswer(option.value)}
              className="group w-full p-4 bg-white border-2 border-gray-100 rounded-2xl text-left hover:border-[#00A86B] hover:bg-green-50/50 transition-all duration-200 flex items-center gap-4 active:scale-[0.98]"
            >
              {/* Icon Box */}
              <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-[#00A86B] transition-colors shrink-0 shadow-sm">
                {option.icon ? IconComponent(option.icon) : <div className="w-4 h-4 bg-gray-300 rounded-full" />}
              </div>
              
              {/* Label */}
              <span className="text-lg font-semibold text-gray-700 group-hover:text-[#004F2D] leading-snug">
                {option.label}
              </span>

              {/* Chevron/Indicator (Optional aesthetic touch) */}
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-[#00A86B]">
                 <Icons.ChevronRight size={20} />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;