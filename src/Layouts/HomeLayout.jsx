import React from "react";
import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";

const HomeLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto">
        <Carousel />
      </div>
    </div>
  );
};

export default HomeLayout;
