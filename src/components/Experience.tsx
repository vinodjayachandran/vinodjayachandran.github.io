
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const experiences = [
  {
    company: "TechCorp",
    title: "Senior Frontend Developer",
    period: "January 2022 - Present",
    responsibilities: [
      "Lead the frontend development of the company's flagship product, resulting in a 35% increase in user engagement",
      "Collaborate with designers to implement responsive and accessible user interfaces using React and TypeScript",
      "Mentor junior developers and conduct code reviews to maintain high code quality standards",
      "Introduce and implement modern development practices, including CI/CD, unit testing, and component documentation"
    ]
  },
  {
    company: "WebSolutions Inc.",
    title: "Full Stack Developer",
    period: "June 2019 - December 2021",
    responsibilities: [
      "Developed and maintained multiple client projects using React, Node.js, and MongoDB",
      "Built RESTful APIs and implemented authentication systems for various web applications",
      "Improved application performance by optimizing database queries and implementing caching strategies",
      "Worked directly with clients to gather requirements and provide technical solutions to business problems"
    ]
  },
  {
    company: "StartupX",
    title: "Frontend Developer",
    period: "February 2018 - May 2019",
    responsibilities: [
      "Implemented responsive web designs using HTML, CSS, and JavaScript",
      "Collaborated with the UI/UX team to create intuitive user interfaces",
      "Participated in agile development processes, including daily stand-ups and sprint planning",
      "Contributed to the company's component library, improving development efficiency across teams"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="section-heading">
        <span className="section-number">02.</span>
        <h2 className="text-2xl md:text-3xl font-bold text-portfolio-lightestSlate">Where I've Worked</h2>
      </div>

      <div className="mt-12">
        <Tabs defaultValue={experiences[0].company} className="w-full">
          <TabsList className="flex flex-wrap md:flex-col md:w-max h-auto mb-4 md:mb-0 md:mr-8 bg-transparent">
            {experiences.map((exp) => (
              <TabsTrigger 
                key={exp.company}
                value={exp.company}
                className="px-4 py-3 text-sm font-mono text-portfolio-slate data-[state=active]:text-portfolio-teal data-[state=active]:border-l-2 md:data-[state=active]:border-l-portfolio-teal data-[state=active]:border-b-2 md:data-[state=active]:border-b-0 border-portfolio-teal bg-transparent"
              >
                {exp.company}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <div className="flex-1 border-l border-portfolio-lightNavy pl-6 ml-2">
            {experiences.map((exp) => (
              <TabsContent key={exp.company} value={exp.company} className="mt-0">
                <div>
                  <h3 className="text-xl text-portfolio-lightestSlate font-medium">
                    {exp.title} <span className="text-portfolio-teal">@ {exp.company}</span>
                  </h3>
                  <p className="text-sm font-mono mb-4 text-portfolio-slate">{exp.period}</p>
                  
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, index) => (
                      <li key={index} className="flex">
                        <span className="text-portfolio-teal mr-2 flex-shrink-0">▹</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;
