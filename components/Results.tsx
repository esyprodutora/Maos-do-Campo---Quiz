import React, { useEffect, useState } from 'react';
import { 
  AlertTriangle, Bot, MapPin, WifiOff, ArrowRight, CheckCircle2, 
  ShieldCheck, Star, Users, Sprout, ShoppingCart, PieChart, 
  Gift, Zap, PlayCircle, FileText, Headphones, CreditCard, Banknote,
  Smartphone, Leaf
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
  `;

  return (
    <div className={`h-full overflow-y-auto bg-slate-50 font-sans relative custom-scrollbar transition-opacity duration-700 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
      <style>{scrollStyle}</style>

      {/* =====================================================================================
          1. HEADLINE AGRESSIVA & DIAGNÓSTICO
      ===================================================================================== */}
      <div className="relative bg-white pb-8 rounded-b-[40px] shadow-xl z-30 overflow-hidden">
        <div className="bg-red-600 text-white px-6 py-3 flex items-center justify-center gap-2 shadow-lg animate-pulse">
          <AlertTriangle size={18} className="fill-white text-red-600" />
          <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">Alerta: Risco Financeiro Alto</span>
        </div>

        <div className="px-6 pt-8 text-center">
          <h1 className="text-3xl font-black text-gray-900 leading-[0.9] mb-4 tracking-tighter">
            Sua margem de lucro <br/> <span className="text-red-600">está sangrando.</span>
          </h1>
          
          <p className="text-gray-600 text-sm font-medium leading-relaxed mb-6 px-2">
            O diagnóstico apontou que a falta de gestão integrada está consumindo silenciosamente o resultado da sua colheita.
          </p>

          {/* GRÁFICO DE IMPACTO */}
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 shadow-lg mb-8">
             <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-6">Projeção da Próxima Safra</h3>
             
             <div className="flex items-end justify-center gap-4 h-48 w-full max-w-xs mx-auto">
                {/* BARRA 1: ATUAL */}
                <div className="w-1/2 flex flex-col justify-end h-full group">
                   <div className="mb-2 text-center">
                      <span className="block text-xs text-gray-400 font-medium">Sem Gestão</span>
                      <span className="block text-lg font-black text-red-500 leading-none">- R$ 18k</span>
                      <span className="text-[10px] text-red-400 font-bold">(Estimado)</span>
                   </div>
                   <div className="w-full bg-red-100 rounded-t-xl h-[50%] relative border-t-4 border-red-500 flex items-center justify-center">
                      <div className="absolute top-2 w-full border-t border-red-200 border-dashed"></div>
                      <TrendingDownIcon className="text-red-400 opacity-50" />
                   </div>
                </div>

                {/* BARRA 2: COM APP */}
                <div className="w-1/2 flex flex-col justify-end h-full">
                   <div className="mb-2 text-center">
                       <span className="block text-xs text-gray-400 font-medium">Lucro Real</span>
                       <span className="block text-lg font-black text-[#00A86B] leading-none">+ 22%</span>
                   </div>
                   <div className="w-full bg-[#00A86B] rounded-t-xl h-[95%] relative shadow-[0_0_20px_rgba(0,168,107,0.3)] flex flex-col justify-end p-2">
                      <div className="text-center text-white/90 text-xs font-bold mb-2">+ Controle</div>
                      <div className="text-center text-white/90 text-xs font-bold mb-2">+ Insumos</div>
                      <div className="w-full bg-white/20 h-1 rounded-full mb-2"></div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* =====================================================================================
            2. PRODUCT REVEAL (MÃOS DO CAMPO)
        ===================================================================================== */}
        <div className="bg-[#004F2D] py-10 px-6 relative overflow-hidden">
           {/* Background Pattern */}
           <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:20px_20px]"></div>
           <div className="absolute top-0 right-0 w-32 h-32 bg-[#00A86B] blur-[60px] opacity-40"></div>
           
           <div className="relative z-10 text-center text-white">
              <span className="text-[#00A86B] font-bold text-xs uppercase tracking-[0.2em] mb-3 block">Apresentando a Solução</span>
              
              <div className="flex items-center justify-center gap-3 mb-4">
                 <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg transform rotate-3">
                    <Leaf className="text-[#004F2D]" size={28} />
                 </div>
                 <h2 className="text-3xl font-black leading-none text-white tracking-tight">
                    MÃOS <br/> DO CAMPO
                 </h2>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed max-w-[280px] mx-auto mb-6">
                 O primeiro sistema operacional de bolso feito para o produtor que quer <strong>lucro</strong>, não papelada.
              </p>

              <button onClick={scrollToPlans} className="w-full bg-white text-[#004F2D] font-black py-3 rounded-lg text-sm shadow-xl flex items-center justify-center gap-2 transform active:scale-95 transition-transform">
                 <Smartphone size={18} />
                 BAIXAR E RESOLVER AGORA
              </button>
           </div>
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
           {/* Feature 1 */}
           <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex gap-4 items-center">
              <div className="bg-green-100 p-3 rounded-xl text-[#004F2D]">
                 <Sprout size={24} strokeWidth={2.5} />
              </div>
              <div>
                 <h3 className="font-bold text-gray-900 text-sm">Gestão de Etapas</h3>
                 <p className="text-xs text-gray-500 mt-1">Nunca mais perca o timing de uma aplicação. Controle do plantio à colheita.</p>
              </div>
           </div>
           {/* Feature 2 */}
           <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex gap-4 items-center">
              <div className="bg-green-100 p-3 rounded-xl text-[#004F2D]">
                 <PieChart size={24} strokeWidth={2.5} />
              </div>
              <div>
                 <h3 className="font-bold text-gray-900 text-sm">Financeiro Real</h3>
                 <p className="text-xs text-gray-500 mt-1">Saiba o custo exato por hectare e o lucro líquido previsto.</p>
              </div>
           </div>
        </div>

        {/* TONICO AI HIGHLIGHT */}
        <div className="bg-gray-900 rounded-3xl p-1 shadow-2xl mb-12 relative overflow-hidden">
           <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-[28px] p-6 relative z-10">
             <div className="absolute top-4 right-4 animate-pulse"><Bot className="text-[#00A86B]" size={32} /></div>
             
             <h3 className="text-xl font-black text-white mb-2">Tonico AI Integrado</h3>
             <p className="text-sm text-gray-300 mb-6 leading-relaxed">
               Seu "Agrônomo Digital" 24 horas. Tire dúvidas técnicas, peça recomendações de dosagem e receba alertas climáticos baseados em IA.
             </p>
             
             <div className="flex flex-wrap gap-2">
                <span className="text-[10px] font-bold bg-[#00A86B]/20 text-[#00A86B] border border-[#00A86B]/50 px-3 py-1.5 rounded-full flex items-center gap-1">
                   <MapPin size={10} /> GPS de Precisão
                </span>
                <span className="text-[10px] font-bold bg-[#00A86B]/20 text-[#00A86B] border border-[#00A86B]/50 px-3 py-1.5 rounded-full flex items-center gap-1">
                   <WifiOff size={10} /> Funciona Offline
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
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-xs text-gray-500">JM</div>
                          <p className="font-bold text-gray-900 text-xs">João M. <span className="block text-gray-400 font-normal">Produtor de Soja (GO)</span></p>
                       </div>
                    </div>
                    
                    <div className="w-[280px] bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                       <div className="flex gap-1 mb-3">
                          {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />)}
                       </div>
                       <p className="text-gray-600 text-sm italic mb-4">"Achava que meu lucro era um, o app mostrou que era outro. Cortei custos na hora certa."</p>
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-xs text-gray-500">AS</div>
                          <p className="font-bold text-gray-900 text-xs">Antônio Silva <span className="block text-gray-400 font-normal">Cafeicultor (MG)</span></p>
                       </div>
                    </div>
                </div>
              ))}
           </div>
        </div>

        {/* =====================================================================================
            5. BÔNUS REFORMULADOS (PREMIUM DARK STYLE)
        ===================================================================================== */}
        <div className="mb-12">
           <div className="text-center mb-4">
              <span className="inline-block bg-[#00A86B] text-white text-[10px] font-black uppercase px-3 py-1 rounded-full mb-2 tracking-widest">Oferta Limitada</span>
              <h3 className="font-black text-gray-900 text-xl">Leve R$ 900,00 em Bônus</h3>
              <p className="text-xs text-gray-500 mt-1">Gratuito exclusivamente no plano <strong className="text-black">Vitalício</strong></p>
           </div>
           
           {/* Premium Bonus Container */}
           <div className="bg-[#1A1A1A] rounded-3xl p-6 relative overflow-hidden shadow-2xl">
              {/* Gold decorative accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-500 rounded-full blur-[80px] opacity-20"></div>

              <div className="space-y-4 relative z-10">
                  {/* Bonus 1 */}
                  <div className="flex gap-4 items-center bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
                    <div className="h-10 w-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center shrink-0 shadow-lg text-black">
                        <PlayCircle size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-sm">Masterclass: Lucro Máximo</h4>
                        <p className="text-[10px] text-gray-400">Estratégia avançada de margem</p>
                        <p className="text-[10px] font-bold text-yellow-400 mt-1">Economize R$ 297,00</p>
                    </div>
                  </div>

                  {/* Bonus 2 */}
                  <div className="flex gap-4 items-center bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
                    <div className="h-10 w-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center shrink-0 shadow-lg text-black">
                        <FileText size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-sm">Guia: Imposto Rural</h4>
                        <p className="text-[10px] text-gray-400">Dedução legal de gastos</p>
                        <p className="text-[10px] font-bold text-yellow-400 mt-1">Economize R$ 197,00</p>
                    </div>
                  </div>

                  {/* Bonus 3 */}
                  <div className="flex gap-4 items-center bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
                    <div className="h-10 w-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center shrink-0 shadow-lg text-black">
                        <Headphones size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-sm">Implantação VIP</h4>
                        <p className="text-[10px] text-gray-400">Suporte prioritário de setup</p>
                        <p className="text-[10px] font-bold text-yellow-400 mt-1">Economize R$ 406,00</p>
                    </div>
                  </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-white/10 text-center">
                 <p className="text-white text-xs font-medium">
                    Valor total dos presentes: <span className="text-yellow-400 font-bold text-sm">R$ 900,00</span>
                 </p>
                 <p className="text-[10px] text-gray-500 mt-1">Sua conta sai por <span className="text-white">R$ 0,00</span> hoje.</p>
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
                           <CheckCircle2 size={14} className="text-[#00A86B]" /> <span>Acesso Ilimitado + Tonico AI</span>
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
                <Banknote size={20} className="text-gray-400" />
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