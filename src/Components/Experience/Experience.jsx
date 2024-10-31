import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact, FaPython, FaCheckCircle } from "react-icons/fa";
import { SiCplusplus, SiC, SiMysql } from "react-icons/si";
import internPeLogo from "../../assets/InternPe_Logo.jpeg";
import jycLogo from "../../assets/JYC_Logo.jpeg";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        {/* Skills Section */}
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transition-transform duration-300 transform hover:scale-110">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transition-transform duration-300 transform hover:scale-110">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transition-transform duration-300 transform hover:scale-110">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transition-transform duration-300 transform hover:scale-110">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transition-transform duration-300 transform hover:scale-110">
            <SiCplusplus color="#00599C" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transition-transform duration-300 transform hover:scale-110">
            <FaPython color="#3776AB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transition-transform duration-300 transform hover:scale-110">
            <SiC color="#A8B9CC" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transition-transform duration-300 transform hover:scale-110">
            <SiMysql color="#4479A1" size={50} />
          </span>
        </div>

        {/* Experience Section */}
        <div className="md:w-2/5">
          <div className="flex gap-6 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-6 items-start transition-transform duration-300 transform hover:scale-105">
            <img src={internPeLogo} alt="InternPe Logo" className="w-16 h-16 transition-transform duration-300 transform hover:scale-110" />
            <div className="text-white">
              <h2 className="text-lg font-semibold text-blue-400">Front End Developer Intern</h2>
              <p className="text-sm italic text-gray-300 mt-1 mb-2">Internpe - June 2024 to July 2024</p>
              <ul className="text-sm pl-4 space-y-2">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-400 mt-1" />
                  <span>Developed and maintained front-end features using HTML, CSS, and JavaScript.</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-400 mt-1" />
                  <span>Collaborated with the development team to enhance UI components and improve user experience.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex gap-6 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-6 items-start transition-transform duration-300 transform hover:scale-105">
            <img src={jycLogo} alt="JYC Logo" className="w-16 h-16 transition-transform duration-300 transform hover:scale-110" />
            <div className="text-white">
              <h2 className="text-lg font-semibold text-blue-400">Head Coordinator of Koshish Club</h2>
              <p className="text-sm italic text-gray-300 mt-1 mb-2">JUIT - Present</p>
              <ul className="text-sm pl-4 space-y-2">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-400 mt-1" />
                  <span>Lead initiatives to provide free education to underprivileged school students.</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-400 mt-1" />
                  <span>Coordinate efforts to organize workshops and study sessions to ensure quality learning opportunities.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
