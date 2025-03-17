import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const { createUserWithGoogle, setUser, signInUserWithEmailAndPass } =
    useContext(AuthContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUserWithEmailAndPass(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLoginWithGoogle = () => {
    createUserWithGoogle()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form className="fieldset" onSubmit={handleFormSubmit}>
              <label className="fieldset-label">Email</label>
              <input
                type="email"
                className="input"
                name="email"
                placeholder="Email"
              />
              <label className="fieldset-label">Password</label>
              <input
                type="password"
                className="input"
                name="password"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </form>

            <p>
              Don't Have an account?{" "}
              <Link to="/register">
                <span className="hover:border-b-2 hover:border-b-red-500 hover:cursor-pointer text-red-500 font-bold">
                  Register
                </span>
              </Link>
            </p>

            {/* login with google  */}
            <div>
              <div className="grid grid-cols-3 mb-3 mt-0">
                <div className="border-t-gray-300 border-t-2 my-3"></div>
                <p className="text-center text-gray-500">or Sign In With</p>
                <div className="border-t-gray-300 border-t-2 my-3"></div>
              </div>
              <button
                className="font-bold text-xl px-3 py-2 flex gap-3 justify-center items-center text-center border rounded-lg hover:cursor-pointer hover:bg-gray-100"
                onClick={handleLoginWithGoogle}
              >
                <FcGoogle className="text-2xl" /> Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
