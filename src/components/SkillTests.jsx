import React from "react";
import { HiOutlineClock } from "react-icons/hi";
import { AiOutlineCalculator } from "react-icons/ai";
import accessibility from "../assets/accessibility.svg";
import designer from "../assets/designer.svg";
import { BsCalendar4Event } from "react-icons/bs";
import color from '../assets/color.svg';
import toolkit from '../assets/toolkit.svg';

const SkillTests = () => {
  return (
    <div>
      <div className="flex  mt-3 sm:mt-[40px]">
        <h2 className="text-black text-2xl w-full font-inter font-semibold">
          Skill Tests
        </h2>
        <p className="text-[#a7a7aa] text-sm items-end w-full text-right place-items-end">
          See all
        </p>
      </div>

      <div className="mt-0 py-4 grid md:grid-cols-2 gap-8">
        {/* card 1 */}
        <div className="bg-white hover:shadow-lg p-[24px] hover:shadow-gray-300 w-full max-w-[100%] rounded-2xl hover:scale-[101%] ease-in duration-100">
          <div className="flex rounded-lg ">
            <img
              src={accessibility}
              alt="/stackImg"
              className=" top-[-20%] rounded-lg"
              width={58}
              height={58}
            />
            <div className=" items-end justify-top text-right place-items-end w-full">
              <button className="rounded-lg font-inter bg-[#f3f3f3] p-1">
                <p className="font-bold text-xs px-1">POPULAR</p>
              </button>
            </div>
          </div>
          <div className="flex rounded-lg sm:mt-[18px] mt-[14px]">
            <h2 className="w-full font-inter font-extrabold">
              Verified Designer
            </h2>
          </div>
          <div className="flex p-1 mt-[8px] mb-[-4px] mx-[-4px] text-sm">
            <HiOutlineClock className="hover:scale-110 top-[-20%] ease-in duration-100 font-extrabold h-full items-center text-center justify-center mt-1 text-gray-500" />
            <p className="text-gray-500 px-1">25 lessons</p>
            {/* <img src={level} alt="/difficultyLevel" className="px-1 mt-1 h-3" /> */}
            <AiOutlineCalculator className=" font-extrabold h-full items-center text-center justify-center mt-1 text-gray-500" />
            <p className="text-gray-500 px-1">Easy</p>
          </div>
        </div>

        {/* card 2 */}

        <div className="bg-white hover:shadow-lg p-[24px] hover:shadow-gray-300 w-full max-w-[100%] rounded-2xl hover:scale-[101%] ease-in duration-100">
          {/* <div className=""></div> */}
          <div className="relative flex rounded-lg ">
            <img
              src={designer}
              alt="/stackImg"
              className="top-[-20%] rounded-lg"
              width={58}
              height={58}
            />
            <div className=" items-end justify-top text-right place-items-end w-full">
              <button className="rounded-lg font-inter bg-[#f3f3f3] p-1">
                <p className="font-bold text-xs px-1">POPULAR</p>
              </button>
            </div>
          </div>
          <div className="flex rounded-lg sm:mt-[18px] mt-[14px]">
            <h2 className="w-full font-semibold">Accessibility</h2>
          </div>
          <div className="flex p-1 mt-[8px] mb-[-4px] mx-[-4px] text-sm">
            <HiOutlineClock className="hover:scale-110 top-[-20%] ease-in duration-100 font-extrabold h-full items-center text-center justify-center mt-1 text-gray-500" />
            <p className="text-gray-500 px-1">25 lessons</p>
            {/* <img src={level} alt="/difficultyLevel" className="px-1 mt-1 h-3" /> */}
            <AiOutlineCalculator className=" font-extrabold h-full items-center text-center justify-center mt-1 text-gray-500" />
            <p className="text-gray-500 px-1">Easy</p>
          </div>
        </div>
      </div>




{/* Learning Challenges */}

      <div className="flex  mt-3 sm:mt-[40px]">
        <h2 className="text-black text-2xl w-full font-inter font-semibold">
        Learning Challenges
        </h2>
        <p className="text-[#a7a7aa] text-sm items-end w-full text-right place-items-end">
          See all
        </p>
      </div>

      <div className="mt-0 py-4 grid md:grid-cols-2 gap-8">
        {/* card 1 */}
        <div className="bg-white hover:shadow-lg p-[24px] hover:shadow-gray-300 w-full max-w-[100%] rounded-2xl hover:scale-[101%] ease-in duration-100">
          <div className="flex rounded-lg ">
            <img
              src={color}
              alt="/stackImg"
              className=" top-[-20%] rounded-lg"
              width={58}
              height={58}
            />
            <div className=" items-end justify-top text-right place-items-end w-full">
              <button className="rounded-lg font-inter bg-[#f3f3f3] p-1">
                <p className="font-bold text-xs px-1">POPULAR</p>
              </button>
            </div>
          </div>
          <div className="flex rounded-lg sm:mt-[18px] mt-[14px]">
            <h2 className="w-full font-inter font-extrabold">
              Designer Toolkit
            </h2>
          </div>
          <div className="flex p-1 mt-[8px] mb-[-4px] mx-[-4px] text-sm">
          <BsCalendar4Event className="hover:scale-110 m-1 mt-[2px] top-[-50%] ease-in duration-100 font-extrabold h-full items-center text-center justify-center text-gray-500" />
           <p className="text-gray-500 px-1">7 Days</p>
          </div>
        </div>

        {/* card 2 */}

        <div className="bg-white hover:shadow-lg p-[24px] hover:shadow-gray-300 w-full max-w-[100%] rounded-2xl hover:scale-[101%] ease-in duration-100">
          {/* <div className=""></div> */}
          <div className="relative flex rounded-lg ">
            <img
              src={toolkit}
              alt="/stackImg"
              className="top-[-20%] rounded-lg"
              width={58}
              height={58}
            />
            <div className=" items-end justify-top text-right place-items-end w-full">
              <button className="rounded-lg font-inter bg-[#f3f3f3] p-1">
                <p className="font-bold text-xs px-1">POPULAR</p>
              </button>
            </div>
          </div>
          <div className="flex rounded-lg sm:mt-[18px] mt-[14px]">
            <h2 className="w-full font-semibold">Storytelling with Color</h2>
          </div>
          <div className="flex p-1 mt-[8px] mb-[-4px] mx-[-4px] text-sm">
            <BsCalendar4Event className="hover:scale-110 m-1 mt-[2px] top-[-50%] ease-in duration-100 font-extrabold h-full items-center text-center justify-center text-gray-500" />
            <p className="text-gray-500 px-1">5 Days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillTests;
