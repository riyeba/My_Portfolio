import React, { useState, useEffect } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/'); // Mock active link for demo

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle nav item click
  const handleNavItemClick = (path) => {
    setIsOpen(false);
    setActiveLink(path); // Mock setting active link
    // In your real app, you'll use: navigate(path) or Link component
  };

  // Check if link is active
  const isActiveLink = (path) => {
    return activeLink === path;
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/twoproject', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
        : 'bg-gray-900/95 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <button 
            onClick={() => handleNavItemClick('/')}
            className="flex items-center space-x-2 group"
          >
            <div className={`relative ${
              scrolled ? 'text-gray-900' : 'text-white'
            } transition-colors duration-300`}>
              <span className="text-2xl font-bold tracking-tight">Taiwo</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavItemClick(link.path)}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-200 group ${
                  isActiveLink(link.path)
                    ? scrolled
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-blue-400 bg-white/10'
                    : scrolled
                      ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
                {isActiveLink(link.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`relative p-2 rounded-lg transition-colors duration-200 ${
                scrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-gray-300 hover:bg-white/10'
              }`}
              aria-label="Toggle navigation menu"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute left-0 top-1 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}></span>
                <span className={`absolute left-0 top-3 w-6 h-0.5 bg-current transition-opacity duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute left-0 top-5 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-64 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className={`py-4 space-y-2 border-t ${
            scrolled ? 'border-gray-200' : 'border-gray-700'
          }`}>
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavItemClick(link.path)}
                className={`w-full text-left block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  isActiveLink(link.path)
                    ? scrolled
                      ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                      : 'text-blue-400 bg-white/10 border-l-4 border-blue-400'
                    : scrolled
                      ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{link.label}</span>
                  {isActiveLink(link.path) && (
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;