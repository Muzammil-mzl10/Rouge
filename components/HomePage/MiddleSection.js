/** @format */

import Image from "next/image";
import React, { useState } from "react";
import tick from "/public/images/tick.svg";
import icons from "/public/images/middlesection.png";
import svg from "/public/images/svg.svg";
function MiddleSection() {
  const [active, setActive] = useState("social");

  return (
    <>
      <div className="relative h-fit w-full py-32 bg-[#F5F5FF] flex items-center justify-center">
        <div className="flex h-fit items-start w-full max-w-6xl flex-col relative px-5">
          <div className="w-full flex flex-col items-center justify-center bg-white shadow-md rounded-xl h-fit -mt-52 px-5 py-5">
            <div className="px-1 z-10 py-1 text-[#666666] bg-[#ECF0F5] flex items-center justify-center space-x-0 font-medium text-xs rounded-2xl">
              <div
                onClick={() => setActive("username")}
                className={`rounded-3xl ${
                  active === "username" && "bg-white text-black"
                } px-2 py-1 cursor-pointer`}
              >
                Username Login
              </div>
              <div
                onClick={() => setActive("social")}
                className={`rounded-3xl ${
                  active === "social" && "bg-white text-black"
                } px-2 py-1 cursor-pointer`}
              >
                Social login
              </div>
            </div>
            <div className="py-8">
              {active === "social" && (
                <a
                  href="https://rougee.io/login-with.php?provider=Facebook"
                  className="flex items-center bg-[#1877f2] py-2 px-2 rounded-2xl text-white"
                >
                  <div className="py-1 px-1 rounded-xl bg-white ">
                    <svg
                      xmlns="http:www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="22"
                      height="22"
                    >
                      <path
                        fill="#1877f2"
                        d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"
                      ></path>
                    </svg>{" "}
                  </div>
                  <span className="px-2 font-medium">Facebook</span>
                </a>
              )}
              {active === "username" && "hahaha"}
            </div>
          </div>
          <div className="flex h-fit space-x-5 items-center pt-20 justify-center w-full">
            <div className="w-full md:w-[60%] flex flex-col font-readex space-y-5 ">
              <div className="flex space-x-2">
                <span>
                  <Image
                    src={tick}
                    alt="tick"
                    className=" w-4 mt-1 object-contain"
                  />
                </span>
                <div className="flex flex-col ">
                  <h2 className="uppercase text-base font-medium">Share</h2>
                  <p className="text-sm sm:text-base font-light">
                    Empowering the users from Web2 to Web3, one connection at a
                    time
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                <span>
                  <Image
                    src={tick}
                    alt="tick"
                    className=" w-5 mt-1 object-contain"
                  />
                </span>
                <div className="flex flex-col ">
                  <h2 className="uppercase text-base font-medium">Discover</h2>
                  <p className="text-sm sm:text-base font-light">
                    Discover new people, create new connections and make new
                    friends while getting rewards.
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                <span>
                  <Image
                    src={tick}
                    alt="tick"
                    className=" w-4 mt-1 object-contain"
                  />
                </span>
                <div className="flex flex-col ">
                  <h2 className="uppercase text-base font-medium">
                    100% Privacy
                  </h2>
                  <p className="text-sm sm:text-base font-light">
                    You have full control over your personal information that
                    you share.
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                <span>
                  <Image
                    src={tick}
                    alt="tick"
                    className=" w-4 mt-1 object-contain"
                  />
                </span>
                <div className="flex flex-col ">
                  <h2 className="uppercase text-base font-medium">
                    More Security
                  </h2>
                  <p className="text-sm sm:text-base font-light">
                    Your account is fully secure. We never share your data with
                    third party..
                  </p>
                </div>
              </div>
            </div>
            <Image
              alt="icons"
              src={icons}
              className="w-[40%] h-fit hidden md:block object-contain"
            />
          </div>
        </div>
      </div>
      <div
        className="relative h-fit w-full py-24 bg-[#E7F3DE] flex items-center justify-center"
        style={{
          clipPath: "polygon(0% 0%,100% 50px,100% 100%,0% calc(100% - 50px))",
        }}
      >
        <div className="flex flex-col text-black text-center items-center px-4 space-y-2 justify-center max-w-5xl h-fit z-10">
          <p className="uppercase tracking-wider font-medium">TRENDING!</p>
          <p className=" font-medium text-3xl md:text-4xl">
            See what people are talking about.
          </p>
          <div className="font-readex  font-bold text-4xl md:text-5xl text-center py-10 space-y-4 flex items-center justify-center flex-col">
            <h1 className="text-[#B6D2A1] hover:text-[#4D8B1F] transition-all relative duration-500 group">
              #rougee
              <Image
                alt="svg0"
                src={svg}
                className="absolute right-0 -mr-3 w-5 object-contain top-0 group-hover:opacity-100 opacity-0"
              />
            </h1>
            <h1 className="text-[#B6D2A1] hover:text-[#4D8B1F] transition-all relative duration-500 group">
              #crypto
              <Image
                alt="svg0"
                src={svg}
                className="absolute right-0 -mr-3 w-5 object-contain top-0 group-hover:opacity-100 opacity-0"
              />
            </h1>
            <h1 className="text-[#B6D2A1] hover:text-[#4D8B1F] transition-all relative duration-500 group">
              #indojp
              <Image
                alt="svg0"
                src={svg}
                className="absolute right-0 -mr-3 w-5 object-contain top-0 group-hover:opacity-100 opacity-0"
              />
            </h1>
            <h1 className="text-[#B6D2A1] hover:text-[#4D8B1F] transition-all relative duration-500 group">
              #rougecoin
              <Image
                alt="svg0"
                src={svg}
                className="absolute right-0 -mr-3 w-5 object-contain top-0 group-hover:opacity-100 opacity-0"
              />
            </h1>
            <h1 className="text-[#B6D2A1] hover:text-[#4D8B1F] transition-all relative duration-500 group">
              #xrge
              <Image
                alt="svg0"
                src={svg}
                className="absolute right-0 -mr-3 w-5 object-contain top-0 group-hover:opacity-100 opacity-0"
              />
            </h1>
          </div>
        </div>
        <div className="absolute bottom-[125px] -left-[15px] w-36 h-36 bg-[#4caf50] rounded-full opacity-5"></div>
        <div className="absolute top-0 left-0 pointer-events-none w-full h-full overflow-hidden">
          <svg
            className="absolute top-0 left-[50%] -translate-x-[50%] w-[134%] max-w-[2100px] text-[#a33596] opacity-10"
            viewBox="0 0 1920 450"
            fill="none"
          >
            <g opacity="1" fill="#4d8b1f" stroke="none">
              <circle cx="1544" cy="287" r="2"></circle>
              <circle cx="1544" cy="303" r="2"></circle>
              <circle cx="1544" cy="319" r="2"></circle>
              <circle cx="1544" cy="335" r="2"></circle>
              <circle cx="1544" cy="351" r="2"></circle>
              <circle cx="1544" cy="367" r="2"></circle>
              <circle cx="1544" cy="383" r="2"></circle>
              <circle cx="1544" cy="399" r="2"></circle>
              <circle cx="1544" cy="415" r="2"></circle>
              <circle cx="1544" cy="431" r="2"></circle>
              <circle cx="1560" cy="287" r="2"></circle>
              <circle cx="1560" cy="303" r="2"></circle>
              <circle cx="1560" cy="319" r="2"></circle>
              <circle cx="1560" cy="335" r="2"></circle>
              <circle cx="1560" cy="351" r="2"></circle>
              <circle cx="1560" cy="367" r="2"></circle>
              <circle cx="1560" cy="383" r="2"></circle>
              <circle cx="1560" cy="399" r="2"></circle>
              <circle cx="1560" cy="415" r="2"></circle>
              <circle cx="1560" cy="431" r="2"></circle>
              <circle cx="1576" cy="287" r="2"></circle>
              <circle cx="1576" cy="303" r="2"></circle>
              <circle cx="1576" cy="319" r="2"></circle>
              <circle cx="1576" cy="335" r="2"></circle>
              <circle cx="1576" cy="351" r="2"></circle>
              <circle cx="1576" cy="367" r="2"></circle>
              <circle cx="1576" cy="383" r="2"></circle>
              <circle cx="1576" cy="399" r="2"></circle>
              <circle cx="1576" cy="415" r="2"></circle>
              <circle cx="1576" cy="431" r="2"></circle>
              <circle cx="1592" cy="287" r="2"></circle>
              <circle cx="1592" cy="303" r="2"></circle>
              <circle cx="1592" cy="319" r="2"></circle>
              <circle cx="1592" cy="335" r="2"></circle>
              <circle cx="1592" cy="351" r="2"></circle>
              <circle cx="1592" cy="367" r="2"></circle>
              <circle cx="1592" cy="383" r="2"></circle>
              <circle cx="1592" cy="399" r="2"></circle>
              <circle cx="1592" cy="415" r="2"></circle>
              <circle cx="1592" cy="431" r="2"></circle>
              <circle cx="1608" cy="287" r="2"></circle>
              <circle cx="1624" cy="287" r="2"></circle>
              <circle cx="1640" cy="287" r="2"></circle>
              <circle cx="1656" cy="287" r="2"></circle>
              <circle cx="1672" cy="287" r="2"></circle>
              <circle cx="1688" cy="287" r="2"></circle>
              <circle cx="1608" cy="303" r="2"></circle>
              <circle cx="1624" cy="303" r="2"></circle>
              <circle cx="1640" cy="303" r="2"></circle>
              <circle cx="1656" cy="303" r="2"></circle>
              <circle cx="1672" cy="303" r="2"></circle>
              <circle cx="1688" cy="303" r="2"></circle>
              <circle cx="1608" cy="319" r="2"></circle>
              <circle cx="1624" cy="319" r="2"></circle>
              <circle cx="1640" cy="319" r="2"></circle>
              <circle cx="1656" cy="319" r="2"></circle>
              <circle cx="1672" cy="319" r="2"></circle>
              <circle cx="1688" cy="319" r="2"></circle>
              <circle cx="1608" cy="335" r="2"></circle>
              <circle cx="1624" cy="335" r="2"></circle>
              <circle cx="1640" cy="335" r="2"></circle>
              <circle cx="1656" cy="335" r="2"></circle>
              <circle cx="1672" cy="335" r="2"></circle>
              <circle cx="1688" cy="335" r="2"></circle>
              <circle cx="1608" cy="351" r="2"></circle>
              <circle cx="1608" cy="367" r="2"></circle>
              <circle cx="1608" cy="383" r="2"></circle>
              <circle cx="1608" cy="399" r="2"></circle>
              <circle cx="1608" cy="415" r="2"></circle>
              <circle cx="1608" cy="431" r="2"></circle>
              <circle cx="1624" cy="351" r="2"></circle>
              <circle cx="1624" cy="367" r="2"></circle>
              <circle cx="1624" cy="383" r="2"></circle>
              <circle cx="1624" cy="399" r="2"></circle>
              <circle cx="1624" cy="415" r="2"></circle>
              <circle cx="1624" cy="431" r="2"></circle>
              <circle cx="1640" cy="351" r="2"></circle>
              <circle cx="1656" cy="351" r="2"></circle>
              <circle cx="1672" cy="351" r="2"></circle>
              <circle cx="1688" cy="351" r="2"></circle>
              <circle cx="1640" cy="367" r="2"></circle>
              <circle cx="1656" cy="367" r="2"></circle>
              <circle cx="1672" cy="367" r="2"></circle>
              <circle cx="1688" cy="367" r="2"></circle>
              <circle cx="1640" cy="383" r="2"></circle>
              <circle cx="1640" cy="399" r="2"></circle>
              <circle cx="1640" cy="415" r="2"></circle>
              <circle cx="1640" cy="431" r="2"></circle>
              <circle cx="1656" cy="383" r="2"></circle>
              <circle cx="1672" cy="383" r="2"></circle>
              <circle cx="1688" cy="383" r="2"></circle>
              <circle cx="1656" cy="399" r="2"></circle>
              <circle cx="1656" cy="415" r="2"></circle>
              <circle cx="1656" cy="431" r="2"></circle>
              <circle cx="1672" cy="399" r="2"></circle>
              <circle cx="1672" cy="415" r="2"></circle>
              <circle cx="1672" cy="431" r="2"></circle>
              <circle cx="1688" cy="399" r="2"></circle>
              <circle cx="1688" cy="415" r="2"></circle>
              <circle cx="1688" cy="431" r="2"></circle>
            </g>
            <g stroke="#4d8b1f" strokeWidth="2">
              <rect x="1568" y="83" width="244" height="244"></rect>
              <rect x="124" y="-135" width="244" height="244"></rect>
            </g>
          </svg>
        </div>
      </div>
    </>
  );
}

export default MiddleSection;
