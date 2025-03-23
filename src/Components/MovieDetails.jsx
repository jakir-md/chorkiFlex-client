import React, { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import "./mycomponent.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";

const MovieDetails = () => {
  const loadedMovie = useLoaderData();
  const navigate = useNavigate();
  const {user} = useContext(AuthContext);

  console.log(loadedMovie);
  const {_id:id, poster, movieTitle, genre, duration, releaseYear, rating, summary , email} =
    loadedMovie;
    const favEmail = user.email;
    const handleDelete = (delId) => {
        fetch(`http://localhost:5000/movie/${delId}`, {
            method: "DELETE",
        }).then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                toast.success("Movie Deleted Successfully.");
                navigate('/');
            }
        })
    }

    const handleFavourite = () => {
        const obj = {poster, movieTitle, genre, duration, releaseYear, rating, summary, email, favEmail};
        fetch('http://localhost:5000/favourite', {
            method: "POST",
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(obj)
        }).then(res => res.json())
        .then(data => {
            if(data.insertedId){
                toast.success("Successfully Added To Favourite");
            }
        })
    }
  return (
    <div className="card md:w-3/4 mx-auto my-20 rounded-md lg:card-side bg-base-100 shadow-xl">
        <Toaster />
      <div>
        <figure className="md:w-[300px] w-full h-full p-5 md:p-0">
          <img
            src={poster}
            alt={movieTitle}
            className="w-full rounded-lg md:rounded-none object-fill h-full"
          />
        </figure>
      </div>
      <div className="px-5 md:px-10">
        <h2 className="card-title text-2xl">{movieTitle}</h2>
        <p className="border-b-2 border-b-gray-150 text-gray-500 pb-2 mb-5">
          {summary}
        </p>
        <div className=" text-sm md:text-[16px]">
          <div className="flex justify-between border-b-2 py-1 border-b-gray-150">
            <h2 className="text-gray-600">Genre: </h2>
            <p className="font-bold">{genre}</p>
          </div>
          <div className="flex justify-between border-b-2 py-1 border-b-gray-150">
            <h2 className="text-gray-600">Duration: </h2>
            <p className="font-bold">{duration}</p>
          </div>
          <div className="flex justify-between border-b-2 py-1 border-b-gray-150">
            <h2 className="text-gray-600">Release Year: </h2>
            <p className="font-bold">{releaseYear}</p>
          </div>
          <div className="flex justify-between border-b-2 py-1 border-b-gray-150">
            <h2 className="text-gray-600">Rating: </h2>
            <p className="font-bold">
              <Rating initialValue={rating} readonly size={25} />
            </p>
          </div>
        </div>

        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">Respected User</h3>
            <p className="py-4">
              Currently our Experts are out of reach. We serve form 10.00 AM to
              8.00 PM everyday. We'll catch you up soon.
            </p>
            <form method="dialog">
              <button className="btn w-[100%] font-bold">Close</button>
            </form>
          </div>
        </dialog>

        <div className="card-actions flex my-5 items-center justify-between">
          <button onClick={()=>handleFavourite(id)} className="bg-green-500 cursor-pointer hover:bg-green-600 px-3 py-2 text-white font-bold rounded-full">Add To Favourite</button>
          <button onClick={()=>handleDelete(id)} className="bg-red-500 hover:bg-red-600 text-white px-3 cursor-pointer py-2 font-bold rounded-full flex justify-center items-center text-xl gap-3">
            <RiDeleteBin6Line/> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
