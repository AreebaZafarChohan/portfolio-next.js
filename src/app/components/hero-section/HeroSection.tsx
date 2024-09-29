"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 ">
        <div className="col-span-7 place-self-center text-center sm:text-left mb-4">
          <h1 className="mb-6 font-extrabold sm:text-5xl lg:text-6xl text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-600 to-purple-500">
         <span className="text-white text-3xl md:text-5xl lg:text-6xl">
            Hi, I am{" "}
            </span>
            <br />
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Areeba Zafar',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
        'TypeScript Developer',
        1000,
        'Teacher Assistant',
        1000
      ]}
      wrapper="span"
      speed={40}
      repeat={Infinity}
      className="text-3xl md:text-5xl lg:text-6xl"
    />
          </h1>
          <p className="lg:text-lg text-base sm:text-lg mb-6 text-white">
            a passionate front-end web developer. I have honed my skills in a
            variety of technologies, including TypeScript, JavaScript, HTML,
            CSS, and Node.js. I love creating clean, efficient, and responsive
            websites that provide a great user experience. Whether it is coding
            up a new feature or optimizing performance, I am always eager to take
            on new challenges and continue learning in this ever-evolving field.
          </p>
        <div>
            <button className="sm:text-center w-full lg:w-[8rem] px-4 py-3 rounded-full mr-3 sm:w-fit font-semibold bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 text-white"> Contact</button>

            <button  className="sm:text-center w-full lg:w-[8rem] px-1 py-1 rounded-full mr-3 sm:w-fit font-semibold mt-3 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 hover:bg-slate-800"> <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 text-white"> Hire Me</span> </button>
        </div>
        </div>
        <div className="col-span-5 place-self-center lg:mt-0 mt-4 ">
          <div
            className="rounded-full bg-[#181818] lg:w-[400px] lg:h-[400px]
            w-[250px] h-[250px] relative hover:animate-pulse"
          >
            <Image
              src="/images/home.jpg"
              alt="Hero Section Image"
              width={350}
              height={350}
              className="transition-shadow duration-300 ease-in hover:shadow-[0_0_8px_6px_rgba(182,27,79)] rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
