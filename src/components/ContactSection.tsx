
import React from 'react';
import { MessageCircle, Video, Star, Clock, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const openWhatsApp = (message: string = '') => {
    const defaultMessage = message || 'Olá! Gostaria de saber mais sobre seus serviços espirituais.';
    const whatsappUrl = `https://wa.me/5511933383977?text=${encodeURIComponent(defaultMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const openTikTok = () => {
    window.open('https://www.tiktok.com/@deny_cartomante', '_blank');
  };

  const features = [
    {
      icon: Clock,
      title: "Resposta Rápida",
      description: "Atendimento ágil e personalizado"
    },
    {
      icon: Video,
      title: "Transparência Total", 
      description: "Vídeos dos trabalhos realizados"
    },
    {
      icon: CheckCircle,
      title: "Garantia de Qualidade",
      description: "Mais de 2000 clientes satisfeitos"
    },
    {
      icon: Star,
      title: "Experiência Comprovada",
      description: "Anos de dedicação ao esoterismo"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Entre em Contato</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-mystic-accent to-mystic-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Estou aqui para guiá-lo em sua jornada espiritual. Entre em contato e descubra o que o universo tem para você.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Methods */}
          <div className="space-y-8">
            <h3 className="font-cinzel-text text-2xl font-bold text-white mb-6">
              Como me encontrar
            </h3>
            
            {/* WhatsApp Card */}
            <div className="glass-effect rounded-xl p-6 card-hover-effect">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg">WhatsApp</h4>
                  <p className="text-gray-400">Atendimento direto e personalizado</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Fale comigo diretamente pelo WhatsApp para consultas, trabalhos espirituais ou tirar dúvidas.
              </p>
              <button
                onClick={() => openWhatsApp()}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30"
              >
                Conversar no WhatsApp
              </button>
            </div>

            {/* TikTok Card */}
            <div className="glass-effect rounded-xl p-6 card-hover-effect">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg">TikTok</h4>
                  <p className="text-gray-400">Conteúdo espiritual diário</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Acompanhe meu conteúdo no TikTok com dicas espirituais, previsões e muito mais.
              </p>
              <button
                onClick={openTikTok}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:shadow-lg hover:shadow-purple-500/30 text-white py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Seguir no TikTok
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8">
            <h3 className="font-cinzel-text text-2xl font-bold text-white mb-6">
              Por que me escolher?
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="glass-effect rounded-xl p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-mystic-accent to-mystic-violet rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Testimonial */}
            <div className="glass-effect rounded-xl p-6 border-l-4 border-mystic-gold">
              <blockquote className="text-gray-300 italic mb-4">
                "O Deny tem um dom incrível! Suas leituras são sempre precisas e seus trabalhos espirituais realmente funcionam. Recomendo de olhos fechados!"
              </blockquote>
              <div className="flex items-center">
                <div className="flex text-mystic-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-gray-400 ml-2">- Cliente satisfeito</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact */}
        <div className="text-center">
          <div className="glass-effect rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="font-cinzel-text text-2xl font-bold text-mystic-gold mb-4">
              Pronto para descobrir seu destino?
            </h3>
            <p className="text-gray-300 mb-6">
              Não deixe as dúvidas tomarem conta da sua vida. Entre em contato agora e permita que as cartas revelem o caminho para sua felicidade.
            </p>
            <button
              onClick={() => openWhatsApp('Olá! Estou pronto(a) para descobrir meu destino através das cartas!')}
              className="btn-mystic whatsapp-pulse"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar com Deny Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
