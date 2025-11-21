import React, { useState, useEffect } from 'react';
import { Menu, X, Bus, Phone } from 'lucide-react';
import { COMPANY_NAME, NAV_LINKS, CONTACT_INFO } from '../constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
        ? 'bg-white/80 backdrop-blur-lg shadow-sm py-3 border-slate-200/50' 
        : 'bg-transparent py-6 border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className={`p-2.5 rounded-xl transition-colors ${isScrolled ? 'bg-sky-600 text-white' : 'bg-white text-sky-600'}`}>
             <Bus size={26} className="opacity-90" />
          </div>
          <div className="flex flex-col">
            <span className={`font-black text-xl leading-none ${isScrolled ? 'text-slate-900' : 'text-white drop-shadow-md md:text-white'}`}>
                {COMPANY_NAME}
            </span>
            <span className={`text-xs font-medium tracking-wider ${isScrolled ? 'text-slate-500' : 'text-slate-200 md:text-white/80'}`}>
                رفاهية النقل البري
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                isScrolled 
                ? 'text-slate-600 hover:text-sky-600 hover:bg-sky-50' 
                : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
            <a href={`tel:${CONTACT_INFO.phone}`} className={`flex items-center gap-2 font-bold text-sm ${isScrolled ? 'text-slate-700' : 'text-white'}`}>
                <Phone size={18} />
                <span dir="ltr">{CONTACT_INFO.phone}</span>
            </a>
            <a 
                href="#contact"
                className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-amber-500/20 text-sm"
            >
                احجز مقعدك
            </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-800 z-50 rounded-lg hover:bg-white/20"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen 
            ? <X className="text-slate-800" /> 
            : <Menu className={isScrolled ? "text-slate-800" : "text-white"} />
          }
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 md:hidden animate-fade-in-up">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-bold text-slate-800 hover:text-sky-600"
              >
                {link.name}
              </a>
            ))}
             <a 
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-sky-600 text-white px-10 py-4 rounded-xl font-bold text-xl shadow-xl"
            >
              احجز مقعدك الآن
            </a>
          </div>
        )}
      </div>
    </header>
  );
};