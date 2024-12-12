import React from "react";

function About() {
  return (
    <div className="relative flex w-full overflow-hidden h-[500px] md:h-[600px] lg:h-[734px] justify-center items-center">
      <div className="absolute w-[120%] md:w-[110%] h-full">
        <img
          src="./bg-about-dark.png"
          alt="Background Dark"
          className="absolute w-full h-full fade-in"
        />
        <img
          src="./bg-about-light.png"
          alt="Background Light"
          className="absolute w-full h-full fade-out"
        />
      </div>
      <div className="absolute shadow-[0_4px_10px_rgba(0,0,0,0.25)] rounded-[24px] md:rounded-[48px] overflow-hidden">
        <img
          src="./overlay-image.png"
          alt="Overlay"
          className="z-10 h-[350px] md:h-[400px] lg:h-[562px]"
        />
      </div>
    </div>
  );
}

export default About;
