import React from "react";
import stackImg from "../assets/stack.png";
import level from "../assets/difficulty-level.png";
import az from "../assets/az.png";
import certificate from "../assets/certificate.png";
import searchImg from "../assets/search.png";
import iconRectangle from "../assets/Rectangle.png";
import KImg from "../assets/K.png";
import profile1 from "../assets/profile-1.png";
import profile2 from "../assets/profile-2.png";
import profile3 from "../assets/profile-3.png";
import weekly from "../assets/weekly.png";
import { FiPlay } from "react-icons/fi";
import { BsPlay } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import {BsThreeDots} from 'react-icons/bs'
const Main = () => {
  return (
    <>
      <div className="bg-[#F3F3F3] font-inter pb-0 window:pb-0  sm:rounded-tl-3xl rounded-none sm:rounded-bl-3xl h-full w-full">
        <div className="px-5 justify-between p-4 mx-5 sm:px-10 flex">
          <h1 className="text-3xl font-extrabold">Home</h1>
          {/* <div className="relative max-w-md flex rounded-full bg-[#e9e9ea] border border-gray-300 pl-1 pb-1 items-end justify-between text-right place-items-end focus-within:border-blue-500 focus-within:ring-blue-200 focus-within:ring-4"> */}
          <div className="relative flex rounded-full bg-[#e9e9ea] justify-between pl-1 pb-1 items-end text-right place-items-end focus-within:border-blue-500 focus-within:ring-blue-200 focus-within:ring-4">
            {/* <img src={searchImg} alt="/searchimg" /> */}
            <BiSearch className="h-full text-gray-500 mt-2 mb-0 top-[-10%] ml-2 text-2xl" />

            <input
              className="appearance-none bg-[#e9e9ea] border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="flex-row sm:flex">
          {/* col 1 */}

          <div className="">
            <div className="flex px-5 mx-5 mt-3 sm:mt-4 sm:px-10">
              <h2 className="text-black text-2xl w-full font-inter font-semibold">
                Design Courses
              </h2>
              <p className="text-[#a7a7aa] text-sm  items-end w-full text-right place-items-end">
                See all
              </p>
            </div>

            <div className="mt-0 px-3 p-4 mx-5 sm:px-10 grid md:grid-cols-2 gap-8">
              {/* card 1 */}
              <div className="bg-white w-full mx-2 max-w-[100%] rounded-lg hover:scale-105 ease-in duration-300">
                {/* <div className="relative flex bg-white h-auto w-full rounded-xl p-4 group"> */}
                {/* <div className=""></div> */}
                <div className="m-3 sm:m-5 flex rounded-lg ">
                  <img
                    src={stackImg}
                    alt="/stackImg"
                    className="bg-[#f3f3f3] top-[-20%] rounded-lg"
                    width={58}
                    height={58}
                  />
                  <div className=" items-end justify-top text-right place-items-end w-full">
                    <button className="rounded-lg font-inter bg-[#f3f3f3] p-1">
                      <p className="font-bold text-sm px-1">
                      POPULAR
                      </p>
                    </button>
                  </div>
                </div>
                <div className="m-3 flex rounded-lg sm:m-5 ">
                  <h2 className="w-full font-inter font-extrabold">
                    UX Design Foundations
                  </h2>
                </div>
                <div className="flex m-3 sm:m-5 text-sm">
                  {/* <img
                    src={playButton}
                    alt="/playbutton"
                    className="hover:scale-110 text-center  ease-in duration-300 px-1"
                  /> */}
                  {/* <play icon="fa-play" /> */}
                  <FiPlay className="hover:scale-110 ease-in duration-300 font-extrabold h-full items-center text-center justify-center mt-1 text-gray-500" />
                  <p className="text-gray-500 px-1">25 lessons</p>
                  <img
                    src={level}
                    alt="/difficultyLevel"
                    className="px-1 mt-1 h-3"
                  />
                  <p className="text-gray-500 px-1">Easy</p>
                </div>
              </div>

              {/* card 2 */}

              <div className="bg-white w-full mx-2 rounded-lg hover:scale-105 ease-in duration-300">
                {/* <div className=""></div> */}
                <div className="relative m-3 sm:m-5 flex rounded-lg ">
                  <img
                    src={az}
                    alt="/stackImg"
                    className="bg-[#f3f3f3] rounded-lg"
                    width={58}
                    height={58}
                  />
                  <div className=" items-end justify-top text-right place-items-end w-full">
                    <button className="rounded-lg font-inter bg-[#f3f3f3] p-1">
                    <p className="font-bold text-sm px-1">
                      POPULAR
                      </p>
                    </button>
                  </div>
                </div>
                <div className="m-3 flex rounded-lg sm:m-5 ">
                  <h2 className="w-full font-semibold">Design Terminology</h2>
                </div>
                <div className="flex m-3 sm:m-5 text-sm">
                  {/* <img
                    src={playButton}
                    alt="/playbutton"
                    className="hover:scale-110 text-center  ease-in duration-300 px-1"
                  /> */}
                  {/* <play icon="fa-play" /> */}
                  <FiPlay className="hover:scale-110 ease-in duration-300 font-extrabold h-full items-center text-center justify-center mt-1 text-gray-500" />
                  <p className="text-gray-500 px-1">25 lessons</p>
                  <img
                    src={level}
                    alt="/difficultyLevel"
                    className="px-1 mt-1 h-3"
                  />
                  <p className="text-gray-500 px-1">Easy</p>
                </div>
              </div>
            </div>

            <div className="px-5 mx-5 mt-3 sm:mt-4 sm:px-10 w-full font-inter text-xl font-semibold">
              <h2 className="text-2xl">Continue Learning</h2>
            </div>


{/* ////////////////////////////////////////////////////////////////// */}
{/* card 3 */}
            <div className="mt-0 px-3 p-4 mx-5 sm:px-10 ">
              <div className="hidden p-3 md:grid grid-flow-col-dense bg-white hover:scale-105 ease-in duration-300 mt-2 rounded-2xl ">
                <div className="">
                  <h2 className="text-2xl w-[297px] m-4 w-320 sm:ml-3 mt-3 pt-2 flex rounded-lg text-black sm:w-full font-inter font-semibold sm:p-3 font-family:Inter text-left ">
                    You haven't enrolled in any courses
                  </h2>

                  {/* <div className="flex rounded-lg sm:ml-5 items-center w-full max-w-full"> */}
                  <div className="flex rounded-lg items-center w-full max-w-full ml-3">
                    <p className="ml-3 mr-6 text-sm max-w-[90%] text-gray-700 h-auto">
                      Start improving your design skills today. Browse our
                      course catalog and enroll in a course.
                    </p>

                    {/* <div className="pl-14 items-center justify-between text-center place-items-center w-full h-full"> */}

                    {/* </div> */}
                  </div>
                  <div className=" items-start justify-between p-2 text-start place-items-start w-full sm:p-6">
                    <button className="rounded-lg font-inter hover:scale-105 ease-in duration-300 font-bold hover:font-extrabold bg-[#5627FF] text-gray-200 pl-308px p-2 px-5">
                      Browse Courses
                    </button>
                  </div>
                </div>
                <div className="items-center place-items-center justify-between p-3 h-full w-full  text-center ">
                  <img
                    src={certificate}
                    alt="/certificate"
                    className="text-center mt-[100%] sm:mt-5 m-auto place-items-center sm:mr-3 mr-0"
                  />
                </div>
              </div>

              <div className="sm:hidden p-3 bg-white hover:scale-105 ease-in duration-300 mt-2 rounded-2xl">
                <div className=" ">
                  <h2 className="text-2xl m-4 sm:ml-3 mt-3 pt-2 flex rounded-lg text-black w-full font-inter font-semibold sm:p-3 font-family:Inter text-left ">
                    You haven't enrolled in any courses
                  </h2>
                </div>
                <div className="flex rounded-lg sm:ml-5 items-center w-full max-w-full">
                  <div className="grid grid-flow-col-dense pl-3 ml-3 sm:pl-3 sm:ml-3 h-auto">
                    <p className="ml-3 mr-6 text-sm  text-gray-700 h-auto">
                      Start improving your design skills today. Browse our
                      course catalog and enroll in a course.
                    </p>
                    <div className="items-center justify-between text-center place-items-center w-full h-full">
                      <img
                        src={certificate}
                        alt="/certificate"
                        className="text-center place-items-center"
                      />
                    </div>
                  </div>
                </div>
                <div className=" items-start justify-between p-2 text-start place-items-start w-full sm:p-6">
                  <button className="rounded-lg ml-3 hover:scale-105 ease-in duration-300 hover:text-bold bg-[#5627FF] text-gray-200 pl-308px p-2 px-5">
                    Browse Courses
                  </button>
                </div>
              </div>
            </div>




            <div className="flex px-5 mx-5 mt-3 mr-0 sm:mt-4 sm:px-10">
              <h2 className="text-black text-2xl w-full font-inter font-semibold">
                New Matching Jobs
              </h2>
              <p className="text-[#a7a7aa] text-sm  items-end w-full text-right place-items-end">
                See all
              </p>
            </div>
          </div>



{/* //////////////////////////////////////////////////////////////////////////////////////////// */}

{/* col 2 */}
          <div className=" flex-col-1 pr-3 pl-3">
            <div className="items-center justify-between text-center">
              <img
                src={iconRectangle}
                alt="/icons"
                className="tracking-widest max-h-[80px] w-full items-center"
              />
            </div>
            {/* <div className="  h-full w-full flex flex-col items-center bg-[#ffffff] "> */}
            {/* <div className="relative w-full flex flex-col items-center bg-[#ffffff] "> */}
            {/* <div className="flex absolute items-between top-[+10%] sm:top-[+10%]"> */}
            {/* <img
                  src={KImg}
                  alt="/Kimg"
                  className=" h-[185px] w-[183px] rounded-full relative top-[-20%]"
                ></img> */}
            {/* </div> */}

            <div className="relative hover:scale-105 ease-in duration-300 sm:h-1217 sm:w-320 w-full flex flex-col items-center bg-[#ffffff] ">
              <div className="absolute rounded-full top-[-8%] h-[90px] w-[90px] bg-[#ffffff] p-[4.5px] sm:p-[2%] items-center text-center justify-center ">
                <img
                  src={KImg}
                  alt="/Kimg"
                  className="h-[80px] items-center text-center justify-center absolute w-[80px] rounded-full"
                ></img>
              </div>

              <div className="pt-[60px]">
              <h2 className="w-full font-semibold">Koteru Prashanth Reddy</h2>
                <p className="text-gray-600 text-center">C-Level</p>
              </div>

              <div className="pt-5 mt-5 w-full">
              <h2 className="w-full font-semibold ml-[5%]">Profile Strength</h2>
                {/* flex items-center justify-between max-w-[330px] m-auto py-4 */}
                <div className=" flex items-center justify-between max-w-full ml-[5%] m-auto py-4">
                  <div className="relative divide-x-2 divide-white w-[95%] mt-5 rounded-full bg-[#e9e9ea] border items-center text-center justify-between place-items-center">
                    <div className="w-[20%] rounded-full p-2 bg-[#5627FF] h-full"></div>
                    <div className="absolute top-[-60%] rounded-full sm:top-[-40%] p-[2%] sm:ml-[20%] ml-[27%] bg-[#e9e9ea]">
                      <img src={profile1} alt="/loader1_pic" />
                    </div>
                    <div className="absolute top-[-60%] rounded-full sm:top-[-40%] p-[2%] sm:ml-[52%] ml-[60%] bg-[#e9e9ea]">
                      <img src={profile2} alt="/loader1_pic" />
                    </div>
                    <div className="absolute top-[-60%] rounded-full sm:top-[-40%] p-[2%] ml-[90%] sm:ml-[87%] bg-[#e9e9ea]">
                      <img src={profile3} alt="/loader1_pic" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 w-full flex">
              <h2 className="w-full font-semibold ml-[5%]">Weekly Activity</h2>
              <div className="items-end w-full text-right text-2xl place-items-end justify-end ">
                <BsThreeDots className="items-end w-full text-right text-2xl place-items-end justify-end ml-[30%]"/>
              </div>
              </div>

              <div className=" flex items-center justify-between max-w-full  h-48 py-4">
                <div className="relative text-gray-500 m-2 w-[95%] h-[90%] mt-5 rounded-full bg-[#e9e9ea] items-center text-center justify-between place-items-center">
                  <div className="relative p-2 h-[10%] rounded-full mt-[700%] border-[#bbbbbf] bg-[#bbbbbf] border items-center text-center justify-between place-items-center"></div>
                  M
                </div>
                <div className="relative text-gray-500 m-2 w-[95%] h-[90%] mt-5 rounded-full bg-[#e9e9ea] items-center text-center justify-between place-items-center">
                  <div className="relative p-2 h-[10%] rounded-full mt-[700%] border-[#bbbbbf] bg-[#bbbbbf] border items-center text-center justify-between place-items-center"></div>
                  T
                </div>{" "}
                <div className="relative text-gray-500 m-2 w-[95%] h-[90%] mt-5 rounded-full bg-[#e9e9ea] items-center text-center justify-between place-items-center">
                  <div className="relative p-2 h-[10%] rounded-full mt-[700%] border-[#bbbbbf] bg-[#bbbbbf] border items-center text-center justify-between place-items-center"></div>
                  W
                </div>{" "}
                <div className="relative text-gray-500 m-2 w-[95%] h-[90%] mt-5 rounded-full bg-[#e9e9ea] items-center text-center justify-between place-items-center">
                  <div className="relative p-2 h-[10%] rounded-full mt-[700%] border-[#5627FF] bg-[#5627FF] border items-center text-center justify-between place-items-center"></div>
                  T
                </div>{" "}
                <div className="relative text-gray-500 m-2 w-[95%] h-[90%] mt-5 rounded-full bg-[#e9e9ea] items-center text-center justify-between place-items-center">
                  <div className="relative p-2 h-[10%] rounded-full mt-[700%] border-[#e5e4ff] bg-[#e5e4ff] border items-center text-center justify-between place-items-center"></div>
                  F
                </div>{" "}
                <div className="relative text-gray-500 m-2 w-[95%] h-[90%] mt-5 rounded-full bg-[#e9e9ea] items-center text-center justify-between place-items-center">
                  <div className="relative p-2 h-[10%] rounded-full mt-[700%] border-[#e5e4ff] bg-[#e5e4ff] border items-center text-center justify-between place-items-center"></div>
                  S
                </div>{" "}
                <div className="relative text-gray-500 m-2 w-[95%] h-[90%] mt-5 rounded-full bg-[#e9e9ea] items-center text-center justify-between place-items-center">
                  <div className="relative p-2 h-[10%] rounded-full mt-[700%] border-[#e5e4ff] bg-[#e5e4ff] border items-center text-center justify-between place-items-center"></div>
                  S
                </div>{" "}
              </div>
              <div className="w-full mt-5 p-5">
                <div className="flex mt-3 mr-0 sm:mt-4">
                  <p className="text-gray-500 font-semibold">Goals</p>
                  <p className="text-[#5627ff] font-semibold  items-end w-full text-right place-items-end ">
                    0/5 days
                  </p>
                </div>
                <div className="flex mt-3 mr-0 sm:mt-4">
                  <p className="text-gray-500 font-semibold">Pixels</p>
                  <p className="text-[#5627ff] font-semibold  items-end w-full text-right place-items-end ">
                    0
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Main;
