import React from "react";
import Navbar from "../components/navbar/Navbar";
import SkillsSection from "../components/skills-section/SkillsSection";
import Footer from "../components/footer/Footer";

const Skills = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <SkillsSection />
      </div>
      <Footer />
    </main>
  );
};

export default Skills;
