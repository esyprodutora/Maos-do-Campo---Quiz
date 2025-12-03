import React from 'react';
import { 
  AlertTriangle, 
  TrendingDown, 
  Check, 
  Smartphone, 
  Bot, 
  WifiOff, 
  MapPin, 
  ArrowRight,
  Star
} from 'lucide-react';

const Results: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto bg-white custom-scrollbar">
      
      {/* 1. Header: The Diagnosis (Negative Hook) */}
      <div className="bg-[#FFF5F5] p-8 pb-10 rounded-b-[40px] shadow-sm">
        <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
          <AlertTriangle size={12} />
          Diagnóstico Crítico
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 leading-tight mb-4">
          Sua lavoura pode estar <span className="text-red-600">perdendo até 42%</span> do lucro potencial.
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Sem controle digital, você toma decisões baseadas no "achismo" e perde o timing exato das aplicações.
        </p>
      </div>

      <div className="px-6 -mt-6">
        {/* 2. The Solution Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
          <div className="bg-[#004F2D] p-6 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <p className="text-green-300 text-xs font-bold uppercase tracking-widest mb-2">A Solução Completa</p>
            <h2 className="text-2xl font-bold mb-1">MÃOS DO CAMPO</h2>
            <p className="opacity-90 text-sm">+ Inteligência Artificial Tonico</p>
          </div>
          
          <div className="p-6 space-y-6">
            
            {/* Feature: Tonico AI */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-[#00A86B] flex items-center justify-center shrink-0 shadow-lg shadow-green-200 text-white">
                <Bot size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Tonico: Seu Agrônomo 24h</h3>
                <p className="text-gray-500 text-sm mt-1 leading-snug">
                  Tire dúvidas sobre pragas, adubação e clima. O Tonico analisa seus dados e dá recomendações na hora.
                </p>
              </div>
            </div>

            {/* Feature: GPS Timing */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Timing via GPS</h3>
                <p className="text-gray-500 text-sm mt-1 leading-snug">
                  Saiba o momento exato de aplicar insumos baseado na sua localização e previsão climática local.
                </p>
              </div>
            </div>

             {/* Feature: Offline */}
             <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0 text-gray-600">
                <WifiOff size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Funciona Sem Internet</h3>
                <p className="text-gray-500 text-sm mt-1 leading-snug">
                  Lance tudo no campo, mesmo offline. Os dados sincronizam quando você voltar para a sede.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 3. Transformation List */}
      <div className="px-8 py-10">
        <h3 className="font-bold text-gray-900 mb-6">O que muda na sua rotina:</h3>
        <ul className="space-y-4">
          {[
            "Fim do caderninho e planilhas confusas",
            "Custo por hectare calculado automaticamente",
            "Controle de estoque de insumos na mão",
            "Histórico completo de safras passadas"
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-gray-700">
              <div className="bg-green-100 p-1 rounded-full text-[#00A86B]">
                <Check size={14} strokeWidth={3} />
              </div>
              <span className="font-medium text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 4. Social Proof & CTA */}
      <div className="bg-gray-50 px-6 py-8 pb-12 rounded-t-[40px] mt-2">
        <div className="flex items-center justify-center gap-1 mb-6">
          {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
          <span className="text-xs text-gray-500 font-bold ml-2 uppercase tracking-wide">Aprovado por produtores</span>
        </div>

        <button className="w-full bg-[#00A86B] hover:bg-[#008f5b] text-white text-lg font-bold py-5 rounded-2xl shadow-xl shadow-green-200 transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 mb-4 animate-pulse-slow">
          Experimentar Grátis
          <ArrowRight className="w-5 h-5" />
        </button>
        
        <button className="w-full bg-white border border-gray-200 text-gray-600 font-bold py-4 rounded-2xl hover:bg-gray-50 transition-colors text-sm">
          Já sou usuário, fazer login
        </button>
        
        <p className="text-center text-[10px] text-gray-400 mt-6 px-4">
          Compatível com Android e iOS. Teste gratuito de 7 dias disponível. Não requer cartão de crédito para começar.
        </p>
      </div>
    </div>
  );
};

export default Results;