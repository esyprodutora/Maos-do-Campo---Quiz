import React, { useEffect, useState } from 'react';
import { 
  AlertTriangle, Bot, MapPin, WifiOff, ArrowRight, CheckCircle2, 
  Clock, ShieldCheck, Star, Trophy, Lock, TrendingDown, Users, 
  FileText, Sprout, ShoppingCart, PieChart, Gift, Zap
} from 'lucide-react';

const Results: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 100);
  }, []);

  // Inline styles for the infinite scroll animation
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
          1. DIAGNOSIS & CRITICAL RISK
      ===================================================================================== */}
      <div className="relative bg-white pb-10 rounded-b-[40px] shadow-xl z-30 overflow-hidden">
        <div className="bg-red-600 text-white px-6 py-3 flex items-center justify-center gap-2 shadow-lg animate-pulse">
          <AlertTriangle size={18} className="fill-white text-red-600" />
          <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">Diagnóstico: Perda Financeira Detectada</span>
        </div>

        <div className="px-6 pt-8 text-center">
          <h1 className="text-3xl font-black text-gray-900 leading-[0.9] mb-4 tracking-tighter">
            O "ralo" da sua <br/> lavoura está aberto.
          </h1>
          
          <p className="text-gray-600 text-sm font-medium leading-relaxed mb-6 px-4">
            A falta de ferramentas profissionais está custando caro. Veja o comparativo da sua realidade hoje vs. potencial.
          </p>

          {/* IMPROVED IMPACT GRAPH */}
          <div className="bg-gray-900 rounded-3xl p-6 text-white mb-6 relative overflow-hidden shadow-2xl">
             <div className="flex items-end justify-center gap-6 h-40 pt-4">
                
                {/* BAR 1: YOU TODAY */}
                <div className="w-20 flex flex-col justify-end h-full group relative">
                   <div className="absolute -top-8 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity bg-white text-gray-900 text-[10px] font-bold py-1 rounded">
                      Sem controle
                   </div>
                   <div className="text-xs text-center mb-2 text-red-400 font-bold animate-pulse">Você Hoje</div>
                   <div className="bg-gradient-to-t from-red-600 to-red-400 w-full rounded-t-xl h-[45%] relative border-t-2 border-red-300">
                      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-black text-red-900 text-lg opacity-50">?</span>
                   </div>
                </div>

                {/* GAP ARROW */}
                <div className="h-[70%] flex flex-col justify-center items-center pb-4">
                   <ArrowRight className="text-gray-500 rotate-90 md:rotate-0 mb-1" />
                   <span className="text-[10px] font-bold text-gray-400 uppercase text-center leading-tight">Dinheiro<br/>Perdido</span>
                </div>

                {/* BAR 2: POTENTIAL */}
                <div className="w-20 flex flex-col justify-end h-full">
                   <div className="text-xs text-center mb-2 text-[#00A86B] font-bold">Com App</div>
                   <div className="bg-gradient-to-t from-[#004F2D] to-[#00A86B] w-full rounded-t-xl h-[90%] relative border-t-2 border-green-300 shadow-[0_0_20px_rgba(0,168,107,0.4)]">
                      <span className="absolute -top-7 left-0 right-0 text-center font-black text-[#00A86B] text-sm">+40%</span>
                   </div>
                </div>
             </div>
             <p className="text-xs font-medium mt-6 text-center text-gray-400 bg-white/5 py-2 rounded-lg">
               Sua margem de lucro pode ser <span className="text-white font-bold">muito maior</span>.
             </p>
          </div>
        </div>
      </div>

      {/* =====================================================================================
          2. THE SOLUTION (DETAILED FEATURES)
      ===================================================================================== */}
      <div className="px-5 py-10 -mt-6 relative z-20">
        <div className="text-center mb-8">
          <span className="bg-green-100 text-green-800 text-[10px] font-black uppercase px-3 py-1 rounded-full">A Solução Definitiva</span>
          <h2 className="text-2xl font-black text-[#004F2D] leading-tight mt-3 mb-2">
            Mãos do Campo: <br/> Gestão Profissional no Bolso
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 mb-8">
           {/* Feature 1 */}
           <div className="bg-white p-5 rounded-2xl shadow-sm border-l-4 border-[#00A86B] flex gap-4 items-start">
              <div className="bg-green-50 p-3 rounded-full shrink-0">
                 <Sprout className="text-[#00A86B]" size={24} />
              </div>
              <div>
                 <h3 className="font-bold text-gray-900">Gestão de Etapas</h3>
                 <p className="text-xs text-gray-500 leading-snug mt-1">Do plantio à colheita. Saiba exatamente o que foi feito em cada talhão, sem esquecimentos.</p>
              </div>
           </div>

           {/* Feature 2 */}
           <div className="bg-white p-5 rounded-2xl shadow-sm border-l-4 border-[#00A86B] flex gap-4 items-start">
              <div className="bg-green-50 p-3 rounded-full shrink-0">
                 <ShoppingCart className="text-[#00A86B]" size={24} />
              </div>
              <div>
                 <h3 className="font-bold text-gray-900">Compras e Insumos</h3>
                 <p className="text-xs text-gray-500 leading-snug mt-1">Controle de estoque rigoroso. Evite desperdício de adubo e roubo de materiais.</p>
              </div>
           </div>

           {/* Feature 3 */}
           <div className="bg-white p-5 rounded-2xl shadow-sm border-l-4 border-[#00A86B] flex gap-4 items-start">
              <div className="bg-green-50 p-3 rounded-full shrink-0">
                 <PieChart className="text-[#00A86B]" size={24} />
              </div>
              <div>
                 <h3 className="font-bold text-gray-900">Financeiro Blindado</h3>
                 <p className="text-xs text-gray-500 leading-snug mt-1">Fluxo de caixa automático. Lance gastos em 3 segundos e veja o custo real por hectare.</p>
              </div>
           </div>

           {/* Feature 4 */}
           <div className="bg-white p-5 rounded-2xl shadow-sm border-l-4 border-[#00A86B] flex gap-4 items-start">
              <div className="bg-green-50 p-3 rounded-full shrink-0">
                 <FileText className="text-[#00A86B]" size={24} />
              </div>
              <div>
                 <h3 className="font-bold text-gray-900">Relatórios Gerenciais</h3>
                 <p className="text-xs text-gray-500 leading-snug mt-1">Tenha na mão relatórios completos para bancos, sócios ou para sua própria segurança.</p>
              </div>
           </div>
        </div>

        {/* TONICO AI HIGHLIGHT */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 text-white mb-12 shadow-2xl border border-gray-700 relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-4 opacity-10"><Bot size={80} /></div>
           <div className="relative z-10">
             <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#00A86B] text-[10px] font-bold px-2 py-0.5 rounded text-white">EXCLUSIVO VITALÍCIO</span>
             </div>
             <h3 className="text-xl font-black mb-2 flex items-center gap-2">
               Tonico AI <Bot className="text-[#00A86B]" />
             </h3>
             <p className="text-sm text-gray-300 mb-4">
               Seu "Agrônomo Virtual" 24h. Tire dúvidas sobre pragas, clima e dosagem na hora, sem esperar visita técnica.
             </p>
             <div className="flex gap-2">
                <span className="text-[10px] bg-white/10 px-2 py-1 rounded flex items-center gap-1"><MapPin size={10} /> GPS Preciso</span>
                <span className="text-[10px] bg-white/10 px-2 py-1 rounded flex items-center gap-1"><WifiOff size={10} /> Offline</span>
             </div>
           </div>
        </div>

        {/* =====================================================================================
            3. SOCIAL PROOF (AUTO SCROLL)
        ===================================================================================== */}
        <div className="mb-12 overflow-hidden w-full">
           <h3 className="text-center font-black text-gray-900 text-lg mb-6 flex items-center justify-center gap-2">
              <Users size={18} /> Produtores Reais, Resultados Reais
           </h3>
           
           <div className="flex w-[200%] animate-scroll">
              {[1, 2, 3, 4].map((set) => (
                <div key={set} className="flex gap-4 pr-4">
                    <div className="w-[260px] bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                       <div className="flex gap-1 mb-2">
                          {[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />)}
                       </div>
                       <p className="text-gray-600 text-xs italic mb-2">"O controle de insumos pagou o app na primeira semana. Tinha funcionário desperdiçando adubo e eu nem via."</p>
                       <p className="font-bold text-gray-900 text-xs">- João M., Soja (GO)</p>
                    </div>
                    <div className="w-[260px] bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                       <div className="flex gap-1 mb-2">
                          {[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />)}
                       </div>
                       <p className="text-gray-600 text-xs italic mb-2">"Achei que fosse difícil mexer, mas é muito simples. Agora sei meu lucro antes de colher."</p>
                       <p className="font-bold text-gray-900 text-xs">- Antônio C., Café (MG)</p>
                    </div>
                     <div className="w-[260px] bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                       <div className="flex gap-1 mb-2">
                          {[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />)}
                       </div>
                       <p className="text-gray-600 text-xs italic mb-2">"O Tonico AI salvou minha aplicação. Ia aplicar com chuva vindo e ele avisou."</p>
                       <p className="font-bold text-gray-900 text-xs">- Pedro S., Milho (PR)</p>
                    </div>
                </div>
              ))}
           </div>
        </div>

        {/* =====================================================================================
            4. BONUSES (R$ 900 VALUE)
        ===================================================================================== */}
        <div className="mb-10 bg-yellow-50 rounded-3xl p-6 border border-yellow-200">
           <div className="flex items-center justify-center gap-2 mb-6">
              <Gift className="text-yellow-600" />
              <h3 className="text-center font-black text-gray-900 text-lg">Bônus Exclusivos (R$ 900,00)</h3>
           </div>
           
           <p className="text-center text-xs text-gray-600 mb-6 font-medium">Libere estes 3 presentes GRATUITAMENTE apenas no plano <strong className="text-black">Vitalício</strong>:</p>

           <div className="space-y-3">
              <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-yellow-100 shadow-sm opacity-75 grayscale hover:grayscale-0 transition-all">
                 <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center font-bold text-xs text-gray-400">PDF</div>
                 <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-xs">Manual de Pragas e Doenças</h4>
                    <p className="text-[10px] text-gray-400">Vendido por R$ 297,00</p>
                 </div>
                 <Lock size={14} className="text-gray-400" />
              </div>

              <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-yellow-100 shadow-sm opacity-75 grayscale hover:grayscale-0 transition-all">
                 <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center font-bold text-xs text-gray-400">XLS</div>
                 <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-xs">Planilha Mestra de Custos</h4>
                    <p className="text-[10px] text-gray-400">Vendida por R$ 197,00</p>
                 </div>
                 <Lock size={14} className="text-gray-400" />
              </div>

              <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-yellow-100 shadow-sm opacity-75 grayscale hover:grayscale-0 transition-all">
                 <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center font-bold text-xs text-gray-400">VIP</div>
                 <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-xs">Comunidade de Produtores</h4>
                    <p className="text-[10px] text-gray-400">Valor inestimável (R$ 406,00)</p>
                 </div>
                 <Lock size={14} className="text-gray-400" />
              </div>
           </div>
        </div>

        {/* =====================================================================================
            5. PRICING TIERS
        ===================================================================================== */}
        <div className="mb-12">
           <h3 className="text-center font-black text-gray-900 text-2xl mb-2">Escolha seu Plano</h3>
           <p className="text-center text-gray-500 text-xs mb-8">Investimento que se paga na primeira saca.</p>
           
           <div className="space-y-4">
              {/* MONTHLY */}
              <div className="bg-white p-6 rounded-3xl border border-gray-100 flex items-center justify-between shadow-sm hover:border-gray-300 transition-colors">
                 <div>
                    <h4 className="font-bold text-gray-700 text-sm">Mensal</h4>
                    <p className="text-[10px] text-gray-400">Renova todo mês</p>
                 </div>
                 <div className="text-right">
                    <span className="block text-2xl font-black text-gray-900">R$ 29,00</span>
                    <button className="text-[10px] font-bold text-[#00A86B] uppercase border border-[#00A86B] px-3 py-1 rounded-full hover:bg-[#00A86B] hover:text-white transition-colors">Selecionar</button>
                 </div>
              </div>

              {/* SEMIANNUAL */}
              <div className="bg-white p-6 rounded-3xl border-2 border-[#00A86B] relative flex flex-col shadow-lg z-10">
                 <div className="absolute -top-3 right-6 bg-green-100 text-green-700 text-[10px] font-black px-2 py-1 rounded">
                    ECONOMIZE 44%
                 </div>
                 <div className="flex justify-between items-center mb-4">
                    <div>
                       <h4 className="font-bold text-gray-900 text-lg">Semestral</h4>
                       <p className="text-[10px] text-gray-500">Acesso por 6 meses</p>
                    </div>
                    <div className="text-right">
                       <span className="text-xs text-gray-400 line-through mr-1">R$ 174</span>
                       <span className="text-3xl font-black text-[#00A86B]">R$ 97,00</span>
                    </div>
                 </div>
                 <button className="w-full py-3 rounded-xl font-bold text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                    QUERO SEMESTRAL
                 </button>
              </div>

              {/* LIFETIME (HERO) */}
              <div className="relative p-1 rounded-[32px] bg-gradient-to-b from-gray-900 via-gray-800 to-black shadow-2xl transform scale-105 z-20 mt-6">
                 <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-yellow-400 text-black text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-1">
                       <Zap size={12} className="fill-black" /> Oferta Única
                    </span>
                 </div>
                 
                 <div className="bg-gray-900 rounded-[28px] p-6 text-center h-full">
                    <h4 className="text-white font-black uppercase text-xl mb-1 tracking-wider">Vitalício</h4>
                    <p className="text-xs text-gray-400 mb-6">Pague uma vez, use para sempre</p>
                    
                    <div className="flex items-center justify-center gap-2 mb-6">
                       <span className="text-gray-500 line-through text-lg">R$ 997</span>
                       <span className="text-5xl font-black text-white tracking-tighter">R$ 247</span>
                    </div>

                    <ul className="text-left space-y-3 mb-8 bg-white/5 p-4 rounded-xl">
                       <li className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle2 size={16} className="text-[#00A86B]" /> <span>Acesso ilimitado ao App</span>
                       </li>
                       <li className="flex items-center gap-2 text-sm text-white font-bold">
                          <Bot size={16} className="text-[#00A86B]" /> <span>Tonico AI Liberado</span>
                       </li>
                       <li className="flex items-center gap-2 text-sm text-yellow-400 font-bold">
                          <Gift size={16} /> <span>3 Bônus (R$ 900,00)</span>
                       </li>
                       <li className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle2 size={16} className="text-[#00A86B]" /> <span>Atualizações futuras grátis</span>
                       </li>
                    </ul>

                    <button className="w-full bg-[#00A86B] hover:bg-[#008f5b] text-white py-4 rounded-xl font-black text-lg shadow-[0_0_20px_rgba(0,168,107,0.4)] transition-all transform active:scale-95 flex items-center justify-center gap-2 animate-pulse">
                       QUERO ACESSO VITALÍCIO
                       <ArrowRight size={20} />
                    </button>
                    <p className="text-[10px] text-gray-500 mt-3">Menos de R$ 0,70 por dia no primeiro ano.</p>
                 </div>
              </div>
           </div>
        </div>

        {/* =====================================================================================
            6. GUARANTEE & FINAL
        ===================================================================================== */}
        <div className="bg-white rounded-3xl p-8 text-center mb-8 border-2 border-dashed border-gray-200">
           <div className="inline-block p-3 bg-gray-100 rounded-full mb-4">
              <ShieldCheck size={48} className="text-gray-900" />
           </div>
           <h4 className="font-black text-gray-900 text-xl mb-2">Garantia Blindada de 30 Dias</h4>
           <p className="text-sm text-gray-500 leading-relaxed max-w-[280px] mx-auto">
              Use na sua lavoura. Se você não economizar dinheiro ou não gostar, devolvemos <strong>100% do valor</strong>. Sem perguntas, sem letras miúdas.
           </p>
        </div>

        <div className="text-center pb-8 px-8">
           <div className="flex items-center justify-center gap-4 opacity-40 mb-4 grayscale">
              <div className="h-6 w-10 bg-gray-300 rounded"></div>
              <div className="h-6 w-10 bg-gray-300 rounded"></div>
              <div className="h-6 w-10 bg-gray-300 rounded"></div>
           </div>
           <p className="text-[10px] text-gray-400">
             Este site utiliza criptografia SSL de ponta a ponta. Seus dados estão 100% seguros.
             <br/>© 2024 Mãos do Campo Tecnologia Rural
           </p>
        </div>

      </div>
    </div>
  );
};

export default Results;