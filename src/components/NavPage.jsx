import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavPage = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div>
      {/* Mobile Menu Toggle */}
      <div className="lg:hidden flex items-center">
        {menu ? (
          <AiOutlineClose size={28} onClick={handleChange} />
        ) : (
          <AiOutlineMenu size={28} onClick={handleChange} />
        )}
      </div>

      {/* Section 3: Navigation Links */}
      <div className="hidden lg:flex bg-white py-3 justify-center">
        <nav className="flex flex-row items-center gap-8 text-[#7a1632] mx-auto">
          <Link to="/home" className="hover:text-[#ffc600] transition-all cursor-pointer font-bold">HOME</Link>
          <Link to="/about" className="hover:text-[#ffc600] transition-all cursor-pointer font-bold">ABOUT US</Link>
          {/* ADMISSION Dropdown */}
          <div className="relative group">
            <button className="hover:text-[#ffc600] transition-all cursor-pointer font-bold">ADMISSION</button>
            <ul className="bg-[#7a1632] absolute hidden group-hover:block shadow-md px-10 text-white">
              <li>
                <Link to="/apply" className="transition-all cursor-pointer block py-2 hover:text-[#ffc600]">HOW TO APPLY?</Link>
              </li>
              <li>
                <Link to="/eligibility" className="transition-all cursor-pointer block py-2 hover:text-[#ffc600]">ELIGIBILITY</Link>
              </li>
              <li>
                <Link to="/timeline" className="transition-all cursor-pointer block py-2 hover:text-[#ffc600]">TIMELINES</Link>
              </li>
            </ul>
          </div>
          <Link to="/doctors" className="hover:text-[#ffc600] transition-all cursor-pointer font-bold">TEAM</Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-white text-red-600 left-0 top-16 text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
        <Link to="/home" onClick={closeMenu} className="hover:text-[#ffc600] transition-all cursor-pointer font-bold">HOME</Link>
        <Link to="/about" onClick={closeMenu} className="hover:text-[#ffc600] transition-all cursor-pointer font-bold">ABOUT US</Link>
        <button className="hover:text-[#ffc600] transition-all cursor-pointer font-bold" onClick={closeMenu}>ADMISSION</button>
        <div className="bg-[#7a1632] shadow-md px-4 text-white">
          <Link to="/apply" onClick={closeMenu} className="block py-2 hover:text-[#ffc600]">HOW TO APPLY?</Link>
          <Link to="/eligibility" onClick={closeMenu} className="block py-2 hover:text-[#ffc600]">ELIGIBILITY</Link>
          <Link to="/timeline" onClick={closeMenu} className="block py-2 hover:text-[#ffc600]">TIMELINES</Link>
        </div>
        <Link to="/doctors" onClick={closeMenu} className="hover:text-[#ffc600] transition-all cursor-pointer font-bold">TEAM</Link>
        
        {/* Contact Button */}
        <Link
          to="/contact"
          onClick={closeMenu}
          className="bg-[#ffc600] text-[#7a1632] font-bold px-6 py-3 rounded-[4px] border-[5px] border-[#ffc600] hover:bg-[#7a1632] hover:text-[#ffc600] transition duration-300 ease-in-out mx-auto"
        >
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default NavPage;
