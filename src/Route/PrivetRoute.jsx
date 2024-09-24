/* eslint-disable react/prop-types */
import { UseContext } from "@/context/AuthProvider";

import { useContext } from "react";
import { Navigate } from "react-router-dom";


const PrivetRoute = ({ children }) => {
  const { user ,loading} = useContext(UseContext);
  if(loading){
    return <h1 className="flex items-center justify-center min-h-[70vh]">loading....</h1>
  }

  if (user) {
    return children;
  }
  return <Navigate to={"/login"}></Navigate>;
};

export default PrivetRoute;
