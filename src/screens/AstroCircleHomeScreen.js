import React from "react";
import woman from "../assets/woman.png";
import { useNavigate } from "react-router-dom";
import CategoryGrid from "./CategoryGrid";
import BottomBar from "./BottomBar";
import { Divider } from "antd";

function AstroCircleHomeScreen() {
  const navigate = useNavigate();


  const handleConnectAstrologers = () => {
    navigate("/topAstrologers");
  };

  const handleStartNowChat = (astroName) => {
    navigate('/chat', { state: { name: astroName } }); // Pass the astrologer's name in state
  };

  return (
    <div className="h-full bg-[#0d0e20] text-white p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <img
            src={woman}
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="block text-sm text-gray-300 text-left">Hello user</p>
            <p className="block font-semibold text-sm text-gray-300 ">
              welcome to astro chat
            </p>
          </div>
        </div>
        <button className="text-white text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 4a7 7 0 00-7 7 7 7 0 007 7 7 7 0 007-7 7 7 0 00-7-7z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35"
            />
          </svg>
        </button>
      </div>

      <div className="rounded-lg p-1 mb-4">
        <div
          className="bg-cover bg-center h-36 object-center object-contain rounded-lg relative"
          style={{
            backgroundImage:
              'url("https://www.rasikhgems.com/wp-content/uploads/2020/04/portfolio_1.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-15 rounded-lg"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-start pl-4">
            <p className="font-bold text-lg  text-black">Talk to astrology</p>
            <p className="text-sm mb-2 text-black font-semibold">
              Change your life as you like
            </p>
            <button
              className="bg-black px-4 py-1.5 rounded-md text-sm"
              onClick={handleConnectAstrologers}
            >
              Start now
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-row mt-4 relative ">
        <h1 className="text-lg font-bold ml-2 ">Horoscope</h1>
      </div>

      <div className="mt-2 flex flex-col ml-1">
        <CategoryGrid
          style={{ width: "24%" }}
          setActiveCategory={() => {}}
          activeCategory=""
        />
      </div>

 
      <div className="mb-6 mt-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold ml-1">Top astrologers</h3>
        </div>
        <div className="flex space-x-4 overflow-x-auto">
          {[
            { name: "Astro Vivek K", rating: 5.0, price: "$5/min" },
            { name: "Astro Jenny H", rating: 4.2, price: "$5/min" },
            { name: "Astro Vivek K", rating: 5.0, price: "$5/min" },
            { name: "Astro Jenny H", rating: 4.2, price: "$5/min" },
          ].map((astro) => (
            <div
              key={astro.name}
              className="bg-[#2E2545] rounded-lg p-4 text-center w-36"
            >
              <img
                src={woman}
                alt={astro.name}
                className="w-16 h-16 rounded-full mx-auto"
              />

              <p className="mt-2 font-bold text-sm text-white whitespace-nowrap">
                {astro.name}
              </p>
            
              <p className="text-xs text-gray-300">{astro.price}</p>
              <button
                className="bg-purple-500 text-white text-xs py-1 px-3 mt-2 rounded"
                onClick={() => handleStartNowChat(astro.name)} 
              >
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>

      <Divider />
      <BottomBar />
    </div>
  );
}

export default AstroCircleHomeScreen;
