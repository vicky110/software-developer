
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import TeamSection from '../components/TeamSection';
import TestimonialsSection from '../components/TestimonialsSection';
import BlogSection from '../components/BlogSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';
import { ThemeProvider } from '../context/ThemeContext';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-900 text-zinc-100">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <PortfolioSection />
          <TeamSection />
          <TestimonialsSection />
          <BlogSection />
          <ContactSection />
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </ThemeProvider>
  );
};

export default Index;
