import React from "react";

function Footer() {
  return (
    <div className="flex flex-col bg-[#2A0896] mt-28 items-center justify-center">
      <div className="flex flex-col md:flex-row justify-center md:justify-between text-white max-w-[1133px] w-full mt-[92.23px]">
        <div className="flex flex-col   space-y-5 items-center md:items-start ">
          <div className="max-w-[268px] h-[47px]">
            <img src="./footer-logo.png" alt="" />
          </div>
          <div className="w-full md:w-[287px] text-lg text-center md:text-left font-[400] md:text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </div>
          <div className="flex space-x-3 justify-center md:justify-start">
            <div>
              <img
                src="./facebook.png"
                alt="Facebook"
                className="w-[25px] h-[25px]"
              />
            </div>
            <div>
              <img
                src="./twitter.png"
                alt="Twitter"
                className="w-[25px] h-[25px]"
              />
            </div>
            <div>
              <img
                src="./insta.png"
                alt="Instagram"
                className="w-[25px] h-[25px]"
              />
            </div>
          </div>
        </div>

        <div className="space-y-5 text-lg md:text-[18px] text-center font-base">
          <div className="flex flex-row space-x-2 items-center justify-center md:justify-start">
            <div>
              <img src="./call.png" alt="" className="w-[20px] h-[20px]" />
            </div>
            <div>+91-8853923455</div>
          </div>
          <div className="flex flex-row space-x-2 items-center justify-center md:justify-start">
            <div>
              <img src="./whatsapp.png" alt="" className="w-[20px] h-[20px]" />
            </div>
            <div>+91-4567895478</div>
          </div>
          <div className="flex flex-row space-x-2 items-center justify-center md:justify-start">
            <div>
              <img src="./mail.png" alt="" className="w-[20px] h-[20px]" />
            </div>
            <div>patientgrid@gmail.com</div>
          </div>
        </div>

        <div className="space-y-4 text-center md:text-left">
          <div className="text-lg md:text-[20px] font-medium">
            Subscribe Newsletter
          </div>
          <div className="relative max-w-[301px]">
            <input
              type="email"
              placeholder="Email"
              className="rounded-[30px] bg-white px-4 py-[10px] pr-[60px] text-gray-800 text-lg md:text-[18px] font-medium placeholder:text-[#00000080] w-full"
            />
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[50px] h-[50px] rounded-full bg-[#2A52BE] flex items-center justify-center">
              <img
                src="./vector.png"
                alt="Button Icon"
                className="w-[10px] h-[20px]"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="pt-5 w-full py-[13px]">
        <hr className="border-white w-full" />

        <div className="w-[254px] text-white flex justify-center space-x-10 py-3 text-base mx-auto font-base">
          <div>Products</div>
          <div>Plans</div>
          <div>More</div>
        </div>

        <hr className="border-white" />
      </div>

      <div className="flex items-center text-white justify-center my-[11px] text-base sm:text-lg">
        <div>&#x00A9;Copyright 2023.All Rights Reserved.</div>
      </div>
    </div>
  );
}

export default Footer;
