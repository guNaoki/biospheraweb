import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Mail, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', to: '/' },
    { label: 'Quem Somos', to: '/quem-somos' },
    { label: 'Produtos', to: '/produtos' },
    { label: 'Notícias', to: '/noticias' },
    { label: 'Contato', to: '/contato' },
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-brand-blue text-white text-xs py-2 px-4 sm:px-6 lg:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-brand-green" />
              <a href="mailto:contato@biosphera.agr.br" className="hover:text-brand-green transition-colors">
                contato@biosphera.agr.br
              </a>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand-green" />
              Rua Walter Pereira 955, Londrina - PR
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-semibold text-brand-green">Biosphera Agro Solutions</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img
                className="h-12 w-auto object-contain"
                src="https://biosphera.agr.br/wp-content/uploads/2023/12/LOGO-SEM-FUNDO.png"
                alt="Biosphera Logo"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="text-2xl font-bold font-secondary text-brand-blue">
                BIOSPHERA<span className="text-brand-green">.</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-all relative py-2 group ${
                    isActive
                      ? 'text-brand-blue font-semibold border-b-2 border-brand-green'
                      : 'text-brand-gray hover:text-brand-blue'
                  }`
                }
              >
                {item.label}
                <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-brand-green transition-all duration-200 group-hover:w-full"></span>
              </NavLink>
            ))}
            <Link
              to="/contato"
              className="bg-brand-green hover:bg-brand-blue text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-colors shadow-sm"
            >
              Fale Conosco
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-gray hover:text-brand-blue hover:bg-slate-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu principal</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-50 border-b border-slate-200" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'text-brand-blue bg-slate-100 font-semibold'
                      : 'text-brand-gray hover:text-brand-blue hover:bg-slate-100'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-4 pb-2 border-t border-slate-200 px-3">
              <Link
                to="/contato"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-brand-green hover:bg-brand-blue text-white px-4 py-3 rounded-lg font-medium text-base transition-colors"
              >
                Fale Conosco
              </Link>
            </div>
            <div className="px-3 py-3 text-xs text-brand-light-gray space-y-2">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-green" />
                contato@biosphera.agr.br
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-green" />
                Londrina - PR
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
