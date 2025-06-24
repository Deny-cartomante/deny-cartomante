
import React from 'react';
import { Clock, Star, Zap, MessageCircle } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "1 Pergunta",
      subtitle: "Tarot ou Baralho Cigano",
      price: "R$ 10,00",
      icon: MessageCircle,
      description: "Uma consulta direta e precisa",
      features: ["Resposta objetiva", "Entrega rápida", "Método personalizado"]
    },
    {
      title: "2 Perguntas",
      subtitle: "Tarot ou Baralho Cigano", 
      price: "R$ 15,00",
      icon: Star,
      description: "Aprofunde suas questões",
      features: ["Duas consultas", "Conexões entre temas", "Orientação detalhada"]
    },
    {
      title: "3 Perguntas",
      subtitle: "Tarot ou Baralho Cigano",
      price: "R$ 20,00",
      icon: Zap,
      description: "Visão completa da situação",
      features: ["Três consultas", "Análise abrangente", "Conselhos espirituais"],
      popular: true
    },
    {
      title: "30 Minutos",
      subtitle: "Jogo Direto",
      price: "R$ 39,99",
      icon: Clock,
      description: "Sessão completa de orientação",
      features: ["Consulta em tempo real", "Múltiplas questões", "Interação direta"]
    },
    {
      title: "1 Hora",
      subtitle: "Jogo Direto",
      price: "R$ 54,99",
      icon: Star,
      description: "Mergulho profundo espiritual",
      features: ["Sessão completa", "Análise detalhada", "Orientação personalizada"]
    }
  ];

  const openWhatsApp = (service: string, price: string) => {
    const message = `Olá! Gostaria de solicitar o serviço: ${service} - ${price}`;
    const whatsappUrl = `https://wa.me/5511933383977?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Jogos de Baralho Cigano e Tarot</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-mystic-accent to-mystic-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Consultas precisas com métodos de tiragem personalizados para cada situação. 
            O baralho cigano e o tarot revelam verdades ocultas e guiam suas decisões.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`service-card relative ${
                  service.popular ? 'ring-2 ring-mystic-gold' : ''
                }`}
                onClick={() => openWhatsApp(service.title, service.price)}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-mystic-accent to-mystic-gold text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-mystic-accent to-mystic-violet rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="price-highlight">{service.price}</div>
                  </div>
                </div>

                <h3 className="font-cinzel-text text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-mystic-violet font-medium mb-3">
                  {service.subtitle}
                </p>
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <Star className="w-4 h-4 text-mystic-gold mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gradient-to-r from-mystic-accent to-mystic-violet text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-mystic-violet/50 transition-all duration-300">
                  Solicitar Consulta
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="glass-effect rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="font-cinzel-text text-xl font-bold text-mystic-gold mb-3">
              Por que escolher minhas consultas?
            </h3>
            <p className="text-gray-300">
              Cada leitura é única e personalizada para sua situação específica. 
              Utilizo diferentes métodos de tiragem conforme a necessidade energética do momento, 
              garantindo precisão e clareza nas respostas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
