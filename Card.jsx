import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6 ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default Card;