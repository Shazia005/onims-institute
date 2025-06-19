import React from 'react';
import img from '../assets/img/about.jpg';
import ScrollableSection from './ScrollableSection'; // Import the ScrollableSection component
import logo1 from '../assets/img/logo1.png'; // Example logo imports
import logo2 from '../assets/img/logo2.png';
import logo3 from '../assets/img/logo3.png';
import logo4 from '../assets/img/logo4.png';
import logo5 from '../assets/img/logo5.png';

const About = () => {
  return (
    <div>
      <section className="min-h-screen flex flex-col lg:flex-row justify-center items-start lg:px-32 px-5 pt-24 lg:pt-16 gap-10 mx-auto max-w-screen-xl mb-10">
        {/* Main Content Section (Image + Text) */}
        <div className="w-full lg:w-2/3 space-y-4">
          {/* Image Section */}
          <div className="w-full">
            <img className="rounded-lg w-full h-auto" src={img} alt="About Us" />
          </div>
          {/* Text Section */}
          <div className="w-full space-y-4">
            <h1 className="text-4xl font-semibold text-center lg:text-start">About Us</h1>
            <p className="text-justify lg:text-start">
              We recognize and are proud of the fact that Obaid Noor Institute of Medical Sciences (ONIMS) is the pioneer and only institute in Mianwali that is offering professional education in medical sciences to the youth.
            </p>
            <p className="text-justify lg:text-start">
              Obaid Noor Institute of Medical Sciences (ONIMS), Mianwali is the new and emerging institute that has been established in the last year 2021. ONIMS is affiliated with Pharmacy Council of Pakistan and Pakistan Nursing & Midwifery Council and Allied Health Professional Council. ONIMS is offering state of the art degree programs such as Doctor of Pharmacy (Pharm. D), BS Nursing and BS Medical Lab Technology (MLT), Doctor of Physiotherapy (DPT). The institute takes pride in its beautiful structure consisting of spacious and modern lecture halls, along with the state of the art lab facilities. Of special mention, are the ONIMS Library and Computer lab. Library is offering digital facilities with access to international Journals along with conventional facilities. Institute is offering cutting edge education through highly trained, experienced and foreign qualified faculty.
            </p>
            <p className="text-justify lg:text-start">
              Obaid Noor Institute of Medical Sciences (ONIMS), Mianwali is affiliated with hospitals such as Obaid Noor Hospital, DHQ Hospital Mianwali, Al-Rehman Hospital, and City Medical Complex, for imparting the clinical training and orientation of the undergraduate students. All these hospitals have all the essential clinical departments for imparting clinical training.
            </p>
          </div>
        </div>

        {/* Right Side Section (Two Boxes) */}
        <div className="w-full lg:w-1/3 space-y-4">
          {/* Box 1 */}
          <div className="bg-white rounded-lg p-5 shadow-lg">
            <h2 className="text-[25px] text-[#ffc600] font-bold mb-4 text-center">QUICK NAVIGATION</h2>
            <ul className="space-y-2">
              {['HOME', 'ABOUT US', 'HOW TO APPLY?', 'ELIGIBILITY', 'TIMELINES'].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-[14px] block bg-[#7a1632] text-[#FFFFFF] p-1 rounded-[5px] border-[2px] border-[#ffc600] hover:text-[#ffc600] transition duration-300 ease-in-out text-center"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Box 2 */}
          <div className="bg-white rounded-lg p-5 shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Why Choose Us</h2>
            <p className="text-justify">
              ONIMS offers cutting-edge facilities, an experienced faculty, and strong affiliations with leading hospitals for comprehensive clinical training.
            </p>
            {/* Scrollable Section */}
            <ScrollableSection /> {/* Including the ScrollableSection component */}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="h-auto flex flex-col justify-center lg:px-32 px-5 text-[#ffc600] bg-[url('assets/img/num.jpg')] bg-no-repeat bg-cover opacity-90">
        <div className="flex flex-wrap justify-center text-center p-5">
          {[
            { label: '340+', title: 'Faculty' },
            { label: '500+', title: 'Medical Students' },
            { label: '200+', title: 'Dentistry Students' },
            { label: '100+', title: 'Nursing Students' },
            { label: '75+', title: 'MLT Students' },
            { label: '85+', title: 'DPT Students' },
          ].map((stat) => (
            <span key={stat.title} className="font-bold text-lg m-2 flex-1">
              {stat.label} <br /> {stat.title}
            </span>
          ))}
        </div>
      </section>

      {/* Logos Section */}
      <section className="w-full py-16 flex justify-center items-center bg-white">
        <div className="flex gap-10 flex-wrap justify-center">
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

export default About;

