import React from "react";
import { Link } from "react-scroll";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone } from "react-icons/fa"; // Importing icons

const Footer = () => {
  return (
    <div className="bg-[#7a1632] text-white mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        {/* Contact Us Section */}
        <div className="w-full md:w-1/3 mt-8 md:mt-0 md:ml-0 ml-0">
          <h1 className="font-medium text-xl pb-4">Contact Us</h1>
          <div>
            <p className="flex flex-col gap-2">
              <span className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-geo-alt text-[#ffc600]"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg>
                <span>Canal Road Near Jhambra Bridge Mianwali</span>
              </span>
              <span className="flex items-center space-x-2">
                <FaPhone size={20} className="text-[#ffc600]" />
                <span className="text-sm sm:text-base lg:text-lg">+92 309 88825-01-02-03</span>
              </span>
              <span className="flex items-center space-x-2">
                <a href="mailto:support@care.com" className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-envelope text-[#ffc600]"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                  </svg>
                  <span className="text-sm sm:text-base lg:text-lg">onims.edu.pk</span>
                </a>
              </span>
            </p>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook size={18} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter size={18} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin size={18} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        {/* Location Map Section */}
        <div className="w-full md:w-1/3 mt-8 md:mt-0">
          <h1 className="font-medium text-xl pb-4">Location Map</h1>
          <div className="w-full h-64 bg-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0837838652385!2d-122.41941828468162!3d37.77492927975926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085815c3e4b09f3%3A0x6b004de776ec0e07!2sSan%20Francisco%2C%20CA%2094157%2C%20USA!5e0!3m2!1sen!2sin!4v1642075100665!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Quick Navigation Section */}
        <div className="w-full md:w-1/3 mt-8 md:mt-0 ml-4">
          <h1 className="font-medium text-xl pb-4">Quick Navigation</h1>
          <nav className="flex flex-col gap-2">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer text-sm sm:text-base lg:text-lg"
            >
              About
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer text-sm sm:text-base lg:text-lg"
            >
              Services
            </Link>
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer text-sm sm:text-base lg:text-lg"
            >
              Team
            </Link>
          </nav>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-white text-[#7a1632] py-4 text-center font-bold">
        <p>
          &copy; 2024 Betheme by Muffin group | All Rights Reserved |
        </p>
      </div>
    </div>
  );
};

export default Footer;
