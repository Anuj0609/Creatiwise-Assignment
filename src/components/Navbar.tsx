import React from "react";

function Navbar() {
  return (
    <div className="flex flex-row justify-around items-center bg-[#D9D9D9] py-6 font-normal text-lg text-black">
      <div>
        <img src="./logo.png" alt="" />
      </div>
      <div className="flex flex-row gap-8 items-center">
        <div>Products</div>
        <div>Plans</div>
        <div>More</div>
      </div>

      <div className="flex flex-row gap-8 items-center">
        <div>Login</div>
        <button className="bg-[#2A0896] rounded-3xl px-8 py-2 text-white">Request a demo</button>
      </div>
    </div>
  );
}

export default Navbar;