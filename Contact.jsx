import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiMapPin />,
      title: 'Visit Us',
      details: ['123 Tech Street', 'Silicon Valley, CA 94025', 'United States'],
      color: 'from-blue-600 to-blue-400'
    },
    {
      icon: <FiPhone />,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 765-4321', '24/7 Support'],
      color: 'from-green-600 to-green-400'
    },
    {
      icon: <FiMail />,
      title: 'Email Us',
      details: ['hello@landminesoft.com', 'support@landminesoft.com', 'careers@landminesoft.com'],
      color: 'from-purple-600 to-purple-400'
    },
    {
      icon: <FiClock />,
      title: 'Working Hours',
      details: ['Monday - Friday: 9am - 6pm', 'Saturday: 10am - 4pm', 'Sunday: Closed'],
      color: 'from-orange-600 to-orange-400'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, -45, 0],
          }}
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
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-primary-100 max-w-3xl mx-auto"
          >
            Have a project in mind? We'd love to hear about it. 
            Let's start a conversation and bring your ideas to life.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-32 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-2xl p-8 text-center relative overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className={`text-4xl mb-4 text-primary-600 group-hover:scale-110 transition-transform duration-300`}>
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-secondary-600 text-sm">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">
                Send Us a <span className="gradient-text">Message</span>
              </h2>
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">
                Find Us <span className="gradient-text">Here</span>
              </h2>
              <div className="rounded-2xl overflow-hidden shadow-2xl h-[500px]">
                <iframe
                  title="Company Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.639627211793!2d-122.084155684688!3d37.42206577982581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c9991939d0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1625147892737!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary-600 font-semibold text-lg">FAQ</span>
            <h2 className="mt-4 mb-6">
              Frequently Asked<br />
              <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "What services does Landmine Soft provide?",
                a: "We offer comprehensive software development services including web development, mobile apps, UI/UX design, cloud solutions, cybersecurity, and digital transformation consulting."
              },
              {
                q: "How do you ensure project quality?",
                a: "We follow agile methodology with continuous testing, code reviews, and QA processes. Our team maintains high coding standards and uses modern best practices."
              },
              {
                q: "What is your typical project timeline?",
                a: "Timelines vary based on project complexity. A typical web application takes 3-6 months, while mobile apps take 4-8 months from concept to launch."
              },
              {
                q: "Do you provide post-launch support?",
                a: "Yes, we offer comprehensive maintenance and support packages to ensure your software runs smoothly and stays up-to-date with security patches."
              },
              {
                q: "How do you handle project communication?",
                a: "We use tools like Slack, Jira, and weekly video calls to ensure transparent communication. You'll have direct access to your project manager."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 cursor-pointer group"
              >
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                  {faq.q}
                </h3>
                <p className="text-secondary-600">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;