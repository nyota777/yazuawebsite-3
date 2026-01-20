import React from 'react';
import { motion } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ChatWidget } from '../components/ChatWidget';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <img 
                src={`${import.meta.env.BASE_URL}yazua_logo.png`} 
                alt="YAZUA AFRIKA Logo" 
                className="h-24 w-auto bg-transparent"
                style={{ backgroundColor: 'transparent' }}
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              About <span className="text-[#FF6F3C]">Yazua Afrika</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-lg text-gray-700 leading-relaxed space-y-6 mb-12">
              <p>
                Yazua Afrika is a community-focused organization dedicated to nurturing potential and driving positive social impact across Africa.
              </p>
              <p>
                Through structured mentorship programs, community initiatives, and transparent donation platforms, Yazua Afrika empowers individuals to build skills, access guidance, and contribute meaningfully to sustainable development.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-50 rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our work is centered on:
              </h2>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#FF6F3C] font-bold mt-1">•</span>
                  <span>Mentorship and youth empowerment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF6F3C] font-bold mt-1">•</span>
                  <span>Education and skills development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF6F3C] font-bold mt-1">•</span>
                  <span>Community support and social impact initiatives</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF6F3C] font-bold mt-1">•</span>
                  <span>Ethical partnerships and transparent engagement</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 text-center"
            >
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                At Yazua Afrika, we believe lasting change happens when people are equipped, supported, and inspired to lead transformation within their own communities.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Footer />
      <ChatWidget />
    </div>
  );
}

