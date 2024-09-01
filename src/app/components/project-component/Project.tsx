"use client";
import React from "react";
import { ProjectCard } from "../project-card/ProjectCard";

const projects = [
  {
    title: "BMI Calculator",
    description:
      "You can check and maintain your weight with this bmi calculator. Here is the link below",
    image: "/images/bmi.jpg",
    url: "https://github.com/AreebaZafarChohan/BMI-Calculator-Project.git",
  },
  {
    title: "Calculator",
    description:
      "I made this calculator with typescript and node.js. Here is the link below",
    image: "/images/calc.jpg",
    url: "https://github.com/AreebaZafarChohan/Node-Projects.git",
  },
  {
    title: "Quiz Website",
    description:
      "I made this website with html css and javascript. In this you can practice with typescript quizzes",
    image: "/images/quiz.jpg",
    url: "https://areebazafarchohan.github.io/Quiz-Website-Step02ToStep03d/",
  },
  {
    title: "ATM",
    description:
      "I made this atm project with typescript and node.js. Here is the link below check i out and share your feedback",
    image: "/images/atm.jpg",
    url: "https://github.com/AreebaZafarChohan/Node-Projects.git",
  },
  {
    title: "Typing Speed Tester",
    description:
      "I made this typing speed tester with typescript and node.js. Test your typing speed and share your feedback",
    image: "/images/typingSpeed.jpg",
    url: "https://github.com/AreebaZafarChohan/Typing-Speed.git",
  },
  {
    title: "Student Management System",
    description:
      "I made this student management system with typescript and node.js. Here is the link below",
    image: "/images/student-manage.jpg",
    url: "https://github.com/AreebaZafarChohan/Node-Projects.git",
  },
  {
    title: "Ecommerce Website",
    description:
      "I made this website with html css and javascript so check it out and share your feedback",
    image: "/images/ecommerce.jpg",
    url: "https://areebazafarchohan.github.io/Hijabayas-Ecommerce-Website ",
  },
  {
    title: "Adventure Game",
    description:
      "I made this adventure game with typescript and node.js. Here is the link below",
    image: "/images/game.jpg",
    url: "https://github.com/AreebaZafarChohan/Node-Projects.git",
  },
  {
    title: "My Portfolio",
    description:
      "I made this portfolio with html css and javascript so check it out and share your feedback",
    image: "/images/portfolio.jpg",
    url: "https://areebazafarchohan.github.io/Portfolio_greenTheme/",
  },
];

const Project: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="lg:text-4xl md:text-4xl text-3xl  font-bold text-center mb-24">
        My{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-500 via-pink-500 to-blue-400 font-serif lg:text-5xl md:text-5xl text-4xl">
          Projects
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
}; 

export default Project;
