import React from 'react';
import logo1 from '../assets/img/logo1.png'; // Example logo imports
import logo2 from '../assets/img/logo2.png';
import logo3 from '../assets/img/logo3.png';
import logo4 from '../assets/img/logo4.png';
import logo5 from '../assets/img/logo5.png';

const Apply = () => {
  return (
    <div>
      {/* Header Section */}
      <section className="h-[30vh] flex flex-col justify-center lg:px-32 px-5 text-[#ffc600] bg-[url('assets/img/num.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="w-full lg:w-4/5 font-bold space-y-5 mt-10 mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">APPLY NOW</h1>
        </div>
      </section>

      {/* Application Instructions Section */}
      <section className="pt-6 pb-12 bg-[#ffc600] opacity-90">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h1 className="text-xl font-semibold text-gray-800 mt-6 mb-4">How to Apply?</h1>
            <ol className="list-decimal list-inside text-gray-700 max-w-2xl">
              <li>
                Download Application Form. 
                <a href="https://onims.edu.pk/wp-content/uploads/2022/11/Admission-Form.pdf" className="text-blue-500 hover:underline"> Click Here</a>
              </li>
              <li>Submit Application Fee (1,500/-) by Hand at Institute or at Soneri Bank LTD. (Branch Code 0313 Wattakhel Chowk Mianwali AC#. 20008848565).</li>
              <li>Submit Admission Form and Fee Challan with Attested Copies of Documents at Institute or send by post to Admission Cell, Obaid Noor Institute of Medical Sciences (ONIMS), Canal Road Near Jhambra Bridge, Mianwali</li>
            </ol>
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Required Documents</h2>
            <ol className="list-decimal list-inside text-gray-700 max-w-2xl">
              <li>CNIC/B. Form of candidate</li>
              <li>CNIC of father/guardian</li>
              <li>Latest photographs</li>
              <li>Matric (SSC) or equivalent certificate (O-Level)</li>
              <li>Intermediate (F. Sc Pre.Medical) or equivalent certificate (A-Level)</li>
              <li>MDCAT/NAT/IUB or any other relevant test result copy</li>
              <li>Hafiz-e-Quran certificate by registered Madrasa (If applicable)</li>
              <li>Special Person certificate issued by NADRA (If applicable)</li>
              <li>FBR certificate (Active Taxpayer)</li>
            </ol>
          </div>
        </div>
      </section>

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

export default Apply;
