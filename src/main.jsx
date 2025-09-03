import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Cat from "../src/categories/Cat.jsx"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "shop",
        element: <Shop />,  // ✅ Fixed here
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "categories/cat",
        element: <Cat />,
      },
      {
        path: "shop/:category",
        element: <Shop />,
      },
      {
        path: "shop/:category/:subcategory",
        element: <Shop />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
