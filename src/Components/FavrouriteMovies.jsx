import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Rating } from "react-simple-star-rating";
import "./mycomponent.css";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import toast, { Toaster } from "react-hot-toast";

const FavrouriteMovies = () => {
  const [movies, setMovies] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5000/favouriteall", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: user.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, [user.email]);


  const handleDelete = (id) => {
    fetch(`http://localhost:5000/favourite/${id}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount){
            toast.success("Successfully Removed From Favourite");
            const remaining = movies.filter(item => item._id === id);
            setMovies(remaining);
        }
    })
  }

  return (
    <div>
        <Toaster/>
      <div className="lg:w-3/4 w-full mx-auto mt-5 p-5">
        <h1 className="text-3xl font-bold text-center mb-5">
          My Favourite Movies
        </h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          {movies.map((movie, indx) => (
            <div className="card bg-base-100 shadow-xl rounded-none" key={indx}>
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
                      {(movie.duration / 60).toFixed(0) +
                        " hr " +
                        (movie.duration % 60) +
                        " min"}
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
                  <button
                    onClick={() => handleDelete(movie._id)}
                    className="bg-red-500 w-full hover:bg-red-600 text-white px-3 cursor-pointer py-2 font-bold rounded-md flex justify-center items-center text-xl gap-3"
                  >
                    <RiDeleteBin6Line /> Delete Favourite
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavrouriteMovies;
