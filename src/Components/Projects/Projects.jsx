import React from "react";
import ProjectCard from "./ProjectCard";
import portfolioImg from "../../assets/portfolio.jpeg";
import ticketBookingImg from "../../assets/movie_ticket_logo.png";
import netflixCloneImg from "../../assets/Netflix.jpg";
import studySyncImg from "../../assets/study_sync.jpeg";
import mlProjectImg from "../../assets/machine_learning_logo.jpg";
import ecomProjectImg from "../../assets/online_store_logo.png";

// Import video files
import portfolioVideo from "../../assets/Portfolio_Demo.mp4"; 
import ticketBookingVideo from "../../assets/movie_ticket_demo.mp4";
import netflixCloneVideo from "../../assets/Netflix_Demo.mp4";
import studySyncVideo from "../../assets/StudyProject_Demo.mp4";
import mlProjectVideo from "../../assets/Movie_Recommendation_Demo.mp4";
import ecomProjectVideo from "../../assets/e-commerce_demo.mp4";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Portfolio Website"
          main="This is my portfolio website made using React JS, HTML, CSS, Tailwind, and JavaScript."
          image={portfolioImg} // Project image
          demoVideo={portfolioVideo} // Video source
          sourceCodeLink="https://github.com/Vanshaj1673/Portfolio"
        />
        <ProjectCard
          title="Online Movie Ticket Booking System"
          main="A full-stack web application using HTML, CSS, and JS for frontend, MySQL for database, and PHP for backend."
          image={ticketBookingImg} // Project image
          demoVideo={ticketBookingVideo} // Video source
          sourceCodeLink="https://github.com/Vanshaj1673/Online_Movie_Ticket_Book_System"
        />
        <ProjectCard
          title="Netflix Clone"
          main="Created a Netflix clone using HTML, CSS, and Bootstrap."
          image={netflixCloneImg} // Project image
          demoVideo={netflixCloneVideo} // Video source
          sourceCodeLink="https://github.com/Vanshaj1673/Netflix-Clone"
        />
        <ProjectCard
          title="Study Sync Project"
          main="Created a Study Sync Project using HTML and CSS."
          image={studySyncImg} // Project image
          demoVideo={studySyncVideo} // Video source
          sourceCodeLink="https://github.com/Vanshaj1673/Study_Sync_Project"
        />
        <ProjectCard
          title="ML Project"
          main="Created a Movie Recommendation System in Python using concepts of Machine Learning like Cosine Similarity."
          image={mlProjectImg} // Project image
          demoVideo={mlProjectVideo} // Video source
          sourceCodeLink="https://github.com/Vanshaj1673/ML_Movie-Reccomendation-System"
        />
        <ProjectCard
          title="E-Commerce Project"
          main="Created an E-Commerce project using PHP as backend and HTML, CSS, and JavaScript in the frontend."
          image={ecomProjectImg} // Project image
          demoVideo={ecomProjectVideo} // Video source
          sourceCodeLink="https://github.com/Vanshaj1673/e-commerce"
        />
      </div>
    </div>
  );
};

export default Projects;
