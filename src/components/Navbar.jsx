import React from "react";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className=" fixed container w-[100%] bg- h-20 bg-[##f3f3f3] z-[100] ">
      <div className="container pt-0 pr-[32px] pb-0 pl-[32px]  flex justify-between items-center max-w-[1248px] ml-auto mr-auto align-middle h-[80px] 2xl:px-16">
        <div>
          <h1 className="text-3xl font-extrabold">Home</h1>
        </div>
        <div className="relative max-w-[50%]  w-64 flex rounded-full sm:mr-0 mr-4 bg-[#e9e9ea] justify-between pl-1 pb-1 items-end text-right place-items-end focus-within:border-blue-500 focus-within:ring-blue-200 focus-within:ring-4">
          {/* <img src={searchImg} alt="/searchimg" /> */}
          <BiSearch className="h-full text-gray-500 mt-2 mb-0 top-[-10%] ml-2 text-2xl" />

          <input
            className="appearance-none bg-[#e9e9ea] border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      {/* <div className="relative max-w-md flex rounded-full bg-[#e9e9ea] border border-gray-300 pl-1 pb-1 items-end justify-between text-right place-items-end focus-within:border-blue-500 focus-within:ring-blue-200 focus-within:ring-4"> */}
    </div>
  );
};

export default Navbar;
