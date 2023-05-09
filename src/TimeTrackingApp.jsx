import { ActivityTime } from "./components/ActivityTime";
import { useEffect, useState } from "react";

export const TimeTrackingApp = () => {

  const [data, setData] = useState([]);

  // initially we display the 'daily' timeframe
  const [time, setTime] = useState("daily");

  // get the json data
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  },[]);

  // gives us the json data with a different timeframe
  const getTime = (newTime) => {
    setTime(newTime);
  };

  return (
    <>
      <main className="flex h-screen transition-all duration-300 ease-out">
        <section className="grid place-items-center w-full h-fit grid-cols-1 grid-rows-7 gap-7 m-auto px-7 py-12 laptop:w-[1000px] laptop:h-[450px] laptop:grid-cols-4 laptop:grid-rows-2 laptop:py-0 desktop:w-[1200px] desktop:h-[550px] desktop:grid-cols-4 desktop:grid-rows-2 desktop:py-0">
          <section className="bg-[#1D204B] rounded-[20px] row-span-2 w-full max-w-[600px] min-h-[200px] laptop:h-full desktop:h-full">
            <div className="bg-[#5746EA] text-white h-full rounded-[20px] flex items-center p-7 laptop:h-[18rem] laptop:flex-col laptop:items-start desktop:h-[24rem] desktop:flex-col desktop:items-start">
              <img
                className="h-[65px] mr-5 border-[3px] rounded-full laptop:mb-10 laptop:h-[30%] desktop:mb-10 desktop:h-[25%]"
                src="/image-jeremy.png"
                alt="profile picture"
              />

              <div>
                <p className="opacity-50 mb-1 laptop:mb-2 desktop:mb-2">Report to</p>

                <h2 className=" leading-tight font-extralight text-[22px] laptop:text-[28px] desktop:text-[42px]">
                  Jeremy Robson
                </h2>
              </div>
            </div>

            <div className="flex text-white mt-auto p-7 justify-between laptop:flex-col desktop:flex-col">
              {/* Send the timeframe */}
              <button
                onClick={() => getTime("daily")}
                className="text-md text-start opacity-50 laptop:mb-5 desktop:mb-5 hover:opacity-100 focus:opacity-100 transition duration-300 ease-out"
              >
                Daily
              </button>
              <button
                onClick={() => getTime("weekly")}
                className="text-md text-start opacity-50 laptop:mb-5 desktop:mb-5 hover:opacity-100 focus:opacity-100 transition duration-300 ease-out"
              >
                Weekly
              </button>
              <button
                onClick={() => getTime("monthly")}
                className="text-md text-start opacity-50 hover:opacity-100 focus:opacity-100  transition duration-300 ease-out"
              >
                Monthly
              </button>
            </div>
          </section>

          {/* for each item in the json file we send props that 
          will give us the component's information */}
          {data.map((item, index) => (
            <ActivityTime
              key={index}
              id={item.title}
              hours={item.timeframes[time].current}
              prev={item.timeframes[time].previous}
              color={item.color}
              icon={item.icon}
            />
          ))}
        </section>
      </main>
    </>
  );
};
