const Product = () => {
    return (
        <div>
            <section className="container px-6 py-8 mx-auto lg:py-16">
            <h3 className="text-xl font-medium text-gray-800 md:text-2xl lg:text-3xl ">Browse Our Projects</h3>
    
            <div className="flex items-center py-6 mt-4 -mx-2 overflow-x-auto whitespace-nowrap">
                <button
                    className=" inline-flex px-4 mx-2 focus:outline-none  items-center py-0.5 text-white bg-indigo-500 hover:bg-indigo-400 duration-300 transition-colors rounded-2xl">All</button>
                <button
                    className=" inline-flex px-4 mx-2 duration-300 transition-colors hover:bg-indigo-500/70 hover:text-white text-gray-500 focus:outline-none py-0.5 cursor-pointer rounded-2xl">Web
                    Design</button>
                <button
                    className=" inline-flex px-4 mx-2 duration-300 transition-colors hover:bg-indigo-500/70 hover:text-white text-gray-500 focus:outline-none py-0.5 cursor-pointer rounded-2xl">Development</button>
                <button
                    className=" inline-flex px-4 mx-2 duration-300 transition-colors hover:bg-indigo-500/70 hover:text-white text-gray-500 focus:outline-none py-0.5 cursor-pointer rounded-2xl">Research</button>
            </div>
    
            <div className="grid grid-cols-1 gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3 ">
                <a href="#" className="transition-all duration-500 lg:col-span-2 hover:scale-105">
                    <img className="object-cover object-top w-full rounded-lg shadow-md shadow-gray-200 h-80 xl:h-96"
                        src="https://cdn.dribbble.com/users/1508879/screenshots/15903419/media/857a3870e3320ab1161d4032b1b67a2f.jpg?resize=1600x1200&vertical=center"
                        alt=""/>
                </a>

                <a href="#" className="transition-all duration-500 hover:scale-105">
                    <img className="object-cover object-top w-full rounded-lg shadow-md shadow-gray-200 h-80 xl:h-96 "
                        src="https://cdn.dribbble.com/users/1508879/screenshots/16498856/media/32184b2e19c570d6295551f5e298f69b.jpg?resize=1600x1200&vertical=center"
                        alt=""/>
                </a>

                <a href="#" className="transition-all duration-500 hover:scale-105">
                    <img className="object-cover object-top w-full rounded-lg shadow-md shadow-gray-200 h-80 xl:h-96"
                        src="https://cdn.dribbble.com/users/1508879/screenshots/6853761/get_study_dashboard_app_4x.jpg?resize=1600x1200&vertical=center"
                        alt=""/>
                </a>

                <a href="#" className="transition-all duration-500 lg:col-span-2 hover:scale-105">
                    <img className="object-cover object-top w-full rounded-lg shadow-md shadow-gray-200 h-80 xl:h-96"
                        src="https://cdn.dribbble.com/userupload/8713094/file/original-f0a15aebcea4ae245c7c74ca6610985e.png?resize=1024x768"
                        alt=""/>
                </a>

                <a href="#" className="transition-all duration-500 lg:col-span-2 hover:scale-105">
                    <img className="object-cover object-top w-full rounded-lg shadow-md shadow-gray-200 h-80 xl:h-96"
                        src="https://cdn.dribbble.com/userupload/3954503/file/original-fef4246afb203638a1b2b74e98ab4c75.jpg?resize=1024x728&vertical=top"
                        alt=""/>
                </a>

                <a href="#" className="transition-all duration-500 hover:scale-105">
                    <img className="object-cover object-top w-full rounded-lg shadow-md shadow-gray-200 h-80 xl:h-96"
                        src="https://cdn.dribbble.com/userupload/4782984/file/original-d656c851a8d685361bb2d667eedecda3.png?resize=1024x768"
                        alt=""/>
                </a>
            </div>
        </section>
        </div>
    );
};

export default Product;