import React from 'react';
import { Users, Award, Target, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export function ImpactMetrics() {
  const metrics = [
    {
      icon: Users,
      value: '4,180+',
      label: 'Boys Mentored',
      description: 'Young men transformed through our programs',
      color: 'bg-[#FF6F3C]',
    },
    {
      icon: Award,
      value: '18',
      label: 'Years of Programs',
      description: 'Building leaders since 2008',
      color: 'bg-[#006B3F]',
    },
    {
      icon: Target,
      value: '6',
      label: 'Unique Development Models',
      description: 'Comprehensive leadership experiences',
      color: 'bg-[#1A1A1A]',
    },
    {
      icon: TrendingUp,
      value: '85%',
      label: 'Success Rate',
      description: 'Participants achieving their goals',
      color: 'bg-[#8B7355]',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#FF6F3C]">Impact</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Measurable results that demonstrate our commitment to transforming lives and
            building future leaders.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div
                  className={`${metric.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {React.createElement(metric.icon, {
                    className: 'w-8 h-8 text-white',
                  })}
                </div>
                <div className="text-5xl font-bold text-white mb-2">
                  {metric.value}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{metric.label}</h3>
                <p className="text-gray-400 text-sm">{metric.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}