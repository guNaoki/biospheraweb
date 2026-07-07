import { useSearchParams } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

export default function Contato() {
  const [searchParams, setSearchParams] = useSearchParams();
  const productParam = searchParams.get('product') || '';

  const handleClearProduct = () => {
    // Clear url query params
    setSearchParams({});
  };

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Header banner */}
      <section className="bg-brand-blue text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-brand-blue/70"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <span className="text-brand-green text-xs font-bold uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full">
            Atendimento
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold font-secondary text-white mt-3">
            Fale Conosco
          </h1>
          <p className="text-slate-300 text-sm mt-2 max-w-xl">
            Preencha o formulário abaixo para orçamentos, parcerias ou contato comercial direto.
          </p>
        </div>
      </section>

      {/* Reused structured contact layout */}
      <ContactForm
        selectedProduct={productParam}
        onClearProduct={handleClearProduct}
      />
    </div>
  );
}
