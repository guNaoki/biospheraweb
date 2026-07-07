import { Link } from 'react-router-dom';
import { Heart, Cpu, CheckCircle, Sprout, Award } from 'lucide-react';

export default function QuemSomos() {
  return (
    <div className="flex flex-col bg-slate-50">
      {/* Page Title Header */}
      <section className="bg-brand-blue text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://biosphera.agr.br/wp-content/uploads/2023/08/bg-page-title.png"
            alt="Fundo Quem Somos"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-brand-blue/70"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <span className="text-brand-green text-xs font-bold uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full">
            Nossa Indústria
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold font-secondary text-white mt-3">
            Quem Somos
          </h1>
          <p className="text-slate-300 text-sm mt-2 max-w-xl">
            Conheça o nosso compromisso com a ciência, com a natureza e com a produtividade no campo.
          </p>
        </div>
      </section>

      {/* Main Presentation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 text-left space-y-6">
              <h2 className="text-3xl font-bold font-secondary text-brand-blue leading-tight">
                Construir a agricultura do futuro com biossoluções inovadoras!
              </h2>
              <p className="text-brand-gray text-base leading-relaxed">
                A Biosphera é uma indústria de insumos biológicos de alta tecnologia, sediada em Londrina, no Paraná. Nascemos da paixão pela biotecnologia agrícola e da busca por alternativas de manejo que aumentem a lucratividade do produtor enquanto conservam os recursos naturais do solo.
              </p>
              <p className="text-brand-gray text-base leading-relaxed">
                Nossos produtos são desenvolvidos com base em pesquisas rigorosas e parcerias com as principais instituições científicas do país. Garantimos a viabilidade, estabilidade e pureza de todos os microrganismos que chegam à lavoura.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative">
                <div className="absolute -top-5 -left-5 bg-brand-green text-white p-4 rounded-2xl shadow-md">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="font-secondary font-bold text-xl text-brand-blue mb-4 pl-6">
                  Nosso Compromisso Técnico
                </h3>
                <p className="text-sm text-brand-light-gray leading-relaxed mb-4">
                  Fornecemos inoculantes de alta concentração (UFC/mL) com proteção bacteriana contra dessecação e compatibilidade no tratamento industrial de sementes (TSI).
                </p>
                <ul className="space-y-2 text-xs text-brand-gray font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green" />
                    <span>Estirpes certificadas e registradas no MAPA</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green" />
                    <span>Controle estrito de contaminantes em laboratório</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green" />
                    <span>Embalagens com barreira térmica especial</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-secondary text-brand-blue mb-4">
              Nossos Valores e Cultura
            </h2>
            <p className="text-brand-light-gray text-base">
              A Biosphera é regida pela ética, pelo respeito e pelo compromisso com o desenvolvimento sustentável.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Paixão */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-left">
              <Heart className="w-10 h-10 text-rose-500 mb-6" />
              <h3 className="font-secondary font-bold text-lg text-brand-blue mb-3">Paixão</h3>
              <p className="text-sm text-brand-light-gray leading-relaxed">
                Temos paixão pelo agronegócio e por quem trabalha na terra. Buscamos sempre a satisfação total do cliente e do parceiro.
              </p>
            </div>

            {/* Inovação */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-left">
              <Cpu className="w-10 h-10 text-brand-blue mb-6" />
              <h3 className="font-secondary font-bold text-lg text-brand-blue mb-3">Inovação</h3>
              <p className="text-sm text-brand-light-gray leading-relaxed">
                Investimos continuamente em inovação científica para descobrir novas cepas de bactérias e otimizar aditivos protetores.
              </p>
            </div>

            {/* Qualidade */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-left">
              <CheckCircle className="w-10 h-10 text-brand-green mb-6" />
              <h3 className="font-secondary font-bold text-lg text-brand-blue mb-3">Qualidade</h3>
              <p className="text-sm text-brand-light-gray leading-relaxed">
                Excelência assegurada em todo o processo de biofabricação, garantindo inoculação e simbiose eficaz no campo.
              </p>
            </div>

            {/* Sustentabilidade */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-left">
              <Sprout className="w-10 h-10 text-emerald-600 mb-6" />
              <h3 className="font-secondary font-bold text-lg text-brand-blue mb-3">Sustentabilidade</h3>
              <p className="text-sm text-brand-light-gray leading-relaxed">
                Preservamos os recursos ambientais, promovendo um solo biologicamente ativo e colheitas abundantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ESG Section */}
      <section className="py-20 bg-brand-blue text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10">
          <div className="max-w-3xl">
            <span className="text-brand-green text-xs font-bold uppercase tracking-widest">
              Compromisso ESG
            </span>
            <h2 className="text-3xl font-bold font-secondary text-white mt-3 mb-6">
              Sustentabilidade integrada ao nosso DNA
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Acreditamos que a produtividade agrícola não deve custar a saúde do planeta. Por isso, a Biosphera implementa políticas internas e externas sustentadas na governança corporativa, no bem-estar social dos colaboradores e na redução contínua do uso de insumos químicos sintéticos.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              Trabalhamos ao lado do produtor agrícola para construir solos biologicamente ativos, mais resistentes a secas e pragas, gerando estabilidade e retornos financeiros reais de forma limpa.
            </p>
          </div>
        </div>
      </section>

      {/* Qualidade e Estrutura */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Visual */}
            <div className="relative order-2 lg:order-1">
              <img
                src="https://biosphera.agr.br/wp-content/uploads/2024/01/bacterias.jpg"
                alt="Laboratório Biosphera"
                className="rounded-2xl shadow-sm w-full h-[350px] object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800';
                }}
              />
            </div>

            {/* Content */}
            <div className="text-left order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl font-bold font-secondary text-brand-blue">
                Na Biosphera a qualidade é nossa assinatura
              </h2>
              <p className="text-brand-gray text-base leading-relaxed">
                Nossos laboratórios internos realizam análises constantes de viabilidade de lote, garantindo que o inoculante entregue ao produtor contenha o número de bactérias ativas necessário para uma simbiose radicular imediata.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-brand-blue text-sm">Equipamentos</h4>
                  <p className="text-xs text-brand-light-gray mt-1">Biorreatores com controle computadorizado de oxigênio e pH.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-brand-blue text-sm">Equipe</h4>
                  <p className="text-xs text-brand-light-gray mt-1">Mestres e doutores focados no desenvolvimento biotecnológico.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-brand-blue text-sm">Controle</h4>
                  <p className="text-xs text-brand-light-gray mt-1">Padrões rígidos e testes em vasos de cultivo em estufas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA to Contact */}
      <section className="py-16 bg-slate-50 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold font-secondary text-brand-blue mb-4">
            Deseja saber mais sobre as nossas soluções?
          </h2>
          <p className="text-brand-light-gray text-sm mb-6 leading-relaxed">
            Nossa equipe técnica e comercial está sempre pronta para auxiliar no seu planejamento de safra.
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green/90 text-white font-medium text-xs px-6 py-3.5 rounded-lg transition-colors"
          >
            Fale com a nossa equipe
          </Link>
        </div>
      </section>
    </div>
  );
}
