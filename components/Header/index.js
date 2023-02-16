/** @format */

import React from "react";
import Image from "next/image";
import logo from "/public/images/rougee.png";
function Header({data}) {
  return (
    <div className="max-w-6xl  h-fit relative mx-auto py-5  flex items-center justify-between">
      <div className="pl-5">
        <Image alt="logo" src={logo} className="h-8 w-fit object-contain" />
      </div>
      <div className="pr-5">
        <button className="px-6 py-2 rounded-md cursor-pointer  bg-rouge-Pink transition-colors duration-300 hover:bg-hover-rouge-Pink text-white font-medium text-sm">
          {data?data:"Register"}
        </button>
      </div>
    </div>
  );
}

export default Header;
