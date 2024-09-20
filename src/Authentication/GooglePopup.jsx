import { Button } from "@/components/ui/button";
import { UserContext } from "@/Context/GoogleSignUp";
import { useContext } from "react";

const GooglePopup = () => {
  const { user, handleSignUp } = useContext(UserContext);
  return (
    <>
      <div>{user.email}</div>
      <div>
        <Button onClick={handleSignUp}>Google Sing Up</Button>
      </div>
    </>
  );
};

export default GooglePopup;
