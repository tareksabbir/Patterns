import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./Home/Home";
import Register from "./loginRegister/Register/Register";
import Product from "./Product/Product";
import Contact from "./Contact/Contact";
import Blog from "./Blog/Blog";
import Login from "./loginRegister/Login/Login";
import AuthProvider from "./context/AuthProvider";
import Order from "./Order/Order";
import PrivetRoute from "./Route/PrivetRoute";

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
        path: "/projects",
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
      {
        path: "/order",
        element: (
          <PrivetRoute>
            <Order></Order>
          </PrivetRoute>
        ),
      },
    ],
  },

  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
