import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import SocialSignUp from "@/Context/SocialSignUp";

const Root = () => {
  return (
    <>
      <SocialSignUp>
        <Header />
        <Outlet /> {/* This should render SignUp */}
      </SocialSignUp>
    </>
  );
};

export default Root;
