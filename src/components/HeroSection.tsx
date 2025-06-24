
import React from 'react';
import { Sparkles, Star, Moon } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-mystic-gradient"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-float opacity-30">
          <Star className="w-6 h-6 text-mystic-gold" />
        </div>
        <div className="absolute top-40 right-20 animate-float opacity-40" style={{ animationDelay: '1s' }}>
          <Sparkles className="w-8 h-8 text-mystic-violet" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float opacity-25" style={{ animationDelay: '2s' }}>
          <Moon className="w-10 h-10 text-mystic-gold" />
        </div>
        <div className="absolute top-60 left-1/3 animate-float opacity-35" style={{ animationDelay: '0.5s' }}>
          <Star className="w-4 h-4 text-mystic-violet" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float opacity-30" style={{ animationDelay: '1.5s' }}>
          <Sparkles className="w-6 h-6 text-mystic-gold" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <div className="mb-8">
          <h2 className="font-cinzel text-5xl md:text-7xl font-bold mb-6 mystic-text leading-tight">
            Conecte-se com a sua
            <br />
            Espiritualidade
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-mystic-accent to-mystic-gold mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            Através das cartas ancestrais
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Com mais de <span className="text-mystic-gold font-semibold">2000 clientes atendidos</span>, 
            revelo o que as cartas têm a dizer sobre seu caminho
          </p>
        </div>

        {/* Mystery Quote */}
        <div className="glass-effect rounded-xl p-6 mb-8 mx-auto max-w-lg">
          <blockquote className="font-cinzel-text text-lg md:text-xl text-mystic-violet italic">
            "O que o universo reserva para você?<br />
            <span className="text-mystic-gold">As cartas nunca mentem...</span>"
          </blockquote>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('services')}
            className="btn-mystic group"
          >
            <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            Consultar as Cartas
          </button>
          <button
            onClick={() => scrollToSection('spiritual-works')}
            className="btn-mystic-outline group"
          >
            <Moon className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            Trabalhos Espirituais
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-mystic-gold mb-2">2000+</div>
            <div className="text-gray-400">Clientes Atendidos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-mystic-gold mb-2">10+</div>
            <div className="text-gray-400">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-mystic-gold mb-2">100%</div>
            <div className="text-gray-400">Precisão Espiritual</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-mystic-violet rounded-full flex justify-center">
          <div className="w-1 h-3 bg-mystic-violet rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
