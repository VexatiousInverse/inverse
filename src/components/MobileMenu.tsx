import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: 'tween' }}
          className="fixed inset-0 bg-white dark:bg-gray-900 z-50 md:hidden"
        >
          <div className="p-4">
            <button 
              onClick={onClose}
              className="p-2 float-right text-gray-900 dark:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            
            <nav className="flex flex-col space-y-4 mt-16">
              <NavLink 
                to="/" 
                onClick={onClose}
                className={({ isActive }) =>
                  `text-2xl font-semibold p-4 rounded-lg transition-colors ${
                    isActive 
                      ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30' 
                      : 'text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink 
                to="/projects" 
                onClick={onClose}
                className={({ isActive }) =>
                  `text-2xl font-semibold p-4 rounded-lg transition-colors ${
                    isActive 
                      ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30' 
                      : 'text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`
                }
              >
                Projects
              </NavLink>
              <NavLink 
                to="/about" 
                onClick={onClose}
                className={({ isActive }) =>
                  `text-2xl font-semibold p-4 rounded-lg transition-colors ${
                    isActive 
                      ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30' 
                      : 'text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`
                }
              >
                About
              </NavLink>
              <NavLink 
                to="/contact" 
                onClick={onClose}
                className={({ isActive }) =>
                  `text-2xl font-semibold p-4 rounded-lg transition-colors ${
                    isActive 
                      ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30' 
                      : 'text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`
                }
              >
                Contact
              </NavLink>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;