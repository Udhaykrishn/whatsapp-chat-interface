
import { useAppContext } from "./AppContext";
const formatTimestamp = (timestamp) => {
  const options = { hour: 'numeric', minute: 'numeric' };
  return timestamp.toLocaleTimeString(undefined, options);
};
const Body = () => {
  const { sharedData } = useAppContext();
  
  return (
    <div className="scroll-m-0 h-[894px] translate-y-20 overflow-x-scroll w-full"style={{ backgroundImage: 'url("../../public/ng.png")' }}>
      <div className="w-full">
        {sharedData.map((data, index) => (
          <div key={index} className="bg-blue-200 rounded-lg p-4 w-40 h-13 ml-auto mb-4 flex items-center hover:animate-pulse">
            <p className="text-blue-800 text-center">{data}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
