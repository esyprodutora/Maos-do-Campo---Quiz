import React, { useEffect, useState } from 'react';
import { Bot, CheckCircle2, Satellite, Wifi, Lock } from 'lucide-react';

interface ProcessingProps {
  onComplete: () => void;
}

const Processing: React.FC<ProcessingProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const times = [0, 2000, 4500, 6500];
    times.forEach((t, i) => setTimeout(() => setStep(i), t));
    const finishTimeout = setTimeout(onComplete, 8000);
    return () => clearTimeout(finishTimeout);
  }, [onComplete]);

  const steps = [
    { text: "Conectando ao satélite...", sub: "Buscando dados da região", icon: <Satellite size={48} />, color: "text-blue-500", bg: "bg-blue-50" },
    { text: "Consultando Tonico AI...", sub: "Analisando padrões de perda", icon: <Bot size={56} className="animate-bounce" />, color: "text-[#00A86B]", bg: "bg-green-50" },
    { text: "Verificando modo offline...", sub: "Sincronizando banco de dados", icon: <Wifi size={48} />, color: "text-purple-500", bg: "bg-purple-50" },
    { text: "Finalizando relatório...", sub: "Quase pronto", icon: <CheckCircle2 size={48} />, color: "text-gray-800", bg: "bg-gray-100" }
  ];

  const current = steps[Math.min(step, steps.length - 1)];

  return (
    <div className="flex flex-col items-center justify-center h-full bg-white relative overflow-hidden px-8 font-sans">
      
      {/* Background Tech Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[500px] h-[500px] border border-gray-200 rounded-full animate-[spin_10s_linear_infinite]" />
        <div className="absolute w-[350px] h-[350px] border border-gray-300 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
      </div>

      <div className="relative z-10 w-full max-w-xs text-center">
        
        {/* Main Icon Circle */}
        <div className={`mx-auto w-32 h-32 rounded-full ${current.bg} flex items-center justify-center mb-8 shadow-xl transition-all duration-500 transform scale-100`}>
          <div className={`${current.color} transition-all duration-300`}>
            {current.icon}
          </div>
        </div>

        {/* Text */}
        <h2 className="text-2xl font-black text-gray-900 mb-2 animate-fade-in min-h-[32px]">
          {current.text}
        </h2>
        <p className="text-gray-500 font-medium mb-10 animate-fade-in min-h-[24px]">
          {current.sub}
        </p>

        {/* Custom Progress Bar */}
        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[shimmer_1s_infinite]" />
          <div className="h-full bg-[#00A86B] transition-all duration-[8000ms] ease-linear w-full origin-left" />
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-400 font-bold uppercase tracking-widest">
          <Lock size={12} />
          Ambiente Seguro
        </div>
      </div>
    </div>
  );
};

export default Processing;