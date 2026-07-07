import { useState, useMemo } from 'react';
import { Calendar, ArrowRight, Search, Tag } from 'lucide-react';
import { newsPosts } from '../data/news';

export default function Noticias() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');

  // Compute categories list
  const categories = useMemo(() => {
    const cats = new Set(newsPosts.map((post) => post.category));
    return ['Todos', ...Array.from(cats)];
  }, []);

  // Filter posts based on search and active tab
  const filteredPosts = useMemo(() => {
    return newsPosts.filter((post) => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            post.content.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = activeCategory === 'Todos' || post.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Header banner */}
      <section className="bg-brand-blue text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-brand-blue/70"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <span className="text-brand-green text-xs font-bold uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full">
            Informativo
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold font-secondary text-white mt-3">
            Notícias Biosphera
          </h1>
          <p className="text-slate-300 text-sm mt-2 max-w-xl">
            Acompanhe análises técnicas, notícias de mercado, e inovações em insumos biológicos para a sua safra.
          </p>
        </div>
      </section>

      {/* Filters and Search controls */}
      <section className="py-8 bg-white border-b border-slate-100 sticky top-[80px] z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <span className="text-xs font-semibold text-brand-light-gray flex items-center gap-1.5 mr-2">
              <Tag className="w-3.5 h-3.5" />
              Filtrar por:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-semibold px-4 py-2 rounded-lg transition-all ${
                  activeCategory === cat
                    ? 'bg-brand-green text-white shadow-sm'
                    : 'bg-slate-50 text-brand-gray hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Buscar notícia..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 pl-10 pr-4 text-xs text-brand-blue focus:outline-none focus:border-brand-green focus:bg-white transition-all placeholder-slate-400"
            />
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
          </div>
        </div>
      </section>

      {/* Articles list */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm max-w-xl mx-auto">
            <p className="text-slate-400 text-sm mb-4">Nenhuma notícia encontrada.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('Todos');
              }}
              className="bg-brand-blue text-white text-xs font-medium px-4 py-2 rounded-lg"
            >
              Limpar Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-3xl border border-slate-100 p-8 flex flex-col justify-between hover:shadow-md transition-shadow h-full text-left"
              >
                <div>
                  <div className="flex items-center gap-3 text-xs text-brand-light-gray mb-4">
                    <span className="bg-brand-blue/5 text-brand-blue font-medium px-2.5 py-1 rounded-md">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                  </div>

                  <h3 className="font-secondary font-bold text-lg text-brand-blue mb-3 hover:text-brand-green transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-brand-light-gray leading-relaxed mb-6">
                    {post.summary}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-6 mt-6">
                  <p className="text-xs text-brand-gray leading-relaxed mb-6 italic line-clamp-3">
                    "{post.content}"
                  </p>
                  
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-blue hover:text-brand-green transition-colors cursor-pointer">
                    Ver Artigo Completo
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
