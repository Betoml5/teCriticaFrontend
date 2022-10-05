import React from "react";
import { Link } from "react-router-dom";
import SpiderIcon from "../assets/static/spider-insect.png";
const Header = () => {
  return (
    <header className="bg-[#FF5B00] flex justify-between items-center text-white  p-4">
      <div className="spider w-10 h-10 absolute top-0 right-20 translate-x-1.5">
        <div className="h-14 w-[0.1px] bg-white absolute -top-10 left-1/2"></div>
        <img src={SpiderIcon} alt="spiderIcon" className="-rotate-12 " />
      </div>
      <div className="flex items-center ">
        <Link to="/" className="font-bold mr-2 md:text-xl neonText">
          TecNM Campus RC
        </Link>
        <Link
          to="/create"
          className="flex items-center justify-center bg-blue-500 rounded-full w-6 h-6"
        >
          <img src="/add.png" alt="add" />
        </Link>
      </div>
      <img src="/logo.png" alt="logoo" className=" w-14 " />
    </header>
  );
};

export default Header;
