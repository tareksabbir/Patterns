const Order = () => {
  return (
    <div className="container mx-auto">
      <section className="relative py-24">
        <div className="w-full px-4 mx-auto max-w-7xl md:px-5 lg-6">
          <h2 className="text-4xl font-bold leading-10 text-center text-black font-manrope">
            Payment Successful
          </h2>
          <p className="mt-4 text-lg font-normal leading-8 text-center text-gray-500 mb-11">
            Thanks for making a purchase you can check our order summary frm
            below
          </p>
          <div className="max-w-xl pt-6 border border-gray-200 main-box rounded-xl max-lg:mx-auto lg:max-w-full">
            <div className="flex flex-col justify-between px-6 pb-6 border-b border-gray-200 lg:flex-row lg:items-center">
              <div className="data">
                <p className="text-base font-semibold leading-7 text-black">
                  Order Id:{" "}
                  <span className="font-medium text-indigo-600">#10234987</span>
                </p>
                <p className="mt-4 text-base font-semibold leading-7 text-black">
                  Order Payment :{" "}
                  <span className="font-medium text-gray-400">
                    {" "}
                    18th march 2025
                  </span>
                </p>
              </div>
              <button className="py-3 text-sm font-semibold leading-7 text-white transition-all duration-500 bg-indigo-600 rounded-full shadow-sm px-7 max-lg:mt-5 shadow-transparent hover:bg-indigo-700 hover:shadow-indigo-400">
                Track Your Order
              </button>
            </div>
            <div className="w-full px-3 min-[400px]:px-6">
              <div className="flex flex-col items-center w-full gap-6 py-6 border-b border-gray-200 lg:flex-row">
                <div className="img-box max-lg:w-full">
                  <img
                    src="https://cdn.dribbble.com/userupload/8713094/file/original-f0a15aebcea4ae245c7c74ca6610985e.png?resize=1024x768"
                    alt="dashboard"
                    className="aspect-square w-full lg:max-w-[140px] rounded-xl object-cover"
                  />
                </div>
                <div className="flex flex-row items-center w-full ">
                  <div className="grid w-full grid-cols-1 lg:grid-cols-2">
                    <div className="flex items-center">
                      <div className="">
                        <h2 className="mb-3 text-xl font-semibold leading-8 text-black">
                          Dashboard upgrade
                        </h2>
                        <p className="mb-3 text-lg font-normal leading-8 text-gray-500 ">
                          By: Samiul Jonson
                        </p>
                        <div className="flex items-center ">
                          <p className="pr-4 mr-4 text-base font-medium leading-7 text-black border-r border-gray-200">
                           Project Size: <span className="text-gray-500">Small</span>
                          </p>
                          <p className="text-base font-medium leading-7 text-black ">
                            Revision: <span className="text-gray-500">2 times</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-5">
                      <div className="flex items-center col-span-5 lg:col-span-1 max-lg:mt-3">
                        <div className="flex gap-3 lg:block">
                          <p className="text-sm font-medium leading-7 text-black">
                            Bill
                          </p>
                          <p className="text-sm font-medium leading-7 text-indigo-600 lg:mt-4">
                            $100
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center col-span-5 lg:col-span-2 max-lg:mt-3 ">
                        <div className="flex gap-3 lg:block">
                          <p className="text-sm font-medium leading-7 text-black">
                            Status
                          </p>
                          <p className="font-medium text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3 bg-emerald-50 text-emerald-600">
                            Ready for Delivery
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center col-span-5 lg:col-span-2 max-lg:mt-3">
                        <div className="flex gap-3 lg:block">
                          <p className="text-sm font-medium leading-6 text-black whitespace-nowrap">
                            Expected Delivery Time
                          </p>
                          <p className="text-base font-medium leading-7 whitespace-nowrap lg:mt-3 text-emerald-500">
                            23rd March 2025
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center w-full gap-6 py-6 lg:flex-row">
                <div className="img-box max-lg:w-full">
                  <img
                    src="https://cdn.dribbble.com/userupload/15151234/file/original-7a0a503ebf04b5bfb9b49946069d8f86.png?resize=1024x768"
                    alt="Diamond Watch image"
                    className="aspect-square w-full lg:max-w-[140px] rounded-xl object-cover"
                  />
                </div>
                <div className="flex flex-row items-center w-full ">
                  <div className="grid w-full grid-cols-1 lg:grid-cols-2">
                    <div className="flex items-center">
                      <div className="">
                        <h2 className="mb-3 text-xl font-semibold leading-8 text-black ">
                          Home page upgrade
                        </h2>
                        <p className="mb-3 text-lg font-normal leading-8 text-gray-500">
                          By: Mohiuddin Bablu
                        </p>
                        <div className="flex items-center ">
                          <p className="pr-4 mr-4 text-base font-medium leading-7 text-black border-r border-gray-200">
                           Project Size: <span className="text-gray-500">Regular</span>
                          </p>
                          <p className="text-base font-medium leading-7 text-black ">
                          Revision: <span className="text-gray-500">1 time</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-5">
                      <div className="flex items-center col-span-5 lg:col-span-1 max-lg:mt-3">
                        <div className="flex gap-3 lg:block">
                          <p className="text-sm font-medium leading-7 text-black">
                            Bill
                          </p>
                          <p className="text-sm font-medium leading-7 text-indigo-600 lg:mt-4">
                            $100
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center col-span-5 lg:col-span-2 max-lg:mt-3 ">
                        <div className="flex gap-3 lg:block">
                          <p className="text-sm font-medium leading-7 text-black">
                            Status
                          </p>
                          <p className="font-medium text-sm leading-6 py-0.5 px-3 whitespace-nowrap rounded-full lg:mt-3 bg-indigo-50 text-indigo-600">
                            Dispatched
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center col-span-5 lg:col-span-2 max-lg:mt-3">
                        <div className="flex gap-3 lg:block">
                          <p className="text-sm font-medium leading-6 text-black whitespace-nowrap">
                            Expected Delivery Time
                          </p>
                          <p className="text-base font-medium leading-7 whitespace-nowrap lg:mt-3 text-emerald-500">
                            23rd March 2025
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between w-full px-6 border-t border-gray-200 lg:flex-row ">
              <div className="flex flex-col items-center border-gray-200 sm:flex-row max-lg:border-b">
                <button className="flex items-center justify-center gap-2 py-6 text-lg font-semibold text-black transition-all duration-500 bg-white border-gray-200 outline-0 sm:pr-6 sm:border-r whitespace-nowrap group hover:text-indigo-600">
                  <svg
                    className="transition-all duration-500 stroke-black group-hover:stroke-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M5.5 5.5L16.5 16.5M16.5 5.5L5.5 16.5"
                      stroke=""
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                  Cancel Order
                </button>
                <p className="py-3 pl-6 text-lg font-medium text-gray-900 max-lg:text-center">
                  Paid using Credit Card{" "}
                  <span className="text-gray-500">ending with 8822</span>
                </p>
              </div>
              <p className="py-6 text-lg font-semibold text-black">
                Total Price: <span className="text-indigo-600"> $200.00</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
