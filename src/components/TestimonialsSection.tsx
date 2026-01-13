import React from 'react';
import { Quote, Star } from 'lucide-react';
import { motion } from 'motion/react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'David Kamau',
      role: 'FORGE Graduate, 2023',
      image: 'https://images.unsplash.com/photo-1623863568368-69e4cbe6cc0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1lbiUyMGxlYWRlcnNoaXAlMjB0cmFpbmluZ3xlbnwxfHx8fDE3Njc5NjE0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      quote:
        'YAZUA AFRIKA transformed my life. The FORGE program taught me resilience, leadership, and confidence. I now mentor other young boys in my community.',
      rating: 5,
    },
    {
      name: 'Peter Mwangi',
      role: 'BUILD Participant, 2024',
      image: 'https://images.unsplash.com/photo-1562577308-c8b2614b9b9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbGVhZGVyc2hpcCUyMGFjdGl2aXR5fGVufDF8fHx8MTc2Nzk2MTQyNnww&ixlib=rb-4.1.0&q=80&w=1080',
      quote:
        'The BUILD program helped me turn my business idea into reality. The mentorship and practical skills I gained are invaluable. I now run my own social enterprise.',
      rating: 5,
    },
    {
      name: 'Grace Njeri',
      role: 'Parent',
      image: 'https://images.unsplash.com/photo-1639432038099-4379f2d421cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50b3JzaGlwJTIweW91dGh8ZW58MXx8fHwxNzY3OTYxNDI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      quote:
        'As a parent, I have seen incredible growth in my son since he joined YAZUA AFRIKA. He is more confident, responsible, and has a clear vision for his future.',
      rating: 5,
    },
    {
      name: 'Samuel Ochieng',
      role: 'iDECIDE Graduate, 2025',
      image: 'https://images.unsplash.com/photo-1732539539294-4cc2f38fac9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRyZXByZW5ldXJzaGlwJTIwd29ya3Nob3B8ZW58MXx8fHwxNzY3OTYxNDI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      quote:
        'The iDECIDE program helped me make better decisions and understand my purpose. The coaches truly care about our success and personal growth.',
      rating: 5,
    },
    {
      name: 'James Kipchoge',
      role: 'ManUp Leadership Adventures, 2024',
      image: 'https://images.unsplash.com/photo-1640951332580-1072ff909952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwYWR2ZW50dXJlJTIwY2FtcHxlbnwxfHx8fDE3Njc5NjE0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      quote:
        'The wilderness expedition pushed me beyond my limits. I learned teamwork, perseverance, and discovered strengths I never knew I had.',
      rating: 5,
    },
    {
      name: 'Mary Wanjiku',
      role: 'Parent & Community Leader',
      image: 'https://images.unsplash.com/photo-1758270705317-3ef6142d306f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwY29sbGFib3JhdGlvbiUyMHlvdXRofGVufDF8fHx8MTc2Nzk2MTQyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
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
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200">
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
    </section>
  );
}
