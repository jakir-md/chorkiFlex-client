import React from "react";
import FeaturedMovies from "../Components/FeaturedMovies";
import AutoCarousel from "../Components/AutoCarousel";
import Subscriptions from "../Components/Subscriptions";

const HomeLayout = () => {

  return (
    <div>
      <div>
        <AutoCarousel></AutoCarousel>
      </div>
      <div>
        <FeaturedMovies />
        <Subscriptions></Subscriptions>
      </div>
    </div>
  );
};

export default HomeLayout;
