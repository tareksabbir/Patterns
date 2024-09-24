import { UseContext } from "@/context/AuthProvider";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import { getAuth, updateProfile } from "firebase/auth";
import app from "@/Firebase/Firebase.init";

const RegisterForm = () => {
  const [show, setShow] = useState(false);
  const { createUser } = useContext(UseContext);
  const navigate = useNavigate();
  const auth = getAuth(app);
  //------------------------------------------------------------create account------

  const handleSubmit = (e) => {
    e.preventDefault();
    const f_name = e.target.first_name.value;
    const l_name = e.target.last_name.value;
    const name = f_name + " " + l_name;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const checkbox = e.target.marketing_accept.checked;
    if (!password.length > 6) {
      toast.error("password must be more then 6 Characters");
    }
    console.log(name, email, password, checkbox);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Account created successfully ");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });

    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-6 gap-6 mt-8">
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="FirstName"
          className="block text-sm font-medium text-gray-700"
        >
          First Name
        </label>

        <input
          type="text"
          id="FirstName"
          name="first_name"
          className="w-full p-2 mt-1 text-sm border rounded-md"
          required
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="LastName"
          className="block text-sm font-medium text-gray-700"
        >
          Last Name
        </label>

        <input
          type="text"
          id="LastName"
          name="last_name"
          className="w-full p-2 mt-1 text-sm border rounded-md"
          required
        />
      </div>

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
          className="w-full p-2 mt-1 text-sm border rounded-md"
          required
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
            I want to receive emails about events, product updates and company
            announcements.
          </span>
        </label>
      </div>

      <div className="col-span-6">
        <p className="text-sm text-gray-500">
          By creating an account, you agree to our
          <a href="#" className="ml-1 font-bold text-gray-700">
            {" "}
            Terms and conditions{" "}
          </a>
          and
          <a href="#" className="ml-1 font-bold text-gray-700 ">
            Privacy policy
          </a>
          .
        </p>
      </div>

      <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
        <button className="inline-block px-12 py-3 text-sm font-medium text-white transition bg-blue-600 border border-blue-600 rounded-md shrink-0 hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
          Create an account
        </button>

        <p className="mt-4 text-sm text-gray-500 sm:mt-0">
          Already have an account?
          <Link to={"/login"} className="ml-2 font-bold text-gray-700">
            Log in
          </Link>
          .
        </p>
      </div>
      <Toaster />
    </form>
  );
};

export default RegisterForm;
