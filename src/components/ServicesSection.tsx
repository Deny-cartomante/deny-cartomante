import React, { useState } from 'react';
import { Star, Clock, MessageCircle, Eye, Gift, Heart, DollarSign, Sparkles } from 'lucide-react';

interface Service {
  name: string;
  price: string;
  description: string;
  details?: string;
  savings?: string;
}

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('individual');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<Service | null>(null);

  const individualServices = [
    {
      name: "1 Pergunta Objetiva",
      price: "R$ 13",
      description: "3 cartas - Resposta simples e direta",
      details: "Tiragem com 3 cartas para uma pergunta específica. Resposta rápida e objetiva sobre sua questão."
    },
    {
      name: "1 Pergunta Completa", 
      price: "R$ 15",
      description: "6 cartas + fundo do deck - Análise profunda",
      details: "Tiragem completa com 6 cartas mais fundo do deck. Análise detalhada com possível complemento de outro baralho se necessário."
    },
    {
      name: "2 Perguntas Objetivas",
      price: "R$ 18", 
      description: "Duas perguntas com respostas simples",
      details: "Duas tiragens de 3 cartas cada, com respostas objetivas para suas questões."
    },
    {
      name: "2 Perguntas Completas",
      price: "R$ 20",
      description: "Duas análises profundas completas", 
      details: "Duas tiragens completas com 6 cartas cada mais fundo do deck para análise detalhada."
    },
    {
      name: "3 Perguntas Objetivas", 
      price: "R$ 23",
      description: "Três perguntas com respostas diretas",
      details: "Três tiragens de 3 cartas cada, respostas rápidas e objetivas."
    },
    {
      name: "3 Perguntas Completas",
      price: "R$ 25", 
      description: "Três análises completas e detalhadas",
      details: "Três tiragens completas com análise profunda e detalhada de cada questão."
    }
  ];

  const consultationServices = [
    {
      name: "Consulta 30 minutos",
      price: "R$ 60",
      description: "30 minutos corridos de perguntas ilimitadas",
      details: "Quantas perguntas forem necessárias ou possíveis em 30 minutos corridos de consulta."
    },
    {
      name: "Consulta 30 min - Videochamada",
      price: "R$ 78", 
      description: "30 minutos por videochamada (+30%)",
      details: "Consulta de 30 minutos por videochamada com perguntas ilimitadas."
    },
    {
      name: "Consulta 1 hora",
      price: "R$ 100",
      description: "1 hora corrida de perguntas ilimitadas", 
      details: "Uma hora completa para todas as perguntas que precisar fazer."
    },
    {
      name: "Consulta 1 hora - Videochamada", 
      price: "R$ 130",
      description: "1 hora por videochamada (+30%)",
      details: "Consulta de 1 hora por videochamada com perguntas ilimitadas."
    }
  ];

  const packageServices = [
    {
      name: "Pacote Vida Passada",
      price: "R$ 45",
      description: "Descubra seus padrões kármicos e vidas anteriores",
      details: "Inclui: Leitura de matriz através de cartas de tarot, leitura de cartas aprofundada sobre vidas passadas e direcionamento sobre o karma."
    },
    {
      name: "Pacote Bom Relacionamento", 
      price: "R$ 30",
      description: "Análise completa do seu relacionamento",
      details: "Inclui: Tiragem do Templo de Afrodite, Tiragem do Bom Relacionamento e 2 conselhos exclusivos.",
      savings: "Economize R$ 10"
    },
    {
      name: "Pacote Prosperidade Total",
      price: "R$ 40", 
      description: "Foco em abundância e sucesso financeiro",
      details: "Inclui: Tiragem dos Bloqueios Financeiros, Leitura dos Caminhos da Prosperidade e Ritual Simbólico de Abertura.",
      savings: "Economize R$ 12"
    },
    {
      name: "Carta Canalizada Personalizada",
      price: "R$ 40",
      description: "Carta canalizada com tema de sua escolha", 
      details: "Uma carta especial canalizada especificamente para você com o tema ou título que preferir."
    }
  ];

  const tabs = [
    { id: 'individual', label: 'Perguntas Individuais', icon: Star },
    { id: 'consultation', label: 'Consultas', icon: Clock },
    { id: 'packages', label: 'Pacotes', icon: Gift }
  ];

  const openModal = (service: Service) => {
    setModalContent(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };

  const openWhatsApp = (service: Service) => {
    const message = `Olá! Gostaria de solicitar: ${service.name} - ${service.price}`;
    const whatsappUrl = `https://wa.me/5511933383977?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const getCurrentServices = () => {
    switch(activeTab) {
      case 'individual': return individualServices;
      case 'consultation': return consultationServices; 
      case 'packages': return packageServices;
      default: return individualServices;
    }
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Jogos de Cartas</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-mystic-accent to-mystic-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubra os segredos do universo através das cartas ancestrais do Tarot e Baralho Cigano.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-semibold transition-all duration-300 animate-fade-in ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-mystic-accent to-mystic-violet text-white shadow-lg shadow-mystic-violet/30'
                    : 'glass-effect text-gray-300 hover:text-white card-hover-effect'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {getCurrentServices().map((service, index) => (
            <div
              key={index}
              className="service-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-cinzel-text text-lg font-bold text-white">
                  {service.name}
                </h3>
                <div className="price-highlight">{service.price}</div>
              </div>
              
              {service.savings && (
                <div className="bg-mystic-gold/20 text-mystic-gold px-3 py-1 rounded-full text-sm font-semibold mb-3 inline-block">
                  {service.savings}
                </div>
              )}
              
              <p className="text-gray-300 text-sm mb-6">
                {service.description}
              </p>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => openModal(service)}
                  className="w-full bg-mystic-violet/30 hover:bg-mystic-violet/50 text-mystic-violet hover:text-white border border-mystic-violet py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-mystic-violet/30"
                >
                  <Eye className="w-4 h-4 inline mr-2" />
                  Detalhes
                </button>
                
                <button
                  onClick={() => openWhatsApp(service)}
                  className="w-full bg-gradient-to-r from-mystic-accent to-mystic-violet text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-mystic-violet/50 transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4 inline mr-2" />
                  Solicitar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && modalContent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="glass-effect rounded-xl p-8 max-w-md w-full animate-scale-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-cinzel-text text-xl font-bold text-white">
                {modalContent.name}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                ✕
              </button>
            </div>
            
            <div className="price-highlight text-center mb-4">{modalContent.price}</div>
            
            {modalContent.savings && (
              <div className="bg-mystic-gold/20 text-mystic-gold px-3 py-2 rounded-lg text-center font-semibold mb-4">
                {modalContent.savings}
              </div>
            )}
            
            <p className="text-gray-300 mb-6">
              {modalContent.details}
            </p>
            
            <div className="flex gap-3">
              <button
                onClick={closeModal}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Fechar
              </button>
              <button
                onClick={() => {
                  openWhatsApp(modalContent);
                  closeModal();
                }}
                className="flex-1 bg-gradient-to-r from-mystic-accent to-mystic-violet text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-mystic-violet/50 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 inline mr-2" />
                Solicitar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
