import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { IDecideSection } from '../components/IDecideSection';
import { ChatWidget } from '../components/ChatWidget';

export function IDecidePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main id="idecide" className="pt-24">
        <IDecideSection />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
