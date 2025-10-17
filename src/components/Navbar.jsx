import React, { useRef, useState } from 'react';
import Logo from '../assets/Gemini_Generated_Image_7eumcz7eumcz7eum.png';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';
import { FaGithub, FaMedium, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  useGSAP(() => {
    gsap.from(navbarRef.current, {
      opacity: 0,
      y: -100,
      duration: 0.6
    });
  });

  return (
    <>
      <nav ref={navbarRef} className='fixed top-0 z-30 w-full mix-blend-difference'>
        <div className='main-container py-4 flex justify-between items-center'>

          {/* Logo */}
          <Link to='/'>
            <img src={Logo} alt="Logo" className='h-10 w-auto' />
          </Link>

          {/* Desktop Links with dividers */}
          <div className="hidden lg:flex items-center text-white">
            <Link to="/" className="px-4 hover:text-[#ffd439] transition">Home</Link>
            <span className="border-l border-gray-500 h-6 mx-2"></span>

            <Link to="/projects" className="px-4 hover:text-[#ffd439] transition">Projects</Link>
            <span className="border-l border-gray-500 h-6 mx-2"></span>

            <a href="mailto:johndoe@gmail.com" className="px-4 hover:text-[#ffd439] transition">Contact</a>
            <span className="border-l border-gray-500 h-6 mx-2"></span>

            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="px-4 flex items-center gap-1 hover:text-[#ffd439] transition">
              <FaGithub /> GitHub
            </a>
            <span className="border-l border-gray-500 h-6 mx-2"></span>

            <a href="https://medium.com/@yourusername" target="_blank" rel="noopener noreferrer" className="px-4 flex items-center gap-1 hover:text-[#ffd439] transition">
              <FaMedium /> Medium
            </a>
            <span className="border-l border-gray-500 h-6 mx-2"></span>

            <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="px-4 flex items-center gap-1 hover:text-[#ffd439] transition">
              <FaLinkedin /> Linkedin
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden flex flex-col gap-1.5 cursor-pointer relative z-40">
            <span className={`inline-block w-10 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[4px]" : ""}`}></span>
            <span className={`inline-block w-10 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[4px]" : ""}`}></span>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed z-20 inset-0 bg-black text-white flex flex-col items-center justify-center text-3xl gap-8 transition-transform duration-500 ${menuOpen ? "translate-y-0" : "-translate-y-full"}`}
        onClick={() => setMenuOpen(false)}
      >
        {/* Mini social links inside mobile menu */}
        <div className="flex gap-4 mb-8 text-2xl">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition">
            <FaGithub />
          </a>
          <a href="https://medium.com/@yourusername" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition">
            <FaMedium />
          </a>
          <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition">
            <FaLinkedin />
          </a>
        </div>

        {/* Main mobile menu links */}
        <Link to="/" className='menu-link'>Home</Link>
        <Link to="/projects" className='menu-link'>Projects</Link>
        <a href="mailto:johndoe@gmail.com" className='menu-link'>Contact</a>
      </div>
    </>
  );
};

export default Navbar;
