import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import SocialSignUp from "@/Context/SocialSignUp";
import Footer from "@/Footer/Footer";

const Root = () => {
  return (
    <>
      <SocialSignUp>
        <Header />
        <Outlet /> 
        {/* This should render SignUp */}
        <Footer></Footer>
      </SocialSignUp>
    </>
  );
};

export default Root;
