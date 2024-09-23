import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

import Footer from "@/Footer/Footer";

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default Root;
