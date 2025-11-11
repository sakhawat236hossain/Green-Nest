import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Spinner from "../Components/Spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
const location =useLocation()


if(loading){
    return <Spinner></Spinner>
}

  if (!user) {
    return <Navigate to="/auth/login" state={location.pathname} />;
  }

  return children;
};

export default PrivateRoute;
