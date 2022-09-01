// import React from 'react'

// const Profile = () => {
//   return (
//     <div className='bg-[#F3F3F3] sm:rounded-tl-3xl rounded-none sm:rounded-bl-3xl h-full w-[80%]'>
//       <div></div>

//     </div>
//   )
// }

// export default Profile

import React from "react";
// import { TwitterShareButton, TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed'
import "./Profile.module.css";
import searchImg from "../assets/search.png";

function Profile() {
  return (
    <div className="bg-[#F3F3F3]">
      <div className="widgets_input rounded-xl">
        {/* <Search className='widgets_searchIcon'/> */}
        <img
          src={searchImg}
          alt="/searchIcon"
          className="top-[+20%] rounded-2xl"
        />
        <div className=" rounded-xl ">
          <input
            placeholder=""
            className=" top-[-20%]"
            type="text"
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
