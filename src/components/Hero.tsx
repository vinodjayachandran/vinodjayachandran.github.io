
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="space-y-6 max-w-3xl">
        <p className="font-mono text-portfolio-teal opacity-0 animate-fade-in">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold text-portfolio-lightestSlate opacity-0 animate-fade-in delay-100">
          John Doe.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-portfolio-slate opacity-0 animate-fade-in delay-200">
          I build things for the web.
        </h2>
        <p className="text-portfolio-slate text-lg max-w-2xl opacity-0 animate-fade-in delay-300">
          I'm a software developer specializing in building exceptional digital experiences.
          Currently, I'm focused on building accessible, human-centered products.
        </p>
        <div className="pt-8 opacity-0 animate-fade-in delay-400">
          <Button 
            onClick={scrollToProjects}
            className="bg-transparent hover:bg-portfolio-teal/10 text-portfolio-teal border border-portfolio-teal px-6 py-4 rounded text-base font-mono"
          >
            Check out my work
            <ArrowDownCircle size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
