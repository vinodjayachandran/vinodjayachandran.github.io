
import React from 'react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center">
      <p className="text-portfolio-teal font-mono mb-4">04. What's Next?</p>
      <h2 className="text-4xl md:text-5xl font-bold text-portfolio-lightestSlate mb-6">Get In Touch</h2>
      
      <p className="text-portfolio-slate mb-12 max-w-2xl mx-auto">
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
        I'll try my best to get back to you!
      </p>
      
      <Button 
        className="bg-transparent hover:bg-portfolio-teal/10 text-portfolio-teal border border-portfolio-teal px-8 py-4 rounded text-base font-mono"
        asChild
      >
        <a href="mailto:hello@example.com">Say Hello</a>
      </Button>
    </section>
  );
};

export default Contact;
