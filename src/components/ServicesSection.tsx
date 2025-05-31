
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCloud, FiSmartphone, FiDatabase, FiBrain, FiShield } from 'react-icons/fi';

const ServicesSection = () => {
  const services = [
    {
      icon: FiCode,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your unique business requirements.',
      techs: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiCloud,
      title: 'SaaS Development',
      description: 'Scalable Software-as-a-Service platforms with modern cloud architecture.',
      techs: ['AWS', 'Docker', 'Kubernetes', 'Microservices'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: FiSmartphone,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps for iOS and Android.',
      techs: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: FiDatabase,
      title: 'Enterprise Solutions',
      description: 'Large-scale enterprise applications with robust architecture.',
      techs: ['Java', 'Spring', 'Oracle', 'Redis'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: FiBrain,
      title: 'AI Solutions',
      description: 'Intelligent systems powered by machine learning and AI.',
      techs: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI'],
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: FiShield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      techs: ['Security Audit', 'Penetration Testing', 'SIEM', 'Zero Trust'],
      gradient: 'from-gray-500 to-slate-500'
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-800/50">
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
            We offer comprehensive software development services to help your business thrive in the digital age.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon size={32} className="text-white" />
              </div>

              <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-zinc-300 mb-6">{service.description}</p>

              <div className="flex flex-wrap gap-2">
                {service.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-800 text-zinc-300 rounded-full text-sm border border-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
