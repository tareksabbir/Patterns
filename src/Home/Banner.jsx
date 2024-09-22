import cover from "../assets/cover.png";
import { Separator } from "@/components/ui/separator"


const Banner = () => {
  return (
    <div>
      <div className="container px-5 mx-auto mt-8 md:mt-10">
        <h1 className="text-xl font-light md:text-5xl">
          We are on the same side
        </h1>
        <h1 className="text-6xl md:text-[12.5rem] font-bold ">Design is our</h1>
      </div>

      <div className="relative w-full h-[10vh] lg:h-[50vh] overflow-hidden mt-2 md:mt-5">
        <img src={cover} alt="" className="object-cover w-full h-full" />
        <div className="container absolute top-0 left-0 right-0 mx-auto ">
          <h1 className="text-6xl px-5 md:text-[12.5rem] font-bold text-white text-shadow ">
            Passion
          </h1>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="justify-between px-5 mt-5 mb-5 md:mb-24 md:px-8 md:mt-24 xs:flex-wrap md:flex item-center">
          <h1 className="flex items-center justify-start text-xl font-bold md:text-5xl ">
            Milestone
          </h1>
          <p className="w-1/3 md:text-2xl">
            Achievements from the various experiences that we have gone through
            in various cultures with different pattern and habits
          </p>
        </div>
        <Separator />
      </div>
    </div>
  );
};

export default Banner;
