
import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiDownload } from 'react-icons/fi';

const Footer = () => {
  const services = [
    'Custom Software Development',
    'SaaS Development',
    'Mobile Applications',
    'Enterprise Solutions',
    'AI Solutions',
    'Cybersecurity',
  ];

  const company = [
    'About Us',
    'Our Team',
    'Careers',
    'Portfolio',
    'Blog',
    'Contact',
  ];

  const resources = [
    'Service PDF Brochures',
    'Case Studies',
    'Whitepapers',
    'Developer Guide',
    'API Documentation',
    'Support Center',
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent"
            >
              DevStudio
            </motion.div>
            <p className="text-zinc-300 mb-6">
              Next-generation software solutions that transform businesses and drive innovation.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-zinc-300">
                <FiMail size={16} />
                <span>hello@devstudio.com</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <FiPhone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <FiMapPin size={16} />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-zinc-300 hover:text-indigo-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-zinc-300 hover:text-indigo-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource}>
                  <a
                    href="#"
                    className="text-zinc-300 hover:text-indigo-400 transition-colors flex items-center gap-2"
                  >
                    {resource}
                    {resource.includes('PDF') && <FiDownload size={14} />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-6 mb-4 md:mb-0">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="p-3 bg-slate-800 rounded-lg hover:bg-indigo-500 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="p-3 bg-slate-800 rounded-lg hover:bg-indigo-500 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="p-3 bg-slate-800 rounded-lg hover:bg-indigo-500 transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter size={20} />
              </motion.a>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 text-zinc-400 text-sm">
              <p>&copy; 2024 DevStudio. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
