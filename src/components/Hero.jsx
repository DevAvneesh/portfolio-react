import React from "react";
import AvneeshProflePhoto from "../assets/images/AvneeshProfilePhoto.jpeg"; 
const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between  min-h-[80vh]">
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl ont-semibold font-bold mb-6 text-blue-600 dark:text-blue-400">Welcome to my portfolio</h2>
        <h1 className="text-5xl font-bold text-black dark:text-white mb-4">Hi, I'm <span className="text-blue-600 dark:text-blue-400 text-wrap">Avneesh Kumar</span> </h1>
        <h2 className="text-2xl font-semibold mb-6">Full Stack Developer</h2>
        <p className="text-gray-700 dark:text-white mb-6 max-w-lg mx-auto md:mx-0">
          Passionate developer focused on building scalable and efficient web applications.
        </p>
        <div className="flex justify-center md:justify-start space-x-6 text-blue-400 ">
          <button className="bg-blue-400 rounded-3xl px-7 py-3 text-white text-[18px] font-semibold hover:bg-blue-500">View My Work</button>
          <button className="border-blue-400 rounded-3xl px-4 py-2 border-2">Contact Me</button>

        </div>
      </div>
      <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
         <img
          src={AvneeshProflePhoto}
          alt="Avneesh Kumar"
          className="rounded-full w-72 h-72 object-cover shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
