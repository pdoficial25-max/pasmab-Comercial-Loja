
import React, { useState } from 'react';
import { Heart, Eye, ShoppingCart } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';
import { PageRoute, Product } from '../types';

interface ProductsProps {
  navigateTo: (page: PageRoute, product?: Product) => void;
}

const Products: React.FC<ProductsProps> = ({ navigateTo }) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  return (
    <section id="produtos" className="py-24 bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">Lançamentos <span className="text-brand-orange">Premium</span></h2>
            <p className="text-white/40 max-w-md">Descobre as silhuetas que estão a moldar o futuro da moda urbana em 2026.</p>
          </div>
          <div className="flex gap-4">
            {['Todos', 'Nike', 'Adidas', 'New Balance'].map(cat => (
              <button 
                key={cat}
                className={`px-6 py-2 rounded-full border border-white/10 transition-all ${
                  cat === 'Todos' ? 'bg-brand-orange text-white border-brand-orange' : 'text-white/60 hover:text-white hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_PRODUCTS.map((product) => (
            <div key={product.id} className="group relative bg-brand-dark/50 border border-white/5 rounded-3xl overflow-hidden hover:border-brand-orange/30 transition-all duration-500 flex flex-col">
              {/* Product Badges */}
              <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                {product.isNew && <span className="bg-brand-orange text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Novo</span>}
                {product.isSale && <span className="bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Saldos</span>}
              </div>

              {/* Heart Button */}
              <button 
                onClick={() => toggleFavorite(product.id)}
                className={`absolute top-4 right-4 z-20 p-2.5 rounded-full backdrop-blur-md transition-all duration-300 ${
                  favorites.includes(product.id) ? 'bg-brand-orange text-white' : 'bg-white/5 text-white/60 hover:text-brand-orange hover:bg-white/10'
                }`}
              >
                <Heart size={20} fill={favorites.includes(product.id) ? 'currentColor' : 'none'} />
              </button>

              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-brand-black/50 to-brand-dark">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button 
                    onClick={() => navigateTo('carrinho', product)}
                    className="bg-white text-brand-black p-4 rounded-full hover:bg-brand-orange hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300"
                  >
                    <ShoppingCart size={22} />
                  </button>
                  <button 
                    onClick={() => navigateTo('quick-view', product)}
                    className="bg-white text-brand-black p-4 rounded-full hover:bg-brand-orange hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 delay-75 duration-300"
                  >
                    <Eye size={22} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-2">
                  <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">{product.brand}</span>
                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-brand-orange transition-colors">{product.name}</h3>
                </div>
                <p className="text-white/40 text-sm mb-6 line-clamp-2">{product.description}</p>
                <div className="mt-auto flex justify-between items-end">
                  <div className="flex flex-col">
                    {product.originalPrice && (
                      <span className="text-white/30 text-xs line-through">Kz {product.originalPrice.toFixed(2)}</span>
                    )}
                    <span className="text-white text-2xl font-heading font-bold">Kz {product.price.toFixed(2)}</span>
                  </div>
                  <div className="flex gap-1">
                    {product.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[10px] border border-white/10 px-2 py-0.5 rounded text-white/30 uppercase tracking-tighter">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <button className="border border-white/10 hover:border-brand-orange text-white hover:text-brand-orange font-bold px-12 py-4 rounded-xl transition-all">
            Ver Todos os Produtos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
