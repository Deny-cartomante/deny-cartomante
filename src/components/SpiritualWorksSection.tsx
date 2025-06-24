
import React, { useState } from 'react';
import { Shield, Heart, DollarSign, Star, Gift, Eye } from 'lucide-react';

interface Service {
  name: string;
  price: string;
  description: string;
}

const SpiritualWorksSection = () => {
  const [activeTab, setActiveTab] = useState('protection');

  const services = {
    protection: [
      {
        name: "Proteção espiritual pessoal",
        price: "R$ 180",
        description: "Criar um campo energético protetor individual que envolve a pessoa, defendendo-a contra influências negativas e ataques espirituais. Este trabalho cria uma barreira energética que filtra vibrações negativas e mantém sua aura protegida."
      },
      {
        name: "Banimento e limpeza energética",
        price: "R$ 200", 
        description: "Remoção profunda de energias negativas, más influências e miasmas energéticos que possam estar afetando a pessoa. Este ritual limpa completamente seu campo áurico e ambientes, eliminando toda energia estagnada."
      },
      {
        name: "Quebra de inveja/olho gordo",
        price: "R$ 190",
        description: "Neutralização de energias de inveja e mau-olhado que estejam causando bloqueios ou problemas na vida da pessoa. Trabalho específico para dissolver energias de olho grande e inveja profissional/pessoal."
      },
      {
        name: "Blindagem energética",
        price: "R$ 180",
        description: "Fortalecimento da proteção pessoal contra ataques espirituais e influências negativas persistentes. Cria uma armadura energética que reflete negatividade e mantém seu campo vital fortalecido."
      },
      {
        name: "Proteção contra oráculos e adivinhações",
        price: "R$ 230",
        description: "Criação de barreiras para evitar que terceiros tenham acesso espiritual à vida da pessoa através de métodos divinatórios. Bloqueia tentativas de leitura energética não autorizada sobre você."
      },
      {
        name: "Reversão de feitiços",
        price: "R$ 250",
        description: "Identificação e devolução de magias ou energias negativas que foram enviadas contra a pessoa. Trabalho poderoso que não apenas remove mas devolve ao emissor toda energia negativa direcionada a você."
      }
    ],
    love: [
      {
        name: "Amarração amorosa",
        price: "R$ 400",
        description: "Ritual para unir duas pessoas afetivamente, fortalecendo os laços emocionais e espirituais entre elas. Trabalho que harmoniza energias e aproxima corações de forma natural e duradoura."
      },
      {
        name: "Amor próprio",
        price: "R$ 200",
        description: "Trabalho para fortalecer a autoestima, o autocuidado e a capacidade de amar a si mesmo. Fundamental para quem busca relacionamentos saudáveis ou superar términos dolorosos."
      },
      {
        name: "Atração e glamour",
        price: "R$ 190",
        description: "Aumento do magnetismo pessoal e poder de sedução, tornando a pessoa mais atraente energeticamente. Trabalho que realça sua beleza interior e exterior, aumentando seu poder de atração."
      },
      {
        name: "Chora aos meus pés",
        price: "R$ 190",
        description: "Ritual para atrair ou dominar afetivamente outra pessoa, fazendo com que ela se interesse intensamente. Trabalho poderoso que cria uma conexão emocional profunda."
      },
      {
        name: "Vira pensamento",
        price: "R$ 250",
        description: "Fazer com que alguém pense constantemente em quem solicita o trabalho, criando uma conexão mental. A pessoa alvo não conseguirá tirar você de seus pensamentos."
      },
      {
        name: "Atração fatal",
        price: "R$ 350",
        description: "Intensificação da atração física e emocional, tornando-a quase irresistível para a pessoa desejada. Trabalho que aumenta exponencialmente seu magnetismo pessoal para alguém específico."
      },
      {
        name: "Abertura amorosa",
        price: "R$ 180",
        description: "Abertura de caminhos para novos relacionamentos e oportunidades amorosas. Ideal para quem quer encontrar um novo amor ou sair da solidão."
      },
      {
        name: "Corte de laços",
        price: "R$ 160",
        description: "Rompe laços energéticos com pessoas do passado que ainda influenciam emocionalmente. Libertação de relacionamentos passados que ainda causam sofrimento."
      },
      {
        name: "Proteção de casal",
        price: "R$ 200",
        description: "Proteção energética para relacionamentos contra influências externas negativas. Mantém terceiros afastados e protege o relacionamento de invejas e interferências."
      },
      {
        name: "União de casal",
        price: "R$ 230",
        description: "Reforço da ligação emocional e espiritual entre parceiros, harmonizando a relação. Trabalho para melhorar comunicação, intimidade e conexão no relacionamento."
      }
    ],
    financial: [
      {
        name: "Abertura de caminhos financeiros",
        price: "R$ 250",
        description: "Desbloqueio de oportunidades e remoção de obstáculos que impedem a prosperidade financeira. Remove bloqueios invisíveis que estão dificultando seu progresso material."
      },
      {
        name: "Chama dinheiro",
        price: "R$ 230",
        description: "Atração de recursos financeiros e oportunidades de ganho, aumentando o fluxo de dinheiro. Trabalho que atrai novas fontes de renda e oportunidades inesperadas."
      },
      {
        name: "Banimento/Quebra de amarras financeiras",
        price: "R$ 230",
        description: "Eliminação de bloqueios energéticos que impedem progresso e ganhos financeiros. Rompe padrões de escassez e crenças limitantes sobre dinheiro."
      },
      {
        name: "Limpeza energética de negócios",
        price: "R$ 230",
        description: "Remoção de energias negativas de um empreendimento ou ambiente de trabalho. Fundamental para empresas que estão enfrentando obstáculos inexplicáveis."
      },
      {
        name: "Prosperidade profissional",
        price: "R$ 220",
        description: "Impulsionamento da carreira ou negócios, atraindo reconhecimento e sucesso. Aumenta suas chances de promoções, novos clientes e oportunidades profissionais."
      }
    ]
  };

  const tabs = [
    { id: 'protection', label: 'Proteção', icon: Shield, color: 'from-blue-500 to-purple-600' },
    { id: 'love', label: 'Amor', icon: Heart, color: 'from-pink-500 to-red-600' },
    { id: 'financial', label: 'Financeiro', icon: DollarSign, color: 'from-green-500 to-emerald-600' }
  ];

  const openWhatsApp = (service: Service) => {
    const message = `Olá! Gostaria de solicitar o trabalho espiritual: ${service.name} - ${service.price}`;
    const whatsappUrl = `https://wa.me/5511933383977?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="spiritual-works" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Trabalhos Espirituais</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-mystic-accent to-mystic-gold mx-auto mb-8"></div>
          
          {/* Bonus Section */}
          <div className="glass-effect rounded-xl p-6 max-w-4xl mx-auto mb-8 border-2 border-mystic-gold/30">
            <div className="flex items-center justify-center mb-4">
              <Gift className="w-8 h-8 text-mystic-gold mr-3" />
              <h3 className="font-cinzel-text text-2xl font-bold text-mystic-gold">
                Todos os trabalhos incluem de BRINDE:
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center space-x-2">
                <Star className="w-5 h-5 text-mystic-gold" />
                <span className="text-white">2 perguntas grátis ao tarot</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Shield className="w-5 h-5 text-mystic-gold" />
                <span className="text-white">Jogo para permissão da espiritualidade</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Eye className="w-5 h-5 text-mystic-gold" />
                <span className="text-white">Acompanhamento de 7 em 7 dias</span>
              </div>
            </div>
            <div className="mt-4 p-4 bg-mystic-accent/20 rounded-lg">
              <p className="text-mystic-gold font-semibold">
                Para sua segurança, será enviado vídeo pelo chat mostrando os nomes e o trabalho realizado.
              </p>
            </div>
          </div>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Rituais e trabalhos espirituais poderosos para proteger seu caminho e transformar suas energias.
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
                className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                    : 'glass-effect text-gray-300 hover:text-white'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services[activeTab as keyof typeof services].map((service, index) => (
            <div
              key={index}
              className="service-card"
              onClick={() => openWhatsApp(service)}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-cinzel-text text-lg font-bold text-white">
                  {service.name}
                </h3>
                <div className="price-highlight">{service.price}</div>
              </div>
              
              <p className="text-gray-300 text-sm mb-6 line-clamp-4">
                {service.description}
              </p>

              <button className="w-full bg-gradient-to-r from-mystic-accent to-mystic-violet text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-mystic-violet/50 transition-all duration-300">
                Solicitar Trabalho
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpiritualWorksSection;
