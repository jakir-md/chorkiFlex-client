import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLoaderData, useNavigate } from "react-router-dom";

const UpdateMovie = () => {
  const { user } = useContext(AuthContext);
  const loadedMovie = useLoaderData();

  const navigate = useNavigate();

  const {
    _id: id,
    poster,
    movieTitle,
    genre,
    duration,
    releaseYear,
    rating,
    summary,
  } = loadedMovie;

  const updateMail = user.email;

  const handleFormSubmission = (e) => {
    e.preventDefault();
    const form = e.target;
    const poster = form.poster.value;
    const movieTitle = form.movieTitle.value;
    const genre = form.genre.value;
    let duration = form.duration.value;
    if (duration !== "") duration = parseFloat(duration);

    const releaseYear = form.releaseYear.value;
    const summary = form.summary.value;
    const rating = form.rating.value;

    const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\/\S*)?$/;
    if (!urlPattern.test(poster)) {
      toast.error("Invalid Poster URL !!!");
      return;
    }

    if (movieTitle.length < 2) {
      toast.error("Incompatible Title !!!");
      return;
    }

    if (duration < 60.0 || duration === "") {
      toast.error("Irrelavent Duration !!!");
      return;
    }

    if (releaseYear == "") {
      toast.error("Invalid Release Year !!!");
      return;
    }

    if (rating == "") {
      toast.error("Invalid Rating !!!");
      return;
    }

    const movie = {
      id,
      poster,
      movieTitle,
      genre,
      duration,
      releaseYear,
      rating,
      summary,
      updateMail
    };

    fetch("https://chorki-flex-server.vercel.app/movie", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(movie),
    })
      .then((res) => res.json())
      .then((data) => {
        
        if (data.modifiedCount > 0) {
          navigate('/');
        }
      });
  };

  return (
    <div className="mb-10">
      <Toaster />
      <div className="hero bg-base-200 mt-5 w-full md:w-3/4 mx-auto">
        <div className="card bg-base-100 w-full shrink-0 rounded-none md:rounded-lg md:shadow-2xl">
          <div className="card-body">
            <h1 className="text-center text-2xl font-bold mb-5">
              Update Movie
            </h1>
            <form className="fieldset" onSubmit={handleFormSubmission}>
              <div>
                <div className="flex mx-auto flex-col md:flex-row mb-3 md:mb-5 gap-3 md:gap-10 w-full md:w-11/12 justify-center items-center">
                  <div className="w-full md:w-1/2">
                    <label className="fieldset-label">Movie Poster</label>
                    <input
                      type="text"
                      className="input w-full"
                      name="poster"
                      placeholder="Poster"
                      defaultValue={poster}
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <label className="fieldset-label">Movie Title</label>
                    <input
                      type="text"
                      className="input w-full"
                      name="movieTitle"
                      placeholder="Movie Title"
                      defaultValue={movieTitle}
                    />
                  </div>
                </div>
                <div className="flex mx-auto flex-col md:flex-row mb-3 md:mb-5 gap-3 md:gap-10 w-full md:w-11/12 justify-center items-center">
                  <div className="w-full md:w-1/2">
                    <label className="fieldset-label">Genre</label>
                    <select
                      id="dropdown"
                      name="genre"
                      defaultValue={genre}
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
                      defaultValue={duration}
                    />
                  </div>
                </div>
                <div className="flex mx-auto flex-col md:flex-row mb-3 md:mb-5 gap-3 md:gap-10 w-full md:w-11/12 justify-center items-center">
                  <div className="w-full md:w-1/2">
                    <label className="fieldset-label">Release Year</label>
                    <select
                      id="dropdown"
                      name="releaseYear"
                      defaultValue={releaseYear}
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
                    <input
                      type="text"
                      className="input w-full"
                      name="rating"
                      placeholder="Rating"
                      defaultValue={rating}
                    />
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
                      defaultValue={summary}
                    ></textarea>
                  </div>
                </div>
                <div className="flex mx-auto gap-10 w-full md:w-11/12 justify-center items-center">
                  <button className="btn btn-neutral mt-4 w-full">
                    Update Movie
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

export default UpdateMovie;
