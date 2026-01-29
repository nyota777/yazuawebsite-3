import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ProgramsSection } from '../components/ProgramsSection';
import { ChatWidget } from '../components/ChatWidget';

export function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main id="programs" className="pt-24">
        <ProgramsSection />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
