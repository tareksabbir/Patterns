// import GithubPopup from "@/Authentication/GithubPopup";
// import GooglePopup from "@/Authentication/GooglePopup";
// import { Button } from "@/components/ui/button";
// import { UserContext } from "@/Context/SocialSignUp";
// import { useContext } from "react";

//import Blog from "./Blog";

import Contact from "./Contact";
import Hero from "./Hero";

//import Hero from "./Hero";
import SectionCard from "./SectionCard";

const Home = () => {
  // const { user, handleSignOut } = useContext(UserContext);
  return (
    <>
      {/* {user && (
        <div className="flex items-center justify-center mb-5">
          <Button onClick={handleSignOut}>Sign Out</Button>
        </div>
      )}
      <div className="flex items-center justify-center gap-2">
        <GooglePopup></GooglePopup>
        <GithubPopup></GithubPopup>
      </div> */}

      <Hero></Hero>
      <SectionCard></SectionCard>
      <Contact></Contact>
    </>
  );
};

export default Home;
