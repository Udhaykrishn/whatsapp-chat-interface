import React from "react";

const Loading = () => {
  const loader = "bg-red-500 h-2.5 w-2.5 bg-current rounded-full";
  return (
    <div className="fixed antialiased animate-ping scroll-smooth w-full h-screen flex  items-center justify-center ">
      <div className={`${loader} mr-1`}></div>
      <div className={`${loader} mr-1`}></div>
      <div className={`${loader}`}></div>
    </div>
  );
};

export default Loading;
