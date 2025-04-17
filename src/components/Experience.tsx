
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const experiences = [
  {
    company: "Amazon",
    title: "Senior Software Development Engineer",
    period: "December 2020 - Present",
    responsibilities: [
    "AI based Discovery and Recommendation of products from catalog",
    "Points based loyalty for customers",
    "Localisation from Cloud",
    "Performance optimization (Memory, Latency, CPU, Fluidity) for Android Apps on Fire TV",
    "User Profile Management on Fire TV",
    ]
  },
  {
    company: "Lowe's",
    title: "Associate Director",
    period: "Nov 2018 - December 2020",
    responsibilities: [
      "Lead a team of engineers and product managers in the ideation and technical development of innovative enterprise software to streamline and automate critical business processes",
      "Provide strategic and operational oversight for Enterprise software product development",
      "Work closely with business leaders to develop short and long-term strategies",
      "Manage business expectations, resolve conflicts, and keep businesses aligned",
      "Develop and drive execution on 6 months and 1-year road maps",
      "Drive innovation, establish new approaches in improving productivity",
      "Establish a metrics based organization, develop key operational metrics and push for continuous improvement.",
      "Ensure system security, data integrity, and accuracy of financial records"
    ]
  },
  {
    company: "BankBazaar",
    title: "Software Development Manager",
    period: "April 2015 - Nov 2018",
    responsibilities: [
      "Personalization engine for financial products",
      "OAuth 2.0 client implementation",
      "Crawl and scrape data from multiple sources",
      "Data pipeline for data ingestion and processing",
      "Data warehouse and reporting",
    ]
  },
  {
    company: "Software AG",
    title: "Engineering Specialist",
    period: "Aug 2011 - Apr 2015",
    responsibilities: [
      "Feature Developments for WebMethods Integration Server, such as Enterprise Gateway and command central plugins",
    
    ]
  },
  {
    company: "Huawei",
    title: "Technical Team Lead",
    period: "May 2010 - Aug 2011",
    responsibilities: [
      "Product Development for Cloud based solution Flexscale and NMS product U2000",
    
    ]
  },
  {
    company: "Amdocs",
    title: "Subject Matter Expert",
    period: "June 2006 - May 2008",
    responsibilities: [
      "Product development and maintenance of Amdocs Ensemble Billing Solutions",
    
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
          <TabsList className="flex flex-wrap md:flex-row md:w-max h-auto mb-4 md:mb-0 md:mr-8 bg-transparent">
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
