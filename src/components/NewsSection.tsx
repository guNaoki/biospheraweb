import { Calendar, ArrowRight, BookOpen } from 'lucide-react';

interface NewsPost {
  title: string;
  date: string;
  category: string;
  summary: string;
  link: string;
}

const newsPosts: NewsPost[] = [
  {
    title: 'Sinalização bioquímica é aposta do Mentor para soja mais produtiva',
    date: '19 de junho de 2026',
    category: 'Inovações Biológicas',
    summary: 'A utilização de biomoléculas sinalizadoras surge como uma poderosa ferramenta para otimizar processos fisiológicos e elevar o teto produtivo da cultura da soja.',
    link: '#',
  },
  {
    title: 'Nematoides no sistema produtivo: mapeamento Biosphera e estratégia com BPCPs',
    date: '16 de fevereiro de 2026',
    category: 'Mapeamento & Manejo',
    summary: 'Entenda os impactos das principais espécies de nematoides no solo e como as Bactérias Promotoras de Crescimento de Plantas auxiliam no controle biológico.',
    link: '#',
  },
  {
    title: 'Agricultura resiliente: microrganismos que fortalecem a produtividade',
    date: '04 de fevereiro de 2026',
    category: 'Agricultura Resiliente',
    summary: 'Como a associação benéfica entre plantas e microrganismos atua na mitigação de estresses hídricos e térmicos no campo, garantindo estabilidade produtiva.',
    link: '#',
  },
];

export default function NewsSection() {
  return (
    <section id="noticias" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
          <div className="text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              Blog Biosphera
            </div>
            <h2 className="text-3xl font-bold font-secondary text-brand-blue mb-4">
              Notícias e Conhecimento do Campo
            </h2>
            <p className="text-brand-light-gray text-base">
              Compartilhamos conteúdos informativos, dicas práticas e inovações biológicas para impulsionar o seu sucesso e produtividade no campo.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-brand-blue hover:text-brand-green font-semibold text-sm transition-colors group self-start md:self-end"
          >
            Ver todas as publicações
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsPosts.map((post, index) => (
            <article
              key={index}
              className="bg-slate-50 rounded-2xl border border-slate-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow h-full"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center gap-3 text-xs text-brand-light-gray mb-4">
                  <span className="bg-brand-blue/5 text-brand-blue font-medium px-2.5 py-1 rounded-md">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-secondary font-bold text-lg text-brand-blue mb-3 hover:text-brand-green transition-colors line-clamp-2">
                  <a href={post.link}>{post.title}</a>
                </h3>

                {/* Summary */}
                <p className="text-sm text-brand-light-gray leading-relaxed mb-6 line-clamp-3">
                  {post.summary}
                </p>
              </div>

              {/* Read More Link */}
              <a
                href={post.link}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-blue hover:text-brand-green transition-colors mt-auto"
              >
                Ler Publicação
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
