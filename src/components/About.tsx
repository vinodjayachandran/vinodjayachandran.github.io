
import React from 'react';

const About = () => {
  const skills = [
    'Java', 'Python', 'HTML',
    'JavaScript', 'TypeScript', 
    'SQL/NoSQL',
    'GraphQL', 'AWS',
    'Docker', 'Git'
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="section-heading">
        <span className="section-number">01.</span>
        <h2 className="text-2xl md:text-3xl font-bold text-portfolio-lightestSlate">About Me</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-2 space-y-4 text-portfolio-slate">
          <p>
            Hello! I'm Vinod, a software developer based in Chennai, India. I enjoy creating things
            that live on the internet, whether that be websites, applications, or anything in between.
            My goal is to always build products that provide pixel-perfect, performant experiences.
          </p>
          <p>
            Shortly after graduating from <span className="text-portfolio-lightestSlate">National Institure of Technology, Calicut</span>,
            I have worked at multiple  companies comprising of both start up and MNCs including <span className="text-portfolio-lightestSlate">Amazon</span> where I work
            on a wide variety of interesting and meaningful projects on a daily basis across domains like e-commerce, fintech, and cloud platforms.
          </p>
          <p>
          My approach to engineering is rooted in pragmatic problem-solving, deep understanding of data structures and systems, and a strong alignment with business goals.
          I’ve contributed as both an individual contributor and a leader—driving innovation, mentoring teams, and building solutions that deliver measurable value.
          </p>    
          <p>
          I specialize in designing <span className="text-portfolio-lightestSlate"> RESTful APIs, microservices-based architectures, backend systems, cloud architecture (AWS), data pipelines, personalization engines, and platform performance optimization. </span>
          I hold a patent in dynamic pricing systems and bring a product-oriented mindset to every technical challenge I tackle.
          </p>     
          <p>
            Here are a few technologies I've been working with recently:
          </p>

          <ul className="grid grid-cols-2 gap-2 mt-4">
            {skills.map((skill, index) => (
              <li key={index} className="flex items-center">
                <span className="text-portfolio-teal mr-2">▹</span>
                <span className="font-mono text-sm">{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative group mx-auto md:mx-0">
          <div className="relative rounded overflow-hidden w-60 h-60">
            <img 
              src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1540&q=80" 
              alt="Developer" 
              className="grayscale hover:grayscale-0 transition-all duration-300 object-cover w-full h-full"
            />
            <div className="absolute inset-0 border-2 border-portfolio-teal rounded bg-portfolio-teal/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div className="absolute -bottom-4 -right-4 w-60 h-60 border-2 border-portfolio-teal rounded z-[-1] transition-all duration-200 group-hover:translate-x-1 group-hover:translate-y-1"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
