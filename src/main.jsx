import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Routers.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import Spinner from "./Components/Spinner.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} fallbackElement={<Spinner />} /> 
      <ToastContainer />
    </AuthProvider>
  </StrictMode>
);
