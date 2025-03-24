import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import "./form.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
export function RegistrationReact() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const { createUserWithEmailAndPass } = useContext(AuthContext);

  return (
    <div className="formclass w-2/4 mx-auto shadow-2xl px-10 py-10">
      <h1 className="text-center text-2xl font-bold mb-5">Registration</h1>
      <form
        onSubmit={handleSubmit((data) => {
          setData(data);
          const email = data.email;
          const password = data.password;
          const name = data.name;
          const photourl = data.photourl;

          createUserWithEmailAndPass(email, password)
          .then((result) => {
            console.log(result);
            const creationTime = result.user?.metadata?.creationTime;
            const lastSignInTime = result.user?.metadata?.lastSignInTime;
            const user = {name, email, photourl, creationTime, lastSignInTime};
            fetch(`http://localhost:5000/user`, {
              method: "put",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(user),
            });
          })
          .catch((error) => {
            console.log(error);
          });
        })}
      >
        <label>Name</label>
        <input {...register("name", { required: true })} placeholder="Name" />
        <label>Email</label>
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Email"
        />
        <label>PhotoURL</label>
        <input
          {...register("photourl", { required: true })}
          placeholder="PhotoURL"
        />
        <label>Password</label>
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Password"
        />
        <input type="submit" value="Register" />
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
  );
}
