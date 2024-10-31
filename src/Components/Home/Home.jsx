import React from "react";
import avatarImg from "../../assets/animated_boy1.png";
import TextChange from "../TextChange";

const Home = () => {
  const scrollToFooter = () => {
    const footerSection = document.getElementById("footer-section");
    if (footerSection) {
      footerSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-3/5 md:pt-10 hover:scale-105 transition-transform duration-300"> {/* Hover effect for text section */}
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter hover:text-gray-300 transition-colors duration-300">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight hover:text-gray-300 transition-colors duration-300">
          <br />
          A third-year Computer Science Engineering student with a strong interest in web development and machine learning. I am committed to expanding my technical knowledge in these areas and applying my skills to create innovative and effective solutions.
        </p>
        <button
          className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] transition-transform duration-300"
          onClick={scrollToFooter}
        >
          Contact Me
        </button>
      </div>
      <div className="md:w-2/5 flex justify-center hover:scale-105 transition-transform duration-300"> {/* Hover effect for image section */}
        <img className="h-48 w-48 md:h-64 md:w-64 object-cover transition-transform duration-300 hover:scale-110" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
