import React from 'react';
import Navbar from '../components/navbar/Navbar';
import AboutSection from '../components/about-section/AboutSection';
import Footer from '../components/footer/Footer';

const About = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
    <div className="container mt-24 mx-auto px-12 py-4 mb-12">
        <AboutSection />
    </div>
    <Footer />
    </main>
  )
}

export default About;
