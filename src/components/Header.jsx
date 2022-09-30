import React from "react";
import "../styles/components/Header.css";
const Header = () => {
  return (
    <header className="bg-[#00ADB5] flex justify-between items-center text-white  p-4">
      <h3 className="font-bold ">TecNM Campus Region Carbonifera</h3>
      <img src="/logo.png" alt="logo" className=" w-14 " />
    </header>
  );
};

export default Header;
