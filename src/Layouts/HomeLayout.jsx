import React from "react";
import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import FeaturedMovies from "../Components/FeaturedMovies";

const HomeLayout = () => {
  return (
    <div>
      <div className="fixed z-4 w-full">
        <Navbar></Navbar>
      </div>
      <div className="pt-24">
        <div className="sticky z-1 h-[100vh]">
          <Carousel />
        </div>
        <div className="relative z-2">
          <FeaturedMovies></FeaturedMovies>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
