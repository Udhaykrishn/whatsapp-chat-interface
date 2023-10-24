import { useAppContext } from "./AppContext";

const Body = () => {
  const { sharedData } = useAppContext();
  
  return (
    <div className=" scroll-m-0 h-[894px] translate-y-20 overflow-x-scroll  w-full   bg-slate-600">
      <ul>
        {sharedData.map((data,index)=>(
            <li className="text-3xl text-white text-center" key={index}>{data}</li>
        ))}
      </ul>
    </div>
  );
};

export default Body;
