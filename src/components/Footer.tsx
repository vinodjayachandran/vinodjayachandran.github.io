
import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 text-center">
      <div className="flex justify-center mb-6 space-x-6">
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          <Github size={20} />
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          <Linkedin size={20} />
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          <Twitter size={20} />
        </a>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          <Instagram size={20} />
        </a>
        <a 
          href="mailto:hello@example.com" 
          className="social-link"
        >
          <Mail size={20} />
        </a>
      </div>
      
      <p className="text-portfolio-slate text-sm font-mono">
        Designed & Built by John Doe
      </p>
      <p className="text-portfolio-slate text-xs mt-1">
        &copy; {new Date().getFullYear()} All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
