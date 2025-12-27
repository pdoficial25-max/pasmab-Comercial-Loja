
import React, { useState, useEffect } from 'react';
import { User, ShoppingCart, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { PageRoute } from '../types';

interface HeaderProps {
  onNavigate: (page: PageRoute) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      onNavigate('home');
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10 ${
        isScrolled ? 'bg-brand-black/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 relative flex items-center justify-between">
        {/* Mobile Menu Toggle (Left on Mobile) */}
        <button 
          className="md:hidden text-white z-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Logo - Centralized on mobile/tablet */}
        <button 
          onClick={() => onNavigate('home')} 
          className="text-2xl font-heading font-bold text-white tracking-tighter absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:left-auto"
        >
          PASMAB<span className="text-brand-orange italic ml-1">COMERCIAL</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 ml-12">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-medium text-white/80 hover:text-brand-orange transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 md:gap-6 ml-auto">
          <button 
            onClick={() => onNavigate('login')}
            className="hidden md:block text-white/80 hover:text-brand-orange transition-colors"
          >
            <User size={22} />
          </button>
          <button 
            onClick={() => onNavigate('carrinho')}
            className="text-white/80 hover:text-brand-orange transition-colors relative"
          >
            <ShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-brand-orange text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span>
          </button>
          <button 
            onClick={() => onNavigate('login')}
            className="hidden md:block bg-brand-orange hover:bg-orange-600 text-white px-6 py-2 rounded-full font-bold transition-all hover:scale-105 active:scale-95"
          >
            Entrar
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-black/95 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col gap-6 animate-fade-in-down">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-xl font-medium text-white hover:text-brand-orange transition-colors text-center"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
            <button 
              onClick={() => { onNavigate('login'); setIsMenuOpen(false); }}
              className="w-full bg-brand-orange text-white py-3 rounded-xl font-bold"
            >
              Entrar
            </button>
            <button 
              onClick={() => { onNavigate('login'); setIsMenuOpen(false); }}
              className="w-full py-3 border border-white/20 rounded-xl text-white flex items-center justify-center gap-2"
            >
              <User size={20} /> Perfil
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
