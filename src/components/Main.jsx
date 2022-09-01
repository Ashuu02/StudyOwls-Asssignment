import React from "react";
import stackImg from "../assets/stack.png";
import playButton from "../assets/play-button.png";
import level from "../assets/difficulty-level.png";
import az from "../assets/az.png";
import certificate from "../assets/certificate.png";
import searchImg from "../assets/search.png";
import iconRectangle from "../assets/Rectangle.png";
import KImg from "../assets/K.png";

const Main = () => {
  return (
    <>
      <div className="bg-[#F3F3F3] sm:rounded-tl-3xl rounded-none sm:rounded-bl-3xl h-full w-full">
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
              <div className="bg-white w-full mx-2 rounded-lg">
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
                  <img src={playButton} alt="/playbutton" className="px-1" />
                  <p className="text-gray-500 px-1">25 lessons</p>
                  <img src={level} alt="/difficultyLevel" className="px-1" />
                  <p className="text-gray-500 px-1">Easy</p>
                </div>
              </div>

              {/* card 2 */}

              <div className="bg-white w-full mx-2 rounded-lg">
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
                  <img src={playButton} alt="/playbutton" className="px-1" />
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
            <div className="bg-white mb-5 sm:w-[70%] mx-2 sm:ml-20 mt-2 rounded-2xl">
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
                <button className="rounded-lg ml-3 bg-[#5627FF] text-gray-200 pl-308px p-2 px-5">
                  Browse Courses
                </button>
              </div>
            </div>

            <div className="px-5 mx-5 mt-6 sm:mb-6 mb-5 sm:mt-6 sm:px-10">
              <h2 className="text-2xl">New Matching Jobs</h2>
            </div>
          </div>

          {/* col 2 */}
          <div className="flex-col-1 pr-3 pl-3">
            <div className="items-center justify-between text-center">
              <img
                src={iconRectangle}
                alt="/icons"
                className="tracking-widest items-center"
              />
            </div>
            <div className=" h-screen w-full flex flex-col items-center bg-[#ffffff] ">
              <img
                src={KImg}
                alt="/Kimg"
                className="h-[80px] w-[80px] relative top-[-4%]"
              ></img>

              <h1 className="text-center font-mediumbold text-xl relative">
                Koteru Prashanth Reddy
              </h1>
              <p className="text-gray-600">C-Level</p>
            </div>
            <div className="">
            <h1 className="text-center font-mediumbold text-xl relative">
                Koteru Prashanth Reddy
              </h1>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Main;
