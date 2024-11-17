import React from 'react';
import  astrologyIcon from "../assets/astrology-icon.png";
 
function AstroCircle() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-[#0d0e20] to-[#0a092b]">
      <div className="text-center">
 
        {/* <img
          src={astrologyIcon}
          className="h-32 w-32"
      
        /> */}

<img
  src={astrologyIcon}
  alt="Astrology Icon"
  className="h-32 w-32 sm:h-24 sm:w-24"
/>
<div className="text-2xl sm:text-xl font-bold text-[#b8b8ff] mt-6">Astro Circle</div>

         
        <div className="text-2xl font-bold text-[#b8b8ff] mt-6 ">Astro Circle</div>
      </div>
    </div>
  );
}

export default AstroCircle;



 