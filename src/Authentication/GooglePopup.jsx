import { Button } from "@/components/ui/button";
import { UserContext } from "@/Context/GoogleSignUp";
import { useContext } from "react";


const GooglePopup = () => {
    const {user,handleSignUp} = useContext(UserContext)
    return (
        <>
        <div>
            hey {user.email}
        </div>
        <Button onClick={handleSignUp}>Sing Up</Button>
        </>
    );
};

export default GooglePopup;