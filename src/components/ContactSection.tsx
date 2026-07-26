import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Facebook, Instagram, Linkedin, BookOpen, Twitter, User, MessageSquare, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.48 1.32 4.99L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.76 14.16c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.79-4.17-4.94-4.36-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.09.2-.14.31-.28.48-.14.16-.29.36-.42.49-.14.14-.28.29-.12.56.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.21 1.37.28.14.44.12.6-.07.17-.19.71-.83.9-1.11.19-.28.38-.24.63-.14.26.09 1.64.77 1.92.91.28.14.47.21.53.33.07.12.07.68-.17 1.36Z"/>
    </svg>
  );
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent('Contact Form Submission from YAZUA AFRIKA Website');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:register@yazuaafrika.com?subject=${subject}&body=${body}`;
    // Show success message
    alert('Thank you for your message! Your email client will open to send the message.');
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
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-500">
                    <User className="w-5 h-5" />
                  </span>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-white placeholder-gray-500 transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-500">
                    <Mail className="w-5 h-5" />
                  </span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-white placeholder-gray-500 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-500">
                    <Phone className="w-5 h-5" />
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-white placeholder-gray-500 transition-all duration-300"
                    placeholder="0734631650"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  Message
                </label>
                <div className="relative">
                  <span className="absolute top-3.5 left-0 flex items-start pl-4 pointer-events-none text-gray-500">
                    <MessageSquare className="w-5 h-5" />
                  </span>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full pl-11 pr-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-white placeholder-gray-500 transition-all duration-300 resize-none"
                    placeholder="Tell us about your interest in our programs..."
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full hover:from-orange-600 hover:to-red-700 shadow-lg shadow-orange-600/20 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 font-semibold cursor-pointer"
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
              <motion.a
                href="https://maps.google.com/?q=Marula+Close+No.+40,+off+Marula+Lane,+Karen,+Nairobi,+Kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-gray-700/50 rounded-2xl p-6 transition-all duration-300 hover:border-[#FF6F3C]/30 hover:shadow-[0_0_20px_rgba(255,111,60,0.08)] hover:-translate-y-1 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FF6F3C]/10 border border-[#FF6F3C]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6F3C] group-hover:scale-110 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-[#FF6F3C] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-center">
                      <h3 className="text-white font-semibold mb-1">Location</h3>
                      <ArrowRight className="w-4 h-4 text-gray-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-orange-500 transition-all duration-300" />
                    </div>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Marula Close No. 40, off Marula Lane</p>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Karen, Nairobi, Kenya</p>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="tel:+254734631650"
                className="block bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-gray-700/50 rounded-2xl p-6 transition-all duration-300 hover:border-[#FF6F3C]/30 hover:shadow-[0_0_20px_rgba(255,111,60,0.08)] hover:-translate-y-1 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FF6F3C]/10 border border-[#FF6F3C]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6F3C] group-hover:scale-110 transition-all duration-300">
                    <Phone className="w-6 h-6 text-[#FF6F3C] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-center">
                      <h3 className="text-white font-semibold mb-1">Phone</h3>
                      <ArrowRight className="w-4 h-4 text-gray-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-orange-500 transition-all duration-300" />
                    </div>
                    <p className="text-gray-400 group-hover:text-white transition-colors font-medium">+254 734 631 650</p>
                    <p className="text-xs text-gray-500 mt-1">Tap to call our office directly</p>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="https://wa.me/254734631650"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-emerald-500/20 rounded-2xl p-6 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(37,211,102,0.12)] hover:-translate-y-1 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#25D366]/10 border border-[#25D366]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366] group-hover:scale-110 transition-all duration-300">
                    <WhatsAppIcon className="w-6 h-6 text-[#25D366] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <h3 className="text-white font-semibold">WhatsApp</h3>
                        <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 tracking-wide uppercase">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                          </span>
                          Active
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-emerald-400 transition-all duration-300" />
                    </div>
                    <p className="text-gray-400 group-hover:text-white transition-colors font-medium mt-1">+254 734 631 650</p>
                    <p className="text-xs text-emerald-500/80 mt-1 font-semibold group-hover:text-emerald-400 transition-colors flex items-center gap-1">
                      Start instant conversation
                    </p>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="mailto:info@yazuaafrika.com"
                className="block bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-gray-700/50 rounded-2xl p-6 transition-all duration-300 hover:border-[#FF6F3C]/30 hover:shadow-[0_0_20px_rgba(255,111,60,0.08)] hover:-translate-y-1 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FF6F3C]/10 border border-[#FF6F3C]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6F3C] group-hover:scale-110 transition-all duration-300">
                    <Mail className="w-6 h-6 text-[#FF6F3C] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-center">
                      <h3 className="text-white font-semibold mb-1">Email</h3>
                      <ArrowRight className="w-4 h-4 text-gray-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-orange-500 transition-all duration-300" />
                    </div>
                    <p className="text-gray-400 group-hover:text-white transition-colors font-medium break-all">info@yazuaafrika.com</p>
                    <p className="text-xs text-gray-500 mt-1">Send us an email anytime</p>
                  </div>
                </div>
              </motion.a>
            </div>

            {/* Map */}
            <div className="bg-gray-800 border border-gray-700/50 rounded-2xl overflow-hidden h-80 relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19036577427!2d36.70730744999999!3d-1.2920659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(0.8)' }}
                allowFullScreen
                loading="lazy"
                title="YAZUA AFRIKA Location"
                className="transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-gray-700/50 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://www.facebook.com/yazua.afrika?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] hover:shadow-[0_0_15px_rgba(24,119,242,0.4)] transition-all duration-300 group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                </a>
                <a
                  href="https://www.instagram.com/yazua.afrika?igsh=dWQ0NDdia3lsdzho"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center hover:bg-[linear-gradient(45deg,#f09433_0%,#e6683c_25%,#dc2743_50%,#cc2366_75%,#bc1888_100%)] hover:border-transparent hover:shadow-[0_0_15px_rgba(220,39,67,0.4)] transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ericmungai-yazua?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:shadow-[0_0_15px_rgba(10,102,194,0.4)] transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                </a>
                <a
                  href="https://x.com/yazua_afrika"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center hover:bg-black hover:border-gray-800 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 group"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                </a>
                <a
                  href="https://substack.com/@ericmungai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center hover:bg-[#FF6719] hover:border-[#FF6719] hover:shadow-[0_0_15px_rgba(255,103,25,0.4)] transition-all duration-300 group"
                  aria-label="Substack"
                >
                  <BookOpen className="w-6 h-6 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                </a>
                <a
                  href="https://wa.me/254734631650"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] hover:shadow-[0_0_15px_rgba(37,211,102,0.4)] transition-all duration-300 group"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="w-6 h-6 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                </a>
                <a
                  href="mailto:info@yazuaafrika.com"
                  className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center hover:bg-[#EA4335] hover:border-[#EA4335] hover:shadow-[0_0_15px_rgba(234,67,53,0.4)] transition-all duration-300 group"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
