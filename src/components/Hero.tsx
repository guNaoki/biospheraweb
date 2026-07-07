import { Leaf, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative bg-brand-blue overflow-hidden min-h-[85vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://biosphera.agr.br/wp-content/uploads/2023/09/bg-slide1.jpg"
          alt="Biosphera Agro Background"
          className="w-full h-full object-cover object-center opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/90 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="max-w-2xl text-left">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-brand-green/20 border border-brand-green/30 px-3.5 py-1.5 rounded-full text-brand-green text-xs font-semibold uppercase tracking-wider mb-6">
            <Leaf className="w-3.5 h-3.5 fill-brand-green" />
            Biossoluções Agrícolas
          </div>

          {/* Headings */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-secondary text-white leading-tight mb-6">
            Construir a agricultura do <span className="text-brand-green">futuro</span> com biossoluções inovadoras
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-light mb-8 max-w-xl leading-relaxed">
            Com o <strong className="text-white font-medium">BioManejo Estratégico</strong> você otimiza resultados, potencializa a força da natureza e garante uma safra muito mais produtiva.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green/90 text-white font-medium px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-brand-green/20"
            >
              Começar Planejamento
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#produtos"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium px-8 py-4 rounded-xl transition-all backdrop-blur-sm"
            >
              Conhecer Nossas Linhas
            </a>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave or curve */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  );
}
