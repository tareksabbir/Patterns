/* eslint-disable react/prop-types */
import app from "@/Firebase/Firebase.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext } from "react";

export const UseContext = createContext(null);

const AuthProvider = ({ children }) => {
  //const [user, setUser] = useState(null);
  const auth = getAuth(app);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const passReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const authValue = { createUser, userLogin, passReset };
  return (
    <UseContext.Provider value={authValue}>{children}</UseContext.Provider>
  );
};

export default AuthProvider;
