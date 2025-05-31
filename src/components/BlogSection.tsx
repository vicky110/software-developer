
import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiUser, FiArrowRight } from 'react-icons/fi';

const BlogSection = () => {
  const posts = [
    {
      id: 1,
      title: 'The Future of AI in Software Development',
      excerpt: 'Exploring how artificial intelligence is revolutionizing the way we build software applications.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI/ML'
    },
    {
      id: 2,
      title: 'Building Scalable Microservices Architecture',
      excerpt: 'Best practices for designing and implementing microservices that can handle massive scale.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
      author: 'Michael Chen',
      date: '2024-01-10',
      readTime: '8 min read',
      category: 'Architecture'
    },
    {
      id: 3,
      title: 'React 18: New Features and Performance Improvements',
      excerpt: 'A comprehensive guide to React 18\'s concurrent features and how they improve user experience.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
      author: 'Emily Rodriguez',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Frontend'
    },
  ];

  return (
    <section id="blog" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
            Latest Insights
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Stay updated with the latest trends, best practices, and insights from the world of software development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-slate-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-indigo-500 text-white rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-zinc-300 mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-zinc-400 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <FiUser size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiCalendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <span>{post.readTime}</span>
                </div>

                <motion.div
                  className="flex items-center text-indigo-400 font-semibold group-hover:text-indigo-300 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span>Read More</span>
                  <FiArrowRight className="ml-2" size={16} />
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg font-semibold text-white hover:shadow-lg transition-shadow"
          >
            View All Posts
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
