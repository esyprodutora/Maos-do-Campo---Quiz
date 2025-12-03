import React, { useEffect, useState } from 'react';
import { Loader2, Bot, CheckCircle2, Sprout } from 'lucide-react';

interface ProcessingProps {
  onComplete: () => void;
}

const Processing: React.FC<ProcessingProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Timeline of processing events
    const times = [0, 1500, 3000, 4500];
    
    times.forEach((t, i) => {
      setTimeout(() => setStep(i), t);
    });

    const finishTimeout = setTimeout(() => {
      onComplete();
    }, 5500);

    return () => clearTimeout(finishTimeout);
  }, [onComplete]);

  const steps = [
    { text: "Compilando dados da safra...", icon: <Sprout size={32} /> },
    { text: "Cruzando com mercado...", icon: <Loader2 size={32} className="animate-spin" /> },
    { text: "Consultando IA Tonico...", icon: <Bot size={32} className="animate-pulse" /> },
    { text: "Finalizando diagnóstico...", icon: <CheckCircle2 size={32} /> }
  ];

  const currentStep = steps[Math.min(step, steps.length - 1)];

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 bg-white text-center relative overflow-hidden">
      {/* Background Pulse */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 bg-green-50 rounded-full animate-ping opacity-20"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="w-24 h-24 bg-[#00A86B] rounded-3xl flex items-center justify-center text-white shadow-2xl shadow-green-200 mb-8 transition-all duration-500 transform scale-110">
          {currentStep.icon}
        </div>

        <h2 className="text-2xl font-bold text-[#004F2D] mb-2 animate-fade-in">
          {currentStep.text}
        </h2>
        
        <p className="text-gray-400 text-sm">Por favor, aguarde um momento.</p>

        {/* Progress Bar */}
        <div className="w-48 h-1.5 bg-gray-100 rounded-full mt-12 overflow-hidden">
          <div 
            className="h-full bg-[#00A86B] rounded-full transition-all duration-[5500ms] ease-linear"
            style={{ width: '100%' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Processing;