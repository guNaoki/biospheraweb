import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Send, Check } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribed email:', email);
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter banner */}
        <div className="bg-brand-blue border border-slate-700/60 p-8 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="text-left">
            <h3 className="font-secondary font-bold text-lg text-white mb-2">
              Fique por dentro das novidades
            </h3>
            <p className="text-sm text-slate-300">
              Inscreva-se em nossa newsletter para receber atualizações, inovações e dicas direto no seu e-mail.
            </p>
          </div>
          <div className="w-full md:w-auto min-w-[300px]">
            {subscribed ? (
              <div className="bg-brand-green/20 border border-brand-green text-brand-green text-sm px-4 py-3 rounded-lg flex items-center gap-2">
                <Check className="w-4 h-4" />
                Inscrição realizada com sucesso!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-green placeholder-slate-500"
                />
                <button
                  type="submit"
                  className="bg-brand-green hover:bg-brand-green/90 text-white font-medium text-xs px-5 py-3 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  Cadastrar
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold font-secondary text-white">
                BIOSPHERA<span className="text-brand-green">.</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Construindo a agricultura do futuro com biossoluções inovadoras e sustentabilidade para a sua lavoura.
            </p>
          </div>

          {/* Product Lines */}
          <div>
            <h4 className="text-xs font-semibold text-brand-green uppercase tracking-wider mb-4">
              Linhas de Produtos
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/produtos" className="hover:text-white transition-colors">
                  Fixação Biológica de Nitrogênio
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="hover:text-white transition-colors">
                  Linha BioAction
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="hover:text-white transition-colors">
                  BioPromotores
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="hover:text-white transition-colors">
                  Protetores Bacterianos
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-brand-green uppercase tracking-wider mb-4">
              Acesso Rápido
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/quem-somos" className="hover:text-white transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to="/noticias" className="hover:text-white transition-colors">
                  Notícias e Artigos
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-white transition-colors">
                  Fale Conosco
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Canal de Denúncia
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-semibold text-brand-green uppercase tracking-wider mb-4">
              Contatos
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-brand-green mt-0.5" />
                <a href="mailto:contato@biosphera.agr.br" className="hover:text-white transition-colors">
                  contato@biosphera.agr.br
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-green mt-0.5" />
                <span>
                  Rua Walter Pereira 955,
                  <br />
                  Londrina | PR - Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 BIOSPHERA, Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
