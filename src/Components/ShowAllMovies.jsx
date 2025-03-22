import React from "react";
import Navbar from "./Navbar";
import { useLoaderData } from "react-router-dom";

const ShowAllMovies = () => {
  const loadedMovie = useLoaderData();
  console.log(loadedMovie);
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="bg-gray-800">
        <div className="w-3/4 mx-auto mt-5 p-5">
          <div className="grid grid-cols-3 gap-5">
            {loadedMovie.map((movie, indx) => (
              <div className="card bg-base-100 shadow-sm rounded-none" key={indx}>
                <figure className="h-56 rounded-none">
                  <img
                    src={movie.poster}
                    alt="Shoes"
                    className="w-full h-full"
                  />
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
                    </div>
                  </div>
                  <h2 className="card-title font-bold">{movie.movieTitle}</h2>
                  <div className="card-actions">
                    <button className="btn w-full bg-green-600 font-bold hover:bg-green-400">See Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowAllMovies;
