import React from "react";

function About() {
  return (
    <div className="relative py-14 flex flex-col md:flex-row items-center justify-center">
      <img
        src="./bg-about-light.png"
        alt="Background"
        className="w-full h-auto object-cover"
      />

      <img
        src="./overlay-image.png"
        alt="Overlay"
        className="absolute top-4 md:top-8 transform translate-y-10"
      />
    </div>
  );
}

export default About;
