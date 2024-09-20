/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "@/Firebase/Firebase.init";

export const UserContext = createContext("gold");

const GoogleSignUp = ({ children }) => {
  const [user, setUser] = useState("");
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleSignUp = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loginUser = result.user;
        setUser(loginUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <UserContext.Provider value={{ user, handleSignUp }}>
      {children}
    </UserContext.Provider>
  );
};

export default GoogleSignUp;
