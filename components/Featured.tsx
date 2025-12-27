
import React from 'react';
import { Star, ShoppingBag, ShoppingCart, Eye } from 'lucide-react';
import { PageRoute } from '../types';

interface FeaturedProps {
  navigateTo: (page: PageRoute) => void;
}

const Featured: React.FC<FeaturedProps> = ({ navigateTo }) => {
  return (
    <section id="destaque" className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="w-full md:w-1/2 relative group">
            <div className="absolute inset-0 bg-brand-orange/10 rounded-3xl -rotate-3 group-hover:rotate-0 transition-transform duration-500" />
            <div className="relative bg-gradient-to-br from-brand-black to-brand-dark p-8 rounded-3xl border border-white/5 overflow-hidden">
              <span className="absolute top-4 left-4 z-10 bg-brand-orange text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                Mais Vendido
              </span>
              <img 
                src="https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&q=80&w=800"
                alt="Adidas Yeezy Destaque"
                className="w-full h-auto object-contain transform transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-1 text-brand-orange">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                <span className="text-white/40 text-sm ml-2">(4.9/5 • 1.240 avaliações)</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase tracking-tight">
                Adidas Yeezy <br /> Boost 350 V2
              </h2>
            </div>

            <p className="text-white/60 text-lg leading-relaxed">
              O modelo que mudou a cultura dos ténis para sempre. Confecionado em Primeknit de alta resistência com tecnologia de amortecimento Boost, garantindo um retorno de energia incomparável a cada passo.
            </p>

            <ul className="space-y-3">
              {['Topo em Primeknit respirável', 'Entressola Boost responsiva', 'Sola de borracha aderente', 'Design icónico by Ye'].map((feat) => (
                <li key={feat} className="flex items-center gap-3 text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                  {feat}
                </li>
              ))}
            </ul>

            <div className="pt-6 space-y-6">
              <div className="flex flex-col">
                <span className="text-white/40 line-through text-lg">Kz 1.500,00</span>
                <span className="text-brand-orange text-4xl font-heading font-bold tracking-tighter">Kz 1.290,00</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button 
                  onClick={() => navigateTo('checkout')}
                  className="bg-white hover:bg-brand-orange hover:text-white text-brand-black font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all hover:scale-105"
                >
                  <ShoppingBag size={20} />
                  Comprar Agora
                </button>
                <button 
                  onClick={() => navigateTo('checkout')}
                  className="bg-brand-orange hover:bg-orange-600 text-brand-black font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all hover:scale-105"
                >
                  Comprar Já
                </button>
                <button 
                  onClick={() => navigateTo('carrinho')}
                  className="bg-brand-orange/10 border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all hover:scale-105"
                >
                  <ShoppingCart size={20} />
                  Adicionar ao Carrinho
                </button>
                <button 
                  onClick={() => navigateTo('quick-view')}
                  className="bg-white/5 border border-white/10 text-white hover:border-brand-orange hover:text-brand-orange font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all hover:scale-105"
                >
                  <Eye size={20} />
                  Vista Rápida
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
