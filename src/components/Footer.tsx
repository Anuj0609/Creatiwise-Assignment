import React from "react";

function Footer() {
  return (
    <div className="flex flex-col bg-[#2A0896] mt-28">
      <div className="flex flex-col md:flex-row justify-center md:justify-evenly pt-28 px-10 pb-20 text-white">
        <div className="flex flex-col w-full md:w-1/3 space-y-5 items-center md:items-start">
          <div>
            <img src="./footer-logo.png" alt="" />
          </div>
          <div className="w-full md:w-2/3 text-lg sm:text-xl text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </div>
          <div className="flex space-x-3 justify-center md:justify-start">
            <div>
              <img src="./facebook.png" alt="Facebook" />
            </div>
            <div>
              <img src="./twitter.png" alt="Twitter" />
            </div>
            <div>
              <img src="./insta.png" alt="Instagram" />
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 space-y-5 text-lg sm:text-xl text-center md:text-left">
          <div className="flex flex-row space-x-2 items-center justify-center md:justify-start">
            <div>
              <img src="./call.png" alt="" />
            </div>
            <div>+91-8853923455</div>
          </div>
          <div className="flex flex-row space-x-2 items-center justify-center md:justify-start">
            <div>
              <img src="./whatsapp.png" alt="" />
            </div>
            <div>+91-4567895478</div>
          </div>
          <div className="flex flex-row space-x-2 items-center justify-center md:justify-start">
            <div>
              <img src="./mail.png" alt="" />
            </div>
            <div>patientgrid@gmail.com</div>
          </div>
        </div>

        <div className="space-y-4 md:w-1/3 text-center md:text-left">
          <div className="text-lg sm:text-xl">Subscribe Newsletter</div>
          <div className="relative w-full">
            <input
              type="email"
              placeholder="Email"
              className="rounded-full bg-white px-4 py-2 text-gray-800 text-lg sm:text-xl placeholder:text-gray-500 w-full"
            />
            <img
              src="./Ellipse.png"
              alt="Icon"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="pt-5">
        <hr className="border-white" />

        <div className="text-white flex justify-center space-x-10 py-3 text-base sm:text-lg">
          <div>Products</div>
          <div>Plans</div>
          <div>More</div>
        </div>
        <hr className="border-white" />
      </div>

      <div className="flex items-center text-white justify-center my-2 text-base sm:text-lg">
        <div>&#x00A9;Copyright 2023.All Rights Reserved.</div>
      </div>
    </div>
  );
}

export default Footer;
