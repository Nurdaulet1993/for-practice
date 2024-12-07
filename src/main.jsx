import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import FarAway from "./pages/FarAway.jsx";
import Examples from "./pages/Examples.jsx";
import Movies from "./pages/Movies.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: '',
        element: <Examples/>
      },
      {
        path: 'home',
        element: <Home/>
      },
      {
        path: 'far-away',
        element: <FarAway/>
      },
      {
        path: 'movies',
        element: <Movies/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
