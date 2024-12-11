import React from "react";

function Hero() {
  return (
    <div className="flex justify-center flex-col items-center text-center pt-20 gap-10">
      <div className="text-7xl font-semibold text-gray-800">
        Medical Software To Attract <br /> And{" "}
        <span className="font-bold">Retain Patients</span>
      </div>
      <div className="text-gray-500 text-2xl font-semibold tracking-wide w-[40%]">
        Patientgrid’s communication platform helps improve <br /> patient
        experience while staff hours.
      </div>
      <div className="flex flex-row gap-1 items-center">
        <button className="text-2xl font-semibold text-black">Start For Free</button>
        <img src="./demo-button.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;
