import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMapPin, FiClock, FiDollarSign, FiBriefcase, FiHeart, FiUsers, FiTrendingUp, FiCoffee } from 'react-icons/fi';

const Careers = () => {
  const benefits = [
    { icon: <FiHeart />, title: 'Health Insurance', desc: 'Comprehensive medical, dental, and vision coverage' },
    { icon: <FiUsers />, title: 'Remote First', desc: 'Work from anywhere with flexible hours' },
    { icon: <FiTrendingUp />, title: 'Growth', desc: 'Learning stipend and career development' },
    { icon: <FiCoffee />, title: 'Work-Life Balance', desc: 'Paid time off and flexible schedules' }
  ];

  const jobs = [
    {
      title: 'Senior React Developer',
      type: 'Full-time',
      location: 'Remote / San Francisco',
      salary: '$120k - $160k',
      department: 'Engineering',
      description: 'Build modern web applications using React, TypeScript, and Next.js',
      requirements: ['5+ years React', 'TypeScript', 'State Management', 'Testing'],
      color: 'from-blue-600 to-blue-400'
    },
    {
      title: 'Backend Engineer',
      type: 'Full-time',
      location: 'Remote / New York',
      salary: '$130k - $170k',
      department: 'Engineering',
      description: 'Design scalable APIs and microservices with Node.js and Python',
      requirements: ['Node.js/Python', 'Database Design', 'Microservices', 'AWS'],
      color: 'from-green-600 to-green-400'
    },
    {
      title: 'UI/UX Designer',
      type: 'Full-time',
      location: 'Remote / Austin',
      salary: '$90k - $130k',
      department: 'Design',
      description: 'Create beautiful and intuitive user experiences',
      requirements: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
      color: 'from-purple-600 to-purple-400'
    },
    {
      title: 'DevOps Engineer',
      type: 'Full-time',
      location: 'Remote / Seattle',
      salary: '$140k - $180k',
      department: 'Infrastructure',
      description: 'Manage cloud infrastructure and CI/CD pipelines',
      requirements: ['AWS/Azure', 'Kubernetes', 'Terraform', 'CI/CD'],
      color: 'from-orange-600 to-orange-400'
    },
    {
      title: 'Product Manager',
      type: 'Full-time',
      location: 'Remote / Boston',
      salary: '$130k - $170k',
      department: 'Product',
      description: 'Lead product strategy and roadmap',
      requirements: ['Agile', 'User Stories', 'Market Research', 'Analytics'],
      color: 'from-red-600 to-red-400'
    },
    {
      title: 'QA Engineer',
      type: 'Full-time',
      location: 'Remote / Chicago',
      salary: '$80k - $110k',
      department: 'Quality Assurance',
      description: 'Ensure quality through automated and manual testing',
      requirements: ['Automation', 'Manual Testing', 'Cypress', 'Jest'],
      color: 'from-yellow-600 to-yellow-400'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.5, 1], rotate: [0, -45, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full"
        />

        <div className="container-custom relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Join Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-primary-100 max-w-3xl mx-auto"
          >
            Build your career at Landmine Soft - where innovation meets impact. 
            Join a team of passionate technologists shaping the future.
          </motion.p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary-600 font-semibold text-lg">WHY JOIN US</span>
            <h2 className="mt-4 mb-6">
              Amazing Benefits,<br />
              <span className="gradient-text">Incredible Culture</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="card text-center group"
              >
                <div className="text-4xl text-primary-600 mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-secondary-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary-600 font-semibold text-lg">OPEN POSITIONS</span>
            <h2 className="mt-4 mb-6">
              Find Your<br />
              <span className="gradient-text">Dream Job</span>
            </h2>
          </motion.div>

          <div className="grid gap-6">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all cursor-pointer group"
              >
                <div className="flex flex-wrap items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${job.color} flex items-center justify-center`}>
                        <FiBriefcase className="text-white text-xl" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-primary-600 transition-colors">
                          {job.title}
                        </h3>
                        <span className="text-sm text-primary-600 font-semibold">{job.department}</span>
                      </div>
                    </div>

                    <p className="text-secondary-600 mb-4">{job.description}</p>

                    <div className="flex flex-wrap gap-4 mb-4">
                      <span className="flex items-center text-secondary-600">
                        <FiMapPin className="mr-2" /> {job.location}
                      </span>
                      <span className="flex items-center text-secondary-600">
                        <FiClock className="mr-2" /> {job.type}
                      </span>
                      <span className="flex items-center text-secondary-600">
                        <FiDollarSign className="mr-2" /> {job.salary}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
                        >
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="btn-primary whitespace-nowrap"
                  >
                    Apply Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-primary-600 font-semibold text-lg">OUR CULTURE</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                Where Innovation Meets<br />
                <span className="gradient-text">Collaboration</span>
              </h2>
              <p className="text-lg text-secondary-600 mb-6">
                At Landmine Soft, we believe in fostering an environment where creativity thrives 
                and innovation happens naturally. We're not just building software; we're building 
                the future of technology.
              </p>
              <p className="text-lg text-secondary-600 mb-8">
                Join a diverse team of passionate technologists who are committed to excellence, 
                continuous learning, and making a real impact through technology.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {['Flexible Hours', 'Remote Work', 'Learning Stipend', 'Team Events', 'Mentorship', 'Open Source'].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-secondary-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Team collaboration"
                className="rounded-3xl shadow-2xl"
              />
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -bottom-10 -left-10 bg-white rounded-2xl shadow-xl p-6"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                    ✓
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary-900">95%</div>
                    <div className="text-sm text-secondary-600">Employee Satisfaction</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;