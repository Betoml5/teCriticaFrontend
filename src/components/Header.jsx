import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#FF5B00] flex justify-between items-center text-white  p-4">
      <div className="flex items-center ">
        <Link to="/" className="font-bold mr-2 md:text-xl text-[#FFEE63]">
          TecNM Campus RC
        </Link>
        <Link
          to="/create"
          className="flex items-center justify-center bg-blue-500 rounded-full w-6 h-6"
        >
          <img src="/add.png" alt="add" />
        </Link>
      </div>
      <img src="/logo.png" alt="logo" className=" w-14 " />
    </header>
  );
};

export default Header;
