import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ContactSection } from '../components/ContactSection';
import { ChatWidget } from '../components/ChatWidget';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main id="contact" className="pt-24">
        <ContactSection />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
