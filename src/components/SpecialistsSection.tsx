import React from 'react';
import { Target, Users, Mountain, BookOpen, Award, Heart, Brain } from 'lucide-react';
import { motion } from 'motion/react';

export function SpecialistsSection() {
  const specialties = [
    { icon: Target, label: 'Leadership Development' },
    { icon: Users, label: 'Boys Development and Mentorship' },
    { icon: Brain, label: 'Masculinity Expertise' },
    { icon: Mountain, label: 'Experiential Learning and Coaching' },
    { icon: Award, label: 'Rites of Passage' },
    { icon: BookOpen, label: 'Research, Curriculum Development and Program Design' },
  ];

  return (
    <section id="specialists" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our <span className="text-[#c7211a]">Specialties</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                {React.createElement(specialty.icon, {
                  className: 'w-12 h-12 text-orange-600 mx-auto mb-4',
                })}
                <p className="text-gray-900 font-semibold">{specialty.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

