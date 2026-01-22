import React, { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function CTABanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-0 left-0 right-0 z-40 px-4 pb-4"
        >
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#FF6F3C] to-[#e55a2a] rounded-2xl shadow-2xl overflow-hidden">
            <div className="relative px-6 py-4 md:px-8 md:py-6">
              <button
                onClick={handleDismiss}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                aria-label="Dismiss banner"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    Ready to Transform Your Life?
                  </h3>
                  <p className="text-white/90 text-sm md:text-base">
                    Join hundreds of young men who have discovered their potential through our
                    programs. Applications are now open!
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <button className="bg-white text-[#FF6F3C] px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 font-semibold whitespace-nowrap">
                    Apply Now <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#FF6F3C] transition-all duration-300 font-semibold whitespace-nowrap">
                    Donate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
