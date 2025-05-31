
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCloud, FiSmartphone, FiSettings, FiShield, FiCpu } from 'react-icons/fi';

const ServicesSection = () => {
  const services = [
    {
      icon: FiCode,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your specific business requirements.',
      technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL']
    },
    {
      icon: FiCloud,
      title: 'SaaS Development',
      description: 'Scalable Software-as-a-Service platforms with modern architecture.',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Redis']
    },
    {
      icon: FiSmartphone,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps for iOS and Android.',
      technologies: ['React Native', 'Flutter', 'iOS', 'Android']
    },
    {
      icon: FiCpu,
      title: 'AI/ML Solutions',
      description: 'Intelligent systems powered by machine learning and artificial intelligence.',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI']
    },
    {
      icon: FiSettings,
      title: 'Enterprise Solutions',
      description: 'Large-scale enterprise applications with robust architecture.',
      technologies: ['Java', 'Spring', 'Microservices', 'Oracle']
    },
    {
      icon: FiShield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      technologies: ['Security Audit', 'Penetration Testing', 'SIEM', 'Compliance']
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            We provide comprehensive software development services to help your business thrive in the digital age.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-indigo-500 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-zinc-300 mb-6">{service.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-800 border border-slate-600 rounded-full text-sm text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
