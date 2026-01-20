import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { SpecialistsSection } from '../components/SpecialistsSection';
import { ProgramsSection } from '../components/ProgramsSection';
import { AboutPreviewSection } from '../components/AboutPreviewSection';
import { ImpactMetrics } from '../components/ImpactMetrics';
import { GallerySection } from '../components/GallerySection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { EventCalendar } from '../components/EventCalendar';
import { BlogSection } from '../components/BlogSection';
import { IDecideSection } from '../components/IDecideSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';
import { ChatWidget } from '../components/ChatWidget';
import { CTABanner } from '../components/CTABanner';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <SpecialistsSection />
      <ProgramsSection />
      <AboutPreviewSection />
      <ImpactMetrics />
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

