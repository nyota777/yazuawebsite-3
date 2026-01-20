import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function AboutPreviewSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-[#FF6F3C]">Yazua Afrika</span>
          </h2>
          <div className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            <p>
              Yazua Afrika is a purpose-driven organization committed to empowering communities through mentorship, education, and impact-driven programs. We connect individuals with opportunities to learn, grow, and give back by creating sustainable pathways for personal and community development.
            </p>
          </div>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 bg-[#FF6F3C] text-white px-8 py-4 rounded-full hover:bg-[#e55a2a] transition-all duration-300 transform hover:scale-105 font-semibold"
          >
            Read More <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

