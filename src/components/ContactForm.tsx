import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

interface ContactFormProps {
  selectedProduct: string;
  onClearProduct: () => void;
}

export default function ContactForm({ selectedProduct, onClearProduct }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    type: 'budget', // budget | distributor | message
    product: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Sync selected product from props
  useEffect(() => {
    if (selectedProduct) {
      setFormData((prev) => ({
        ...prev,
        type: 'budget',
        product: selectedProduct,
      }));
    }
  }, [selectedProduct]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API request
    console.log('Form data submitted:', formData);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      city: '',
      type: 'budget',
      product: '',
      message: '',
    });
    setSubmitted(false);
    onClearProduct();
  };

  return (
    <section id="contato" className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-secondary text-brand-blue mb-4">
            Fale com a nossa equipe
          </h2>
          <p className="text-brand-light-gray text-base leading-relaxed">
            Estamos prontos para atender a sua demanda. Seja para solicitar orçamentos, tirar dúvidas ou se tornar um distribuidor Biosphera.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Info cards (Left) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Box */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-secondary font-bold text-lg text-brand-blue mb-6">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-blue/5 text-brand-blue rounded-xl">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-brand-light-gray font-semibold uppercase tracking-wider">
                      E-mail
                    </h4>
                    <a href="mailto:contato@biosphera.agr.br" className="text-sm font-medium text-brand-blue hover:text-brand-green transition-colors">
                      contato@biosphera.agr.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-blue/5 text-brand-blue rounded-xl">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-brand-light-gray font-semibold uppercase tracking-wider">
                      Telefone
                    </h4>
                    <p className="text-sm font-medium text-brand-blue">
                      (43) 99999-9999
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-blue/5 text-brand-blue rounded-xl">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-brand-light-gray font-semibold uppercase tracking-wider">
                      Endereço
                    </h4>
                    <p className="text-sm font-medium text-brand-blue">
                      Rua Walter Pereira 955, CEP 86037-330
                    </p>
                    <p className="text-xs text-brand-light-gray mt-0.5">
                      Londrina - PR, Brasil
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Help Callout */}
            <div className="bg-brand-blue text-white p-8 rounded-2xl relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/20 rounded-full blur-2xl transform translate-x-12 -translate-y-12"></div>
              <h3 className="font-secondary font-bold text-lg mb-3 relative z-10">
                Seja um distribuidor
              </h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed relative z-10">
                Temos representantes comerciais e técnicos nas principais regiões agrícolas do país. Faça parte da nossa rede.
              </p>
              <button
                onClick={() => setFormData(prev => ({ ...prev, type: 'distributor' }))}
                className="bg-brand-green hover:bg-brand-green/90 text-white font-medium text-xs px-5 py-3 rounded-lg transition-colors relative z-10"
              >
                Registrar Interesse
              </button>
            </div>
          </div>

          {/* Contact Form (Right) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-slate-100 shadow-sm">
            {submitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center p-4 bg-emerald-50 text-emerald-600 rounded-full mb-6">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold font-secondary text-brand-blue mb-2">
                  Mensagem Enviada!
                </h3>
                <p className="text-brand-light-gray text-sm max-w-md mx-auto mb-8 leading-relaxed">
                  Obrigado pelo seu contato, <strong>{formData.name}</strong>. Nossa equipe comercial analisará suas informações e retornará o contato o mais breve possível.
                </p>
                <button
                  onClick={handleReset}
                  className="bg-brand-blue hover:bg-brand-blue/90 text-white font-medium text-xs px-6 py-3 rounded-lg transition-colors"
                >
                  Enviar Outra Mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-brand-gray uppercase mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Ex: João Silva"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 px-4 text-sm text-brand-blue focus:outline-none focus:border-brand-green focus:bg-white transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-brand-gray uppercase mb-2">
                      E-mail Corporativo *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Ex: joao@empresa.com.br"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 px-4 text-sm text-brand-blue focus:outline-none focus:border-brand-green focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-brand-gray uppercase mb-2">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Ex: (43) 99999-9999"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 px-4 text-sm text-brand-blue focus:outline-none focus:border-brand-green focus:bg-white transition-all"
                    />
                  </div>

                  {/* City/State */}
                  <div>
                    <label htmlFor="city" className="block text-xs font-semibold text-brand-gray uppercase mb-2">
                      Cidade / UF *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      placeholder="Ex: Londrina - PR"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 px-4 text-sm text-brand-blue focus:outline-none focus:border-brand-green focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Solicitation Type */}
                <div>
                  <label htmlFor="type" className="block text-xs font-semibold text-brand-gray uppercase mb-2">
                    Tipo de Solicitação
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 px-4 text-sm text-brand-blue focus:outline-none focus:border-brand-green focus:bg-white transition-all"
                  >
                    <option value="budget">Solicitar Orçamento de Produto</option>
                    <option value="distributor">Quero ser um Distribuidor</option>
                    <option value="message">Dúvidas e Mensagem Geral</option>
                  </select>
                </div>

                {/* Conditional Product Selection */}
                {formData.type === 'budget' && (
                  <div>
                    <label htmlFor="product" className="block text-xs font-semibold text-brand-gray uppercase mb-2">
                      Produto de Interesse *
                    </label>
                    <select
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 px-4 text-sm text-brand-blue focus:outline-none focus:border-brand-green focus:bg-white transition-all"
                    >
                      <option value="">Selecione um produto...</option>
                      <option value="NITROSPHERA DUALTECH">NITROSPHERA DUALTECH</option>
                      <option value="NITROSPHERA TROPICI">NITROSPHERA TROPICI</option>
                      <option value="NODGROW SOJA +">NODGROW SOJA +</option>
                      <option value="NODGROW LÍQUIDO">NODGROW LÍQUIDO</option>
                      <option value="NITROSPHERA ELKANII TURFA">NITROSPHERA ELKANII TURFA</option>
                      <option value="NITROSPHERA FUSION">NITROSPHERA FUSION</option>
                      <option value="BIOACTION PRO">BIOACTION PRO</option>
                      <option value="BIOACTION POWER">BIOACTION POWER</option>
                      <option value="BIOSTART">BIOSTART</option>
                      <option value="AZOSPHERA">AZOSPHERA</option>
                      <option value="SAFE POWER NOD">SAFE POWER NOD</option>
                    </select>
                  </div>
                )}

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-brand-gray uppercase mb-2">
                    Mensagem / Observação
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte-nos um pouco sobre a sua necessidade..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 px-4 text-sm text-brand-blue focus:outline-none focus:border-brand-green focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-medium text-sm py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  Enviar Solicitação
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
