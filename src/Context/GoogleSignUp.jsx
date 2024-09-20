/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "@/Firebase/Firebase.init";

export const UserContext = createContext("gold");

const GoogleSignUp = ({ children }) => {
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

  return (
    <UserContext.Provider value={{ user, handleSignUp ,handleGitSignUp}}>
      {children}
    </UserContext.Provider>
  );
};

export default GoogleSignUp;
