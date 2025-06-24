
import React, { useState } from 'react';
import { Clock, Star, Zap, MessageCircle, Info, Gift, Sparkles, Heart, DollarSign, Eye } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ServiceDetails {
  objective: string;
  complete: string;
}

const CartasSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<{ 
    title: string; 
    description: string | ServiceDetails; 
    prices: Array<{ type: string; price: string }>;
  }>({ title: '', description: '', prices: [] });

  const services = [
    {
      title: "1 Pergunta",
      subtitle: "Tarot ou Baralho Cigano",
      prices: [
        { type: "Objetiva (3 cartas)", price: "R$ 13,00" },
        { type: "Completa", price: "R$ 15,00" }
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
        { type: "Objetivas", price: "R$ 18,00" },
        { type: "Completas", price: "R$ 20,00" }
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
        { type: "Objetivas", price: "R$ 23,00" },
        { type: "Completas", price: "R$ 25,00" }
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

  const packages = [
    {
      title: "Pacote Vida Passada",
      price: "R$ 45,00",
      icon: Eye,
      description: "Descubra sua jornada espiritual através das vidas",
      details: "Inclui leitura de matriz através de cartas de tarot, uma leitura de cartas aprofundada e direcionamento sobre o karma.",
      items: [
        "Leitura de matriz através de cartas de tarot",
        "Leitura de cartas aprofundada",
        "Direcionamento sobre o karma"
      ]
    },
    {
      title: "Pacote Bom Relacionamento",
      price: "R$ 30,00",
      savings: "Economize R$ 10,00",
      icon: Heart,
      description: "Análise completa do seu relacionamento",
      details: "Análise completa do seu relacionamento incluindo tiragens especializadas e conselhos exclusivos.",
      items: [
        "Tiragem do Templo de Afrodite",
        "Tiragem do Bom Relacionamento",
        "2 conselhos exclusivos"
      ]
    },
    {
      title: "Pacote Prosperidade Total",
      price: "R$ 40,00",
      savings: "Economize R$ 12,00",
      icon: DollarSign,
      description: "Foco em abundância e sucesso",
      details: "Foco em abundância e sucesso com tiragens específicas para desbloqueio financeiro e ritual simbólico.",
      items: [
        "Tiragem dos Bloqueios Financeiros",
        "Leitura dos Caminhos da Prosperidade",
        "Ritual Simbólico de Abertura"
      ]
    }
  ];

  const channeled = {
    title: "Carta Canalizada",
    price: "R$ 40,00",
    icon: Sparkles,
    description: "Mensagem personalizada com o tema de sua escolha",
    details: "Carta canalizada personalizada com o tema ou título que você preferir, conectando-se diretamente com as energias específicas da sua situação."
  };

  const openWhatsApp = (service: string, price: string) => {
    const message = `Olá! Gostaria de solicitar o serviço: ${service} - ${price}`;
    const whatsappUrl = `https://wa.me/5511933383977?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const showDetails = (service: any) => {
    setModalContent({
      title: service.title,
      description: service.details || service.details,
      prices: service.prices || [{ type: service.subtitle || "", price: service.price }]
    });
    setShowModal(true);
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Jogos de Baralho Cigano e Tarot</h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-mystic-accent to-mystic-gold mx-auto mb-6"></div>
        </div>

        <Tabs defaultValue="consultas" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 glass-effect">
            <TabsTrigger value="consultas" className="text-white data-[state=active]:bg-mystic-violet">Consultas</TabsTrigger>
            <TabsTrigger value="pacotes" className="text-white data-[state=active]:bg-mystic-violet">Pacotes</TabsTrigger>
            <TabsTrigger value="canalizada" className="text-white data-[state=active]:bg-mystic-violet">Carta Canalizada</TabsTrigger>
          </TabsList>

          <TabsContent value="consultas" className="space-y-16">
            {/* Área de Explicação */}
            <div className="glass-effect rounded-xl p-6 mb-12 max-w-4xl mx-auto animate-fade-in">
              <h3 className="font-cinzel text-xl font-bold text-mystic-gold mb-4 text-center">
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

                    <h3 className="font-cinzel text-lg font-bold text-white mb-2">
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
                          <span className="text-mystic-gold font-bold">{priceInfo.price}</span>
                        </div>
                      ))}
                    </div>

                    <button 
                      onClick={() => openWhatsApp(service.title, service.prices[0].price)}
                      className="w-full bg-gradient-to-r from-mystic-accent to-mystic-violet text-white py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-mystic-violet/50 transition-all duration-300 text-sm"
                    >
                      Solicitar Consulta
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Consultations Section */}
            <div className="border-t border-mystic-violet/20 pt-16">
              <h3 className="font-cinzel text-2xl font-bold text-center text-mystic-gold mb-8">
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

                      <h3 className="font-cinzel text-lg font-bold text-white mb-2">
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
                          onClick={() => openWhatsApp(consultation.title, consultation.videoPrice)}
                          className="w-full border border-mystic-violet text-mystic-violet py-2 rounded-lg font-semibold hover:bg-mystic-violet hover:text-white transition-all duration-300 text-sm"
                        >
                          Videochamada (+30%)
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="pacotes" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg, index) => {
                const IconComponent = pkg.icon;
                return (
                  <div
                    key={index}
                    className="service-card animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-mystic-accent to-mystic-violet rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      {pkg.savings && (
                        <span className="bg-mystic-gold text-black px-2 py-1 rounded text-xs font-semibold">
                          {pkg.savings}
                        </span>
                      )}
                    </div>

                    <h3 className="font-cinzel text-lg font-bold text-white mb-2">
                      {pkg.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm">
                      {pkg.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      {pkg.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center text-sm text-gray-300">
                          <Gift className="w-4 h-4 text-mystic-violet mr-2" />
                          {item}
                        </div>
                      ))}
                    </div>

                    <div className="text-center mb-4">
                      <span className="text-mystic-gold font-bold text-2xl">{pkg.price}</span>
                    </div>

                    <button 
                      onClick={() => openWhatsApp(pkg.title, pkg.price)}
                      className="w-full bg-gradient-to-r from-mystic-accent to-mystic-violet text-white py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-mystic-violet/50 transition-all duration-300 text-sm"
                    >
                      Solicitar Pacote
                    </button>
                  </div>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="canalizada" className="space-y-8">
            <div className="max-w-md mx-auto">
              <div className="service-card animate-fade-in">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-mystic-accent to-mystic-violet rounded-lg flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                </div>

                <h3 className="font-cinzel text-xl font-bold text-white mb-2 text-center">
                  {channeled.title}
                </h3>
                <p className="text-gray-300 mb-6 text-sm text-center">
                  {channeled.description}
                </p>
                <p className="text-gray-400 mb-6 text-xs text-center">
                  {channeled.details}
                </p>

                <div className="text-center mb-6">
                  <span className="text-mystic-gold font-bold text-2xl">{channeled.price}</span>
                </div>

                <button 
                  onClick={() => openWhatsApp(channeled.title, channeled.price)}
                  className="w-full bg-gradient-to-r from-mystic-accent to-mystic-violet text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-mystic-violet/50 transition-all duration-300"
                >
                  Solicitar Carta Canalizada
                </button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="glass-effect rounded-xl p-6 max-w-md w-full animate-scale-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-cinzel text-xl font-bold text-mystic-gold">
                {modalContent.title}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            
            {typeof modalContent.description === 'object' && modalContent.description && 'objective' in modalContent.description && 'complete' in modalContent.description && (
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
                  <div className="text-mystic-gold font-bold">{price.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CartasSection;
