import React from "react";
import SkillsBar from "../skills-bar/SkillsBar";
import ImageSlider from "../image-slider/ImageSlider";

const SkillsSection: React.FC = () => {
  return (
    <section>
      <div className="container mx-auto py-4 px-4">
        <h2 className="lg:text-4xl md:text-4xl text-3xl  font-bold text-center mb-12 text-white">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-500 via-pink-500 to-blue-400 font-serif lg:text-5xl md:text-5xl text-4xl">
            Skills
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="skills-image flex items-center justify-center mb-6 rounded-lg p-2">
            <ImageSlider />
          </div>
          <div className="skills-bar border-4 border-double border-pink-500">
            <SkillsBar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
