import React from 'react';
import logo1 from '../assets/img/logo1.png'; // Example logo imports
import logo2 from '../assets/img/logo2.png';
import logo3 from '../assets/img/logo3.png';
import logo4 from '../assets/img/logo4.png';
import logo5 from '../assets/img/logo5.png';

const Timeline = () => {
  return (
    <div>
      {/* Header Section */}
      <section className="h-[30vh] flex flex-col justify-center lg:px-32 px-5 text-[#ffc600] bg-[url('assets/img/num.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="w-full lg:w-4/5 font-bold space-y-5 mt-10 mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            TIMELINES
          </h1>
        </div>
      </section>

      {/* Timelines Section */}
      <section className="flex flex-col items-center justify-center h-[40vh] bg-gray-100 py-12">
        <h2 className="text-3xl font-bold text-center mb-4">
          Proposed Timelines for admission process <br />
          Admissions Closed
        </h2>
        <p className="text-sm text-center text-gray-700 max-w-2xl">
          ONIMS-OBAID NOOR INSTITUTE OF MEDICAL SCIENCE
        </p>
      </section>

      <hr />

      {/* Logos Section */}
      <section className="w-full py-16 flex justify-center items-center bg-white">
        <div className="flex flex-wrap justify-center gap-10">
          <img src={logo1} alt="Logo 1" className="h-20 w-auto" />
          <img src={logo2} alt="Logo 2" className="h-20 w-auto" />
          <img src={logo3} alt="Logo 3" className="h-20 w-auto" />
          <img src={logo4} alt="Logo 4" className="h-20 w-auto" />
          <img src={logo5} alt="Logo 5" className="h-20 w-auto" />
        </div>
      </section>
    </div>
  );
};

export default Timeline;
