import cover from "../assets/cover.png";
const Counter = () => {
  const data = [
    {
      number: "+350",
      text: "Successful Projects",
    },
    {
      number: "98%",
      text: "Client Satisfaction With Our Performance",
    },
    {
      number: "+100",
      text: "Adv Award Winner",
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between md:mb-20 md:mt-20">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <h1
              className="text-[2rem] text-transparent font-extrabold md:text-[8rem] bg-clip-text"
              style={{
                backgroundImage: `url(${cover})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {item.number}
            </h1>
            <h1 className="text-sm font-medium text-center md:text-2xl">{item.text}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
