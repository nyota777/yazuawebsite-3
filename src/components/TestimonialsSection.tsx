import React, { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'David Kamau',
      role: 'FORGE Graduate, 2023',
      image: `${import.meta.env.BASE_URL}ya_image.jpeg`,
      quote:
        'YAZUA AFRIKA transformed my life. The FORGE program taught me resilience, leadership, and confidence. I now mentor other young boys in my community.',
      rating: 5,
    },
    {
      name: 'Peter Mwangi',
      role: 'BUILD Participant, 2024',
      image: `${import.meta.env.BASE_URL}zu_image.jpeg`,
      quote:
        'The BUILD program helped me turn my business idea into reality. The mentorship and practical skills I gained are invaluable. I now run my own social enterprise.',
      rating: 5,
    },
    {
      name: 'Grace Njeri',
      role: 'Parent',
      image: `${import.meta.env.BASE_URL}zu2_image.jpeg`,
      quote:
        'As a parent, I have seen incredible growth in my son since he joined YAZUA AFRIKA. He is more confident, responsible, and has a clear vision for his future.',
      rating: 5,
    },
    {
      name: 'Samuel Ochieng',
      role: 'iDECIDE Graduate, 2025',
      image: `${import.meta.env.BASE_URL}a_image.jpeg`,
      quote:
        'The iDECIDE program helped me make better decisions and understand my purpose. The coaches truly care about our success and personal growth.',
      rating: 5,
    },
    {
      name: 'James Kipchoge',
      role: 'ManUp Leadership Adventures, 2024',
      image: `${import.meta.env.BASE_URL}ya_image.jpeg`,
      quote:
        'The wilderness expedition pushed me beyond my limits. I learned teamwork, perseverance, and discovered strengths I never knew I had.',
      rating: 5,
    },
    {
      name: 'Mary Wanjiku',
      role: 'Parent & Community Leader',
      image: `${import.meta.env.BASE_URL}zu_image.jpeg`,
      quote:
        'YAZUA AFRIKA is making a real difference in our community. The positive masculinity approach is exactly what our young men need.',
      rating: 5,
    },
  ];

  const nextTestimonial = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevTestimonial = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const currentTestimonial = testimonials[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === testimonials.length - 1;

  return (
    <section className="py-20 bg-gradient-to-br from-[#006B3F]/5 to-[#FF6F3C]/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Success <span className="text-[#FF6F3C]">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from participants, parents, and community members about the transformative
            impact of our programs.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto px-14 md:px-20">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="bg-white rounded-2xl shadow-lg p-8 md:p-10 relative w-full"
              >
                <div className="absolute top-6 right-6 text-[#FF6F3C]/10">
                  <Quote className="w-16 h-16" />
                </div>
                <div className="relative z-10">
                  <div className="flex gap-1 mb-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-[#FF6F3C] text-[#FF6F3C]"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed text-lg">
                    "{currentTestimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                      <img
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{currentTestimonial.name}</h4>
                      <p className="text-sm text-gray-600">{currentTestimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              disabled={isFirst}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full md:-translate-x-12 bg-white rounded-full p-3 shadow-lg transition-all duration-300 ease-in-out z-20 ${
                isFirst
                  ? 'opacity-40 cursor-not-allowed text-gray-400'
                  : 'hover:shadow-xl hover:bg-[#FF6F3C] hover:text-white text-[#FF6F3C] cursor-pointer'
              }`}
              aria-label="Previous testimonial"
              type="button"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              disabled={isLast}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-full md:translate-x-12 bg-white rounded-full p-3 shadow-lg transition-all duration-300 ease-in-out z-20 ${
                isLast
                  ? 'opacity-40 cursor-not-allowed text-gray-400'
                  : 'hover:shadow-xl hover:bg-[#FF6F3C] hover:text-white text-[#FF6F3C] cursor-pointer'
              }`}
              aria-label="Next testimonial"
              type="button"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ease-in-out ${
                  index === currentIndex
                    ? 'bg-[#FF6F3C] w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                type="button"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
