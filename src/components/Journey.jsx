import React, { useState } from "react";

const Journey = () => {
  const [activeTab, setActiveTab] = useState("Work");

  const data = {
    Work: [
      {
        company: "Raajsans Solutions Pvt. Ltd",
        role: "Full Stack Developer(ASP.NET Web Forms)",
        location: "Hybrid Work",
        date: "17th May 2023 - 7th July 2025",
        description:
          "Developed 6+ web applications using php, Next.Js, ASP.NET Web Forms, C#, and SQL Server, MySQL. Collaborated with cross-functional teams to deliver high-quality software solutions.",
        logo: "https://raajsans.org/img/styleswitcher/logos/yellow.png",
        icon: "👨‍💻",
      },
      {
        company: "Edutech Soft Pvt. Ltd.",
        role: "Trainee Programmer",
        location: "Office Work",
        date: "1st April 2022 - 1st April 2023",
        description: "Learned full statck development in ASP.NET Web Forms and worked on various projects.",
        logo: "http://www.edutechsoft.org/assets/images/favicon.ico",
        icon: "👨‍💻",
      },
    ],
    Education: [
       
  
  
  {
    "School/College": "SPPU Pune University",
    "Degree": "Master of Computer Applications (MCA)",
    "location": "Pune, Maharashtra",
    "date": "2023 - 2025",
    "description": "Pursuing MCA from SPPU Pune University.",
    "logo": "https://th.bing.com/th/id/OIP.guHXoFOmLsYi-Yp5aOla_AAAAA?w=239&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    "icon": "🎓"
  },
   {
    "School/College": "BRABU University",
    "Degree": "Bachelor of Computer Applications (BCA)",
    "location": "Bihar, India",
    "date": "2019 - 2023",
    "description": "Graduated with BCA under BRABU University.",
    "logo": "https://brabu.ac.in//Content/assets/img/favicons/favicon-16x16.png",
    "icon": "🎓"
  },
  {
    "School/College": "SRKG College, Sitamarhi",
    "Degree": "Intermediate",
    "location": "Bihar, India",
    "date": "2017 - 2019",
    "description": "Completed Intermediate under BSEB Board.",
    "logo": "https://www.bing.com/th/id/OIP.RkRbyp_IsH3GmRPN3zMlHgHaHa?w=160&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    "icon": "🎓"
  },
  {
    "School/College": "High School Dumra",
    "Degree": "Matriculation",
    "location": "Bihar, India",
    "date": "2016 - 2017",
    "description": "Completed Matriculation under BSEB Board.",
    "logo": "https://www.bing.com/th/id/OIP.RkRbyp_IsH3GmRPN3zMlHgHaHa?w=160&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    "icon": "🎓"
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
