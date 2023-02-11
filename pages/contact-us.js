import React from "react";
import Image from "next/image";
import contactImg from "../public/images/contactUs.svg";

const contactUs = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-[#F5F5FF] flex flex-col justify-center items-center">
      <div>
        <form className="lg:w-[60vw] md:w-[90vw] w-[90vw] flex lg:flex-row md:flex-row flex-col justify-between lg:space-y-8 md:space-y-8 space-y-0 py-5 px-8 bg-[#F5F5F5] rounded-lg shadow-lg">
          <div className="lg:w-[25vw] md:w-[40vw] w-[80vw]">
            <div className="text-rouge-Pink font-semibold">CONTACT US</div>
            <div className="lg:text-4xl md:text-4xl text-2xl font-semibold mt-3">
              Let us help you solve your issue.
            </div>
            <div className="mt-5 flex justify-center items-center">
              <Image src={contactImg} className="w-72 h-48" />
            </div>
          </div>
          <div className="lg:w-[20vw] md:w-[30vw] w-auto flex flex-col justify-center items-center">
            <div class="relative z-0 w-full mb-6 group ">
              <input
                type="text"
                name="firstName"
                id="firstName"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-rouge-Pink focus:outline-none focus:ring-0 focus:border-rouge-Pink peer"
                placeholder=" "
              />
              <label
                for="firstName"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rouge-Pink peer-focus:dark:text-rouge-Pink peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First Name
              </label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="lastName"
                id="lastName"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-rouge-Pink focus:outline-none focus:ring-0 focus:border-rouge-Pink peer"
                placeholder=" "
              />
              <label
                for="lastName"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rouge-Pink peer-focus:dark:text-rouge-Pink peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last Name
              </label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="email"
                id="email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-rouge-Pink focus:outline-none focus:ring-0 focus:border-rouge-Pink peer"
                placeholder=" "
              />
              <label
                for="email"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rouge-Pink peer-focus:dark:text-rouge-Pink peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email
              </label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <textarea
                type="text"
                name="message"
                id="message"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-rouge-Pink focus:outline-none focus:ring-0 focus:border-rouge-Pink peer"
                placeholder=""
              />
              <label
                for="message"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rouge-Pink peer-focus:dark:text-rouge-Pink peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Message
              </label>
            </div>
            <div>
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-rouge-Pink bg-rouge-Pink border-rouge-Pink rounded focus:ring-rouge-Pink  focus:ring-2  "
              />
              <span className="ml-2">
                Agree with
                <span className=" opacity-50 mx-2 cursor-pointer font-bold">
                  Privacy Policy
                </span>
                to receive communications.
              </span>
            </div>
            <div className="flex justify-center items-center mt-5">
              <input
                type="submit"
                value="Send"
                className="py-2 rounded-lg cursor-pointer border bg-rouge-Pink hover:bg-hover-rouge-Pink text-white font-normal px-16 text-md"
              />
            </div>
          </div>
        </form>
      </div>
      {/* <Image src={contactImg} width={ 50} height={50} /> */}
    </div>
  );
};

export default contactUs;
