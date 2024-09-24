import { UseContext } from "@/context/AuthProvider";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";

const LoginForm = () => {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const { userLogin, passReset } = useContext(UseContext);
    //email login ------------------------------------------------------
    const handleSignIn = (email, password) => {
      userLogin(email, password)
        .then((result) => {
          console.log(result.user);
          toast.success("welcome to the pattern");
        })
        .catch((error) => {
          console.log(error);
          toast.error(`${error.massage}`);
        });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      handleSignIn(email, password);
    };
  
    // forget password-----------------------------------------------------------
  
    const handleForgetPassword = () => {
      passReset( email)
        .then(() => {
          toast.success("please check your email");
        })
        .catch((error) => {
          if (error) {
            toast.error("something went wrong");
          }
        });
    };
    return (
        <form
        onSubmit={handleSubmit}
        className="grid grid-cols-6 gap-6 mt-8"
      >
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="Email"
            className="block text-sm font-medium text-gray-700"
          >
            {" "}
            Email{" "}
          </label>

          <input
            type="email"
            id="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mt-1 text-sm border rounded-md"
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="Password"
            className="block text-sm font-medium text-gray-700"
          >
            {" "}
            Password{" "}
          </label>

          <input
            type={show ? "text" : "password"}
            id="Password"
            name="password"
            className="relative w-full p-2 mt-1 text-sm border rounded-md"
            required
          ></input>
          <span
            onClick={() => setShow(!show)}
            className="absolute ml-[-2rem] mt-3 text-xl"
          >
            {!show ? <IoEyeOutline /> : <FaRegEyeSlash />}
          </span>
        </div>

        <div className="col-span-6">
          <label htmlFor="MarketingAccept" className="flex gap-4">
            <input
              type="checkbox"
              id="MarketingAccept"
              name="marketing_accept"
              className="bg-white border-gray-300 rounded-md shadow-sm size-5"
            />

            <span className="text-sm text-gray-700">
              I want to receive emails about events, product updates and
              company announcements.
            </span>
          </label>
        </div>

        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
          <button className="inline-block px-12 py-3 text-sm font-medium text-white transition bg-blue-600 border border-blue-600 rounded-md shrink-0 hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
            Login account
          </button>

          <p className="mt-4 text-sm text-gray-500 sm:mt-0">
            <Link
              onClick={handleForgetPassword}
              className="mr-2 font-bold text-gray-700"
            >
              Forget Password
            </Link>
            Already have an account?
            <Link
              to={"/register"}
              className="ml-2 font-bold text-gray-700"
            >
              Sign Up
            </Link>
            .
          </p>
        </div>
      </form>
    );
};

export default LoginForm;