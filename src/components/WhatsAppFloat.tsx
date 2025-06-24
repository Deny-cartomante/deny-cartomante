
import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isPulsing, setIsPulsing] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPulsing(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const openWhatsApp = () => {
    const message = 'Olá! Vim do seu site e gostaria de saber mais sobre seus serviços espirituais.';
    const whatsappUrl = `https://wa.me/5511933383977?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      <div className="absolute bottom-16 right-0 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg opacity-0 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Fale comigo no WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
      </div>

      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className={`
          relative w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full 
          flex items-center justify-center shadow-lg hover:shadow-xl 
          transition-all duration-300 hover:scale-110 group
          ${isPulsing ? 'animate-pulse-glow' : ''}
        `}
      >
        <MessageCircle className="w-8 h-8" />
        
        {/* Pulse rings */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" style={{ animationDelay: '0.5s' }}></div>
      </button>

      {/* Close button (optional) */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute -top-2 -right-2 w-6 h-6 bg-gray-600 hover:bg-gray-700 text-white rounded-full flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <X className="w-3 h-3" />
      </button>
    </div>
  );
};

export default WhatsAppFloat;
