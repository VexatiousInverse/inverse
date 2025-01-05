import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2, Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg z-50 transition-colors duration-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <NavLink to="/" className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">Vexatious Inverse</span>
            </NavLink>
            
            <div className="hidden md:flex items-center space-x-8">
              <NavLink 
                to="/" 
                className={({ isActive }) =>
                  `text-gray-900 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors ${
                    isActive ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : ''
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink 
                to="/projects" 
                className={({ isActive }) =>
                  `text-gray-900 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors ${
                    isActive ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : ''
                  }`
                }
              >
                Projects
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) =>
                  `text-gray-900 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors ${
                    isActive ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : ''
                  }`
                }
              >
                About
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) =>
                  `text-gray-900 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors ${
                    isActive ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : ''
                  }`
                }
              >
                Contact
              </NavLink>
              <ThemeToggle />
            </div>
            
            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2"
              >
                <Menu className="w-6 h-6 dark:text-white" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};

export default Navbar;