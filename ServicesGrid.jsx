import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiCode, FiSmartphone, FiPenTool, FiServer, 
  FiCloud, FiShield, FiDatabase, FiBarChart2 
} from 'react-icons/fi';

const ServicesGrid = () => {
  const services = [
    {
      icon: <FiCode />,
      title: 'Web Development',
      description: 'Custom web applications with React, Node.js, and modern frameworks.',
      color: 'from-blue-600 to-blue-400',
      delay: 0.1
    },
    {
      icon: <FiSmartphone />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile apps for iOS and Android.',
      color: 'from-green-600 to-green-400',
      delay: 0.2
    },
    {
      icon: <FiPenTool />,
      title: 'UI/UX Design',
      description: 'User-centered design that creates engaging digital experiences.',
      color: 'from-purple-600 to-purple-400',
      delay: 0.3
    },
    {
      icon: <FiServer />,
      title: 'Backend Development',
      description: 'Scalable and secure backend solutions with microservices.',
      color: 'from-orange-600 to-orange-400',
      delay: 0.4
    },
    {
      icon: <FiCloud />,
      title: 'Cloud Solutions',
      description: 'Cloud-native applications on AWS, Azure, and Google Cloud.',
      color: 'from-cyan-600 to-cyan-400',
      delay: 0.5
    },
    {
      icon: <FiShield />,
      title: 'Cybersecurity',
      description: 'Comprehensive security audits and implementation.',
      color: 'from-red-600 to-red-400',
      delay: 0.6
    },
    {
      icon: <FiDatabase />,
      title: 'Data Analytics',
      description: 'Data-driven insights with advanced analytics and BI.',
      color: 'from-yellow-600 to-yellow-400',
      delay: 0.7
    },
    {
      icon: <FiBarChart2 />,
      title: 'Digital Transformation',
      description: 'Strategic consulting to modernize your business.',
      color: 'from-pink-600 to-pink-400',
      delay: 0.8
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary-600 font-semibold text-lg">OUR SERVICES</span>
          <h2 className="mt-4 mb-6">
            Comprehensive<br />
            <span className="gradient-text">Software Solutions</span>
          </h2>
          <p className="text-xl text-secondary-600">
            From concept to deployment, we deliver excellence at every stage.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: service.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 border border-secondary-100 overflow-hidden cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`text-4xl text-primary-600 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-secondary-600 mb-4">
                  {service.description}
                </p>
                
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-primary-600 font-medium group-hover:translate-x-2 transition-transform"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 to-primary-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/services" className="btn-secondary">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;