// import React from 'react'
// import woman from "../assets/woman.png";
// import { useNavigate } from "react-router-dom";

// function TopAstrologers() {
//     const navigate = useNavigate();

//     const handleStartNowChat = () => {
//       navigate("/chat");
//     };
//   return (
   
//     <div className="flex space-x-4 overflow-x-auto">
//       {[
//         { name: "Astro Vivek K", rating: 5.0, price: "$5/min" },
//         { name: "Astro Jenny H", rating: 4.2, price: "$5/min" },
//         { name: "Astro Vivek K", rating: 5.0, price: "$5/min" },
//         { name: "Astro Jenny H", rating: 4.2, price: "$5/min" },
//         { name: "Astro Vivek K", rating: 5.0, price: "$5/min" },
//         { name: "Astro Jenny H", rating: 4.2, price: "$5/min" },
//         { name: "Astro Vivek K", rating: 5.0, price: "$5/min" },
//         { name: "Astro Jenny H", rating: 4.2, price: "$5/min" },
//         { name: "Astro Vivek K", rating: 5.0, price: "$5/min" },
//         { name: "Astro Jenny H", rating: 4.2, price: "$5/min" },
//         { name: "Astro Vivek K", rating: 5.0, price: "$5/min" },
//         { name: "Astro Jenny H", rating: 4.2, price: "$5/min" },
//         { name: "Astro Vivek K", rating: 5.0, price: "$5/min" },
//         { name: "Astro Jenny H", rating: 4.2, price: "$5/min" },
//       ].map((astro) => (
//         <div key={astro.name} className="bg-[#2E2545] rounded-lg p-4 text-center w-36">
// <img src={woman} alt={astro.name} className="w-16 h-16 rounded-full mx-auto" />

// <p className="mt-2 font-bold text-sm text-white whitespace-nowrap">
// {astro.name}
// </p>
//             {/* <p className="text-xs text-yellow-400">⭐ {astro.rating}</p> */}
// <p className="text-xs text-gray-300">{astro.price}</p>
// <button className="bg-purple-500 text-white text-xs py-1 px-3 mt-2 rounded"
// onClick={handleStartNowChat}
// >Connect</button>
// </div>

//       ))}
//     </div>
 

//   )
// }

// export default TopAstrologers


// import React from 'react';
// import woman from '../assets/woman.png';
// import { useNavigate } from 'react-router-dom';

// function TopAstrologers() {
//   const navigate = useNavigate();

//   const handleStartNowChat = () => {
//     navigate('/chat');
//   };

//   const goBack = () => {
//     navigate(-1);  
//   };
//   const astrologers = [
//     {
//       name: 'Brooklyn Simmons',
//       services: 'Vasthu consultation, Vedic Astrology',
//       languages: 'English, Hindi, Gujarati',
//       experience: '8 Years',
//       rating: 4.5,
//       charge: '$30/hour',
//     },
//     {
//       name: 'Cameron Williamson',
//       services: 'Life Astrology, Planetary Aspects',
//       languages: 'English, Hindi, Gujarati',
//       experience: '8 Years',
//       rating: 3.5,
//       charge: '$30/hour',
//     },
//     {
//       name: 'Leslie Alexander',
//       services: 'Health Astrology, Vedic Astrology',
//       languages: 'English, Hindi, Gujarati',
//       experience: '8 Years',
//       rating: 2.5,
//       charge: '$30/hour',
//     },
//     {
//       name: 'Savannah Nguyen',
//       services: 'Vasthu consultation, Vedic Astrology',
//       languages: 'English, Hindi, Gujarati',
//       experience: '8 Years',
//       rating: 4.0,
//       charge: '$30/hour',
//     },
//   ];

//   return (
//     <div className="p-4 bg-[#0d0e20] min-h-screen">
//         <div className='flex flex-row'>
//         <button className="   text-white bg-[#2E2545] w-10 h-10 rounded-md"
//         onClick={goBack}
//         >
//           &#x2190; 
//         </button>
//       <h1 className="block text-lg text-gray-300 text-left ml-4 mt-2">Astrologers</h1>
//         </div>
    
//       <div className="space-y-4 mt-5">
//         {astrologers.map((astro, index) => (
//           <div key={index} className="bg-[#2E2545] rounded-lg p-4 text-white flex items-center">
//             <img src={woman} alt={astro.name} className="w-16 h-16 rounded-full mr-4" />
//             <div className="flex-1">
//               <p className="font-bold text-sm">{astro.name}</p>
//               <p className="text-xs text-gray-300">{astro.services}</p>
//               <p className="text-xs text-gray-400">Languages: {astro.languages}</p>
//               <p className="text-xs text-gray-400">Experience: {astro.experience}</p>
           
        
//               {/* <p className="text-yellow-400 text-sm">⭐ {astro.rating}</p> */}
//               <p className="text-xs text-gray-300">{astro.charge}</p>
//               <button
//                 className="bg-purple-500 text-white text-sm py-1 px-10 mt-2 rounded"
//                 onClick={handleStartNowChat}
//               >
//                 Connect
//               </button>
//               </div>
//             </div>
          
//         ))}
//       </div>
//     </div>
//   );
// }

// export default TopAstrologers;


import React from 'react';
import woman from '../assets/woman.png';
import { useNavigate } from 'react-router-dom';

function TopAstrologers() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);  
  };

  const astrologers = [
    { name: 'Brooklyn Simmons', services: 'Vasthu consultation, Vedic Astrology', languages: 'English, Hindi, Gujarati', experience: '8 Years', rating: 4.5, charge: '$30/hour' },
    { name: 'Cameron Williamson', services: 'Life Astrology, Planetary Aspects', languages: 'English, Hindi, Gujarati', experience: '8 Years', rating: 3.5, charge: '$30/hour' },
    { name: 'Leslie Alexander', services: 'Health Astrology, Vedic Astrology', languages: 'English, Hindi, Gujarati', experience: '8 Years', rating: 2.5, charge: '$30/hour' },
    { name: 'Savannah Nguyen', services: 'Vasthu consultation, Vedic Astrology', languages: 'English, Hindi, Gujarati', experience: '8 Years', rating: 4.0, charge: '$30/hour' },
  ];

  // Function to navigate to ChatScreen with the selected astrologer's name
  const handleStartNowChat = (astroName) => {
    navigate('/chat', { state: { name: astroName } }); // Pass the astrologer's name in state
  };

  return (
    <div className="p-4 bg-[#0d0e20] min-h-screen">
      <div className='flex flex-row'>
        <button className="text-white bg-[#2E2545] w-10 h-10 rounded-md" onClick={goBack}>
          &#x2190; 
        </button>
        <h1 className="block text-lg text-gray-300 text-left ml-4 mt-2">Astrologers</h1>
      </div>
    
      <div className="space-y-4 mt-5">
        {astrologers.map((astro, index) => (
          <div key={index} className="bg-[#2E2545] rounded-lg p-4 text-white flex items-center">
            <img src={woman} alt={astro.name} className="w-16 h-16 rounded-full mr-4" />
            <div className="flex-1">
              <p className="font-bold text-sm">{astro.name}</p>
              <p className="text-xs text-gray-300">{astro.services}</p>
              <p className="text-xs text-gray-400">Languages: {astro.languages}</p>
              <p className="text-xs text-gray-400">Experience: {astro.experience}</p>
              <p className="text-xs text-gray-300">{astro.charge}</p>
              <button
                className="bg-purple-500 text-white text-sm py-1 px-10 mt-2 rounded"
                onClick={() => handleStartNowChat(astro.name)} // Pass the astrologer's name when navigating
              >
                Connect
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopAstrologers;
