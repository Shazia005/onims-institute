import React, { useState } from "react";
import logo2 from '../assets/img/pharamd.png';
import logo3 from '../assets/img/nurse.png';
import logo4 from '../assets/img/mlt.png';
import logo5 from '../assets/img/lhv.png';
import logo6 from '../assets/img/cmw.png';

const Message = () => {
  const [activeTab, setActiveTab] = useState('chairman');
  const [hoveredTab, setHoveredTab] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleMouseEnter = (tab) => {
    setHoveredTab(tab);
  };

  const handleMouseLeave = () => {
    setHoveredTab(null);
  };

  const getImageForTab = () => {
    switch (activeTab) {
      case 'chairman':
        return logo2; // Pharm. D image
      case 'md':
        return logo3; // BS Nursing image
      case 'mbbs':
        return logo4; // BS MLT image
      case 'bds':
        return logo5; // L.H.V image
      case 'new':
        return logo6; // C.M.W image
      default:
        return null;
    }
  };

  return (
    <section id="teachers4-singel" className="pt-10 pb-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full mt-12 bg-white rounded-lg shadow-lg lg:w-4/5 xl:w-3/4">
            {/* Tab Menu */}
            <div className="flex justify-center border-b border-gray-300 flex-wrap">
              {['chairman', 'md', 'mbbs', 'bds', 'new'].map((tab) => (
                <button
                  key={tab}
                  className={`font-bold w-full sm:w-1/5 text-center py-4 px-4 bg-[#7a1632] cursor-pointer transition duration-300 ease-in-out
                    text-sm sm:text-base md:text-lg lg:text-xl
                    ${activeTab === tab ? 'border-b-2 border-blue-500' : 'border-b-2 border-transparent'}
                    ${hoveredTab === tab ? 'bg-[#7a1632] text-[#ffc600]' : 'bg-[#ffc600] text-[#7a1632]'}`}
                  onClick={() => handleTabClick(tab)}
                  onMouseEnter={() => handleMouseEnter(tab)}
                  onMouseLeave={handleMouseLeave}
                >
                  {tab === 'chairman' && 'Pharm. D'}
                  {tab === 'md' && 'BS Nursing'}
                  {tab === 'mbbs' && 'BS MLT'}
                  {tab === 'bds' && 'L.H.V'}
                  {tab === 'new' && 'C.M.W'}
                </button>
              ))}
            </div>

            {/* Image Display Area */}
            <div className="p-6 flex justify-center">
              <img src={getImageForTab()} alt="Tab related image" className="w-full sm:w-3/4 lg:w-1/2 h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;
