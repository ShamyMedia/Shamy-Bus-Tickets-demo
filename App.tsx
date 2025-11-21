import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { BusTable } from './components/BusTable';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans" dir="rtl">
      <Header />
      <main className="flex-grow">
        <Hero />
        <BusTable />
        <Services />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;