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
    <div className="space-y-12">
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
            className="w-full md:w-auto h-auto object-cover"
          />

          <div className="space-y-4 md:space-y-8 max-w-lg text-center md:text-left">
            <div
              className="text-2xl md:text-3xl font-semibold text-black"
              style={{
                wordWrap: "break-word",
              }}
            >
              {services.title}
            </div>
            <div className="text-gray-600 text-lg md:text-2xl">
              {services.paragraph}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;
