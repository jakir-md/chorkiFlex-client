import React, { useState, useEffect } from "react";

const AutoCarousel = () => {
  const totalSlides = 3;
  const [currentSlide, setCurrentSlide] = useState(2);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 2000);

      return () => clearInterval(interval);
    }, []);

  return (
    <div className="carousel w-full mx-auto">
      <div
        className={`carousel-item relative w-full ${
          currentSlide === 0 ? "block" : "hidden"
        }`}
      >
        <img
          src="https://i.ibb.co.com/zHxmbvGr/dark-fantasy-scene.jpg"
          className="w-[1200px] md:h-[400px] h-[300px]"
          alt="Slide 1"
        />
        <div className="absolute top-10 md:left-10 left-2 text-white space-y-4">
          <span className="text-white border-l-4 border-red-700 pl-3 uppercase text-sm font-bold">
            New Releases
          </span>

          {/* Title */}
          <h1 className="md:text-6xl lg:text-8xl mt-3 text-2xl font-extrabold">
            The Dark House
          </h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 bg-black bg-opacity-50 px-2 rounded-lg">
              <span className="text-green-400 text-lg font-bold">3.8</span>
              <span className="bg-yellow-400 text-black px-2 py-1 text-xs font-bold rounded">
                IMDb
              </span>
              <span className="text-gray-300 text-sm">Score</span>
            </div>

            <span className="font-semibold">2025</span>

            <div className="bg-gray-800 text-white px-2 py-1 rounded text-sm">
              HD
            </div>

            <span>120min</span>

            <div className="border border-white px-2 py-1 rounded text-xs">
              CC
            </div>
          </div>

          <p className="w-11/12 text-gray-300 text-sm">
            This horror film weaves a tale of the supernatural, psychological
            torment, or relentless evil.
          </p>
          <div className="bg-red-700 hover:bg-transparent hover:cursor-pointer hover:border-2 hover:border-red-500 text-white w-36 px-4 py-3 font-bold">
            WATCH NOW
          </div>
        </div>
      </div>

      <div
        className={`carousel-item relative w-full ${
          currentSlide === 1 ? "block" : "hidden"
        }`}
      >
        <img
          src="https://i.ibb.co.com/TxzhdqqC/back-view-soldier-fighting-war-1.jpg"
          className="w-[1200px] md:h-[400px] h-[300px]"
          alt="Slide 2"
        />
        <div className="absolute top-10 md:left-10 left-2 text-white space-y-4">
          <span className="text-white border-l-4 border-red-700 pl-3 uppercase text-sm font-bold">
            New Releases
          </span>
          <h1 className="md:text-6xl lg:text-8xl mt-3 text-2xl font-extrabold">
            War On Terror
          </h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 bg-black bg-opacity-50 px-2 rounded-lg">
              <span className="text-green-400 text-lg font-bold">4.8</span>
              <span className="bg-yellow-400 text-black px-2 py-1 text-xs font-bold rounded">
                IMDb
              </span>
              <span className="text-gray-300 text-sm">Score</span>
            </div>

            <span className="font-semibold">2025</span>

            <div className="bg-gray-800 text-white px-2 py-1 rounded text-xs">
              HD
            </div>
            <span>120min</span>
            <div className="border border-white px-2 py-1 rounded text-xs">
              CC
            </div>
          </div>

          <p className="w-11/12 text-gray-300 text-sm">
            This war film immerses audiences in the chaos of battle, depicting
            the harrowing experiences of soldiers and civilians caught in the
            crossfire.
          </p>
          <div className="bg-red-700 hover:bg-transparent hover:cursor-pointer hover:border-2 hover:border-red-500 text-white w-36 px-4 py-3 font-bold">
            WATCH NOW
          </div>
        </div>
      </div>

      <div
        className={`carousel-item relative w-full ${
          currentSlide === 2 ? "block" : "hidden"
        }`}
      >
        <img
          src="https://i.ibb.co.com/XZv4YSj5/people-cinema-watching-movie.jpg"
          className="w-[1200px] md:h-[400px] h-[300px]"
          alt="Slide 3"
        />
        <div className="absolute top-10 md:left-10 left-2 text-white space-y-4">
          <span className="text-white border-l-4 border-red-700 pl-3 uppercase text-sm font-bold">
            New Releases
          </span>

          <h1 className="md:text-6xl lg:text-8xl mt-3 text-2xl font-extrabold">
            The Theatre
          </h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 bg-black bg-opacity-50 px-2 rounded-lg">
              <span className="text-green-400 text-lg font-bold">4.6</span>
              <span className="bg-yellow-400 text-black px-2 py-1 text-xs font-bold rounded">
                IMDb
              </span>
              <span className="text-gray-300 text-sm">Score</span>
            </div>
            <span className="font-semibold">2025</span>
            <div className="bg-gray-800 text-white px-2 py-1 rounded text-sm">
              HD
            </div>
            <span>113min</span>
            <div className="border border-white px-2 py-1 rounded text-xs">
              CC
            </div>
          </div>

          <p className="w-11/12 text-gray-300 text-sm">
          A high-stakes rollercoaster of suspense, deception, and unexpected twists, this thriller keeps audiences on the edge of their seats.
          </p>
          <div className="bg-red-700 hover:bg-transparent hover:cursor-pointer hover:border-2 hover:border-red-500 text-white w-36 px-4 py-3 font-bold">
            WATCH NOW
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoCarousel;
