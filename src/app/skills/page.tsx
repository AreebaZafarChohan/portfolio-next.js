import React from "react";
import SkillsSection from "../components/skills-section/SkillsSection";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";

const Skills = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
     <BackgroundBeamsWithCollision>
     <div className="container mt-24 mx-auto px-12 py-4">
        <SkillsSection />
      </div>
     </BackgroundBeamsWithCollision>
    </main>
  );
};

export default Skills;
