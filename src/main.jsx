import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Navbar from './components/Navbar'
import Blog from "./components/Blog"
import Statistics from "./components/Statistics"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ErrorPage from "./components/ErrorPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "blog",
        element: <Blog />
      },
      {
        path: "statistics",
        element: <Statistics />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
