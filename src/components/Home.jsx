import React from "react";
import Doctors from "./Doctors";

const Home = () => {
  return (
    <div>
      {/* Home Section */}
      <section className="h-[60vh] flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/ONIMS-1.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="w-full lg:w-4/5 font-bold space-y-5 mt-10 ml-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#ffc600]">
            WELCOME TO <br /> ONIMS
          </h1>
          <p className="text-sm sm:text-base md:text-lg">
            OBAID NOOR INSTITUTE
          </p>
        </div>
      </section>

      {/* Doctors Section */}
      <section>
        <Doctors />
      </section>
    </div>
  );
};

export default Home;
