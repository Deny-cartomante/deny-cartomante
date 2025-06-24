
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-mystic-gradient"></div>
      
      {/* Floating Elements - Reduced opacity for minimalism */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-10 animate-float opacity-15">
          <Star className="w-4 h-4 text-mystic-gold" />
        </div>
        <div className="absolute top-48 right-20 animate-float opacity-20" style={{ animationDelay: '1s' }}>
          <Sparkles className="w-5 h-5 text-mystic-violet" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float opacity-15" style={{ animationDelay: '2s' }}>
          <Moon className="w-6 h-6 text-mystic-gold" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <div className="mb-12">
          <h2 className="font-cinzel text-4xl md:text-6xl font-bold mb-8 mystic-text leading-tight">
            Conecte-se com a sua
            <br />
            Espiritualidade
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-mystic-accent to-mystic-gold mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-300 mb-6 font-light">
            Através das cartas ancestrais
          </p>
          <p className="text-base text-gray-400 max-w-2xl mx-auto mb-12">
            Com mais de <span className="text-mystic-gold font-semibold">2000 clientes atendidos</span>, 
            revelo o que as cartas têm a dizer sobre seu caminho
          </p>
        </div>

        {/* Simplified Quote */}
        <div className="glass-effect rounded-lg p-6 mb-12 mx-auto max-w-lg">
          <blockquote className="font-cinzel-text text-lg text-mystic-violet italic">
            "As cartas nunca mentem..."
          </blockquote>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => scrollToSection('services')}
            className="btn-mystic group"
          >
            <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            Consultar as Cartas
          </button>
          <button
            onClick={() => scrollToSection('spiritual-works')}
            className="btn-mystic-outline group"
          >
            <Moon className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            Trabalhos Espirituais
          </button>
        </div>

        {/* Simplified Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-mystic-gold mb-2">2000+</div>
            <div className="text-gray-400 text-sm">Clientes Atendidos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-mystic-gold mb-2">10+</div>
            <div className="text-gray-400 text-sm">Anos de Experiência</div>
          </div>
        </div>
      </div>

      {/* Simplified Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-1 h-8 bg-mystic-violet rounded-full animate-pulse"></div>
      </div>
    </section>
  );
};

export default HeroSection;
