import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const gotoContact = () =>{
    navigate("/contact");
  }

  const skills = [
    { name: "ASP.NET (Web Forms)", value: 85 },
    { name: "React.Js", value: 70 },
    { name: "Node.Js", value: 80 },
    { name: "Java", value: 80 },
    { name: "Spring Boot", value: 60 },
  ];
  const cardItems = [
    {
      count: "2+",
      title: "Years Experience"
    },
    {
      count: "20+",
      title: "Projects Completed"
    },
    {
      count: "8+",
      title: "Technologies"
    }, {
      count: "15+",
      title: "Happy Clients"
    }
  ]

  const totalPercentage = Math.round(
    skills.reduce((sum, skill) => sum + skill.value, 0) / skills.length
  );
  return (

    <>
      <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-white mb-4">
        About Me
      </h2>
      <hr className="text-blue-600 " />
      <section className="flex flex-col-reverse md:flex-row items-center space-x-4 justify-between mt-8">

        <div className="md:w-1/2 text-center md:text-left">
          <p className="max-w-3xl mx-auto text-gray-700 dark:text-white text-lg leading-relaxed">
            I'm a passionate Full Stack Developer with expertise in building modern web applications.
            With a strong foundation in both frontend and backend technologies, I create scalable and efficient solutions
            that solve real-world problems.
            <br />
            <br />
            My experience spans across the entire development stack, from crafting intuitive user interfaces to designing robust backend systems and microservices architecture.
          </p>
          <div className="flex justify-center md:justify-start space-x-6 text-blue-400 mt-8">
            <button className="bg-blue-400 rounded-3xl px-7 py-3 text-white text-[18px] font-semibold hover:bg-blue-500">Download CV</button>
            <button className="border-blue-400 rounded-3xl px-4 py-2 border-2" onClick={gotoContact}>Contact Me</button>

          </div>
        </div>
        <div className="md:w-1/2 md:mb-0">
          <div className="w-full">
            {skills.map((skill) => (
              <div key={skill.name} className="mb-6">
                <div className="flex justify-between mb-3">
                  <h1 className="text-black dark:text-white font-semibold">
                    {skill.name}
                  </h1>
                  <h1 className="text-black dark:text-white font-semibold">
                    {skill.value}%
                  </h1>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-400 rounded-full"
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
            <div className="mt-4">
              <div className="flex justify-between">
                <h1 className="text-black dark:text-white font-semibold">
                  Total Completed
                </h1>
                <h1 className="text-black dark:text-white font-semibold">
                  {totalPercentage}%
                </h1>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-400 rounded-full"
                  style={{ width: `${totalPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center mt-4 flex-wrap">
        {cardItems.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg py-4 m-2 w-full lg:w-1/4 md:w-1/3 sm:w-1/2"
          >
            <h1 className="text-center text-blue-600 dark:text-blue-400 text-3xl font-bold">{item.count}</h1>
            <p className="text-center text-gray-500 dark:text-white">{item.title}</p>
          </div>
        ))}
      </div>

    </>
  );
};

export default About;
