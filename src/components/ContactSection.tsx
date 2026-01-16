import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Facebook, Instagram, Linkedin, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in <span className="text-orange-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to start your leadership journey? Contact us today to learn more about
            our programs or schedule a visit.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-600 text-white placeholder-gray-500 transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-600 text-white placeholder-gray-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-600 text-white placeholder-gray-500 transition-colors"
                  placeholder="0734631650"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-600 text-white placeholder-gray-500 transition-colors resize-none"
                  placeholder="Tell us about your interest in our programs..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white px-8 py-4 rounded-full hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 font-semibold"
              >
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FF6F3C] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Location</h3>
                    <p className="text-gray-400">Marula Close No. 40, off Marula Lane</p>
                    <p className="text-gray-400">Karen, Nairobi, Kenya</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FF6F3C] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <a
                      href="tel:+254734631650"
                      className="text-gray-400 hover:text-[#FF6F3C] transition-colors"
                    >
                      +254 734 631 650
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FF6F3C] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:info@yazuaafrika.com"
                      className="text-gray-400 hover:text-[#FF6F3C] transition-colors block"
                    >
                      info@yazuaafrika.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-800 rounded-2xl overflow-hidden h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19036577427!2d36.70730744999999!3d-1.2920659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(0.8)' }}
                allowFullScreen
                loading="lazy"
                title="YAZUA AFRIKA Location"
              />
            </div>

            {/* Social Media */}
            <div className="bg-gray-800 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://www.facebook.com/yazua.afrika?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://www.instagram.com/yazua.afrika?igsh=dWQ0NDdia3lsdzho"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ericmungai-yazua?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://substack.com/@ericmungai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors group"
                  aria-label="Substack"
                >
                  <BookOpen className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="mailto:info@yazuaafrika.com"
                  className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors group"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}