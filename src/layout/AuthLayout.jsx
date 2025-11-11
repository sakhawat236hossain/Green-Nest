import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';

const AuthLayout = () => {
  return (
    <div>
     

      <main className="min-h-screen flex justify-center items-center bg-green-50">
        <Outlet /> 
      </main>
    </div>
  );
};

export default AuthLayout;
