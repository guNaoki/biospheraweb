import { Link } from 'react-router-dom';
import { Sprout, Activity, ShieldCheck, Shield, Heart, Cpu, CheckCircle, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import NewsSection from '../components/NewsSection';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero />

      {/* SEÇÃO: NOSSAS LINHAS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-green text-xs font-bold uppercase tracking-widest bg-brand-green/15 px-3 py-1 rounded-full">
              Portfólio Biosphera
            </span>
            <h2 className="text-3xl font-bold font-secondary text-brand-blue mt-4 mb-4">
              Para cada desafio, uma solução biológica
            </h2>
            <p className="text-brand-light-gray text-base leading-relaxed">
              Onde a tecnologia encontra a natureza para impulsionar o crescimento e o equilíbrio perfeito da sua lavoura.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Linha 01 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-brand-green/30 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 bg-brand-blue/5 text-brand-blue rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all">
                  <Sprout className="w-6 h-6" />
                </div>
                <h3 className="font-secondary font-bold text-lg text-brand-blue mb-3">
                  01. Fixação Biológica de Nitrogênio
                </h3>
                <p className="text-sm text-brand-light-gray leading-relaxed mb-6">
                  Linha completa de fixadores de nitrogênio biológico formulados em meio líquido ou turfa.
                </p>
              </div>
              <Link to="/produtos" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue group-hover:text-brand-green transition-colors mt-auto uppercase tracking-wider">
                Ver Produtos <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Linha 02 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-brand-green/30 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 bg-brand-blue/5 text-brand-blue rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="font-secondary font-bold text-lg text-brand-blue mb-3">
                  02. Linha BioAction
                </h3>
                <p className="text-sm text-brand-light-gray leading-relaxed mb-6">
                  Linha de produtos inovadores à base de cepas exclusivas de Bacillus selecionadas no Brasil.
                </p>
              </div>
              <Link to="/produtos" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue group-hover:text-brand-green transition-colors mt-auto uppercase tracking-wider">
                Ver Produtos <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Linha 03 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-brand-green/30 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 bg-brand-blue/5 text-brand-blue rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-secondary font-bold text-lg text-brand-blue mb-3">
                  03. BioPromotores
                </h3>
                <p className="text-sm text-brand-light-gray leading-relaxed mb-6">
                  Bactérias e fungos promotores de crescimento que auxiliam a planta a absorver mais água e minerais.
                </p>
              </div>
              <Link to="/produtos" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue group-hover:text-brand-green transition-colors mt-auto uppercase tracking-wider">
                Ver Produtos <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Linha 04 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-brand-green/30 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 bg-brand-blue/5 text-brand-blue rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-secondary font-bold text-lg text-brand-blue mb-3">
                  04. Protetores
                </h3>
                <p className="text-sm text-brand-light-gray leading-relaxed mb-6">
                  Aditivos e protetores osmóticos que estendem a sobrevida das bactérias benéficas no tratamento.
                </p>
              </div>
              <Link to="/produtos" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue group-hover:text-brand-green transition-colors mt-auto uppercase tracking-wider">
                Ver Produtos <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO: PROPÓSITO E VALORES TEASER */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 text-left">
              <span className="text-brand-green text-xs font-bold uppercase tracking-widest">
                Quem Somos
              </span>
              <h2 className="text-3xl font-bold font-secondary text-brand-blue mt-3 mb-6 leading-tight">
                Construir a agricultura do futuro com biossoluções inovadoras!
              </h2>
              <p className="text-brand-gray text-base leading-relaxed mb-8">
                Somos uma indústria de insumos biológicos que se destaca no Brasil por seu compromisso com a inovação e sustentabilidade. Nossos pilares fundamentais são a ética, pesquisa constante e excelência produtiva.
              </p>
              <Link
                to="/quem-somos"
                className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue/90 text-white font-medium text-sm px-6 py-3.5 rounded-xl transition-all shadow-sm"
              >
                Conheça Nossa História
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <Heart className="w-8 h-8 text-rose-500 mb-4" />
                <h3 className="font-secondary font-bold text-base text-brand-blue mb-2">Paixão</h3>
                <p className="text-xs text-brand-light-gray leading-relaxed">
                  Pelo que fazemos e por quem fazemos. Dedicação contínua aos nossos parceiros e clientes no campo.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <Cpu className="w-8 h-8 text-brand-blue mb-4" />
                <h3 className="font-secondary font-bold text-base text-brand-blue mb-2">Inovação</h3>
                <p className="text-xs text-brand-light-gray leading-relaxed">
                  Busca constante por tecnologias avançadas e análises biológicas por meio de laboratórios próprios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO: DESTAQUE DE PRODUTOS E BOTÃO PARA VER TODOS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-green text-xs font-bold uppercase tracking-widest bg-brand-green/15 px-3 py-1 rounded-full">
              Destaques de Tecnologia
            </span>
            <h2 className="text-3xl font-bold font-secondary text-brand-blue mt-4 mb-4">
              Biotecnologia Aplicada à Alta Produtividade
            </h2>
            <p className="text-brand-light-gray text-base">
              Nossa nova geração de inoculantes e protetores biológicos de alta concentração celular.
            </p>
          </div>

          {/* Destaque Moderno sem Fundo */}
          <div className="bg-gradient-to-br from-brand-blue to-brand-dark text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden mb-12">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 text-left space-y-6">
                <span className="bg-brand-green text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-md">
                  Lançamento Premium
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold font-secondary text-white">
                  Nitrosphera DualTech
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
                  Formulação líquida revolucionária combinada com turfa ativa de Sphagnum. Projetado especificamente para tratamento industrial de sementes (TSI), oferecendo a máxima viabilidade celular sob qualquer condição.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green" />
                    <span>Alta tolerância à dessecação</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green" />
                    <span>Excelente fluidez no plantio</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Link
                    to="/produtos"
                    className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green/90 text-white font-medium text-xs px-6 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-brand-green/20"
                  >
                    Ver Linha Completa de Produtos
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Product floating image with subtle background glow (transparent image) */}
              <div className="lg:col-span-5 flex justify-center relative">
                {/* Radial Glow */}
                <div className="absolute inset-0 bg-radial from-brand-green/25 to-transparent rounded-full blur-2xl transform scale-75"></div>
                <img
                  src="https://biosphera.agr.br/wp-content/uploads/2025/08/NITROSPHERA_dualtech-1.png"
                  alt="Nitrosphera DualTech"
                  className="max-h-[300px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] animate-pulse-slow relative z-10 hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://biosphera.agr.br/wp-content/uploads/2024/06/NODGROW-SOJA_Prancheta-1-copia-2-1.png';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO: NOTÍCIAS RECENTES */}
      <NewsSection />
    </div>
  );
}
