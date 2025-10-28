import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/ChatGPT_Image_Oct_28__2025__11_02_55_AM-removebg-preview.png'

const Footer: React.FC = () => {
  return (
    <>
      {/* Divider */}
      <div className="max-w-[1500px] m-auto h-[1px] bg-white opacity-10" />

      {/* Footer Top */}
      <footer className="main-container grid md:grid-cols-2 lg:grid-cols-4 gap-10 py-20">
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
        </Link>
        <div>
          <h5 className="font-medium mb-5">Services</h5>
          <ul className="flex flex-col gap-2 text-base lg:text-lg">
            <li>
              <a href="">Web Design</a>
            </li>
            <li>
              <a href="">UI / UX</a>
            </li>
            <li>
              <a href="">Web Development</a>
            </li>
            <li>
              <a href="">Branding</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium mb-5">Accessibility</h5>
          <ul className="flex flex-col gap-2 text-base lg:text-lg">
            <li>Mon - Fri: 10:00 - 9:00</li>
            <li>24/7 WhatsApp & Email</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium mb-5">Contact</h5>
          <ul className="flex flex-col gap-2 text-base lg:text-lg">
            <li>shubhampanchal9988@gmail.com</li>
            <li>(+91) 7621006587</li>
          </ul>
        </div>
      </footer>

      {/* Divider */}
      <div className="max-w-[1500px] m-auto h-[1px] bg-white opacity-10" />

      {/* Footer Bottom */}
      <div className="flex justify-center align-center main-container  py-6 lg:py-8 max-md:text-center">
        <div className="text-base lg:text-lg">© 2025 JD | All rights reserved 🤍</div>
      </div>
    </>
  )
}

export default Footer
