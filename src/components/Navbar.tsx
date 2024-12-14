import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { id: 1, label: 'HOME', href: 'hero', className: 'cursor-pointer' },
    { id: 2, label: 'TECH SERVICES', href: 'services', className: 'cursor-pointer' },
    { id: 3, label: 'MERCHANDISE', href: 'merchandise', className: 'cursor-pointer' },
    { id: 4, label: 'TOURISM', href: 'tourism', className: 'cursor-pointer' },
    { id: 5, label: 'CONTACT', href: 'contact', className: 'cursor-pointer' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-900/90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/images/logos.png" alt="Brand Logo" className="h-16 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                smooth={item.href !== '/'}
                duration={500}
                className={`text-white hover:text-purple-500 transition-colors duration-300 text-sm tracking-wider ${item.className}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="text-white p-2 transition-transform duration-300 ease-in-out"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden fixed top-20 right-0 w-64 bg-navy-900/95 backdrop-blur-sm transform transition-all duration-300 ease-in-out origin-top-right rounded-bl-lg shadow-lg
          ${isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
        >
          <div className="flex flex-col items-end px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                smooth={item.href !== '/'}
                duration={500}
                className={`text-white right-10 relative hover:text-purple-500 transition-all duration-300 text-base tracking-wider ${item.className}
                  transform hover:translate-x-[-8px] hover:scale-105`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


