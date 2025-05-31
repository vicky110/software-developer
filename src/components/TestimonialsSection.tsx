
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      role: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      rating: 5,
      text: "DevStudio transformed our business with their innovative software solution. Their team's expertise and dedication exceeded our expectations.",
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
    },
    {
      id: 2,
      name: 'Lisa Chen',
      role: 'CTO, InnovateCorp',
      company: 'InnovateCorp',
      rating: 5,
      text: "The AI-powered platform they built for us increased our efficiency by 300%. Outstanding work and professional service throughout.",
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
    },
    {
      id: 3,
      name: 'Robert Johnson',
      role: 'Founder, HealthTech Solutions',
      company: 'HealthTech Solutions',
      rating: 5,
      text: "Their mobile app development skills are exceptional. Our healthcare app now serves over 100,000 patients successfully.",
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296',
    },
  ];

  const clients = [
    { name: 'Google', logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd' },
    { name: 'Microsoft', logo: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff' },
    { name: 'Amazon', logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2' },
    { name: 'Apple', logo: 'https://images.unsplash.com/photo-1621768216002-5ac171876625' },
    { name: 'Meta', logo: 'https://images.unsplash.com/photo-1611605698335-8b1569810432' },
    { name: 'Netflix', logo: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our work.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-8 border border-slate-700 text-center"
            >
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-400 fill-current" size={24} />
                ))}
              </div>

              <blockquote className="text-xl text-zinc-300 mb-8 italic">
                "{testimonials[currentIndex].text}"
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-bold text-white">{testimonials[currentIndex].name}</div>
                  <div className="text-indigo-400">{testimonials[currentIndex].role}</div>
                  <div className="text-zinc-400 text-sm">{testimonials[currentIndex].company}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"
          >
            <FiChevronRight size={24} />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-indigo-500' : 'bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Trusted by Leading Companies</h3>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {clients.map((client) => (
              <motion.div
                key={client.name}
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="w-24 h-24 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-all"
              >
                <span className="text-white font-bold text-sm">{client.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
