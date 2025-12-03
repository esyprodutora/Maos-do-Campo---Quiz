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
    return Icon ? <Icon size={24} strokeWidth={2} /> : null;
  };

  return (
    <div className="flex flex-col h-full relative font-sans overflow-hidden bg-black">
      
      {/* --- DYNAMIC IMMERSIVE BACKGROUND --- */}
      <div className="absolute inset-0 z-0 transition-opacity duration-700 ease-in-out">
         <img 
            key={data.id} // Forces re-render on change for animation
            src={data.backgroundImage}
            alt="Background"
            className="w-full h-full object-cover opacity-60 animate-fade-in scale-105"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
      </div>

      {/* --- PROGRESS BAR --- */}
      <div className="relative z-10 px-6 pt-8 pb-2">
        <div className="flex gap-1.5 h-1.5 mb-6">
           {/* Segmented Progress Bar */}
           {Array.from({ length: 6 }).map((_, idx) => {
              const isActive = (progress / 100) * 6 > idx;
              return (
                 <div 
                   key={idx} 
                   className={`flex-1 rounded-full transition-all duration-500 ${isActive ? 'bg-[#00A86B] shadow-[0_0_10px_#00A86B]' : 'bg-white/20'}`}
                 />
              );
           })}
        </div>
      </div>

      {/* --- CONTENT AREA --- */}
      <div className="relative z-10 flex-1 flex flex-col justify-end pb-8 px-4">
        
        {/* Question Card */}
        <div className="bg-white/95 backdrop-blur-xl rounded-[32px] p-6 shadow-2xl animate-slide-up border border-white/20">
            
            {/* Question Text */}
            <h2 className="text-2xl md:text-[28px] leading-[1.2] font-black text-gray-900 mb-4 tracking-tight">
              {data.question}
            </h2>

            {/* Persuasive Insight Box */}
            {data.insight && (
              <div className="bg-orange-50 border-l-4 border-orange-400 p-3 rounded-r-xl mb-6 animate-fade-in">
                 <p className="text-xs md:text-sm font-semibold text-orange-900 leading-snug">
                    {data.insight}
                 </p>
              </div>
            )}

            {/* Options Grid */}
            <div className="flex flex-col gap-3">
              {data.options.map((option: Option, idx) => (
                <button
                  key={idx}
                  onClick={() => onAnswer(option.value)}
                  className="group relative w-full p-4 bg-gray-50 hover:bg-[#00A86B] border-2 border-transparent hover:border-[#00cf83] rounded-2xl transition-all duration-200 active:scale-[0.98] flex items-center text-left"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-full bg-white text-gray-500 flex items-center justify-center shrink-0 mr-4 shadow-sm group-hover:text-[#00A86B] transition-colors">
                    {option.icon ? IconComponent(option.icon) : <div className="w-4 h-4" />}
                  </div>

                  {/* Label */}
                  <span className="flex-1 text-base font-bold text-gray-700 group-hover:text-white transition-colors">
                    {option.label}
                  </span>

                  {/* Arrow Indicator */}
                  <div className="w-6 h-6 rounded-full border border-gray-300 group-hover:border-white/50 flex items-center justify-center ml-2 transition-all">
                    <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-white transition-colors" />
                  </div>
                </button>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;