import { Button } from "@/components/ui/button";
import { UserContext } from "@/Context/GoogleSignUp";
import { useContext } from "react";

const GithubPopup = () => {
  const { user, handleGitSignUp } = useContext(UserContext);
  return (
    <>
      <div>
      <div>{user?.displayName}</div>
      <div>
        <Button onClick={handleGitSignUp}> Github Sing Up</Button>
      </div>
      </div>
    </>
  );
};

export default GithubPopup;
