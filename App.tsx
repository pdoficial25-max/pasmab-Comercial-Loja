
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Products from './components/Products';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { PageRoute, Product } from './types';
import { MOCK_PRODUCTS } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const navigateTo = (page: PageRoute, product?: Product) => {
    if (product) setSelectedProduct(product);
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'carrinho':
        return (
          <div className="pt-32 pb-20 container mx-auto px-6 text-center animate-fade-in">
            <h1 className="text-5xl font-heading font-bold mb-8">O Teu Carrinho</h1>
            <div className="bg-brand-dark p-12 rounded-3xl border border-white/10 max-w-2xl mx-auto">
              <p className="text-white/60 text-xl mb-8">Ainda não tens ténis no carrinho. Começa a explorar as nossas coleções exclusivas!</p>
              <button onClick={() => setCurrentPage('home')} className="bg-brand-orange text-white px-12 py-4 rounded-xl font-bold hover:scale-105 transition-transform">
                Voltar à Loja
              </button>
            </div>
          </div>
        );
      case 'checkout':
        return (
          <div className="pt-32 pb-20 container mx-auto px-6 text-center animate-fade-in">
            <h1 className="text-5xl font-heading font-bold mb-8">Finalizar Compra</h1>
            <div className="bg-brand-dark p-12 rounded-3xl border border-white/10 max-w-2xl mx-auto text-left">
              <h3 className="text-2xl font-bold mb-4 text-brand-orange">Resumo do Pedido</h3>
              <p className="text-white/80 mb-6">Estás prestes a adquirir um item de edição limitada.</p>
              <div className="space-y-4 border-t border-white/10 pt-6">
                <input type="text" placeholder="Nome Completo" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-brand-orange" />
                <input type="text" placeholder="Endereço de Entrega (Angola)" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-brand-orange" />
                <button className="w-full bg-brand-orange text-white py-4 rounded-xl font-bold mt-4">Confirmar Pagamento em Kz</button>
                <button onClick={() => setCurrentPage('home')} className="w-full text-white/40 hover:text-white mt-4">Cancelar e Voltar</button>
              </div>
            </div>
          </div>
        );
      case 'login':
        return (
          <div className="pt-32 pb-20 container mx-auto px-6 flex justify-center items-center min-h-[70vh] animate-fade-in">
            <div className="bg-brand-dark p-12 rounded-3xl border border-white/10 w-full max-w-md">
              <h1 className="text-4xl font-heading font-bold mb-2 text-center">Entrar</h1>
              <p className="text-white/40 mb-8 text-center">Acede à tua conta PASMAB</p>
              <div className="space-y-4">
                <input type="email" placeholder="E-mail" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-brand-orange" />
                <input type="password" placeholder="Palavra-passe" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-brand-orange" />
                <button className="w-full bg-brand-orange text-white py-4 rounded-xl font-bold">Iniciar Sessão</button>
                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10"></div></div>
                  <div className="relative flex justify-center text-sm"><span className="px-2 bg-brand-dark text-white/40 uppercase">Ou continuar com</span></div>
                </div>
                <button className="w-full border border-white/10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/5">
                  <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" /> Google
                </button>
                <button onClick={() => setCurrentPage('home')} className="w-full text-white/40 hover:text-white mt-4">Voltar</button>
              </div>
            </div>
          </div>
        );
      case 'quick-view':
        const prod = selectedProduct || MOCK_PRODUCTS[0];
        return (
          <div className="pt-32 pb-20 container mx-auto px-6 animate-fade-in">
             <div className="bg-brand-dark rounded-3xl border border-white/10 overflow-hidden max-w-5xl mx-auto flex flex-col md:flex-row">
                <div className="md:w-1/2 bg-gradient-to-br from-brand-black to-brand-dark p-8">
                  <img src={prod.imageUrl} alt={prod.name} className="w-full h-full object-contain" />
                </div>
                <div className="md:w-1/2 p-12 space-y-6">
                  <span className="text-brand-orange font-bold uppercase tracking-widest">{prod.brand}</span>
                  <h2 className="text-4xl font-heading font-bold">{prod.name}</h2>
                  <p className="text-white/60 text-lg">{prod.description}</p>
                  <div className="text-3xl font-bold text-white">Kz {prod.price.toFixed(2)}</div>
                  <div className="flex gap-4 pt-6">
                    <button onClick={() => navigateTo('checkout')} className="flex-1 bg-brand-orange text-white py-4 rounded-xl font-bold hover:scale-105 transition-transform">Comprar Já</button>
                    <button onClick={() => navigateTo('carrinho')} className="flex-1 border border-white/10 py-4 rounded-xl font-bold hover:bg-white/5 transition-all">Adicionar</button>
                  </div>
                  <button onClick={() => setCurrentPage('home')} className="block w-full text-center text-white/20 hover:text-white pt-4">Fechar Visualização</button>
                </div>
             </div>
          </div>
        );
      default:
        return (
          <>
            <Hero />
            <Featured navigateTo={navigateTo} />
            <Products navigateTo={navigateTo} />
            <Newsletter />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-brand-black text-white selection:bg-brand-orange selection:text-white overflow-x-hidden">
      <Header onNavigate={navigateTo} />
      <main>
        {renderPage()}
      </main>
      <Footer />
      
      {/* Decorative background blobs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] bg-brand-orange/5 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40vw] h-[40vw] bg-brand-orange/5 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>
    </div>
  );
};

export default App;
