import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { IDecidePage } from './pages/IDecidePage';
import { EventsPage } from './pages/EventsPage';
import { ContactPage } from './pages/ContactPage';
import { DonatePage } from './pages/DonatePage';
import { MaintenancePage } from './pages/MaintenancePage';
import { ScrollToTop } from './components/ScrollToTop';
import { FaviconSync } from './components/FaviconSync';

// TOGGLE THIS TO ENABLE/DISABLE MAINTENANCE MODE
const MAINTENANCE_MODE = false;

export default function App() {
  // Remove this override to restore normal website functionality.
  if (MAINTENANCE_MODE) {
    return (
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <FaviconSync />
        <MaintenancePage />
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <FaviconSync />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/idecide" element={<IDecidePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/donate" element={<DonatePage />} />
      </Routes>
    </BrowserRouter>
  );
}