import React from "react";

const Experience = () => {
  const experienceList = [
    {
  "title": "Full Stack Developer (ASP.NET Web Forms)",
  "company": "Raajsans Solutions Pvt. Ltd",
  "duration": "17th May 2023 - 7th July 2025",
  "description": "Developed 6+ web applications using PHP, Next.js, ASP.NET Web Forms, C#, SQL Server, and MySQL. Collaborated with cross-functional teams to deliver high-quality software solutions."
},
{
  "title": "Trainee Programmer",
  "company": "Edutech Soft Pvt. Ltd.",
  "duration": "1st April 2022 - 1st April 2023",
  "description": "Learned full stack development in ASP.NET Web Forms and worked on various projects."
}
  ];

  return (
    <section className="bg-primary-light dark:bg-primary-dark px-4 py-8 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-10 dark:text-white">
        Experience
      </h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {experienceList.map((exp, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-blue-500"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {exp.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-100">{exp.company}</p>
            <p className="text-gray-500 dark:text-gray-200 text-sm italic mb-2">{exp.duration}</p>
            <p className="text-gray-600 dark:text-gray-300" >{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
