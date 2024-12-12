import React from "react";

function Hero() {
  return (
    <div className="flex flex-col items-center text-center pt-24 gap-10  max-w-[995px] w-full mx-auto">
      <div className="text-4xl md:text-[70px] font-medium text-gray-800 leading-[92px]">
        Medical Software To Attract <br className="hidden md:block" /> And{" "}
        <span className="font-semibold">Retain Patients</span>
      </div>

      <div className="text-[#282828B2] text-base md:text-[22px] leading-8 font-medium w-full md:w-[602px]">
        Patientgrid’s communication platform helps improve
        <br className="hidden md:block" /> patient experience while saving staff
        hours.
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-1 items-center">
        <button className="text-base md:text-[22px] font-medium text-black">
          Start For Free
        </button>
        <img
          src="./demo-button.png"
          alt="Demo Button"
          className="w-20 md:w-[30px] md:h-[35px]"
        />
      </div>
    </div>
  );
}

export default Hero;
