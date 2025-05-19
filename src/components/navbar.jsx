import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-primary-light dark:bg-primary-dark sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-2 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Avneesh Kumar</h1>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-text-light dark:text-text-dark hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <Link to="/about" className="text-text-light dark:text-text-dark hover:text-blue-600 dark:hover:text-blue-400">About</Link>
            <Link to="/skills" className="text-text-light dark:text-text-dark hover:text-blue-600 dark:hover:text-blue-400">Skills</Link>
            <Link to="/projects" className="text-text-light dark:text-text-dark hover:text-blue-600 dark:hover:text-blue-400">Projects</Link>
            <Link to="/experience" className="text-text-light dark:text-text-dark hover:text-blue-600 dark:hover:text-blue-400">Experience</Link>
            <Link to="/education" className="text-text-light dark:text-text-dark hover:text-blue-600 dark:hover:text-blue-400">Education</Link>
            <Link to="/contact" className="text-text-light dark:text-text-dark hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <Link to="/" className="block text-text-light dark:text-text-dark hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <Link to="/about" className="block text-text-light dark:text-text-dark hover:text-blue-600 dark:hover:text-blue-400">About</Link>
            <Link to="/skills" className="block text-text-light dark:text-text-dark hover:text-blue-600 dark:hover:text-blue-400">Skills</Link>
            <Link to="/projects" className="block text-text-light dark:text-text-dark hover:text-blue-600 dark:hover:text-blue-400">Projects</Link>
            <Link to="/experience" className="block text-text-light dark:text-text-dark hover:text-blue-600 dark:hover:text-blue-400">Experience</Link>
            <Link to="/education" className="block text-text-light dark:text-text-dark hover:text-blue-600 dark:hover:text-blue-400">Education</Link>
            <Link to="/contact" className="block text-text-light dark:text-text-dark hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;