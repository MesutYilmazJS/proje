import React from "react";
import Logo from "../../img/header/logo.png"

const Navbar = () => {
  return (
    <nav className="opacity-80 h-[128px] bg-blue-900 px-6 py-3 flex items-center justify-between text-white">
      <div className="logo w-[357px] ml-[52px]">
        <img className="mb-[23px] mt-[30px] " src={Logo} alt="Logo"/> 

      </div>
      <div className="font-semibold">Home</div>
      <div className="flex">
      <ul className="flex text-sm font-semibold opacity-80">
          <li className="pr-24 cursor-pointer">
            <span className="">Package</span>
          </li>
          <li className=" pr-24 cursor-pointer">
            <span className="">Destination</span>
          </li>
          <li className="pr-24 cursor-pointer">Blog</li>
          <li className="pr-24 cursor-pointer">Contact</li>
        </ul>
        <button className="text-white  focus:outline-none">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>
      </div>
    </nav>
  );
};

export default Navbar;
