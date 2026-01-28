import React, { useState, useEffect } from 'react';
import { ArrowRight, Users, Award, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function HeroSection() {
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { icon: Calendar, value: '18', label: 'Years of Programs and Mentorship Modules' },
    { icon: Users, value: '4,180+', label: 'Boys Mentored' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={`${import.meta.env.BASE_URL}gallery13.jpg`}
          alt="Leadership Training"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            We Train, Mentor, Coach, and Prepare Boys for{' '}
            <span className="text-[#FF6F3C]">Leadership</span>,{' '}
            <span className="text-[#FF6F3C]">Innovation</span>, and{' '}
            <span className="text-[#FF6F3C]">Social Impact</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Empowering young men through experiential learning, mentorship programs,
            outdoor activities, and project-based learning to create positive change
            in their communities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScgQFCd6OGjLMY_todC0RzURWWbU4vlCkuFQGOmSktdW2uzmA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF6F3C] text-white px-8 py-4 rounded-full hover:bg-[#e55a2a] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-lg"
            >
              Join a Program <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              to="/about"
              className="bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Learn More
            </Link>
          </div>

          {/* Animated Statistics Panel */}
          <motion.div
            key={currentStat}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-8 py-6"
          >
            {React.createElement(stats[currentStat].icon, {
              className: 'w-8 h-8 text-[#FF6F3C]',
            })}
            <div className="text-left">
              <div className="text-3xl font-bold text-white">
                {stats[currentStat].value}
              </div>
              <div className="text-sm text-gray-300">{stats[currentStat].label}</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}