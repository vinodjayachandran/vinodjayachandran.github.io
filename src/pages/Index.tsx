
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SocialSidebar from '@/components/SocialSidebar';
import EmailSidebar from '@/components/EmailSidebar';

const Index = () => {
  return (
    <div className="bg-portfolio-navy min-h-screen">
      <Header />
      <main className="pb-24">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <SocialSidebar />
      <EmailSidebar />
      <Footer />
    </div>
  );
};

export default Index;
