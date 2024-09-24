/* eslint-disable react/prop-types */
import { UseContext } from "@/context/AuthProvider";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user } = useContext(UseContext);

  if (user) {
    return children;
  }
  return <Navigate to={"/login"}></Navigate>;
};

export default PrivetRoute;
