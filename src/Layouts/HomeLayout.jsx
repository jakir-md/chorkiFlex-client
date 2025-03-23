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
        <AutoCarousel></AutoCarousel>
      </div>
      <div>
        <FeaturedMovies />
      </div>
    </div>
  );
};

export default HomeLayout;
