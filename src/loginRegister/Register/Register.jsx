import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import cover from "../../assets/cover.png";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useContext, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";
import { UseContext } from "@/context/AuthProvider";

const Register = () => {
  const [show, setShow] = useState(false);
  const { createUser } = useContext(UseContext);
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
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="cover"
              src={cover}
              className="absolute inset-0 object-cover w-full h-full"
            />
          </aside>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <Link className="block text-blue-600" to={"/"}>
                <span className="sr-only">Home</span>
                <svg
                  fill="none"
                  height="48"
                  viewBox="0 0 42 48"
                  width="42"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="27.5" cy="23.5" fill="#7839ee" r="14.5" />
                  <path
                    d="m14.7196 16.6448c-1.1618-.4174-2.4141-.6448-3.7196-.6448-6.07513 0-11 4.9249-11 11s4.92487 11 11 11h16.5c-8.0081 0-14.5-6.4919-14.5-14.5 0-2.4797.6224-4.814 1.7196-6.8552z"
                    fill="#2e90fa"
                  />
                </svg>
              </Link>

              <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to the Registration 🦑
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                This is a practice firebase auth form where a person can
                register there account via email and other information
              </p>
              <SocialLogin></SocialLogin>

              {/* form */}
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-6 gap-6 mt-8"
              >
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
                      I want to receive emails about events, product updates and
                      company announcements.
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
                    <Link
                      to={"/login"}
                      className="ml-2 font-bold text-gray-700"
                    >
                      Log in
                    </Link>
                    .
                  </p>
                </div>
              </form>
              <Toaster />
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Register;
