import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Logo from "../assets/Logo.png";

//  React Icons Import
import {
  FaHome,
  FaLeaf,
  FaUserCircle,
} from "react-icons/fa";
import { FiMenu, FiX, FiLogIn, FiUserPlus, FiLogOut } from "react-icons/fi";

const NavBar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logOutUser().catch((err) => console.error(err));
    setMenuOpen(false);
    setMobileMenuOpen(false);
  };

  const Links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-green-600 font-semibold border-b-2 border-green-600 transition flex items-center gap-1"
              : "hover:text-green-500 transition flex items-center gap-1"
          }
        >
          <FaHome /> Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/plants"
          className={({ isActive }) =>
            isActive
              ? "text-green-600 font-semibold border-b-2 border-green-600 transition flex items-center gap-1"
              : "hover:text-green-500 transition flex items-center gap-1"
          }
        >
          <FaLeaf /> Plants
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/myProfile"
          className={({ isActive }) =>
            isActive
              ? "text-green-600 font-semibold border-b-2 border-green-600 transition flex items-center gap-1"
              : "hover:text-green-500 transition flex items-center gap-1"
          }
        >
          <FaUserCircle /> My Profile
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="w-full bg-green-50 shadow-md sticky top-0 z-50">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/*  Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <img
              src={Logo}
              alt="Logo"
              className="w-10 h-10 object-contain rounded-full border border-green-200 p-1"
            />
            <span className="font-bold text-green-700 text-xl">GreenNest</span>
          </NavLink>

          {/*  Desktop Links */}
          <ul className="hidden lg:flex gap-6 text-green-700 font-medium">
            {Links}
          </ul>

          {/*  Desktop Right Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            {user ? (
              <div className="relative">
                <img
                  src={user.photoURL || "/default-avatar.png"}
                  alt="Profile"
                  className="w-9 h-9 rounded-full border cursor-pointer transition-transform hover:scale-105"
                  onClick={() => setMenuOpen(!menuOpen)}
                />
                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md border animate-fadeIn z-50">
                    <p className="text-center text-sm text-gray-700 py-2 border-b">
                      {user.displayName || "User"}
                    </p>
                    <button
                      onClick={handleLogout}
                      className="w-full py-2 text-sm bg-red-400 hover:bg-red-500 text-white font-medium rounded-b-md transition flex items-center justify-center gap-1"
                    >
                      <FiLogOut /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <NavLink
                  to="/auth/login"
                  className="btn btn-sm bg-green-200 hover:bg-green-300 border-none text-green-800 font-semibold transition-all transform hover:scale-105 flex items-center gap-1"
                >
                  <FiLogIn /> Login
                </NavLink>
                <NavLink
                  to="/auth/register"
                  className="btn btn-sm bg-green-500 hover:bg-green-600 text-white font-semibold border-none transition-all transform hover:scale-105 flex items-center gap-1"
                >
                  <FiUserPlus /> Register
                </NavLink>
              </>
            )}
          </div>

          {/*  Mobile View */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Hamburger / Close Button */}
            <div className="relative">
              <button
                className="btn btn-ghost p-2 text-2xl hover:text-green-600 transition-transform hover:scale-110"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <FiX /> : <FiMenu />}
              </button>

              {mobileMenuOpen && (
                <div className="fixed top-20 left-1/2 -translate-x-1/2 w-64 bg-white shadow-lg rounded-md border animate-fadeIn z-50">
                  <ul className="flex flex-col gap-2 p-4">
                    {Links}
                    {user && (
                      <li className="mt-2">
                        <button
                          onClick={handleLogout}
                          className="w-full btn btn-sm bg-red-400 hover:bg-red-500 text-white border-none font-medium transition-all transform hover:scale-105 flex items-center justify-center gap-1"
                        >
                          <FiLogOut /> Logout
                        </button>
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>

            {/* Mobile Avatar */}
            {user && (
              <div className="relative">
                <img
                  src={user.photoURL || "/default-avatar.png"}
                  alt="Profile"
                  className="w-9 h-9 rounded-full border cursor-pointer transition-transform hover:scale-105"
                  onClick={() => setMenuOpen(!menuOpen)}
                />
                {menuOpen && (
                  <div className="fixed top-20 left-1/2 -translate-x-1/2 w-64 bg-white shadow-lg rounded-md border animate-fadeIn z-50">
                    <p className="text-center text-sm text-gray-700 py-2 border-b">
                      {user.displayName || "User"}
                    </p>
                    <button
                      onClick={handleLogout}
                      className="w-full py-2 text-sm bg-red-400 hover:bg-red-500 text-white font-medium transition-all transform hover:scale-105 flex items-center justify-center gap-1"
                    >
                      <FiLogOut /> Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
