import React from "react";
import AboutImg from "../../assets/animated_boy2.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white flex flex-col md:flex-row items-center justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div className="flex flex-col md:flex-row items-center w-full md:justify-start">
        {/* Image Section */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-start mb-6 md:mb-0">
          <img
            className="h-auto w-full md:w-full max-w-xl"
            src={AboutImg}
            alt="About"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-2/3 w-full md:pl-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">My Skill Set</h2>
          
          {/* Skill Items */}
          {[
            {
              title: "Machine Learning",
              description: "Developing models and algorithms to analyze data and make predictions.",
            },
            {
              title: "Cybersecurity",
              description: "Understanding and implementing measures to protect systems and data from cyber threats.",
            },
            {
              title: "MERN Development",
              description: "Building full-stack web applications using MongoDB, Express.js, React.js, and Node.js as a beginner web developer.",
            },
            {
              title: "Problem Solving (DSA)",
              description: "Tackling complex challenges with data structures and algorithms.",
            },
          ].map((skill, index) => (
            <div
              key={index}
              className="flex gap-3 py-4 hover:bg-gray-800 rounded-md transition duration-300"
            >
              <IoArrowForward size={30} className="mt-1" />
              <div className="w-full">
                <h4 className="text-lg md:text-xl font-semibold leading-normal">
                  {skill.title}
                </h4>
                <p className="text-sm md:text-md leading-tight">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}

          <p className="text-sm md:text-md mt-4">
            I thrive in collaborative environments and am always eager to learn and experience new technologies and methodologies. My academic journey and project experiences have equipped me with a strong foundation in both theory and practical applications. I look forward to leveraging my skills and enthusiasm to contribute effectively to dynamic teams and innovative projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
