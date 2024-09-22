import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./Home/Home";

import PasswordEmailSignUp from "./Authentication/PasswordEmailSignUp";
import ContextEmailMain from "./Authentication/ContextEmailMain";
import Register from "./loginRegister/Register/Register";
import Product from "./Product/Product";
import Contact from "./Contact/Contact";
import Blog from "./Blog/Blog";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/product",
        element: <Product></Product>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    
      
    ],
  },
  {
    path: "/sign_up",
    element: <PasswordEmailSignUp></PasswordEmailSignUp>
  },
  {
    path: "/sign_up_2",
    element: <ContextEmailMain></ContextEmailMain>
  },
  {
    path: "/register",
    element: <Register></Register>
  },
  
 
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
