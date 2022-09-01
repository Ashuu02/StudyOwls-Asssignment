import React from "react";
import stackImg from "../assets/stack.png";
import playButton from "../assets/play-button.png";
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
const Main = () => {
  return (
    <>
      <div className="bg-[#F3F3F3] pb-0 window:pb-0  sm:rounded-tl-3xl rounded-none sm:rounded-bl-3xl h-full w-full">
        <div className="px-5 justify-between p-4 mx-5 sm:px-10 flex">
          <h1 className="text-2xl">Home</h1>
          <div className="relative mt-2 max-w-md ml-10 flex rounded-full bg-[#e9e9ea] border border-gray-300 pl-1 pb-1 items-end justify-between text-right place-items-end focus-within:border-blue-500 focus-within:ring-blue-200 focus-within:ring-4">
            <img src={searchImg} alt="/searchimg" />

            <input
              className="appearance-none bg-[#e9e9ea] border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder=""
            />
          </div>
        </div>

        <div className="flex-row sm:flex">
          {/* col 1 */}

          <div className="">
            <p className=" px-5 mx-5 sm:px-10 text-xl font-bold">
              Design Courses
            </p>

            <div className="mt-0 px-3 p-4 mx-5 sm:px-10 grid md:grid-cols-2 gap-8">
              {/* card 1 */}
              <div className="bg-white w-full mx-2 rounded-lg hover:scale-105 ease-in duration-300">
                {/* <div className="relative flex bg-white h-auto w-full rounded-xl p-4 group"> */}
                {/* <div className=""></div> */}
                <div className="m-3 sm:m-5 flex rounded-lg ">
                  <img
                    src={stackImg}
                    alt="/stackImg"
                    className="bg-[#f3f3f3] rounded-lg"
                    width={58}
                    height={58}
                  />
                  <div className=" items-end justify-top text-right place-items-end w-full">
                    <button className="rounded-lg bg-[#f3f3f3] px-5 p-1">
                      POPULAR
                    </button>
                  </div>
                </div>
                <div className="m-3 flex rounded-lg sm:m-5 ">
                  <h2 className="w-full font-semibold">
                    UX Design Foundations
                  </h2>
                </div>
                <div className="flex m-3 sm:m-5 ">
                  <img src={playButton} alt="/playbutton" className="hover:scale-110 ease-in duration-300 px-1" />
                  <p className="text-gray-500 px-1">25 lessons</p>
                  <img src={level} alt="/difficultyLevel" className="px-1" />
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
                    <button className="rounded-lg bg-[#f3f3f3] px-5 p-1">
                      POPULAR
                    </button>
                  </div>
                </div>
                <div className="m-3 flex rounded-lg sm:m-5 ">
                  <h2 className="w-full font-semibold">Design Terminology</h2>
                </div>
                <div className="flex m-3 sm:m-5 ">
                  <img src={playButton} alt="/playbutton" className="hover:scale-110 ease-in duration-300 px-1" />
                  <p className="text-gray-500 px-1">25 lessons</p>
                  <img src={level} alt="/difficultyLevel" className="px-1" />
                  <p className="text-gray-500 px-1">Easy</p>
                </div>
              </div>
            </div>

            <div className="px-5 mx-5 mt-3 sm:mt-4 sm:px-10">
              <h2 className="text-2xl">Continue Learning</h2>
            </div>

            {/* card 3 */}
            <div className="bg-white hover:scale-105 ease-in duration-300 mb-5 sm:w-[70%] mx-2 sm:ml-20 mt-2 rounded-2xl ">
              {/* <div className=""></div> */}
              <div className="">
                <h2 className="text-2xl m-4 sm:ml-3 pt-2 flex rounded-lg text-gray-800 sm:p-3">
                  You haven't enrolled in any courses
                </h2>
              </div>
              <div className="flex rounded-lg sm:ml-5 items-center w-full max-w-full">
                <div className="pl-3 ml-3 sm:pl-3 sm:ml-3 h-auto">
                  <h3 className="text-gray-800 h-auto">
                    Start improving your design skills today. Browse our course
                    catalog and enroll in a course.
                  </h3>
                </div>

                <div className="pl-14 items-center justify-between text-center place-items-center w-full h-full">
                  <img
                    src={certificate}
                    alt="/certificate"
                    className="text-center place-items-center"
                  />
                </div>
              </div>
              <div className=" items-start justify-between p-2 text-start place-items-start w-full sm:p-6">
                <button className="rounded-lg ml-3 hover:scale-105 ease-in duration-300 hover:text-bold bg-[#5627FF] text-gray-200 pl-308px p-2 px-5">
                  Browse Courses
                </button>
              </div>
            </div>

            <div className="px-5 mx-5 mt-6 sm:mb-6 mb-5 sm:mt-6 sm:px-10">
              <h2 className="text-2xl">New Matching Jobs</h2>
            </div>
          </div>

  {/* col 2 */}
          <div className="hover:scale-105 ease-in duration-300 flex-col-1 pr-3 pl-3">
            <div className="items-center justify-between text-center">
              <img
                src={iconRectangle}
                alt="/icons"
                className="tracking-widest max-h-[80px] w-full items-center"
              />
            </div>
            <div className="  h-full w-full flex flex-col items-center bg-[#ffffff] ">
              <img
                src={KImg}
                alt="/Kimg"
                className="h-[80px] w-[80px] relative top-[-4%]"
              ></img>
              <div>
                <h1 className="text-center font-mediumbold text-xl relative">
                  Koteru Prashanth Reddy
                </h1>
                <p className="text-gray-600 text-center">C-Level</p>
              </div>

              <div className="pt-5 mt-5 w-full">
                <h1 className="ml-[5%] font-mediumbold text-xl sm:text-base text-black relative">
                  Profile Strength
                </h1>
                {/* flex items-center justify-between max-w-[330px] m-auto py-4 */}
                <div className=" flex items-center justify-between max-w-full ml-[5%] m-auto py-4">
                  <div className="relative divide-x-2 divide-white w-[95%] mt-5 rounded-full bg-[#e9e9ea] border items-center text-center justify-between place-items-center">
                    <div className="w-[20%] rounded-full p-2 bg-[#5627FF] h-full"></div>
                    <div className="absolute top-[-60%] sm:top-[-40%] p-[2%] sm:ml-[20%] ml-[27%] bg-[#e9e9ea]">
                      <img src={profile1} alt="/loader1_pic" />
                    </div>
                    <div className="absolute top-[-60%] sm:top-[-40%] p-[2%] sm:ml-[52%] ml-[60%] bg-[#e9e9ea]">
                      <img src={profile2} alt="/loader1_pic" />
                    </div>
                    <div className="absolute top-[-60%] sm:top-[-40%] p-[2%] ml-[92%] sm:ml-[87%] bg-[#e9e9ea]">
                      <img src={profile3} alt="/loader1_pic" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 w-full flex">
                <h1 className="ml-[5%] w-full font-mediumbold text-xl sm:text-base text-black">
                  Weekly Activity
                </h1>
                <img
                  src={weekly}
                  alt=""
                  className="sm:ml-[40%]  ml-[50%] mr-2 m-auto h-5 items-end"
                />
                
              </div>

              <div className=" flex items-center justify-between max-w-full  h-48 py-4">
                <div className="relative text-gray-500 m-2 w-[95%] h-[90%] mt-5 rounded-full bg-[#e9e9ea] items-center text-center justify-between place-items-center">
                  <div className="relative p-2 h-[10%] mt-[700%] border-[#bbbbbf] bg-[#bbbbbf] border items-center text-center justify-between place-items-center"></div>
                  M
                </div>
                <div className="relative text-gray-500 m-2 w-[95%] h-[90%] mt-5 rounded-full bg-[#e9e9ea] items-center text-center justify-between place-items-center">
                  <div className="relative p-2 h-[10%] mt-[700%] border-[#bbbbbf] bg-[#bbbbbf] border items-center text-center justify-between place-items-center"></div>
                  T
                </div>{" "}
                <div className="relative text-gray-500 m-2 w-[95%] h-[90%] mt-5 rounded-full bg-[#e9e9ea] items-center text-center justify-between place-items-center">
                  <div className="relative p-2 h-[10%] mt-[700%] border-[#bbbbbf] bg-[#bbbbbf] border items-center text-center justify-between place-items-center"></div>
                  W
                </div>{" "}
                <div className="relative text-gray-500 m-2 w-[95%] h-[90%] mt-5 rounded-full bg-[#e9e9ea] items-center text-center justify-between place-items-center">
                  <div className="relative p-2 h-[10%] mt-[700%] border-[#5627FF] bg-[#5627FF] border items-center text-center justify-between place-items-center"></div>
                  T
                </div>{" "}
                <div className="relative text-gray-500 m-2 w-[95%] h-[90%] mt-5 rounded-full bg-[#e9e9ea] items-center text-center justify-between place-items-center">
                  <div className="relative p-2 h-[10%] mt-[700%] border-[#e5e4ff] bg-[#e5e4ff] border items-center text-center justify-between place-items-center"></div>
                  F
                </div>{" "}
                <div className="relative text-gray-500 m-2 w-[95%] h-[90%] mt-5 rounded-full bg-[#e9e9ea] items-center text-center justify-between place-items-center">
                  <div className="relative p-2 h-[10%] mt-[700%] border-[#e5e4ff] bg-[#e5e4ff] border items-center text-center justify-between place-items-center"></div>
                  S
                </div>{" "}
                <div className="relative text-gray-500 m-2 w-[95%] h-[90%] mt-5 rounded-full bg-[#e9e9ea] items-center text-center justify-between place-items-center">
                  <div className="relative p-2 h-[10%] mt-[700%] border-[#e5e4ff] bg-[#e5e4ff] border items-center text-center justify-between place-items-center"></div>
                  S
                </div>{" "}
              </div>
              <div className="w-full mt-5 ml-5 p-5">
                <div className="py-2 flex">
                  <p className="text-gray-500 font-semibold">Goals</p>
                  <p className="text-[#5627ff] font-semibold items-end ml-[65%] sm:ml-[50%]">0/5 days</p>
                </div>
                <div className="py-2 flex">
                  <p className="text-gray-500 font-semibold">Pixels</p>
                  <p className="text-[#5627ff] font-semibold items-end ml-[75%] sm:ml-[75%]">0</p>

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
