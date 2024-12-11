import React from 'react'

function Feature() {
  return (
    <div className="flex justify-center ">
      <div className="bg-[#DDE9FF] w-3/4 rounded-3xl flex flex-row px-10 py-20 items-center">
        <div className='w-1/2 space-y-10'>
          <div className='text-4xl font-semibold flex justify-center'>Seamless collaboration for healthcare teams</div>
          <div className='text-gray-600 text-xl w-3/4'>
            With shared inboxes, any team member can resolve the team’s pending
            tasks. Individual staff member don’t get overwhelmed and patients
            are always take care of.
          </div>
        </div>
        <div>
          {" "}
          <img src="./feature.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Feature