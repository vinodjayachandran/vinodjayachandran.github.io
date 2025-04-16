
import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Mail, Edit, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 text-center">
      <div className="flex justify-center mb-6 space-x-6">
        <a 
          href="https://github.com/vinodjayachandran" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          <Github size={20} />
        </a>
        <a 
          href="https://www.linkedin.com/in/vinodjayachandran/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          <Linkedin size={20} />
        </a>
        <a 
          href="https://x.com/vinthri"
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          <Twitter size={20} />
        </a>
        <a 
            href="https://doniv.substack.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          <Edit size={20} />
        </a>
       
        <a 
          href="mailto:vinodjayachandran@gmail.com" 
          className="social-link"
        >
          <Mail size={20} />
        </a>
        <a 
          href="tel:+919886205335" 
          className="social-link"
        >
          <Phone size={20} />
        </a>
      </div>
      
      <p className="text-portfolio-slate text-sm font-mono">
        Designed & Built by Vinod Jayachandran
      </p>
      <p className="text-portfolio-slate text-xs mt-1">
        &copy; {new Date().getFullYear()} All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
