import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { EventCalendar } from '../components/EventCalendar';
import { ChatWidget } from '../components/ChatWidget';

export function EventsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main id="events" className="pt-24">
        <EventCalendar />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
