import React from "react";
import Ecom from "../assets/images/Ecom.png";
import porfolio from "../assets/images/portfolio.png";

const projectData = [
  {
    title: "Portfolio Website",
    image: porfolio,
    description: "A personal website to showcase my work and resume.",
    technologies: ["React", "Tailwind CSS", "Netlify"],
    date: "Jan 2024",
    views: 120,
    github: "https://github.com/yourusername/portfolio",
  },
  {
    title: "E-commerce App",
    image: Ecom,
    description: "A full-stack app with cart, login, and Stripe integration.",
    technologies: ["React", "Node.js", "MongoDB"],
    date: "Feb 2024",
    views: 98,
    github: "https://github.com/yourusername/ecommerce",
  },
  {
    title: "Chat Application",
    image: "/images/chatapp.png",
    description: "A real-time chat app using WebSockets and Node.",
    technologies: ["React", "Socket.IO", "Express"],
    date: "Mar 2024",
    views: 135,
    github: "https://github.com/yourusername/chatapp",
  },
  {
    title: "Task Manager",
    image: "/images/taskmanager.png",
    description: "Manage your tasks with a beautiful UI and backend API.",
    technologies: ["Vue", "Firebase", "Tailwind"],
    date: "Apr 2024",
    views: 200,
    github: "https://github.com/yourusername/taskmanager",
  },
];

const Projects = () => {
  return (
    <section className="bg-white dark:bg-primary-dark p-8 md:p-16 min-h-[60vh]">
      <h2 className="text-3xl font-bold mb-10 text-center text-blue-600 dark:text-white">
        Projects
      </h2>
    <hr />
      <h1 className="text-center my-6 font-mono">Explore my latest projects and creative works</h1>
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-white mt-2">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-100 text-blue-400 font-semibold px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex justify-between text-sm text-gray-500">
                <span>{project.date}</span>
                <span>👁 {project.views}</span>
              </div>
            </div>

            {/* GitHub link appears on hover */}
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold shadow-md hover:bg-blue-100 transition"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
