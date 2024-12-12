import React from "react";

function About() {
  return (
       <div className="relative w-full h-auto overflow-hidden">
    <div className="relative py-14 flex flex-col md:flex-row items-center justify-center">
        <img
          src="./bg-about-dark.png"
          alt="Background Dark"
          className="absolute w-[120%] h-auto object-contain transition-animation"
        />

        <img
          src="./bg-about-light.png"
          alt="Background Light"
          className="absolute w-[120%] h-auto object-contain transition-animation"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <img
        src="./overlay-image.png"
        alt="Overlay"
        className="absolute top-4 md:top-8 transform translate-y-10"
      />
    </div>
  );
}

export default About;
