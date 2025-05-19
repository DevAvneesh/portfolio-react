import React from "react";
import { useState } from "react";

const Skills = () => {
const [activeCategory, setActiveCategory] = useState('Frontend');

 const getSkills = () => {
    switch (activeCategory) {
      case 'Frontend':
        return skillsFrontend;
      case 'Backend':
        return skillsBackend;
      case 'Database':
        return skillsDatabase;
      case 'DevOps':
        return skillsDevOps;
      case 'Others':
        return skillsOthers;
      default:
        return [];
    }
  };
  const skillsFrontend = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      description: "A JavaScript library for building user interfaces.",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      description: "JavaScript runtime built on Chrome's V8 JavaScript engine.",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      description: "Fast, unopinionated, minimalist web framework for Node.js.",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      description: "NoSQL database program.",
    }
  ]
  const skillsBackend = [
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      description: "JavaScript runtime built on Chrome's V8 JavaScript engine.",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      description: "Fast, unopinionated, minimalist web framework for Node.js.",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      description: "NoSQL database program.",
    },
  ]
 const skillsDatabase = [
   {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      description: "NoSQL database program.",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      description: "Open-source relational database.",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      description: "Open-source relational database management system.",
    },
    {
      name: "SQLite",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
      description: "Self-contained, high-reliability, embedded, full-featured, public-domain SQL database engine.",
    },

 ]
 const skillsDevOps = [
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      description: "Platform for developing, shipping, and running applications in containers.",
    },
    {
      name: "Kubernetes",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      description: "Open-source system for automating deployment, scaling, and management of containerized applications.",
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
      description: "Cloud computing platform provided by Amazon.",
    }
  ]
  const skillsOthers = [
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      description: "Version control system for tracking changes in source code.",
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      description: "Web-based UI/UX design application.",
    },
    {
      name: "Postman",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      description: "API development environment.",
    }
  ]
   const categories = ['Frontend', 'Backend', 'Database', 'DevOps', 'Others'];
  return (
    <section className="p-8 md:p-16  min-h-[60vh]">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-600 dark:text-white">
        Skills & Tools
      </h2>
      <hr />
      <h1 className="text-center  my-9 font-mono">A comprehensive overview of my technical expertise and the tools I work with</h1>
      <div className="flex overflow-x-auto mt-8 space-x-2 justify-evenly">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(category)}
            className={`font-bold py-2 px-4 rounded-lg transition-colors duration-300 ${
              activeCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-black hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {getSkills().map((skill, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-center text-black dark:text-white">
              {skill.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
