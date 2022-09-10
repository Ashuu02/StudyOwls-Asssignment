import React from "react";
import preferences from "../assets/preferences.png";
import './Preferences.css';
const Preferences = () => {
  return (
    <div className="pref rounded-2xl p-4 mt-3 w-full h-auto items-center justify-between ">
      <div className=" p-[32px] md:grid grid-flow-col-dense bg-white rounded-2xl ">
        <div className="w-[90%]">
          <h2 className="text-2xl w-[297px] w-320 flex rounded-lg text-black sm:w-full font-inter font-semibold font-family:Inter text-left ">
          You haven’t added your preferences
          </h2>

          {/* <div className="flex rounded-lg sm:ml-5 items-center w-full max-w-full"> */}
          <div className="flex mt-[12px] rounded-lg items-center w-full max-w-full">
            <p className="text-base text-gray-700 h-auto">
            Complete your career preferences, and we’ll provide a list of matching design jobs tailored just for you.
            </p>

            {/* <div className="pl-14 items-center justify-between text-center place-items-center w-full h-full"> */}

            {/* </div> */}
          </div>
          <div className=" items-start justify-between pt-[24px] text-start place-items-start w-full">
            <button className="rounded-lg font-inter font-bold hover:font-extrabold hover:bg-black bg-[#5627FF] text-white  py-[10px] px-[16px]">
              Add Preferences
            </button>
          </div>
        </div>
        <div className="items-center place-items-center justify-between p-3 h-full w-full  text-center ">
          <img
            src={preferences}
            alt="/preferences"
            className="text-center mt-[100%] w-[120px] h-[120px] sm:mt-5 m-auto place-items-center sm:mr-3 mr-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Preferences;
