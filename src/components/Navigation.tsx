import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'About', href: '/about', isRoute: true },
    { name: 'Programs', href: '#programs', isRoute: false },
    { name: 'Gallery', href: '#gallery', isRoute: false },
    { name: 'Blog', href: '#blog', isRoute: false },
    { name: 'iDECIDE', href: '#idecide', isRoute: false },
    { name: 'Contact', href: '#contact', isRoute: false },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img 
              src={`${import.meta.env.BASE_URL}yazua_logo.png`} 
              alt="YAZUA AFRIKA Logo" 
              className="h-12 w-auto bg-transparent"
              style={{ backgroundColor: 'transparent' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              if (link.isRoute) {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-gray-700 hover:text-[#FF6F3C] transition-colors duration-200 ${
                      location.pathname === link.href ? 'text-[#FF6F3C] font-semibold' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              } else {
                const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                  if (location.pathname !== '/') {
                    e.preventDefault();
                    navigate('/');
                    setTimeout(() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }
                };
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleHashClick}
                    className="text-gray-700 hover:text-[#FF6F3C] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                );
              }
            })}
            <button className="bg-[#FF6F3C] text-white px-6 py-2 rounded-full hover:bg-[#e55a2a] transition-colors duration-200">
              Donate
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => {
              if (link.isRoute) {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`block py-2 text-gray-700 hover:text-[#FF6F3C] transition-colors duration-200 ${
                      location.pathname === link.href ? 'text-[#FF6F3C] font-semibold' : ''
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              } else {
                const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                  setIsMobileMenuOpen(false);
                  if (location.pathname !== '/') {
                    e.preventDefault();
                    navigate('/');
                    setTimeout(() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }
                };
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleHashClick}
                    className="block py-2 text-gray-700 hover:text-[#FF6F3C] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                );
              }
            })}
            <button className="w-full bg-[#FF6F3C] text-white px-6 py-3 rounded-full hover:bg-[#e55a2a] transition-colors duration-200">
              Donate
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}