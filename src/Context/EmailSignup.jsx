/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "@/Firebase/Firebase.init";

export const EmailContext = createContext("");

const EmailSignUp = ({ children }) => {
  const [user, setUser] = useState([]);
  const auth = getAuth(app);

  const handleCreateUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <EmailContext.Provider value={{ user, handleCreateUser, handleSignIn }}>
      {children}
    </EmailContext.Provider>
  );
};

export default EmailSignUp;
