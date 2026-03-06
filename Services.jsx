import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, FiSmartphone, FiPenTool, FiServer, 
  FiCloud, FiShield, FiDatabase, FiBarChart2,
  FiCheckCircle 
} from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      icon: <FiCode className="w-12 h-12" />,
      title: 'Web Development',
      description: 'We build high-performance web applications using React, Vue, Angular, and modern backend technologies.',
      features: ['Custom Web Apps', 'E-commerce', 'CMS', 'PWAs'],
      color: 'from-blue-600 to-blue-400'
    },
    {
      icon: <FiSmartphone className="w-12 h-12" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['iOS Apps', 'Android Apps', 'React Native', 'Flutter'],
      color: 'from-green-600 to-green-400'
    },
    {
      icon: <FiPenTool className="w-12 h-12" />,
      title: 'UI/UX Design',
      description: 'User-centered design that creates intuitive and engaging experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
      color: 'from-purple-600 to-purple-400'
    },
    {
      icon: <FiServer className="w-12 h-12" />,
      title: 'Backend Development',
      description: 'Scalable, secure backend systems and APIs for your applications.',
      features: ['REST APIs', 'GraphQL', 'Microservices', 'Database Design'],
      color: 'from-orange-600 to-orange-400'
    },
    {
      icon: <FiCloud className="w-12 h-12" />,
      title: 'Cloud Solutions',
      description: 'Cloud-native architecture and infrastructure management.',
      features: ['AWS/Azure', 'DevOps', 'CI/CD', 'Containerization'],
      color: 'from-cyan-600 to-cyan-400'
    },
    {
      icon: <FiShield className="w-12 h-12" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security assessments and implementation.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Monitoring'],
      color: 'from-red-600 to-red-400'
    },
    {
      icon: <FiDatabase className="w-12 h-12" />,
      title: 'Data Analytics',
      description: 'Data-driven insights with advanced analytics and BI.',
      features: ['Data Visualization', 'Business Intelligence', 'Reporting', 'Predictive Analytics'],
      color: 'from-yellow-600 to-yellow-400'
    },
    {
      icon: <FiBarChart2 className="w-12 h-12" />,
      title: 'Digital Transformation',
      description: 'Strategic consulting to modernize your business processes.',
      features: ['Process Automation', 'Legacy Modernization', 'Digital Strategy', 'Change Management'],
      color: 'from-pink-600 to-pink-400'
    }
  ];

  const processSteps = [
    { step: '01', title: 'Discovery', desc: 'Understanding your requirements and goals' },
    { step: '02', title: 'Planning', desc: 'Architecture design and project roadmap' },
    { step: '03', title: 'Development', desc: 'Agile development with regular updates' },
    { step: '04', title: 'Testing', desc: 'Rigorous QA and performance testing' },
    { step: '05', title: 'Deployment', desc: 'Smooth launch and migration' },
    { step: '06', title: 'Support', desc: 'Ongoing maintenance and updates' }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-primary-100 max-w-3xl mx-auto"
          >
            Comprehensive software solutions that drive innovation and business growth
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 border border-secondary-100 group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-secondary-600 mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-secondary-700">
                      <FiCheckCircle className="text-primary-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary-600">Process</span>
            </h2>
            <p className="text-lg text-secondary-600">
              A systematic approach to delivering quality software
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center relative"
              >
                <div className="text-4xl font-bold text-primary-200 mb-2">{step.step}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-secondary-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your goals with cutting-edge technology.
            </p>
            <button className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all">
              Get Started Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;