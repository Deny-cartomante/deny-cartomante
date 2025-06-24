
import React from 'react';
import { Sparkles, Heart, MessageCircle, Video, Star } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const openWhatsApp = () => {
    const whatsappUrl = 'https://wa.me/5511933383977';
    window.open(whatsappUrl, '_blank');
  };

  const openTikTok = () => {
    window.open('https://www.tiktok.com/@deny_cartomante', '_blank');
  };

  return (
    <footer className="relative py-16 border-t border-mystic-violet/30">
      <div className="absolute inset-0 bg-gradient-to-t from-mystic-deep to-transparent"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-mystic-accent to-mystic-violet rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-cinzel text-xl font-bold text-white">
                  Deny Cartomante
                </h3>
                <p className="text-mystic-violet text-sm">
                  Especialista em Esoterismo
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Conectando você com sua espiritualidade através das cartas ancestrais. 
              Mais de 2000 vidas transformadas com amor e dedicação.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-mystic-gold fill-current" />
              ))}
              <span className="text-gray-400 text-sm ml-2">5.0 (2000+ avaliações)</span>
            </div>
          </div>

          {/* Services Section */}
          <div className="text-center">
            <h4 className="font-cinzel-text text-lg font-bold text-white mb-4">
              Nossos Serviços
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-mystic-gold transition-colors duration-300 cursor-pointer">
                Leitura de Tarot
              </li>
              <li className="hover:text-mystic-gold transition-colors duration-300 cursor-pointer">
                Baralho Cigano
              </li>
              <li className="hover:text-mystic-gold transition-colors duration-300 cursor-pointer">
                Trabalhos de Proteção
              </li>
              <li className="hover:text-mystic-gold transition-colors duration-300 cursor-pointer">
                Rituais de Amor
              </li>
              <li className="hover:text-mystic-gold transition-colors duration-300 cursor-pointer">
                Prosperidade Financeira
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-right">
            <h4 className="font-cinzel-text text-lg font-bold text-white mb-4">
              Conecte-se Comigo
            </h4>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              <button
                onClick={openWhatsApp}
                className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/30"
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={openTikTok}
                className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30"
              >
                <Video className="w-6 h-6 text-white" />
              </button>
            </div>
            <p className="text-gray-400 text-sm mb-2">
              Atendimento personalizado
            </p>
            <p className="text-mystic-gold text-sm font-semibold">
              Resposta em até 30 minutos
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-mystic-violet to-transparent"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Deny Cartomante e Mago. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Desenvolvido com <Heart className="w-3 h-3 text-red-500 inline mx-1" /> para conectar almas
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-mystic-gold text-sm font-semibold mb-1">
              "As cartas nunca mentem..."
            </p>
            <p className="text-gray-500 text-xs">
              Transforme sua vida através da sabedoria ancestral
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
