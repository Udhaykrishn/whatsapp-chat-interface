/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useAppContext } from "./AppContext";
// import { motion } from "framer-motion"; // Import framer-motion library

const Body = () => {
  const { sharedData } = useAppContext();

  const Message = ({ data, time, index }) => {
    

    return (
      <div
        className={`translate-y-16 flex items-end justify-end w-auto text-3xl text-white mr-4 ${
          index > 0 ? "mt-2" : ""
        }`}
        
      >
        <div className="w-auto h-auto text-xl mb-3 bg-green-600 rounded-xl p-2">
          <p>
            {data}
            <span className="text-sm m-2 ">{time}</span>
          </p>
        </div>
      </div>
    );
  };

  const formatFullDate = () => {
    const date = new Date();
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  const FullDate = () => (
    <div className="w-full text-xs xl:text-md top-0 absolute flex items-center justify-center">
      <div className="w-auto h-auto p-2 bg-gray-700 text-white rounded-lg">
        {formatFullDate()}
      </div>
    </div>
  );

  return (
    <div className="relative scroll-m-0 h-screen translate-y-20 overflow-x-scroll w-full bg-slate-600">
      <div className="relative mb-2 w-full my-2">
        <FullDate />
        {sharedData.map((data, index) => {
          const [text, time] = data.split(" - ");
          return <Message data={text} time={time} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Body;
