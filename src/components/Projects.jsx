import React from 'react';

const projects = [
  {
    title: "customer-order-system",
    description: "A full-featured platform for managing customer orders efficiently, designed to streamline order processing, inventory updates, and customer interactions. Tech Highlights: Backend: Python (Django), REST APIs, Database: PostgreSQL, Tools: Docker.",
    link: "https://github.com/Silvia-Wachira/customer-order-system",
  },
  {
    title: "Vallie's Real Estate",
    description: "This is a project creating the website of a business called Vallie's Real Estate.",
    link: "https://github.com/Silvia-Wachira/Vallie-s-Real-Estate",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gradient-to-b from-grayish to-cream py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-coffee mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-coffee text-almostWhite p-6 rounded shadow">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-4">{project.description}</p>
              <a href={project.link} className="text-blue-500 underline mt-2 inline-block">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
