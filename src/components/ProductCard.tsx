import { useState } from 'react';
import { Check, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onSelectBudget: (productName: string) => void;
}

export default function ProductCard({ product, onSelectBudget }: ProductCardProps) {
  const [showFeatures, setShowFeatures] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden h-full">
      {/* Product Image Header */}
      <div className="relative aspect-video bg-slate-50 flex items-center justify-center p-6 border-b border-slate-100 overflow-hidden">
        <img
          src={product.imgUrl}
          alt={product.name}
          className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            // If image fails, show a clean generic badge
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?q=80&w=800&auto=format&fit=crop';
          }}
        />
        
        {/* Floating Category Badge */}
        <span className="absolute top-3 left-3 bg-brand-blue/90 backdrop-blur-sm text-white text-[10px] uppercase font-semibold px-2.5 py-1 rounded-md tracking-wider">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          {/* Logo or Text Name */}
          <div className="h-10 flex items-center mb-3">
            {product.logoUrl ? (
              <img
                src={product.logoUrl}
                alt={`${product.name} Logo`}
                className="max-h-full object-contain filter brightness-90 saturate-150"
                onError={(e) => {
                  // Hide logo image if it fails
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            ) : (
              <h3 className="font-secondary font-bold text-xl text-brand-blue">{product.name}</h3>
            )}
          </div>

          <p className="text-sm text-brand-light-gray leading-relaxed mb-4">
            {product.description}
          </p>
        </div>

        <div>
          {/* Features Dropdown / Toggle */}
          <div className="border-t border-slate-100 pt-4 mt-4">
            <button
              onClick={() => setShowFeatures(!showFeatures)}
              className="flex justify-between items-center w-full text-brand-blue hover:text-brand-green font-medium text-xs transition-colors mb-3"
            >
              <span>{showFeatures ? 'Ocultar diferenciais' : 'Ver diferenciais técnicos'}</span>
              {showFeatures ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            {showFeatures && (
              <ul className="space-y-2 mt-2 bg-slate-50 p-3 rounded-lg border border-slate-100 transition-all duration-200">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-brand-gray">
                    <Check className="w-3.5 h-3.5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-2.5 mt-4">
            <button
              onClick={() => onSelectBudget(product.name)}
              className="flex-1 text-center bg-brand-green hover:bg-brand-green/90 text-white font-medium text-xs py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-1.5"
            >
              Solicitar Orçamento
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
