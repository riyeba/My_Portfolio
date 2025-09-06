import React, { useState } from 'react';

const NavBar = () => {
  // State to track the navbar collapse
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Function to handle nav item click and close the navbar
  const handleNavItemClick = () => {
    setIsCollapsed(true); // Collapse the navbar
  };

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <a 
            href="/"
            className="text-white no-underline group flex items-center"
            onClick={handleNavItemClick}
          >
            <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
              Taiwo
            </span>
            <div className="ml-2 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>

          {/* Mobile menu button */}
          <button
            aria-controls="navbar-nav"
            onClick={() => setIsCollapsed(!isCollapsed)} // Toggle collapse on button click
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-gray-800 transition-colors duration-200 group"
          >
            <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${!isCollapsed ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 my-1 ${!isCollapsed ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${!isCollapsed ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex ml-auto space-x-2">
            <a 
              href="/"
              className="relative text-white hover:text-blue-400 px-4 py-2 rounded-lg font-medium transition-all duration-200 group overflow-hidden no-underline"
              onClick={handleNavItemClick}
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
            </a>
            {/* <a 
              href="/about"
              className="relative text-white hover:text-blue-400 px-4 py-2 rounded-lg font-medium transition-all duration-200 group overflow-hidden no-underline"
              onClick={handleNavItemClick}
            >
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
            </a> */}
            <a 
              href="/mlearning"
              className="relative text-white hover:text-blue-400 px-4 py-2 rounded-lg font-medium transition-all duration-200 group overflow-hidden no-underline"
              onClick={handleNavItemClick}
            >
              <span className="relative z-10">Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
            </a>
            <a 
              href="/contact"
              className="relative text-white hover:text-blue-400 px-4 py-2 rounded-lg font-medium transition-all duration-200 group overflow-hidden no-underline"
              onClick={handleNavItemClick}
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
            </a>
          </div>
        </div>

        {/* Mobile Navigation Menu - Manage collapse state */}
        <div 
          id="navbar-nav" 
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            !isCollapsed 
              ? 'max-h-64 opacity-100 pb-4' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="border-t border-gray-700/50 pt-4 space-y-2">
            <a 
              href="/"
              className="flex items-center w-full text-left text-white hover:text-blue-400 hover:bg-gray-800/50 px-4 py-3 rounded-lg transition-all duration-200 group text-decoration-none"
              onClick={handleNavItemClick}
            >
              <svg className="w-4 h-4 mr-3 text-gray-400 group-hover:text-blue-400 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="font-medium">Home</span>
            </a>
            {/* <a 
              href="/about"
              className="flex items-center w-full text-left text-white hover:text-blue-400 hover:bg-gray-800/50 px-4 py-3 rounded-lg transition-all duration-200 group text-decoration-none"
              onClick={handleNavItemClick}
            >
              <svg className="w-4 h-4 mr-3 text-gray-400 group-hover:text-blue-400 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="font-medium">About</span>
            </a> */}
            <a 
              href="/mlearning"
              className="flex items-center w-full text-left text-white hover:text-blue-400 hover:bg-gray-800/50 px-4 py-3 rounded-lg transition-all duration-200 group text-decoration-none"
              onClick={handleNavItemClick}
            >
              <svg className="w-4 h-4 mr-3 text-gray-400 group-hover:text-blue-400 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span className="font-medium">Projects</span>
            </a>
            <a 
              href="/contact"
              className="flex items-center w-full text-left text-white hover:text-blue-400 hover:bg-gray-800/50 px-4 py-3 rounded-lg transition-all duration-200 group text-decoration-none"
              onClick={handleNavItemClick}
            >
              <svg className="w-4 h-4 mr-3 text-gray-400 group-hover:text-blue-400 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">Contact</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;