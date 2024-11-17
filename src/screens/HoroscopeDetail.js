import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function HoroscopeDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { label, icon } = location.state || {}; // Retrieve data from the location's state

  const horoscopeDetails = {
    love: 90,
    business: 95,
    health: 60,
    overall: "November 14, 2024, brings Aries a powerful sense of fulfillment and purpose. Today, you’ll find yourself driven, energetic, and ready to tackle tasks that have been lingering on your to-do list. The planets are aligning to support you, making this a favorable day for taking steps toward long-term goals, especially in areas that require your natural confidence and enthusiasm.",
    lovePassion: "In relationships, whether you're single or attached, there's a special harmony in the air. If single, keep an eye out for potential romantic interest coming from a neighbor or relative's circle. Those in relationships can expect a supportive and affectionate day with their partners, with both sides working in harmony and cooperation. You’ll feel a deep connection with your loved one, and this is an excellent day to openly express appreciation and build future plans together.",
  };

  return (
    <div className="p-4 bg-[#0d0e20] min-h-screen text-white">
      {/* Header */}
      <div className="flex items-center space-x-4 py-2">
        <button className="text-white bg-[#2E2545] w-10 h-10 rounded-md" onClick={() => navigate(-1)}>
          &#x2190;
        </button>
        <h1 className="text-lg font-semibold">Daily Horoscope</h1>
      </div>

      {/* Horoscope Image and Name */}
      <div className="flex flex-col items-center mt-2">
        <img src={icon} alt={label} className="w-20 h-20" />
        <h2 className="text-2xl font-bold mt-2">{label}</h2>
      </div>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mt-4">
        <button className="px-4 py-1 bg-purple-500 rounded-lg">Today</button>
        <button className="px-4 py-1 bg-[#2E2545] rounded-lg">Tomorrow</button>
        <button className="px-4 py-1 bg-[#2E2545] rounded-lg">This week</button>
      </div>

      {/* Horoscope Details */}
      <div className="flex justify-around mt-4 text-center">
        <div>
          <p className="text-2xl font-bold text-red-500">{horoscopeDetails.love}%</p>
          <p className="text-sm">Love</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-green-500">{horoscopeDetails.business}%</p>
          <p className="text-sm">Business</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-purple-500">{horoscopeDetails.health}%</p>
          <p className="text-sm">Health</p>
        </div>
      </div>

      {/* Overall Horoscope */}
      <div className="mt-6">
        <h3 className=" inline-block   mr-40 text-lg text-gray-300  font-semibold mb-1 border-b-2 border-purple-500">
          Overall Horoscope
        </h3>
        <p className="text-sm text-gray-300 mt-1 text-start">
          {horoscopeDetails.overall}
        </p>
      </div>

      {/* Love & Passion */}
      <div className="mt-6">
        <h3 className=" inline-block  text-lg text-gray-300  mr-48  font-semibold mb-1 border-b-2 border-purple-500 ">
          Love & Passion 
        </h3>
        <p className="text-sm text-gray-300 mt-1 text-start">
          {horoscopeDetails.lovePassion}
        </p>
      </div>
    </div>
  );
}

export default HoroscopeDetail;
