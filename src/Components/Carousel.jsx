import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Carousel data (images and text)
  const carouselItems = [
    {
      image: "https://i.ibb.co.com/zHxmbvGr/dark-fantasy-scene.jpg",
      text: "Discover the latest blockbusters!",
      title: "Dark House",
      category: "New Releases",
      rating: {
        score: 4.8,
        source: "IMDb",
      },
      year: 2018,
      quality: "4K Ultra HD",
      duration: "1 hr 21 min",
      features: ["CC"],
      description:
        "A spine-chilling journey into the unknown, where terror lurks in the shadows and fear grips every moment. This horror film weaves a tale of the supernatural, psychological torment, or relentless evil, plunging its characters into a nightmare they can’t escape. Tension builds with eerie silence, jump scares, and a creeping sense of dread. Whether it’s a haunted house.",
    },
    {
      image:"https://i.ibb.co.com/TxzhdqqC/back-view-soldier-fighting-war-1.jpg",
      text: "Explore timeless classics.",
      title: "The Back Fighter",
      category: "New Releases",
      rating: {
        score: 4.8,
        source: "IMDb",
      },
      year: 2025,
      quality: "4K Ultra HD",
      duration: "1 hr 45 min",
      features: ["CC"],
      description:
        "A powerful and gripping portrayal of human courage, sacrifice, and the brutal realities of war. This war film immerses audiences in the chaos of battle, depicting the harrowing experiences of soldiers and civilians caught in the crossfire. Explosive action sequences, intense combat, and emotional depth bring to life the struggles of survival, loyalty, and duty.",
    },
    {
      image:
      "https://i.ibb.co.com/XZv4YSj5/people-cinema-watching-movie.jpg",
      title: "The Theatre",
      category: "New Releases",
      rating: {
        score: 4.1,
        source: "IMDb",
      },
      year: 2022,
      quality: "2K Ultra HD",
      duration: "1 hr 30 min",
      features: ["CC"],
      description:
        "A high-stakes rollercoaster of suspense, deception, and unexpected twists, this thriller keeps audiences on the edge of their seats. Tension mounts as the protagonist races against time, uncovering secrets, evading danger, or solving a perplexing mystery. With unpredictable betrayals, shocking revelations, and relentless adversaries, every moment is a test of wit and resilience.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  return (
    <div className="carousel w-full h-140 relative">
      {carouselItems.map((item, index) => (
        <div
          key={index}
          className={`carousel-item absolute w-full h-full inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }
          `}
        >
          <div className="relative">
            <img src={item.image} className="w-screen h-full object-fill" />
            <div className="absolute top-36 left-10 text-white space-y-4">
              <span className="text-white border-l-4 border-red-700 pl-3 uppercase text-sm font-bold">
                New Releases
              </span>

              {/* Title */}
              <h1 className="text-8xl font-extrabold">{item.title}</h1>

              {/* Rating and Metadata */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1 bg-black bg-opacity-50 px-2 py-1 rounded-lg">
                  <span className="text-green-400 text-lg font-bold">{item.rating.score}</span>
                  <span className="bg-yellow-400 text-black px-2 py-1 text-xs font-bold rounded">
                    IMDb
                  </span>
                  <span className="text-gray-300">Score</span>
                </div>

                <span className="font-semibold">{item.year}</span>

                <div className="bg-gray-800 text-white px-2 py-1 rounded text-sm">
                  {item.quality}
                </div>

                <span>{item.duration}</span>

                <div className="border border-white px-2 py-1 rounded text-xs">
                  CC
                </div>
              </div>

              <p className="w-3/4 text-gray-300">
                {item.description}
              </p>

              <div className="bg-red-700 hover:bg-white hover:cursor-pointer hover:text-red text-white w-32 px-2 py-3 font-bold">
                WATCH NOW
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
