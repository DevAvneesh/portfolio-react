import React, { useState } from "react";

const Journey = () => {
  const [activeTab, setActiveTab] = useState("Work");

  const data = {
    Work: [
      {
        company: "Zemoso Technologies",
        role: "Java Full Stack Developer",
        location: "Remote Work",
        date: "17th April 2024 - 10th December 2024",
        description:
          "Developed a loan management application using React.js, TypeScript, and Material UI with responsive design.",
        logo: "https://media.licdn.com/dms/image/C560BAQFwM9v8e93k5w/company-logo_200_200/0/1630574298043?e=2147483647&v=beta&t=vZ3AqaGqB-eG7-Mu5hmNQJq6urznBoGT-KMKb3zbnGg",
        icon: "👨‍💻",
      },
      {
        company: "SysIntelli",
        role: "AI Intern",
        location: "Onsite",
        date: "1st Jan 2024 - 1st April 2024",
        description: "Worked on chatbot systems and built ML models using Python and NLP libraries.",
        logo: "https://www.sysintelli.com/img/logo.png",
        icon: "👨‍💻",
      },
    ],
    Education: [
      {
        company: "ABC Institute of Technology",
        role: "Master of Computer Applications",
        location: "Bangalore, India",
        date: "2022 - 2024",
        description: "Specialized in full stack development and data science.",
        logo: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
        icon: "🎓",
      },
    ],
  };

  const tabs = ["All", "Work", "Education"];

  const filteredItems =
    activeTab === "All"
      ? [...data.Work, ...data.Education]
      : data[activeTab];

  return (
    <div className="text-blue-600 dark:text-white py-16 px-4 min-h-screen">
      <h2 className="text-4xl font-bold text-center">Journey</h2>
      <p className="text-center text-gray-600 dark:text-white mt-2 mb-8">
        My professional journey and educational background
      </p>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full font-medium shadow-sm transition-all ${
              activeTab === tab
                ? "bg-blue-500 text-white shadow-md"
                : "bg-white text-gray-700 border"
            }`}
          >
            {tab}{" "}
            {tab === "Work"
              ? "👨‍💻"
              : tab === "Education"
              ? "🎓"
              : ""}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto before:content-[''] before:absolute before:left-1/2 before:top-0 before:h-full before:border-l-2 before:border-blue-300">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className={`mb-10 flex items-start ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            }`}
          >
            <div className="w-1/2 px-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                <div className="flex items-center mb-2">
                  <img
                    src={item.logo}
                    alt="logo"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.company}</h3>
                    <p className="text-blue-500 text-sm">{item.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-500 text-sm mb-1">{item.location}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{item.date}</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{item.description}</p>
              </div>
            </div>
            {/* Center Icon */}
            <div className="w-0 relative">
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white dark:bg-primary-dark border-2 border-blue-500 rounded-full w-10 h-10 flex items-center justify-center text-xl">
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journey;
