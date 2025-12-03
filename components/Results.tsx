import React, { useEffect, useState } from 'react';
import { 
  AlertTriangle, Bot, MapPin, WifiOff, ArrowRight, CheckCircle2, 
  Clock, ShieldCheck, Star, Trophy, Lock, TrendingDown, Users, ThumbsUp 
} from 'lucide-react';

const Results: React.FC = () => {
  // Simple animation trigger
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 100);
  }, []);

  const PriceCard = ({ title, price, period, highlight = false, savings = "" }: any) => (
    <div className={`relative p-6 rounded-3xl border-2 flex flex-col items-center text-center transition-transform hover:scale-105 ${highlight ? 'bg-green-50 border-[#00A86B] shadow-xl z-10' : 'bg-white border-gray-100 shadow-sm'}`}>
      {highlight && (
        <div className="absolute -top-4 bg-[#00A86B] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
          Mais Vendido
        </div>
      )}
      <h4 className="text-gray-500 font-bold uppercase text-xs mb-2">{title}</h4>
      <div className="flex items-end justify-center gap-1 mb-1">
        <span className="text-sm font-medium text-gray-400 mb-1">R$</span>
        <span className={`text-4xl font-black ${highlight ? 'text-[#004F2D]' : 'text-gray-900'}`}>{price}</span>
      </div>
      <p className="text-xs text-gray-400 font-medium mb-4">{period}</p>
      {savings && <span className="text-[10px] font-bold text-green-600 bg-green-100 px-2 py-1 rounded-md mb-4">{savings}</span>}
      
      <button className={`w-full py-3 rounded-xl font-bold text-sm transition-colors ${highlight ? 'bg-[#00A86B] hover:bg-[#008f5b] text-white shadow-lg shadow-green-200' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
        ESCOLHER
      </button>
    </div>
  );

  return (
    <div className={`h-full overflow-y-auto bg-slate-50 font-sans relative custom-scrollbar transition-opacity duration-700 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* =====================================================================================
          1. DIAGNOSIS & CRITICAL RISK (AGRESSIVO)
      ===================================================================================== */}
      <div className="relative bg-white pb-10 rounded-b-[40px] shadow-xl z-30 overflow-hidden">
        <div className="bg-red-600 text-white px-6 py-4 flex items-center justify-center gap-2 shadow-lg animate-pulse">
          <AlertTriangle size={20} className="fill-white text-red-600" />
          <span className="text-xs font-black uppercase tracking-widest">Diagnóstico: Risco Crítico</span>
        </div>

        <div className="px-6 pt-8 text-center">
          <h1 className="text-3xl font-black text-gray-900 leading-none mb-4">
            Sua lavoura está <br/><span className="text-red-600">sangrando dinheiro.</span>
          </h1>
          
          <p className="text-gray-600 text-base font-medium leading-relaxed mb-6">
            Nossa IA detectou que seu método atual de gestão está gerando furos no caixa que você não vê.
          </p>

          {/* PAIN POINTS LIST */}
          <div className="bg-red-50 rounded-2xl p-5 text-left border border-red-100 mb-6">
            <h3 className="text-red-800 font-bold text-sm uppercase mb-3 flex items-center gap-2">
              <TrendingDown size={16} /> Onde você está perdendo:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-200 flex items-center justify-center shrink-0 mt-0.5 text-red-700 font-bold text-xs">!</div>
                <span className="text-sm text-gray-700 font-medium"><strong>Desvio de Insumos:</strong> Adubo e defensivos sumindo no galpão ou aplicados sem controle.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-200 flex items-center justify-center shrink-0 mt-0.5 text-red-700 font-bold text-xs">!</div>
                <span className="text-sm text-gray-700 font-medium"><strong>Janela de Plantio:</strong> Atrasos por falta de planejamento geram quebra de safra.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-200 flex items-center justify-center shrink-0 mt-0.5 text-red-700 font-bold text-xs">!</div>
                <span className="text-sm text-gray-700 font-medium"><strong>Custo Invisível:</strong> Você só descobre o prejuízo depois de vender a colheita.</span>
              </li>
            </ul>
          </div>

          {/* IMPACT GRAPH */}
          <div className="bg-gray-900 rounded-2xl p-6 text-white mb-6 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-20"><TrendingDown size={100} /></div>
             <p className="text-xs text-gray-400 font-bold uppercase mb-4 text-left">Projeção Financeira Safra 24/25</p>
             <div className="flex items-end gap-4 h-32 pl-2 border-l border-gray-700">
                <div className="w-1/2 flex flex-col justify-end h-full group">
                   <div className="text-xs text-center mb-1 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Potencial</div>
                   <div className="bg-[#00A86B] w-full rounded-t-lg h-[90%] relative">
                      <span className="absolute -top-6 left-0 right-0 text-center font-bold text-[#00A86B] text-xs">100%</span>
                   </div>
                   <span className="text-[10px] font-bold uppercase mt-2 text-gray-400">Lucro Ideal</span>
                </div>
                <div className="w-1/2 flex flex-col justify-end h-full group">
                   <div className="text-xs text-center mb-1 text-red-400 font-bold animate-pulse">Você Hoje</div>
                   <div className="bg-red-500 w-full rounded-t-lg h-[60%] relative">
                      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-30"></div>
                      <span className="absolute -top-6 left-0 right-0 text-center font-bold text-red-500 text-xs">-40%</span>
                   </div>
                   <span className="text-[10px] font-bold uppercase mt-2 text-gray-400">Realidade</span>
                </div>
             </div>
             <p className="text-sm font-medium mt-4 text-left border-t border-gray-700 pt-3">
               <span className="text-red-400 font-bold">Alerta:</span> Se nada mudar, sua margem será corroída pela ineficiência.
             </p>
          </div>
        </div>
      </div>

      {/* =====================================================================================
          2. THE SOLUTION (REVEAL)
      ===================================================================================== */}
      <div className="px-5 py-12 -mt-6 relative z-20">
        <div className="text-center mb-10">
          <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Mas existe salvação</p>
          <h2 className="text-3xl font-black text-[#004F2D] leading-tight mb-4">
            Assuma o controle total da sua propriedade.
          </h2>
          <p className="text-gray-600 text-sm px-4">
            Não deixe dinheiro na mesa. Use a tecnologia que os grandes produtores usam para garantir o lucro.
          </p>
        </div>

        {/* HERO APP SHOWCASE */}
        <div className="bg-white rounded-[32px] shadow-2xl overflow-hidden mb-12 border border-gray-100">
          <div className="bg-[#004F2D] p-6 text-center pt-8 pb-16 relative">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
             <img src="https://images.unsplash.com/photo-1614730341194-75c60740a2d3?auto=format&fit=crop&q=80&w=200" alt="Logo" className="w-16 h-16 rounded-2xl mx-auto mb-3 shadow-lg border-2 border-[#00A86B]" />
             <h3 className="text-2xl font-black text-white">MÃOS DO CAMPO</h3>
             <p className="text-[#00A86B] font-bold text-sm tracking-widest uppercase">Gestão Rural Inteligente</p>
          </div>
          <div className="px-6 py-8 -mt-10 relative bg-white rounded-t-[32px]">
             <div className="space-y-4">
                <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-[#004F2D] shrink-0"><CheckCircle2 size={20} /></div>
                   <div>
                      <h4 className="font-bold text-gray-900">Estanque o prejuízo</h4>
                      <p className="text-xs text-gray-500">Controle de estoque e aplicação que impede roubos e desperdícios.</p>
                   </div>
                </div>
                <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-[#004F2D] shrink-0"><Clock size={20} /></div>
                   <div>
                      <h4 className="font-bold text-gray-900">Ganhe tempo</h4>
                      <p className="text-xs text-gray-500">Esqueça o caderninho. Lance gastos em 3 segundos no celular.</p>
                   </div>
                </div>
                <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-[#004F2D] shrink-0"><Trophy size={20} /></div>
                   <div>
                      <h4 className="font-bold text-gray-900">Decisões de Milhões</h4>
                      <p className="text-xs text-gray-500">Saiba o custo exato por hectare e venda na hora certa.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* CTA 1 */}
        <button className="w-full bg-[#00A86B] hover:bg-[#008f5b] text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-green-200 transition-all transform active:scale-95 flex items-center justify-center gap-2 mb-12">
            QUERO SALVAR MINHA SAFRA
            <ArrowRight size={20} />
        </button>

        {/* =====================================================================================
            3. TONICO AI SECTION (DIFFERENTIATOR)
        ===================================================================================== */}
        <div className="bg-gray-900 rounded-[2.5rem] p-6 text-white mb-12 relative overflow-hidden">
           <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500 rounded-full filter blur-[60px] opacity-20"></div>
           <div className="absolute -left-10 bottom-0 w-40 h-40 bg-[#00A86B] rounded-full filter blur-[60px] opacity-20"></div>

           <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/10 rounded-xl"><Bot size={32} className="text-[#00A86B]" /></div>
              <div>
                 <h3 className="text-xl font-black">TONICO AI</h3>
                 <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Seu Agrônomo 24h</p>
              </div>
           </div>

           <p className="text-gray-300 text-sm mb-6 leading-relaxed">
             Esqueça depender de visitas técnicas caras que demoram dias. O Tonico analisa fotos da lavoura, dados de clima e GPS para te dar recomendações na hora.
           </p>

           <div className="grid grid-cols-1 gap-3">
              <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center gap-3">
                 <MapPin className="text-blue-400" size={20} />
                 <span className="text-xs font-bold">Timing de Plantio via GPS</span>
              </div>
              <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center gap-3">
                 <WifiOff className="text-purple-400" size={20} />
                 <span className="text-xs font-bold">Funciona 100% Offline</span>
              </div>
           </div>
        </div>

        {/* =====================================================================================
            4. BONUSES
        ===================================================================================== */}
        <div className="mb-12">
           <h3 className="text-center font-black text-gray-900 text-xl mb-6">Bônus Exclusivos Hoje</h3>
           <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-yellow-50 border border-yellow-200 rounded-2xl">
                 <div className="shrink-0"><Star className="fill-yellow-400 text-yellow-500" /></div>
                 <div>
                    <h4 className="font-bold text-gray-800 text-sm">Curso: Gestão Rural Lucrativa</h4>
                    <p className="text-xs text-gray-500">De <span className="line-through">R$ 297</span> por <span className="text-green-600 font-bold">ZERO</span></p>
                 </div>
              </div>
              <div className="flex gap-4 p-4 bg-blue-50 border border-blue-200 rounded-2xl">
                 <div className="shrink-0"><Star className="fill-blue-400 text-blue-500" /></div>
                 <div>
                    <h4 className="font-bold text-gray-800 text-sm">Suporte VIP Prioritário</h4>
                    <p className="text-xs text-gray-500">Atendimento direto com especialistas.</p>
                 </div>
              </div>
           </div>
        </div>

        {/* =====================================================================================
            5. SOCIAL PROOF (RESULTS)
        ===================================================================================== */}
        <div className="mb-12">
           <h3 className="text-center font-black text-gray-900 text-xl mb-6 flex items-center justify-center gap-2">
              <Users size={20} /> Quem usa, enriquece
           </h3>
           <div className="flex overflow-x-auto pb-4 gap-4 snap-x custom-scrollbar -mx-5 px-5">
              <div className="min-w-[280px] bg-white p-5 rounded-2xl shadow-sm border border-gray-100 snap-center">
                 <div className="flex gap-1 mb-2">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />)}
                 </div>
                 <p className="text-gray-600 text-xs italic mb-3">"Eu achava que tinha lucro, mas o aplicativo me mostrou que eu pagava para trabalhar em dois talhões. Cortei o custo e o lucro dobrou."</p>
                 <p className="font-bold text-gray-900 text-xs">- Roberto F., Soja (MT)</p>
              </div>
              <div className="min-w-[280px] bg-white p-5 rounded-2xl shadow-sm border border-gray-100 snap-center">
                 <div className="flex gap-1 mb-2">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />)}
                 </div>
                 <p className="text-gray-600 text-xs italic mb-3">"O Tonico me avisou da chuva na hora certa da aplicação. Só aí economizei uns 5 mil reais de produto."</p>
                 <p className="font-bold text-gray-900 text-xs">- Carlos A., Café (MG)</p>
              </div>
           </div>
        </div>

        {/* =====================================================================================
            6. PRICING TIERS
        ===================================================================================== */}
        <div className="mb-12">
           <h3 className="text-center font-black text-gray-900 text-2xl mb-2">Escolha seu Plano</h3>
           <p className="text-center text-gray-500 text-xs mb-8">Cancele quando quiser. Sem fidelidade.</p>
           
           <div className="space-y-4">
              <PriceCard title="Mensal" price="29,90" period="Cobrado mensalmente" />
              <PriceCard title="Semestral" price="149,00" period="Cobrado a cada 6 meses" highlight={true} savings="Economize 17%" />
              <div className="relative p-6 rounded-3xl border-2 border-gray-900 bg-gray-900 text-white flex flex-col items-center text-center">
                 <div className="absolute -top-3 bg-yellow-400 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Oportunidade Única</div>
                 <h4 className="text-gray-300 font-bold uppercase text-xs mb-2">Vitalício</h4>
                 <div className="flex items-end justify-center gap-1 mb-1">
                    <span className="text-sm font-medium text-gray-500 mb-1">R$</span>
                    <span className="text-4xl font-black text-white">497</span>
                 </div>
                 <p className="text-xs text-gray-400 font-medium mb-4">Pagamento único. Acesso para sempre.</p>
                 <button className="w-full py-3 rounded-xl font-bold text-sm bg-white text-gray-900 hover:bg-gray-100 transition-colors">
                    QUERO VITALÍCIO
                 </button>
              </div>
           </div>
        </div>

        {/* =====================================================================================
            7. GUARANTEE & FINAL CTA
        ===================================================================================== */}
        <div className="bg-gray-100 rounded-3xl p-6 text-center mb-8">
           <ShieldCheck size={40} className="mx-auto text-gray-400 mb-3" />
           <h4 className="font-bold text-gray-900 mb-2">Garantia Risco Zero</h4>
           <p className="text-xs text-gray-500 leading-relaxed">
              Teste por 30 dias. Se não gostar, se não economizar, se não achar fácil... nós devolvemos 100% do seu dinheiro. Basta um email.
           </p>
        </div>

        <button className="w-full bg-[#004F2D] hover:bg-[#003820] text-white py-5 rounded-2xl font-black text-xl shadow-2xl transition-all transform active:scale-95 flex items-center justify-center gap-3 mb-6 relative overflow-hidden group">
            <span className="relative z-10">COMEÇAR AGORA</span>
            <ArrowRight size={24} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>

        <div className="text-center pb-8">
           <div className="flex items-center justify-center gap-4 opacity-60">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" className="h-4 object-contain grayscale" alt="Visa" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" className="h-6 object-contain grayscale" alt="Mastercard" />
              <img src="https://logopng.com.br/logos/pix-106.png" className="h-4 object-contain grayscale" alt="Pix" />
           </div>
           <p className="text-[10px] text-gray-400 mt-4">© 2024 Mãos do Campo Tecnologia Rural</p>
        </div>

      </div>
    </div>
  );
};

export default Results;