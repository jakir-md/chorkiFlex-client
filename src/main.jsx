import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Provider/AuthProvider.jsx';
import LoginForm from './Components/LoginForm.jsx';
import HomeLayout from './Layouts/HomeLayout.jsx';
import RegistrationForm from './Components/RegistrationForm.jsx';
import AddMovie from './Components/AddMovie.jsx';
import ShowAllMovies from './Components/ShowAllMovies.jsx';
import PrivateRoute from './Routers/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Show Roadmaps</div>
  },
  {
    path: "/login",
    element: <LoginForm/>,
  },
  {
    path: "/home",
    element: <HomeLayout/>,
  },
  {
    path: "/register",
    element: <RegistrationForm/>,
  },
  {
    path: "/addmovie",
    element: <PrivateRoute>
      <AddMovie/>
    </PrivateRoute>
  },
  {
    path: "/allmovies",
    element: <ShowAllMovies/>,
    loader: () => fetch('http://localhost:5000/movies')
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
