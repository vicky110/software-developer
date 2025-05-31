
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All', 'Web Apps', 'Mobile', 'Enterprise', 'AI/ML'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Apps',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
      description: 'Modern e-commerce solution with AI-powered recommendations',
      metrics: { users: '50K+', revenue: '+300%', performance: '99.9%' },
      techs: ['React', 'Node.js', 'MongoDB', 'AWS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Healthcare Mobile App',
      category: 'Mobile',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f',
      description: 'Telemedicine app connecting patients with healthcare providers',
      metrics: { downloads: '100K+', rating: '4.8/5', doctors: '500+' },
      techs: ['React Native', 'Firebase', 'WebRTC', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Enterprise CRM System',
      category: 'Enterprise',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      description: 'Comprehensive CRM solution for large enterprises',
      metrics: { efficiency: '+45%', leads: '+200%', satisfaction: '95%' },
      techs: ['Java', 'Spring', 'PostgreSQL', 'Docker'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'AI Analytics Dashboard',
      category: 'AI/ML',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      description: 'Real-time analytics platform with machine learning insights',
      metrics: { accuracy: '94%', speed: '10x faster', cost: '-60%' },
      techs: ['Python', 'TensorFlow', 'React', 'D3.js'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'FinTech Mobile Wallet',
      category: 'Mobile',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3',
      description: 'Secure digital wallet with cryptocurrency support',
      metrics: { transactions: '1M+', security: '100%', users: '250K+' },
      techs: ['Flutter', 'Blockchain', 'Node.js', 'Redis'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Smart City IoT Platform',
      category: 'Enterprise',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176',
      description: 'IoT platform for smart city infrastructure management',
      metrics: { sensors: '10K+', uptime: '99.8%', efficiency: '+35%' },
      techs: ['IoT', 'AWS IoT', 'React', 'Time Series DB'],
      liveUrl: '#',
      githubUrl: '#'
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
            Our Portfolio
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto mb-8">
            Explore our successful projects and see how we've helped businesses transform digitally.
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
                    : 'bg-slate-800 text-zinc-300 hover:bg-slate-700'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects grid */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-slate-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="px-3 py-1 bg-indigo-500 text-white rounded-full text-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-zinc-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.techs.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-700 text-zinc-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techs.length > 3 && (
                      <span className="px-2 py-1 bg-slate-700 text-zinc-300 rounded text-xs">
                        +{project.techs.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-slate-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-slate-900/80 rounded-lg hover:bg-slate-900 transition-colors"
                  >
                    <FiX size={24} className="text-white" />
                  </button>
                </div>

                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                      <span className="px-3 py-1 bg-indigo-500 text-white rounded-full text-sm">
                        {selectedProject.category}
                      </span>
                    </div>
                    <div className="flex gap-4">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={selectedProject.liveUrl}
                        className="p-3 bg-indigo-500 rounded-lg hover:bg-indigo-600 transition-colors"
                      >
                        <FiExternalLink size={20} className="text-white" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={selectedProject.githubUrl}
                        className="p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
                      >
                        <FiGithub size={20} className="text-white" />
                      </motion.a>
                    </div>
                  </div>

                  <p className="text-zinc-300 text-lg mb-8">{selectedProject.description}</p>

                  {/* Metrics */}
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {Object.entries(selectedProject.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-indigo-400 mb-1">{value}</div>
                        <div className="text-zinc-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.techs.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-slate-700 text-zinc-300 rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PortfolioSection;
