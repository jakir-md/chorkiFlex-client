import React from "react";

const ScrollingEffect = () => {
  return (
    <div className="relative h-screen overflow-y-auto">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full h-20 bg-blue-600 text-white flex items-center justify-center text-xl font-bold z-10 shadow-lg">
        Fixed Header
      </div>

      {/* Placeholder Space to Push Content Below Fixed Header */}
      <div className="h-20"></div>

      {/* Scrolling Content */}
      <div className="relative z-20 bg-gray-100">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className={`p-10 border-b border-gray-300 ${
              index === 5 ? "bg-white" : "bg-gray-200"
            }`}
          >
            <h2 className="text-lg font-semibold">Content Section {index + 1}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingEffect;
