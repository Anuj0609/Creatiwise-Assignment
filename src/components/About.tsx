import React from "react";

function About() {
  return (
    <div className="relative pt-10 flex items-center justify-center">
      <img src="./bg-about.png" alt="Background" className="w-screen ml-0" />

      <img
        src="./overlay-image.png"
        alt="Overlay"
        className="absolute top-0 transform translate-y-10"
      />
    </div>
  );
}

export default About;
