import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  const { createUserWithEmailAndPass } = useContext(AuthContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPass(email, password)
      .then(() => {
        
      })
      .catch(() => {
        
      });
  };

  return (
    <div>
      <div className="hero mt-0 bg-base-200 min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 rounded-none md:rounded-lg shadow-2xl">
          <div className="card-body">
            <h1 className="text-center text-2xl font-bold mb-5">Registration Form</h1>
            <form className="fieldset" onSubmit={handleFormSubmit}>
              <label className="fieldset-label">Name</label>
              <input
                type="email"
                className="input"
                name="name"
                placeholder="Email"
              />
              <label className="fieldset-label">Email</label>
              <input
                type="email"
                className="input"
                name="email"
                placeholder="Email"
              />
              <label className="fieldset-label">PhotoURL</label>
              <input
                type="text"
                className="input"
                name="photourl"
                placeholder="PhotoURL"
              />
              <label className="fieldset-label">Password</label>
              <input
                type="password"
                className="input"
                name="password"
                placeholder="password"
              />
              <button className="btn btn-neutral mt-4">Register</button>
            </form>

            <p>
              Already Have an account?{" "}
              <Link to="/auth/login">
                <span className="hover:border-b-2 hover:border-b-red-500 hover:cursor-pointer text-red-500 font-bold">
                  Login
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
