
import React from 'react';
import { ArrowRight, Zap, Shield, Truck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-orange/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-8 flex flex-col items-center text-center md:items-start md:text-left">
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <span className="inline-block px-4 py-1 bg-brand-orange/10 text-brand-orange border border-brand-orange/20 rounded-full text-sm font-bold tracking-wider uppercase">
              Nova Coleção 2026
            </span>
            <h1 className="text-6xl lg:text-8xl font-heading font-bold text-white leading-tight flex flex-col">
              <span>O futuro nos</span>
              <span className="text-brand-orange italic self-center md:self-start">seus pés</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-lg mx-auto md:mx-0">
              PASMAB COMERCIAL redefine o estilo urbano com uma curadoria premium dos ténis mais cobiçados do mundo. Design, conforto e exclusividade.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="bg-brand-orange hover:bg-orange-600 text-brand-black font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-105 group">
              Explorar a Coleção
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-brand-orange text-brand-orange hover:bg-brand-orange/10 font-bold py-4 px-8 rounded-xl transition-all">
              Saber Mais
            </button>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-8">
            <div className="flex items-center gap-2 text-white/40">
              <Truck size={18} className="text-brand-orange" />
              <span className="text-sm font-medium">Portes Grátis</span>
            </div>
            <div className="flex items-center gap-2 text-white/40">
              <Shield size={18} className="text-brand-orange" />
              <span className="text-sm font-medium">Original Garantido</span>
            </div>
            <div className="flex items-center gap-2 text-white/40">
              <Zap size={18} className="text-brand-orange" />
              <span className="text-sm font-medium">Design Exclusivo</span>
            </div>
          </div>
        </div>

        {/* Sneaker Image Container */}
        <div className="relative flex justify-center items-center">
          <div className="absolute inset-0 bg-brand-orange/20 blur-[100px] rounded-full scale-75 animate-pulse" />
          <img 
            src="https://images.unsplash.com/photo-1597045566677-8cf032ed6634?auto=format&fit=crop&q=80&w=800"
            alt="Ténis Futuro"
            className="relative z-10 w-full max-w-md rotate-[-15deg] drop-shadow-[0_35px_35px_rgba(255,107,53,0.3)] animate-float transition-all duration-700 hover:rotate-0 hover:scale-110 cursor-pointer"
          />
          
          <div className="absolute top-10 right-0 bg-brand-black/80 backdrop-blur border border-white/10 p-4 rounded-2xl shadow-xl animate-float-delayed hidden lg:block">
            <p className="text-brand-orange font-bold text-lg">Edição Limitada</p>
            <p className="text-white/60 text-xs">Apenas 100 pares</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
