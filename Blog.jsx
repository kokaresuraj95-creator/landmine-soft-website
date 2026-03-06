import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCalendar, FiUser, FiClock, FiArrowRight } from 'react-icons/fi';

const Blog = () => {
  const posts = [
    {
      title: 'The Future of Web Development in 2024',
      excerpt: 'Explore the latest trends and technologies shaping the future of web development.',
      author: 'John Smith',
      date: 'Mar 15, 2024',
      readTime: '5 min read',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      color: 'from-blue-600 to-purple-600'
    },
    {
      title: 'Building Scalable Microservices',
      excerpt: 'Learn best practices for designing and implementing microservices architecture.',
      author: 'Sarah Johnson',
      date: 'Mar 10, 2024',
      readTime: '8 min read',
      category: 'Architecture',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2034&q=80',
      color: 'from-green-600 to-teal-600'
    },
    {
      title: 'UI/UX Trends for 2024',
      excerpt: 'Discover the latest design trends that will dominate the digital landscape.',
      author: 'Emily Davis',
      date: 'Mar 5, 2024',
      readTime: '6 min read',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'DevOps Best Practices',
      excerpt: 'Essential practices for successful DevOps implementation in your organization.',
      author: 'Michael Chen',
      date: 'Feb 28, 2024',
      readTime: '7 min read',
      category: 'DevOps',
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      color: 'from-orange-600 to-red-600'
    },
    {
      title: 'AI in Software Development',
      excerpt: 'How artificial intelligence is transforming the way we build software.',
      author: 'David Wilson',
      date: 'Feb 20, 2024',
      readTime: '10 min read',
      category: 'AI/ML',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      color: 'from-cyan-600 to-blue-600'
    },
    {
      title: 'Cybersecurity Essentials',
      excerpt: 'Protect your applications with these essential security practices.',
      author: 'Lisa Brown',
      date: 'Feb 12, 2024',
      readTime: '6 min read',
      category: 'Security',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      color: 'from-red-600 to-orange-600'
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
            Our Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-primary-100 max-w-3xl mx-auto"
          >
            Insights, thoughts, and stories from our team about technology, design, and innovation.
          </motion.p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="relative rounded-3xl overflow-hidden group cursor-pointer">
              <img
                src={posts[0].image}
                alt={posts[0].title}
                className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-12">
                <span className={`inline-block px-4 py-2 bg-gradient-to-r ${posts[0].color} text-white rounded-full text-sm font-semibold mb-4`}>
                  {posts[0].category}
                </span>
                <h2 className="text-4xl font-bold text-white mb-4">{posts[0].title}</h2>
                <p className="text-white/80 text-lg mb-6 max-w-2xl">{posts[0].excerpt}</p>
                <div className="flex items-center space-x-6 text-white/70">
                  <span className="flex items-center"><FiUser className="mr-2" /> {posts[0].author}</span>
                  <span className="flex items-center"><FiCalendar className="mr-2" /> {posts[0].date}</span>
                  <span className="flex items-center"><FiClock className="mr-2" /> {posts[0].readTime}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Post Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${post.color} text-white rounded-full text-sm font-semibold`}>
                    {post.category}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-4 text-sm text-secondary-500">
                    <span className="flex items-center"><FiUser className="mr-1" /> {post.author}</span>
                    <span className="flex items-center"><FiCalendar className="mr-1" /> {post.date}</span>
                  </div>

                  <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-secondary-600">
                    {post.excerpt}
                  </p>

                  <Link 
                    to={`/blog/${index + 1}`}
                    className="inline-flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform"
                  >
                    Read More <FiArrowRight className="ml-2" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center mt-16 space-x-2"
          >
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                  page === 1
                    ? 'bg-primary-600 text-white'
                    : 'bg-secondary-100 text-secondary-600 hover:bg-primary-100 hover:text-primary-600'
                }`}
              >
                {page}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-primary-100 mb-8">
              Get the latest posts delivered right to your inbox. Stay updated with our latest insights.
            </p>

            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl text-secondary-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;