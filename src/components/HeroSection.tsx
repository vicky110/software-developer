
import React from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-indigo-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Next-Gen
              </span>
              <br />
              <span className="text-white">Software Solutions</span>
            </motion.h1>

            <motion.p
              className="text-xl text-zinc-300 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              We craft cutting-edge software solutions that transform businesses and drive innovation in the digital landscape.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg font-semibold text-white hover:shadow-lg transition-shadow"
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('portfolio')}
                className="px-8 py-4 border border-slate-600 rounded-lg font-semibold text-white hover:bg-slate-800 transition-colors"
              >
                View Portfolio
              </motion.button>
            </motion.div>
          </motion.div>

          {/* 3D Device Mockups */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative h-96 flex items-center justify-center">
              {/* Laptop */}
              <motion.div
                className="absolute w-48 h-32 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg shadow-2xl"
                animate={{
                  y: [0, -10, 0],
                  rotateY: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ perspective: "1000px" }}
              >
                <div className="w-full h-20 bg-slate-900 rounded-t-lg p-2">
                  <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 rounded"></div>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                className="absolute right-8 top-8 w-16 h-32 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl shadow-2xl"
                animate={{
                  y: [0, -15, 0],
                  rotateZ: [0, 2, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <div className="w-full h-24 bg-slate-900 rounded-t-xl p-1 mt-2">
                  <div className="w-full h-full bg-gradient-to-br from-pink-500 to-red-500 rounded"></div>
                </div>
              </motion.div>

              {/* Tablet */}
              <motion.div
                className="absolute left-8 bottom-8 w-32 h-24 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg shadow-2xl"
                animate={{
                  y: [0, -8, 0],
                  rotateX: [0, 3, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <div className="w-full h-16 bg-slate-900 rounded-t-lg p-1 mt-1">
                  <div className="w-full h-full bg-gradient-to-br from-green-500 to-blue-500 rounded"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FiChevronDown size={32} className="text-zinc-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
