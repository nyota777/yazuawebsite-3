import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ImpactMetrics } from './components/ImpactMetrics';
import { ProgramsSection } from './components/ProgramsSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { EventCalendar } from './components/EventCalendar';
import { BlogSection } from './components/BlogSection';
import { IDecideSection } from './components/IDecideSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { ChatWidget } from './components/ChatWidget';
import { CTABanner } from './components/CTABanner';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ImpactMetrics />
      <ProgramsSection />
      <GallerySection />
      <TestimonialsSection />
      <EventCalendar />
      <BlogSection />
      <IDecideSection />
      <ContactSection />
      <Footer />
      <ChatWidget />
      <CTABanner />
    </div>
  );
}