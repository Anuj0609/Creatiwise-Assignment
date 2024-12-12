import React from "react";

function Services() {
  const sectionData = [
    {
      id: 1,
      image: "./service1.png",
      title: "Bring new business in by getting more online reviews.",
      paragraph: "94% Use review to choose new doctor.",
    },
    {
      id: 2,
      image: "./service2.png",
      title: "Save time with collaborative tools and automations.",
      paragraph: "15+ Staff hours saved per week.",
    },
    {
      id: 3,
      image: "./service3.png",
      title: "Improve patient experience engaging the way they want.",
      paragraph: "90% People prefer texts to phone calls.",
    },
  ];

  return (
    <div className="space-y-12 mx-auto w-full md:w-[894px]">
      {sectionData.map((services) => (
        <div
          key={services.id}
          className={`flex flex-col md:flex-row justify-center items-center gap-4 md:gap-20 ${
            services.id === 2 ? "md:flex-row-reverse" : ""
          }`}
        >
          <img
            src={services.image}
            alt={services.title}
            className="w-full  md:w-[442px] h-[354px]"
          />

          <div className="space-y-4 md:space-y-8 max-w-lg text-center md:text-left">
            <div
              className="text-2xl md:text-3xl md:leading-[45px] font-medium text-black"
              style={{
                wordWrap: "break-word",
              }}
            >
              {services.title}
            </div>
            <div className="text-[#000000B2] text-lg md:text-[22px] md:leading-[30px]">
              {services.paragraph}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;
