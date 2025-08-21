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
import ProductDetails from "./pages/ProductDetails"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true, // default route at "/"
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
        element: <Cat />, 
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "categories/cat", // Route for All Products
        element: <Cat />,
      },
      {
        path: "product/:id", // New route for product details
        element: <ProductDetails />,
      },
      // Optional: Add other category routes if needed
      {
        path: "shop/:category", // For individual categories like rings, bracelets etc.
        element: <Shop />,
      },
      {
        path: "shop/:category/:subcategory", // For subcategories
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