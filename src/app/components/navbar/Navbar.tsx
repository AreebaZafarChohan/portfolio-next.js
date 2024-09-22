"use client";
import React, { useState }  from 'react';
import Link from 'next/link';
import NavLink from '../navLink/NavLink';
import { Bars3Icon, XMarkIcon} from "@heroicons/react/16/solid";
import MenuOverlay from '../menuOverlay/MenuOverlay';
import Image from 'next/image';

export const navbarLinks = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Skills",
        path: "/skills"
    },
    {
        title: "Projects",
        path: "/my-projects"
    },
    {
        title: "Contact",
        path: "/contact"
    },
]

const Navbar = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false); 
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
      <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
      <Link href={"./"} className=' bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500 rounded-full p-1'>
      <Image 
      src="/images/logo.jpg"
      alt="Logo Image"
      width={40}
      height={5} 
      className='rounded-full image'
      />
      </Link>
        <div className='block md:hidden'>
           {!isNavbarOpen? (
            <button onClick={() => setIsNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-pink-500 hover:border-purple-700'>
                <Bars3Icon className="h-5 w-5" />
            </button>
           ): (
            <button onClick={() => setIsNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-pink-500 hover:border-purple-700'>
                <XMarkIcon className="h-5 w-5" />
            </button>
           )}
        </div>
        <div className='hidden md:flex md:space-x-8 pt-6 pr-6' id='navbar'>
            <ul className='flex items-center'>
               {
                navbarLinks.map((link, index) => (
                    <li key={index}>
                        <NavLink href={link.path} title={link.title} />
                    </li>
                ))
               }
            </ul>
        </div>
      </div>
      {isNavbarOpen? <MenuOverlay links={navbarLinks}/>: null }
    </nav>
  )
}

export default Navbar;
