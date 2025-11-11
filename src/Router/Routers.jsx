// src/routes/router.jsx
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PlantDetails from "../pages/PlantDetails";
import MyProfile from "../pages/MyProfile";
import Plants from "../pages/Plants";
import NotFound from "../pages/NotFound";
import AuthLayout from "../layout/AuthLayout";
import PrivateRoute from "../provider/PrivateRoute";
import EcoDecorIdeas from "../Components/EcoDecorIdeas";
import PlantOfTheWeek from "../Components/PlantOfTheWeek";
import ErrorPage from "../Components/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
        loader: () => fetch("/plants.json").then(res => res.json()),
      },

      {
        path: "/auth",
        element: <AuthLayout />,
        children: [
          { path: "/auth/login", element: <Login /> },
          { path: "/auth/register", element: <Register /> },
        ],
      },

      {
        path: "/myProfile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/plantDetails/:id",
        element: (
          <PrivateRoute>
            <PlantDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("/plants.json").then(res => res.json()),
      },
      {
       path:"/PlantOfTheWeek",
       element:<PlantOfTheWeek></PlantOfTheWeek>,
       loader: () => fetch("/plantOfTheWeek.json").then(res => res.json()),
      },
    
      {
        path: "/plants",
        element: <Plants></Plants>,
        loader: () => fetch("/plants.json").then(res => res.json()),
      },
      {
        path:"*",
        element:<ErrorPage></ErrorPage>
      }
    ],
  },
 

]);

export default router;
