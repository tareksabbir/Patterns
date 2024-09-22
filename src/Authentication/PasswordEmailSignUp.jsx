import app from "@/Firebase/Firebase.init";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Link } from "react-router-dom";
import cover from "../assets/cover.png";

const PasswordEmailSignUp = () => {
  const auth = getAuth(app);
  const handleCreateUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log("User created:", result.user);
      })
      .catch((error) => {
        console.error("Error creating user:", error.code, error.message);
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const fName = e.target.first_name.value;
    const lName = e.target.last_name.value;
    const name = fName + " " + lName;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
    handleCreateUser(email, password);
  };
  
  return (
    <div>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
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
                Welcome to Authentication 🦑
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                This is a practice firebase auth form where a person can
                register there account via email and other information
              </p>
              <div className="flex gap-2">
              <button className="flex items-center justify-center px-4 py-1 mt-8 transition border rounded-md outline-none -2 ring-gray-400 ring-offset-2 focus:ring-2 hover:border-transparent hover:bg-black hover:text-white">
                <img
                  className="h-5 mr-2"
                  src="https://static.cdnlogo.com/logos/g/35/google-icon.svg"
                  alt
                />{" "}
                Register with Google
              </button>
              <button className="flex items-center justify-center px-4 py-1 mt-8 transition border rounded-md outline-none -2 ring-gray-400 ring-offset-2 focus:ring-2 hover:border-transparent hover:bg-black hover:text-white">
                <img
                  className="h-5 mr-2"
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt
                />{" "}
                Register with Github
              </button>
              </div>
              <div className="relative flex h-px mt-8 bg-gray-200 place-items-center">
                <div className="absolute h-6 text-sm text-center text-gray-500 -translate-x-1/2 bg-white left-1/2 w-14">
                  or
                </div>
              </div>

              {/* form */}
              <form
                onSubmit={handleFormSubmit}
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
                    type="password"
                    id="Password"
                    name="password"
                    className="w-full p-2 mt-1 text-sm border rounded-md"
                  />
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
                    <a href="#" className="text-gray-700 underline">
                      {" "}
                      terms and conditions{" "}
                    </a>
                    and
                    <a href="#" className="text-gray-700 underline">
                      privacy policy
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
                    <a href="#" className="text-gray-700 underline">
                      Log in
                    </a>
                    .
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default PasswordEmailSignUp;
