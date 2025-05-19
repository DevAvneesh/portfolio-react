import React from "react";

const Experience = () => {
  const experienceList = [
    {
      title: "Software Developer",
      company: "XYZ Corporation",
      duration: "Jan 2022 - Present",
      description:
        "Developing and maintaining web applications, collaborating with cross-functional teams to deliver quality software solutions.",
    },
    {
      title: "Intern",
      company: "ABC Solutions",
      duration: "Jun 2021 - Dec 2021",
      description:
        "Assisted in frontend and backend development, wrote unit tests, and helped improve app performance.",
    },
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
