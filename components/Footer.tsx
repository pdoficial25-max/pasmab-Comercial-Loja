
import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, Globe, CreditCard } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info - Centralizado conforme pedido para a "Sessão Pasmabcomercial" */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">
            <a href="#hero" className="text-3xl font-heading font-bold text-white tracking-tighter">
              PASMAB<span className="text-brand-orange ml-1">COMERCIAL</span>
            </a>
            <p className="text-white/40 leading-relaxed max-w-xs">
              Elevando o teu estilo urbano ao próximo nível com autenticidade, curadoria premium e tecnologia de ponta.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-brand-orange hover:border-brand-orange transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">
            <h4 className="text-white font-bold font-heading text-lg">Sobre Nós</h4>
            <ul className="space-y-4">
              {['A Nossa História', 'Sustentabilidade', 'Carreiras', 'Imprensa'].map(link => (
                <li key={link}><a href="#" className="text-white/40 hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">
            <h4 className="text-white font-bold font-heading text-lg">Apoio ao Cliente</h4>
            <ul className="space-y-4">
              {['Contacta-nos', 'Envio e Entregas', 'Trocas e Devoluções', 'Guia de Tamanhos'].map(link => (
                <li key={link}><a href="#" className="text-white/40 hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Payments & Policies */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">
            <h4 className="text-white font-bold font-heading text-lg">Políticas</h4>
            <ul className="space-y-4">
              {['Termos de Utilização', 'Privacidade', 'Cookies'].map(link => (
                <li key={link}><a href="#" className="text-white/40 hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
            <div className="pt-4 space-y-4 w-full flex flex-col items-center lg:items-start">
              <h5 className="text-xs font-bold text-white/20 uppercase tracking-[0.2em]">Métodos de Pagamento</h5>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="h-6 w-10 bg-white/10 rounded flex items-center justify-center font-bold text-[8px]">VISA</div>
                <div className="h-6 w-10 bg-white/10 rounded flex items-center justify-center font-bold text-[8px]">MASTER</div>
                <div className="h-6 w-10 bg-white/10 rounded flex items-center justify-center font-bold text-[8px]">PIX</div>
                <div className="h-6 w-10 bg-white/10 rounded flex items-center justify-center font-bold text-[8px]">AMEX</div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-white/20 text-sm">
            © {currentYear} PASMAB COMERCIAL Streetwear Inc. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-white/20 text-sm">
            <span>Angola</span>
            <div className="w-1 h-1 rounded-full bg-white/10" />
            <span>Português (PT)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
