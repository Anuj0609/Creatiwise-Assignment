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
    <div>
      {sectionData.map((services) => (
        <div
          key={services.id}
          className={`flex flex-row justify-center items-center gap-20 ${
            services.id === 2 ? "flex-row-reverse" : ""
          }`}
        >
          <img src={services.image} alt={services.title} />
          <div className="space-y-8">
            <div
              className="text-3xl font-semibold flex justify-center text-black"
              style={{
                maxWidth: "350px",
                wordWrap: "break-word",
              }}
            >
              {services.title}
            </div>
            <div className="text-gray-600 text-2xl flex w-3/4">
              {services.paragraph}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;
