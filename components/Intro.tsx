import React from 'react';
import { ArrowRight, Leaf, TrendingDown, ShieldAlert } from 'lucide-react';

interface IntroProps {
  onStart: () => void;
}

const Intro: React.FC<IntroProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col h-full bg-white relative overflow-hidden animate-fade-in">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-50 rounded-full translate-x-1/3 translate-y-1/3 opacity-60 pointer-events-none" />

      {/* Content Container */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-[#004F2D] rounded-full text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
          <Leaf size={14} className="fill-current" />
          Análise de Lucratividade
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#004F2D] text-center leading-[1.1] mb-6">
          Sua lavoura está <span className="text-[#00A86B]">dando lucro</span> ou apenas pagando contas?
        </h1>

        {/* Subhead with icons */}
        <div className="space-y-4 max-w-sm w-full mb-8">
          <div className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
            <div className="bg-red-100 p-2 rounded-full text-red-600">
              <TrendingDown size={20} />
            </div>
            <p className="text-sm font-medium text-gray-600">Identifique gargalos de custo</p>
          </div>
          <div className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
            <div className="bg-yellow-100 p-2 rounded-full text-yellow-600">
              <ShieldAlert size={20} />
            </div>
            <p className="text-sm font-medium text-gray-600">Descubra onde o dinheiro vaza</p>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm max-w-xs leading-relaxed">
          Faça o teste oficial do <strong>Mãos do Campo</strong> e receba um diagnóstico personalizado em 40 segundos.
        </p>
      </div>

      {/* Footer / CTA Area */}
      <div className="p-6 bg-white z-10 pb-10">
        <button
          onClick={onStart}
          className="group w-full bg-[#00A86B] hover:bg-[#008f5b] text-white text-lg font-bold py-5 rounded-2xl shadow-xl shadow-green-200 transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
        >
          <span>Iniciar Diagnóstico</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        <p className="mt-4 text-center text-[10px] text-gray-400 font-medium uppercase tracking-widest">
          100% Gratuito • Seguro • Rápido
        </p>
      </div>
    </div>
  );
};

export default Intro;