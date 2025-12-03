import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

interface IntroProps {
  onStart: () => void;
}

const Intro: React.FC<IntroProps> = ({ onStart }) => {
  const userPhotos = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80", // Man
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80", // Woman
    "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=100&h=100&fit=crop&q=80"  // Man (Rural look)
  ];

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
        
        {/* Trust Badge */}
        <div className="flex items-center gap-2 mb-6 opacity-90">
          <div className="flex -space-x-3">
            {userPhotos.map((url, i) => (
              <div key={i} className="w-9 h-9 rounded-full border-2 border-white/20 bg-gray-200 overflow-hidden shadow-lg">
                <img src={url} alt="Produtor" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="text-xs font-semibold ml-2 shadow-black drop-shadow-md">
            <span className="text-[#00A86B] font-bold">+15.000</span> produtores usam
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

        {/* CTA Button */}
        <button
          onClick={onStart}
          className="group relative w-full bg-[#00A86B] hover:bg-[#008f5b] text-white text-lg font-bold py-5 rounded-2xl shadow-[0_0_40px_rgba(0,168,107,0.4)] transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <span className="relative z-10">INICIAR DIAGNÓSTICO GRATUITO</span>
          <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
        </button>
        
        <p className="text-center text-[10px] text-gray-400 mt-4 font-medium uppercase tracking-widest">
          Levará menos de 1 minuto
        </p>
      </div>
    </div>
  );
};

export default Intro;