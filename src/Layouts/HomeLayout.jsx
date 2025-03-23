import React from "react";
import FeaturedMovies from "../Components/FeaturedMovies";
import AutoCarousel from "../Components/AutoCarousel";

const HomeLayout = () => {
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
        "A spine-chilling journey into the unknown, where terror lurks in the shadows and fear grips every moment. This horror film weaves a tale of the supernatural.",
    },
    {
      image:
        "https://i.ibb.co.com/TxzhdqqC/back-view-soldier-fighting-war-1.jpg",
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
        "A powerful and gripping portrayal of human courage, sacrifice, and the brutal realities of war. This war film immerses audiences in the chaos of battle.",
    },
    {
      image: "https://i.ibb.co.com/XZv4YSj5/people-cinema-watching-movie.jpg",
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
        "A high-stakes rollercoaster of suspense, deception, and unexpected twists, this thriller keeps audiences on the edge of their seats. Tension mounts as the protagonist races against time.",
    },
  ];

  return (
    <div>
      <div>
        {/* <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co.com/zHxmbvGr/dark-fantasy-scene.jpg"
              className="w-[1200px] md:h-[400px] h-[300px]"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <div className="space-x-4">
                <h1 className="text-white text-4xl">The Dark House</h1>
                <div className="flex items-center space-x-1 bg-black bg-opacity-50 px-2 py-1 rounded-lg">
                  <span className="text-green-400 text-lg font-bold">
                    {3.9}
                  </span>
                  <span className="bg-yellow-400 text-black px-2 py-1 text-xs font-bold rounded">
                    IMDb
                  </span>
                  <span className="text-gray-300">Score</span>
                </div>

                <span className="font-semibold">{2022}</span>

                <div className="bg-gray-800 text-white px-2 py-1 rounded text-sm">
                  HD
                </div>

                <span>{120}</span>

                <div className="border border-white px-2 py-1 rounded text-xs">
                  CC
                </div>
              </div>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co.com/XZv4YSj5/people-cinema-watching-movie.jpg"
              className="w-[1200px] md:h-[400px] h-[300px]"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co.com/TxzhdqqC/back-view-soldier-fighting-war-1.jpg"
              className="w-[1200px] md:h-[400px] h-[300px]"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div> */}
        <AutoCarousel></AutoCarousel>
      </div>
      <div>
        <FeaturedMovies />
      </div>
    </div>
  );
};

export default HomeLayout;
