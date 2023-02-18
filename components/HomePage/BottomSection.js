/** @format */

import Image from "next/image";
import React from "react";
import explore from "/public/images/explore.png";
import blog from "/public/images/Blog.png";
import forum from "/public/images/forum.png";
import oasis from "/public/images/oasis.png";
function BottomSection() {
  return (
    <>
      <div className="relative h-fit w-full py-10 bg-[#F5F5FF] flex items-center justify-center">
        <div className="h-fit max-w-4xl w-full  px-5">
          <div className="relative overflow-hidden flex flex-col h-fit px-4 items-center justify-center bg-white py-10 rounded-md shadow-md">
            <div className="absolute -top-[315px] right-0 w-[600px] h-[400px] rounded-[50%] bg-[radial-gradient(#b5e5ff,_#0287f6)] opacity-[0.07]"></div>
            <div className="absolute -top-[55px] -right-[90px] w-[250px] h-[250px] rounded-[50%] bg-[radial-gradient(#c0fffb,_#00bcb0)] opacity-10"></div>
            <div className=" font-medium text-3xl md:text-4xl">
              Discover rougee.io
            </div>
            <div className="flex items-center space-x-5 flex-wrap font-readex justify-center  pt-6">
              <div className="flex items-center justify-center flex-col space-y-1">
                <Image
                  alt="explore"
                  src={explore}
                  className="hover:scale-110 transition-all duration-500"
                />
                <p>Explore</p>
              </div>

              <div className="flex items-center justify-center flex-col space-y-1">
                <Image
                  alt="explore"
                  src={blog}
                  className="hover:scale-110 transition-all duration-500"
                />
                <p>Blog</p>
              </div>

              <div className="flex items-center justify-center flex-col space-y-1">
                <Image
                  alt="explore"
                  src={forum}
                  className="hover:scale-110 transition-all duration-500"
                />
                <p>Forum</p>
              </div>

              <div className="flex items-center justify-center flex-col space-y-1">
                <Image
                  alt="explore"
                  src={oasis}
                  className="hover:scale-110 transition-all duration-500"
                />
                <p>Oasis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BottomSection;
