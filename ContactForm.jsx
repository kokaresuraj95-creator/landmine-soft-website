import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiPhone, FiMessageSquare, FiSend } from 'react-icons/fi';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (formData.phone && !/^[\d\s-+()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
      >
        <label className="block text-secondary-700 font-medium mb-2">
          Full Name <span className="text-primary-600">*</span>
        </label>
        <div className="relative">
          <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-secondary-400" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`input-field pl-12 ${errors.name ? 'border-red-500' : ''}`}
            placeholder="John Doe"
          />
        </div>
        {errors.name && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1 text-sm text-red-600"
          >
            {errors.name}
          </motion.p>
        )}
      </motion.div>

      {/* Email Field */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <label className="block text-secondary-700 font-medium mb-2">
          Email Address <span className="text-primary-600">*</span>
        </label>
        <div className="relative">
          <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-secondary-400" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`input-field pl-12 ${errors.email ? 'border-red-500' : ''}`}
            placeholder="john@example.com"
          />
        </div>
        {errors.email && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1 text-sm text-red-600"
          >
            {errors.email}
          </motion.p>
        )}
      </motion.div>

      {/* Phone Field */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <label className="block text-secondary-700 font-medium mb-2">
          Phone Number
        </label>
        <div className="relative">
          <FiPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-secondary-400" />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`input-field pl-12 ${errors.phone ? 'border-red-500' : ''}`}
            placeholder="+1 (555) 123-4567"
          />
        </div>
        {errors.phone && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1 text-sm text-red-600"
          >
            {errors.phone}
          </motion.p>
        )}
      </motion.div>

      {/* Message Field */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <label className="block text-secondary-700 font-medium mb-2">
          Message <span className="text-primary-600">*</span>
        </label>
        <div className="relative">
          <FiMessageSquare className="absolute left-4 top-6 text-secondary-400" />
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className={`input-field pl-12 resize-none ${errors.message ? 'border-red-500' : ''}`}
            placeholder="Tell us about your project..."
          />
        </div>
        {errors.message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1 text-sm text-red-600"
          >
            {errors.message}
          </motion.p>
        )}
      </motion.div>

      {/* Submit Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <button
          type="submit"
          disabled={isSubmitting || isSuccess}
          className="btn-primary w-full group relative overflow-hidden"
        >
          <motion.span
            animate={isSubmitting ? { opacity: 0 } : { opacity: 1 }}
            className="flex items-center justify-center"
          >
            {isSuccess ? (
              <>
                <span>✓ Message Sent!</span>
              </>
            ) : (
              <>
                Send Message
                <FiSend className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </>
            )}
          </motion.span>

          {/* Loading Animation */}
          {isSubmitting && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2 }}
              className="absolute inset-0 bg-white/20 flex items-center justify-center"
            >
              <div className="loading-dots">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </motion.div>
          )}
        </button>
      </motion.div>
    </form>
  );
};

export default ContactForm;