import cover from "../assets/cover.png";

const Banner = () => {
  return (
    <div>
      <div className="container mx-auto md:mt-8 ">
        <h1 className="font-light md:text-5xl sm:text-2xl">
          We are on the same side
        </h1>
        <h1 className="md:text-[12.5rem]  sm:text-[5rem] font-bold lg:mt-[-3rem]">
          Design is our
        </h1>
      </div>
      {/* <div className="relative w-full">
        <img src={cover} alt="" className="object-cover w-full " />
        <div className="container mx-auto">
          <h1 className="md:text-[15.5rem]  sm:text-[5rem] font-bold ">
            Passion
          </h1>
        </div>
      </div> */}
      <div className="relative w-full h-[50vh] overflow-hidden lg:mt-[-2rem]">
        <img src={cover} alt="" className="object-cover w-full h-full" />
        <div className="container absolute top-0 left-0 right-0 mx-auto md:mt-[-4rem]">
          <h1 className="md:text-[12.5rem] sm:text-[5rem] font-bold text-white text-shadow ">
            Passion
          </h1>
        </div>
      </div>
    </div>
    
  );
};

export default Banner;
