import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import GoogleSignUp from "@/Context/GoogleSignUp";

const Root = () => {
  return (
    <>
      <GoogleSignUp>
        <Header></Header>
        <Outlet />
      </GoogleSignUp>
    </>
  );
};

export default Root;
