import { Link } from "react-router-dom";
import cover from "../../assets/cover.png";
import SocialLogin from "../SocialLogin/SocialLogin";
import LoginForm from "./LoginForm";
import { Toaster } from "react-hot-toast";
const Login = () => {
  



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
                Welcome Back Please Login 🦑
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                This is a practice firebase auth form where a person can
                register there account via email and other information
              </p>
              <SocialLogin></SocialLogin>

              <LoginForm></LoginForm>
              <Toaster></Toaster>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Login;
