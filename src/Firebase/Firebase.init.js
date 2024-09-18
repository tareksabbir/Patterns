// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWRG4xZz0ijNfHLGRG75RJ6geMwB63bNk",
  authDomain: "authentication-13c3c.firebaseapp.com",
  projectId: "authentication-13c3c",
  storageBucket: "authentication-13c3c.appspot.com",
  messagingSenderId: "385505100693",
  appId: "1:385505100693:web:aa03399653b0ff2f2cec9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app



//todo: basically here we are just practicing it thats why we do not use env file but this is not recomended for the production based website please use env file in the  future