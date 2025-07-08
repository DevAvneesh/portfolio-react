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
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    description: "React framework for server-side rendering and static website generation.",
  },
  {
    name: "ASP.NET Web Forms",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
    description: "Web UI framework for building dynamic web applications in .NET.",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    description: "Standard markup language for creating web pages.",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    description: "Style sheet language used for describing the look of a document.",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    description: "Utility-first CSS framework for building custom designs rapidly.",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    description: "Popular framework for building responsive, mobile-first websites.",
  }
];

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
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    description: "Popular general-purpose scripting language especially suited to web development.",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    description: "Relational database management system.",
  },
  {
    name: "SQL Server",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
    description: "Relational database management system developed by Microsoft.",
  },
  {
    name: "ASP.NET Web Forms",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
    description: "Framework for building dynamic web pages with .NET technology.",
  },
  {
    name: "C#",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    description: "Modern, object-oriented programming language developed by Microsoft.",
  }
];

 const skillsDatabase = [
  {
      name: "Firebase Firestore",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      description: "Cloud-hosted NoSQL database that lets us store and sync data between users and devices in real time.",
    },
   {
      name: "MS SQL Server",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
      description: "Renational database management system developed by Microsoft.",
    },
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
    name: "cPanel/WHM",
    icon: "https://img.icons8.com/ios-filled/50/000000/server.png", // Generic server icon
    description: "Web hosting management tools for managing websites, emails, and databases.",
  },
  {
    name: "DirectAdmin",
    icon: "https://img.icons8.com/ios/50/000000/dashboard.png", // Generic dashboard icon
    description: "Control panel for web hosting administration tasks and website management.",
  },
  {
    name: "VPS & Dedicated Servers",
    icon: "https://img.icons8.com/ios-filled/50/000000/cloud-server.png",
    description: "Managing Virtual Private Servers and Dedicated Servers, including configuration and security.",
  },
  {
    name: "Domain & DNS Management",
    icon: "https://img.icons8.com/ios/50/000000/domain.png",
    description: "Handling domain registration, DNS records, and SSL certificates for hosting and services.",
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
    },
    {
      name: "Windows Server",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
      description: "MS Windows Server to host my projects.",
    },
    {
      name: "Dimains & Hosting",
      icon: "https://img.icons8.com/ios/50/000000/domain.png",
      description: "I have the knowledge to purchase domains and link then with hosting services.",
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      description: "Google's mobile plateform that helps us to develop applications quickly.",
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
