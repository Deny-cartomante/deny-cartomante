
import React, { useState } from 'react';
import { Clock, Star, Zap, MessageCircle, Info, Video } from 'lucide-react';

const ServicesSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', description: '', prices: [] });

  const services = [
    {
      title: "1 Pergunta",
      subtitle: "Tarot ou Baralho Cigano",
      prices: [
        { type: "Objetiva (3 cartas)", price: "R$ 13,00", video: "R$ 16,90" },
        { type: "Completa", price: "R$ 15,00", video: "R$ 19,50" }
      ],
      icon: MessageCircle,
      description: "Uma consulta direta e precisa para sua questão mais importante",
      details: {
        objective: "Pergunta objetiva utiliza tiragem de 3 cartas com resposta rápida e simples, ideal para questões diretas que precisam de clareza imediata.",
        complete: "Pergunta completa utiliza tiragem de 6 cartas + fundo do deck, com possibilidade de complemento com outro baralho ou tiragem personalizada conforme a necessidade energética."
      }
    },
    {
      title: "2 Perguntas", 
      subtitle: "Tarot ou Baralho Cigano",
      prices: [
        { type: "Objetivas", price: "R$ 18,00", video: "R$ 23,40" },
        { type: "Completas", price: "R$ 20,00", video: "R$ 26,00" }
      ],
      icon: Star,
      description: "Aprofunde suas questões com duas consultas",
      details: {
        objective: "Duas perguntas objetivas com tiragem de 3 cartas cada, respostas diretas e conexões entre os temas abordados.",
        complete: "Duas perguntas completas com tiragem expandida, análise profunda das conexões entre as questões e orientação detalhada."
      }
    },
    {
      title: "3 Perguntas",
      subtitle: "Tarot ou Baralho Cigano",
      prices: [
        { type: "Objetivas", price: "R$ 23,00", video: "R$ 29,90" },
        { type: "Completas", price: "R$ 25,00", video: "R$ 32,50" }
      ],
      icon: Zap,
      description: "Visão completa da situação com três consultas",
      details: {
        objective: "Três perguntas objetivas ideais para ter uma visão geral de diferentes aspectos da sua vida com respostas claras.",
        complete: "Três perguntas completas oferecem análise abrangente e conselhos espirituais detalhados sobre múltiplos aspectos."
      },
      popular: true
    }
  ];

  const consultations = [
    {
      title: "30 Minutos",
      subtitle: "Consulta ao Vivo",
      price: "R$ 39,99",
      videoPrice: "R$ 51,99",
      icon: Clock,
      description: "30 minutos corridos de consulta em tempo real",
      details: "Consulta de 30 minutos corridos onde você pode fazer quantas perguntas forem necessárias ou possíveis neste tempo. Interação direta e respostas imediatas."
    },
    {
      title: "1 Hora",
      subtitle: "Consulta ao Vivo", 
      price: "R$ 54,99",
      videoPrice: "R$ 71,49",
      icon: Star,
      description: "1 hora completa de orientação espiritual",
      details: "Consulta de 1 hora completa para mergulho profundo espiritual. Tempo suficiente para abordar múltiplas questões com análise detalhada e orientação personalizada."
    }
  ];

  const openWhatsApp = (service: string, price: string, isVideo: boolean = false) => {
    const serviceType = isVideo ? `${service} (Videochamada)` : service;
    const message = `Olá! Gostaria de solicitar o serviço: ${serviceType} - ${price}`;
    const whatsappUrl = `https://wa.me/5511933383977?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const showDetails = (service) => {
    setModalContent({
      title: service.title,
      description: service.details || service.details,
      prices: service.prices || [{ type: service.subtitle, price: service.price, video: service.videoPrice }]
    });
    setShowModal(true);
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Jogos de Baralho Cigano e Tarot</h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-mystic-accent to-mystic-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Consultas precisas com métodos de tiragem personalizados para cada situação
          </p>
        </div>

        {/* Area de Explicação */}
        <div className="glass-effect rounded-xl p-6 mb-12 max-w-4xl mx-auto">
          <h3 className="font-cinzel-text text-xl font-bold text-mystic-gold mb-4 text-center">
            Tipos de Consulta
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-mystic-violet mb-2">Pergunta Objetiva</h4>
              <p className="text-gray-300 text-sm">
                Tiragem de 3 cartas com resposta rápida e simples, ideal para questões diretas.
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-mystic-violet mb-2">Pergunta Completa</h4>
              <p className="text-gray-300 text-sm">
                Tiragem de 6 cartas + fundo do deck, com possibilidade de complemento personalizado.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`service-card relative animate-fade-in ${
                  service.popular ? 'ring-2 ring-mystic-gold' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-mystic-accent to-mystic-gold text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-mystic-accent to-mystic-violet rounded-lg flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <button
                    onClick={() => showDetails(service)}
                    className="text-mystic-gold hover:text-mystic-violet transition-colors duration-300"
                  >
                    <Info className="w-5 h-5" />
                  </button>
                </div>

                <h3 className="font-cinzel-text text-lg font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-mystic-violet font-medium mb-3 text-sm">
                  {service.subtitle}
                </p>
                <p className="text-gray-300 mb-4 text-sm">
                  {service.description}
                </p>

                <div className="space-y-2 mb-4">
                  {service.prices.map((priceInfo, priceIndex) => (
                    <div key={priceIndex} className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">{priceInfo.type}</span>
                      <div className="flex flex-col text-right">
                        <span className="text-mystic-gold font-bold">{priceInfo.price}</span>
                        <span className="text-xs text-gray-500">Vídeo: {priceInfo.video}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <button 
                    onClick={() => openWhatsApp(service.title, service.prices[0].price)}
                    className="w-full bg-gradient-to-r from-mystic-accent to-mystic-violet text-white py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-mystic-violet/50 transition-all duration-300 text-sm"
                  >
                    Solicitar por Chat
                  </button>
                  <button 
                    onClick={() => openWhatsApp(service.title, service.prices[0].video, true)}
                    className="w-full border border-mystic-violet text-mystic-violet py-2 rounded-lg font-semibold hover:bg-mystic-violet hover:text-white transition-all duration-300 text-sm flex items-center justify-center"
                  >
                    <Video className="w-4 h-4 mr-1" />
                    Videochamada (+30%)
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Consultations Section */}
        <div className="border-t border-mystic-violet/20 pt-16">
          <h3 className="font-cinzel-text text-2xl font-bold text-center text-mystic-gold mb-8">
            Consultas ao Vivo
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {consultations.map((consultation, index) => {
              const IconComponent = consultation.icon;
              return (
                <div
                  key={index}
                  className="service-card animate-fade-in"
                  style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-mystic-accent to-mystic-violet rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <button
                      onClick={() => showDetails(consultation)}
                      className="text-mystic-gold hover:text-mystic-violet transition-colors duration-300"
                    >
                      <Info className="w-5 h-5" />
                    </button>
                  </div>

                  <h3 className="font-cinzel-text text-lg font-bold text-white mb-2">
                    {consultation.title}
                  </h3>
                  <p className="text-mystic-violet font-medium mb-3 text-sm">
                    {consultation.subtitle}
                  </p>
                  <p className="text-gray-300 mb-4 text-sm">
                    {consultation.description}
                  </p>

                  <div className="flex justify-between items-center mb-4 text-sm">
                    <span className="text-gray-400">Chat/Áudio</span>
                    <div className="flex flex-col text-right">
                      <span className="text-mystic-gold font-bold text-lg">{consultation.price}</span>
                      <span className="text-xs text-gray-500">Vídeo: {consultation.videoPrice}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <button 
                      onClick={() => openWhatsApp(consultation.title, consultation.price)}
                      className="w-full bg-gradient-to-r from-mystic-accent to-mystic-violet text-white py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-mystic-violet/50 transition-all duration-300 text-sm"
                    >
                      Agendar por Chat
                    </button>
                    <button 
                      onClick={() => openWhatsApp(consultation.title, consultation.videoPrice, true)}
                      className="w-full border border-mystic-violet text-mystic-violet py-2 rounded-lg font-semibold hover:bg-mystic-violet hover:text-white transition-all duration-300 text-sm flex items-center justify-center"
                    >
                      <Video className="w-4 h-4 mr-1" />
                      Videochamada (+30%)
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="glass-effect rounded-xl p-6 max-w-md w-full animate-scale-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-cinzel-text text-xl font-bold text-mystic-gold">
                {modalContent.title}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            
            {modalContent.description.objective && (
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-mystic-violet mb-2">Pergunta Objetiva:</h4>
                  <p className="text-gray-300 text-sm">{modalContent.description.objective}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-mystic-violet mb-2">Pergunta Completa:</h4>
                  <p className="text-gray-300 text-sm">{modalContent.description.complete}</p>
                </div>
              </div>
            )}
            
            {typeof modalContent.description === 'string' && (
              <p className="text-gray-300 text-sm mb-4">{modalContent.description}</p>
            )}

            <div className="mt-6 space-y-2">
              {modalContent.prices.map((price, index) => (
                <div key={index} className="flex justify-between items-center p-2 bg-mystic-dark/50 rounded">
                  <span className="text-sm text-gray-300">{price.type}</span>
                  <div className="text-right">
                    <div className="text-mystic-gold font-bold">{price.price}</div>
                    <div className="text-xs text-gray-500">Vídeo: {price.video}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
