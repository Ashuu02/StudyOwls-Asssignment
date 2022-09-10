import React from "react";
import stackImg from "../assets/stack.png";
import level from "../assets/difficulty-level.png";
import az from "../assets/az.png";
import certificate from "../assets/certificate.png";
import iconRectangle from "../assets/Rectangle.png";
import KImg from "../assets/K.png";
import profile1 from "../assets/profile-1.png";
import profile2 from "../assets/profile-2.png";
import profile3 from "../assets/profile-3.png";
import { FiPlay } from "react-icons/fi";
import Navbar from "./Navbar";
import { BsThreeDots } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import JustReleased from "./JustReleased";
import skillGraph from '../assets/skillGraph.png'
import Preferences from "./Preferences";
import SkillTests from "./SkillTests"

const Main = () => {
  return (
    <>
      <div className="overflow-hidden px-[32px] bg-[#F3F3F3] font-inter sm:rounded-tl-3xl rounded-none sm:rounded-bl-3xl h-full w-full">
        
          <div class="fixed w-[100%] mb-4 z-[100]  h-20  items-center bg-[##f3f3f3] ">
            <div className="flex z-[100px] w-full mt-5 ">
              <div className="">
                <h1 className="text-3xl  font-extrabold font-inter">Home</h1>
              </div>
              <div className="relative max-w-[50%] w-64 flex rounded-full sm:mr-0 mr-4 bg-[#e9e9ea] justify-between pl-1 pb-1  focus-within:border-blue-500 focus-within:ring-blue-200 focus-within:ring-4 items-end justify-top text-right place-items-end ml-[650px]">
                <BiSearch className="h-full text-gray-500 mt-2 mb-0 top-[-10%] ml-2 text-2xl" />

                <input
                  className="appearance-none bg-[#e9e9ea] border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
        

        <div className="flex-row sm:flex">
          {/* col 1 */}

          <div className="mt-[80px] mr-[20px]">
            <JustReleased />
            <div className="flex mt-3 sm:mt-4">
              <h2 className="text-black text-2xl w-full font-inter font-semibold">
                Design Courses
              </h2>
              <p className="text-[#a7a7aa] text-sm items-end w-full text-right place-items-end">
                See all
              </p>
            </div>

            <div className="mt-0 py-4 grid md:grid-cols-2 gap-8">
              {/* card 1 */}
              <div className="bg-white hover:shadow-lg p-[24px] hover:shadow-gray-300 w-full max-w-[100%] rounded-2xl hover:scale-[101%] ease-in duration-100">
                {/* <div className="relative flex bg-white h-auto w-full rounded-xl p-4 group"> */}
                {/* <div className=""></div> */}
                <div className="flex rounded-lg ">
                  <img
                    src={stackImg}
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
                    UX Design Foundations
                  </h2>
                </div>
                <div className="flex p-1 mt-[8px] mb-[-4px] mx-[-4px] text-sm">
                  
                  <FiPlay className="hover:scale-110 top-[-20%] ease-in duration-100 font-extrabold h-full items-center text-center justify-center mt-1 text-gray-500" />
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

              <div className="bg-white hover:shadow-lg p-[24px] hover:shadow-gray-300 w-full max-w-[100%] rounded-2xl hover:scale-[101%] ease-in duration-100">
                {/* <div className=""></div> */}
                <div className="relative flex rounded-lg ">
                  <img
                    src={az}
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
                  <h2 className="w-full font-semibold">Design Terminology</h2>
                </div>
                <div className="flex p-1 mt-[8px] mb-[-4px] mx-[-4px] text-sm">
      
                  <FiPlay className="hover:scale-110 top-[-20%] ease-in duration-100 font-extrabold h-full items-center text-center justify-center mt-1 text-gray-500" />
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

            <div className="mt-3 sm:mt-4 font-extrabold">
              <h2 className="text-2xl">Continue Learning</h2>
            </div>
     
  
            {/* ////////////////////////////////////////////////////////////////// */}
            {/* card 3 */}
            <div className=" rounded-2xl p-4 mt-3 bg-gray-400 w-full h-auto pl-[] items-center justify-between ">
              <div className="hidden p-[32px] md:grid grid-flow-col-dense bg-white rounded-2xl ">
                <div className="">
                  <h2 className="text-2xl max-w-[90%] flex rounded-lg text-black sm:w-full font-inter font-extrabold font-family:Inter text-left ">
                    You haven't enrolled in any courses
                  </h2>

                  {/* <div className="flex rounded-lg sm:ml-5 items-center w-full max-w-full"> */}
                  <div className="flex mt-[12px] rounded-lg items-center w-full max-w-full">
                    <p className="text-base text-gray-700 h-auto">
                      Start improving your design skills today. Browse our
                      course catalog and enroll in a course.
                    </p>

                    {/* <div className="pl-14 items-center justify-between text-center place-items-center w-full h-full"> */}

                    {/* </div> */}
                  </div>
                  <div className=" items-start justify-between pt-[24px] text-start place-items-start w-full">
                    <button className="rounded-lg font-inter font-bold hover:font-extrabold hover:bg-black bg-[#5627FF] text-white  py-[10px] px-[16px]">
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

              <div className="sm:hidden p-3 shadow-xl shadow-gray-400 bg-white hover:scale-105 ease-in duration-300 mt-2 rounded-2xl">
                <div className=" ">
                  <h2 className="text-2xl max-w-[90%] m-4 sm:ml-3 mt-3 pt-2 flex rounded-lg text-black w-full font-inter font-semibold sm:p-3 font-family:Inter text-left ">
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

            <div className="flex mt-[40px] ">
              <h2 className="text-black text-2xl w-full font-inter font-semibold">
                New Matching Jobs
              </h2>
              <p className="text-[#a7a7aa] text-sm items-end w-full text-right place-items-end">
                See all
              </p>
            </div>
            <Preferences/>
            <SkillTests/>
          </div>

          {/* //////////////////////////////////////////////////////////////////////////////////////////// */}

          {/* col 2 */}
          <div className="mt-[80px] flex-col-1 pl-3">
            <div className="items-center rounded-t-3xl justify-between text-center">
              <img
                src={iconRectangle}
                alt="/icons"
                className="tracking-widest max-h-[80px] w-full items-center"
              />
            </div>

            <div className="relative sm:h-1217 shadow-lg shadow-gray-300 sm:w-[318px] w-full flex flex-col items-center bg-[#ffffff] ">
              <div className="absolute rounded-full top-[-8%] h-[90px] w-[90px]  bg-[#ffffff] p-[4.5px] sm:p-[2%] items-center text-center justify-center ">
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
                <h2 className="w-full font-semibold ml-[5%]">
                  Profile Strength
                </h2>
                {/* flex items-center justify-between max-w-[330px] m-auto py-4 */}
                <div className=" flex items-center justify-between max-w-full ml-[5%] py-4">
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
                <h2 className="w-full font-semibold ml-[5%]">
                  Weekly Activity
                </h2>
                <div className="items-end w-full text-right text-2xl place-items-end justify-end ">
                  <BsThreeDots className="items-end w-full text-right text-2xl place-items-end justify-end ml-[30%]" />
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

              <div className="mt-10 w-full flex">
                <h2 className="w-full font-semibold ml-[5%]">
                  Skill Graph
                </h2>
                <div className="items-end w-full text-right text-2xl place-items-end justify-end ">
                  <BsThreeDots className="items-end w-full text-right text-2xl place-items-end justify-end ml-[30%]" />
                </div>
              </div>
              <div className="w-full">
                <img src={skillGraph} alt="/skillGraph" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </main> */}
    </>
  );
};

export default Main;
