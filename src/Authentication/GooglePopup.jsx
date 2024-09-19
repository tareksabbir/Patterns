import { Button } from "@/components/ui/button";
import app from "@/Firebase/Firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";


const GooglePopup = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider()
    const [googleUser,setGoogleUser] = useState([])
    const googlePopUp =()=>{
        signInWithPopup(auth, provider)
        .then(result =>{
            const user = result.user
            setGoogleUser(user)
        })
        .then(error =>{
            console.log(error)
        })
    }

    return (
        <>
        <div className="flex items-center justify-center">
        <Button onClick={googlePopUp}>Click me</Button>
        
        </div>
        <h1 className="mt-5 text-center">{googleUser?.email}</h1>
        </>
    );
};

export default GooglePopup;