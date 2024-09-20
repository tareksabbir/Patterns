import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import SocialSignUp from "@/Context/SocialSignUp";



const Root = () => {
  return (
    <>
      <SocialSignUp>
        <Header></Header>
        <Outlet />
      </SocialSignUp>
    </>
  );
};

export default Root;
