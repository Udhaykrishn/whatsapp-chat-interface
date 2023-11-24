import { useState } from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { LuSend } from "react-icons/lu";
import { ImAttachment } from "react-icons/im";
import { BiSolidCamera } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useAppContext } from "./AppContext";

const Footer = () => {
  const { setSharedData } = useAppContext();
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  const handleClick = () => {
    if (inputText.trim() !== "") {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const amOrPm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
      const formattedMinutes = minutes.toString().padStart(2, '0');
      const currentTime = `${formattedHours}:${formattedMinutes} ${amOrPm}`;
      const updatedItems = [...items, `${inputText} - ${currentTime}`];
      setItems(updatedItems);
      setSharedData(updatedItems);
      setInputText("");
    }
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setInputText(inputValue)
  };

  return (
    <footer className="fixed bottom-0 overflow-hidden flex items-center justify-between w-full h-20 bg-slate-600">
      <div className="flex items-center justify-between w-full bg-white h-14 rounded-full">
        <div className="lg:ml-1 ml-2 flex items-center justify-center text-3xl font-bold bg-transparent w-1/12 h-14 ">
          <Link to={"/"}>
            <BsEmojiSmileFill className="hover:animate-spin text-gray-600" />
          </Link>
        </div>

        <div className="ml-2 sm:ml-3 md:mr-4 lg:ml-1 w-8/12 rounded-xl h-full flex items-center top-0">
          <input
            type="text"
            className="outline-none w-full h-3/4 text-sm placeholder:text-sm outline-0"
            placeholder="Message"
            value={inputText}
            onChange={handleChange}
          />
        </div>

        <div className="ml-4 md:ml-4 overflow-hidden flex items-center justify-evenly w-4/12 h-full rounded-lg">
          <div className=" text-gray-600 text-3xl w-10 h-full flex items-center justify-end md:ml-16">
            <Link>
              <ImAttachment className="hover:animate-ping" />
            </Link>
          </div>
          <div className="text-gray-600 text-3xl w-10 h-full flex items-center justify-center">
            <Link>
              <BiSolidCamera />
            </Link>
          </div>
        </div>
      </div>

      <div className="ml-4 mr-4  w-20 h-16 overflow-hidden bg-green-400 rounded-full flex justify-center items-center text-3xl">
        <button onClick={handleClick}>
          <LuSend className="text-white hover:animate-pulse" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
