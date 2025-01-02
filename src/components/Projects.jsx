import React from 'react';

const projects = [
  {
    title: "Project 1",
    description: "A cool project that does amazing things.",
    link: "https://github.com/yourproject",
  },
  {
    title: "Project 2",
    description: "Another project with incredible features.",
    link: "https://github.com/yourproject2",
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
