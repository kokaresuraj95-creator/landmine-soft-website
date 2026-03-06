import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle, FiTrendingUp, FiShield, FiUsers, FiClock, FiAward } from 'react-icons/fi';

const Home = () => {
  const whyChooseUs = [
    {
      icon: <FiTrendingUp />,
      title: 'Innovation First',
      description: 'We leverage cutting-edge technologies to build future-proof solutions.'
    },
    {
      icon: <FiShield />,
      title: 'Enterprise Security',
      description: 'Bank-level security protocols to protect your valuable data.'
    },
    {
      icon: <FiUsers />,
      title: 'Expert Team',
      description: 'Senior developers with 5+ years of experience in your industry.'
    },
    {
      icon: <FiClock />,
      title: 'On-Time Delivery',
      description: 'Agile methodology ensuring timely delivery without compromise.'
    },
    {
      icon: <FiAward />,
      title: 'Quality Assured',
      description: 'Rigorous testing and QA processes for bug-free products.'
    },
    {
      icon: <FiCheckCircle />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support for your peace of mind.'
    }
  ];

  const technologies = [
    { name: 'React', icon: '⚛️', color: 'bg-blue-50 text-blue-600' },
    { name: 'Node.js', icon: '🟢', color: 'bg-green-50 text-green-600' },
    { name: 'Python', icon: '🐍', color: 'bg-yellow-50 text-yellow-600' },
    { name: 'AWS', icon: '☁️', color: 'bg-orange-50 text-orange-600' },
    { name: 'MongoDB', icon: '🍃', color: 'bg-green-50 text-green-700' },
    { name: 'TypeScript', icon: '📘', color: 'bg-blue-50 text-blue-700' },
    { name: 'Docker', icon: '🐳', color: 'bg-blue-50 text-blue-600' },
    { name: 'GraphQL', icon: '📊', color: 'bg-pink-50 text-pink-600' }
  ];

  const projects = [
    {
      title: 'FinTech Platform',
      category: 'Web Application',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      color: 'from-blue-600 to-purple-600'
    },
    {
      title: 'HealthCare App',
      category: 'Mobile Application',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      color: 'from-green-600 to-teal-600'
    },
    {
      title: 'E-Learning Platform',
      category: 'Web Application',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      color: 'from-orange-600 to-red-600'
    }
  ];

  return (
    <div className="overflow-hidden">
      <Hero />
      <ServicesGrid />

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary-600 font-semibold text-lg">WHY CHOOSE US</span>
            <h2 className="mt-4 mb-6">
              We Don't Just Build Software,<br />
              <span className="gradient-text">We Build Success</span>
            </h2>
            <p className="text-xl text-secondary-600">
              Partner with us and experience the difference that true expertise and dedication make.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="card group"
              >
                <div className="text-4xl text-primary-600 mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-secondary-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary-600 font-semibold text-lg">TECHNOLOGIES</span>
            <h2 className="mt-4 mb-6">
              Modern Stack for<br />
              <span className="gradient-text">Modern Solutions</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`${tech.color} rounded-2xl p-6 text-center cursor-pointer transition-all shadow-lg hover:shadow-xl`}
              >
                <span className="text-4xl mb-2 block">{tech.icon}</span>
                <span className="font-semibold">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary-600 font-semibold text-lg">OUR WORK</span>
            <h2 className="mt-4 mb-6">
              Featured<br />
              <span className="gradient-text">Projects</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -20 }}
                className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-90 transition-opacity duration-500`} />
                <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-white/80 text-sm mb-2">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <Link to="/services" className="text-white inline-flex items-center group/link">
                    View Project <FiArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-secondary-900 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary-400 font-semibold text-lg">TESTIMONIALS</span>
            <h2 className="mt-4 mb-6 text-white">
              What Our<br />
              <span className="text-primary-400">Clients Say</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary-800/50 backdrop-blur-lg rounded-2xl p-8 border border-secondary-700"
              >
                <div className="flex items-center space-x-1 text-yellow-400 mb-4">
                  {'★'.repeat(5)}
                </div>
                <p className="text-secondary-300 mb-6">
                  "Landmine Soft transformed our business with their innovative solution. 
                  The team's expertise and dedication exceeded our expectations."
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src={`https://i.pravatar.cc/150?img=${item}`}
                    alt="Client"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">John Doe</h4>
                    <p className="text-sm text-secondary-400">CEO, TechStart</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-800">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full"
          />
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, -90, 0],
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full"
          />
        </div>

        <div className="container-custom relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Idea?
            </h2>
            <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your goals with cutting-edge technology.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="bg-white text-primary-600 px-10 py-4 rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Start Project
              </Link>
              <Link to="/services" className="border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;