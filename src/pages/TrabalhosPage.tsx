
import React from 'react';
import Header from '../components/Header';
import SpiritualWorksSection from '../components/SpiritualWorksSection';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const TrabalhosPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <SpiritualWorksSection />
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default TrabalhosPage;
