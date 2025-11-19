import React, { useState, useEffect } from 'react';
import { ACCENT_COLOR } from '../constants';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled ? 'bg-[#0c0c0e]/80 backdrop-blur-md border-[#333]' : 'bg-transparent border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        <div className="text-2xl font-bold tracking-tighter font-serif cursor-pointer group" onClick={() => scrollToSection('home')}>
          AMAL<span style={{ color: ACCENT_COLOR }}>.</span>
        </div>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium tracking-widest uppercase">
          {['Skills', 'Experience', 'Contact'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="hover:text-[#D97757] transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D97757] transition-all group-hover:w-full"></span>
            </button>
          ))}
        </div>

        <div className="md:hidden text-xs font-mono text-gray-400">
          // MENU
        </div>
      </div>
    </nav>
  );
};