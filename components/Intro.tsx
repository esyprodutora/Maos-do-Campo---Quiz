import React from 'react';
import { ArrowRight, Star, Users } from 'lucide-react';

interface IntroProps {
  onStart: () => void;
}

const Intro: React.FC<IntroProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col h-full bg-white relative overflow-hidden animate-fade-in font-sans">
      
      {/* Immersive Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop" 
          alt="Agriculture Field" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-6 pb-8 text-white">
        
        {/* Trust Badge (No Photos, High Contrast) */}
        <div className="flex items-center gap-2 mb-6">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
            <div className="bg-[#00A86B] p-1 rounded-full">
               <Users size={14} className="text-white" />
            </div>
            <div className="text-sm font-bold text-white shadow-black drop-shadow-sm">
              Mais de <span className="text-[#00A86B] font-black">15.000</span> produtores usam
            </div>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-black leading-[0.95] tracking-tight mb-4 drop-shadow-xl">
          Pare de perder <br/>
          <span className="text-[#00A86B]">dinheiro</span> na <br/>
          sua lavoura.
        </h1>

        {/* Subheadline */}
        <p className="text-gray-200 text-lg font-medium leading-relaxed mb-8 max-w-xs drop-shadow-md">
          Faça o diagnóstico gratuito e descubra onde está o gargalo da sua produção com a ajuda da IA.
        </p>

        {/* Feature Highlights (Mini) */}
        <div className="flex gap-3 mb-8">
           <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-2 rounded-xl">
             <span className="block text-[10px] text-gray-300 uppercase font-bold">Tecnologia</span>
             <span className="text-sm font-bold text-white flex items-center gap-1">
               <Star size={12} className="text-yellow-400 fill-yellow-400" /> Tonico AI
             </span>
           </div>
           <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-2 rounded-xl">
             <span className="block text-[10px] text-gray-300 uppercase font-bold">Funciona</span>
             <span className="text-sm font-bold text-white">100% Offline</span>
           </div>
        </div>

        {/* CTA Button (Redesigned for Mobile) */}
        <button
          onClick={onStart}
          className="group relative w-full bg-gradient-to-b from-[#00C07A] to-[#00995E] text-white p-4 rounded-xl shadow-[0_10px_30px_rgba(0,168,107,0.4)] border-t border-white/20 border-b-[5px] border-[#007F4E] active:border-b-0 active:translate-y-[5px] transition-all flex items-center justify-between hover:brightness-110 overflow-hidden"
        >
          {/* Subtle Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />

          <div className="flex flex-col text-left z-10">
            <span className="text-[10px] font-bold text-green-100 uppercase tracking-widest mb-0.5">100% Gratuito</span>
            <span className="text-base sm:text-lg font-black leading-none tracking-tight">INICIAR DIAGNÓSTICO GRATUITO</span>
          </div>
          
          <div className="bg-white/20 h-11 w-11 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white group-hover:text-[#00995E] transition-colors z-10 shadow-inner">
             <ArrowRight size={22} strokeWidth={3} />
          </div>
        </button>
        
        <p className="text-center text-[10px] text-gray-400 mt-4 font-medium uppercase tracking-widest">
          Levará menos de 1 minuto
        </p>
      </div>
    </div>
  );
};

export default Intro;