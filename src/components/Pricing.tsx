import React from "react";

function Pricing() {
  return (
    <div className="w-full flex justify-center mt-20">
      <div className="relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center z-10 max-w-[710px] mx-auto transform translate-x-1/4 space-y-5">
          <div className="text-[40px] font-medium">
            We work on a month-to-month basis, try for free with no commitments{" "}
          </div>
          <div className="text-lg text-gray-600 max-w-[584px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <button className="bg-[#4482C2] py-2 px-6 rounded-[30px] font-medium text-[20px] text-white">
            14 Day Trial
          </button>
        </div>

        <img src="./pricing.png" alt="Pricing" className="w-full" />
      </div>
    </div>
  );
}

export default Pricing;
