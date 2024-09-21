/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "@/Firebase/Firebase.init";

export const UserContext = createContext("");

const SocialSignUp = ({ children }) => {
  const [user, setUser] = useState("");
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

  //-------------------google ------------------------

  const handleSignUp = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loginUser = result.user;
        setUser(loginUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //---------------------github----------------------

  const handleGitSignUp = () => {
    signInWithPopup(auth, gitProvider)
      .then((result) => {
        const loginUser = result.user;
        setUser(loginUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //---------------------Sign Out --------------------

  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        // Sign-out successful.
        console.log("sign out successfully", result);
        setUser("")
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <UserContext.Provider
      value={{ user, handleSignUp, handleGitSignUp, handleSignOut }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default SocialSignUp;
