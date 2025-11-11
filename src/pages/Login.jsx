import React, { useContext, useRef, useState } from "react";
import { Link,  useLocation,  useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"; 
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { auth, AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
  const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const location =useLocation()
    console.log(location);

    const emailRef =useRef()

  const {signInUser,googleLogin, setUser }=useContext(AuthContext)
//handleLogIn
const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((userCredential) => {
        console.log("User logged in:", userCredential.user);
        toast.success("Login successful!");
        form.reset();
       navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        
        toast.error(`Login failed: ${error.message}`);
      });
  };

 // Handle google LogIn
  const handleGoogleLogIn=()=>{
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
  }


//Handle Forget password
const handleForgotPassword = () => {
  const email = emailRef.current.value.trim(); 
  console.log('forget password', email);

  if (!email) {
    toast.warn("Please enter your email!");
    return;
  }

  sendPasswordResetEmail(auth, email)
    .then(() => {
      toast.success("Password reset email sent! Please check your inbox.");
      window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
    })
    .catch((error) => {
      toast.error(`Failed to reset password: ${error.message}`);
    });
};



  return (
    <div className="hero min-h-screen bg-green-50">
  
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
            <title>LogIn page</title>
        {/* Text Section */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-5xl font-bold text-green-700">Welcome Back!</h1>
          <p className="py-6 text-gray-600 max-w-md">
            Log in to continue your plant journey. Manage your favorites, book
            consultations, and explore personalized plant care tips.
          </p>
        </div>

        {/* Login Card */}
        <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl rounded-2xl border border-green-100">
          <div className="card-body">
            <form onSubmit={handleLogIn} className="space-y-4">
              {/* Email */}
              <div className="flex flex-col text-left">
                <label className="label font-semibold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  placeholder="Enter your email"
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
                  placeholder="Enter your password"
                  name="password"
                  required
                  className="input input-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <span
                  className="absolute right-[8px]  top-[40px] -translate-y-1/2 cursor-pointer"
                  onClick={() => setShow(!show)}
                >
                  {show ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>

              {/* Forgot Password */}
              <div className="text-left">
                <button onClick={handleForgotPassword} type="button" className="link text-green-600 link-hover text-sm">
                  Forgot password?
                </button>
              </div>

              {/* Login Button */}
              <button className="btn w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold border-none hover:scale-105 transition-transform duration-200">
                Login
              </button>
            </form>

            {/* OR Divider */}
            <div className="flex items-center my-4">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-2 text-gray-500">OR</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>

            {/* Google Sign-In */}
            <button onClick={handleGoogleLogIn} className="btn w-full border border-gray-300 text-black bg-white flex items-center justify-center gap-2 rounded-lg hover:bg-pink-500 ">
              <FcGoogle size={24} /> Continue with Google
            </button>

            {/* Register Link */}
            <p className="text-center mt-5 text-gray-600 text-sm">
              Don’t have an account?{" "}
              <Link
                to="/auth/register"
                className="text-green-600 font-semibold hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
