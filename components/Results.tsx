import React, { useEffect, useState } from 'react';
import { 
  TriangleAlert, Bot, MapPin, Wifi, ArrowRight, CircleCheck, 
  ShieldCheck, Star, Users, Sprout, PieChart, 
  Gift, Zap, PlayCircle, FileText, Music, CreditCard, DollarSign,
  Smartphone, Leaf, CircleX, MousePointer, Grid,
  Hammer
} from 'lucide-react';

// Defined before usage to prevent ReferenceError
const TrendingDownIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>
);

const Results: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'semiannual' | 'lifetime'>('lifetime');

  useEffect(() => {
    setTimeout(() => setShowContent(true), 100);
  }, []);

  const scrollToPlans = () => {
    const element = document.getElementById('pricing-section');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  // Inline styles for animations
  const scrollStyle = `
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-scroll {
      animation: scroll 20s linear infinite;
    }
    .neon-text {
      text-shadow: 0 0 10px rgba(0, 168, 107, 0.5);
    }
  `;

  return (
    <div className={`h-full overflow-y-auto bg-slate-50 font-sans relative custom-scrollbar transition-opacity duration-700 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
      <style>{scrollStyle}</style>

      {/* =====================================================================================
          1. DIAGNÓSTICO DE CRISE (PREMIUM DARK ALERT)
      ===================================================================================== */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-red-950 pb-10 rounded-b-[40px] shadow-2xl z-30 overflow-hidden text-white">
        
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        
        {/* Top Alert Bar */}
        <div className="bg-red-600/90 backdrop-blur-sm text-white px-6 py-3 flex items-center justify-center gap-2 shadow-lg animate-pulse relative z-10">
          <TriangleAlert size={18} className="fill-white text-red-600" />
          <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">Diagnóstico: Crítico</span>
        </div>

        <div className="px-6 pt-8 text-center relative z-10">
          <h1 className="text-3xl font-black text-white leading-[0.9] mb-4 tracking-tighter drop-shadow-lg">
            Sua lavoura está <br/> <span className="text-red-500">perdendo dinheiro.</span>
          </h1>
          
          <p className="text-gray-300 text-sm font-medium leading-relaxed mb-6 px-2">
            A falta de ferramentas profissionais está drenando o lucro da sua colheita silenciosamente.
          </p>

          {/* GRÁFICO DE IMPACTO (DASHBOARD STYLE) */}
          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-2xl mb-8 ring-1 ring-white/5">
             <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-2">
                 <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Previsão Financeira</h3>
                 <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    <span className="text-[10px] font-bold text-red-400">Risco Alto</span>
                 </div>
             </div>
             
             <div className="flex items-end justify-center gap-4 h-48 w-full max-w-xs mx-auto">
                {/* BARRA 1: ATUAL */}
                <div className="w-1/2 flex flex-col justify-end h-full group">
                   <div className="mb-2 text-center">
                      <span className="block text-[10px] text-gray-400 font-bold uppercase mb-1">Hoje</span>
                      <span className="block text-xl font-black text-red-400 leading-none tracking-tighter">-R$ 18k</span>
                      <span className="text-[9px] text-red-400/70 font-bold">Desperdício</span>
                   </div>
                   <div className="w-full bg-gradient-to-b from-red-500/80 to-red-900/20 rounded-t-lg h-[50%] relative border-t-2 border-red-500 flex items-center justify-center">
                      <div className="absolute top-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)] bg-[size:10px_10px]"></div>
                      <TrendingDownIcon className="text-white opacity-50 drop-shadow-md" />
                   </div>
                </div>

                {/* BARRA 2: COM APP */}
                <div className="w-1/2 flex flex-col justify-end h-full">
                   <div className="mb-2 text-center">
                       <span className="block text-[10px] text-[#00A86B] font-bold uppercase mb-1">Com App</span>
                       <span className="block text-xl font-black text-[#00A86B] leading-none tracking-tighter">+22%</span>
                       <span className="text-[9px] text-[#00A86B]/70 font-bold">Margem</span>
                   </div>
                   <div className="w-full bg-gradient-to-b from-[#00A86B] to-[#00A86B]/20 rounded-t-lg h-[95%] relative shadow-[0_0_30px_rgba(0,168,107,0.4)] flex flex-col justify-end p-2 border-t-2 border-[#00ff9d]">
                      <div className="text-center text-white text-[10px] font-bold mb-1 bg-black/20 rounded py-0.5">Controle</div>
                      <div className="text-center text-white text-[10px] font-bold mb-2 bg-black/20 rounded py-0.5">Insumos</div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* =====================================================================================
            NOVA SEÇÃO 1: OS ERROS (ESTILO LOG DE ERRO)
        ===================================================================================== */}
        <div className="px-6 pb-2 relative z-10">
           <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 text-center">
             Detectamos 3 Pontos de Falha
           </h3>
           
           <div className="grid gap-3">
              {/* Pain Point 1: Talhão */}
              <div className="flex gap-4 items-center bg-black/40 backdrop-blur-md p-4 rounded-xl border-l-4 border-red-500 shadow-lg">
                 <div className="bg-red-500/20 p-2 rounded-lg"><CircleX size={20} className="text-red-500" /></div>
                 <div>
                    <h4 className="font-bold text-white text-sm">Talhão Cego</h4>
                    <p className="text-[11px] text-gray-400 mt-0.5">Sem histórico por área, você aduba onde não precisa.</p>
                 </div>
              </div>

              {/* Pain Point 2: Gastos & Financeiro */}
              <div className="flex gap-4 items-center bg-black/40 backdrop-blur-md p-4 rounded-xl border-l-4 border-red-500 shadow-lg">
                 <div className="bg-red-500/20 p-2 rounded-lg"><Hammer size={20} className="text-red-500" /></div>
                 <div>
                    <h4 className="font-bold text-white text-sm">Caixa Misturado</h4>
                    <p className="text-[11px] text-gray-400 mt-0.5">Dinheiro de casa e da safra juntos mascaram o prejuízo real.</p>
                 </div>
              </div>

              {/* Pain Point 3: Pagamentos */}
              <div className="flex gap-4 items-center bg-black/40 backdrop-blur-md p-4 rounded-xl border-l-4 border-red-500 shadow-lg">
                 <div className="bg-red-500/20 p-2 rounded-lg"><FileText size={20} className="text-red-500" /></div>
                 <div>
                    <h4 className="font-bold text-white text-sm">Caderninho Falho</h4>
                    <p className="text-[11px] text-gray-400 mt-0.5">Anotações manuais geram esquecimentos e multas.</p>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* =====================================================================================
          NOVA SEÇÃO 2: COMPARATIVO (O ABISMO)
      ===================================================================================== */}
      <div className="bg-white px-6 py-10 relative">
         <div className="text-center mb-8">
            <h3 className="text-gray-900 font-black text-2xl">A Evolução Obrigatória</h3>
            <p className="text-gray-500 text-xs mt-1">Quem não profissionaliza, quebra.</p>
         </div>

         <div className="grid grid-cols-2 gap-4">
            {/* Lado Esquerdo: Jeito Velho */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 text-center opacity-70 grayscale">
               <div className="w-10 h-10 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-3">
                  <FileText size={20} className="text-gray-500" />
               </div>
               <h4 className="text-gray-500 font-bold text-sm mb-2 uppercase tracking-wide">Amador</h4>
               <ul className="text-[10px] text-gray-400 space-y-2 text-left px-1">
                  <li className="flex gap-1.5"><span className="text-red-400 font-bold">×</span> Erros de cálculo</li>
                  <li className="flex gap-1.5"><span className="text-red-400 font-bold">×</span> Perde dados</li>
                  <li className="flex gap-1.5"><span className="text-red-400 font-bold">×</span> 3h p/ organizar</li>
               </ul>
            </div>

            {/* Lado Direito: Jeito Novo */}
            <div className="bg-white border-2 border-[#00A86B] rounded-2xl p-4 text-center relative shadow-xl transform scale-105 z-10">
               <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#00A86B] text-white text-[9px] font-black px-2 py-0.5 rounded uppercase">Recomendado</div>
               <div className="w-10 h-10 mx-auto bg-[#00A86B]/10 rounded-full flex items-center justify-center mb-3">
                  <Smartphone size={20} className="text-[#00A86B]" />
               </div>
               <h4 className="text-[#00A86B] font-bold text-sm mb-2 uppercase tracking-wide">Profissional</h4>
               <ul className="text-[10px] text-gray-600 space-y-2 text-left px-1">
                  <li className="flex gap-1.5"><span className="text-[#00A86B] font-bold">✓</span> 100% Preciso</li>
                  <li className="flex gap-1.5"><span className="text-[#00A86B] font-bold">✓</span> Salvo na Nuvem</li>
                  <li className="flex gap-1.5"><span className="text-[#00A86B] font-bold">✓</span> 5 min por dia</li>
               </ul>
            </div>
         </div>
      </div>

      {/* =====================================================================================
          NOVA SEÇÃO 3: SIMPLICIDADE (QUEBRA DE OBJEÇÃO)
      ===================================================================================== */}
      <div className="bg-blue-50/50 px-6 py-10 text-center border-y border-blue-100">
         <div className="inline-block p-3 bg-white rounded-full mb-4 shadow-sm">
            <MousePointer size={28} className="text-blue-600" />
         </div>
         <h3 className="text-xl font-black text-gray-900 mb-3">
           "Eu mal sei mexer no celular..."
         </h3>
         <p className="text-gray-600 text-sm leading-relaxed max-w-[280px] mx-auto mb-6 font-medium">
           Fique tranquilo. Criamos o sistema para ser <strong>tão simples quanto enviar uma mensagem no WhatsApp</strong>.
         </p>

         <div className="flex justify-center gap-2 flex-wrap">
            <div className="bg-white px-3 py-2 rounded-lg border border-blue-100 flex items-center gap-2 shadow-sm">
               <Grid size={14} className="text-blue-400" />
               <span className="text-xs font-bold text-gray-600">Botões Grandes</span>
            </div>
            <div className="bg-white px-3 py-2 rounded-lg border border-blue-100 flex items-center gap-2 shadow-sm">
               <MousePointer size={14} className="text-blue-400" />
               <span className="text-xs font-bold text-gray-600">1 Clique</span>
            </div>
         </div>
      </div>

      {/* =====================================================================================
          2. PRODUCT REVEAL (MÃOS DO CAMPO)
      ===================================================================================== */}
      <div className="bg-[#004F2D] py-12 px-6 relative overflow-hidden">
         {/* Background Pattern */}
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:20px_20px]"></div>
         <div className="absolute top-0 right-0 w-32 h-32 bg-[#00A86B] blur-[60px] opacity-40"></div>
         
         <div className="relative z-10 text-center text-white">
            <span className="text-[#00A86B] font-bold text-xs uppercase tracking-[0.2em] mb-3 block animate-pulse">A Solução Definitiva</span>
            
            <div className="flex items-center justify-center gap-3 mb-6">
               <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)] transform rotate-3 border-2 border-[#00A86B]">
                  <Leaf className="text-[#004F2D]" size={32} />
               </div>
               <h2 className="text-4xl font-black leading-none text-white tracking-tight drop-shadow-xl">
                  MÃOS <br/> DO CAMPO
               </h2>
            </div>
            
            <p className="text-gray-200 text-sm leading-relaxed max-w-[280px] mx-auto mb-8 font-medium">
               O primeiro sistema operacional de bolso feito para o produtor que quer <strong>lucro real</strong>, não apenas trabalho duro.
            </p>

            <button onClick={scrollToPlans} className="w-full bg-white text-[#004F2D] font-black py-4 rounded-xl text-sm shadow-xl flex items-center justify-center gap-2 transform active:scale-95 transition-transform hover:bg-gray-100">
               <Smartphone size={20} />
               QUERO BLINDAR MINHA LAVOURA
            </button>
         </div>
      </div>

      {/* =====================================================================================
          3. FUNCIONALIDADES & AI
      ===================================================================================== */}
      <div className="px-5 py-10 relative z-20">
        
        <div className="text-center mb-8">
          <h2 className="text-xl font-black text-gray-800 leading-tight">
            Tecnologia de Safra Recorde <br/>
            <span className="text-[#00A86B]">No seu Bolso</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 mb-8">
           <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex gap-4 items-center">
              <div className="bg-green-100 p-3 rounded-xl text-[#004F2D]">
                 <Sprout size={24} strokeWidth={2.5} />
              </div>
              <div>
                 <h3 className="font-bold text-gray-900 text-sm">Gestão de Etapas</h3>
                 <p className="text-xs text-gray-500 mt-1">Controle do plantio à colheita. Nunca mais perca o timing de aplicação.</p>
              </div>
           </div>
           <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex gap-4 items-center">
              <div className="bg-green-100 p-3 rounded-xl text-[#004F2D]">
                 <PieChart size={24} strokeWidth={2.5} />
              </div>
              <div>
                 <h3 className="font-bold text-gray-900 text-sm">Lucro na Ponta do Lápis</h3>
                 <p className="text-xs text-gray-500 mt-1">Saiba o custo exato por hectare e a previsão de lucro líquido.</p>
              </div>
           </div>
        </div>

        {/* TONICO AI HIGHLIGHT */}
        <div className="bg-slate-900 rounded-3xl p-1 shadow-2xl mb-12 relative overflow-hidden">
           <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-[28px] p-6 relative z-10">
             <div className="absolute top-4 right-4 animate-pulse"><Bot className="text-[#00A86B]" size={32} /></div>
             
             <h3 className="text-xl font-black text-white mb-2">Tonico AI Integrado</h3>
             <p className="text-sm text-gray-300 mb-6 leading-relaxed">
               Seu "Agrônomo Digital" 24 horas. Tire dúvidas técnicas, peça recomendações de dosagem e receba alertas climáticos.
             </p>
             
             <div className="flex flex-wrap gap-2">
                <span className="text-[10px] font-bold bg-[#00A86B]/20 text-[#00A86B] border border-[#00A86B]/50 px-3 py-1.5 rounded-full flex items-center gap-1">
                   <MapPin size={10} /> GPS de Precisão
                </span>
                <span className="text-[10px] font-bold bg-[#00A86B]/20 text-[#00A86B] border border-[#00A86B]/50 px-3 py-1.5 rounded-full flex items-center gap-1">
                   <Wifi size={10} /> Funciona Offline
                </span>
             </div>
           </div>
        </div>

        {/* =====================================================================================
            4. PROVA SOCIAL (AUTO SCROLL)
        ===================================================================================== */}
        <div className="mb-12 overflow-hidden w-full">
           <div className="flex items-center justify-center gap-2 mb-6">
              <Users size={20} className="text-[#00A86B]" />
              <h3 className="font-black text-gray-900 text-lg">Quem usa, recomenda</h3>
           </div>
           
           <div className="flex w-[200%] animate-scroll">
              {[1, 2, 3, 4].map((set) => (
                <div key={set} className="flex gap-4 pr-4">
                    <div className="w-[280px] bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                       <div className="flex gap-1 mb-3">
                          {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />)}
                       </div>
                       <p className="text-gray-600 text-sm italic mb-4">"O controle de insumos pagou o app na primeira semana. Tinha funcionário desperdiçando e eu nem via."</p>
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-xs text-gray-500 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1542596594-649edbc13630?w=100&h=100&fit=crop&q=80" className="w-full h-full object-cover" alt="User" />
                          </div>
                          <p className="font-bold text-gray-900 text-xs">João M. <span className="block text-gray-400 font-normal">Produtor de Soja (GO)</span></p>
                       </div>
                    </div>
                    
                    <div className="w-[280px] bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                       <div className="flex gap-1 mb-3">
                          {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />)}
                       </div>
                       <p className="text-gray-600 text-sm italic mb-4">"Achava que meu lucro era um, o app mostrou que era outro. Cortei custos na hora certa."</p>
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-xs text-gray-500 overflow-hidden">
                             <img src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=100&h=100&fit=crop&q=80" className="w-full h-full object-cover" alt="User" />
                          </div>
                          <p className="font-bold text-gray-900 text-xs">Antônio Silva <span className="block text-gray-400 font-normal">Cafeicultor (MG)</span></p>
                       </div>
                    </div>

                    <div className="w-[280px] bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                       <div className="flex gap-1 mb-3">
                          {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />)}
                       </div>
                       <p className="text-gray-600 text-sm italic mb-4">"A gestão offline me salvou. Aqui na roça a internet cai direto, mas o app nunca para."</p>
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-xs text-gray-500 overflow-hidden">
                             <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?w=100&h=100&fit=crop&q=80" className="w-full h-full object-cover" alt="User" />
                          </div>
                          <p className="font-bold text-gray-900 text-xs">Ricardo F. <span className="block text-gray-400 font-normal">Milho (MT)</span></p>
                       </div>
                    </div>

                    <div className="w-[280px] bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                       <div className="flex gap-1 mb-3">
                          {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />)}
                       </div>
                       <p className="text-gray-600 text-sm italic mb-4">"Muito simples de usar. Em 5 minutos lanço tudo e fico tranquilo."</p>
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-xs text-gray-500 overflow-hidden">
                             <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&q=80" className="w-full h-full object-cover" alt="User" />
                          </div>
                          <p className="font-bold text-gray-900 text-xs">Mariana C. <span className="block text-gray-400 font-normal">Hortifruti (SP)</span></p>
                       </div>
                    </div>

                    <div className="w-[280px] bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                       <div className="flex gap-1 mb-3">
                          {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />)}
                       </div>
                       <p className="text-gray-600 text-sm italic mb-4">"O Tonico AI me ajudou a identificar uma praga antes de alastrar. Pagou o plano vitalício."</p>
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-xs text-gray-500 overflow-hidden">
                             <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&q=80" className="w-full h-full object-cover" alt="User" />
                          </div>
                          <p className="font-bold text-gray-900 text-xs">Carlos B. <span className="block text-gray-400 font-normal">Café (ES)</span></p>
                       </div>
                    </div>
                </div>
              ))}
           </div>
        </div>

        {/* =====================================================================================
            5. BÔNUS REFORMULADOS (VISUAL IMPACTANTE)
        ===================================================================================== */}
        <div className="mb-12">
           <div className="text-center mb-4">
              <span className="inline-block bg-[#00A86B] text-white text-[10px] font-black uppercase px-3 py-1 rounded-full mb-2 tracking-widest">Apenas Hoje</span>
              <h3 className="font-black text-gray-900 text-xl">Pacote de Aceleração</h3>
              <p className="text-xs text-gray-500 mt-1">Exclusivo para o plano <strong className="text-black">Vitalício</strong></p>
           </div>
           
           {/* Premium Bonus Container */}
           <div className="bg-[#111] rounded-3xl p-6 relative overflow-hidden shadow-2xl border border-gray-800">
              <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-500/20 rounded-full blur-[60px]"></div>

              <div className="space-y-4 relative z-10">
                  {/* Bonus 1 */}
                  <div className="flex gap-4 items-center bg-white/5 border border-white/10 p-4 rounded-xl">
                    <div className="h-10 w-10 bg-yellow-500 rounded-lg flex items-center justify-center shrink-0 shadow-lg text-black">
                        <PlayCircle size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-sm">Masterclass: Lucro Máximo</h4>
                        <div className="flex items-center gap-2 mt-1">
                           <span className="text-xs text-gray-500 line-through decoration-red-500 decoration-[0.5px]">R$ 297,00</span>
                           <span className="text-xs font-black text-green-400 uppercase">Grátis</span>
                        </div>
                    </div>
                  </div>

                  {/* Bonus 2 */}
                  <div className="flex gap-4 items-center bg-white/5 border border-white/10 p-4 rounded-xl">
                    <div className="h-10 w-10 bg-yellow-500 rounded-lg flex items-center justify-center shrink-0 shadow-lg text-black">
                        <FileText size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-sm">Guia: Imposto Rural</h4>
                        <div className="flex items-center gap-2 mt-1">
                           <span className="text-xs text-gray-500 line-through decoration-red-500 decoration-[0.5px]">R$ 197,00</span>
                           <span className="text-xs font-black text-green-400 uppercase">Grátis</span>
                        </div>
                    </div>
                  </div>

                  {/* Bonus 3 */}
                  <div className="flex gap-4 items-center bg-white/5 border border-white/10 p-4 rounded-xl">
                    <div className="h-10 w-10 bg-yellow-500 rounded-lg flex items-center justify-center shrink-0 shadow-lg text-black">
                        <Music size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-sm">Implantação VIP</h4>
                        <div className="flex items-center gap-2 mt-1">
                           <span className="text-xs text-gray-500 line-through decoration-red-500 decoration-[0.5px]">R$ 406,00</span>
                           <span className="text-xs font-black text-green-400 uppercase">Grátis</span>
                        </div>
                    </div>
                  </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-end">
                 <div>
                    <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">Valor Total</p>
                    <p className="text-2xl font-black text-white line-through decoration-red-500 decoration-[0.5px] opacity-50">R$ 900</p>
                 </div>
                 <div className="text-right">
                    <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">Você Paga</p>
                    <p className="text-4xl font-black text-[#00A86B] neon-text">R$ 0,00</p>
                 </div>
              </div>
           </div>
        </div>

        {/* =====================================================================================
            6. PRECIFICAÇÃO (PLANS)
        ===================================================================================== */}
        <div id="pricing-section" className="mb-12 scroll-mt-4">
           <h3 className="text-center font-black text-gray-900 text-2xl mb-2">Escolha seu Plano</h3>
           <p className="text-center text-gray-500 text-xs mb-8">Investimento que se paga na primeira saca.</p>
           
           <div className="space-y-5">
              
              {/* MONTHLY */}
              <label className={`block relative bg-white p-4 rounded-2xl border-2 cursor-pointer transition-all ${selectedPlan === 'monthly' ? 'border-[#00A86B] bg-green-50/30' : 'border-gray-100 hover:border-gray-200'}`}>
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedPlan === 'monthly' ? 'border-[#00A86B]' : 'border-gray-300'}`}>
                          {selectedPlan === 'monthly' && <div className="w-2.5 h-2.5 bg-[#00A86B] rounded-full" />}
                       </div>
                       <div>
                          <h4 className="font-bold text-gray-700 text-sm">Mensal</h4>
                          <p className="text-[10px] text-gray-400">Sem fidelidade</p>
                       </div>
                    </div>
                    <div className="text-right">
                       <span className="block text-xl font-black text-gray-900">R$ 29,00</span>
                    </div>
                 </div>
                 <input type="radio" name="plan" className="hidden" onChange={() => setSelectedPlan('monthly')} checked={selectedPlan === 'monthly'} />
              </label>

              {/* SEMIANNUAL */}
              <label className={`block relative bg-white p-4 rounded-2xl border-2 cursor-pointer transition-all ${selectedPlan === 'semiannual' ? 'border-[#00A86B] bg-green-50/30' : 'border-gray-100 hover:border-gray-200'}`}>
                 <div className="absolute -top-2.5 right-4 bg-gray-200 text-gray-600 text-[9px] font-bold px-2 py-0.5 rounded">
                    ECONOMIZE 44%
                 </div>
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedPlan === 'semiannual' ? 'border-[#00A86B]' : 'border-gray-300'}`}>
                          {selectedPlan === 'semiannual' && <div className="w-2.5 h-2.5 bg-[#00A86B] rounded-full" />}
                       </div>
                       <div>
                          <h4 className="font-bold text-gray-700 text-sm">Semestral</h4>
                          <p className="text-[10px] text-gray-400">Acesso 6 meses</p>
                       </div>
                    </div>
                    <div className="text-right">
                       <span className="block text-xl font-black text-gray-900">R$ 97,00</span>
                       <span className="text-[10px] text-gray-400 line-through">R$ 174,00</span>
                    </div>
                 </div>
                 <input type="radio" name="plan" className="hidden" onChange={() => setSelectedPlan('semiannual')} checked={selectedPlan === 'semiannual'} />
              </label>

              {/* LIFETIME (HERO CARD) */}
              <label className={`block relative p-0.5 rounded-2xl cursor-pointer transition-all transform ${selectedPlan === 'lifetime' ? 'scale-105 shadow-xl ring-2 ring-[#00A86B] ring-offset-2' : 'scale-100 shadow-md opacity-90'}`}>
                 {/* Gradient Border Background */}
                 <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-[#004F2D] to-gray-900 rounded-2xl"></div>
                 
                 <div className="relative bg-gray-900 rounded-[14px] p-5">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1 shadow-lg z-10 w-max">
                       <Zap size={10} className="fill-black" /> Oferta Única
                    </div>

                    <div className="flex items-center justify-between mb-4 mt-2">
                       <div className="flex items-center gap-3">
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center bg-white/10 ${selectedPlan === 'lifetime' ? 'border-[#00A86B]' : 'border-gray-500'}`}>
                             {selectedPlan === 'lifetime' && <div className="w-3 h-3 bg-[#00A86B] rounded-full shadow-[0_0_10px_#00A86B]" />}
                          </div>
                          <div>
                             <h4 className="font-black text-white text-lg uppercase tracking-wide">Vitalício</h4>
                             <p className="text-[10px] text-gray-400">Pague 1x, use para sempre</p>
                          </div>
                       </div>
                       <div className="text-right">
                           <span className="text-xs text-gray-500 line-through block">R$ 997</span>
                           <span className="text-2xl font-black text-white tracking-tighter text-[#00A86B]">R$ 247</span>
                       </div>
                    </div>

                    {/* Compact Feature List */}
                    <div className="bg-white/5 rounded-lg p-3 mb-4 space-y-2">
                        <div className="flex items-center gap-2 text-xs text-gray-200">
                           <CircleCheck size={14} className="text-[#00A86B]" /> <span>Acesso Ilimitado + Tonico AI</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-yellow-400">
                           <Gift size={14} /> <span>Inclui os 3 Bônus (R$ 900)</span>
                        </div>
                    </div>
                 </div>
                 <input type="radio" name="plan" className="hidden" onChange={() => setSelectedPlan('lifetime')} checked={selectedPlan === 'lifetime'} />
              </label>

           </div>
           
           {/* FINAL CTA */}
           <div className="mt-8">
             <button className="w-full bg-[#00A86B] hover:bg-[#008f5b] text-white py-5 rounded-xl font-black text-xl shadow-xl shadow-green-900/20 transition-transform active:scale-95 flex items-center justify-center gap-2 animate-pulse">
                {selectedPlan === 'lifetime' ? 'QUERO ACESSO VITALÍCIO' : 'QUERO ACESSAR AGORA'}
                <ArrowRight size={24} />
             </button>
             
             {/* Payment Methods */}
             <div className="flex items-center justify-center gap-4 mt-4 opacity-60">
                <CreditCard size={20} className="text-gray-400" />
                <span className="text-[10px] font-bold text-gray-400 uppercase">Cartão até 12x</span>
                <span className="h-3 w-px bg-gray-300"></span>
                <img src="https://logopng.com.br/logos/pix-106.png" className="h-4 grayscale opacity-80" alt="Pix" />
                <span className="h-3 w-px bg-gray-300"></span>
                <DollarSign size={20} className="text-gray-400" />
             </div>
           </div>
        </div>

        {/* =====================================================================================
            7. GARANTIA FINAL (PREMIUM BADGE)
        ===================================================================================== */}
        <div className="bg-white rounded-t-3xl p-8 pb-12 text-center border-t border-gray-100">
           <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-[#00A86B] opacity-20 blur-xl rounded-full"></div>
              <div className="relative bg-white border-[3px] border-[#00A86B] rounded-full p-4 shadow-lg">
                 <ShieldCheck size={48} className="text-[#00A86B]" />
              </div>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-[#00A86B] text-white text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-md whitespace-nowrap">
                 Garantia Blindada
              </div>
           </div>
           
           <h4 className="font-black text-gray-900 text-xl mb-3">Risco Zero por 30 Dias</h4>
           <p className="text-sm text-gray-500 leading-relaxed max-w-[280px] mx-auto mb-6">
              Use o Mãos do Campo. Se em 30 dias você não ver seu dinheiro render mais, nós devolvemos <strong>100% do valor pago</strong>.
           </p>
           <button onClick={scrollToPlans} className="text-[#00A86B] font-bold text-sm underline decoration-2 underline-offset-4">
              Aproveitar Garantia e Começar
           </button>
        </div>

      </div>
    </div>
  );
};

export default Results;