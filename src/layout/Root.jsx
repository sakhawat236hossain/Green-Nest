import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";

const Root = () => {
   const [loading, setLoading] = useState(true);
     const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); 
    return () => clearTimeout(timer);
  }, [location]); 

  return (
    <div>
      {/* Navbar */}
      <header className="mt-2">
        <NavBar />
      </header>

      {/* Main Content */}
      <main className=" max-w-7xl mx-auto px-4 py-3 md:py-5">
         {loading ? <Loader /> : <Outlet />}
      </main>

      {/* Footer */}
      <footer className="mt-auto w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default Root;
