// footer.jsx
import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="footer-section" // Set a clear, unique ID here
      className="flex flex-col md:flex-row justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To Reach Out!
        </h3>
      </div>
      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          <a href="mailto:vanshajsharma16@gmail.com" className="hover:underline">
            vanshajsharma16@gmail.com
          </a>
        </li>
        <br />
        <li className="flex gap-1 items-center">
          <CiLinkedin size={20} />
          <a
            href="http://linkedin.com/in/vanshaj-sharma16"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            http://linkedin.com/in/vanshaj-sharma16
          </a>
        </li>
        <br />
        <li className="flex gap-1 items-center">
          <FaGithub size={20} />
          <a
            href="https://github.com/Vanshaj1673"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            https://github.com/Vanshaj1673
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
