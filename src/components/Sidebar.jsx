import React from "react";

const Sidebar = () => {
  return (
    <div className="text-white  ">
      <div className="h-screen pr-[16px] pb-[16px] w-[180px] bg-[#21222A]">
        {/* <div className=" "> */}
        <div className=" h-screen relative  top-0 bg-[#21222A] hidden md:flex">
          <div className="w-full h-full text-center items-center justify-between">
            <div className="fixed  bg-[#21222A] items-center justify-center text-center">
              <h1 className="font-bold max-w-[80%] sm:w-full text-bold m-3 font-size p-2 text-2xl">
                MeritCurve
              </h1>
            </div>
            <ul className="ml-2 text-[14px] font-bold text-gray-400 pl-2 py-4 mt-[60px] items-left text-left ">
              <a href="/" className="">
                <li className="py-3  pl-2 hover:text-[#F8DB46] ">Home</li>
              </a>
              <li className="py-3 pl-2 hover:text-[#F8DB46] ">
                <a href="/#about">
                  <div>
                    <span>Courses</span>
                  </div>
                </a>
              </li>
              <a href="/#about">
                <li className="py-3 pl-2 hover:text-[#F8DB46] ">
                  Learning Paths
                </li>
              </a>
              <a href="/#jobBoard">
                <li className="py-3 pl-2 hover:text-[#F8DB46] ">Job Board</li>
              </a>
              <a href="/#skillTest">
                <li className="py-3 pl-2 hover:text-[#F8DB46] ">
                  Skill Tests
                </li>
              </a>
              <a href="/#challenges">
                <li className="py-3 pl-2 hover:text-[#F8DB46] ">
                  Challenges
                </li>
              </a>

              <a href="/#arcade">
                <li className="py-3 pl-2 hover:text-[#F8DB46] ">Arcade</li>
              </a>
              <li className="py-3 pl-2 mb-[2px] hover:text-[#F8DB46] ">
                <a href="/#saved">Saved</a>
              </li>

              <li className="py-3 pl-2 mb-[2px] hover:text-[#F8DB46] ">
                <a href="/#leaderboard">Leaderboard</a>
              </li>
              <li className="py-3 pl-2 mb-[2px] hover:text-[#F8DB46] ">
                <a href="/#leaderboard">Leaderboard</a>
              </li>
            </ul>
            {/* </div> */}
            <div className=" mt-[270%] place-items-baseline bg-[#21222A]  justify-center text-center items-center">
              <button className="hover:scale-105 font-bold mt-[12px] text-gray-200 ease-in duration-300 rounded-lg hover:bg-[#000000] bg-[#37383f] hover:text-[#F8DB46] px-5 p-1">
                Invite a friend
              </button>
              <button className=" hover:scale-105 font-bold mt-[12px] text-gray-200 ease-in duration-300 rounded-lg hover:bg-[#000000] bg-[#664eff] hover:text-[#F8DB46] px-5 p-1">
                Upgrade Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Sidebar;
