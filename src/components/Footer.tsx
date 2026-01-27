import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, BookOpen } from 'lucide-react';

export function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHashLink = (hash: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src={`${import.meta.env.BASE_URL}yazua_logo.png`} 
                alt="YAZUA AFRIKA Logo" 
                className="h-14 w-auto bg-transparent"
                style={{ backgroundColor: 'transparent' }}
              />
            </div>
            <p className="text-sm mb-4">
              Empowering young men through leadership, mentorship, and experiential learning
              since 2008.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://www.facebook.com/yazua.afrika?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#FF6F3C] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/yazua.afrika?igsh=dWQ0NDdia3lsdzho"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#FF6F3C] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ericmungai-yazua?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#FF6F3C] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://substack.com/@ericmungai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#FF6F3C] transition-colors"
                aria-label="Substack"
              >
                <BookOpen className="w-5 h-5" />
              </a>
              <a
                href="mailto:register@yazuaafrika.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#FF6F3C] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-[#FF6F3C] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#FF6F3C] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <button
                  onClick={() => handleHashLink('#programs')}
                  className="hover:text-[#FF6F3C] transition-colors text-left"
                >
                  Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleHashLink('#gallery')}
                  className="hover:text-[#FF6F3C] transition-colors text-left"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleHashLink('#blog')}
                  className="hover:text-[#FF6F3C] transition-colors text-left"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleHashLink('#contact')}
                  className="hover:text-[#FF6F3C] transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-semibold mb-4">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleHashLink('#programs')}
                  className="hover:text-[#FF6F3C] transition-colors text-left"
                >
                  FORGE (Ages 12-14)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleHashLink('#programs')}
                  className="hover:text-[#FF6F3C] transition-colors text-left"
                >
                  BUILD (Ages 18-24)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleHashLink('#programs')}
                  className="hover:text-[#FF6F3C] transition-colors text-left"
                >
                  iDECIDE (Ages 13-15)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleHashLink('#programs')}
                  className="hover:text-[#FF6F3C] transition-colors text-left"
                >
                  MAN UP LEADERSHIP ADVENTURES
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleHashLink('#programs')}
                  className="hover:text-[#FF6F3C] transition-colors text-left"
                >
                  MENTORSHIP CIRCLE
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleHashLink('#programs')}
                  className="hover:text-[#FF6F3C] transition-colors text-left"
                >
                  X GLOBAL SUMMER EXPERIENCES
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for the latest updates and stories.
            </p>
            <div className="flex mb-6">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-[#FF6F3C] text-white text-sm"
              />
              <button className="bg-[#FF6F3C] px-4 py-2 rounded-r-lg hover:bg-[#e55a2a] transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FF6F3C]" />
                <a href="tel:+254734631650" className="hover:text-[#FF6F3C] transition-colors">
                  +254 734 631 650
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FF6F3C]" />
                <a href="mailto:register@yazuaafrika.com" className="hover:text-[#FF6F3C] transition-colors">
                  register@yazuaafrika.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF6F3C]" />
                <span>Karen, Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© 2026 YAZUA AFRIKA. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-orange-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-orange-600 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-orange-600 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}