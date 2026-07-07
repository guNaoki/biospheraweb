import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Search, ArrowRight, Sparkles, Filter } from 'lucide-react';
import { products } from '../data/products';

export default function Produtos() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const [activeCategory, setActiveCategory] = useState('Todos');

  // Categories list
  const categories = ['Todos', 'Fixação Biológica de Nitrogênio', 'Outros'];

  // Handle navigate to contact form with product pre-filled
  const handleRequestQuote = (productName: string) => {
    navigate(`/contato?product=${encodeURIComponent(productName)}`);
  };

  // Filter products based on search and active tab
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = activeCategory === 'Todos' || product.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Page Header banner */}
      <section className="bg-brand-blue text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://biosphera.agr.br/wp-content/uploads/2023/09/bg-page-title2.png"
            alt="Fundo Produtos"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-brand-blue/70"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <span className="text-brand-green text-xs font-bold uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full">
            Insumos Tecnológicos
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold font-secondary text-white mt-3">
            Nossas Linhas de Produtos
          </h1>
          <p className="text-slate-300 text-sm mt-2 max-w-xl">
            Soluções biológicas de alta performance para impulsionar a sanidade, o desenvolvimento e a produtividade da lavoura.
          </p>
        </div>
      </section>

      {/* Filter and Search controls */}
      <section className="py-8 bg-white border-b border-slate-100 sticky top-[80px] z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Categories tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <span className="text-xs font-semibold text-brand-light-gray flex items-center gap-1.5 mr-2">
              <Filter className="w-3.5 h-3.5" />
              Filtrar por:
            </span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-xs font-semibold px-4 py-2 rounded-lg transition-all ${
                  activeCategory === category
                    ? 'bg-brand-green text-white shadow-sm'
                    : 'bg-slate-50 text-brand-gray hover:bg-slate-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Buscar insumo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 pl-10 pr-4 text-xs text-brand-blue focus:outline-none focus:border-brand-green focus:bg-white transition-all placeholder-slate-400"
            />
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm max-w-xl mx-auto">
            <p className="text-slate-400 text-sm mb-4">Nenhum produto encontrado com os filtros selecionados.</p>
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
            {filteredProducts.map((product) => {
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm flex flex-col items-center text-center relative overflow-hidden group hover:shadow-xl transition-all duration-300"
                >
                  {/* Subtle hover radial glow behind the product package */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-green/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                  {/* Top brand details */}
                  <div className="w-full flex justify-between items-start mb-6 z-10">
                    <span className="text-[9px] uppercase font-bold text-brand-green bg-brand-green/10 px-2 py-0.5 rounded">
                      {product.category}
                    </span>
                    <span className="text-[10px] text-brand-light-gray flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-brand-green" />
                      Insumo Premium
                    </span>
                  </div>

                  {/* Transparent Floating Product Package Mockup */}
                  <div className="h-64 flex items-center justify-center relative mb-8 w-full z-10">
                    {/* Inner glowing circle behind packaging */}
                    <div className="absolute w-40 h-40 bg-slate-50 rounded-full group-hover:bg-brand-green/5 transition-colors duration-300 scale-90"></div>
                    <img
                      src={product.imgUrl}
                      alt={product.name}
                      className="max-h-full object-contain filter drop-shadow-[0_15px_20px_rgba(0,0,0,0.12)] group-hover:scale-105 group-hover:-translate-y-3 transition-all duration-300 relative z-10"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://biosphera.agr.br/wp-content/uploads/2024/06/NODGROW-SOJA_Prancheta-1-copia-2-1.png';
                      }}
                    />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3 z-10 flex-grow">
                    <h3 className="font-secondary font-bold text-xl text-brand-blue leading-snug group-hover:text-brand-green transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-brand-light-gray leading-relaxed max-w-sm mx-auto">
                      {product.description}
                    </p>
                  </div>

                  {/* Technical differentiator tags */}
                  <div className="w-full my-6 border-t border-slate-100 pt-6 text-left space-y-2 z-10">
                    <h4 className="text-[10px] uppercase font-semibold text-brand-blue tracking-wider mb-2">Diferenciais Técnicos:</h4>
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px] text-brand-gray">
                        <Check className="w-3.5 h-3.5 text-brand-green flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA button */}
                  <button
                    onClick={() => handleRequestQuote(product.name)}
                    className="w-full bg-slate-50 group-hover:bg-brand-green text-brand-blue group-hover:text-white font-semibold text-xs py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-1.5 z-10 border border-slate-200/50 group-hover:border-brand-green"
                  >
                    Solicitar Proposta Comercial
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
