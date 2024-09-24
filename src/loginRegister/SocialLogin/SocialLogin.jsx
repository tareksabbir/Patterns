import app from "@/Firebase/Firebase.init";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();
  const navigate = useNavigate()

  const handleSignUp = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        toast.success("welcome to the pattern");
        navigate('/')
      })
      .catch((error) => {
        toast.error(`${error.massage}`);
      });
  };

  //---------------------github----------------------

  const handleGitSignUp = () => {
    signInWithPopup(auth, gitProvider)
      .then((result) => {
        console.log(result.user);
        toast.success("welcome to the pattern");
        navigate('/')
      })
      .catch((error) => {
        toast.error(`${error.massage}`);
      });
  };

  return (
    <div>
      {" "}
      <div className="flex gap-2">
        <button
          onClick={handleSignUp}
          className="flex items-center justify-center px-4 py-1 mt-8 transition border rounded-md outline-none -2 ring-gray-400 ring-offset-2 focus:ring-2 hover:border-transparent hover:bg-black hover:text-white"
        >
          <img
            className="h-5 mr-2"
            src="https://static.cdnlogo.com/logos/g/35/google-icon.svg"
            alt=""
          />{" "}
          Register with Google
        </button>
        <button
          onClick={handleGitSignUp}
          className="flex items-center justify-center px-4 py-1 mt-8 transition border rounded-md outline-none -2 ring-gray-400 ring-offset-2 focus:ring-2 hover:border-transparent hover:bg-black hover:text-white"
        >
          <img
            className="h-5 mr-2"
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt=""
          />{" "}
          Register with Github
        </button>
      </div>
      <div className="relative flex h-px mt-8 bg-gray-200 place-items-center">
        <div className="absolute h-6 text-sm text-center text-gray-500 -translate-x-1/2 bg-white left-1/2 w-14">
          or
        </div>
        <Toaster></Toaster>
      </div>
    </div>
  );
};

export default SocialLogin;
