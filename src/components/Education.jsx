import React from "react";

const Education = () => {
  const educationList = [
    {
  "title": "PhD (Planning)",
  "institution": "To be decided",
  "duration": "2025 - Future"
},
    {
      title: "Master of Computer Application",
      institution: "Sinhgad Institute of Business Administration and Research, Pune",
      duration: "2023 - 2025",
    },
    {
      title: "Bachelor of Computer Application",
      institution: "Ram Sakal Singh Science College, Sitamarhi",
      duration: "2019 - 2023",
    },
    {
      title: "Intermediate (Science)",
      institution: "SRKG College, Sitamarhi",
      duration: "2017 - 2019",
    },
    {
      title: "Matric",
      institution: "Dumra High School",
      duration: "2015 - 2017",
    },
  ];

  return (
    <section className="bg-primary-light dark:bg-primary-dark px-4 py-8 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-blue-600 dark:text-white mb-10">
        Education
      </h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {educationList.map((edu, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-blue-500"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {edu.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{edu.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
