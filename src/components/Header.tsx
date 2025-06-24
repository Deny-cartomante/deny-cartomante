
import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-effect shadow-lg shadow-mystic-violet/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-mystic-accent to-mystic-violet rounded-full flex items-center justify-center animate-pulse-glow">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-cinzel text-xl md:text-2xl font-bold text-white">
                Deny Cartomante
              </h1>
              <p className="text-mystic-violet text-sm font-medium">
                Especialista em Tarot & Baralho Cigano
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-mystic-gold transition-colors duration-300 font-medium"
            >
              Jogos de Cartas
            </button>
            <button
              onClick={() => scrollToSection('spiritual-works')}
              className="text-white hover:text-mystic-gold transition-colors duration-300 font-medium"
            >
              Trabalhos Espirituais
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-mystic-gold transition-colors duration-300 font-medium"
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-mystic-gold transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 glass-effect rounded-lg p-4">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-mystic-gold transition-colors duration-300 font-medium text-left"
              >
                Jogos de Cartas
              </button>
              <button
                onClick={() => scrollToSection('spiritual-works')}
                className="text-white hover:text-mystic-gold transition-colors duration-300 font-medium text-left"
              >
                Trabalhos Espirituais
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-mystic-gold transition-colors duration-300 font-medium text-left"
              >
                Contato
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
