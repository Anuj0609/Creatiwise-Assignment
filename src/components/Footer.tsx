import React from "react";

function Footer() {
  return (
    <div className="flex flex-col bg-[#2A0896] mt-16 md:mt-28 items-center justify-center">
      <div className="flex flex-col md:flex-row justify-center md:justify-between text-white max-w-[1133px] w-full mt-[92.23px] space-y-8 md:space-y-0">
        <div className="flex flex-col space-y-5 items-center md:items-start">
          <div className="max-w-[200px] h-[40px] md:max-w-[268px] md:h-[47px]">
            <img src="./footer-logo.png" alt="" />
          </div>
          <div className="w-full text-sm md:w-[287px] md:text-[18px] text-center md:text-left font-[400]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </div>
          <div className="flex space-x-2 md:space-x-3 justify-center md:justify-start">
            <div>
              <img
                src="./facebook.png"
                alt="Facebook"
                className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]"
              />
            </div>
            <div>
              <img
                src="./twitter.png"
                alt="Twitter"
                className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]"
              />
            </div>
            <div>
              <img
                src="./insta.png"
                alt="Instagram"
                className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4 text-sm md:space-y-5 md:text-[18px] text-center font-base">
          <div className="flex flex-row space-x-2 items-center justify-center md:justify-start">
            <div>
              <img
                src="./call.png"
                alt=""
                className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]"
              />
            </div>
            <div>+91-8853923455</div>
          </div>
          <div className="flex flex-row space-x-2 items-center justify-center md:justify-start">
            <div>
              <img
                src="./whatsapp.png"
                alt=""
                className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]"
              />
            </div>
            <div>+91-4567895478</div>
          </div>
          <div className="flex flex-row space-x-2 items-center justify-center md:justify-start">
            <div>
              <img
                src="./mail.png"
                alt=""
                className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]"
              />
            </div>
            <div>patientgrid@gmail.com</div>
          </div>
        </div>

        <div className="space-y-3 text-center md:text-left">
          <div className="text-sm md:text-[20px] font-medium">
            Subscribe Newsletter
          </div>
          <div className="relative w-[250px] md:max-w-[301px] mx-auto">
            <input
              type="email"
              placeholder="Email"
              className="md:h-[50px] rounded-[20px] md:rounded-[30px] bg-white px-3 py-[10px]  text-gray-800 text-sm md:text-[18px] font-medium placeholder:text-[#00000080] w-full"
            />
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full bg-[#2A52BE] flex items-center justify-center">
              <img
                src="./Vector.png"
                alt="Button Icon"
                className="w-[8px] h-[16px] md:w-[10px] md:h-[20px]"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="pt-5 w-full py-[10px] md:py-[13px]">
        <hr className="border-white w-full" />

        <div className="w-full md:w-[254px] text-white flex justify-center space-x-6 md:space-x-10 py-3 text-sm md:text-base mx-auto font-base">
          <div>Products</div>
          <div>Plans</div>
          <div>More</div>
        </div>

        <hr className="border-white" />
      </div>

      <div className="flex items-center text-white justify-center my-[10px] md:my-[11px] text-sm md:text-lg">
        <div>&#x00A9;Copyright 2023.All Rights Reserved.</div>
      </div>
    </div>
  );
}

export default Footer;
