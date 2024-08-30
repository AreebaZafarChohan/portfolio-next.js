"use client";
import React, { useEffect} from "react";
import Image from "next/image";

const AboutSection: React.FC = () => {
    useEffect(() => {
        const boxes: NodeListOf<HTMLDivElement> = document.querySelectorAll(".about-box");
    

    const options: IntersectionObserverInit = {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.1, // 10% visible
    };

    const observer: IntersectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {

                (entry.target as HTMLDivElement).classList.add("slide-up");
                observer.unobserve(entry.target); // stop observig once the animation is applied
            }
        });
    }, options);

    boxes.forEach((box) => {
        observer.observe(box);
    });

    return () => {
        boxes.forEach((box) => {
            observer.unobserve(box);
        });
    };

}, []);

  return (
    <section>
        <div className="container mx-auto py-4 px-4">
        <h2 className="lg:text-4xl md:text-4xl text-3xl font-bold text-center ">About <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-500 via-pink-500 to-blue-400 font-serif lg:text-5xl md:text-5xl text-4xl">Me</span></h2>
        
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-4 px-4 xl:gap-16 sm:py-16 xl:px-16">

        <Image
          src="/images/about.jpg"
          alt="About Section Image"
          width={500}
          height={500}
          className="image rounded"
        />
        <div className="mt-4 md:mt-0 text-left flex-col h-full">

          <div className="about-box sm:text-center w-full border-4 rounded-md px-2 py-2 border-double border-purple-600 mb-8 mt-8">
         <div className="sm:text-center w-full border-4 rounded-md px-2 py-2 border-pink-600">
        <p className="lg:text-[1rem] text-base mb-6  block bg-[#121212] pt-4">
            I am Areeba Zafar, a passionate front-end web developer with a
            strong foundation in TypeScript, JavaScript, HTML, CSS, and Node.js.
            <br /> </p>
        </div>
        </div>

        <div className="about-box sm:text-center w-full border-4 rounded-md px-2 py-2 border-double border-purple-600 mb-8 mt-8">
         <div className="sm:text-center w-full border-4 rounded-md px-2 py-2 border-pink-600">
            <p className="lg:text-[1rem] text-base mb-6  block bg-[#121212] pt-4">
            I completed my matriculation at Little Citizen Secondary School,
            achieving an A grade with a 71% score from 2018 to 2020. <br /> Later, I
            pursued intermediate in commerce at Government College for Women,
            Korangi 4, Karachi, where I graduated with an A+ grade and an 80%
            score from 2020 to 2022.
             <br />
            </p>
            </div>
            </div>

            <div className="about-box text-center w-full border-4 rounded-md px-2 py-2 border-double border-purple-600 mb-8  mt-8">
            <div className="w-full border-4 rounded-md px-2 py-2 border-pink-600">
            <p className="lg:text-[1rem] text-base mb-6 block bg-[#121212] pt-4">
            I thrive on new challenges and love working on innovative projects.
            My hobbies include exploring new technologies, playing logical games, and teaching others. I find great joy in motivating people and helping them learn new skills with a strong dedication to learning and growth, I am always eager to expand my knowledge and tackle new projects. My enthusiasm for
            web development and passion for technology drives me to continuously
            improve and take on exciting challenges.
            </p>
            </div>
            </div>
            </div>  
      </div>
      </div>
    </section>
  );
};

export default AboutSection;
