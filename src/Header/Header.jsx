import { Link, NavLink } from "react-router-dom";



const Header = () => {
    return (
        <div>
         <div className="bg-white lg:pb-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <header className="flex items-center justify-between py-4 md:py-8">

      <a href="/" className="inline-flex items-center gap-2.5 text-lg font-bold text-black md:text-xl" aria-label="logo">
      <svg fill="none" height="40" viewBox="0 0 42 48" width="42" xmlns="http://www.w3.org/2000/svg"><circle cx="27.5" cy="23.5" fill="#7839ee" r="14.5"/><path d="m14.7196 16.6448c-1.1618-.4174-2.4141-.6448-3.7196-.6448-6.07513 0-11 4.9249-11 11s4.92487 11 11 11h16.5c-8.0081 0-14.5-6.4919-14.5-14.5 0-2.4797.6224-4.814 1.7196-6.8552z" fill="#2e90fa"/></svg>

       Authentication
      </a>
      
      <nav className="hidden gap-12 lg:flex">
        <NavLink>
        <Link href="#" className=" font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Home</Link>
        </NavLink>
        <NavLink>
        <Link href="#" className=" font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">About</Link>
        </NavLink>
        <NavLink>
        <Link href="#" className=" font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Contact</Link>
        </NavLink>
        <NavLink>
        <Link href="#" className=" font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Documentation</Link>
        </NavLink>
        
      </nav>
   
      <div className="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
        <Link href="#" className="inline-block rounded-lg px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:text-indigo-500 focus-visible:ring active:text-indigo-600 md:text-base">Sign in</Link>
        <Link href="#" className=" text-sm font-semibold text-gray-500  border rounded-xl px-5 flex items-center ">Sign up</Link>

        
      </div>

      <button type="button" className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>

        Menu
      </button>
 
    </header>

  

  </div>
</div>
        </div>
    );
};

export default Header;