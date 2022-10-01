import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/Header.css";
const Header = () => {
  return (
    <header className="bg-[#00ADB5] flex justify-between items-center text-white  p-4">
      <div className="flex items-center text-xs">
        <h3 className="font-bold w-1/2 mr-2">TecNM Campus RC</h3>
        <Link
          to="/create"
          className=" font-bold  bg-blue-400 p-2 rounded-lg hover:opacity-90"
        >
          <p className="text-xs">Agregar nota</p>
        </Link>
      </div>

      <img src="/logo.png" alt="logo" className=" w-14 " />
    </header>
  );
};

export default Header;
