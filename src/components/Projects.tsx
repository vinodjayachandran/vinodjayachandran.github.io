
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: "Web Crawl and Scrape",
    description: "Crawls multiple URLs -> Download their HTML content -> Extract info and save it as JSON",
    tags: ["Python"],
    
    repoLink: "https://github.com/vinodjayachandran/WebCrawl",
    featured: true,
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2189&q=80"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with Typescript to showcase projects and skills.",
    tags: ["Typescript"],
    liveLink: "https://vinodjayachandran.github.io/",
    repoLink: "https://github.com/vinodjayachandran/vinodjayachandran.github.io",
    featured: true
  },
  {
    title: "Real Estate Website",
    description: "Website for a real estate builder, showcasing properties and services.",
    tags: ["Wordpress", "PHP"],
    liveLink: "https://midtownstructures.com/",
    featured: true
  },
  {
    title: "GitHub Gists",
    description: "Code snippets covering AI and AWS service use cases.",
    tags: ["Java", "Python"],
    liveLink: "https://gist.github.com/vinodjayachandran",
    featured: false
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'featured' 
    ? projects.filter(project => project.featured) 
    : projects;

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="section-heading">
        <span className="section-number">03.</span>
        <h2 className="text-2xl md:text-3xl font-bold text-portfolio-lightestSlate">Things I've Built</h2>
      </div>

      <div className="mb-8 flex justify-end">
        <div className="flex space-x-2">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setFilter('all')}
            className={`text-sm font-mono ${filter === 'all' ? 'text-portfolio-teal' : 'text-portfolio-slate'}`}
          >
            All Projects
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setFilter('featured')}
            className={`text-sm font-mono ${filter === 'featured' ? 'text-portfolio-teal' : 'text-portfolio-slate'}`}
          >
            Featured
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <Card key={index} className="bg-portfolio-lightNavy border-portfolio-lightNavy hover:translate-y-[-5px] transition-transform duration-300">
            <CardHeader className="flex-row justify-between items-start space-y-0 pb-2">
              <div className="text-portfolio-teal">
                <Folder size={32} />
              </div>
              <div className="flex space-x-4">
                {project.repoLink && (
                  <a 
                    href={project.repoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-portfolio-lightSlate hover:text-portfolio-teal"
                  >
                    <Github size={20} />
                  </a>
                )}
                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-portfolio-lightSlate hover:text-portfolio-teal"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-portfolio-lightestSlate mb-2 text-xl">{project.title}</CardTitle>
              <CardDescription className="text-portfolio-slate min-h-[80px]">
                {project.description}
              </CardDescription>
            </CardContent>
            <CardFooter>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs font-mono text-portfolio-lightSlate border-portfolio-lightestNavy">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
