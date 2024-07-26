import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import About from './pages/about/aboutPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/about",
    element: <About />,

  },

  // {
  //   path: "/contact",
  //   element: <Contact />,

  // },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
