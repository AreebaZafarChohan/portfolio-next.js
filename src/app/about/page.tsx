import React from 'react';
import AboutSection from '../components/about-section/AboutSection';
import { BackgroundBeamsWithCollision } from '../components/ui/background-beams-with-collision';

const About = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <BackgroundBeamsWithCollision>
      <div className="container mt-24 mx-auto px-12 py-4 mb-12">
        <AboutSection />
    </div>
      </BackgroundBeamsWithCollision>
    </main>
  )
}

export default About;
