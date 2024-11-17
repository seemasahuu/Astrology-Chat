// import React from 'react'
// import { useNavigate } from 'react-router-dom';
// import  home  from "../assets/home.png";
// import  communication from "../assets/communication.png";
// import bell from "../assets/bell.png";
// import userIcon from '../assets/user.png';  

// function BottomBar() {
//     const navigate = useNavigate();
//   return (
//     <div className="fixed bottom-0 left-0 right-0 bg-[#1A1A2E] p-3 flex justify-around">
//   <div
//   className="nav-item flex flex-col items-center cursor-pointer text-white"
// >
//   <img
//     src={home}
//     className="h-6 w-6"
//     style={{ filter: 'brightness(0) invert(1)' }} // This changes the image to white
//   />
// </div>
// <div
//   className="nav-item flex flex-col items-center cursor-pointer text-white"
// >
//   <img
//     src={communication}
//     className="h-6 w-6"
//     style={{ filter: 'brightness(0) invert(1)' }} // This changes the image to white
//   />
// </div>
// <div
//   className="nav-item flex flex-col items-center cursor-pointer text-white"
// >
//   <img
//     src={bell}
//     className="h-6 w-6"
//     style={{ filter: 'brightness(0) invert(1)' }} // This changes the image to white
//   />
// </div>
// <div
//   className="nav-item flex flex-col items-center cursor-pointer text-white"
// >
//   <img
//     src={userIcon}
//     className="h-6 w-6"
//     style={{ filter: 'brightness(0) invert(1)' }} // This changes the image to white
//   />
// </div>

//   </div>
//   )
// }

// export default BottomBar


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import home from "../assets/home.png";
import communication from "../assets/communication.png";
import bell from "../assets/bell.png";
import userIcon from '../assets/user.png';

function BottomBar() {
  const navigate = useNavigate();
  const [active, setActive] = useState("");  

  
  const handleNavigation = (item, path) => {
    setActive(item);
    navigate(path);
  };

  const handleStartNowChat = () => {
    navigate('/topastrologers');  
  };

  const  handleHome = () => {
    navigate('/astroHome');  
  };

  const  handleNotification = () => {
    navigate('/notification');  
  };

  const  handleProfile = () => {
    navigate('/profileScreen');  
  };



 
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1A1A2E] p-3 flex justify-around">
      <div
        onClick={handleHome}
        className={`nav-item flex flex-col items-center cursor-pointer text-white ${
          active === "home" ? "bg-purple-500 rounded-full p-2" : ""
        }`}
      >
        <img
          src={home}
          className="h-6 w-6"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      </div>

      <div
         onClick={handleStartNowChat}
        className={`nav-item flex flex-col items-center cursor-pointer text-white ${
          active === "communication" ? "bg-purple-500 rounded-full p-2" : ""
        }`}
      >
        <img
          src={communication}
          className="h-7 w-7"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      </div>

      <div
        onClick={handleNotification}
        className={`nav-item flex flex-col items-center cursor-pointer text-white ${
          active === "bell" ? "bg-purple-500 rounded-full p-2" : ""
        }`}
      >
        <img
          src={bell}
          className="h-8 w-8"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      </div>

      <div
        onClick={handleProfile}
        className={`nav-item flex flex-col items-center cursor-pointer text-white ${
          active === "user" ? "bg-purple-500 rounded-full p-2" : ""
        }`}
      >
        <img
          src={userIcon}
          className="h-6 w-6"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      </div>
    </div>
  );
}

export default BottomBar;
