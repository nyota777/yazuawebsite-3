import React from 'react';
import { Quote, Star } from 'lucide-react';
import { motion } from 'motion/react';

export function TestimonialsSection() {
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

  return (
    <section className="py-20 bg-gradient-to-br from-[#006B3F]/5 to-[#FF6F3C]/5">
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

        <div className="overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide" style={{ scrollBehavior: 'smooth' }}>
          <div className="flex gap-6 min-w-max sm:min-w-0">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative flex-shrink-0 w-[90vw] sm:w-[400px] md:w-[450px]"
              >
                <div className="absolute top-6 right-6 text-[#FF6F3C]/10">
                  <Quote className="w-16 h-16" />
                </div>
                <div className="relative z-10">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-[#FF6F3C] text-[#FF6F3C]"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
