"use client";
import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa";
import NavLink from "../navLink/NavLink";
import { navbarLinks } from "../navbar/Navbar";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-cyan-500 to-pink-600 py-6 px-4">
      <div className="container mx-auto flex flex-col items-center">

        {/* Social Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mb-4">
            <a href="https://github.com/AreebaZafarChohan/Node-Projects.git" target="_blank" rel="nooper noreferrer" className="transition-transform transform hover:scale-110 hover:text-black p-2 rounded-full" style={{fontSize: "2rem"}}>
            <FaGithub />
          </a>
          <a href="mailto:areebazafar715@gmail.com" className="transition-transform transform hover:scale-110 hover:text-blue-800 p-2 rounded-full" style={{fontSize: "2rem"}}>
            <FaEnvelope />
            </a>
            <a href="https://www.instagram.com/arenab_bazar?igsh=YmNtamVhNGlhaDY0" target="_blank" rel="nooper noreferrer" className="transition-transform transform hover:scale-110 p-2 hover:text-pink-700 rounded-full" style={{fontSize: "2rem"}}>
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/areeba-zafar-973917303/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BIJHCvgutQCKAZjoSHjrRig%3D%3D" target="_blank" rel="nooper noreferrer" className="transition-transform transform hover:scale-110 hover:text-blue-700 p-2 rounded-full" style={{fontSize: "2rem"}}>
            <FaLinkedin />
          </a>
        </div>
        {/* Navigation Links */}
        <div className='menu md:w-auto pt-6 pr-6' id='navbar'>
            <ul className='flex flex-col sm:flex-row justify-center items-center md:p-0 md:space-x-8 mt-0'>
               {
                navbarLinks.map((link, index) => (
                    <li key={index} id="footer-li">
                        <NavLink href={link.path} title={link.title} isFooter={true}/>
                    </li>
                ))
               }
            </ul>
        </div>
        { /* Rights Reserved */ }
        <p className="text-sm mt-6 text-black font-semibold"> &copy; {new Date().getFullYear()} Areeba Zafar | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
