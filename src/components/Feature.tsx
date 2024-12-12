import React from "react";

function Feature() {
  return (
    <div className="flex justify-center py-10">
      <div className="bg-[#DDE9FF] w-full md:max-w-[1160px] md:h-[581px] rounded-[30px] flex flex-col md:flex-row px-6 md:px-10 py-10 md:py-[100px] items-center">
        <div className="w-full md:w-1/2 space-y-6 md:space-y-10">
          <div className="text-3xl md:text-[40px] font-medium md:leading-[50px] text-center md:text-left">
            Seamless collaboration for healthcare teams
          </div>
          <div className="text-[#000000B2] md:leading-[30px] text-lg md:text-[18px] w-full md:w-3/4 mx-auto md:mx-0">
            With shared inboxes, any team member can resolve the team’s pending
            tasks. Individual staff members don’t get overwhelmed, and patients
            are always taken care of.
          </div>
        </div>

        <div className="mt-6 md:mt-0">
          <img
            src="./feature.png"
            alt="Feature"
            className="w-full md:max-w-[607px] md:h-[382px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Feature;
