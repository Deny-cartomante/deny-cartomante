
import React from 'react';
import Header from '../components/Header';
import CartasSection from '../components/CartasSection';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const CartasPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <CartasSection />
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default CartasPage;
