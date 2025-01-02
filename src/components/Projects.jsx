import React from 'react';

const projects = [
  {
    title: "customer-order-system",
    description: "A full-featured platform for managing customer orders efficiently, designed to streamline order processing, inventory updates, and customer interactions. Tech Highlights: Backend: Python (Django), REST APIs,Database: PostgreSQL Tools: Docker.",
    link: "https://github.com/Silvia-Wachira/customer-order-system",
  },
  {
    title: "Vallie's Real Estate",
    description: "This is a project creating the website of a business called Vallies Real Estate..",
    link: "https://github.com/Silvia-Wachira/Vallie-s-Real-Estate",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-10 px-4">
      <h2 className="text-3xl text-center font-bold">Projects</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="border p-4 rounded">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="text-blue-500">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
