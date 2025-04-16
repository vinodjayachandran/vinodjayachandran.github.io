
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 py-4 px-6 md:px-12 transition-all duration-300 ${
        isScrolled ? 'bg-portfolio-navy/90 backdrop-blur shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-portfolio-teal font-mono text-xl">
          <span className="text-portfolio-teal">{'<'}</span>
          <span className="text-portfolio-white">Developer</span>
          <span className="text-portfolio-teal">{'/>'}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <a 
            onClick={() => scrollToSection('about')} 
            className="nav-link cursor-pointer"
          >
            1. About
          </a>
          <a 
            onClick={() => scrollToSection('experience')} 
            className="nav-link cursor-pointer"
          >
            2. Experience
          </a>
          <a 
            onClick={() => scrollToSection('projects')} 
            className="nav-link cursor-pointer"
          >
            3. Projects
          </a>
          <a 
            onClick={() => scrollToSection('contact')} 
            className="nav-link cursor-pointer"
          >
            4. Contact
          </a>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-4"
          >
            <Button 
              variant="outline" 
              className="border border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal/10 font-mono"
            >
              Resume
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-portfolio-lightSlate"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-portfolio-lightNavy/90 backdrop-blur-sm flex justify-center items-center md:hidden z-40 pt-16">
          <nav className="flex flex-col items-center space-y-6 w-full px-8">
            <a 
              onClick={() => scrollToSection('about')} 
              className="nav-link text-xl cursor-pointer"
            >
              1. About
            </a>
            <a 
              onClick={() => scrollToSection('experience')} 
              className="nav-link text-xl cursor-pointer"
            >
              2. Experience
            </a>
            <a 
              onClick={() => scrollToSection('projects')} 
              className="nav-link text-xl cursor-pointer"
            >
              3. Projects
            </a>
            <a 
              onClick={() => scrollToSection('contact')} 
              className="nav-link text-xl cursor-pointer"
            >
              4. Contact
            </a>
            <a 
              href="/resume.pdf"
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4"
            >
              <Button 
                variant="outline" 
                className="border border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal/10 font-mono"
              >
                Resume
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
