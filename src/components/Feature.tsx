import React from "react";

function Feature() {
  return (
    <div className="flex justify-center py-10">
      <div className="bg-[#DDE9FF] w-full md:w-3/4 rounded-3xl flex flex-col md:flex-row px-6 md:px-10 py-10 md:py-20 items-center">
        <div className="w-full md:w-1/2 space-y-6 md:space-y-10">
          <div className="text-3xl md:text-4xl font-semibold text-center md:text-left">
            Seamless collaboration for healthcare teams
          </div>
          <div className="text-gray-600 text-lg md:text-xl w-full md:w-3/4 mx-auto md:mx-0">
            With shared inboxes, any team member can resolve the team’s pending
            tasks. Individual staff members don’t get overwhelmed, and patients
            are always taken care of.
          </div>
        </div>

        <div className="mt-6 md:mt-0">
          <img
            src="./feature.png"
            alt="Feature"
            className="w-full md:w-auto h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Feature;
