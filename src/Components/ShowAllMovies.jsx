import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import "./mycomponent.css";

const ShowAllMovies = () => {
  const loadedMovie = useLoaderData();
  console.log(loadedMovie);
  return (
    <div>
      <div>
        <div className="lg:w-3/4 w-full mx-auto mt-5 p-5">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            {loadedMovie.map((movie, indx) => (
              <div
                className="card bg-base-100 shadow-xl rounded-none"
                key={indx}
              >
                <figure className="h-56 p-4">
                  <img
                    src={movie.poster}
                    alt="Shoes"
                    className="w-full rounded-lg h-full"
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
                        {((movie.duration)/60).toFixed(0) + " hr " + (movie.duration)%60 + " min"}
                      </p>
                    </div>
                    <div>
                      <p className="font-bold text-gray-500 text-end text-sm ">
                        {movie.releaseYear}
                      </p>
                    </div>
                  </div>
                  <div>
                    <Rating initialValue={movie.rating} readonly size={25} />
                  </div>
                  <h2 className="card-title font-bold">{movie.movieTitle}</h2>
                  <div className="card-actions">
                  <Link to={`/details/${movie._id}`} className="btn w-full text-white bg-green-500 font-bold hover:bg-green-400">
                    See Details
                  </Link>
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
