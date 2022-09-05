import React from "react";

const Sidebar = () => {
  return (
    <div className="text-white ">
      <div className="h-screen w-full bg-black">
        <div class="hidden md:flex">
          <aside class="h-screen  sticky top-0 bg-[#21222A]">
            <div className="w-[80%] items-center justify-center text-center">
              <h1 className="font-bold max-w-[80%] sm:w-full text-bold m-3 p-2 text-2xl">MeritCurve</h1>
            </div>
            <div className="py-4">

           
            <ul className="ml-10 items-center ">
              <a href="/" className="">
                <li className="py-3 hover:text-[#F8DB46] text-sm">
                  Home
                </li>
              </a>
              <a href="/#about">
                <li className="py-3 hover:text-[#F8DB46] text-sm">
                  Courses
                </li>
              </a>
              <a href="/#skillTest">
                <li  className="py-3 hover:text-[#F8DB46] text-sm">
                  Skill Tests
                </li>
              </a>
              <a href="/#jobBoard">
                <li  className="py-3 hover:text-[#F8DB46] text-sm">
                  Job Board
                </li>
              </a>
              <a href="/#challenges">
                <li  className="py-3 hover:text-[#F8DB46] text-sm">
                  Challenges
                </li>
              </a>
              
              <a href="/#arcade">
                <li  className="py-3 hover:text-[#F8DB46] text-sm">
                  Arcade
                </li>
              </a>
              <a href="/#saved">
                <li  className="py-3 hover:text-[#F8DB46] text-sm">
                  Saved
                </li>
              </a><a href="/#leaderboard">
                <li  className="py-3 hover:text-[#F8DB46] text-sm">
                  Leaderboard
                </li>
              </a>
            </ul>
            </div>
            <div className="p-2 mt-20 items-center justify-between text-center w-full">
              <button className="hover:scale-105 font-bold  text-gray-200 ease-in duration-300 rounded-lg hover:bg-[#000000] bg-[#37383f] hover:text-[#F8DB46] px-5 p-1">Invite a friend</button>
            </div>
          </aside>      

        </div>
      </div>
    </div>
  );
};

export default Sidebar;
