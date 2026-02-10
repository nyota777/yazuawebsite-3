import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { DonateSection } from '../components/DonateSection';
import { ChatWidget } from '../components/ChatWidget';

export function DonatePage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <main className="pt-16">
                <DonateSection />
            </main>
            <Footer />
            <ChatWidget />
        </div>
    );
}
