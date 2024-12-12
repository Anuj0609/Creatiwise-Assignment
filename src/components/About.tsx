import React from "react";

function About() {
  return (
    <div className="flex w-full overflow-hidden">
      <div className="relative w-[110%]  h-[734px] flex justify-center">
        <img
          src="./bg-about-dark.png"
          alt="Background Dark"
          className="absolute w-full h-full  fade-in -left-20"
        />

        <img
          src="./bg-about-light.png"
          alt="Background Light"
          className="absolute w-full h-full  fade-out -left-20"
        />

        <img
          src="./overlay-image.png"
          alt="Overlay"
          className="z-10 h-[562px]"
        />
      </div>
    </div>
  );
}

export default About;
