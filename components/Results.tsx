import React from 'react';
import { 
  AlertTriangle, 
  Bot, 
  MapPin, 
  WifiOff, 
  ArrowRight, 
  CheckCircle2,
  X,
  Clock,
  Star,
  ShieldCheck,
  Smartphone,
  Tractor,
  TrendingUp,
  UserCheck
} from 'lucide-react';

const Results: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto bg-slate-50 font-sans relative custom-scrollbar">
      
      {/* --- SECTION 1: THE DIAGNOSIS (PAIN) --- */}
      <div className="relative bg-white pb-12 rounded-b-[40px] shadow-xl z-30 overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        {/* Warning Banner */}
        <div className="bg-red-600 text-white px-6 py-3 flex items-center justify-center gap-2 shadow-lg relative z-10">
          <AlertTriangle size={18} className="animate-pulse fill-white text-red-600" />
          <span className="text-[11px] font-black uppercase tracking-widest">Alerta de Prejuízo Detectado</span>
        </div>

        <div className="px-6 pt-10 text-center relative z-10">
          <div className="inline-flex flex-col items-center justify-center p-6 rounded-3xl bg-red-50 mb-6 border-2 border-red-100 shadow-inner">
            <span className="text-sm font-bold text-red-400 uppercase tracking-wide mb-1">Prejuízo Estimado</span>
            <div className="flex items-baseline text-red-600">
               <span className="text-3xl font-black mr-1">-</span>
               <span className="text-5xl font-black tracking-tighter">27%</span>
            </div>
            <span className="text-xs text-red-400 font-medium mt-1">da sua margem de lucro</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 leading-[1.1] mb-6">
            Você está trabalhando para <span className="text-red-600 underline decoration-4 underline-offset-4 decoration-red-200">pagar contas.</span>
          </h1>
          
          <p className="text-gray-600 text-lg leading-relaxed font-medium mb-8">
            Seus dados mostram que a falta de controle preciso e timing errado nas aplicações estão drenando seu dinheiro.
          </p>

          <div className="bg-gray-900 text-white rounded-xl p-4 text-sm font-semibold shadow-xl">
            "A diferença entre o produtor que lucra e o que apenas sobrevive é a <span className="text-[#00A86B]">GESTÃO DE DADOS</span>."
          </div>
        </div>
      </div>

      {/* --- SECTION 2: THE REVEAL (SOLUTION) --- */}
      <div className="px-5 pt-12 pb-10 -mt-10 relative z-20">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#00A86B]/10 text-[#00A86B] px-4 py-2 rounded-full mb-4 border border-[#00A86B]/20">
            <CheckCircle2 size={16} className="fill-[#00A86B] text-white"/>
            <span className="text-xs font-black uppercase tracking-widest">Solução Recomendada</span>
          </div>
          <h2 className="text-3xl font-black text-[#004F2D] leading-tight">
            Pare de adivinhar.<br/>Comece a lucrar.
          </h2>
        </div>

        {/* --- TONICO AI SPOTLIGHT --- */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2.5rem] p-1 shadow-2xl mb-8 relative overflow-hidden text-white group">
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#00A86B] rounded-full filter blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
           
           <div className="bg-gray-900/50 backdrop-blur-sm rounded-[2.3rem] p-6 h-full border border-white/10 relative z-10">
              <div className="flex justify-between items-start mb-6">
                 <div>
                    <h3 className="text-2xl font-black mb-1 flex items-center gap-2">
                       Tonico AI 
                       <span className="text-[10px] bg-[#00A86B] text-white px-2 py-0.5 rounded text-center font-bold uppercase align-middle">Beta</span>
                    </h3>
                    <p className="text-gray-400 text-sm">Seu Engenheiro Agrônomo Digital</p>
                 </div>
                 <Bot size={40} className="text-[#00A86B]" />
              </div>

              {/* Chat Demo */}
              <div className="space-y-3 mb-6 font-sans text-sm">
                 <div className="bg-white/5 p-3 rounded-2xl rounded-tl-sm border border-white/5">
                    <p className="text-gray-300">"Tonico, vi uma mancha marrom na folha da soja. O que aplico?"</p>
                 </div>
                 <div className="bg-[#00A86B] p-3 rounded-2xl rounded-br-sm shadow-lg shadow-green-900/50">
                    <p className="font-bold">"Isso parece Ferrugem Asiática. Aplique Fungicida X imediatamente. A previsão é de chuva em 4h, então corra!"</p>
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                 <div className="bg-white/5 p-3 rounded-xl border border-white/10 text-center">
                    <Clock className="w-6 h-6 mx-auto mb-2 text-[#00A86B]" />
                    <span className="text-xs font-bold text-gray-300 block">Disponível 24h</span>
                 </div>
                 <div className="bg-white/5 p-3 rounded-xl border border-white/10 text-center">
                    <ShieldCheck className="w-6 h-6 mx-auto mb-2 text-[#00A86B]" />
                    <span className="text-xs font-bold text-gray-300 block">Diagnóstico Preciso</span>
                 </div>
              </div>
           </div>
        </div>

        {/* --- CORE FEATURES --- */}
        <div className="space-y-4 mb-12">
            <h3 className="font-black text-gray-800 text-xl px-2">Funcionalidades de Elite</h3>
            
            {/* Feature 1 */}
            <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4">
               <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin size={24} />
               </div>
               <div>
                  <h4 className="font-bold text-gray-900 text-lg">Timing via GPS</h4>
                  <p className="text-gray-500 text-sm leading-snug mt-1">Monitore cada talhão. Saiba o momento exato de plantar e colher baseado no microclima.</p>
               </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4">
               <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center shrink-0">
                  <WifiOff size={24} />
               </div>
               <div>
                  <h4 className="font-bold text-gray-900 text-lg">Modo 100% Offline</h4>
                  <p className="text-gray-500 text-sm leading-snug mt-1">A roça não tem sinal? Sem problema. O app guarda tudo e sincroniza quando voltar o Wi-Fi.</p>
               </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4">
               <div className="w-12 h-12 bg-yellow-50 text-yellow-600 rounded-2xl flex items-center justify-center shrink-0">
                  <TrendingUp size={24} />
               </div>
               <div>
                  <h4 className="font-bold text-gray-900 text-lg">Previsão de Lucro</h4>
                  <p className="text-gray-500 text-sm leading-snug mt-1">Saiba quanto vai lucrar antes mesmo de colher. Controle de custos por hectare em tempo real.</p>
               </div>
            </div>
        </div>

        {/* --- SOCIAL PROOF --- */}
        <div className="mb-12">
            <div className="text-center mb-6">
               <h3 className="font-black text-gray-900 text-2xl">Quem usa, aprova</h3>
               <div className="flex justify-center gap-1 mt-2">
                  {[1,2,3,4,5].map(i => <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />)}
               </div>
               <p className="text-sm text-gray-500 font-medium mt-1">4.9/5 de satisfação</p>
            </div>

            {/* Testimonials Scroll */}
            <div className="flex overflow-x-auto pb-6 gap-4 snap-x custom-scrollbar -mx-5 px-5">
               {/* Review 1 */}
               <div className="min-w-[280px] bg-white p-6 rounded-3xl shadow-sm border border-gray-100 snap-center">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                     </div>
                     <div>
                        <p className="font-bold text-gray-900 text-sm">João M.</p>
                        <p className="text-xs text-gray-500">Produtor de Soja - MT</p>
                     </div>
                  </div>
                  <p className="text-gray-600 text-sm italic">"Eu perdia muito dinheiro com insumo desperdiçado. O Tonico me salvou na última safra. O app pagou a assinatura no primeiro dia."</p>
               </div>

               {/* Review 2 */}
               <div className="min-w-[280px] bg-white p-6 rounded-3xl shadow-sm border border-gray-100 snap-center">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ane" alt="User" />
                     </div>
                     <div>
                        <p className="font-bold text-gray-900 text-sm">Ana P.</p>
                        <p className="text-xs text-gray-500">Cafeicultura - MG</p>
                     </div>
                  </div>
                  <p className="text-gray-600 text-sm italic">"Simples de usar. Meu pai que não entende nada de tecnologia conseguiu lançar os gastos. Recomendo demais!"</p>
               </div>
            </div>
        </div>

        {/* --- GUARANTEE --- */}
        <div className="bg-[#004F2D] rounded-3xl p-6 text-center text-white mb-28 relative overflow-hidden">
            <ShieldCheck size={48} className="mx-auto mb-4 text-[#00A86B]" />
            <h3 className="text-xl font-black mb-2">Garantia Blindada</h3>
            <p className="text-green-100 text-sm mb-0">
               Use o Mãos do Campo por 7 dias. Se não economizar pelo menos 10x o valor do investimento, devolvemos seu dinheiro. Sem perguntas.
            </p>
        </div>

      </div>

      {/* --- STICKY CTA BAR (MOBILE OPTIMIZED) --- */}
      <div className="fixed md:absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 rounded-t-[30px] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-50 max-w-[430px] mx-auto">
         {/* Price/Offer Info */}
         <div className="flex justify-between items-end mb-4 px-2">
            <div>
               <p className="text-[10px] text-gray-400 font-bold uppercase line-through">De R$ 97,00</p>
               <p className="text-xs text-red-500 font-bold uppercase">Oferta Especial Hoje</p>
            </div>
            <div className="text-right">
               <span className="text-sm font-medium text-gray-600">apenas</span>
               <span className="text-2xl font-black text-gray-900 ml-1">R$ 29,90</span>
               <span className="text-xs text-gray-400">/mês</span>
            </div>
         </div>
         
         <button className="w-full bg-[#00A86B] hover:bg-[#008f5b] text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-green-200 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 relative overflow-hidden group">
            <span className="relative z-10">QUERO ACESSAR AGORA</span>
            <ArrowRight size={24} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
         </button>
         
         <div className="text-center mt-3 flex items-center justify-center gap-2 text-[10px] text-gray-400 font-medium">
            <CheckCircle2 size={10} className="text-[#00A86B]" /> Compra Segura
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            <CheckCircle2 size={10} className="text-[#00A86B]" /> Acesso Imediato
         </div>
      </div>

    </div>
  );
};

export default Results;