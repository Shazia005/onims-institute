import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone } from "react-icons/fa"; // Added FaPhone icon
import Contact from "./Contact";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="w-full z-10">
      {/* Section 1: Address, Gmail, Social Media Links */}
      <div className="bg-[#7a1632] text-white py-3 flex flex-col md:flex-row items-center md:gap-40 justify-center md:justify-between px-4 md:px-0">
        <div className="text-center">
          <p className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-geo-alt text-[#ffc600]"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
              <span className="text-sm">Canal Road Near Jhambra Bridge Mianwali</span>
            </span>

            <span className="flex items-center space-x-2">
              <a
                href="http://localhost:5173/home"
                className="flex items-center space-x-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-envelope text-[#ffc600]"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
                <span className="text-sm">onims.edu.pk</span>
              </a>
            </span>
          </p>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook size={16} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter size={16} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin size={16} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram size={18} />
          </a>
        </div>
      </div>

      {/* Section 2: Logo, Phone Number, and Contact Form */}
      <div className="bg-white py-3 flex flex-col md:flex-row justify-between items-center px-4 md:px-80 shadow-sm space-x-0">
        {/* Logo */}
        <div className="flex items-center cursor-pointer space-x-0">
          <Link to="/home">
            <img
              src="./src/assets/img/logo.jpg"
              alt="onims_logo"
              className="h-12"
            />
          </Link>
        </div>

        {/* Phone Number */}
        <div className="flex items-center space-x-0 text-black mt-4 md:mt-0">
          <FaPhone size={25} className="text-[#ffc600]" />
          <span className="text-sm pl-3">
            Need Help? call us. <br />
            <span className="text-lg font-bold text-[#7a1632]">92 309 88825-01-02-03</span>
          </span>
        </div>

        {/* Contact Button */}
        <div className="hidden lg:flex mt-4 md:mt-0">
          <Link
            to="/contact"
            className="bg-[#ffc600] text-[#7a1632] font-bold px-6 py-3 rounded-[4px] border-[5px] border-[#ffc600] hover:bg-[#7a1632] hover:text-[#ffc600] transition duration-300 ease-in-out"
          >
            CONTACT
          </Link>
        </div>
      </div>

      {showForm && <Contact closeForm={closeForm} />}
      <hr />
    </div>
  );
};

export default Navbar;
