/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { BiSolidVideo } from "react-icons/bi";
import { IoCallOutline } from "react-icons/io5";
import { FiMoreVertical } from "react-icons/fi";
import js from "../../public/js.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import ImageModel from "./Modal/ImageModel"

const Header = () => {
  const [isModelOpen,setModelOpen] = useState(false);

  const toggleModal = ()=>{
    setModelOpen(!isModelOpen);
  }
  
  return (
    <header className="fixed bg-slate-800 w-full h-20 z-40 flex items-center justify-between">
      <main className="flex items-center justify-center">
        <section className=" ml-4 w-14 h-14 rounded-full overflow-hidden cursor-pointer" onClick={toggleModal}>
          <img
            src={js}
            alt="Profile"
          />
        </section>
        {isModelOpen && (
          <ImageModel imageUrl={js} onClose={toggleModal} />
        )}
        <Link to={"/about"}>
          <section className="bg-gray-800 translate-x-[10] w-30 h-fit ml-2">
            <h2 className="text-lg text-white">Whatsapp</h2>
          </section>
        </Link>
      </main>
      <main>
        <section className="bg-gray-800 w-40 h-full mr-6 rounded-xl flex items-center justify-center">
          <IconWithBackground icon={<BiSolidVideo />} />
          <IconWithBackground icon={<IoCallOutline />} />
          <IconWithBackground icon={<FiMoreVertical />} />
        </section>
      </main>
    </header>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
const IconWithBackground = ({ icon }) => (
  <aside
    className={`bg-gray-800 w-10 h-10 z-50 text-white hover:bg-stone-900 rounded-lg text-3xl flex items-center justify-center ml-3`}
  >
    {icon}
  </aside>
);

export default Header;