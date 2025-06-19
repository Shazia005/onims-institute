import React from "react";
import logo1 from '../assets/img/logo1.png'; // Example logo imports
import logo2 from '../assets/img/logo2.png';
import logo3 from '../assets/img/logo3.png';
import logo4 from '../assets/img/logo4.png';
import logo5 from '../assets/img/logo5.png';

const Blogs = () => {
  return (
    <div>
    {/* Upper Section */}
    <section className="min-h-screen flex flex-col">
    <div className="flex-1 bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Featured Video</h1>
      <div className="flex justify-center">
        <video
          controls
          className="h-80 md:w-3/4 lg:w-1/2"
          src="https://www.example.com/featured-video.mp4"
          alt="Featured Video"
        />
      </div>
    </div>

    <hr />

    {/* Lower Section */}
    <div className="flex-1 bg-gray-100 p-40">
      <h1 className="text-2xl font-bold mb-4 text-center">Video Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 pr-20 pl-20">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="bg-gray-200 overflow-hidden">
            <video
              controls
              className="w-full"
              src={`https://www.example.com/video-${index + 1}.mp4`}
              alt={`Video ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
    </section>
    <section className="w-full py-16 flex justify-center items-center bg-white">
        <div className="flex gap-20">
          <img src={logo1} alt="Logo 1" className="h-20" />
          <img src={logo2} alt="Logo 2" className="h-20" />
          <img src={logo3} alt="Logo 3" className="h-20" />
          <img src={logo4} alt="Logo 4" className="h-20" />
          <img src={logo5} alt="Logo 5" className="h-20" />
        </div>
      </section>
  </div>
  );
};

export default Blogs;
