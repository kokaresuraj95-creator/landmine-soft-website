import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  type = 'button'
}) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300';
  
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 hover:scale-105',
    secondary: 'bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50 hover:scale-105',
    outline: 'border-2 border-secondary-300 text-secondary-700 hover:border-primary-600 hover:text-primary-600'
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      type={type}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;