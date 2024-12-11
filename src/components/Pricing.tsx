import React from "react";

function Pricing() {
  return (
    <div className="w-full flex justify-center mt-20">
      <div className="relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center z-10 w-1/2 mx-auto transform translate-x-1/4 space-y-5">
          <div className="text-4xl font-semibold">
            We work on a month-to-month basis, try for free with no commitments{" "}
          </div>
          <div className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <button className="bg-[#4482C2] py-4 px-8 rounded-full">
            14 Day Free Trial
          </button>
        </div>

        <img src="./pricing.png" alt="Pricing" className="w-full" />
      </div>
    </div>
  );
}

export default Pricing;
