import React from "react";
import SkillsSection from "../components/skills-section/SkillsSection";

const Skills = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mt-24 mx-auto px-12 py-4">
        <SkillsSection />
      </div>
    </main>
  );
};

export default Skills;
