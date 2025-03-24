import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

const AddMovie = () => {
  const { user } = useContext(AuthContext);
  let [rating, setRating] = useState(0);

  const navigate = useNavigate();

  const handleFormSubmission = (e) => {
    e.preventDefault();
    const form = e.target;
    const poster = form.poster.value;
    const movieTitle = form.movieTitle.value;
    const genre = form.genre.value;
    let duration = form.duration.value;
    if (duration !== "") duration = parseInt(duration);

    const releaseYear = form.releaseYear.value;
    const summary = form.summary.value;
    const email = user.email;

    const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\/\S*)?$/;
    if (!urlPattern.test(poster)) {
      toast.error("Invalid Poster URL !!!");
      return;
    }

    if (movieTitle.length < 2) {
      toast.error("Incompatible Title !!!");
      return;
    }

    if (duration < 60 || duration === "") {
      toast.error("Irrelavent Duration !!!");
      return;
    }

    if (releaseYear == "") {
      toast.error("Invalid Release Year !!!");
      return;
    }

    if (rating == 0) {
      toast.error("Invalid Rating !!!");
      return;
    }

    rating = rating.toString();
    console.log
    const movie = {
      poster,
      movieTitle,
      genre,
      duration,
      releaseYear,
      rating,
      summary,
      email,
    };

    console.log(duration);

    fetch("https://chorki-flex-server.vercel.app/movies", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(movie),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Movie Added Successfully.");
          navigate('/');
        }
      });
  };

  const handleRating = (rate) => {
    setRating(rate); // You can send this to a backend/API
  };

  return (
    <div className="mb-10">
      <Toaster />
      <div className="hero bg-base-200 mt-5 w-full md:w-3/4 mx-auto">
        <div className="card bg-base-100 w-full shrink-0 rounded-none md:rounded-lg md:shadow-2xl">
          <div className="card-body">
            <h1 className="text-center text-2xl font-bold mb-5">Add Movie</h1>
            <form className="fieldset" onSubmit={handleFormSubmission}>
              <div>
                <div className="flex mx-auto flex-col md:flex-row mb-3 md:mb-5 gap-3 md:gap-10 w-full md:w-11/12 justify-center items-center">
                  <div className="w-full md:w-1/2">
                    <label className="fieldset-label">
                      Movie Poster
                    </label>
                    <input
                      type="text"
                      className="input w-full"
                      name="poster"
                      placeholder="Poster"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <label className="fieldset-label">Movie Title</label>
                    <input
                      type="text"
                      className="input w-full"
                      name="movieTitle"
                      placeholder="Movie Title"
                    />
                  </div>
                </div>
                <div className="flex mx-auto flex-col md:flex-row mb-3 md:mb-5 gap-3 md:gap-10 w-full md:w-11/12 justify-center items-center">
                  <div className="w-full md:w-1/2">
                    <label className="fieldset-label">Genre</label>
                    <select
                      id="dropdown"
                      name="genre"
                      className="w-full p-2 input rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">-- Choose an option --</option>
                      <option value="Sci-Fi">Sci-Fi</option>
                      <option value="Drama">Drama</option>
                      <option value="Comdey">Comdey</option>
                      <option value="Horror">Horror</option>
                      <option value="Thriller">Thriller</option>
                    </select>
                  </div>
                  <div className="w-full md:w-1/2">
                    <label className="fieldset-label">Duration</label>
                    <input
                      type="text"
                      className="input w-full"
                      name="duration"
                      placeholder="duration"
                    />
                  </div>
                </div>
                <div className="flex mx-auto flex-col md:flex-row mb-3 md:mb-5 gap-3 md:gap-10 w-full md:w-11/12 justify-center items-center">
                  <div className="w-full md:w-1/2">
                    <label className="fieldset-label">Release Year</label>
                    <select
                      id="dropdown"
                      name="releaseYear"
                      className="w-full p-2 input rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">-- Choose an option --</option>
                      <option value="2025">2025</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                    </select>
                  </div>
                  <div className="w-full md:w-1/2">
                  <label className="fieldset-label">Rating</label>
                    <Rating onClick={handleRating} ratingValue={rating} />
                  </div>
                </div>
                <div className="flex mx-auto flex-col md:flex-row md:mb-5 gap-3 md:gap-10 w-full md:w-11/12  justify-center items-center">
                  <div className="w-full">
                    <label className="fieldset-label">Summary</label>
                    <textarea
                      name="summary"
                      className="border p-3 text-sm rounded-md border-gray-200 w-full focus:outline-none "
                      id="summary"
                      placeholder="Say some words about the movie"
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                </div>
                <div className="flex mx-auto gap-10 w-full md:w-11/12 justify-center items-center">
                  <button className="btn btn-neutral mt-4 w-full">
                    Add Movie
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
