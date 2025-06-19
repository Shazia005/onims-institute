// src/components/Eligibility.jsx
import React from 'react';
import Message from './Message'; // Import the Messages component

const Eligibility = () => {
  return (
    <div>
      {/* First section */}
      <section className="h-[30vh] flex flex-col justify-center lg:px-32 px-5 text-[#ffc600] bg-[url('assets/img/num.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="w-full lg:w-4/5 font-bold space-y-5 mt-10 mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">ELIGIBILITY CRITERIA</h1>
        </div>
      </section>

      {/* Messages section */}
      <Message />
    </div>
  );
};

export default Eligibility;
