import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "@/Firebase/Firebase.init";

export const EmailContext =createContext()

const EmailSignUp = () => {
    const [user,setUser] =useState([])
    const auth = getAuth(app)

    const handleSubmit =()=>{
        createUserWithEmailAndPassword(auth, email, password)
        
    }

    
    return (
        <div>
            
        </div>
    );
};

export default EmailSignUp;