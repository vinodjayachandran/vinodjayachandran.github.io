
import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Mail, Edit, Phone } from 'lucide-react';

const SocialSidebar = () => {
  return (
    <div className="fixed left-6 bottom-0 hidden lg:flex flex-col items-center">
      <div className="flex flex-col space-y-6">
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
        {/* 
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          <Instagram size={20} />
        </a>
        */}
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
      <div className="h-24 w-px bg-portfolio-slate mt-6"></div>
    </div>
  );
};

export default SocialSidebar;
