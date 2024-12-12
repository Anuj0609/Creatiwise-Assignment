import React from "react";

function Pricing() {
  return (
    <div className="w-full flex justify-center mt-20">
      <div className="relative">
        <div className=" relative bg-[#D9DEEF] md:bg-transparent md:absolute inset-0 flex flex-col items-center justify-center px-5 text-center z-10 max-w-[710px] mx-auto space-y-5 py-9 rounded-[30px] md:rounded-none md:transform md:translate-x-1/4 ">
          <div className="text-xl md:text-[40px] font-medium md:leading-[50px]">
            We work on a month-to-month basis, try for free with no commitments{" "}
          </div>
          <div className="text-sm md:text-lg text-gray-600 max-w-[584px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <button className="bg-[#4482C2] py-2 px-6 rounded-[30px] font-medium text-[20px] text-white">
            14 Day Trial
          </button>
        </div>

        <img
          src="./pricing.png"
          alt="Pricing"
          className="w-full hidden md:block"
        />
      </div>
    </div>
  );
}

export default Pricing;
