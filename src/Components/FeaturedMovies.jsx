import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/featuredmovies")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data);
      });
  }, []);

  return (
    <div className="bg-gray-800">
      <h1 className="text-center text-5xl pt-20 text-white py-5">
        Featured Movies
      </h1>
      <div className="w-3/4 mx-auto mt-5 p-5">
        <div className="grid grid-cols-3 gap-5">
          {movies.map((movie, indx) => (
            <div className="card bg-base-100 shadow-sm rounded-none" key={indx}>
              <figure className="h-56 rounded-none">
                <img src={movie.poster} alt="Shoes" className="w-full h-full" />
              </figure>
              <div className="card-body px-2 py-2">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold border-1 text-center px-1 border-gray-700 text-red-600">
                      {movie.genre}
                    </p>
                  </div>
                  <div>
                    <p className="text-center font-bold text-gray-500">
                      {movie.duration + " min"}
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-500 text-end text-sm ">
                      {movie.releaseYear}
                    </p>
                    <p>{movie.rating}</p>
                  </div>
                </div>
                <h2 className="card-title font-bold">{movie.movieTitle}</h2>
                <div className="card-actions">
                  <button className="btn w-full bg-green-600 font-bold hover:bg-green-400">
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 hover:cursor-pointer mb-5 w-60 mx-auto">
          <div className="px-5 py-3 text-center transition-transform hover:border-2 hover:border-red-600 bg-red-600 hover:bg-transparent">
            <Link to="/allmovies" className="text-center text-white text-xl">
              SHOW ALL MOVIES
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMovies;
