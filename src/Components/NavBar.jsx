import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Logo from "../assets/Logo.png";
import { FaHome, FaLeaf, FaUserCircle } from "react-icons/fa";
import { FiMenu, FiX, FiLogIn, FiUserPlus, FiLogOut } from "react-icons/fi";

const NavBar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logOutUser().catch(console.error);
    setMenuOpen(false);
    setMobileMenuOpen(false);
  };

  const active = "text-green-600 border-b-2 border-green-600 flex items-center gap-1 font-semibold";
  const normal = "flex items-center gap-1 hover:text-green-500 transition";

  const linkClass = ({ isActive }) => (isActive ? active : normal);

  const Links = (
    <>
      <li>
        <NavLink to="/" className={linkClass}>
          <FaHome /> Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/plants" className={linkClass}>
          <FaLeaf /> Plants
        </NavLink>
      </li>
      <li>
        <NavLink to="/AboutUs" className={linkClass}>
          <FaUserCircle /> AboutUs
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={linkClass}>
          <FaLeaf /> Contact
        </NavLink>
      </li>

      {user && (
        <li>
          <NavLink to="/myProfile" className={linkClass}>
            <FaUserCircle /> Profile
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-[9999] bg-transparent">
        <div className="max-w-[1260px] mx-auto px-2">
          <div className="bg-gradient-to-b from-green-100 via-green-50 to-white border border-green-300 rounded-lg shadow-md">
            <div className="h-16 flex justify-between items-center px-6">
              {/* Logo */}
              <NavLink to="/" className="flex items-center gap-2">
                <img src={Logo} className="w-9 h-9 rounded-full p-1" alt="logo" />
                <span className="text-green-700 font-bold text-base">GreenNest</span>
              </NavLink>

              {/* Desktop Links */}
              <ul className="hidden lg:flex gap-8 text-green-700 font-medium">{Links}</ul>

              {/* Desktop Right Buttons */}
              <div className="hidden lg:flex items-center gap-4">
                {!user ? (
                  <>
                    <NavLink
                      to="/auth/login"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-green-600 font-semibold border border-green-500 hover:bg-green-50 hover:shadow-md transition"
                    >
                      <FiLogIn /> Login
                    </NavLink>

                    <NavLink
                      to="/auth/register"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 hover:shadow-md transition"
                    >
                      <FiUserPlus /> Register
                    </NavLink>
                  </>
                ) : (
                  <div className="relative">
                    <img
                      src={user.photoURL || "/default-avatar.png"}
                      onClick={() => setMenuOpen(!menuOpen)}
                      className="w-9 h-9 rounded-full cursor-pointer ring-2 ring-green-400 hover:scale-105 transition-transform"
                      alt={user.displayName || "User Avatar"}
                    />
                    {menuOpen && (
                      <div className="absolute right-0 mt-2 bg-white w-44 shadow-md border rounded">
                        <p className="text-center text-sm border-b py-2">{user.displayName || "User"}</p>
                        <button
                          onClick={handleLogout}
                          className="w-full text-red-500 py-2 hover:bg-red-50 flex justify-center gap-1 font-medium rounded-lg transition"
                        >
                          <FiLogOut /> Logout
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Mobile */}
              <div className="lg:hidden flex items-center gap-2">
                <button className="text-2xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                  {mobileMenuOpen ? <FiX /> : <FiMenu />}
                </button>
                {user && (
                  <img
                    src={user.photoURL || "/default-avatar.png"}
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="w-8 h-8 rounded-full ring-2 ring-green-400"
                    alt="profile"
                  />
                )}
              </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="lg:hidden bg-white border-t">
                <ul className="flex flex-col gap-3 p-4 text-green-700 font-medium">
                  {Links}
                  {!user ? (
                    <>
                      <NavLink
                        to="/auth/login"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-green-50 transition"
                      >
                        <FiLogIn /> Login
                      </NavLink>
                      <NavLink
                        to="/auth/register"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
                      >
                        <FiUserPlus /> Register
                      </NavLink>
                    </>
                  ) : (
                    <button
                      onClick={() => { handleLogout(); setMobileMenuOpen(false); }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-red-500 hover:bg-red-50 transition"
                    >
                      <FiLogOut /> Logout
                    </button>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Space after fixed navbar */}
      <div className="h-16" />

      {/* Mobile Profile Popup */}
      {menuOpen && user && (
        <div className="lg:hidden fixed top-20 left-1/2 -translate-x-1/2 bg-white w-60 rounded shadow border z-[9999]">
          <p className="text-center border-b py-2">{user.displayName || "User"}</p>
          <button
            onClick={handleLogout}
            className="w-full text-red-500 py-2 hover:bg-red-50 transition rounded-lg"
          >
            Logout
          </button>
        </div>
      )}
    </>
  );
};

export default NavBar;
