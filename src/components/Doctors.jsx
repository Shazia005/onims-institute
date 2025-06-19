import React, { useState } from "react";
import logo2 from '../assets/img/chief.png';
import logo3 from '../assets/img/logo1.png';
import logo4 from '../assets/img/about.jpg';
import logo5 from '../assets/img/blog5.jpg';
import logo6 from '../assets/img/blog6.jpg';

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
        return logo2;
      case 'md':
        return logo3;
      case 'mbbs':
        return logo4;
      case 'bds':
        return logo5;
      case 'new':
        return logo6;
      default:
        return null;
    }
  };

  const getTextForTab = () => {
    switch (activeTab) {
      case 'chairman':
        return (
          <>
            <h1 className="text-2xl font-bold mb-4">Chief Executive Message</h1>
            <h2 className="text-xl font-semibold mb-4">Dear students, faculty members and staff,</h2>
            <p className="text-sm">No word can express my feelings while writing these lines for my very brilliant students and honorable faculty of OBAID NOOR INSTITUTE OF MEDICAL SCIENCES. Being part of you is a great honor and privilege indeed, I am simply humbled and grateful to Almighty! The existence of OBAID NOOR INSTITUTE OF MEDICAL SCIENCES brought the pleasant ever news for the people of the region...</p>
          </>
        );
      case 'md':
        return (
          <>
            <h1 className="text-2xl font-bold mb-4">Welcome to Oabid Noor Hospital</h1>
            <p className="text-sm">Located in prime location of Mianwali, Obaid Noor Hospital is an innovative model of healthcare that provides comprehensive healthcare to patients with simple to complicated health issues...</p>
          </>
        );
      case 'mbbs':
        return (
          <>
            <h1 className="text-2xl font-bold mb-4">About Life @ ONIMS</h1>
            <p className="text-sm">The department of Student Life, within the division of Student Affairs, is a partner in the educational process and serves to fulfill the mission of student leadership program of ONIMS...</p>
          </>
        );
      case 'bds':
        return (
          <>
            <h1 className="text-2xl font-bold mb-4">ONIMS-VISION</h1>
            <p>To become a leading educational and research institute producing knowledgeable, intellectual and skilled professionals of international standards...</p>
          </>
        );
      case 'new':
        return (
          <>
            <h1 className="text-2xl font-bold mb-4">ONIMS-MISSION</h1>
            <p>To improve the healthcare system and quality of life of the individuals through provision of the highly trained, skill full, knowledgeable, innovative and dedicated healthcare professionals...</p>
          </>
        );
      default:
        return "";
    }
  };

  return (
    <section id="teachers4-singel" className="pt-10 pb-20 bg-gray-200">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl mt-12 bg-white rounded-lg shadow-lg">
            {/* Tab Menu */}
            <div className="flex justify-center border-b border-gray-300">
              {['chairman', 'md', 'mbbs', 'bds', 'new'].map((tab) => (
                <button
                  key={tab}
                  className={`text-sm font-bold flex-1 text-center py-6 px-4 bg-[#7a1632] cursor-pointer transition duration-300 ease-in-out
                    ${activeTab === tab ? 'border-b-2 border-blue-500' : 'border-b-2 border-transparent'}
                    ${hoveredTab === tab ? 'bg-[#7a1632] text-[#ffc600]' : 'bg-[#ffc600] text-[#7a1632]'}`}
                  onClick={() => handleTabClick(tab)}
                  onMouseEnter={() => handleMouseEnter(tab)}
                  onMouseLeave={handleMouseLeave}
                >
                  {tab === 'chairman' && 'CHIEF EXECUTIVE'}
                  {tab === 'md' && '@ WELCOME'}
                  {tab === 'mbbs' && 'ABOUT ONIMS'}
                  {tab === 'bds' && 'ONIMS-VISION'}
                  {tab === 'new' && 'ONIMS-MISSION'}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="p-6 flex flex-col md:flex-row">
              {/* Image Section (Left) */}
              <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                <img src={getImageForTab()} alt="Tab related image" className="w-3/4 md:w-full h-auto rounded-lg" />
              </div>

              {/* Text Section (Right) */}
              <div className="w-full md:w-2/3 md:pl-10 flex items-center">
                <div className="text-gray-700 text-lg">
                  {getTextForTab()}
                </div>
              </div>
            </div>

            {/* Rectangle Box at the Bottom */}
            <div className="p-4 bg-gray-100 border border-gray-300 mx-4 mb-4">
              <h2 className="text-xl font-semibold mb-2">Dr. Isabella</h2>
              <p>May Allah bless our efforts in character building, respect and love for each other. All these qualities are the hallmark of our institution.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;
