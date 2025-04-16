
import React from 'react';

const EmailSidebar = () => {
  return (
    <div className="fixed right-6 bottom-0 hidden lg:flex flex-col items-center">
      <a 
        href="mailto:vinodjayachandran@gmail.com"
        className="font-mono text-portfolio-slate hover:text-portfolio-teal transition-colors tracking-widest vertical-text"
        style={{ writingMode: 'vertical-rl' }}
      >
        vinodjayachandran@gmail.com
      </a>
      <div className="h-24 w-px bg-portfolio-slate mt-6"></div>
    </div>
  );
};

export default EmailSidebar;
