import React from "react";
import toast, { Toaster } from 'react-hot-toast';

const AddMovie = () => {

  const handleFormSubmission = e => {
    e.preventDefault();
    const form = e.target;
    const poster = form.poster.value;
    const movieTitle = form.movieTitle.value;
    const genre = form.genre.value;
    const duration = parseFloat(form.duration.value);
    const releaseYear = form.releaseYear.value;
    const rating = parseFloat(form.rating.value);
    const summary = form.summary.value;

    const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\/\S*)?$/;
    if(!urlPattern.test(poster)){
      toast.error("Invalid Poster URL !!!");
      return;
    }

    if(movieTitle.length < 2){
      toast.error("Incompatible Title !!!");
      return;
    }

    if(parseFloat(duration) < 60.00){
      toast.error("Irrelavent Duration !!!");
      return;
    }

    if(releaseYear == ""){
      toast.error("Invalid Release Year !!!");
      return;
    }

    if(rating == ""){
      toast.error("Invalid Rating !!!");
      return;
    }
    console.log(genre, movieTitle, duration, releaseYear, rating, summary);
  }

  return (
    <div>
      <Toaster/>
      <div className="hero bg-base-200 mt-5 w-3/4 mx-auto">
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <div className="card-body">
            <form className="fieldset" onSubmit={handleFormSubmission}>
              <div>
                <div className="flex mx-auto mb-5 gap-10 w-11/12 justify-center items-center">
                  <div className="w-1/2">
                    <label className="fieldset-label text-xm mb-2">Movie Poster</label>
                    <input
                      type="text"
                      className="input w-full"
                      name="poster"
                      placeholder="Poster"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="fieldset-label">Movie Title</label>
                    <input
                      type="text"
                      className="input w-full"
                      name="movieTitle"
                      placeholder="Movie Title"
                    />
                  </div>
                </div>
                <div className="flex mx-auto mb-5 gap-10 w-11/12 justify-center items-center">
                  <div className="w-1/2">
                    <label className="fieldset-label">Genre</label>
                    <select
                      id="dropdown"
                      name="genre"
                      className="w-full p-2 input rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">-- Choose an option --</option>
                      <option value="Sci-Fi">Sci-Fi</option>
                      <option value="Drama">Drama</option>
                      <option value="Comdey">Comdey</option>
                      <option value="Horror">Horror</option>
                      <option value="Thriller">Thriller</option>
                    </select>
                  </div>
                  <div className="w-1/2">
                    <label className="fieldset-label">Duration</label>
                    <input
                      type="text"
                      className="input w-full"
                      name="duration"
                      placeholder="duration"
                    />
                  </div>
                </div>
                <div className="flex mx-auto mb-5 gap-10 w-11/12 justify-center items-center">
                  <div className="w-1/2">
                    <label className="fieldset-label">Release Year</label>
                    <select
                      id="dropdown"
                      name="releaseYear"
                      className="w-full p-2 input rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">-- Choose an option --</option>
                      <option value="2025">2025</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                    </select>
                  </div>
                  <div className="w-1/2">
                    <label className="fieldset-label">Rating</label>
                    <input
                      type="text"
                      className="input w-full"
                      name="rating"
                      placeholder="Rating"
                    />
                  </div>
                </div>
                <div className="flex mx-auto gap-10 w-11/12 justify-center items-center">
                  <div className="w-full">
                    <label className="fieldset-label">Summary</label>
                    <textarea
                      name="summary"
                      className="border p-3 text-sm rounded-md border-gray-200 w-full focus:outline-none "
                      id="summary"
                      placeholder="Say some words about the movie"
                      cols="30"
                      rows="10"
                    >
                    </textarea>
                  </div>
                </div>
                <div className="flex mx-auto gap-10 w-11/12 justify-center items-center">
                  <button className="btn btn-neutral mt-4 w-full">Add Movie</button>
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
