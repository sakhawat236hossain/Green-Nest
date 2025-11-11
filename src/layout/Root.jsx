import React from "react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

const Root = () => {
  return (
    <div>
      {/* Navbar */}
      <header className="mt-2">
        <NavBar />
      </header>

      {/* Main Content */}
      <main className=" max-w-7xl mx-auto px-4 py-3 md:py-5">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="mt-auto w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default Root;
