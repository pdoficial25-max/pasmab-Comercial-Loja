
import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { ToastState } from '../types';
import Toast from './Toast';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState<ToastState>({ message: '', type: null });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setToast({ message: '❌ Insere um e-mail válido.', type: 'error' });
      return;
    }

    setIsLoading(true);
    // Simular chamada à API
    setTimeout(() => {
      setIsLoading(false);
      setToast({ message: '✅ Inscrição realizada com sucesso! Fica por dentro das novidades.', type: 'success' });
      setEmail('');
    }, 1500);
  };

  return (
    <section id="newsletter" className="py-24 bg-brand-orange relative overflow-hidden">
      {/* Visual Decoration */}
      <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
        <h2 className="text-[150px] font-heading font-bold text-brand-black rotate-12 leading-none select-none uppercase">Junta-te ao Clube</h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-black">Drop antecipado? <br />Subscreve agora.</h2>
            <p className="text-brand-black/70 text-lg font-medium">Recebe avisos exclusivos sobre lançamentos de edições limitadas e promoções secretas.</p>
          </div>

          <form onSubmit={handleSubmit} className="w-full lg:w-auto flex flex-col sm:flex-row gap-4 bg-brand-black/5 p-2 rounded-2xl border border-brand-black/10">
            <input 
              type="email" 
              placeholder="O teu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white text-brand-black px-6 py-4 rounded-xl w-full sm:w-80 outline-none focus:ring-4 focus:ring-brand-black/10 transition-all font-medium"
            />
            <button 
              disabled={isLoading}
              className="bg-brand-black text-white hover:bg-black px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
            >
              {isLoading ? <Loader2 className="animate-spin" /> : (
                <>
                  Subscrever
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      <Toast 
        message={toast.message} 
        type={toast.type} 
        onClose={() => setToast({ message: '', type: null })} 
      />
    </section>
  );
};

export default Newsletter;
