import React from "react";
import Ecom from "../assets/images/Ecom.png";
import sd from "../assets/images/sd.png";
import HS from "../assets/images/HS.png";
import porfolio from "../assets/images/portfolio.png";

const projectData = [
  {
    title: "Portfolio Website",
    image: porfolio,
    description: "A personal website to showcase my work and resume.",
    technologies: ["React", "Tailwind CSS"],
    date: "Jan 2024",
    views: 120,
    github: "https://github.com/",
  },
  {
    title: "Housing Society Management System",
    image: HS,
    description: "A web app for managing housing society operations with user, committe, employee and admin panels. It was my final year project.",
    technologies: ["Next.Js", "MYSQL", "RozorPay"],
    date: "May 2025",
    views: 98,
    github: "https://github.com/",
  },
  {
    title: "Shadi Portal",
    image: sd,
    description: "A matrimonial app with user registation, branch login, admin panel and more.",
    technologies: ["PhP", "MYSQL", "PhonePe"],
    date: "May 2025",
    views: 98,
    github: "https://github.com/",
  },
  {
    title: "Attendence System",
    image: "/images/app.png",
    description: "A flutter app for managing attendece records with admin panel and user regstration. It is ready to use app for any organization.",
    technologies: ["Flutter", "Firebase" ],
    date: "July 2025",
    views: 120,
    github: "https://github.com/",
  },
  {
    title: "College ERP (New Version)",
    image: porfolio,
    description: "A college ERP system with student, teacher, developer, employee and admin panels. where admin can manage all the reqired functionalities to automate the college management.",
    technologies: ["ASP.NET", "Bootstrap", "SQL Server"],
    date: "July 2025",
    views: 120,
    github: "https://github.com/",
  },
  {
    title: "MLM web app",
    image: "/images/app.png",
    description: "A multi-level marketing web app with user registration, admin panel, and more.",
    technologies: ["PhP", "MySQL"],
    date: "Apr 2025",
    views: 98,
    github: "https://github.com/",
  },
  {
    title: "Complaint Management System",
    image: "/images/app.png",
    description: "A web app for managing complaints with user and admin panels. It is developd for district administration to manage the complaints of citizens.",
    technologies: ["PhP", "MySQL"],
    date: "Mar 2025",
    views: 98,
    github: "https://github.com/",
  },
  {
    title: "E-commerce App",
    image: Ecom,
    description: "A full-stack app with cart, login, and Stripe integration.",
    technologies: ["React", "Node.js", "MySQL"],
    date: "Feb 2025",
    views: 98,
    github: "https://github.com/",
  },
  {
    title: "School App",
    image: "/images/app.png",
    description: "A school management app with student, parent and teacher portals.",
    technologies: ["Flutter", "Node.js", "SQLServer"],
    date: "Jan 2025",
    views: 98,
    github: "https://github.com/",
  },
  {
    title: "College Mobile App",
    image: "/images/app.png",
    description: "A real-time chat app using WebSockets and Node.",
    technologies: ["React", "Socket.IO", "Express"],
    date: "Nov 2024",
    views: 135,
    github: "https://github.com/",
  },
  {
    title: "AI Powered ITI Job Portal",
    image: "/images/taskmanager.png",
    description: "An AI-powered job portal for ITI students with resume builder and job matching.",
    technologies: ["Flutter", "Firebase", "Dart"],
    date: "Sep 2024",
    views: 200,
    github: "https://github.com/",
  },
  {
    title: "College ERP (Old Version)",
    image: porfolio,
    description: "A college ERP system with student and admin panels.",
    technologies: ["ASP.NET", "Bootstrap", "SQL Server"],
    date: "July 2023",
    views: 120,
    github: "https://github.com/",
  },
];

const Projects = () => {
  return (
    <section className="bg-white dark:bg-primary-dark p-8 md:p-16 min-h-[60vh]">
      <h2 className="text-3xl font-bold mb-10 text-center text-blue-600 dark:text-white">
        Projects
      </h2>
    <hr />
      <h1 className="text-center my-6 font-mono">Explore my latest projects and creative works. All these projects are live (Live link will be added later) and hosted by me on the Window Server.</h1>
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
