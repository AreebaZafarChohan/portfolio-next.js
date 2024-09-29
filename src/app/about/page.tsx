import React from 'react';
import AboutSection from '../components/about-section/AboutSection';

const About = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
    <div className="container mt-24 mx-auto px-12 py-4 mb-12">
        <AboutSection />
    </div>
    </main>
  )
}

export default About;
