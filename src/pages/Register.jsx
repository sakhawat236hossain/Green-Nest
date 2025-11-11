import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { createUser, setUser, googleLogin, updateUser } =
    useContext(AuthContext);

  //  Handle Register
const handleRegister = (e) => {
  e.preventDefault();
  setError("");

  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const photo = form.photoURL.value.trim();
  const password = form.password.value.trim();

  //  Password validation with Regex
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  if (!passwordRegex.test(password)) {
    setError(
      "Password must be at least 6 characters long, include one uppercase & one lowercase letter"
    );
    toast.error(
      "Password must be at least 6 characters long, include one uppercase & one lowercase letter"
    );
    return;
  }

  // Create user
  createUser(email, password)
    .then((result) => {
      const user = result.user;

      //  Update profile displayName, photoURL
      updateUser({ displayName: name, photoURL: photo })
        .then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });

          toast.success(" Account created & profile updated!");
          form.reset();
          navigate("/");
        })
        .catch((error) => {
          console.error("Profile update failed:", error);
          toast.error("❌ Profile update failed!");
          setUser(user);
        });
    })
    .catch((error) => {
      console.error("Signup error:", error);
      toast.error(error.message || "Signup failed!");
    });
};


  // Handle google LogIn
  const handleGoogleLogIn = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log("Google login successful:", user);
        setUser(user);
        toast.success("Logged in with Google!");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-green-50">
      <div className="hero-content flex-col lg:flex-row gap-10">
        {/* Text Section */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl font-bold text-green-700 text-left">
            Create Account
          </h1>
          <p className="py-6 text-gray-600 max-w-md text-left">
            Join GreenNest today! Sign up to explore plants, book consultations,
            and manage your profile.
          </p>
        </div>

        {/* Register Card */}
        <div className="card bg-white w-full max-w-md shrink-0 shadow-2xl rounded-2xl border border-green-100">
          <div className="card-body">
            <form onSubmit={handleRegister} className="space-y-4">
              {/* Name */}
              <div className="flex flex-col text-left">
                <label className="label font-semibold text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="input input-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col text-left">
                <label className="label font-semibold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="input input-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              {/* Photo URL */}
              <div className="flex flex-col text-left">
                <label className="label font-semibold text-gray-700">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="Photo URL"
                  required
                  className="input input-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col text-left relative">
                <label className="label font-semibold text-gray-700">
                  Password
                </label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  required
                  className="input input-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <span
                  className="absolute right-[10px] top-[34px] cursor-pointer text-gray-500"
                  onClick={() => setShow(!show)}
                >
                  {show ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>

              {/* Error Message */}
              {error && (
                <p className="text-red-500 text-sm font-medium">{error}</p>
              )}

              {/* Register Button */}
              <button
                type="submit"
                className="btn w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-lg mt-2 hover:scale-105 transition-transform"
              >
                Register
              </button>
            </form>

            {/* OR Divider */}
            <div className="flex items-center my-4">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-2 text-gray-500">OR</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>

            {/* Google Sign-In */}
            <button
              onClick={handleGoogleLogIn}
              className="btn w-full border border-gray-300 text-black hover:bg-pink-500 flex items-center justify-center gap-2 rounded-lg"
            >
              <FcGoogle size={24} /> Continue with Google
            </button>

            {/* Login Link */}
            <p className="text-center mt-5 text-gray-600 text-sm">
              Already have an account?{" "}
              <Link
                to="/auth/login"
                className="text-green-600 font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
