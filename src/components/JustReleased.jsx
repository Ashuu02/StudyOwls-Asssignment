import React from "react";
import prototyping from "../assets/prototyping.svg";

const JustReleased = () => {
  return (
    <>
      <div className="">
        <div className="mt-5 mb-[40px]">
          <div className="p-[40px] md:grid grid-flow-col-dense bg-[#05060f] mt-2 rounded-3xl ">
            <div className=" max-w-[518.333px] max-h-[298px]">
              <p className=" font-extrabold text-xs text-gray-400 h-auto">
                JUST RELEASED
              </p>
              <h2 className="text-5xl pr-4 w-[297px] tracking-normal pb-2 mb-3 pt-2 mt-[12px] flex text-white sm:w-full font-inter font-black font-family:Inter text-left ">
                Prototyping Skill Test
              </h2>

              {/* <div className="flex rounded-lg sm:ml-5 items-center w-full max-w-full"> */}
              <div className=" items-center w-full  ">
                <p className="text-base max-w-[92%] text-gray-300 h-auto">
                  Test your understanding of the theory and best practices of UX
                  prototyping and see how you stack up against other designers
                  worldwide.
                </p>

              </div>
              <div className="flex pt-6 items-start justify-between text-start place-items-start w-full ">
                <div className="w-full h-full flex">
                  <button className=" rounded-lg font-inter  font-bold hover:font-extrabold bg-[#5627FF] text-gray-200 pl-308px p-2 px-[16px]">
                    View Skill Test {'->'}
                  </button>
                  <button className="ml-[12px] px-[16px] bg-[#14151d]  rounded-lg font-inter font-bold hover:font-extrabold  text-gray-200 pl-308px">
                    Not now
                  </button>
                </div>
              </div>
            </div>
            <div className="">
              <img
                src={prototyping}
                alt="/certificate"
                className="w-[128px] h-[128px] "
              />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default JustReleased;
