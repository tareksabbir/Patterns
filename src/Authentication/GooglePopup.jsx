import { Button } from "@/components/ui/button";
import app from "@/Firebase/Firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

const GooglePopup = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [googleUser, setGoogleUser] = useState(null);
  const googlePopUp = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const LoggedInUser = result.user;
        setGoogleUser(LoggedInUser);
      })
      .then((error) => {
        console.log(error);
      });
  };

  const handleSignOutGoogle = () => {
    signOut(auth)
      .then((result) => {
        // Sign-out successful.
        console.log(" Sign-out successful.", result);
        setGoogleUser(null);
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  console.log(googleUser);
  return (
    <>
      <div className="flex items-center justify-center gap-5">
        {googleUser ? (
          <button onClick={handleSignOutGoogle}>Sign Out</button>
        ) : (
          <Button onClick={googlePopUp}>Sign In</Button>
        )}
      </div>
      {googleUser && <h1 className="mt-5 text-center ">{googleUser.email}</h1>}
    </>
  );
};

export default GooglePopup;
