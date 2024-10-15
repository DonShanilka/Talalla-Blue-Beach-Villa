import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom';
import App from './App'
import About from './pages/about/About.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },

// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
