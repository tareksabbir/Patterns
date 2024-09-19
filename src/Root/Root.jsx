import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Root = () => {
  return (
    <>

        <Header></Header>
        <Outlet />
 
    </>
  );
};

export default Root;
