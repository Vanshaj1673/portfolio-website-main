import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, like sending the data to an API or email service
    console.log("Form Data Submitted:", formData);
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      id="footer-section"
      className="flex flex-col md:flex-row justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To Reach Out!
        </h3>
        <ul className="text-sm md:text-xl mt-4">
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

      <form onSubmit={handleSubmit} className="mt-6 md:mt-0 bg-white text-black p-6 rounded-lg shadow-lg w-full md:w-1/3">
        <h2 className="text-xl font-semibold mb-4">Send a Message</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-2 border rounded"
          ></textarea>
        </div>
        <button type="submit" className="bg-[#465697] text-white px-4 py-2 rounded hover:bg-[#35447c] w-full">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Footer;
