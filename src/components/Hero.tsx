import React from "react";

function Hero() {
  return (
    <div className="flex flex-col items-center text-center pt-24 gap-10 px-4 md:px-0">
      <div className="text-4xl md:text-7xl font-medium text-gray-800">
        Medical Software To Attract <br className="hidden md:block" />{" "}
        <span className="font-bold">Retain Patients</span>
      </div>

      <div className="text-gray-500 text-base md:text-xl font-semibold tracking-wide w-full md:w-[40%]">
        Patientgrid’s communication platform helps improve patient experience
        while saving staff hours.
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-1 items-center">
        <button className="text-base md:text-xl font-semibold text-black">
          Start For Free
        </button>
        <img
          src="./demo-button.png"
          alt="Demo Button"
          className="w-20 md:w-auto"
        />
      </div>
    </div>
  );
}

export default Hero;
